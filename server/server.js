import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const requestedPort = process.env.PORT ? Number(process.env.PORT) : 5001;
// macOS AirTunes/AirPlay Receiver intercepts port 5000 with HTTP 403.
// If running on macOS with port 5000, automatically avoid the conflict by using 5001.
const PORT = (requestedPort === 5000 && process.platform === 'darwin') ? 5001 : requestedPort;

import { getGitHubData } from './githubController.js';

// Added: trust proxy for reverse proxies
const isTrustProxy = process.env.isTrustProxy === 'true';
app.set('trust proxy', isTrustProxy);

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:5174',
  ...(process.env.CORS_ORIGIN || '').split(','),
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ''
].filter(Boolean);

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow non-browser requests
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.log(`[CORS] Blocked request from: ${origin}`);
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

// GitHub API Route
app.get('/api/github', getGitHubData);

// Server-side fallback prompt (first-person voice)
const SYSTEM_PROMPT = [
  'You are Tarun Dayma speaking in first person (use I/me/my).',
  'I am a second-year Bachelor of Computer Applications (BCA) student based in Jaipur, Rajasthan, India.',
  'Answer concisely (<=120 words) in Markdown and make links clickable with [text](url).',
  'Focus on my actual projects (DetectX, HeatTrip, StoryForge, Notes App, Smart Expense Tracker, TicTacToe), my skills (Java, C, Python, JavaScript, React, TypeScript, Spring Boot, FastAPI, Machine Learning, SQL, Rust, Tauri, DSA), and my education.',
  'Do not claim professional experience, seniority, or degrees completed that I have not earned.',
  'If asked how to contact me, share my GitHub (https://github.com/tarunx47), LinkedIn (https://www.linkedin.com/in/tarundayma), or email (tarundayma54@gmail.com).',
  'Be friendly, honest, and helpful.',
].join(' ');


app.use(express.json());

function sanitizeInput(input) {
  return String(input).trim().slice(0, 1500);
}


// Add express-rate-limit middleware
const chatLimiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 60000, // 30s
  max: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 8, // default 8 requests per 30s window per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: (req) => {
    return {
      error: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil((req.rateLimit.resetTime - Date.now()) / 1000),
    };
  },
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json(options.message(req, res));
  },
});

// Apply rate limiter to chat endpoint
app.post('/api/chat', chatLimiter, async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error('[Error] GEMINI_API_KEY not configured');
      return res.status(500).json({ error: 'AI service not configured' });
    }

    // Validate body
    const { message, history = [] } = req.body || {};
    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid message' });
    }
    if (!Array.isArray(history)) {
      return res.status(400).json({ error: 'Invalid conversation history' });
    }

    const sanitizedMessage = sanitizeInput(message);
    if (!sanitizedMessage) {
      return res.status(400).json({ error: 'Invalid message' });
    }
    const sanitizedHistory = history
      .slice(-10)
      .filter((h) => h && (h.role === 'user' || h.role === 'model'))
      .map((h) => ({
        role: h.role,
        parts: [{ text: sanitizeInput(h.parts?.[0]?.text || '') }],
      }))
      .filter((h) => h.parts[0].text);

    // Build Gemini contents with user and past conversational turns
    const contents = [
      ...sanitizedHistory,
      { role: 'user', parts: [{ text: sanitizedMessage }] },
    ];

    const genAI = new GoogleGenerativeAI(apiKey);
    const primaryModel = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
    const fallbackModel = 'gemini-3.5-flash-lite';

    const generationConfig = {
      temperature: 0.7,
      topP: 0.9,
      topK: 40,
      maxOutputTokens: 400,
    };

    let result;
    try {
      const model = genAI.getGenerativeModel({
        model: primaryModel,
        systemInstruction: SYSTEM_PROMPT,
      });
      result = await model.generateContentStream({
        contents,
        generationConfig,
      });
    } catch (primaryErr) {
      console.warn(`[Gemini] Primary model ${primaryModel} failed (${primaryErr.message}), trying fallback ${fallbackModel}...`);
      const fallback = genAI.getGenerativeModel({
        model: fallbackModel,
        systemInstruction: SYSTEM_PROMPT,
      });
      result = await fallback.generateContentStream({
        contents,
        generationConfig,
      });
    }

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    let fullText = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullText += chunkText;
      res.write(JSON.stringify({ text: chunkText }) + '\n');
    }
    res.write(JSON.stringify({ done: true, fullText }) + '\n');
    res.end();
    console.log(`[Response] Generated ${fullText.length} chars`);
  } catch (error) {
    console.error('[Error]', error.message);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to generate response' });
    } else {
      res.write(JSON.stringify({ error: 'Stream interrupted' }) + '\n');
      res.end();
    }
  }
});





if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

export default app;
