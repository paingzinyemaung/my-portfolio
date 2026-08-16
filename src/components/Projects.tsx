import { useState, useEffect } from 'react';

export default function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GitHub API မှ သင့်အကောင့်ရှိ Public Repositories များကို လှမ်းဆွဲမည်
    fetch('https://api.github.com/users/paingzinyemaung/repos?sort=updated')
      .then((res) => res.json())
      .then((data) => {
        // 'portfolio' ဆိုတဲ့ topic ထည့်ထားသော repo များကိုသာ ရွေးထုတ်မည်
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
          /* Responsive Grid System for Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo: any) => {
              // Topics များကို lowercase ပြောင်းပြီး Duplicate များ နှင့် repo.language နှင့်တူသည်များကိုပါ ဖယ်ထုတ်ခြင်း
              const rawTopics = (repo.topics as string[]) || [];
              const repoLang = repo.language ? repo.language.toLowerCase() : '';

              const uniqueTopicsMap = new Map();
              rawTopics.forEach((t) => {
                const lower = t.toLowerCase();
                // 'portfolio' ကိုလည်းဖြုတ်မည်၊ repo.language နဲ့တူတာကိုလည်း ဖြုတ်မည်
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
                  className="bg-slate-900/50 backdrop-blur-md border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-100 mb-3 hover:text-blue-400 transition cursor-pointer">
                      {repo.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {repo.description ||
                        'No description provided for this repository.'}
                    </p>

                    {/* Tech Stack Tags (Language & Topics) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {repo.language && (
                        <span className="text-xs font-semibold bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full border border-blue-800/40">
                          {repo.language}
                        </span>
                      )}
                      {uniqueTopics.map((topic: any, tIndex: number) => (
                        <span
                          key={tIndex}
                          className="text-xs font-semibold bg-slate-800/70 text-teal-400 px-3 py-1 rounded-full border border-slate-700/50"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 pt-0 flex gap-4 text-sm font-medium border-t border-slate-800/50 mt-auto">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-white flex items-center gap-1 transition"
                    >
                      Code ↗
                    </a>
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition"
                      >
                        Live Demo ↗
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
