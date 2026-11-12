import storyForgeProjectPng from '@/assets/projects/storyforge.png';
import detectProjectPng from '@/assets/projects/detectx.png';
import heatTripProjectPng from '@/assets/projects/heatTrip.png';
import notesAppProjectPng from '@/assets/projects/notesApp.png';
import expenseTrackerProjectPng from '@/assets/projects/expense.png';
import ticTacToeProjectPng from '@/assets/projects/tictactoe.png';

const DETECTX_INFO = {
    id: 'detectx',
    title: 'DetectX — Fraud Detection Engine',
    tagline: 'Machine learning pipeline to flag suspicious financial transactions.',
    role: 'ML & Backend Developer',
    github: 'https://github.com/tarunx47/DetectX',
    deployLink: 'https://detect-x-dun.vercel.app/',
    image: detectProjectPng,
    description: 'DetectX is a financial transaction fraud detection engine. It combines a trained scikit-learn Random Forest inference pipeline with a high-throughput FastAPI backend and a modern React / TypeScript dashboard to evaluate transactions and flag fraudulent activity in real time.',
    keyFeatures: [
        {
            title: 'Fraud Prediction',
            description: 'Uses a trained Random Forest pipeline to classify transaction features and predict fraud probabilities.'
        },
        {
            title: 'FastAPI Backend',
            description: 'Exposes high-speed prediction and health endpoints built with FastAPI and Uvicorn.'
        },
        {
            title: 'Data Analysis Pipeline',
            description: 'Includes data inspection, feature engineering, and evaluation for synthetic financial transaction datasets.'
        },
        {
            title: 'Interactive Dashboard',
            description: 'Connects the prediction API to a responsive React and TypeScript user interface for live inspection.'
        }
    ],
    roleDetails: 'I developed the machine learning pipeline, dataset analysis, and FastAPI backend endpoints, and integrated the model API with the frontend.',
    technicalHighlights: 'Python, scikit-learn, Random Forest, FastAPI, Uvicorn, React, TypeScript, and Tailwind CSS.',
    impact: 'Demonstrates an end-to-end machine learning engineering workflow from model training and evaluation to real-time serving through an API.'
};

const HEATTRIP_INFO = {
    id: 'heattrip',
    title: 'HeatTrip — Heat-Aware Travel Planner',
    tagline: 'Plan routes and outdoor itineraries with hyperlocal heat conditions in mind.',
    role: 'Java Backend Developer',
    github: 'https://github.com/tarunx47/HeatTrip',
    deployLink: '',
    image: heatTripProjectPng,
    description: 'HeatTrip is an environmental travel planning application built as an official MVP submission for the FortyGuard Hackathon. It assists travelers in deciding where and when to travel by analyzing and optimizing itineraries around hyperlocal heat exposure data.',
    keyFeatures: [
        {
            title: 'Hyperlocal Heat Analysis',
            description: 'Incorporates environmental heat exposure metrics to guide outdoor activity planning.'
        },
        {
            title: 'Interactive Map Routes',
            description: 'Displays route and waypoint visualizations using map-based geospatial integrations.'
        },
        {
            title: 'Itinerary Planning',
            description: 'Optimizes travel schedules and timings to minimize prolonged exposure to peak heat.'
        },
        {
            title: 'Spring Boot Backend',
            description: 'Leverages Java Spring Boot architecture with REST endpoints to serve location data and itineraries.'
        }
    ],
    roleDetails: 'I worked on the Java backend application logic, environmental data handling, and travel route coordination.',
    technicalHighlights: 'Java, Spring Boot, REST APIs, Maven, HTML, CSS, and JavaScript.',
    impact: 'Explores how environmental data and temperature intelligence can make travel planning safer and more practical.'
};

const STORYFORGE_INFO = {
    id: 'storyforge',
    title: 'StoryForge — Adaptive Novel Discovery',
    tagline: 'Discover and explore stories with web search, scraping, and AI summaries.',
    role: 'Full-Stack Developer',
    github: 'https://github.com/tarunx47/adaptive-novel-reader',
    deployLink: '',
    image: storyForgeProjectPng,
    description: 'StoryForge (Adaptive Novel Reader) is a novel discovery platform designed to help readers find and explore stories. It aggregates novel information from web sources using SerpApi, scrapes content using Bright Data, and generates concise summaries with the Google Gemini API.',
    keyFeatures: [
        {
            title: 'Story Discovery Search',
            description: 'Enables querying stories by title, author, or genre using SerpApi search integration.'
        },
        {
            title: 'Web Scraping Integration',
            description: 'Employs Bright Data scraping to retrieve novel content and chapter information from web links.'
        },
        {
            title: 'AI Summarization',
            description: 'Integrates the Google Gemini API to create concise story overviews and chapter previews.'
        },
        {
            title: 'Responsive Reading UI',
            description: 'A clean, reading-focused interface built with React, TypeScript, and Tailwind CSS.'
        }
    ],
    roleDetails: 'I designed the novel discovery workflow, integrated search and scraping APIs, and implemented the React frontend.',
    technicalHighlights: 'React, TypeScript, Tailwind CSS, Bright Data, SerpApi, and Google Gemini API.',
    impact: 'Simplifies novel research and discovery by consolidating search, content extraction, and AI summarization in one place.'
};

const NOTES_APP_INFO = {
    id: 'notes-app',
    title: 'Notes App — Local-First Encrypted Desktop Notes',
    tagline: 'Cross-platform desktop notes with SQLite storage and encrypted vault backups.',
    role: 'Full-Stack Desktop Developer',
    github: 'https://github.com/tarunx47/note-app',
    deployLink: '',
    image: notesAppProjectPng,
    description: 'A modern, local-first cross-platform desktop notes application built with React, TypeScript, Tauri v2, and Rust. It provides a secure, privacy-first note-taking environment with local SQLite storage and password-protected encrypted vault exports (.nvault).',
    keyFeatures: [
        {
            title: 'Local-First Architecture',
            description: 'Operates completely offline with zero mandatory cloud dependencies, ensuring complete user privacy.'
        },
        {
            title: 'Encrypted Vault Backups',
            description: 'Allows exporting and restoring password-encrypted vault files (.nvault) using PBKDF2 key derivation and SHA-256.'
        },
        {
            title: 'Tauri & Rust Backend',
            description: 'Lightweight desktop runtime powered by Tauri v2 and Rust for minimal memory footprint and native performance.'
        },
        {
            title: 'Responsive Modern UI',
            description: 'Built with React 19, TypeScript, and Tailwind CSS with fast search, categorization, and markdown notes.'
        }
    ],
    roleDetails: 'I built the React and TypeScript frontend, configured Tauri v2 desktop integration, and implemented local storage and encrypted backup logic.',
    technicalHighlights: 'React 19, TypeScript, Tauri v2, Rust, SQLite, Tailwind CSS, and PBKDF2/Crypto primitives.',
    impact: 'Delivers a high-performance, private desktop note-taking experience with reliable offline storage and encrypted portability.'
};

const SMART_EXPENSE_INFO = {
    id: 'smart-expense-tracker',
    title: 'Smart Expense Tracker — Java CLI',
    tagline: 'A Java command-line application for structured personal expense tracking.',
    role: 'Java Developer',
    github: 'https://github.com/tarunx47/SmartExpenseTracker',
    deployLink: '',
    image: expenseTrackerProjectPng,
    description: 'Smart Expense Tracker is a command-line interface application built in Java for recording and managing personal expenses. It emphasizes clean object-oriented design, persistent file storage, and financial reporting.',
    keyFeatures: [
        {
            title: 'Expense Management (CRUD)',
            description: 'Allows users to add, update, delete, and list expense entries with amounts, dates, and categories.'
        },
        {
            title: 'Category Filtering & Sorting',
            description: 'Provides flexible filtering by category, date range, and sorting by spending amount.'
        },
        {
            title: 'Persistent File Storage',
            description: 'Saves and loads transaction records reliably from local storage files across sessions.'
        },
        {
            title: 'Summary Reports',
            description: 'Generates formatted spending summaries to help users monitor and analyze budgets.'
        }
    ],
    roleDetails: 'I designed the application architecture, implemented OOP models, console UI, and file storage mechanisms in Java.',
    technicalHighlights: 'Java, Object-Oriented Programming (OOP), File I/O, Collections Framework, and Git.',
    impact: 'A practical, robust demonstration of core Java programming concepts and file-based data persistence.'
};

const TICTACTOE_INFO = {
    id: 'tictactoe',
    title: 'TicTacToe — Java Swing Game',
    tagline: 'Classic two-player desktop game with interactive Java Swing GUI.',
    role: 'Java Developer',
    github: 'https://github.com/tarunx47',
    deployLink: '',
    image: ticTacToeProjectPng,
    description: 'A classic two-player desktop Tic Tac Toe game built using Java Swing and AWT. It features custom event handling, turn switching, interactive board rendering, and win/draw condition evaluations.',
    keyFeatures: [
        {
            title: 'Graphical Interface',
            description: 'Built with Java Swing JFrame, GridLayout, and interactive JButton matrix for a responsive desktop interface.'
        },
        {
            title: 'Turn Management',
            description: 'Tracks player turns (X and O) seamlessly with dynamic visual feedback.'
        },
        {
            title: 'Game Logic & Evaluation',
            description: 'Evaluates rows, columns, and diagonals after each turn to determine winners or draw states.'
        },
        {
            title: 'Clean Java Structure',
            description: 'Structured using clean Java GUI patterns and event-driven programming.'
        }
    ],
    roleDetails: 'I implemented the game logic, UI components, and action event listeners in Java Swing.',
    technicalHighlights: 'Java, Swing (JFrame, JButton, GridLayout), AWT, and Event-Driven Programming.',
    impact: 'Demonstrates foundational GUI development and game state management in standard Java.'
};

export const PROJECTS_INFO = {
    'detectx': DETECTX_INFO,
    'heattrip': HEATTRIP_INFO,
    'storyforge': STORYFORGE_INFO,
    'notes-app': NOTES_APP_INFO,
    'smart-expense-tracker': SMART_EXPENSE_INFO,
    'tictactoe': TICTACTOE_INFO,

    // Aliases to avoid any broken link:
    'head-trip': HEATTRIP_INFO,
    'story-forge': STORYFORGE_INFO,
    'SmartExpenseTracker': SMART_EXPENSE_INFO,
};
