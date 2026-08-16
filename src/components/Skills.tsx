export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-24 bg-transparent text-slate-900 relative dark:text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-14">
          <h2 className="text-3xl font-bold font-mono mb-3 text-slate-900 tracking-tight dark:text-slate-100">
            <span className="text-teal-400">&lt;</span> My Tech Stack{' '}
            <span className="text-teal-400">/&gt;</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base dark:text-slate-400">
            Technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-sm">
          {[
            'HTML5 & CSS3',
            'JavaScript (ES6+)',
            'TypeScript',
            'Tailwind CSS',
            'Vite',
            'React 19',
            'Git & GitHub',
            'Responsive Design',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white/70 backdrop-blur-md border border-slate-200 p-4 rounded-xl text-slate-700 hover:text-teal-600 hover:border-teal-500/50 hover:bg-white shadow-sm cursor-default dark:bg-slate-900/40 dark:border-slate-800/80 dark:text-slate-300 dark:hover:text-teal-400 dark:hover:bg-slate-900/60"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
