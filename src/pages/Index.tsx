import { aiTools, aiToolCategories } from '@/data/aiTools';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { CategorySection } from '@/components/CategorySection';

const Index = () => {
  // Group tools by category
  const groupedTools = aiToolCategories.reduce((acc, category) => {
    acc[category.id] = aiTools.filter(tool => tool.category === category.id);
    return acc;
  }, {} as Record<string, typeof aiTools>);

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      <Hero />
      
      <main className="container mx-auto px-4 py-16 space-y-20" id="categories">
        {aiToolCategories.map(category => (
          <CategorySection 
            key={category.id}
            categoryId={category.id}
            tools={groupedTools[category.id] || []}
          />
        ))}
      </main>

      <footer className="border-t border-border/50 bg-background/80 backdrop-blur-lg mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 AI Tools Hub. Tổng hợp công cụ AI tốt nhất cho công việc của bạn.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
