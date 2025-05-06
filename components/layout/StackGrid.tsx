import { Badge } from '@/components/ui/badge';
import { stack } from '@/data/stack';
import { Card, CardContent, CardHeader } from '../ui/card';

export default function StackGrid() {
  return (
    <div className="space-y-6 md:grid md:grid-cols-3 gap-4 auto-rows-fr">
      {Object.entries(stack).map(([category, tools]) => (
        <Card key={category} className="flex flex-col p-2 h-full">
          <CardHeader className="pl-2">
            <h3 className="text-xl font-semibold pt-1">{category}</h3>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3 p-2">
            {tools.map((tool: string) => (
              <Badge
                key={tool}
                variant="secondary"
                className=" text-base py-2 px-4">
                {tool}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
