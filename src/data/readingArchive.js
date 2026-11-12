// src/data/readingArchive.js
// Maintainable static data for Tarun Dayma's personal Reading Archive.
// Strictly avoids invented statistics, unverified authors, or fabricated completions.

export const READING_STATS = {
    totalTracked: 2,
    currentlyReading: 2,
    completed: 0, // In progress — not assuming completed status
    favoritesCount: 2,
    statusNote: "Reading list maintained manually as chapters and titles are explored.",
};

export const NOVELS = [
    {
        id: "death-my-twin",
        title: "Death, My Twin",
        originalTitle: null,
        author: "Web Novel (Unspecified)",
        status: "Currently Reading",
        genres: ["Dark Fantasy", "Supernatural", "Mystery", "Psychological"],
        currentChapter: "Ongoing",
        rating: 4.5,
        favorite: true,
        tags: ["Dark Fantasy", "Duality", "Psychological", "Ongoing"],
        review: "A compelling exploration of duality, mortality, and identity. The narrative constructs a tense dynamic between destiny and human agency, using psychological depth rather than pure spectacle to drive the stakes forward. The thematic resonance between the protagonist and their dark counterpart makes each arc feel earned and unpredictable.",
        keyInsights: [
            "Dual Identity as a narrative engine: Exploring moral ambiguity through a counterpart who mirrors the protagonist's repressed instincts.",
            "Atmospheric World-Building: Grounding supernatural mechanics in consistent internal constraints heightens genuine suspense.",
            "Psychological Tension over raw conflict: The most memorable turning points stem from internal ethical dilemmas rather than sheer power escalations.",
        ],
        quotes: [
            "Shadows do not betray the light; they define where it ends and where courage begins."
        ],
        coverGradient: "from-zinc-900 via-neutral-900 to-stone-900",
        accentColor: "#e53935", // red accent
    },
    {
        id: "rise-of-the-warriors",
        title: "Rise of the Warriors",
        originalTitle: null,
        author: "Web Novel (Unspecified)",
        status: "Currently Reading",
        genres: ["Action", "Adventure", "Progression", "Tactics"],
        currentChapter: "Ongoing",
        rating: 4.0,
        favorite: true,
        tags: ["Progression", "Tactics", "Martial Journey", "Ongoing"],
        review: "An engaging progression narrative built on discipline, tactical camaraderie, and deliberate skill cultivation. Rather than relying on unearned power surges, the progression feels satisfying because triumphs are tied to methodical preparation and collective coordination under pressure.",
        keyInsights: [
            "Deliberate Skill Cultivation: Progression systems work best when power gains demand real sacrifice, tactical experimentation, and incremental mastery.",
            "Synergy over Individualism: Group strategy and complimentary role specialization create richer conflict dynamics than solitary lone-wolf archetypes.",
            "Pacing in Long-Form Storytelling: Balancing quiet training intervals with high-stakes set pieces keeps reader momentum sustainable across large chapter counts.",
        ],
        quotes: [
            "Victory is never an accident; it is the compounding of thousand unnoticed drills."
        ],
        coverGradient: "from-slate-900 via-stone-900 to-zinc-900",
        accentColor: "#3b82f6", // blue accent
    },
];

export const GENERAL_INSIGHTS = [
    {
        id: "deliberate-progression",
        title: "Deliberate Progression & The Architecture of Growth",
        category: "Discipline & Systems",
        summary: "How structured progression systems in serial novels mirror software engineering: decomposing monumental milestones into testable, daily feedback loops.",
        detail: "When a character ascends through ranks in progression fiction, satisfying narratives avoid arbitrary power spikes. The protagonist isolates a weakness, devises a training regimen, confronts failure, adjusts technique, and consolidates the lesson. This deliberate feedback loop is identical to mastering programming primitives or optimizing a backend pipeline: incremental gains compounded consistently outperform sporadic bursts of heroic effort.",
    },
    {
        id: "narrative-constraints",
        title: "World-Building with Immutable Constraints",
        category: "Systems Thinking",
        summary: "Fictional worlds and magic systems are most captivating when rules are strict and boundaries clear. Constraints foster ingenuity in fiction just as in distributed architecture.",
        detail: "An all-powerful protagonist solves problems through brute force, draining narrative tension. But when abilities carry strict physical or metaphysical costs, every confrontation turns into a high-stakes puzzle. In software systems, resource constraints—CPU, memory, bandwidth, network latency—force architects toward elegant decoupling and resilient design.",
    },
    {
        id: "duality-and-ethics",
        title: "Duality and Moral Ambiguity in Character Design",
        category: "Themes & Characterization",
        summary: "The most memorable plot trajectories arise not from overwhelming external odds, but from the protagonist wrestling with irreconcilable internal values.",
        detail: "External antagonists provide deadlines, but internal dilemmas provide heart. When a story introduces a counterpart who embodies what the protagonist could become under darker circumstances, the struggle shifts from survival to self-definition.",
    },
];

export const READING_STATUS_FILTERS = [
    { id: "all", label: "All Titles" },
    { id: "reading", label: "Currently Reading" },
    { id: "completed", label: "Completed" },
    { id: "favorites", label: "Favorites" },
];

export const getNovelById = (id) => {
    return NOVELS.find((novel) => novel.id === id);
};
