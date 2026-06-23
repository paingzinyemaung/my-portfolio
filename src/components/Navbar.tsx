import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu ဖွင့်/ပိတ် State

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/80 border-b border-slate-900/80 backdrop-blur-md py-4'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-lg font-bold tracking-tight text-white z-50"
        >
          &lt; liampai.<span className="text-blue-400">dev</span> /&gt;
        </a>

        {/* Desktop Menu Links (PC မှာပဲ ပေါ်မည်၊ ဖုန်းမှာ ဝှက်ထားမည်) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-mono text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-white transition-colors duration-250 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Hamburger Button (ဖုန်းမှာပဲ ပေါ်မည့် အချောင်းသုံးချောင်း Button) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white focus:outline-none z-50 p-1"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            // ✕ Icon (ဖွင့်ထားချိန်)
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // ☰ Icon (ပိတ်ထားချိန်)
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown Menu (အမိုက်စား မှန်ကြည် Dropdown) */}
        <div
          className={`absolute top-full left-0 w-full bg-slate-950/95 border-b border-slate-900 backdrop-blur-lg transition-all duration-300 origin-top overflow-hidden md:hidden ${
            isOpen
              ? 'opacity-100 scale-y-100 py-6'
              : 'opacity-0 scale-y-0 h-0 py-0'
          }`}
        >
          <div className="flex flex-col items-center gap-5 font-mono text-base text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // link နှိပ်ရင် menu ပိတ်သွားရန်
                className="hover:text-white transition-colors w-full text-center py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
