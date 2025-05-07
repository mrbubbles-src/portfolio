import About from '@/components/layout/about/about';
import StackGrid from '@/components/layout/stack/stack-grid';
import ContactForm from '@/components/layout/contact/ContactForm';
import ProjectCard from '@/components/layout/projects/project-card';
import { projects } from '@/data/projects';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ContactAbout from '@/components/layout/about/contact-about';

export default function Home() {
  return (
    <>
      <section
        id="about"
        className="scroll-mt-24 py-16"
        aria-labelledby="about-section">
        <h2 id="about-section" className="sr-only">
          About Me
        </h2>
        <About />
      </section>

      <section
        id="stack"
        className="scroll-mt-24 py-16"
        aria-labelledby="tech-stack">
        <h2 id="tech-stack" className="text-3xl font-bold mb-6 text-center">
          Tech Stack
        </h2>
        <StackGrid />
      </section>

      <section
        id="projects"
        className="scroll-mt-24 py-16"
        aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-3xl font-bold mb-6">
          Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 md:grid md:grid-cols-2 gap-4"
        aria-labelledby="contact-section">
        <Card className="w-full">
          <CardHeader>
            <h2 id="contact-section" className="text-3xl font-bold">
              Contact Me
            </h2>
          </CardHeader>
          <CardContent className="h-full">
            <ContactForm />
          </CardContent>
        </Card>
        <Card className="w-full mt-4 md:mt-0">
          <CardHeader>
            <h2 className="text-3xl font-bold text-center md:text-start md:ml-6">
              Profile Summary
            </h2>
          </CardHeader>
          <CardContent>
            <ContactAbout />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
