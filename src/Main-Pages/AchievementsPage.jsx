import React, { useState } from 'react';
import { PageHeader } from "../components/common/PageHeader";
import { ExternalLink, X, ArrowRight } from "lucide-react";
import { ACHIEVEMENTS } from '@/constants/achievements';
import { CertificateCard } from '../components/CertificateCard';
import { useNavigate } from 'react-router-dom';

export function AchievementsPage() {
    const [selected, setSelected] = useState(null);
    const navigate = useNavigate();

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

    return (
        <section className="h-full w-full flex flex-col p-2 font-light overflow-x-hidden">
            <div className="flex flex-col gap-8 w-full max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                    <div>
                        <PageHeader val={'04.'} subheading={"Honors &"} mainHeading={"Achievements"} />
                    </div>
                    
                    <button
                        onClick={() => navigate('/all-certificates')}
                        className="group flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-all text-black dark:text-white"
                    >
                        View All Certificates
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                    {ACHIEVEMENTS.slice(0, 4).map((ach) => (
                        <CertificateCard 
                            key={ach.id} 
                            ach={ach} 
                            onClick={() => setSelected(ach)} 
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    <button
                        type="button"
                        aria-label="Close certificate preview"
                        className="absolute inset-0 bg-black/60 transition-opacity"
                        onClick={() => setSelected(null)}
                    />
                    
                    <div className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-lg border border-border bg-card">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-white/10">
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white line-clamp-1 pr-8">
                                {selected.title}
                            </h3>
                            <button 
                                type="button"
                                aria-label="Close certificate preview"
                                onClick={() => setSelected(null)}
                                className="rounded-md bg-muted p-2 text-foreground transition-colors hover:bg-accent"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        
                        {/* Image Preview */}
                        <div className="flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-muted p-4 md:aspect-video">
                            <img 
                                src={selected.image} 
                                alt={selected.title}
                                className="h-full w-full object-contain"
                            />
                        </div>

                        {/* Footer */}
                        <div className="flex flex-col items-center justify-between gap-4 border-t border-border bg-card p-4 md:flex-row md:p-6">
                            <div className="text-sm text-slate-600 dark:text-slate-400 text-center sm:text-left">
                                Issued by <span className="font-semibold text-slate-900 dark:text-white">{selected.organization}</span> in {selected.year}
                            </div>
                            <a 
                                href={selected.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-2.5 font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                            >
                                Verify Certificate
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
