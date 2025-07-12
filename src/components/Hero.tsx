import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, TrendingUp } from 'lucide-react';

export function Hero() {
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories');
    categoriesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,hsl(263_70%_65%_/_0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(142_76%_36%_/_0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Cập nhật liên tục • Đánh giá chuyên sâu</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Khám Phá Thế Giới
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Công Cụ AI</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tổng hợp và đánh giá chi tiết các công cụ AI hàng đầu cho từng lĩnh vực. 
              Từ tạo hình ảnh đến lập trình, tìm công cụ hoàn hảo cho công việc của bạn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToCategories}
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-primary-foreground"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Khám phá ngay
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
            >
              Xem bảng xếp hạng
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Công cụ AI được review</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-accent">8</div>
              <div className="text-sm text-muted-foreground">Danh mục chuyên sâu</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary-glow">24/7</div>
              <div className="text-sm text-muted-foreground">Cập nhật xu hướng mới</div>
            </div>
          </div>

          <Button 
            variant="ghost" 
            onClick={scrollToCategories}
            className="mt-8 animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}