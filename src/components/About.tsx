export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 py-24 bg-slate-950 text-white relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold font-mono text-center mb-14 text-slate-100 tracking-tight">
          <span className="text-blue-400">&lt;</span> About Me{' '}
          <span className="text-blue-400">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-slate-400 text-base sm:text-lg leading-relaxed">
            <p>
              I am a passionate web developer based in Myanmar. My journey into
              web development started with a curiosity about how beautiful
              websites are crafted.
            </p>
            <p>
              Fast forward to today, I focus on building pixel-perfect,
              accessible, and user-centric web applications. I love solving
              problems and turning complex ideas into simple, elegant designs.
            </p>
          </div>

          {/* Philosophy Card */}
          <div className="lg:col-span-5 bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-md relative group transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5">
            {/* Hover လုပ်လျှင် လင်းလာမည့် လက်ရာမြောက် Left Indicator Line */}
            <div className="absolute -left-0.5 top-6 w-1 h-12 bg-blue-500 rounded-r-md group-hover:bg-blue-400 group-hover:h-16 transition-all duration-300"></div>

            <h3 className="text-xl font-bold text-blue-400 mb-3 font-mono pl-2">
              My Philosophy
            </h3>
            <p className="text-slate-400 italic text-sm sm:text-base pl-2 leading-relaxed">
              "Clean code, structured layout, and seamless user experiences are
              the pillars of a truly great web application."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
