import {
  About,
  Header,
  Intro,
  SectionDivider,
  Experience,
  Projects,
  Skills,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start px-4 gap-24">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
