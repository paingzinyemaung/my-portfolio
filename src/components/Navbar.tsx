import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

type NavbarProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export default function Navbar({ theme, setTheme }: NavbarProps) {
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
          ? 'bg-white/80 border-b border-slate-200/80 backdrop-blur-md py-4 dark:bg-slate-950/80 dark:border-slate-800/80'
          : 'bg-transparent border-b border-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-lg font-bold tracking-tight text-slate-900 z-50 dark:text-white"
        >
          &lt; liampai.<span className="text-blue-400">dev</span> /&gt;
        </a>

        {/* Desktop Menu Links (PC မှာပဲ ပေါ်မည်၊ ဖုန်းမှာ ဝှက်ထားမည်) */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-6 text-sm font-mono text-slate-500 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-slate-950 dark:hover:text-white transition-colors duration-250 relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
            className="relative h-9 w-9 overflow-hidden rounded-lg border border-slate-200 bg-white/80 text-amber-500 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900/80 dark:text-blue-300 dark:hover:border-blue-400 dark:focus-visible:ring-offset-slate-950"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
          >
            <svg
              className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${theme === 'dark' ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            </svg>
            <svg
              className={`absolute inset-0 m-auto h-4 w-4 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9 9 0 1015.354 20.354 9 9 0 0020.354 15.354z" />
            </svg>
          </button>
        </div>

        {/* Hamburger Button (ဖုန်းမှာပဲ ပေါ်မည့် အချောင်းသုံးချောင်း Button) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-500 hover:text-slate-950 focus:outline-none z-50 p-1 dark:text-slate-400 dark:hover:text-white"
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
          className={`absolute top-full left-0 w-full bg-white/95 border-b border-slate-200 backdrop-blur-lg transition-all duration-300 origin-top overflow-hidden dark:bg-slate-950/95 dark:border-slate-800 md:hidden ${
            isOpen
              ? 'opacity-100 scale-y-100 py-6'
              : 'opacity-0 scale-y-0 h-0 py-0'
          }`}
        >
          <div className="flex flex-col items-center gap-5 font-mono text-base text-slate-500 dark:text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)} // link နှိပ်ရင် menu ပိတ်သွားရန်
                className="hover:text-slate-950 dark:hover:text-white transition-colors w-full text-center py-2"
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
