import logo from '@/assets/logo.png';

export const about = {
    name: "Tarun Dayma",
    role: "Developer & BCA Student",
    location: "Jaipur, Rajasthan, India",
    education: "Bachelor of Computer Applications (BCA), currently pursuing second year",
    description: "Tarun Dayma is a developer and second-year Bachelor of Computer Applications (BCA) student based in Jaipur, Rajasthan, India. He builds clean, reliable software with a focus on smart logic, modern web interfaces, and backend systems.",
};

export const heroConfig = {
    name: "Tarun's Portfolio Assistant",
    avatar: logo,
    skills: [
        { name: 'Java' },
        { name: 'C' },
        { name: 'Python' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Spring Boot' },
        { name: 'FastAPI' },
        { name: 'Machine Learning' },
        { name: 'SQL' },
        { name: 'Rust' },
        { name: 'Tauri' },
        { name: 'Data Structures and Algorithms' },
    ],
};

export const education = [
    {
        degree: 'Bachelor of Computer Applications (BCA)',
        status: 'Currently pursuing second year',
        location: 'Jaipur, Rajasthan, India',
    },
];

export const achievements = [
    {
        title: 'Hackathon 2K26: Byte Brawl 3.0',
        role: 'Participant (Team Spider coder)',
        organization: 'Sri Balaji Shiksha Samiti (SBCET Jaipur)',
        year: '2026',
    },
    {
        title: 'Java Foundations: Core Java Workshop',
        organization: 'Core Java & Programming Fundamentals',
        year: '2026',
    },
];

export const projects = [
    {
        title: 'DetectX',
        description: 'Financial fraud detection engine built with an optimized scikit-learn Random Forest inference pipeline, high-throughput FastAPI backend, and React/TypeScript dashboard.',
        github: 'https://github.com/tarunx47/DetectX',
        live: 'https://detect-x-dun.vercel.app/',
    },
    {
        title: 'HeatTrip',
        description: 'Heat-aware travel planning application optimizing itineraries and outdoor activity routes around hyperlocal heat exposure data. Built with Java Spring Boot for the FortyGuard Hackathon.',
        github: 'https://github.com/tarunx47/HeatTrip',
    },
    {
        title: 'StoryForge',
        description: 'Novel discovery and reading web application with SerpApi search, Bright Data web scraping, and Gemini API summaries built using React and TypeScript.',
        github: 'https://github.com/tarunx47/adaptive-novel-reader',
    },
    {
        title: 'Notes App',
        description: 'Cross-platform desktop note-taking application with local SQLite storage, privacy-first offline operation, and password-protected encrypted vault backups (.nvault) built with React, TypeScript, Tauri, and Rust.',
        github: 'https://github.com/tarunx47/note-app',
    },
    {
        title: 'Smart Expense Tracker',
        description: 'Java CLI application for managing personal expenses with persistent file storage, category filtering, sorting, and spending reports.',
        github: 'https://github.com/tarunx47/SmartExpenseTracker',
    },
    {
        title: 'TicTacToe',
        description: 'Interactive desktop game with graphical board rendering, event handling, and turn logic built with Java Swing and AWT.',
        github: 'https://github.com/tarunx47',
    },
];

export const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/tarunx47' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/tarundayma' },
    { name: 'Email', href: 'mailto:tarundayma54@gmail.com' },
];

function generateSystemPrompt() {
    const skillNames = heroConfig.skills.map((s) => s.name).join(', ');
    const projectsText = projects
        .map((p) => `${p.title}: ${p.description}${p.github ? ` [GitHub](${p.github})` : ''}${p.live ? ` [Live Demo](${p.live})` : ''}`)
        .join('\n- ');
    const achievementsText = achievements
        .map((a) => `${a.title} (${a.organization || a.year})`)
        .join('\n- ');
    const socialLinksText = socialLinks.map((l) => `${l.name}: [${l.name}](${l.href})`).join('\n- ');

    return `You are Tarun Dayma's Portfolio Assistant representing Tarun Dayma.

ABOUT TARUN:
- Name: Tarun Dayma
- Location: Jaipur, Rajasthan, India
- Education: Bachelor of Computer Applications (BCA), currently pursuing second year.
- Note: Tarun is currently a student. Do not claim past employment, seniority, completed degrees, or qualifications not provided here.

TECHNICAL INTERESTS & SKILLS:
${skillNames}

ACTUAL PROJECTS:
- ${projectsText}

VERIFIED ACHIEVEMENTS:
- ${achievementsText}

CONTACT & SOCIAL LINKS:
- ${socialLinksText}

RESPONSE RULES:
- Answer in first person as Tarun Dayma's assistant or on behalf of Tarun
- Keep responses concise (under 120 words)
- Use markdown formatting and make all links clickable using [text](url)
- Only cite Tarun's actual projects, education, and verified achievements
- Never fabricate past jobs, metrics, or completed degrees
- Be friendly, humble, and helpful.`;
}

export const systemPrompt = generateSystemPrompt();

export const chatSuggestions = [
    'What technologies do you work with?',
    'Tell me about your projects (DetectX, HeatTrip, etc.)',
    'What are you currently studying?',
    'Tell me about the Notes App with Tauri & Rust',
    'How can I get in touch with you?',
];
