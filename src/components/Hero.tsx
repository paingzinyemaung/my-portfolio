export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-slate-950 text-white px-6 pt-16"
    >
      <div className="max-w-3xl">
        <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm block mb-3">
          Hi, my name is
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-100 mb-4 tracking-tight">
          Paing Zin Ye Maung
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
          I build modern web experiences.
        </h2>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          A passionate Frontend Developer specializing in React, TypeScript, and
          Tailwind CSS to create clean, responsive user interfaces.
        </p>
        <div className="flex gap-4 justify-center">
          {/* View My Work အတွက် */}
          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5"
          >
            View My Work
          </a>

          {/* Contact Me အတွက် */}
          <a
            href="#contact"
            className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-3 rounded-xl font-medium transition-all transform hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
