import ContactForm from "../components/ContactForm";
import HeroSections from "../components/HeroSections";
import ProjectSection from "../components/Project";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <HeroSections />
      <Skills />
      <ProjectSection />
      <ContactForm />
    </>
  );
}
