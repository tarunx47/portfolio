import { HomePage } from "./Home.jsx";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AboutPage } from "./About.jsx";
import { ProjectsPage } from "./Projects.jsx";
import { useScrollContext } from "@/context/ScrollContext.jsx";
import { ReadsPage } from "./Reads.jsx";
import { ChineseLearningPage } from "./ChineseLearningPage.jsx";
import { GithubPage } from "./Github.jsx";
import { AchievementsPage } from "./AchievementsPage.jsx";
import Footer from "../components/Footer.jsx";

export const MainComp = () => {
    const { HomeRef, AboutRef, ProjectsRef, MoreRef } = useScrollContext();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const sectionRefs = { Home: HomeRef, About: AboutRef, Projects: ProjectsRef, More: MoreRef };
        const target = sectionRefs[location.state?.scrollTo];

        if (!target?.current) return;

        requestAnimationFrame(() => {
            target.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            navigate("/", { replace: true, state: {} });
        });
    }, [AboutRef, HomeRef, MoreRef, ProjectsRef, location.state, navigate]);

    return <main className="w-full flex flex-col items-center pb-20">


        <div className="w-full scroll-mt-20" ref={HomeRef} data-section="Home"><HomePage /></div>
        <div className="w-full max-w-6xl scroll-mt-24 px-4 py-18 md:px-10" ref={AboutRef} data-section="About"><AboutPage /></div>
        <div className="w-full max-w-6xl scroll-mt-24 px-4 py-10 md:px-10" ref={ProjectsRef} data-section="Projects"><ProjectsPage /></div>

        <div className="w-full max-w-6xl scroll-mt-24 px-4 py-10 md:px-10" ref={MoreRef} data-section="More"><AchievementsPage /></div>
        <div className="w-full max-w-6xl px-4 py-10 md:px-10" data-section="Reads"><ReadsPage /></div>
        <div className="w-full max-w-6xl px-4 py-10 md:px-10" data-section="Chinese"><ChineseLearningPage /></div>
        <div className="w-full max-w-6xl px-4 py-10 md:px-10" data-section="Github"><GithubPage /></div>
        <Footer />
    </main>
}
