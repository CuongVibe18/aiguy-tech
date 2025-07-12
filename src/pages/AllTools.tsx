import { aiTools, aiToolCategories } from '@/data/aiTools';
import { Header } from '@/components/Header';
import { CategorySection } from '@/components/CategorySection';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

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

        <main className="space-y-20">
          {aiToolCategories.map(category => (
            <CategorySection 
              key={category.id}
              categoryId={category.id}
              tools={groupedTools[category.id] || []}
            />
          ))}
        </main>
      </div>
    </div>
  );
};

export default AllTools;