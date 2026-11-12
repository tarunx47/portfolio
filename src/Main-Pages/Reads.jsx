import { useState } from 'react';
import { PageHeader } from "../components/common/PageHeader.jsx";
import ReadCard from '../components/ReadCard.jsx';
import { 
    NOVELS, 
    READING_STATS, 
    GENERAL_INSIGHTS, 
    READING_STATUS_FILTERS 
} from '@/data/readingArchive.js';
import { BookMarked, Sparkles, ChevronRight, Bookmark } from 'lucide-react';

export const ReadsPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [expandedInsight, setExpandedInsight] = useState(null);

    const filteredNovels = NOVELS.filter((novel) => {
        if (activeFilter === 'reading') return novel.status === 'Currently Reading';
        if (activeFilter === 'completed') return novel.status === 'Completed';
        if (activeFilter === 'favorites') return novel.favorite === true;
        return true;
    });

    return (
        <section className="py-16 relative overflow-hidden w-full font-light" id="reads">
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                {/* Section Header */}
                <div className="flex flex-col gap-3">
                    <PageHeader val={'05.'} subheading={"Reading Archive"} mainHeading={"Stories & Insights"} />
                    <p className="text-base md:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mt-1">
                        &ldquo;Stories I&apos;ve explored, ideas I&apos;ve collected, and thoughts worth remembering.&rdquo;
                    </p>
                </div>

                {/* Reading Stats Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                        <div className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-zinc-400">
                            Tracked Titles
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mt-1 text-slate-900 dark:text-white">
                            {READING_STATS.totalTracked}
                        </div>
                        <div className="text-xs text-slate-400 dark:text-zinc-500 mt-1">
                            Editable archive
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                        <div className="text-xs uppercase font-mono tracking-wider text-emerald-600 dark:text-emerald-400">
                            Currently Reading
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mt-1 text-slate-900 dark:text-white">
                            {READING_STATS.currentlyReading}
                        </div>
                        <div className="text-xs text-slate-400 dark:text-zinc-500 mt-1">
                            In active progress
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                        <div className="text-xs uppercase font-mono tracking-wider text-slate-500 dark:text-zinc-400">
                            Completed
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mt-1 text-slate-900 dark:text-white">
                            {READING_STATS.completed}
                        </div>
                        <div className="text-xs text-slate-400 dark:text-zinc-500 mt-1">
                            Ongoing arcs
                        </div>
                    </div>

                    <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02]">
                        <div className="text-xs uppercase font-mono tracking-wider text-amber-600 dark:text-amber-400">
                            Favorites
                        </div>
                        <div className="text-2xl md:text-3xl font-bold mt-1 text-slate-900 dark:text-white">
                            {READING_STATS.favoritesCount}
                        </div>
                        <div className="text-xs text-slate-400 dark:text-zinc-500 mt-1">
                            High narrative impact
                        </div>
                    </div>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 dark:border-white/10 pb-4">
                    {READING_STATUS_FILTERS.map((filter) => {
                        const isActive = activeFilter === filter.id;
                        return (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                                    isActive
                                        ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-sm'
                                        : 'bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                                }`}
                            >
                                {filter.label}
                            </button>
                        );
                    })}
                </div>

                {/* Novel Cards Grid */}
                {filteredNovels.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredNovels.map((novel) => (
                            <ReadCard key={novel.id} {...novel} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-3xl border border-dashed border-gray-300 dark:border-white/10 p-12 text-center flex flex-col items-center justify-center gap-2">
                        <BookMarked className="w-8 h-8 text-slate-400 dark:text-zinc-500 mb-2" />
                        <h4 className="text-lg font-semibold text-slate-800 dark:text-zinc-200">
                            No titles in this filter
                        </h4>
                        <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-sm">
                            No titles currently marked under &ldquo;{activeFilter}&rdquo;. New books will be added as chapters are read.
                        </p>
                    </div>
                )}

                {/* Personal Reading Insights & Story Philosophy */}
                <div className="mt-8 flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-500 dark:text-zinc-400">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        Personal Insights & Lessons from Stories
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {GENERAL_INSIGHTS.map((insight) => {
                            const isExpanded = expandedInsight === insight.id;
                            return (
                                <div
                                    key={insight.id}
                                    onClick={() => setExpandedInsight(isExpanded ? null : insight.id)}
                                    className="p-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-sm hover:border-gray-300 dark:hover:border-white/20 transition-all cursor-pointer flex flex-col justify-between"
                                >
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center justify-between">
                                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                                {insight.category}
                                            </span>
                                            <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                                        </div>

                                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                            {insight.title}
                                        </h4>

                                        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                                            {insight.summary}
                                        </p>

                                        {isExpanded && (
                                            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-white/5 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed animate-in fade-in duration-200">
                                                {insight.detail}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mt-4 pt-3 text-xs font-medium text-blue-600 dark:text-blue-400">
                                        {isExpanded ? 'Show less' : 'Read full reflection →'}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Subtitle / Maintenance Note */}
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 flex items-center gap-3 text-xs text-slate-500 dark:text-zinc-400">
                    <Bookmark className="w-4 h-4 shrink-0 text-slate-400" />
                    <span>
                        Archive rule: Only verified novels tracked. No auto-completed reading counters or external blog scrapers.
                    </span>
                </div>
            </div>
        </section>
    );
};
