// server/readsController.js
// Tarun Dayma's Personal Reading Archive endpoint.
// Serves verified reading entries and thoughts without external blog API dependencies.

const NOVELS = [
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
        review: "A compelling exploration of duality, mortality, and identity. The narrative constructs a tense dynamic between destiny and human agency, using psychological depth rather than pure spectacle to drive the stakes forward.",
        keyInsights: [
            "Dual Identity as a narrative engine: Exploring moral ambiguity through a counterpart who mirrors the protagonist's repressed instincts.",
            "Atmospheric World-Building: Grounding supernatural mechanics in consistent internal constraints heightens genuine suspense.",
            "Psychological Tension over raw conflict: The most memorable turning points stem from internal ethical dilemmas rather than sheer power escalations.",
        ],
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
    },
];

export const getReadsData = async (req, res) => {
    try {
        res.json({
            stats: {
                totalTracked: 2,
                currentlyReading: 2,
                completed: 0,
                statusNote: "Reading list maintained manually as chapters and titles are explored.",
            },
            reads: NOVELS,
        });
    } catch (error) {
        console.error('[Reads Error]', error.message);
        res.status(500).json({ error: 'Failed to fetch Reading Archive data' });
    }
};
