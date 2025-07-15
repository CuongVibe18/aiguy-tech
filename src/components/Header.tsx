import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bot, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SearchDialog } from '@/components/SearchDialog';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-foreground">AI Tools Hub</h1>
              <p className="text-xs text-muted-foreground">Khám phá công cụ AI tốt nhất</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <Badge variant="outline" className="border-primary/50 text-primary">
              <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse" />
              100+ Công cụ AI
            </Badge>
            <SearchDialog>
              <Button variant="outline" size="sm">
                <Search className="w-4 h-4 mr-2" />
                Tìm kiếm
              </Button>
            </SearchDialog>
          </div>

          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}