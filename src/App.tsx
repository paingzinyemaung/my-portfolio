import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-blue-500 selection:text-white scroll-smooth">
      {/* Navigation Menu */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      {/* Footer & Contact */}
      <Footer />
    </div>
  );
}

export default App;
