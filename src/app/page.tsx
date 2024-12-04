import ContactForm from "../components/ContactForm";
import Education from "../components/Education";
import Effect from "../components/Effect";
import HeroSections from "../components/HeroSections";
import ProjectSection from "../components/Project";
import Skills from "../components/Skills";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <main>
      <ScrollToTop />
      <HeroSections />
      <Skills />
      <Education />
      <ProjectSection />
      <ContactForm />
      <Effect />
    </main>
  );
}
