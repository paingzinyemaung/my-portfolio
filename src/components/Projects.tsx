import { useState, useEffect } from 'react';

export default function Projects() {
  // useState<any[]> ဖြင့် Type သတ်မှတ်ပေးထားပါသည်
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/paingzinyemaung/repos?sort=updated')
      .then((res) => res.json())
      .then((data) => {
        if (!Array.isArray(data)) {
          setLoading(false);
          return;
        }

        const filteredRepos = data.filter(
          (repo: any) =>
            repo.topics &&
            repo.topics.some((t: string) => t.toLowerCase() === 'portfolio'),
        );
        setRepos(filteredRepos);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching GitHub repos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-20 bg-transparent text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent inline-block">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-2">
            A showcase of my recent development work from GitHub.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-slate-400">
            Loading projects from GitHub...
          </p>
        ) : repos.length === 0 ? (
          <p className="text-center text-slate-400">
            No projects found with 'portfolio' topic on GitHub yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo: any) => {
              const rawTopics = (repo.topics as string[]) || [];
              const repoLang = repo.language ? repo.language.toLowerCase() : '';

              const uniqueTopicsMap = new Map();
              rawTopics.forEach((t) => {
                const lower = t.toLowerCase();
                if (
                  lower !== 'portfolio' &&
                  lower !== repoLang &&
                  !uniqueTopicsMap.has(lower)
                ) {
                  uniqueTopicsMap.set(lower, t);
                }
              });

              const uniqueTopics = Array.from(uniqueTopicsMap.values()).slice(
                0,
                4,
              );

              return (
                <div
                  key={repo.id}
                  className="bg-slate-900/50 backdrop-blur-md border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-1.5 hover:border-slate-700/80 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Main Body */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-slate-100 mb-2.5 hover:text-blue-400 transition cursor-pointer">
                      {repo.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                      {repo.description ||
                        'No description provided for this repository.'}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {repo.language && (
                        <span className="text-xs font-semibold bg-blue-950/60 text-blue-400 px-3 py-1 rounded-full border border-blue-800/40">
                          {repo.language}
                        </span>
                      )}
                      {uniqueTopics.map((topic: any, tIndex: number) => (
                        <span
                          key={tIndex}
                          className="text-xs font-semibold bg-slate-800/60 text-teal-400 px-3 py-1 rounded-full border border-slate-700/40"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 py-4 bg-slate-950/40 border-t border-slate-800/80 flex items-center gap-3 text-xs font-medium">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 text-slate-300 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 font-semibold"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        />
                      </svg>
                      Code
                    </a>

                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-3 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-400 hover:text-blue-300 transition-all duration-200 flex items-center justify-center gap-1.5 font-semibold"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
