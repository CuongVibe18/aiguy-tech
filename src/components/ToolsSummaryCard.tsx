import { aiTools, aiToolCategories } from '@/data/aiTools';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export function ToolsSummaryCard() {
  // Group tools by category
  const groupedTools = aiToolCategories.reduce((acc, category) => {
    acc[category.id] = aiTools.filter(tool => tool.category === category.id);
    return acc;
  }, {} as Record<string, typeof aiTools>);

  const totalTools = aiTools.length;

  return (
    <Card className="bg-card/80 backdrop-blur-lg border-border/50 hover:border-border transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-foreground">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <Icons.BarChart3 className="w-5 h-5 text-primary-foreground" />
          </div>
          Tổng Quan Công Cụ AI
        </CardTitle>
        <p className="text-muted-foreground">
          Hiện có <span className="font-semibold text-primary">{totalTools}</span> công cụ AI được phân loại thành <span className="font-semibold text-primary">{aiToolCategories.length}</span> nhóm chức năng
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {aiToolCategories.map(category => {
          const IconComponent = Icons[category.icon as keyof typeof Icons] as LucideIcon;
          const categoryTools = groupedTools[category.id] || [];
          
          return (
            <div key={category.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-background/50">
                  <IconComponent className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{category.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {categoryTools.length} công cụ
                  </p>
                </div>
              </div>
              
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                {categoryTools.length}
              </Badge>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}