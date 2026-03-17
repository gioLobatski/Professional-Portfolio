import Header from "@/components/sections/home/Header";
import HeroSection from "@/components/sections/home/HeroSection";
import About from "@/components/sections/home/About";
import Projects from "@/components/sections/home/Projects";
import Skills from "@/components/sections/home/Skills";
import Experience from "@/components/sections/home/Experience";
import Contact from "@/components/sections/home/Contact";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
