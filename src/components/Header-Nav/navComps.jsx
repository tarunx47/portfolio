import { useLocation, useNavigate } from "react-router-dom";
import { useScrollContext } from "@/context/ScrollContext";
import { useActiveSection } from "@/hooks/useActiveSection";

export const NavComps = () => {
    const { HomeRef, AboutRef, ProjectsRef, MoreRef } = useScrollContext();
    const activeSection = useActiveSection({ HomeRef, AboutRef, ProjectsRef, MoreRef });
    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (ref, label) => {
        sessionStorage.removeItem("scrollPosition");

        if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: label } });
            return;
        }

        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const navItems = [
        { ref: HomeRef, label: "Home" },
        { ref: AboutRef, label: "About" },
        { ref: ProjectsRef, label: "Work" },
        { ref: MoreRef, label: "More" },
    ];

    return (
        <div className="flex items-center gap-3 sm:gap-5">
            {navItems.map(({ ref, label }) => {
                const isActive = activeSection === (label === "Work" ? "Projects" : label);

                return (
                    <button
                        key={label}
                        type="button"
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => handleScroll(ref, label === "Work" ? "Projects" : label)}
                        className={`relative py-2 text-[0.6rem] font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-100/80 ${isActive ? "text-stone-100" : "text-stone-400 hover:text-stone-100"}`}
                    >
                        {label}
                        {isActive && <span className="absolute inset-x-0 -bottom-0.5 h-px bg-stone-100/80" />}
                    </button>
                );
            })}
        </div>
    );
};
