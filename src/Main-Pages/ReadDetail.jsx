import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, SunMedium, Moon, BookOpen, Star, Sparkles, Quote } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { onhoverBlackWhite } from "@/lib/default_Tailwind";
import { getNovelById } from '@/data/readingArchive.js';

export const ReadDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const { isDark, toggle: toggleMode } = useDarkMode();

    // Check location state or fallback to local static data
    const [novel, setNovel] = useState(() => {
        if (location.state?.post) return location.state.post;
        return getNovelById(id) || null;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        if (!novel && id) {
            const found = getNovelById(id);
            if (found) {
                setNovel(found);
            }
        }
    }, [id, novel]);

    if (!novel) {
        return (
            <div className={`min-h-screen w-full flex flex-col items-center justify-center gap-4 transition-colors ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
                <h2 className="text-2xl font-bold">Title not found in Reading Archive</h2>
                <p className="text-sm text-slate-500 max-w-sm text-center">
                    The requested novel record does not exist or has not yet been logged in the archive.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 dark:bg-white dark:text-black text-white rounded-full transition-all hover:scale-105"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Portfolio
                </button>
            </div>
        );
    }

    const displayGenres = novel.genres || novel.tags || [];
    const keyInsights = novel.keyInsights || [];
    const quotes = novel.quotes || [];

    return (
        <div className={`min-h-screen w-full transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'} font-light overflow-x-hidden pt-20 pb-20`}>
            {/* Dark mode toggle */}
            <button
                className={`fixed z-50 right-4 top-4 md:right-10 md:top-5 p-2 shadow-md rounded-lg ${onhoverBlackWhite}`}
                onClick={toggleMode}
                aria-label="Toggle theme"
            >
                {isDark ? <SunMedium strokeWidth={1.5} /> : <Moon strokeWidth={1.5} />}
            </button>

            <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col gap-10">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 self-start text-sm md:text-base transition-all hover:opacity-100 opacity-70 hover:-translate-x-1"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Reading Archive
                </button>

                {/* Hero Gradient Header */}
                <div className={`w-full rounded-3xl p-8 md:p-12 bg-gradient-to-br ${novel.coverGradient || 'from-zinc-900 via-stone-900 to-black'} text-white border border-white/10 shadow-xl relative overflow-hidden`}>
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur border border-white/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                {novel.status || "Currently Reading"}
                            </span>

                            {novel.rating && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                                    {novel.rating.toFixed(1)} / 5.0
                                </span>
                            )}

                            {novel.currentChapter && (
                                <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-white/90 border border-white/10">
                                    Chapter: {novel.currentChapter}
                                </span>
                            )}
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mt-2">
                            {novel.title}
                        </h1>

                        {novel.originalTitle && (
                            <p className="text-base text-white/70 italic">
                                Original: {novel.originalTitle}
                            </p>
                        )}

                        {novel.author && (
                            <p className="text-sm text-white/80 flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 opacity-70" /> {novel.author}
                            </p>
                        )}
                    </div>
                </div>

                {/* Genre Tags */}
                {displayGenres.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {displayGenres.map((genre, index) => (
                            <span
                                key={index}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-medium ${
                                    isDark 
                                        ? 'bg-white/5 text-zinc-300 border border-white/10' 
                                        : 'bg-gray-100 text-slate-700 border border-gray-200'
                                }`}
                            >
                                #{genre}
                            </span>
                        ))}
                    </div>
                )}

                {/* Personal Review Section */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Personal Review & Reaction
                    </h2>
                    <div className={`p-6 md:p-8 rounded-3xl border leading-relaxed text-base md:text-lg ${
                        isDark 
                            ? 'bg-[#0f1117] border-white/10 text-zinc-300' 
                            : 'bg-gray-50 border-gray-200 text-slate-700'
                    }`}>
                        {novel.review || novel.content || "Review in progress."}
                    </div>
                </div>

                {/* Key Insights & Takeaways */}
                {keyInsights.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                            <Sparkles className="w-5 h-5 text-amber-500" />
                            Key Insights & Themes
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {keyInsights.map((insight, idx) => (
                                <div
                                    key={idx}
                                    className={`p-5 rounded-2xl border flex items-start gap-3.5 ${
                                        isDark 
                                            ? 'bg-white/[0.02] border-white/10 text-zinc-300' 
                                            : 'bg-white border-gray-200 text-slate-700 shadow-sm'
                                    }`}
                                >
                                    <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500/10 text-blue-500 font-mono text-xs flex items-center justify-center font-bold">
                                        {idx + 1}
                                    </span>
                                    <p className="text-sm md:text-base leading-relaxed">
                                        {insight}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Memorable Quotes / Passages */}
                {quotes.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white">
                            <Quote className="w-5 h-5 text-blue-500" />
                            Memorable Quote
                        </div>

                        {quotes.map((q, idx) => (
                            <blockquote
                                key={idx}
                                className={`p-6 rounded-2xl border-l-4 border-blue-500 italic text-base md:text-lg ${
                                    isDark ? 'bg-white/[0.02] text-zinc-300' : 'bg-gray-50 text-slate-700'
                                }`}
                            >
                                &ldquo;{q}&rdquo;
                            </blockquote>
                        ))}
                    </div>
                )}

                {/* Bottom Back Button */}
                <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-sm md:text-base transition-all hover:opacity-100 opacity-70 hover:-translate-x-1"
                    >
                        <ArrowLeft className="w-4 h-4" /> Back to Reading Archive
                    </button>
                    <span className="text-xs text-slate-400 dark:text-zinc-500 font-mono">
                        Archive Entry: {novel.id}
                    </span>
                </div>
            </div>
        </div>
    );
};
