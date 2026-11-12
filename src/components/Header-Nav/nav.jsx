import { Moon, SunMedium } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavComps } from "./navComps";
import { useDarkMode } from "@/hooks/useDarkMode";

export const Nav = () => {
    const { isDark, toggle } = useDarkMode();
    const location = useLocation();
    const navigate = useNavigate();

    const returnHome = () => {
        if (location.pathname !== "/") {
            navigate("/");
            return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <nav className="fixed inset-x-0 top-0 z-[100] border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,8,8,0.7),transparent)] text-stone-100" aria-label="Primary navigation">
            <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between gap-4 px-6 sm:px-10 lg:h-24 lg:px-16">
                <button
                    type="button"
                    onClick={returnHome}
                    className="font-mono text-[0.65rem] font-medium uppercase tracking-[0.24em] text-stone-100 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                >
                    Tarun Dayma
                </button>
                <div className="flex items-center gap-3 sm:gap-6">
                    <NavComps />
                    <button
                        type="button"
                        onClick={toggle}
                        className="grid h-7 w-7 shrink-0 place-items-center text-stone-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80"
                        aria-label={isDark ? "Use light theme" : "Use dark theme"}
                    >
                        {isDark ? <SunMedium className="h-4 w-4" strokeWidth={1.5} /> : <Moon className="h-4 w-4" strokeWidth={1.5} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};
