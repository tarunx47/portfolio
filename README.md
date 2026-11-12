# 🚀 Tarun Dayma's Developer Portfolio

> **Considered interfaces, useful systems, and work in progress.**

Welcome to my developer portfolio! This application showcases my software projects, technical interests, verified achievements, and an interactive AI assistant powered by Google Gemini.

---

## 🎯 What's Inside?

### 💬 AI-Powered Portfolio Assistant
The floating chatbot (powered by **Google Gemini**) acts as an interactive assistant. Visitors can ask questions about my projects, education, technical skills, and background.

### 🌓 Dark / Light Mode
Carefully styled theme toggle supporting both aesthetic dark mode and clean light mode.

### ✨ Polished Interaction & Navigation
Smooth section transitions, responsive layout, bento grid showcases, and full-screen certificate previews.

### 📊 Real-Time GitHub Contributions
Integrated GitHub activity heatmap dynamically visualizing commit history via GraphQL and fallback endpoints.

---

## 🛠️ Built With

### Frontend
- **React 18** + **Vite**
- **Tailwind CSS**
- **React Router**
- **Lucide React** (icons)
- **TanStack React Query**
- **React Activity Calendar**

### Backend
- **Express.js** (Node.js)
- **Google Generative AI SDK** (Gemini 2.0 Flash)
- **Rate-limited streaming chat endpoint**
- **GitHub GraphQL contributions integration**

---

## 🎪 Featured Projects

| Project | Description | Stack | Links |
|---------|-------------|-------|-------|
| **DetectX** | Financial fraud detection engine with Random Forest inference pipeline & real-time dashboard | Python, FastAPI, scikit-learn, React, TypeScript | [GitHub](https://github.com/tarunx47/DetectX) • [Live Demo](https://detect-x-dun.vercel.app/) |
| **HeatTrip** | Heat-aware travel planner optimizing itineraries around hyperlocal heat exposure data | Java, Spring Boot, REST APIs, HTML/CSS/JS | [GitHub](https://github.com/tarunx47/HeatTrip) |
| **StoryForge** | Novel discovery platform featuring SerpApi search, Bright Data scraping, and Gemini AI summaries | React, TypeScript, Tailwind CSS, SerpApi, Bright Data | [GitHub](https://github.com/tarunx47/adaptive-novel-reader) |
| **Notes App** | Local-first cross-platform desktop notes with encrypted vault backups (.nvault) | React, TypeScript, Tauri v2, Rust, SQLite | [GitHub](https://github.com/tarunx47/note-app) |
| **Smart Expense Tracker** | Java CLI application for structured expense logging, category filtering, and exportable reports | Java, File I/O, OOP, Collections | [GitHub](https://github.com/tarunx47/SmartExpenseTracker) |
| **TicTacToe** | Classic two-player game with graphical board rendering and turn management | Java, Java Swing, AWT | [GitHub](https://github.com/tarunx47) |

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or bun

### 1. Installation
```bash
# Clone the repository
git clone https://github.com/tarunx47/Portfolio.git
cd Portfolio

# Install frontend dependencies
npm install

# Install backend dependencies
cd server && npm install && cd ..
```

### 2. Environment Configuration
Create `.env` in the root and in `server/`:

```bash
# Frontend (.env)
VITE_API_URL=http://localhost:5000

# Backend (server/.env)
VITE_GEMINI_API_KEY=your_gemini_api_key_here
GITHUB_TOKEN=your_optional_github_token_here
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

### 3. Running Locally
```bash
# Terminal 1: Frontend (port 5173)
npm run dev

# Terminal 2: Backend (port 5000)
cd server && npm start
```

### 4. Build
```bash
npm run build
```

---

## 📜 About Me

- **Name:** Tarun Dayma
- **Location:** Jaipur, Rajasthan, India
- **Education:** Bachelor of Computer Applications (BCA), currently pursuing second year
- **Interests:** Java, Python, C, JavaScript, React, TypeScript, Spring Boot, FastAPI, Machine Learning, SQL, Rust, Tauri, Data Structures and Algorithms

---

<div align="center">

### Developed by Tarun Dayma

[GitHub](https://github.com/tarunx47) • [LinkedIn](https://www.linkedin.com/in/tarundayma) • [Email](mailto:tarundayma54@gmail.com)

© 2026 Tarun Dayma. All rights reserved.

</div>
