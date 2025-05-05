import { Badge } from '@/components/ui/badge';

const stack = {
  Frontend: [
    'HTML5',
    'CSS3',
    'SASS',
    'JavaScript',
    'TypeScript',
    'React',
    'TailwindCSS',
    'Bootstrap',
  ],
  Backend: ['Node.js', 'Express.js', 'MongoDB', 'SQL'],
  'Tools & Frameworks': [
    'Next.js',
    'Prisma',
    'Vite',
    'Git',
    'Figma',
    'Adobe Suite',
    'Affinity Suite',
  ],
};

export default function StackGrid() {
  return (
    <div className="space-y-6 md:flex gap-2 ">
      {Object.entries(stack).map(([category, tools]) => (
        <div key={category} className="flex flex-col p-2">
          <h3 className="text-xl font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <Badge
                key={tool}
                variant="secondary"
                className=" text-base py-2 px-4">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
