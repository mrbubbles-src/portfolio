import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProjectImage from './ProjectImage';

interface IProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
  image,
}: IProjectCardProps) {
  return (
    <Card className="shadow-md flex flex-col h-full">
      <CardHeader>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex flex-wrap gap-2 text-xs">
          {tech.map((t) => (
            <span key={t} className="bg-muted px-2 py-0.5 rounded text-base">
              {t}
            </span>
          ))}
        </div>
      </CardContent>
      <CardContent className="flex flex-col flex-1 gap-4">
        {live && <ProjectImage live={live} image={image} title={title} />}
      </CardContent>
      <CardDescription className="px-6 pb-2 ">
        <p className="text-base text-muted-foreground">{description}</p>
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
