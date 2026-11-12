import { useState } from 'react';
import { PageHeader } from "../components/common/PageHeader.jsx";
import {
    CHINESE_LEARNING_OVERVIEW,
    LEARNING_MILESTONES,
    VOCABULARY_COLLECTION,
    GRAMMAR_NOTEBOOK,
    SENTENCE_PRACTICE,
    LISTENING_SPEAKING_PROGRESS,
    LEARNING_RESOURCES,
} from '@/data/chineseLearning.js';
import {
    BookOpen,
    Languages,
    Sparkles,
    CheckCircle2,
    Clock,
    Search,
    Volume2,
    Layers,
    Compass,
    FileText,
} from 'lucide-react';

export const ChineseLearningPage = () => {
    const [activeTab, setActiveTab] = useState('focus');
    const [vocabSearch, setVocabSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Greetings', 'Pronouns', 'Verbs', 'Particles', 'Language', 'Courtesy'];

    const filteredVocab = VOCABULARY_COLLECTION.filter((item) => {
        const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
        const matchesSearch =
            item.hanzi.toLowerCase().includes(vocabSearch.toLowerCase()) ||
            item.pinyin.toLowerCase().includes(vocabSearch.toLowerCase()) ||
            item.english.toLowerCase().includes(vocabSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="py-16 relative overflow-hidden w-full font-light" id="chinese-learning">
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                {/* Section Header */}
                <div className="flex flex-col gap-3">
                    <PageHeader val={'06.'} subheading={"Beyond Code"} mainHeading={"Chinese Learning Journey"} />
                    <p className="text-base md:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mt-1">
                        &ldquo;{CHINESE_LEARNING_OVERVIEW.subtitle}&rdquo;
                    </p>
                </div>

                {/* Overview Banner */}
                <div className="p-6 md:p-8 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-sm flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center">
                    <div className="flex flex-col gap-2 max-w-2xl">
                        <div className="flex items-center gap-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20">
                                <Languages className="w-3.5 h-3.5" />
                                {CHINESE_LEARNING_OVERVIEW.statusBadge}
                            </span>
                            <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                                Mandarin / 普通话
                            </span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mt-1">
                            Current Focus: {CHINESE_LEARNING_OVERVIEW.currentFocus}
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                            <strong className="text-slate-800 dark:text-zinc-200 font-medium">Core Approach:</strong> {CHINESE_LEARNING_OVERVIEW.methodology}
                        </p>
                    </div>

                    <div className="px-5 py-3 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5 text-xs text-slate-500 dark:text-zinc-400 flex flex-col gap-1 shrink-0">
                        <span className="font-semibold text-slate-800 dark:text-zinc-200">Daily Study Habit</span>
                        <span>15-20 mins tone pair & SRS drills</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Focus: Consistency over speed</span>
                    </div>
                </div>

                {/* Subsections Navigation Tabs */}
                <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 dark:border-white/10 pb-4">
                    {[
                        { id: 'focus', label: 'Timeline & Milestones', icon: Layers },
                        { id: 'vocab', label: 'Vocabulary Bank', icon: BookOpen },
                        { id: 'grammar', label: 'Grammar Notebook', icon: FileText },
                        { id: 'practice', label: 'Sentence Practice & Tones', icon: Volume2 },
                        { id: 'resources', label: 'Resources I Use', icon: Compass },
                    ].map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-medium transition-all ${
                                    isActive
                                        ? 'bg-slate-900 text-white dark:bg-white dark:text-black shadow-sm'
                                        : 'bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                                }`}
                            >
                                <Icon className="w-3.5 h-3.5" />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* TAB 1: TIMELINE & MILESTONES */}
                {activeTab === 'focus' && (
                    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                Learning Timeline & Realistic Milestones
                            </h4>
                            <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                                No fabricated exam claims
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {LEARNING_MILESTONES.map((m) => {
                                const isDone = m.status === 'Completed';
                                const isInProgress = m.status === 'In Progress';

                                return (
                                    <div
                                        key={m.id}
                                        className={`p-6 rounded-3xl border flex flex-col justify-between gap-4 transition-all ${
                                            isDone
                                                ? 'bg-emerald-500/[0.03] border-emerald-500/20 dark:border-emerald-500/30'
                                                : isInProgress
                                                ? 'bg-blue-500/[0.03] border-blue-500/20 dark:border-blue-500/30 shadow-sm'
                                                : 'bg-gray-50/50 dark:bg-white/[0.01] border-gray-200 dark:border-white/5 opacity-80'
                                        }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className={`px-2.5 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 ${
                                                isDone
                                                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                                    : isInProgress
                                                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                                    : 'bg-gray-200 dark:bg-white/10 text-slate-600 dark:text-zinc-400'
                                            }`}>
                                                {isDone ? (
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                                                ) : (
                                                    <Clock className="w-3.5 h-3.5" />
                                                )}
                                                {m.status}
                                            </span>
                                            <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                                                {m.date}
                                            </span>
                                        </div>

                                        <div>
                                            <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                                                {m.title}
                                            </h5>
                                            <p className="text-sm text-slate-600 dark:text-zinc-400 mt-2 leading-relaxed">
                                                {m.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* TAB 2: VOCABULARY BANK */}
                {activeTab === 'vocab' && (
                    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                        {/* Search and Category Filter */}
                        <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                            <div className="relative flex-1 max-w-md">
                                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search Hanzi, Pinyin, or English..."
                                    value={vocabSearch}
                                    onChange={(e) => setVocabSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-1.5">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                            selectedCategory === cat
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Vocabulary Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredVocab.map((v) => (
                                <div
                                    key={v.id}
                                    className="p-5 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-sm flex flex-col justify-between gap-4 hover:border-gray-300 dark:hover:border-white/20 transition-all"
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-wide">
                                                {v.hanzi}
                                            </div>
                                            <div className="text-sm font-mono text-blue-600 dark:text-blue-400 mt-1 font-semibold">
                                                {v.pinyin}
                                            </div>
                                        </div>
                                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-gray-100 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-gray-200 dark:border-white/5">
                                            {v.category}
                                        </span>
                                    </div>

                                    <div>
                                        <div className="text-sm font-semibold text-slate-800 dark:text-zinc-200">
                                            {v.english}
                                        </div>
                                        <div className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
                                            Tone: {v.tones}
                                        </div>
                                        {v.usageNote && (
                                            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-2 bg-gray-50 dark:bg-white/[0.02] p-2.5 rounded-xl border border-gray-100 dark:border-white/5 leading-relaxed">
                                                {v.usageNote}
                                            </p>
                                        )}
                                    </div>

                                    {v.example && (
                                        <div className="pt-3 border-t border-gray-100 dark:border-white/5 text-xs flex flex-col gap-1 text-slate-600 dark:text-zinc-400">
                                            <span className="font-semibold text-slate-800 dark:text-zinc-200">{v.example.hanzi}</span>
                                            <span className="font-mono text-blue-500/80">{v.example.pinyin}</span>
                                            <span className="italic">{v.example.english}</span>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB 3: GRAMMAR NOTEBOOK */}
                {activeTab === 'grammar' && (
                    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                Foundational Grammar Topics
                            </h4>
                            <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                                Structural mechanics
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {GRAMMAR_NOTEBOOK.map((g) => (
                                <div
                                    key={g.id}
                                    className="p-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-sm flex flex-col justify-between gap-4"
                                >
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                                {g.level}
                                            </span>
                                            <span className="text-xs font-mono font-bold text-slate-500 dark:text-zinc-400">
                                                {g.pattern}
                                            </span>
                                        </div>

                                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                                            {g.title}
                                        </h5>

                                        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                                            {g.explanation}
                                        </p>
                                    </div>

                                    {/* Formula Box */}
                                    <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 flex flex-col gap-1">
                                        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Formula Example</span>
                                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{g.formula}</span>
                                    </div>

                                    {/* Sentence Breakdown */}
                                    {g.breakdown && (
                                        <div className="grid grid-cols-3 gap-2">
                                            {g.breakdown.map((item, idx) => (
                                                <div key={idx} className="p-2 rounded-xl bg-gray-50/50 dark:bg-white/[0.01] border border-gray-100 dark:border-white/5 text-center flex flex-col">
                                                    <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">{item.segment}</span>
                                                    <span className="text-[10px] text-slate-500 dark:text-zinc-400">{item.role}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {g.tip && (
                                        <div className="text-xs text-amber-700 dark:text-amber-400 bg-amber-500/5 p-3 rounded-xl border border-amber-500/15">
                                            <strong>Key Rule:</strong> {g.tip}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* TAB 4: SENTENCE PRACTICE & TONES */}
                {activeTab === 'practice' && (
                    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
                        {/* Sentence Building Practice */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                Sentence-Building Practice
                            </h4>
                            <div className="grid grid-cols-1 gap-4">
                                {SENTENCE_PRACTICE.map((s) => (
                                    <div
                                        key={s.id}
                                        className="p-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-sm flex flex-col gap-4"
                                    >
                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-gray-100 dark:border-white/5 pb-3">
                                            <div>
                                                <span className="text-xs font-mono text-slate-400 uppercase">Target Meaning:</span>
                                                <div className="text-base font-semibold text-slate-900 dark:text-white">{s.target}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">{s.hanzi}</div>
                                                <div className="text-xs font-mono text-slate-500">{s.pinyin}</div>
                                            </div>
                                        </div>

                                        {/* Component Breakdown */}
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                            {s.breakdown.map((b, idx) => (
                                                <div key={idx} className="p-2.5 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex flex-col items-center text-center">
                                                    <span className="text-lg font-bold text-slate-800 dark:text-zinc-200">{b.char}</span>
                                                    <span className="text-xs font-mono text-blue-500">{b.pinyin}</span>
                                                    <span className="text-[11px] text-slate-500 dark:text-zinc-400 mt-1">{b.meaning}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
                                            <strong>Grammar Note:</strong> {s.notes}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tone Pair Drills & Listening Notes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-sm flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                                    <Volume2 className="w-5 h-5 text-blue-500" />
                                    Tone Pair Drills Routine
                                </div>
                                <p className="text-xs text-slate-500 dark:text-zinc-400">
                                    {LISTENING_SPEAKING_PROGRESS.routine}
                                </p>

                                <div className="flex flex-col gap-3 mt-2">
                                    {LISTENING_SPEAKING_PROGRESS.toneDrills.map((drill, idx) => (
                                        <div key={idx} className="p-3.5 rounded-2xl bg-gray-50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 flex flex-col gap-1">
                                            <div className="flex items-center justify-between">
                                                <span className="font-mono font-bold text-xs text-blue-600 dark:text-blue-400">{drill.pair}</span>
                                                <span className="text-xs text-slate-500 dark:text-zinc-400">{drill.meaning}</span>
                                            </div>
                                            <span className="text-sm font-semibold text-slate-900 dark:text-white">{drill.pinyin}</span>
                                            <span className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">{drill.tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-sm flex flex-col gap-4">
                                <div className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                                    <Sparkles className="w-5 h-5 text-amber-500" />
                                    Pronunciation & Speaking Notes
                                </div>

                                <div className="flex flex-col gap-3">
                                    {LISTENING_SPEAKING_PROGRESS.speakingNotes.map((note, idx) => (
                                        <div key={idx} className="p-4 rounded-2xl bg-gray-50/50 dark:bg-white/[0.02] border border-gray-100 dark:border-white/5 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed flex items-start gap-3">
                                            <span className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-500 font-mono text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                                                {idx + 1}
                                            </span>
                                            <span>{note}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* TAB 5: RESOURCES I USE */}
                {activeTab === 'resources' && (
                    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                                Verified Learning Resources & Tools
                            </h4>
                            <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                                Real study stack
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {LEARNING_RESOURCES.map((res) => (
                                <div
                                    key={res.id}
                                    className="p-6 rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0a0a0a] shadow-sm flex flex-col justify-between gap-4"
                                >
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                                {res.type}
                                            </span>
                                            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                                {res.status}
                                            </span>
                                        </div>

                                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                                            {res.name}
                                        </h5>

                                        <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                                            {res.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
