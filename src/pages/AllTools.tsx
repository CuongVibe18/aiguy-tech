import { aiTools, aiToolCategories } from '@/data/aiTools';
import { Header } from '@/components/Header';
import { SimpleAIToolCard } from '@/components/SimpleAIToolCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

const AllTools = () => {
  // Group tools by category
  const groupedTools = aiToolCategories.reduce((acc, category) => {
    acc[category.id] = aiTools.filter(tool => tool.category === category.id);
    return acc;
  }, {} as Record<string, typeof aiTools>);

  const [selectedCategory, setSelectedCategory] = useState(aiToolCategories[0]?.id || '');

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

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {aiToolCategories.map(category => {
            const IconComponent = Icons[category.icon as keyof typeof Icons] as LucideIcon;
            const isActive = selectedCategory === category.id;
            
            // Special handling for productivity tools category
            if (category.id === 'productivity') {
              return (
                <Link key={category.id} to="/productivity-tools">
                  <Button
                    variant={isActive ? "default" : "outline"}
                    className="flex items-center gap-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    {category.name}
                  </Button>
                </Link>
              );
            }
            
            return (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={isActive ? "default" : "outline"}
                className="flex items-center gap-2"
              >
                <IconComponent className="w-4 h-4" />
                {category.name}
              </Button>
            );
          })}
        </div>

        <main>
          {(() => {
            const category = aiToolCategories.find(cat => cat.id === selectedCategory);
            const tools = groupedTools[selectedCategory] || [];
            
            if (!category || tools.length === 0) return null;
            
            const IconComponent = Icons[category.icon as keyof typeof Icons] as LucideIcon;
            
            return (
              <section className="space-y-6">
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
          })()}
        </main>
      </div>
    </div>
  );
};

export default AllTools;