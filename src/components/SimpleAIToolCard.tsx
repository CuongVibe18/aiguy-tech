import { Star, ExternalLink, ArrowRight } from 'lucide-react';
import { AITool } from '@/data/aiTools';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface SimpleAIToolCardProps {
  tool: AITool;
}

export function SimpleAIToolCard({ tool }: SimpleAIToolCardProps) {
  const handleAffiliateClick = () => {
    window.open(tool.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          {/* Small thumbnail */}
          <div className="flex-shrink-0">
            <img 
              src={tool.image} 
              alt={tool.name}
              className="w-12 h-12 object-cover rounded-md"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors truncate">
                {tool.name}
              </h3>
              <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-medium text-muted-foreground">{tool.rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {tool.description}
            </p>
            
            <div className="flex items-center justify-between mb-3">
              <Badge variant="secondary" className="text-xs">
                {tool.pricing}
              </Badge>
              <Button 
                onClick={handleAffiliateClick}
                variant="outline"
                size="sm"
                className="text-xs px-3 py-1 h-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Dùng thử
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {tool.features.slice(0, 2).map((feature, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                >
                  {feature}
                </span>
              ))}
            </div>
            
            <Link to={`/tool/${tool.id}`}>
              <Button 
                variant="ghost" 
                size="sm"
                className="w-full justify-between text-xs h-8 group-hover:bg-primary/10 group-hover:text-primary transition-colors"
              >
                Xem chi tiết & hướng dẫn
                <ArrowRight className="w-3 h-3" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}