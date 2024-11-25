import ContactForm from "../components/ContactForm";
import Education from "../components/Education";
import Effect from "../components/Effect";
import HeroSections from "../components/HeroSections";
import LampsEffect from "../components/LampsEffect";
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
      <Effect />
      <LampsEffect text="THANK YOU FOR VISIT MY PORTFOLIO 🙏 🙏" />
    </main>
  );
}
