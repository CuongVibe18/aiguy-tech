export interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
  affiliateLink: string;
  image: string;
  rating: number;
  pricing: string;
  features: string[];
  tutorial?: {
    type: 'article' | 'video';
    content: string;
    videoUrl?: string;
  };
}

export const aiToolCategories = [
  { id: 'productivity', name: 'Công Cụ AI Tăng Năng Suất', icon: 'Zap' },
  { id: 'video', name: 'Công Cụ AI Cho Video', icon: 'Video' },
  { id: 'writing', name: 'Công Cụ Tạo Văn Bản Bằng AI', icon: 'PenTool' },
  { id: 'business', name: 'Công Cụ AI Cho Doanh Nghiệp', icon: 'Building2' },
  { id: 'image-editing', name: 'Công Cụ AI Tạo & Chỉnh Ảnh', icon: 'Image' },
  { id: 'automation', name: 'Công Cụ Tự Động Hóa Bằng AI', icon: 'Bot' },
  { id: 'art', name: 'Công Cụ Tạo Nghệ Thuật Bằng AI', icon: 'Palette' },
  { id: 'audio', name: 'Công Cụ AI Âm Thanh', icon: 'Mic' },
  { id: 'coding', name: 'Công Cụ Hỗ Trợ Lập Trình', icon: 'Code' },
  { id: 'other', name: 'Công Cụ AI Khác', icon: 'Sparkles' }
];

export const aiTools: AITool[] = [
  // PRODUCTIVITY TOOLS (3 công cụ)
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI assistant tích hợp trong Notion giúp viết, tóm tắt và quản lý thông tin hiệu quả.',
    category: 'productivity',
    affiliateLink: 'https://notion.so?ref=aitools',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: '$8-16/tháng',
    features: ['AI writing', 'Smart summaries', 'Task automation', 'Knowledge management'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Notion AI

## Bước 1: Kích hoạt Notion AI
- Nâng cấp workspace lên plan có AI
- Sử dụng phím tắt /ai trong page
- Hoặc highlight text và chọn AI options

## Bước 2: Viết nội dung với AI
- Sử dụng AI để brainstorm ideas
- Generate outlines cho documents
- Viết emails và meeting notes
- Tóm tắt nội dung dài

## Bước 3: Tự động hóa workflow
- Create templates với AI assistance
- Auto-fill database properties
- Generate action items từ meeting notes
- Summarize pages và databases

## Mẹo sử dụng hiệu quả:
- Combine AI với Notion's database features
- Use AI cho content planning
- Leverage templates cho repeated tasks`
    }
  },
  {
    id: 'zapier-ai',
    name: 'Zapier AI',
    description: 'Platform tự động hóa với AI, kết nối hàng nghìn ứng dụng và tạo workflow thông minh.',
    category: 'productivity',
    affiliateLink: 'https://zapier.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop',
    rating: 4.5,
    pricing: 'Free - $73.50/tháng',
    features: ['5000+ app integrations', 'AI workflow builder', 'Smart automation', 'No-code'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn tạo automation workflows với Zapier AI',
      videoUrl: 'https://www.youtube.com/watch?v=zapier-ai-guide'
    }
  },
  {
    id: 'clockify-ai',
    name: 'Clockify AI',
    description: 'Ứng dụng time tracking với AI phân tích năng suất và tối ưu hóa thời gian làm việc.',
    category: 'productivity',
    affiliateLink: 'https://clockify.me?ref=aitools',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: 'Free - $9.99/tháng',
    features: ['Time tracking', 'Productivity insights', 'Project management', 'Team analytics'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Clockify AI

## Bước 1: Setup workspace
- Tạo tài khoản Clockify
- Add team members và projects
- Install apps cho desktop/mobile

## Bước 2: Track time thông minh
- Start/stop timer tự động
- AI categorizes activities
- Smart break detection
- Automatic time entries

## Bước 3: Phân tích productivity
- View AI-generated insights
- Identify productive patterns
- Get optimization suggestions
- Track goals và progress

## Advanced features:
- Integration với popular tools
- Custom productivity metrics
- Team performance analytics
- AI-powered time estimates`
    }
  },

  // VIDEO TOOLS (3 công cụ)
  {
    id: 'runway-ml',
    name: 'Runway ML',
    description: 'Nền tảng AI toàn diện cho việc tạo video, chỉnh sửa và hiệu ứng đặc biệt chuyên nghiệp.',
    category: 'video',
    affiliateLink: 'https://runwayml.com/?ref=aitools',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: '$15-76/tháng',
    features: ['Text-to-Video', 'Video editing AI', 'Real-time collaboration', 'Motion tracking'],
    tutorial: {
      type: 'video',
      content: 'Video hướng dẫn chi tiết về cách sử dụng Runway ML',
      videoUrl: 'https://www.youtube.com/watch?v=example1'
    }
  },
  {
    id: 'pika-labs',
    name: 'Pika Labs',
    description: 'AI tạo video từ text prompt với khả năng animate hình ảnh và tạo video ngắn chất lượng cao.',
    category: 'video',
    affiliateLink: 'https://pika.art?ref=aitools',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: 'Free - $35/tháng',
    features: ['Text-to-Video', 'Image animation', 'Video effects', 'Discord integration'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Pika Labs

## Bước 1: Tham gia Discord Server
- Join Discord server của Pika Labs
- Verify tài khoản và đọc rules
- Navigate đến generation channels

## Bước 2: Tạo video với /create
- Sử dụng command /create trong Discord
- Nhập text prompt mô tả video
- Thêm parameters như -ar (aspect ratio)
- Chờ AI process và generate video

## Bước 3: Animate hình ảnh
- Upload hình ảnh vào Discord
- Sử dụng /animate command
- Thêm motion description
- AI sẽ tạo video animation từ static image`
    }
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Tạo video với AI avatars thực tế, chuyển text thành video presentation chuyên nghiệp.',
    category: 'video',
    affiliateLink: 'https://synthesia.io?ref=aitools',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
    rating: 4.5,
    pricing: '$30-90/tháng',
    features: ['AI Avatars', 'Multi-language', 'Custom avatars', 'Brand templates'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn tạo video presentation với AI avatars trong Synthesia',
      videoUrl: 'https://www.youtube.com/watch?v=synthesia-tutorial'
    }
  },

  // WRITING TOOLS (3 công cụ)
  {
    id: 'jasper',
    name: 'Jasper AI',
    description: 'Trợ lý AI viết nội dung marketing, blog, và copy quảng cáo chuyên nghiệp.',
    category: 'writing',
    affiliateLink: 'https://jasper.ai/?ref=aitools',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: '$39-125/tháng',
    features: ['Templates đa dạng', 'SEO optimization', 'Brand voice', 'Plagiarism checker'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Jasper AI

## Bước 1: Thiết lập tài khoản
- Đăng ký tài khoản Jasper AI
- Cài đặt Brand Voice cho doanh nghiệp
- Kết nối các tài khoản social media

## Bước 2: Viết nội dung với Templates
- Chọn template phù hợp (Blog post, Ad copy, Email...)
- Nhập thông tin sản phẩm/dịch vụ
- Điều chỉnh tone of voice
- Generate nội dung

## Bước 3: Tối ưu và chỉnh sửa
- Sử dụng Jasper Editor để chỉnh sửa
- Kiểm tra SEO optimization
- Run plagiarism checker
- Xuất bản hoặc lưu draft`
    }
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI copywriting tool tạo nội dung marketing, email, ads và social media hiệu quả.',
    category: 'writing',
    affiliateLink: 'https://copy.ai?ref=aitools',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
    rating: 4.3,
    pricing: 'Free - $49/tháng',
    features: ['Marketing copy', 'Email templates', 'Social media content', 'Blog writing'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Copy.ai

## Bước 1: Setup và onboarding
- Tạo tài khoản Copy.ai
- Complete onboarding questionnaire
- Set up brand voice và target audience

## Bước 2: Sử dụng Templates
- Browse library của 90+ templates
- Chọn template phù hợp (Email, Ad, Blog...)
- Input brand và product information
- Generate multiple variations`
    }
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI writing assistant kiểm tra ngữ pháp, cải thiện văn phong và tối ưu nội dung.',
    category: 'writing',
    affiliateLink: 'https://grammarly.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: 'Free - $30/tháng',
    features: ['Grammar checker', 'Style suggestions', 'Plagiarism detection', 'Tone adjustment'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Grammarly

## Bước 1: Cài đặt Grammarly
- Download Grammarly extension cho browser
- Install desktop app hoặc mobile app
- Tạo tài khoản và chọn gói phù hợp

## Bước 2: Sử dụng Writing Assistant
- Viết text trong bất kỳ app nào
- Grammarly sẽ highlight errors real-time
- Click suggestions để fix issues
- Review overall score và readability`
    }
  },

  // BUSINESS TOOLS (3 công cụ)
  {
    id: 'salesforce-einstein',
    name: 'Salesforce Einstein',
    description: 'AI platform cho doanh nghiệp với CRM thông minh, phân tích dữ liệu và automation.',
    category: 'business',
    affiliateLink: 'https://salesforce.com/products/einstein/?ref=aitools',
    image: 'https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=400&h=250&fit=crop',
    rating: 4.5,
    pricing: '$25-300/tháng',
    features: ['Smart CRM', 'Predictive analytics', 'Lead scoring', 'Sales automation'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Salesforce Einstein

## Bước 1: Setup Einstein
- Enable Einstein trong Salesforce org
- Configure data sources
- Set up predictive models
- Train AI với historical data

## Bước 2: Sales Intelligence
- Use lead scoring tự động
- Get deal predictions
- Automate follow-up activities
- Analyze customer behavior

## Bước 3: Advanced Analytics
- Create custom AI models
- Set up automated insights
- Use Einstein Discovery
- Implement recommendations`
    }
  },
  {
    id: 'hubspot-ai',
    name: 'HubSpot AI',
    description: 'Nền tảng marketing và sales với AI tích hợp cho lead generation và customer insights.',
    category: 'business',
    affiliateLink: 'https://hubspot.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: 'Free - $120/tháng',
    features: ['Marketing automation', 'AI content creation', 'Lead scoring', 'Customer analytics'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn sử dụng HubSpot AI cho marketing và sales automation',
      videoUrl: 'https://www.youtube.com/watch?v=hubspot-ai-tutorial'
    }
  },
  {
    id: 'tableau-ai',
    name: 'Tableau AI',
    description: 'Platform phân tích dữ liệu với AI giúp tạo insights và visualizations tự động.',
    category: 'business',
    affiliateLink: 'https://tableau.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: '$15-70/tháng',
    features: ['Data visualization', 'AI insights', 'Predictive analytics', 'Natural language queries'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Tableau AI

## Bước 1: Connect data sources
- Import data từ various sources
- Clean và prepare data
- Set up automated refreshes

## Bước 2: AI-powered analysis
- Use Ask Data feature
- Get automated insights
- Create smart visualizations
- Identify trends và patterns

## Bước 3: Advanced features
- Build predictive models
- Use natural language queries
- Create interactive dashboards
- Share insights với team`
    }
  },

  // IMAGE EDITING TOOLS (3 công cụ)
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Công cụ AI tạo hình ảnh chất lượng cao từ mô tả văn bản với khả năng tùy chỉnh phong cách đa dạng.',
    category: 'image-editing',
    affiliateLink: 'https://midjourney.com/?ref=aitools',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop',
    rating: 4.8,
    pricing: '$10-60/tháng',
    features: ['Chất lượng hình ảnh cao', 'Đa dạng phong cách', 'Cộng đồng lớn', 'API mạnh mẽ'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Midjourney

## Bước 1: Đăng ký tài khoản
- Truy cập vào website Midjourney
- Tạo tài khoản Discord nếu chưa có
- Tham gia server Discord của Midjourney

## Bước 2: Tạo hình ảnh đầu tiên
- Sử dụng lệnh /imagine trong Discord
- Nhập mô tả chi tiết cho hình ảnh bạn muốn
- Chờ AI xử lý và tạo ra 4 phiên bản

## Bước 3: Tối ưu hóa kết quả
- Sử dụng các tham số như --ar cho tỷ lệ khung hình
- Thêm --style để thay đổi phong cách
- Dùng --quality để điều chỉnh chất lượng`
    }
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    description: 'AI tạo hình ảnh từ OpenAI với khả năng hiểu ngữ cảnh và tạo ra những hình ảnh sáng tạo, chi tiết.',
    category: 'image-editing',
    affiliateLink: 'https://openai.com/dall-e-3?ref=aitools',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    rating: 4.7,
    pricing: '$15-20/100 hình',
    features: ['Hiểu ngữ cảnh tốt', 'Chất lượng cao', 'Tích hợp ChatGPT', 'Prompt tự động tối ưu'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng DALL-E 3

## Bước 1: Truy cập DALL-E 3
- Đăng nhập ChatGPT Plus/Pro
- Chọn GPT-4 model với DALL-E
- Hoặc truy cập trực tiếp tại labs.openai.com

## Bước 2: Tạo hình ảnh từ prompt
- Mô tả chi tiết hình ảnh muốn tạo
- DALL-E 3 sẽ tự động tối ưu prompt
- Chờ AI generate 1-4 hình ảnh
- Download hoặc edit further`
    }
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: 'Nền tảng thiết kế với AI tích hợp, tạo graphics, presentations, và designs chuyên nghiệp.',
    category: 'image-editing',
    affiliateLink: 'https://canva.com/?ref=aitools',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&h=250&fit=crop',
    rating: 4.5,
    pricing: 'Free - $15/tháng',
    features: ['Magic Design', 'AI Background Remover', 'Text-to-Image', 'Brand Kit'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Canva AI

## Bước 1: Bắt đầu với Magic Design
- Tạo tài khoản Canva miễn phí
- Chọn "Magic Design" từ homepage
- Upload hình ảnh hoặc nhập text prompt
- Canva AI sẽ tạo multiple design options

## Bước 2: Sử dụng AI Background Remover
- Upload hình ảnh cần remove background
- Click "Background Remover" trong editor
- AI sẽ tự động remove background
- Fine-tune edges nếu cần thiết`
    }
  },

  // AUTOMATION TOOLS (3 công cụ)
  {
    id: 'make-formerly-integromat',
    name: 'Make (Integromat)',
    description: 'Platform automation mạnh mẽ với AI, kết nối và tự động hóa workflows phức tạp.',
    category: 'automation',
    affiliateLink: 'https://make.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: 'Free - $29/tháng',
    features: ['Visual workflow builder', 'Advanced logic', '1000+ integrations', 'Error handling'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Make

## Bước 1: Tạo scenario đầu tiên
- Đăng ký tài khoản Make
- Choose trigger app và event
- Configure trigger settings
- Test trigger connection

## Bước 2: Build workflow logic
- Add modules và actions
- Set up conditional logic
- Use filters và routers
- Handle errors properly

## Bước 3: Deploy và monitor
- Test complete scenario
- Schedule execution times
- Monitor execution logs
- Optimize performance`
    }
  },
  {
    id: 'ifttt-ai',
    name: 'IFTTT AI',
    description: 'Nền tảng automation đơn giản với AI suggestions cho smart home và productivity.',
    category: 'automation',
    affiliateLink: 'https://ifttt.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
    rating: 4.3,
    pricing: 'Free - $5/tháng',
    features: ['Simple automation', 'Smart home integration', 'Mobile triggers', 'AI recommendations'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn tạo automation đơn giản với IFTTT AI',
      videoUrl: 'https://www.youtube.com/watch?v=ifttt-tutorial'
    }
  },
  {
    id: 'microsoft-power-automate',
    name: 'Microsoft Power Automate',
    description: 'Tool automation của Microsoft với AI builder cho doanh nghiệp và productivity workflows.',
    category: 'automation',
    affiliateLink: 'https://powerautomate.microsoft.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: '$15-40/tháng',
    features: ['Office 365 integration', 'AI Builder', 'Desktop automation', 'Enterprise features'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Power Automate

## Bước 1: Setup environment
- Login với Microsoft account
- Access Power Automate portal
- Connect to data sources
- Set up environment variables

## Bước 2: Create flows
- Choose flow template
- Configure triggers và actions
- Add AI Builder components
- Test flow functionality

## Bước 3: Enterprise features
- Use desktop automation
- Implement approval workflows
- Set up business rules
- Monitor analytics`
    }
  },

  // ART TOOLS (3 công cụ)
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    description: 'Nền tảng AI tạo hình ảnh với nhiều mô hình khác nhau, phù hợp cho game art và concept design.',
    category: 'art',
    affiliateLink: 'https://leonardo.ai?ref=aitools',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: 'Free - $24/tháng',
    features: ['Đa dạng style', 'Game asset creation', 'Upscaling AI', 'Community models'],
    tutorial: {
      type: 'video',
      content: 'Video hướng dẫn toàn diện về Leonardo AI từ cơ bản đến nâng cao',
      videoUrl: 'https://www.youtube.com/watch?v=leonardo-ai-guide'
    }
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Mô hình AI mã nguồn mở tạo artwork và illustrations chất lượng cao với control tối đa.',
    category: 'art',
    affiliateLink: 'https://stability.ai?ref=aitools',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop',
    rating: 4.7,
    pricing: 'Free - $20/tháng',
    features: ['Open source', 'Local generation', 'Custom models', 'ControlNet support'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Stable Diffusion

## Bước 1: Setup environment
- Install Python và Git
- Clone Stable Diffusion repository
- Download model weights
- Install dependencies

## Bước 2: Generate first images
- Write detailed prompts
- Adjust generation parameters
- Use negative prompts
- Experiment với samplers

## Bước 3: Advanced techniques
- Train custom models
- Use ControlNet for precise control
- Implement inpainting/outpainting
- Optimize prompt engineering`
    }
  },
  {
    id: 'artbreeder',
    name: 'Artbreeder',
    description: 'Nền tảng AI collaborative tạo và remix artwork thông qua genetic algorithms.',
    category: 'art',
    affiliateLink: 'https://artbreeder.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1596727216720-84d191e6b34e?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: 'Free - $18.99/tháng',
    features: ['Genetic algorithms', 'Collaborative creation', 'Style mixing', 'Portrait generation'],
    tutorial: {
      type: 'video',
      content: 'Tutorial tạo artwork với Artbreeder genetic algorithms',
      videoUrl: 'https://www.youtube.com/watch?v=artbreeder-tutorial'
    }
  },

  // AUDIO TOOLS (3 công cụ)
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI tạo giọng nói tự nhiên và clone voice với chất lượng gần như thật.',
    category: 'audio',
    affiliateLink: 'https://elevenlabs.io/?ref=aitools',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=250&fit=crop',
    rating: 4.9,
    pricing: '$5-330/tháng',
    features: ['Voice cloning', 'Multilingual', 'Real-time streaming', 'High quality audio'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn chi tiết cách sử dụng ElevenLabs để tạo và clone giọng nói chất lượng cao',
      videoUrl: 'https://www.youtube.com/watch?v=elevenlabs-tutorial'
    }
  },
  {
    id: 'murf-ai',
    name: 'Murf AI',
    description: 'Studio AI tạo voiceover chuyên nghiệp với hơn 120 giọng nói trong nhiều ngôn ngữ.',
    category: 'audio',
    affiliateLink: 'https://murf.ai?ref=aitools',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=250&fit=crop',
    rating: 4.5,
    pricing: '$19-79/tháng',
    features: ['120+ voices', 'Multi-language', 'Voice editing', 'Commercial use'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Murf AI

## Bước 1: Thiết lập project
- Đăng ký tài khoản Murf
- Tạo project mới
- Import script hoặc type text

## Bước 2: Chọn và customize voice
- Browse 120+ AI voices
- Filter theo language, accent, age
- Preview voices với sample text
- Adjust speed, pitch, và pause

## Bước 3: Generate và edit audio
- Add background music nếu cần
- Sync audio với video/slides
- Use pronunciation editor for accuracy
- Export high-quality audio files`
    }
  },
  {
    id: 'adobe-podcast',
    name: 'Adobe Podcast',
    description: 'AI audio enhancement tool làm sạch tiếng ồn và cải thiện chất lượng recording.',
    category: 'audio',
    affiliateLink: 'https://podcast.adobe.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1520637736862-4d197d17c11a?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: 'Free - $20.99/tháng',
    features: ['Noise reduction', 'Speech enhancement', 'Echo removal', 'Auto transcription'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn làm sạch audio và enhance podcast với Adobe AI',
      videoUrl: 'https://www.youtube.com/watch?v=adobe-podcast-tutorial'
    }
  },

  // CODING TOOLS (3 công cụ)
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI assistant lập trình giúp viết code nhanh chóng và thông minh.',
    category: 'coding',
    affiliateLink: 'https://github.com/features/copilot?ref=aitools',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: '$10-19/tháng',
    features: ['Code completion', 'Multi-language support', 'Code explanation', 'Bug fixing'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng GitHub Copilot

## Bước 1: Cài đặt và kích hoạt
- Cài đặt extension GitHub Copilot trong VS Code
- Đăng nhập với tài khoản GitHub Pro
- Kích hoạt Copilot trong settings

## Bước 2: Sử dụng AI code completion
- Bắt đầu viết comment hoặc function name
- Copilot sẽ suggest code tự động
- Nhấn Tab để accept suggestion
- Nhấn Ctrl+Enter để xem nhiều suggestions

## Bước 3: Tương tác với Copilot Chat
- Mở Copilot Chat panel
- Hỏi câu hỏi về code hoặc debugging
- Yêu cầu giải thích function
- Nhờ tối ưu performance`
    }
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'Code editor với AI tích hợp sâu, hỗ trợ viết và debug code thông minh.',
    category: 'coding',
    affiliateLink: 'https://cursor.sh?ref=aitools',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
    rating: 4.8,
    pricing: 'Free - $20/tháng',
    features: ['AI code completion', 'Chat with codebase', 'Bug detection', 'Code explanation'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Cursor

## Bước 1: Cài đặt Cursor
- Download Cursor từ cursor.sh
- Import settings từ VS Code (nếu có)
- Login với GitHub hoặc email

## Bước 2: AI Code Generation
- Use Ctrl+K để mở AI command palette
- Describe code bạn muốn generate
- AI sẽ tạo code và explain logic
- Accept, modify, hoặc regenerate

## Bước 3: Chat with Codebase
- Open Cursor Chat với Ctrl+L
- Ask questions về existing code
- Request refactoring suggestions
- Get debugging help`
    }
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code assistant với whole-line và full-function code completion cho nhiều ngôn ngữ.',
    category: 'coding',
    affiliateLink: 'https://tabnine.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: 'Free - $39/tháng',
    features: ['Multi-language support', 'Local processing', 'Team training', 'Enterprise security'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn setup và sử dụng Tabnine AI code completion',
      videoUrl: 'https://www.youtube.com/watch?v=tabnine-tutorial'
    }
  },

  // OTHER TOOLS (3 công cụ)
  {
    id: 'perplexity-ai',
    name: 'Perplexity AI',
    description: 'AI search engine thông minh cung cấp câu trả lời chính xác với sources đáng tin cậy.',
    category: 'other',
    affiliateLink: 'https://perplexity.ai?ref=aitools',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    rating: 4.5,
    pricing: 'Free - $20/tháng',
    features: ['Real-time search', 'Source citations', 'Follow-up questions', 'Multi-modal search'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Perplexity AI

## Bước 1: Tìm kiếm thông minh
- Đặt câu hỏi bằng ngôn ngữ tự nhiên
- AI sẽ search web real-time
- Review sources và citations
- Ask follow-up questions

## Bước 2: Advanced search features
- Use focused search modes
- Upload images for context
- Search within specific timeframes
- Filter by source types

## Bước 3: Research workflows
- Save important findings
- Share searches với team
- Export results
- Build research threads`
    }
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'AI chatbot đa năng từ OpenAI có thể trò chuyện, giải đáp và hỗ trợ nhiều tác vụ.',
    category: 'other',
    affiliateLink: 'https://chat.openai.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&h=250&fit=crop',
    rating: 4.7,
    pricing: 'Free - $20/tháng',
    features: ['Conversational AI', 'Multi-domain knowledge', 'Code generation', 'Creative writing'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn sử dụng ChatGPT hiệu quả cho công việc và học tập',
      videoUrl: 'https://www.youtube.com/watch?v=chatgpt-tutorial'
    }
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'AI assistant từ Anthropic với khả năng phân tích sâu và reasoning logic tốt.',
    category: 'other',
    affiliateLink: 'https://claude.ai?ref=aitools',
    image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: 'Free - $20/tháng',
    features: ['Deep analysis', 'Long context', 'Safety focused', 'Document processing'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Claude

## Bước 1: Làm quen với Claude
- Truy cập claude.ai
- Tạo tài khoản Anthropic
- Explore interface và features

## Bước 2: Advanced conversations
- Ask complex analytical questions
- Upload documents for analysis
- Use long-form reasoning
- Request structured outputs

## Bước 3: Productivity workflows
- Document summarization
- Research assistance
- Creative brainstorming
- Code review và explanation`
    }
  }
];