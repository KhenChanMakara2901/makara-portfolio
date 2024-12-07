import Head from "next/head";
import dynamic from "next/dynamic";
const ContactForm = dynamic(() => import("../components/ContactForm"), {
  loading: () => <p>Loading...</p>,
});
const Education = dynamic(() => import("../components/Education"), {
  loading: () => <p>Loading...</p>,
});
const Effect = dynamic(() => import("../components/Effect"), {
  loading: () => <p>Loading...</p>,
});
const HeroSections = dynamic(() => import("../components/HeroSections"), {
  loading: () => <p>Loading...</p>,
});
const ProjectSection = dynamic(() => import("../components/Project"), {
  loading: () => <p>Loading...</p>,
});
const Skills = dynamic(() => import("../components/Skills"), {
  loading: () => <p>Loading...</p>,
});
const ScrollToTop = dynamic(() => import("../components/ScrollToTop"), {
  loading: () => <p>Loading...</p>,
});

export default function Page() {
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
