import { aiTools, aiToolCategories } from '@/data/aiTools';
import { Header } from '@/components/Header';
import { SimpleAIToolCard } from '@/components/SimpleAIToolCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const AllTools = () => {
  // Group tools by category
  const groupedTools = aiToolCategories.reduce((acc, category) => {
    acc[category.id] = aiTools.filter(tool => tool.category === category.id);
    return acc;
  }, {} as Record<string, typeof aiTools>);

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-12">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </Button>
          </Link>
          
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Tất Cả Công Cụ AI
            </h1>
            <p className="text-muted-foreground mt-2">
              Khám phá {aiTools.length} công cụ AI được phân loại theo {aiToolCategories.length} nhóm chức năng
            </p>
          </div>
        </div>

        <main className="space-y-16">
          {aiToolCategories.map(category => {
            const tools = groupedTools[category.id] || [];
            if (tools.length === 0) return null;
            
            const IconComponent = Icons[category.icon as keyof typeof Icons] as LucideIcon;
            
            return (
              <section key={category.id} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-primary">
                    <IconComponent className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{category.name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {tools.length} công cụ được đề xuất
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tools.map(tool => (
                    <SimpleAIToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </section>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default AllTools;