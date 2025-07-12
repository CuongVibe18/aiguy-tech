import { AITool, aiToolCategories } from '@/data/aiTools';
import { AIToolCard } from './AIToolCard';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CategorySectionProps {
  categoryId: string;
  tools: AITool[];
}

export function CategorySection({ categoryId, tools }: CategorySectionProps) {
  const category = aiToolCategories.find(cat => cat.id === categoryId);
  if (!category || tools.length === 0) return null;

  const IconComponent = Icons[category.icon as keyof typeof Icons] as LucideIcon;

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-lg bg-gradient-primary">
          <IconComponent className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
          <p className="text-muted-foreground">
            {tools.length} công cụ được đề xuất
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map(tool => (
          <AIToolCard key={tool.id} tool={tool} />
        ))}
      </div>
    </section>
  );
}