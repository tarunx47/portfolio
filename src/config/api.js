// API Configuration
// In development, use the local Express server. In production, an unset value
// deliberately resolves to the same origin so Vercel can serve /api routes.
export const API_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? 'http://localhost:5001' : '');
