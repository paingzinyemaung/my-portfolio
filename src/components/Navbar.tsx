export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md text-white z-50 border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        {/* Logo ကိုနှိပ်ရင် အပေါ်ဆုံးပြန်ရောက်အောင် #home ပေးထားပါမယ် */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wider flex items-center gap-2"
        >
          <span className="text-blue-500">{'<'}</span>
          <span className="text-white">liampai.dev</span>
          <span className="text-blue-500">{'/>'}</span>
        </a>

        <ul className="flex gap-6 text-sm font-medium text-slate-300">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
