export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 px-6"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-lg font-bold text-slate-200">Get In Touch</h3>
          <p className="text-sm mt-1">
            Let's collaborate and build something amazing together.
          </p>
        </div>

        {/* Social & Contact Links */}
        <div className="flex gap-6 text-sm font-medium">
          <a
            href="mailto:paingzinyemaung.pgo@gmail.com"
            className="hover:text-blue-400 transition"
          >
            Email
          </a>

          {/* rel attribute ထည့်ထားတဲ့ Link များ */}
          <a
            href="https://github.com/paingzinyemaung"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/paingzinyemaung"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-slate-600 mt-8 border-t border-slate-900 pt-6">
        <p>© 2026 Paing Zin Ye Maung. All rights reserved.</p>
      </div>
    </footer>
  );
}
