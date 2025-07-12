import Resources from "../components/sections/Resources";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import About from "@/components/sections/About"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Resources />
      <Contact />
    </main>
  );
}
