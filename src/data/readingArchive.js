// Add personal reading entries here when they are ready to publish.
// Keep the archive empty until a real entry is available.
// Example fields: id, title, cover, author, status, description,
// personalInsights, rating, and readingProgress.
export const NOVELS = [];

export const getNovelById = (id) => NOVELS.find((novel) => novel.id === id);
