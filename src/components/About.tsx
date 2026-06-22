export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent inline-block">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* ဘယ်ဘက်ခြမ်း - မိတ်ဆက်စာသား */}
          <div className="text-slate-300 space-y-4 text-lg leading-relaxed">
            <p>
              I am a passionate frontend developer based in Myanmar. My journey
              into web development started with a curiosity about how beautiful
              websites are crafted.
            </p>
            <p>
              Fast forward to today, I focus on building pixel-perfect,
              accessible, and user-centric web applications. I love solving
              problems and turning complex ideas into simple, elegant designs.
            </p>
          </div>

          {/* ညာဘက်ခြမ်း - ခံယူချက် Box လေး */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700/50 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <h3 className="text-xl font-semibold mb-3 text-blue-400">
              My Philosophy
            </h3>
            <p className="text-slate-400 text-base italic leading-relaxed">
              "Clean code, structured layout, and seamless user experiences are
              the pillars of a truly great web application."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
