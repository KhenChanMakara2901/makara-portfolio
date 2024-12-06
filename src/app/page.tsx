import Head from "next/head";
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
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio website. Here you can see my work, skills, education, and contact information."
        />
      </Head>
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
