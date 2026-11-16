import React, { useState, useEffect } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';

import { Tooltip as ReactTooltip } from 'react-tooltip';
import { PageHeader } from "../components/common/PageHeader";
import { useQuery } from '@tanstack/react-query';
import { API_URL } from '@/config/api';


export const GithubPage = () => {

    // Detect dark mode from DOM class
    const [isDark, setIsDark] = useState(() =>
        document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        // checks for dark mode class
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains('dark'));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
        return () => observer.disconnect();
    }, []);

    const { data, isLoading, error } = useQuery({
        queryKey: ['githubStats'],
        queryFn: async () => {
            try {
                const response = await fetch(`${API_URL}/api/github`);
                if (response.ok) {
                    const json = await response.json();
                    if (json.contributions && json.contributions.length > 0) {
                        return json;
                    }
                }
            } catch (err) {
                console.warn('[GitHub] Server fetch error, using fallback:', err.message);
            }

            // Direct public fallback for tarunx47 if local backend is offline
            const fallbackRes = await fetch('https://github-contributions-api.jogruber.de/v4/tarunx47?y=last');
            if (fallbackRes.ok) {
                const fallbackJson = await fallbackRes.json();
                if (fallbackJson.contributions) {
                    return fallbackJson;
                }
            }

            throw new Error('Unable to load GitHub contributions');
        },
        staleTime: 5 * 60 * 1000,
        gcTime: 30 * 60 * 1000,
        refetchOnWindowFocus: true,
        refetchOnMount: true,
        refetchInterval: 60 * 60 * 1000,
    });



    // Red for light mode, Yellow for dark mode
    const explicitTheme = {
        light: ['#89aadb', '#2be365', '#ef9a9a', '#e53935', '#1317ff'],
        dark: ['#151223', '#5e42cd', '#7e28c0', '#ababaa', '#7df925'],
    };

    return (
        <div className="py-8 sm:py-12 flex flex-col w-full">
            <div
                className="w-full max-w-6xl mx-auto"
            >
                <div className="mb-8 sm:mb-12">
                    <PageHeader val={'07.'} subheading={"Open Source"} mainHeading={"GitHub Activity"} />
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-64 gap-4">
                        <div className="w-12 h-12 border-t-2 border-b-2 border-primary rounded-full animate-spin"></div>
                        <p className="text-gray-500">Loading GitHub stats...</p>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-500 p-6 sm:p-8 border border-red-500/20 rounded-xl bg-red-500/5">
                        <p>Failed to load GitHub activity: {error.message}</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-8">
                        <div className="overflow-hidden rounded-lg border border-border bg-card p-4 sm:p-6 md:p-8">
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 gap-3 sm:gap-4">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">GitHub Activity</h3>
                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                        Total: <span className="font-mono font-bold text-black dark:text-white">{data?.total?.lastYear || 0}</span> contributions in the last year
                                    </p>
                                </div>
                                <div className="text-xs sm:text-sm text-gray-400">
                                    All contributions
                                </div>
                            </div>

                            <div className="w-full overflow-x-auto pb-4 pt-1 [-webkit-overflow-scrolling:touch]">
                                <div className="min-w-fit flex justify-start sm:justify-center mx-auto">
                                    {data?.contributions && data.contributions.length > 0 ? (
                                        <>
                                            <ActivityCalendar
                                                data={data.contributions}
                                                theme={explicitTheme} // Use the robust theme
                                                labels={{
                                                    totalCount: '{{count}} contributions in {{year}}',
                                                }}
                                                colorScheme={isDark ? 'dark' : 'light'}
                                                showWeekdayLabels
                                                blockSize={13}
                                                blockMargin={4}
                                                fontSize={14}
                                            />
                                            <ReactTooltip id="github-tooltip" />
                                        </>
                                    ) : (
                                        <div className="text-gray-500 dark:text-gray-400 py-10 text-center italic w-full">
                                            No contribution data available to display.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <p className="text-center text-[0.7rem] text-muted-foreground mt-1 block sm:hidden">
                                Swipe horizontally to explore full timeline &rarr;
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
