import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS_INFO } from "@/constants";

import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { HighLightText } from "../components/common/HighLightText";
import { useEffect } from "react";

export const ProjectInfoPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = PROJECTS_INFO[id];



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return (
            <div className="h-screen w-full flex flex-col items-center justify-center gap-4 text-slate-900 dark:text-white">
                <h1 className="text-4xl font-bold">Project Not Found</h1>
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Projects
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full bg-white dark:bg-black text-slate-900 dark:text-gray-100 font-light overflow-x-hidden pt-20 pb-20">
            <div className="max-w-4xl mx-auto px-6 md:px-10 flex flex-col gap-12">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 self-start text-sm md:text-base font-medium opacity-60 hover:opacity-100 transition-all duration-500 ease-out hover:-translate-x-2 p-2 -ml-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-500" /> Back to Projects
                </button>

                {/* Header Section */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-xs md:text-sm font-mono text-slate-500 dark:text-slate-400">
                            + {project.role}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400">
                            {project.tagline}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                                className="group flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                                <Github className="w-5 h-5 transition-transform duration-500" /> View on GitHub
                            </a>
                        )}
                        {project.deployLink && project.deployLink.trim() !== '' && (
                            <a href={project.deployLink} target="_blank" rel="noopener noreferrer"
                                className="group flex items-center gap-2 rounded-md bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                                <ExternalLink className="w-5 h-5 transition-transform duration-500" /> View Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Main Feature Image */}
                <div
                    className="w-full aspect-video overflow-hidden rounded-lg border border-border bg-card"
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Content Sections */}
                <div className="flex flex-col gap-16 text-lg md:text-xl leading-relaxed">

                    {/* Description */}
                    <section>
                        <p>{project.description}</p>
                    </section>

                    {/* Key Features */}
                    <section className="flex flex-col gap-6">
                        <h2 className="text-2xl font-bold">Key Features:</h2>
                        <div className="flex flex-col gap-8">
                            {project.keyFeatures.map((feature, index) => (
                                <div key={index} className="flex flex-col gap-2">
                                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                                        {feature.title}:
                                    </h3>
                                    <p className="opacity-90">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* My Role */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">My Role:</h2>
                        <p className="opacity-90">
                            {project.roleDetails.split(' ').map((word, i) => {
                                // highlight specific words
                                const importantWords = ["architected", "led", "responsible", "design", "scalability", "performance", "backend", "frontend", "full-stack", "designed"];
                                const cleanWord = word.replace(/[.,]/g, "").toLowerCase();
                                if (importantWords.includes(cleanWord)) {
                                    return <span key={i}><HighLightText text={word} /> </span>;
                                }
                                return word + " ";
                            })}
                        </p>
                    </section>

                    {/* Technical Highlights */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">Technical Highlights:</h2>
                        <p className="opacity-90">
                            {project.technicalHighlights}
                        </p>
                    </section>

                    {/* Impact */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-2xl font-bold">Impact:</h2>
                        <p className="opacity-90">
                            {project.impact}
                        </p>
                    </section>

                </div>

                {/* Footer Back Button */}
                <hr className="border-gray-100 dark:border-white/10" />
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 self-start text-sm md:text-base font-medium opacity-60 hover:opacity-100 transition-all duration-500 ease-out hover:-translate-x-2"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-500" /> Back to Projects
                </button>
            </div>
        </div>
    );
};
