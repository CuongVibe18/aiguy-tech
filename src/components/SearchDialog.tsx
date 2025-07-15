import { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ExternalLink } from 'lucide-react';
import { aiTools } from '@/data/aiTools';
import { Badge } from '@/components/ui/badge';

interface SearchDialogProps {
  children: React.ReactNode;
}

export function SearchDialog({ children }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const filteredTools = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return aiTools.filter(tool => 
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.features.some(feature => feature.toLowerCase().includes(query))
    ).slice(0, 8); // Giới hạn 8 kết quả
  }, [searchQuery]);

  const handleToolClick = (toolUrl: string) => {
    window.open(toolUrl, '_blank');
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Tìm kiếm công cụ AI..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9"
              autoFocus
            />
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto">
          {searchQuery.trim() && (
            <div className="p-4">
              {filteredTools.length > 0 ? (
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground mb-3">
                    Tìm thấy {filteredTools.length} kết quả
                  </p>
                  {filteredTools.map((tool) => (
                    <div
                      key={tool.id}
                      onClick={() => handleToolClick(tool.affiliateLink)}
                      className="p-3 rounded-lg border hover:bg-accent cursor-pointer transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <img
                          src={tool.image}
                          alt={tool.name}
                          className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium text-sm truncate">{tool.name}</h3>
                            <ExternalLink className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                          </div>
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                            {tool.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {tool.pricing}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <span className="text-xs text-muted-foreground">⭐</span>
                              <span className="text-xs text-muted-foreground">{tool.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Search className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                  <p className="text-muted-foreground">
                    Không tìm thấy công cụ AI nào phù hợp
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Thử tìm kiếm với từ khóa khác
                  </p>
                </div>
              )}
            </div>
          )}

          {!searchQuery.trim() && (
            <div className="p-8 text-center">
              <Search className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
              <p className="text-muted-foreground">
                Nhập từ khóa để tìm kiếm công cụ AI
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}