// server/githubController.js
export const getGitHubData = async (req, res) => {
    try {

        res.set({
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            "Pragma": "no-cache",
            "Expires": "0",
        });

        const username = process.env.GITHUB_USERNAME || 'tarunx47';
        const token = process.env.GITHUB_TOKEN;

        // If GITHUB_TOKEN is available, use official GitHub GraphQL API
        if (token) {
            const query = `
              query {
                user(login: "${username}") {
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      weeks {
                        contributionDays {
                          contributionCount
                          date
                          contributionLevel
                        }
                      }
                    }
                  }
                }
              }
            `;

            const response = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });

            if (response.ok) {
                const json = await response.json();
                if (!json.errors) {
                    const calendar = json.data?.user?.contributionsCollection?.contributionCalendar;
                    if (calendar) {
                        const contributions = [];
                        calendar.weeks.forEach(week => {
                            week.contributionDays.forEach(day => {
                                let level = 0;
                                switch (day.contributionLevel) {
                                    case 'NONE': level = 0; break;
                                    case 'FIRST_QUARTILE': level = 1; break;
                                    case 'SECOND_QUARTILE': level = 2; break;
                                    case 'THIRD_QUARTILE': level = 3; break;
                                    case 'FOURTH_QUARTILE': level = 4; break;
                                }
                                contributions.push({
                                    date: day.date,
                                    count: day.contributionCount,
                                    level: level
                                });
                            });
                        });

                        return res.json({
                            total: {
                                lastYear: calendar.totalContributions
                            },
                            contributions: contributions
                        });
                    }
                }
            }
        }

        // Fallback: Fetch public contribution data for the username
        const fallbackRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (fallbackRes.ok) {
            const fallbackData = await fallbackRes.json();
            return res.json(fallbackData);
        }

        res.json({
            total: { lastYear: 0 },
            contributions: []
        });

    } catch (error) {
        console.error('[GitHub Error]', error.message);
        res.status(500).json({ error: 'Failed to fetch GitHub data' });
    }
};
