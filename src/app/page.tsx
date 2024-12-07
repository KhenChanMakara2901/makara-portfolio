import Head from "next/head";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("../components/ContactForm"));
const Education = dynamic(() => import("../components/Education"));
const Effect = dynamic(() => import("../components/Effect"));
const HeroSections = dynamic(() => import("../components/HeroSections"));
const ProjectSection = dynamic(() => import("../components/Project"));
const Skills = dynamic(() => import("../components/Skills"));
const ScrollToTop = dynamic(() => import("../components/ScrollToTop"));

export default function Home() {
  return (
    <main>
      <Head>
        <title>Makara-Portfolio</title>
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
