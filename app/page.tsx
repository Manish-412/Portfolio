import { JsonLd } from "../components/site/json-ld";
import { PageTransition } from "../components/site/page-transition";
import { About } from "../components/site/sections/about";
import { Certifications } from "../components/site/sections/certifications";
import { Contact } from "../components/site/sections/contact";
import { Experience } from "../components/site/sections/experience";
import { Footer } from "../components/site/sections/footer";
import { Hero } from "../components/site/sections/hero";
import { Projects } from "../components/site/sections/projects";
import { Skills } from "../components/site/sections/skills";
import { Navbar } from "../components/site/navbar";
import { BackgroundOrbs } from "../components/site/background-orbs";
import { ScrollProgress } from "../components/site/scroll-progress";
import { Cursor } from "../components/site/cursor";
import { CommandPalette } from "../components/site/command-palette";

export default function Home() {
  return (
    <PageTransition>
      <JsonLd />
      <BackgroundOrbs />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <CommandPalette />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}
