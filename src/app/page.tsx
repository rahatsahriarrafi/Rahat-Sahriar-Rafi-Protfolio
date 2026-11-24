import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import {
  About,
  Achievements,
  Certifications,
  Contact,
  Experience,
  Expertise,
  Footer,
  Journey,
  Projects,
  Research,
  Writing,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Expertise />
        <Research />
        <Achievements />
        <Certifications />
        <Journey />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
