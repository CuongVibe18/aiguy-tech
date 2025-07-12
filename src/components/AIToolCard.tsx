import { Star, ExternalLink, ArrowRight } from 'lucide-react';
import { AITool } from '@/data/aiTools';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface AIToolCardProps {
  tool: AITool;
}

export function AIToolCard({ tool }: AIToolCardProps) {
  const handleAffiliateClick = () => {
    window.open(tool.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group hover:shadow-glow transition-all duration-300 border-border/50 hover:border-primary/50 bg-card/80 backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={tool.image} 
            alt={tool.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium text-white">{tool.rating}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
              {tool.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="font-medium">
              {tool.pricing}
            </Badge>
            <Button 
              onClick={handleAffiliateClick}
              variant="outline"
              size="sm"
              className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              <ExternalLink className="w-3 h-3 mr-1" />
              Dùng thử
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {tool.features.slice(0, 3).map((feature, index) => (
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
              className="w-full justify-between group-hover:bg-primary/10 group-hover:text-primary transition-colors"
            >
              Xem chi tiết & hướng dẫn
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}