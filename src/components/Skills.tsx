export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-24 bg-slate-950 text-white relative"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-14">
          <h2 className="text-3xl font-bold font-mono mb-3 text-slate-100 tracking-tight">
            <span className="text-teal-400">&lt;</span> My Tech Stack{' '}
            <span className="text-teal-400">/&gt;</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base">
            Technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-sm">
          {[
            'React 19',
            'Tailwind CSS',
            'TypeScript',
            'JavaScript (ES6+)',
            'Vite',
            'Git & GitHub',
            'HTML5 & CSS3',
            'Responsive Design',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-900/30 border border-slate-900/60 p-4 rounded-xl text-slate-300 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-300 shadow-sm cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
