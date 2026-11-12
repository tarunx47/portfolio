import storyForgeProjectPng from '@/assets/projects/storyforge.png';
import detectProjectPng from '@/assets/projects/detectx.png';
import heatTripProjectPng from '@/assets/projects/heatTrip.png';
import notesAppProjectPng from '@/assets/projects/notesApp.png';
import expenseTrackerProjectPng from '@/assets/projects/expense.png';
import ticTacToeProjectPng from '@/assets/projects/tictactoe.png';

export const PROJECTS = [
    {
        id: 'detectx',
        no: '1',
        topicName: 'DetectX',
        discription: 'DetectX is a financial fraud detection engine built with an optimized scikit-learn Random Forest inference pipeline, high-throughput FastAPI backend, and modern React 19 / TypeScript dashboard to evaluate transactions and flag fraud in real time.',
        techStack: ['Python', 'React', 'TypeScript', 'JavaScript'],
        github: 'https://github.com/tarunx47/DetectX',
        deployLink: 'https://detect-x-dun.vercel.app/',
        readmore: 'available',
        image: detectProjectPng,
    },
    {
        id: 'heattrip',
        no: '2',
        topicName: 'HeatTrip',
        discription: 'FortyGuard Hackathon submission MVP. HeatTrip helps travelers decide where and when to go by optimizing itineraries and outdoor activity routes around hyperlocal heat exposure data.',
        techStack: ['Java', 'Springboot', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/tarunx47/HeatTrip',
        deployLink: '',
        readmore: 'available',
        image: heatTripProjectPng,
    },
    {
        id: 'storyforge',
        no: '3',
        topicName: 'StoryForge',
        discription: 'A novel discovery and reading web application featuring story search via SerpApi and web scraping with Bright Data to retrieve novel content and generate AI summaries.',
        techStack: ['React', 'TypeScript', 'TailwindCss', 'Gemini'],
        github: 'https://github.com/tarunx47/adaptive-novel-reader',
        deployLink: '',
        readmore: 'available',
        image: storyForgeProjectPng,
    },
    {
        id: 'notes-app',
        no: '4',
        topicName: 'Notes App',
        discription: 'A secure, local-first cross-platform desktop notes application built with React, TypeScript, Tauri, and Rust. Features local SQLite storage, privacy-first note taking, and local encrypted vault backup functionality (.nvault).',
        techStack: ['React', 'TypeScript', 'TailwindCss'],
        github: 'https://github.com/tarunx47/note-app',
        deployLink: '',
        readmore: 'available',
        image: notesAppProjectPng,
    },
    {
        id: 'smart-expense-tracker',
        no: '5',
        topicName: 'Smart Expense Tracker',
        discription: 'A Java command-line interface (CLI) application for personal expense tracking. Supports structured persistent file storage, expense categorization, advanced filtering, sorting, and summary reporting.',
        techStack: ['Java', 'Git'],
        github: 'https://github.com/tarunx47/SmartExpenseTracker',
        deployLink: '',
        readmore: 'available',
        image: expenseTrackerProjectPng,
    },
    {
        id: 'tictactoe',
        no: '6',
        topicName: 'TicTacToe',
        discription: 'An interactive classic two-player Tic Tac Toe desktop game built with Java. Features custom event handling, turn tracking, win-state detection, and a graphical interface built with Java Swing and AWT.',
        techStack: ['Java'],
        github: 'https://github.com/tarunx47',
        deployLink: '',
        readmore: 'available',
        image: ticTacToeProjectPng,
    },
];
