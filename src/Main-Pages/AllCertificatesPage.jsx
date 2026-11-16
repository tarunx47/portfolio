import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ArrowLeft, X, ExternalLink } from "lucide-react";
import { ACHIEVEMENTS } from "@/constants/achievements";
import { CertificateCard } from "@/components/CertificateCard";

export const AllCertificatesPage = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (selected) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selected]);

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen w-full bg-background p-4 text-foreground md:py-12 md:px-12">
            {/* header section */}
            <div className="max-w-7xl mx-auto mb-10 sm:mb-16 pt-4 sm:pt-8">
                <button
                    onClick={handleBack}
                    className="group flex min-h-[44px] items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-500 hover:text-black dark:hover:text-white transition-colors duration-500 mb-6 sm:mb-8"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-500" />
                    Back to home
                </button>

                <div className="flex flex-col gap-3 sm:gap-4">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 break-words">
                        My Certificates
                    </h1>
                    <p className="text-base sm:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl font-light leading-relaxed">
                        A collection of honors, professional certifications, and achievements.
                    </p>
                </div>
            </div>

            {/* grid layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pb-24">
                {ACHIEVEMENTS.map((ach) => (
                    <CertificateCard 
                        key={ach.id} 
                        ach={ach} 
                        onClick={() => setSelected(ach)} 
                    />
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
                    <button
                        type="button"
                        aria-label="Close certificate preview"
                        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
                        onClick={() => setSelected(null)}
                    />
                    
                    <div className="relative flex w-full max-w-4xl max-h-[90vh] overflow-y-auto flex-col rounded-lg border border-border bg-card shadow-2xl">
                        {/* Header */}
                        <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-gray-100 dark:border-white/10">
                            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-1 pr-4 sm:pr-8">
                                {selected.title}
                            </h3>
                            <button 
                                type="button"
                                aria-label="Close certificate preview"
                                onClick={() => setSelected(null)}
                                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md bg-muted p-2 text-foreground transition-colors hover:bg-accent"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        {/* Image Preview */}
                        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-muted p-2 sm:p-4 md:aspect-video">
                            <img 
                                src={selected.image} 
                                alt={selected.title}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col items-center justify-between gap-4 border-t border-border bg-card p-4 md:flex-row md:p-6">
                            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
                                Issued by <span className="font-semibold text-slate-900 dark:text-white">{selected.organization}</span> in {selected.year}
                            </div>
                            <a 
                                href={selected.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto text-sm sm:text-base"
                            >
                                Verify Certificate
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
