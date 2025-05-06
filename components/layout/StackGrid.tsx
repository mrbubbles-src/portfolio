import { Badge } from '@/components/ui/badge';
import { stack } from '@/data/stack';

export default function StackGrid() {
  return (
    <div className="space-y-6 md:flex gap-2 ">
      {Object.entries(stack).map(([category, tools]) => (
        <div key={category} className="flex flex-col p-2">
          <h3 className="text-xl font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool: string) => (
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
