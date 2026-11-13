import { useState, useEffect } from 'react';

export function useDarkMode() {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage first, default to the portfolio's cinematic dark theme.
        const saved = localStorage.getItem('darkMode');
        return saved ? JSON.parse(saved) : true;
    });

    useEffect(() => {
        // Apply the theme class on mount and when isDark changes
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', JSON.stringify(isDark));
    }, [isDark]);

    const toggle = () => {
        setIsDark(prev => !prev);
    };

    return { isDark, toggle };
}
