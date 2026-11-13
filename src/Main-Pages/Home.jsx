import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useScrollContext } from "@/context/ScrollContext";

const HERO_VIDEO = "/media/samurai-wallpaper.mp4";

export const HomePage = () => {
    const { HomeRef, AboutRef, ProjectsRef, MoreRef } = useScrollContext();

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="hero-shell relative isolate min-h-[100svh] w-full overflow-hidden bg-background text-foreground">
            <HeroBackground />

            <div className="hero-noise pointer-events-none absolute inset-0 z-0" />
            <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-9 pt-28 sm:px-10 sm:pb-10 lg:px-16 lg:pb-12 lg:pt-32">
                <div className="hero-enter max-w-3xl">
                    <p className="mb-6 font-mono text-[0.62rem] font-medium uppercase tracking-[0.28em] text-stone-300/70">
                        Independent developer / selected work
                    </p>
                    <h1 className="font-editorial text-5xl font-medium leading-[0.9] tracking-[-0.045em] text-stone-50 sm:text-7xl lg:text-[clamp(5rem,9vw,9.25rem)]">
                        Tarun Dayma
                    </h1>
                    <div className="mt-7 max-w-md border-l border-stone-200/30 pl-4 text-sm leading-6 text-stone-200/75 sm:text-base sm:leading-7">
                        A developer portfolio for considered interfaces, useful systems, and work in progress.
                    </div>
                </div>

                <div className="hero-enter hero-enter-delay mt-16 flex flex-col gap-5 border-t border-stone-200/20 pt-5 sm:mt-20 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-56 text-xs leading-5 text-stone-300/65">
                        Explore the archive of projects, experiments, and technical notes.
                    </p>
                    <HeroSectionNav onNavigate={scrollTo} items={[
                        { label: "Home", number: "01", ref: HomeRef },
                        { label: "About", number: "02", ref: AboutRef },
                        { label: "Work", number: "03", ref: ProjectsRef },
                        { label: "More", number: "04", ref: MoreRef },
                    ]} />
                    <button
                        type="button"
                        onClick={() => scrollTo(ProjectsRef)}
                        className="inline-flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-100 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                    >
                        View work <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </button>
                </div>
            </div>
        </section>
    );
};

function HeroBackground() {
    const [canAnimate, setCanAnimate] = useState(false);
    const [videoFailed, setVideoFailed] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const syncPreference = () => setCanAnimate(!mediaQuery.matches);

        syncPreference();
        mediaQuery.addEventListener("change", syncPreference);
        return () => mediaQuery.removeEventListener("change", syncPreference);
    }, []);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
            <div className="samurai-hero-fallback absolute inset-0" />
            {canAnimate && !videoFailed && (
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onError={() => setVideoFailed(true)}
                >
                    <source src={HERO_VIDEO} type="video/mp4" />
                </video>
            )}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,10,10,0.78)_0%,rgba(9,10,10,0.42)_52%,rgba(9,10,10,0.2)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,10,10,0.88)_0%,rgba(9,10,10,0.14)_52%,rgba(9,10,10,0.42)_100%)]" />
        </div>
    );
}

function HeroSectionNav({ items, onNavigate }) {
    return (
        <div className="flex items-center gap-4 overflow-x-auto pb-1 sm:gap-6">
            {items.map((item) => (
                <button
                    key={item.label}
                    type="button"
                    onClick={() => onNavigate(item.ref)}
                    className="group flex shrink-0 items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-stone-400 transition-colors hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                >
                    <span className="text-stone-500 transition-colors group-hover:text-stone-100">{item.number}</span>
                    {item.label}
                </button>
            ))}
        </div>
    );
}
