import About from '@/components/layout/about/about';
import StackGrid from '@/components/layout/stack/stack-grid';
import ContactForm from '@/components/layout/contact/ContactForm';
import ProjectCard from '@/components/layout/projects/project-card';
import { projects } from '@/data/projects';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import ContactAbout from '@/components/layout/about/contact-about';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-digtionary';

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <>
      <section
        id="about"
        className="scroll-mt-24"
        aria-labelledby="about-section">
        <h2 id="about-section" className="sr-only">
          About Me
        </h2>
        <About dictionary={dictionary.about} />
      </section>

      <section id="stack" className="scroll-mt-24" aria-labelledby="tech-stack">
        <h2 id="tech-stack" className="text-3xl font-bold mb-6">
          Tech Stack
        </h2>
        <StackGrid />
      </section>

      <section
        id="projects"
        className="scroll-mt-24 "
        aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="text-3xl font-bold mb-6">
          Projects
        </h2>
        <div className="grid gap-4 xl:grid-cols-2">
          {projects.map(({ key, ...projProps }) => (
            <ProjectCard
              key={key}
              dictionary={dictionary.projects[key]}
              {...projProps}
            />
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 xl:grid xl:grid-cols-2 gap-4"
        aria-labelledby="contact-section">
        <Card className="w-full">
          <CardHeader>
            <h2 id="contact-section" className="text-3xl font-bold">
              Contact Me
            </h2>
          </CardHeader>
          <CardContent className="h-full">
            <ContactForm dictionary={dictionary.contact} />
          </CardContent>
        </Card>
        <Card className="w-full mt-4 xl:mt-0">
          <CardHeader>
            <h2 className="text-3xl font-bold text-center xl:text-start xl:ml-6">
              Profile Summary
            </h2>
          </CardHeader>
          <CardContent>
            <ContactAbout dictionary={dictionary.contactAbout} />
          </CardContent>
        </Card>
      </section>
    </>
  );
}
