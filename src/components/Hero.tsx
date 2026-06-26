import { useState, useEffect, useRef } from 'react';
import myPhoto from '../assets/my-profile.png';

export default function Hero() {
  // Animation Control လုပ်မည့် State
  const [isVisible, setIsVisible] = useState(false);

  // Home Section ကို လှမ်းပြီး Reference ယူရန် Ref Object
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // IntersectionObserver ဖြင့် Viewport ထဲ ဝင်/ထွက် စောင့်ကြည့်ခြင်း
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Home Section က မျက်နှာပြင်ထဲ ဝင်လာလျှင် Animation စပွင့်မည်
          setIsVisible(true);
        } else {
          // မျက်နှာပြင်ထဲက ထွက်သွားလျှင် State ကို false ပြန်လုပ်ပြီး Reset ချပေးထားမည်
          // သို့မှသာ အခြား Section ကနေ Home ကို ပြန်လာရင် Animation ထပ်မံ အလုပ်လုပ်မည် ဖြစ်သည်
          setIsVisible(false);
        }
      },
      {
        // Section ရဲ့ ၁၀ ရာခိုင်နှုန်းခန့် မြင်ရရုံဖြင့် Animation စတင် အလုပ်လုပ်စေရန်
        threshold: 0.1,
      },
    );

    // စောင့်ကြည့်မည့် Section ကို Observer ထဲ ထည့်သွင်းခြင်း
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Component ပိတ်သွားလျှင် Cleanup ပြန်လုပ်ပေးခြင်း
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef} // 👈 ဤနေရာတွင် Ref ကို ချိတ်ဆက်ပေးရပါမည်
      id="home"
      className="relative min-h-screen flex items-center bg-slate-950 text-white pt-24 pb-16 overflow-hidden"
    >
      {/* 1. Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff09_1px,transparent_1px),linear-gradient(to_bottom,#ffffff09_1px,transparent_1px)] bg-size-[90px_90px] z-0"
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
        }}
      ></div>

      {/* 2. Floating Background Shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="animate-float-shape-1 absolute top-28 left-10 md:left-24 w-12 h-12 border-2 border-blue-400/40 rounded-xl"></div>
        <div className="animate-float-shape-2 absolute bottom-24 left-16 w-8 h-8 border border-teal-400/30 rounded-sm rotate-12"></div>
        <div className="animate-float-shape-3 absolute top-20 left-1/2 w-4 h-4 rounded-full bg-purple-500/30"></div>
        <div className="animate-float-shape-2 absolute top-40 right-20 lg:right-96 w-6 h-6 border border-purple-400/40 rotate-45"></div>
        <div className="animate-float-shape-1 absolute bottom-28 right-12 md:right-36 w-16 h-16 border-2 border-teal-400/40 rounded-full"></div>
      </div>

      {/* Ambient Lighting Backdrop */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/5 blur-[130px] rounded-full pointer-events-none"></div>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* --- ဘယ်ဘက်ခြမ်း Column --- */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
            {/* Avatar & Badge Section */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="relative group/avatar cursor-pointer">
                <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500 to-teal-400 opacity-40 blur-sm group-hover/avatar:opacity-80 group-hover/avatar:scale-110 transition-all duration-300"></div>
                <div className="relative w-20 h-20 rounded-full p-0.5 bg-linear-to-tr from-blue-500 to-teal-400 shadow-xl transition-all duration-300 transform group-hover/avatar:scale-110 group-hover/avatar:rotate-6 active:scale-95">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img
                      src={myPhoto}
                      alt="Paing Zin"
                      className="w-full h-full object-cover object-top filter contrast-105"
                    />
                  </div>
                </div>
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-slate-950 rounded-full"></span>
              </div>

              <div className="flex flex-col items-center sm:items-start font-mono">
                <span className="border border-blue-500/30 bg-blue-500/5 px-3 py-1 rounded-full text-xs font-semibold text-blue-400 tracking-wide mb-1">
                  Hello World 👋
                </span>
                <span className="text-xs text-slate-500">
                  Welcome to my space
                </span>
              </div>
            </div>

            {/* Main Heading Title */}
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-100 transition-all duration-1000 delay-150 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              Building Web Apps, <br className="hidden sm:block" />
              <span className="bg-linear-to-r from-blue-400 via-teal-400 to-indigo-400 bg-clip-text text-transparent">
                One Stack at a time.
              </span>
            </h1>

            {/* Description Paragraph */}
            <p
              className={`text-slate-400 text-base sm:text-lg leading-relaxed font-normal max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              A passionate Full-stack Web Developer specializing in the MERN
              stack and Next.js to craft clean, responsive, and delightful
              digital experiences.
            </p>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2 transition-all duration-1000 delay-450 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-all shadow-md shadow-blue-600/10 text-center"
              >
                View Projects
              </a>
              <button
                disabled
                className="border border-slate-800/60 bg-slate-900/40 text-slate-500 font-medium px-8 py-3 rounded-xl opacity-50 cursor-not-allowed text-center"
              >
                Download CV
              </button>
            </div>
          </div>

          {/* --- ညာဘက်ခြမ်း Column (IDE Windows Mockup) --- */}
          <div
            className={`lg:col-span-5 w-full max-w-md mx-auto transition-all duration-1000 delay-600 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="w-full bg-slate-900/50 border border-slate-800/80 rounded-2xl shadow-2xl backdrop-blur-sm overflow-hidden font-mono text-xs sm:text-sm hover:-translate-y-2 transition-transform duration-300">
              {/* Window Header */}
              <div className="bg-slate-950/80 px-4 py-3 flex items-center justify-between border-b border-slate-900">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/70"></span>
                </div>
                <span className="text-slate-500 text-xs font-medium">
                  developer.tsx
                </span>
                <span className="w-4"></span>
              </div>

              {/* Code Contents */}
              <div className="p-5 space-y-2.5 text-left text-slate-300">
                <div>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-blue-400">developer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">name:</span>{' '}
                  <span className="text-teal-300">'Paing Zin Ye Maung'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">role:</span>{' '}
                  <span className="text-teal-300">'Full-Stack Web Dev'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">coreStack:</span>{' '}
                  <span className="text-slate-400">[</span>
                </div>
                <div className="pl-8 text-amber-400">
                  'MongoDB', 'Express', 'React', 'Node.js'
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">],</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">framework:</span>{' '}
                  <span className="text-teal-300">'Next.js'</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-400">uiKit:</span>{' '}
                  <span className="text-teal-300">'Tailwind CSS v4'</span>
                </div>
                <div>&#125;;</div>

                <div className="pt-4 text-slate-500">
                  // Outputting environment status...
                </div>
                <div className="text-emerald-400 flex items-center gap-2">
                  <span>&gt; ready</span>
                  <span className="text-slate-300">
                    compiled successfully on port 5173
                  </span>
                </div>
                <div className="w-2 h-4 bg-blue-400 animate-pulse inline-block mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
