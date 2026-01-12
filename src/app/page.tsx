import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Freelance from "../components/Freelance";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import EducationSection from "../components/EducationSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <EducationSection />
        <Freelance />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border py-8 px-4 text-center text-muted-foreground text-sm">
        <p>&copy; 2026 Ruwani Ranthika. All rights reserved.</p>
      </footer>
    </div>
  );
}
