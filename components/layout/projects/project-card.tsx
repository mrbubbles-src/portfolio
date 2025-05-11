import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProjectImage from '@/components/layout/projects/project-image';
import { Badge } from '@/components/ui/badge';
import { title } from 'process';

interface IProjectCardProps {
  tech: string[];
  github: string;
  live: string;
  image: string;
}
type ProjectTranslation = { title: string; description: string };

export default function ProjectCard({
  tech,
  github,
  live,
  image,
  dictionary,
}: IProjectCardProps & { dictionary: ProjectTranslation }) {
  return (
    <Card className="shadow-md flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-primary text-2xl">
          {dictionary.title}
        </CardTitle>
      </CardHeader>
      <CardContent role="list" className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge
            role="listitem"
            variant={'default'}
            key={t}
            className="px-3 py-1 rounded text-lg font-bold">
            {t}
          </Badge>
        ))}
      </CardContent>
      <CardContent className="flex flex-col flex-1 gap-4">
        {live && <ProjectImage live={live} image={image} title={title} />}
      </CardContent>
      <CardDescription className="px-6 pb-2 h-full">
        <p className="text-lg text-foreground">{dictionary.description}</p>
      </CardDescription>
      <CardFooter className="mt-auto px-6 pt-2 pb-4">
        <div className="flex gap-2 text-xs grow justify-center">
          <Button asChild size={'lg'} className="w-full max-w-[10rem]">
            <a href={live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          </Button>
          <Button
            asChild
            size={'lg'}
            variant="outline"
            className="w-full max-w-[10rem]">
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
