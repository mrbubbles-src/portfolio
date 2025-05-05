// page.tsx
import About from '@/components/About';
import StackGrid from '@/components/StackGrid';
import ContactForm from '@/components/ContactForm';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <section id="about" className="scroll-mt-24 py-16">
        <About />
      </section>

      <section id="stack" className="scroll-mt-24 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Tech Stack</h2>
        <StackGrid />
      </section>

      <section id="projects" className="scroll-mt-24 py-16">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 py-16">
        <Card className="">
          <CardHeader>
            <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
          </CardHeader>
          <div>
            <CardContent className="max-w-xl mx-auto">
              <ContactForm />
            </CardContent>
          </div>
        </Card>
      </section>
    </>
  );
}
