import { aiTools, aiToolCategories } from '@/data/aiTools';
import { Header } from '@/components/Header';
import { SimpleAIToolCard } from '@/components/SimpleAIToolCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, User, Search, Calculator, Languages, Presentation } from 'lucide-react';
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
  const [showProductivityDetails, setShowProductivityDetails] = useState(false);

  // Productivity subcategories data
  const productivitySubcategories = [
    {
      id: 'personal-assistant',
      name: 'Trợ lý cá nhân',
      icon: User,
      tools: [
        {
          id: 'claude',
          name: 'Claude',
          description: 'Trợ lý AI thông minh từ Anthropic, hỗ trợ viết lách, phân tích và giải quyết vấn đề',
          website: 'https://claude.ai',
          logo: '🤖'
        },
        {
          id: 'chatgpt',
          name: 'ChatGPT',
          description: 'Trợ lý AI đa năng từ OpenAI, giúp trả lời câu hỏi và hỗ trợ công việc hàng ngày',
          website: 'https://chat.openai.com',
          logo: '💬'
        },
        {
          id: 'perplexity',
          name: 'Perplexity AI',
          description: 'Công cụ tìm kiếm AI thông minh, cung cấp câu trả lời chính xác với nguồn tin cậy',
          website: 'https://perplexity.ai',
          logo: '🔍'
        }
      ]
    },
    {
      id: 'research',
      name: 'Nghiên cứu',
      icon: Search,
      tools: [
        {
          id: 'consensus',
          name: 'Consensus',
          description: 'Tìm kiếm và tóm tắt nghiên cứu khoa học bằng AI, trích xuất thông tin từ papers',
          website: 'https://consensus.app',
          logo: '📚'
        },
        {
          id: 'elicit',
          name: 'Elicit',
          description: 'Trợ lý nghiên cứu AI giúp tìm kiếm, tóm tắt và phân tích tài liệu học thuật',
          website: 'https://elicit.org',
          logo: '🔬'
        },
        {
          id: 'semantic-scholar',
          name: 'Semantic Scholar',
          description: 'Công cụ tìm kiếm tài liệu khoa học với AI, từ Allen Institute',
          website: 'https://semanticscholar.org',
          logo: '📖'
        }
      ]
    },
    {
      id: 'spreadsheet',
      name: 'Bảng tính',
      icon: Calculator,
      tools: [
        {
          id: 'excel-formula-bot',
          name: 'Excel Formula Bot',
          description: 'Tạo công thức Excel phức tạp bằng ngôn ngữ tự nhiên, tiết kiệm thời gian làm việc',
          website: 'https://formulabot.com',
          logo: '📊'
        },
        {
          id: 'airtable-ai',
          name: 'Airtable AI',
          description: 'Tính năng AI tích hợp trong Airtable giúp tự động hóa và phân tích dữ liệu',
          website: 'https://airtable.com/ai',
          logo: '🗃️'
        },
        {
          id: 'rows',
          name: 'Rows',
          description: 'Bảng tính thông minh với tích hợp AI, kết nối APIs và tự động hóa workflows',
          website: 'https://rows.com',
          logo: '📈'
        }
      ]
    },
    {
      id: 'translation',
      name: 'Dịch thuật',
      icon: Languages,
      tools: [
        {
          id: 'deepl',
          name: 'DeepL',
          description: 'Dịch thuật AI chất lượng cao, hỗ trợ nhiều ngôn ngữ với độ chính xác vượt trội',
          website: 'https://deepl.com',
          logo: '🌐'
        },
        {
          id: 'reverso',
          name: 'Reverso Context',
          description: 'Dịch thuật với ngữ cảnh thực tế, học từ hàng triệu văn bản song ngữ',
          website: 'https://context.reverso.net',
          logo: '🔄'
        },
        {
          id: 'linguee',
          name: 'Linguee',
          description: 'Từ điển và dịch thuật với ví dụ thực tế từ các tài liệu song ngữ',
          website: 'https://linguee.com',
          logo: '📝'
        }
      ]
    },
    {
      id: 'presentation',
      name: 'Thuyết trình',
      icon: Presentation,
      tools: [
        {
          id: 'gamma',
          name: 'Gamma',
          description: 'Tạo slides và thuyết trình đẹp mắt bằng AI, chỉ cần mô tả nội dung',
          website: 'https://gamma.app',
          logo: '🎨'
        },
        {
          id: 'tome',
          name: 'Tome',
          description: 'Công cụ storytelling AI tạo presentations tương tác và hấp dẫn',
          website: 'https://tome.app',
          logo: '📱'
        },
        {
          id: 'beautiful-ai',
          name: 'Beautiful.AI',
          description: 'Tạo slides chuyên nghiệp với AI, tự động điều chỉnh thiết kế và bố cục',
          website: 'https://beautiful.ai',
          logo: '✨'
        }
      ]
    }
  ];

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
                <Button
                  key={category.id}
                  onClick={() => {
                    setShowProductivityDetails(!showProductivityDetails);
                    setSelectedCategory('');
                  }}
                  variant={showProductivityDetails ? "default" : "outline"}
                  className="flex items-center gap-2"
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </Button>
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
          {showProductivityDetails && (
            <div className="space-y-16 mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Công Cụ AI Tăng Năng Suất
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    Khám phá {productivitySubcategories.reduce((total, cat) => total + cat.tools.length, 0)} công cụ AI giúp tăng hiệu quả công việc
                  </p>
                </div>
              </div>

              {productivitySubcategories.map(subcategory => {
                const IconComponent = subcategory.icon;
                
                return (
                  <section key={subcategory.id} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-primary">
                        <IconComponent className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{subcategory.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {subcategory.tools.length} công cụ được đề xuất
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {subcategory.tools.map(tool => (
                        <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
                          <CardHeader className="space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">{tool.logo}</div>
                              <CardTitle className="text-lg text-card-foreground group-hover:text-primary transition-colors">
                                {tool.name}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="space-y-4">
                            <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                              {tool.description}
                            </CardDescription>
                            
                            <a 
                              href={tool.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block w-full"
                            >
                              <Button 
                                size="sm" 
                                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                              >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Truy cập
                              </Button>
                            </a>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          )}

          {!showProductivityDetails && (() => {
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