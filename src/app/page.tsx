import ContactForm from "../components/ContactForm";
import Education from "../components/Education";
import HeroSections from "../components/HeroSections";
import ProjectSection from "../components/Project";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <main>
      <HeroSections />
      <Skills />
      <Education />
      <ProjectSection />
      <ContactForm />
    </main>
  );
}
