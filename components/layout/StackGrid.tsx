import { Badge } from '@/components/ui/badge';
import { stack } from '@/data/stack';
import { Card, CardContent, CardHeader } from '../ui/card';

export default function StackGrid() {
  return (
    <div className="space-y-6 md:grid md:grid-cols-3 gap-4 auto-rows-fr">
      {Object.entries(stack).map(([category, tools]) => (
        <Card key={category} className="flex flex-col p-4 h-full">
          <CardHeader>
            <h3 className="text-2xl text-center font-semibold pt-1">
              {category}
            </h3>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3 justify-center">
            {tools.map((tool: string) => (
              <Badge
                key={tool}
                variant="default"
                className="font-semibold text-lg">
                {tool}
              </Badge>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
