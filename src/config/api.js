// API Configuration
// In development: defaults to localhost:5001 (avoids macOS AirPlay port 5000 collision)
// In production: uses VITE_API_URL from environment

export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
