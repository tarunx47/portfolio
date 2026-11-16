import { useLocation, useNavigate } from "react-router-dom";
import { useScrollContext } from "@/context/ScrollContext";
import { useActiveSection } from "@/hooks/useActiveSection";

export const NavComps = ({ onNavigate }) => {
    const { HomeRef, AboutRef, ProjectsRef, MoreRef } = useScrollContext();
    const activeSection = useActiveSection({ HomeRef, AboutRef, ProjectsRef, MoreRef });
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (ref, label) => {
        sessionStorage.removeItem("scrollPosition");

        if (onNavigate) {
            onNavigate();
        }

        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: label } });
            return;
        }

        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const navItems = [
        { ref: HomeRef, label: "Home", number: "01" },
        { ref: AboutRef, label: "About", number: "02" },
        { ref: ProjectsRef, label: "Work", number: "03" },
        { ref: MoreRef, label: "More", number: "04" },
    ];

    return (
        <div className="flex items-center gap-1 sm:gap-4 md:gap-5">
            {navItems.map(({ ref, label }) => {
                const isActive = activeSection === (label === "Work" ? "Projects" : label);

                return (
                    <button
                        key={label}
                        type="button"
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => handleScroll(ref, label === "Work" ? "Projects" : label)}
                        className={`relative inline-flex min-h-[44px] items-center px-2 py-2 text-[0.65rem] sm:text-[0.6rem] font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80 ${isActive ? "text-stone-100" : "text-stone-400 hover:text-stone-100"}`}
                    >
                        {label}
                        {isActive && <span className="absolute inset-x-2 -bottom-0.5 h-px bg-stone-100/80" />}
                    </button>
                );
            })}
        </div>
    );
};
