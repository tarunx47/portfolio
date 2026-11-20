import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { useScrollContext } from "@/context/ScrollContext";
import VisitorCounter from "@/components/VisitorCounter";
import { SOCIAL_LINKS } from "@/constants";

const HERO_VIDEO = "/media/samurai-wallpaper.mp4";
const CONTACT_LINK = SOCIAL_LINKS.find((link) => link.id === "email")?.navigateLink || "mailto:tarundayma54@gmail.com";

export const HomePage = () => {
    const { HomeRef, AboutRef, ProjectsRef, MoreRef } = useScrollContext();

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="hero-shell relative isolate min-h-[100svh] w-full overflow-hidden bg-background text-foreground">
            <HeroBackground />

            <div className="hero-noise pointer-events-none absolute inset-0 z-0" />
            <div className="relative z-10 flex min-h-[100svh] flex-col justify-end px-4 pb-8 pt-24 sm:px-10 sm:pb-10 sm:pt-28 lg:px-16 lg:pb-12 lg:pt-32">
                <div className="hero-enter max-w-3xl">
                    <p className="mb-4 sm:mb-6 font-mono text-[0.62rem] sm:text-xs font-medium uppercase tracking-[0.22em] sm:tracking-[0.28em] text-stone-300/70">
                        SOFTWARE DEVELOPER
                    </p>
                    <h1 className="font-editorial text-4xl sm:text-7xl lg:text-[clamp(5rem,9vw,9.25rem)] font-medium leading-[0.95] sm:leading-[0.9] tracking-[-0.045em] text-stone-50 break-words">
                        Tarun Dayma
                    </h1>
                    <div className="mt-5 sm:mt-7 max-w-md border-l border-stone-200/30 pl-3 sm:pl-4 text-xs sm:text-base leading-5 sm:leading-7 text-stone-200/75">
                        Someone who learns by actually doing.<br />
                        Open to full-time roles, internships & freelance ·{" "}
                        <a href={CONTACT_LINK} className="text-stone-100 hover:underline underline-offset-4">
                            Get in touch →
                        </a>
                    </div>
                </div>

                <div className="hero-enter hero-enter-delay mt-10 sm:mt-20 flex flex-col gap-4 sm:gap-5 border-t border-stone-200/20 pt-4 sm:pt-5 sm:flex-row sm:items-end sm:justify-between">
                    <p className="max-w-56 text-[0.7rem] sm:text-xs leading-4 sm:leading-5 text-stone-300/65">
                        Projects I’ve shipped, experiments I’ve run, and ideas still cooking.
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
                        className="inline-flex min-h-[44px] w-fit items-center gap-2 py-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-100 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                    >
                        View work <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
                    </button>
                </div>

                {/* Visitor counter — subtle, bottom of hero */}
                <VisitorCounter />
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
        </div>
    );
}

function HeroSectionNav({ items, onNavigate }) {
    return (
        <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto pb-1 max-w-full [-webkit-overflow-scrolling:touch]">
            {items.map((item) => (
                <button
                    key={item.label}
                    type="button"
                    onClick={() => onNavigate(item.ref)}
                    className="group flex min-h-[44px] shrink-0 items-center gap-1.5 sm:gap-2 px-1.5 py-2 font-mono text-[0.62rem] sm:text-xs uppercase tracking-[0.15em] text-stone-400 transition-colors hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                >
                    <span className="text-stone-500 transition-colors group-hover:text-stone-100">{item.number}</span>
                    {item.label}
                </button>
            ))}
        </div>
    );
}
