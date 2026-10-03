import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <div className="atmosphere" aria-hidden />
      <div className="content">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Stack />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
