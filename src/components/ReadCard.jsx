import PropTypes from 'prop-types';
import { ArrowUpRight, BookOpen, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '@/hooks/useDarkMode';

const ReadCard = (props) => {
    const {
        id,
        title,
        image,
        type,
        description,
        review,
        tags,
        genres,
        category,
        status,
        rating,
        currentChapter,
        author,
        coverGradient,
    } = props;

    const navigate = useNavigate();
    const { isDark } = useDarkMode();

    const displayType = status || type || category || 'Novel';
    const displayTags = genres || tags || [];
    const displaySummary = review || description || '';

    const handleClick = (e) => {
        e.preventDefault();
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
        navigate(`/read/${id}`, {
            state: {
                post: {
                    ...props,
                    type: displayType,
                    content: props.fullDetail || props.content || review,
                }
            }
        });
    };

    return (
        <div
            onClick={handleClick}
            className={`group relative rounded-3xl overflow-hidden cursor-pointer border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between p-6 min-h-[360px] ${
                isDark 
                    ? 'bg-[#0f1117] border-white/10 hover:border-white/20' 
                    : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
            }`}
        >
            {/* Top decorative gradient bar or image preview */}
            <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${coverGradient || 'from-zinc-800 to-stone-900'} opacity-90 transition-opacity group-hover:opacity-100`} />
            
            {image && (
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                />
            )}

            {/* Top Bar with Status and Arrow */}
            <div className="relative z-10 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {displayType}
                </span>

                <div className="flex items-center gap-2">
                    {rating && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                            {rating.toFixed(1)}
                        </span>
                    )}
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white transition-transform group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Middle & Bottom Content */}
            <div className="relative z-10 mt-20 flex flex-col flex-1 justify-between gap-4">
                <div>
                    {/* Genre Tags */}
                    {displayTags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-2.5">
                            {displayTags.slice(0, 3).map((tag, idx) => (
                                <span
                                    key={idx}
                                    className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                                        isDark 
                                            ? 'bg-white/5 text-zinc-400 border border-white/5' 
                                            : 'bg-gray-100 text-slate-600 border border-gray-200'
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}

                    <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {title}
                    </h3>

                    {author && (
                        <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1 flex items-center gap-1">
                            <BookOpen className="w-3 h-3 opacity-60" /> {author}
                        </p>
                    )}

                    {displaySummary && (
                        <p className="text-sm text-slate-600 dark:text-zinc-300 mt-3 line-clamp-3 leading-relaxed">
                            {displaySummary}
                        </p>
                    )}
                </div>

                {/* Footer metadata */}
                <div className="pt-3 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                    <span>{currentChapter ? `Status: ${currentChapter}` : 'Ongoing'}</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform">
                        Explore Insights &rarr;
                    </span>
                </div>
            </div>
        </div>
    );
};

ReadCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageUrl: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    review: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    genres: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    rating: PropTypes.number,
    currentChapter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    author: PropTypes.string,
    coverGradient: PropTypes.string,
    fullDetail: PropTypes.string,
    content: PropTypes.string,
};

export default ReadCard;
