import { useState, useEffect } from "react";
import { Moon, SunMedium, Menu, X, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavComps } from "./navComps";
import { useDarkMode } from "@/hooks/useDarkMode";
import { useScrollContext } from "@/context/ScrollContext";
import { useActiveSection } from "@/hooks/useActiveSection";

export const Nav = () => {
    const { isDark, toggle } = useDarkMode();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const { HomeRef, AboutRef, ProjectsRef, MoreRef } = useScrollContext();
    const activeSection = useActiveSection({ HomeRef, AboutRef, ProjectsRef, MoreRef });

    // Close menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Handle escape key and body scroll lock
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setMobileMenuOpen(false);
        };

        if (mobileMenuOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [mobileMenuOpen]);

    const returnHome = () => {
        setMobileMenuOpen(false);
        if (location.pathname !== "/") {
            navigate("/");
            return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleMobileNavClick = (ref, label) => {
        setMobileMenuOpen(false);
        sessionStorage.removeItem("scrollPosition");

        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: label } });
            return;
        }

        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const mobileNavItems = [
        { ref: HomeRef, label: "Home", target: "Home", number: "01" },
        { ref: AboutRef, label: "About", target: "About", number: "02" },
        { ref: ProjectsRef, label: "Work", target: "Projects", number: "03" },
        { ref: MoreRef, label: "More", target: "More", number: "04" },
    ];

    return (
        <nav className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,8,8,0.85),rgba(7,8,8,0.6))] backdrop-blur-md text-stone-100" aria-label="Primary navigation">
            <div className="mx-auto flex h-16 sm:h-20 max-w-[1600px] items-center justify-between gap-2 px-4 sm:px-10 lg:h-24 lg:px-16">
                <button
                    type="button"
                    onClick={returnHome}
                    className="flex min-h-[44px] items-center font-mono text-[0.65rem] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.24em] text-stone-100 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                >
                    Tarun Dayma
                </button>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6">
                    <NavComps />
                    <button
                        type="button"
                        onClick={toggle}
                        className="grid h-10 w-10 shrink-0 place-items-center rounded-lg text-stone-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                        aria-label={isDark ? "Use light theme" : "Use dark theme"}
                    >
                        {isDark ? <SunMedium className="h-4 w-4" strokeWidth={1.5} /> : <Moon className="h-4 w-4" strokeWidth={1.5} />}
                    </button>
                </div>

                {/* Mobile controls */}
                <div className="flex md:hidden items-center gap-1">
                    <button
                        type="button"
                        onClick={toggle}
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-stone-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                        aria-label={isDark ? "Use light theme" : "Use dark theme"}
                    >
                        {isDark ? <SunMedium className="h-4 w-4" strokeWidth={1.5} /> : <Moon className="h-4 w-4" strokeWidth={1.5} />}
                    </button>
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-lg text-stone-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile menu backdrop */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-0 top-16 sm:top-20 z-40 bg-black/70 backdrop-blur-sm md:hidden animate-in fade-in duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile menu drawer */}
            {mobileMenuOpen && (
                <div
                    className="fixed inset-x-0 top-16 sm:top-20 z-50 border-b border-white/10 bg-[#070808]/98 backdrop-blur-xl px-5 py-6 text-stone-100 shadow-2xl md:hidden animate-in slide-in-from-top-2 duration-200"
                    role="dialog"
                    aria-label="Mobile navigation"
                >
                    <div className="flex flex-col gap-1">
                        <div className="mb-2 px-3 text-[0.62rem] font-mono uppercase tracking-[0.2em] text-stone-400">
                            Navigation
                        </div>
                        {mobileNavItems.map(({ ref, label, target, number }) => {
                            const isActive = activeSection === target;
                            return (
                                <button
                                    key={label}
                                    type="button"
                                    onClick={() => handleMobileNavClick(ref, target)}
                                    className={`group flex min-h-[48px] w-full items-center justify-between rounded-lg px-3 py-3 text-left font-mono text-xs uppercase tracking-[0.16em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80 ${isActive ? "bg-white/10 text-stone-50 font-semibold" : "text-stone-300 hover:bg-white/5 hover:text-white"}`}
                                >
                                    <span className="flex items-center gap-3">
                                        <span className="text-[0.65rem] text-stone-500 group-hover:text-stone-300 font-mono">{number}</span>
                                        <span>{label}</span>
                                    </span>
                                    {isActive ? (
                                        <span className="h-1.5 w-1.5 rounded-full bg-stone-100 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                    ) : (
                                        <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-60 group-hover:translate-x-0" />
                                    )}
                                </button>
                            );
                        })}

                        {/* Extra quick jump links */}
                        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-1">
                            <div className="mb-1 px-3 text-[0.62rem] font-mono uppercase tracking-[0.2em] text-stone-400">
                                Archives
                            </div>
                            <button
                                type="button"
                                onClick={() => { setMobileMenuOpen(false); navigate('/all-projects'); }}
                                className="flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2.5 text-xs text-stone-300 hover:bg-white/5 hover:text-white transition-colors"
                            >
                                <span>All Projects</span>
                                <ArrowRight className="h-3.5 w-3.5 text-stone-500" />
                            </button>
                            <button
                                type="button"
                                onClick={() => { setMobileMenuOpen(false); navigate('/all-certificates'); }}
                                className="flex min-h-[44px] items-center justify-between rounded-lg px-3 py-2.5 text-xs text-stone-300 hover:bg-white/5 hover:text-white transition-colors"
                            >
                                <span>All Certificates</span>
                                <ArrowRight className="h-3.5 w-3.5 text-stone-500" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
