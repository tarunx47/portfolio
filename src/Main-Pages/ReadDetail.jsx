import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getNovelById } from "@/data/readingArchive.js";

export const ReadDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const novel = getNovelById(id);

    if (!novel) {
        return (
            <main className="flex min-h-screen w-full flex-col items-center justify-center gap-4 bg-background p-6 text-foreground">
                <h1 className="text-2xl font-bold">Novel not found</h1>
                <button type="button" onClick={() => navigate("/")} className="rounded-md bg-primary px-4 py-2 text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    Back to archive
                </button>
            </main>
        );
    }

    return (
        <main className="min-h-screen w-full bg-background px-6 pb-20 pt-28 text-foreground md:px-10">
            <article className="mx-auto flex max-w-4xl flex-col gap-8">
                <button type="button" onClick={() => navigate(-1)} className="flex w-fit items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to archive
                </button>
                {novel.cover && <img src={novel.cover} alt={`Cover of ${novel.title}`} className="max-h-[32rem] w-full rounded-lg border border-border object-contain" />}
                <header>
                    <h1 className="text-4xl font-bold tracking-tight">{novel.title}</h1>
                    {novel.author && <p className="mt-2 text-muted-foreground">{novel.author}</p>}
                </header>
                {novel.status && <p className="text-sm text-muted-foreground">{novel.status}</p>}
                {novel.description && <p className="leading-relaxed text-muted-foreground">{novel.description}</p>}
                {(novel.rating || novel.readingProgress) && (
                    <dl className="grid gap-4 rounded-lg border border-border bg-card p-6 text-sm sm:grid-cols-2">
                        {novel.rating && <div><dt className="text-muted-foreground">Rating</dt><dd className="mt-1 font-medium text-card-foreground">{novel.rating}</dd></div>}
                        {novel.readingProgress && <div><dt className="text-muted-foreground">Reading progress</dt><dd className="mt-1 font-medium text-card-foreground">{novel.readingProgress}</dd></div>}
                    </dl>
                )}
                {novel.personalInsights && (
                    <section className="rounded-lg border border-border bg-card p-6 leading-relaxed text-card-foreground">
                        <h2 className="mb-3 text-xl font-semibold">Personal insights</h2>
                        <p>{novel.personalInsights}</p>
                    </section>
                )}
            </article>
        </main>
    );
};
