import { useState, useRef } from 'react';
import myPhoto from '../assets/my-photo.png';

export default function Hero() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Card Hover Perspective Logic
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    setRotate({ x: -y / 10, y: x / 10 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white pt-16 relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
        {/* Left Side: Content */}
        <div className="space-y-6 text-left">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            <p className="text-xs font-mono text-slate-400 tracking-wider">
              Hello World!
            </p>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Building Web Apps, <br />
            <span className="bg-linear-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
              One Stack at a time.
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            A passionate Full-stack Web Developer specializing in the MERN stack
            and Next.js to craft clean, responsive, and delightful digital
            experiences.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="#projects"
              className="bg-linear-to-r from-teal-500 to-blue-600 hover:opacity-90 text-white px-6 py-3 rounded-xl font-medium shadow-md transition-all"
            >
              View Work
            </a>
            <a
              href="mailto:paingzinyemaung.pgo@gmail.com"
              className="border border-slate-800 hover:bg-slate-900 text-slate-300 px-6 py-3 rounded-xl font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: 3D Interactive Card */}
        <div className="flex justify-center md:justify-end items-center">
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              transition: rotate.x === 0 ? 'transform 0.5s ease' : 'none',
            }}
            className="relative h-105 w-[320px] rounded-2xl p-0.5 bg-linear-to-br from-teal-500 via-slate-800 to-blue-600 animate-border-glow shadow-2xl cursor-pointer overflow-hidden group"
          >
            {/* Card Inner Context */}
            <div className="w-full h-full bg-slate-950/90 rounded-2xl p-6 flex flex-col justify-between items-center relative overflow-hidden">
              {/* Decorative Mesh Background */}
              <div className="absolute inset-0 bg-radial-to-b from-blue-500/10 to-transparent opacity-50"></div>

              <div className="relative w-48 h-48 mt-4 rounded-full overflow-hidden border-4 border-slate-900 z-10 shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img
                  src={myPhoto}
                  alt="Paing Zin"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="w-full text-center space-y-2 z-10">
                <h3 className="text-xl font-bold tracking-wide group-hover:text-teal-400 transition-colors">
                  Paing Zin Ye Maung
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  MERN & Next.js Developer
                </p>
                <div className="flex justify-center gap-2 pt-2 text-xs font-mono text-slate-500">
                  <span>● Interactive</span>
                  <span>● Responsive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
