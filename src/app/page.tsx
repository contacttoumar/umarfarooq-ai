import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { Services } from "@/components/Services";
import { StackPicker } from "@/components/StackPicker";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <StackPicker />
        <Work />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
