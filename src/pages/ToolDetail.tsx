import { useParams, Navigate } from 'react-router-dom';
import { aiTools } from '@/data/aiTools';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { 
  Star, 
  ExternalLink, 
  ArrowLeft, 
  Check, 
  DollarSign,
  FileText,
  Video,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ToolDetail() {
  const { id } = useParams<{ id: string }>();
  const tool = aiTools.find(t => t.id === id);

  if (!tool) {
    return <Navigate to="/" replace />;
  }

  const handleAffiliateClick = () => {
    window.open(tool.affiliateLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="hover:bg-muted">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Về trang chủ
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tool Header */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <img 
                    src={tool.image} 
                    alt={tool.name}
                    className="w-full md:w-48 h-48 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">{tool.name}</h1>
                      <p className="text-muted-foreground text-lg">{tool.description}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{tool.rating}</span>
                        <span className="text-muted-foreground text-sm">/5.0</span>
                      </div>
                      
                      <Badge variant="secondary" className="font-medium">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {tool.pricing}
                      </Badge>
                    </div>

                    <Button 
                      onClick={handleAffiliateClick}
                      size="lg"
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Dùng thử ngay
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Features */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Tính năng nổi bật</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tool.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="p-1 rounded-full bg-accent/20">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tutorial */}
            {tool.tutorial && (
              <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {tool.tutorial.type === 'video' ? (
                      <Video className="w-5 h-5 text-primary" />
                    ) : (
                      <FileText className="w-5 h-5 text-primary" />
                    )}
                    Hướng dẫn sử dụng
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {tool.tutorial.type === 'video' && tool.tutorial.videoUrl ? (
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{tool.tutorial.content}</p>
                      <Button 
                        onClick={() => window.open(tool.tutorial?.videoUrl, '_blank')}
                        variant="outline"
                        className="w-full"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Xem video hướng dẫn
                      </Button>
                    </div>
                  ) : (
                    <div className="prose prose-invert max-w-none">
                      <pre className="whitespace-pre-wrap text-foreground font-sans text-sm leading-relaxed">
                        {tool.tutorial.content}
                      </pre>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Thao tác nhanh</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  onClick={handleAffiliateClick}
                  className="w-full bg-gradient-primary hover:shadow-glow"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Truy cập {tool.name}
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Chia sẻ công cụ
                </Button>
              </CardContent>
            </Card>

            {/* Tool Info */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Thông tin chi tiết</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Đánh giá</div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tool.rating}/5.0</span>
                  </div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-1">Giá cả</div>
                  <div className="font-semibold">{tool.pricing}</div>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-1">Số tính năng</div>
                  <div className="font-semibold">{tool.features.length} tính năng chính</div>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="text-xs text-muted-foreground">
                  * Đây là link affiliate. Khi bạn đăng ký qua link này, tôi sẽ nhận được 
                  một khoản hoa hồng nhỏ mà không ảnh hưởng đến giá của bạn. Điều này giúp 
                  duy trì và phát triển website.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}