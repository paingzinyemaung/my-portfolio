export default function Projects() {
  const projectList = [
    {
      title: 'Weather Forecast Application',
      description:
        'A real-time weather app fetching data from a weather API, showing 24-hour forecasts and current weather conditions.',
      tags: ['JavaScript', 'HTML/CSS', 'WeatherAPI'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'QR Code Generator & Scanner',
      description:
        'A handy web tool that allows users to instantly generate QR codes from text/URLs and scan them using the device camera.',
      tags: ['JavaScript', 'Web API', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Network Status Monitor',
      description:
        'An internet connectivity monitoring tool utilizing AJAX to detect online/offline status and notify users instantly.',
      tags: ['React', 'AJAX', 'TypeScript'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-linear-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent inline-block">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-2">
            A showcase of some of my recent development work.
          </p>
        </div>

        {/* Responsive Grid System for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-3 hover:text-blue-400 transition cursor-pointer">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="text-xs font-semibold bg-slate-900 text-blue-400 px-3 py-1 rounded-full border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex gap-4 text-sm font-medium border-t border-slate-900/50 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  className="text-slate-300 hover:text-white flex items-center gap-1 transition"
                >
                  Code ↗
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 flex items-center gap-1 transition"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
