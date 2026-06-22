export default function Skills() {
  const skills = [
    'React 19',
    'Tailwind CSS',
    'TypeScript',
    'JavaScript (ES6+)',
    'Vite',
    'Git & GitHub',
    'HTML5 & CSS3',
    'Responsive Design',
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent inline-block">
            My Tech Stack
          </h2>
          <p className="text-slate-400 mt-2">
            Technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center hover:border-blue-500/50 hover:bg-slate-900/50 transition duration-300 group"
            >
              <p className="text-slate-300 font-medium group-hover:text-blue-400 transition">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
