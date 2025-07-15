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
  { id: 'image-generation', name: 'AI Tạo Hình Ảnh', icon: 'Image' },
  { id: 'video-creation', name: 'AI Tạo Video', icon: 'Video' },
  { id: 'website-builder', name: 'AI Tạo Website No-Code', icon: 'Globe' },
  { id: 'animation', name: 'AI Làm Phim Hoạt Hình', icon: 'Film' },
  { id: 'writing', name: 'AI Viết Nội Dung', icon: 'PenTool' },
  { id: 'voice', name: 'AI Tạo Giọng Nói', icon: 'Mic' },
  { id: 'coding', name: 'AI Lập Trình', icon: 'Code' },
  { id: 'design', name: 'AI Thiết Kế', icon: 'Palette' }
];

export const aiTools: AITool[] = [
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Công cụ AI tạo hình ảnh chất lượng cao từ mô tả văn bản với khả năng tùy chỉnh phong cách đa dạng.',
    category: 'image-generation',
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
- Dùng --quality để điều chỉnh chất lượng

## Mẹo sử dụng hiệu quả:
- Mô tả càng chi tiết càng tốt
- Sử dụng từ khóa phong cách nghệ thuật
- Thử nghiệm với các tham số khác nhau`
    }
  },
  {
    id: 'runway-ml',
    name: 'Runway ML',
    description: 'Nền tảng AI toàn diện cho việc tạo video, chỉnh sửa và hiệu ứng đặc biệt chuyên nghiệp.',
    category: 'video-creation',
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
    id: 'framer',
    name: 'Framer',
    description: 'Công cụ thiết kế và xây dựng website no-code với AI, tạo trang web chuyên nghiệp nhanh chóng.',
    category: 'website-builder',
    affiliateLink: 'https://framer.com/?ref=aitools',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    rating: 4.7,
    pricing: '$5-30/tháng',
    features: ['Drag & Drop', 'AI Design Assistant', 'Responsive Design', 'CMS tích hợp'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Framer

## Tạo website đầu tiên
1. Đăng ký tài khoản Framer
2. Chọn template hoặc bắt đầu từ đầu
3. Sử dụng AI để tạo layout tự động

## Tùy chỉnh thiết kế
- Kéo thả các components
- Sử dụng AI để tối ưu màu sắc
- Thêm animations và interactions

## Xuất bản website
- Preview trên mobile/desktop
- Kết nối domain tùy chỉnh
- SEO optimization tự động`
    }
  },
  {
    id: 'stable-video',
    name: 'Stable Video Diffusion',
    description: 'AI tạo video animation chất lượng cao từ hình ảnh hoặc text prompts.',
    category: 'animation',
    affiliateLink: 'https://stability.ai/?ref=aitools',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=250&fit=crop',
    rating: 4.5,
    pricing: 'Free - $20/tháng',
    features: ['Image-to-Video', 'Consistent character', 'High quality output', 'API access'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Stable Video Diffusion

## Bước 1: Truy cập nền tảng
- Đăng ký tài khoản tại Stability AI
- Chọn gói dịch vụ phù hợp
- Truy cập vào Stable Video Diffusion

## Bước 2: Tạo video từ hình ảnh
- Upload hình ảnh bạn muốn animate
- Điều chỉnh các thông số motion
- Chọn độ dài video (1-4 giây)
- Nhấn Generate để tạo video

## Bước 3: Tùy chỉnh và xuất video
- Preview kết quả trước khi tải xuống
- Điều chỉnh fps và quality
- Export video với định dạng MP4

## Mẹo sử dụng hiệu quả:
- Sử dụng hình ảnh chất lượng cao
- Thử nghiệm với các mức motion khác nhau
- Kết hợp với text prompt để tăng tính sáng tạo`
    }
  },
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
- Xuất bản hoặc lưu draft

## Các template phổ biến:
- AIDA Framework cho quảng cáo
- PAS (Problem-Agitate-Solution)
- Blog post outline và content
- Email marketing campaigns`
    }
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI tạo giọng nói tự nhiên và clone voice với chất lượng gần như thật.',
    category: 'voice',
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
- Nhờ tối ưu performance

## Mẹo sử dụng hiệu quả:
- Viết comments rõ ràng để có suggestions tốt hơn
- Sử dụng meaningful variable names
- Review code suggestions trước khi accept
- Kết hợp với unit testing`
    }
  },
  {
    id: 'canva-ai',
    name: 'Canva AI',
    description: 'Nền tảng thiết kế với AI tích hợp, tạo graphics, presentations, và designs chuyên nghiệp.',
    category: 'design',
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
- Fine-tune edges nếu cần thiết

## Bước 3: Tạo hình ảnh với Text-to-Image
- Trong editor, chọn "Text to Image"
- Mô tả hình ảnh bạn muốn tạo
- Chọn style và tỷ lệ khung hình
- Generate và chọn hình ảnh phù hợp

## Tính năng nâng cao:
- Brand Kit để lưu fonts và colors
- Magic Write cho content creation
- Presentation Designer
- Video editing với AI`
    }
  },
  // Thêm công cụ cho image-generation
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    description: 'AI tạo hình ảnh từ OpenAI với khả năng hiểu ngữ cảnh và tạo ra những hình ảnh sáng tạo, chi tiết.',
    category: 'image-generation',
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
- Download hoặc edit further

## Bước 3: Tối ưu prompt hiệu quả
- Sử dụng mô tả cụ thể và chi tiết
- Mention style (photorealistic, artistic, cartoon...)
- Specify lighting, composition, colors
- Add context và setting

## Mẹo để có kết quả tốt:
- Avoid negative prompts, thay vào đó mô tả những gì bạn muốn
- Use natural language, không cần từ khóa kỹ thuật
- DALL-E 3 hiểu context rất tốt
- Experiment với different angles và perspectives`
    }
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo AI',
    description: 'Nền tảng AI tạo hình ảnh với nhiều mô hình khác nhau, phù hợp cho game art và concept design.',
    category: 'image-generation',
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
  // Thêm công cụ cho video-creation
  {
    id: 'pika-labs',
    name: 'Pika Labs',
    description: 'AI tạo video từ text prompt với khả năng animate hình ảnh và tạo video ngắn chất lượng cao.',
    category: 'video-creation',
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
- AI sẽ tạo video animation từ static image

## Parameters hữu ích:
- -ar 16:9 (aspect ratio)
- -fps 24 (frames per second)
- -motion 2 (motion intensity)
- -seed [number] (for consistency)

## Tips for better results:
- Be specific trong motion description
- Use camera movements (zoom in, pan left...)
- Combine với style keywords
- Experiment với different seeds`
    }
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Tạo video với AI avatars thực tế, chuyển text thành video presentation chuyên nghiệp.',
    category: 'video-creation',
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
  // Thêm công cụ cho website-builder
  {
    id: 'webflow',
    name: 'Webflow',
    description: 'Platform thiết kế web visual với AI assistant, tạo website responsive không cần code.',
    category: 'website-builder',
    affiliateLink: 'https://webflow.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: '$14-39/tháng',
    features: ['Visual designer', 'CMS mạnh mẽ', 'E-commerce', 'SEO tools'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Webflow

## Bước 1: Bắt đầu với Webflow
- Đăng ký tài khoản miễn phí
- Chọn template hoặc start from scratch
- Familiarize với Webflow Designer interface

## Bước 2: Thiết kế với Visual Editor
- Drag and drop elements vào canvas
- Customize styles trong Style panel
- Sử dụng flexbox và grid layout
- Add interactions và animations

## Bước 3: Thiết lập CMS và E-commerce
- Create CMS collections cho dynamic content
- Design collection templates
- Set up e-commerce cho online store
- Configure payment và shipping

## Tips cho beginners:
- Học cách sử dụng classes và combo classes
- Understand box model và positioning
- Practice với responsive design
- Utilize Webflow University resources`
    }
  },
  {
    id: 'dora-ai',
    name: 'Dora AI',
    description: 'AI tạo website 3D tương tác từ text prompt, mang lại trải nghiệm web immersive.',
    category: 'website-builder',
    affiliateLink: 'https://dora.run?ref=aitools',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
    rating: 4.3,
    pricing: 'Free - $40/tháng',
    features: ['3D websites', 'AI generation', 'No-code', 'Interactive elements'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn tạo website 3D tương tác với Dora AI từ text prompt',
      videoUrl: 'https://www.youtube.com/watch?v=dora-ai-tutorial'
    }
  },
  // Thêm công cụ cho animation
  {
    id: 'luma-dream-machine',
    name: 'Luma Dream Machine',
    description: 'AI tạo video animation chất lượng cao từ text và hình ảnh với chuyển động mượt mà.',
    category: 'animation',
    affiliateLink: 'https://lumalabs.ai?ref=aitools',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=250&fit=crop',
    rating: 4.7,
    pricing: 'Free - $29.99/tháng',
    features: ['High-quality video', 'Smooth animations', 'Text-to-video', 'Image-to-video'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Luma Dream Machine

## Bước 1: Truy cập Luma Labs
- Đăng ký tại lumalabs.ai
- Verify email và login
- Navigate đến Dream Machine

## Bước 2: Tạo video từ text
- Nhập text prompt mô tả video
- Chọn duration (5 giây)
- Click Generate và chờ processing
- Download video khi hoàn thành

## Bước 3: Animate từ hình ảnh
- Upload starting image
- Add ending image (optional)
- Describe motion trong prompt
- Generate video transition

## Best practices:
- Sử dụng descriptive prompts
- Mention camera movements
- Specify lighting và mood
- Keep prompts under 500 characters`
    }
  },
  {
    id: 'kaiber',
    name: 'Kaiber',
    description: 'Nền tảng AI tạo video nghệ thuật và animation từ âm nhạc, hình ảnh hoặc text.',
    category: 'animation',
    affiliateLink: 'https://kaiber.ai?ref=aitools',
    image: 'https://images.unsplash.com/photo-1596727216720-84d191e6b34e?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: '$5-25/tháng',
    features: ['Music-to-video', 'Artistic styles', 'Animation presets', 'Creative effects'],
    tutorial: {
      type: 'video',
      content: 'Tutorial tạo video nghệ thuật từ âm nhạc và hình ảnh với Kaiber',
      videoUrl: 'https://www.youtube.com/watch?v=kaiber-tutorial'
    }
  },
  // Thêm công cụ cho writing
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
- Generate multiple variations

## Bước 3: Tối ưu nội dung
- Use Built-in editor để refine
- A/B test different versions
- Save best performers to library
- Export sang marketing platforms

## Popular use cases:
- Facebook và Google ads
- Email subject lines
- Product descriptions  
- Social media captions
- Landing page copy`
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
- Review overall score và readability

## Bước 3: Advanced Features (Premium)
- Set writing goals và audience
- Get advanced style suggestions
- Use plagiarism checker
- Access vocabulary enhancement

## Integration options:
- Microsoft Word add-in
- Google Docs extension
- Email platforms (Gmail, Outlook)
- Social media platforms
- Mobile keyboard integration`
    }
  },
  // Thêm công cụ cho voice
  {
    id: 'murf-ai',
    name: 'Murf AI',
    description: 'Studio AI tạo voiceover chuyên nghiệp với hơn 120 giọng nói trong nhiều ngôn ngữ.',
    category: 'voice',
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
- Export high-quality audio files

## Professional features:
- Voice cloning (custom voices)
- Team collaboration workspace
- Brand voice consistency
- Commercial license included
- API integration available`
    }
  },
  {
    id: 'speechify',
    name: 'Speechify',
    description: 'AI text-to-speech với giọng đọc tự nhiên, hỗ trợ đọc tài liệu, sách và web.',
    category: 'voice',
    affiliateLink: 'https://speechify.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c11a?w=400&h=250&fit=crop',
    rating: 4.4,
    pricing: 'Free - $139/năm',
    features: ['Natural voices', 'Speed control', 'Multiple formats', 'Mobile app'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn sử dụng Speechify để nghe tài liệu và web content',
      videoUrl: 'https://www.youtube.com/watch?v=speechify-guide'
    }
  },
  // Thêm công cụ cho coding
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
- Get debugging help

## Advanced features:
- Composer for multi-file edits
- Symbol references across project
- Natural language code search
- Automatic documentation generation`
    }
  },
  {
    id: 'replit-ai',
    name: 'Replit AI',
    description: 'Nền tảng coding online với AI Ghostwriter hỗ trợ viết, debug và giải thích code.',
    category: 'coding',
    affiliateLink: 'https://replit.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
    rating: 4.5,
    pricing: 'Free - $20/tháng',
    features: ['Online IDE', 'AI assistance', 'Collaboration', 'Deploy instantly'],
    tutorial: {
      type: 'video',
      content: 'Tutorial coding với Replit AI Ghostwriter và deployment',
      videoUrl: 'https://www.youtube.com/watch?v=replit-ai-tutorial'
    }
  },
  // Thêm công cụ cho design
  {
    id: 'figma-ai',
    name: 'Figma AI',
    description: 'Tool thiết kế UI/UX với các tính năng AI như auto-layout, content generation và design suggestions.',
    category: 'design',
    affiliateLink: 'https://figma.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    rating: 4.7,
    pricing: 'Free - $15/tháng',
    features: ['AI design suggestions', 'Auto-layout', 'Component generation', 'Design systems'],
    tutorial: {
      type: 'article',
      content: `# Hướng dẫn sử dụng Figma AI

## Bước 1: Bắt đầu với Figma
- Tạo tài khoản Figma miễn phí
- Familiarize với interface và tools
- Join design team hoặc tạo team mới

## Bước 2: AI Design Suggestions
- Use AI để generate design ideas
- Get automatic layout suggestions
- AI-powered component organization
- Smart color palette generation

## Bước 3: Advanced AI Features
- Auto-layout với AI assistance
- Content generation for prototypes
- AI-powered design system creation
- Intelligent component suggestions

## Collaboration features:
- Real-time multiplayer editing
- AI-generated design comments
- Automated handoff to developers
- Version control với AI insights`
    }
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Bộ công cụ AI creative từ Adobe với khả năng tạo và chỉnh sửa hình ảnh, text effects.',
    category: 'design',
    affiliateLink: 'https://firefly.adobe.com?ref=aitools',
    image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=400&h=250&fit=crop',
    rating: 4.6,
    pricing: 'Free - $22.99/tháng',
    features: ['Text effects', 'Generative fill', 'Vector generation', 'Adobe integration'],
    tutorial: {
      type: 'video',
      content: 'Hướng dẫn sử dụng Adobe Firefly AI cho creative design',
      videoUrl: 'https://www.youtube.com/watch?v=firefly-tutorial'
    }
  }
];