import { useNavigate } from "react-router-dom";

const ReadCard = ({ novel }) => {
    const navigate = useNavigate();

    const openNovel = () => navigate(`/read/${novel.id}`);

    return (
        <button
            type="button"
            onClick={openNovel}
            className="group overflow-hidden rounded-lg border border-border bg-card text-left transition-colors hover:border-foreground/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label={`Open ${novel.title}`}
        >
            {novel.cover ? (
                <img src={novel.cover} alt={`Cover of ${novel.title}`} loading="lazy" className="aspect-[3/4] w-full object-cover" />
            ) : (
                <div className="aspect-[3/4] w-full bg-muted" aria-hidden="true" />
            )}
            <span className="block p-4 text-base font-semibold text-foreground">{novel.title}</span>
        </button>
    );
};

export default ReadCard;
