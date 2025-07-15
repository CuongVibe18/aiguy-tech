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
    features: ['Image-to-Video', 'Consistent character', 'High quality output', 'API access']
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
    features: ['Templates đa dạng', 'SEO optimization', 'Brand voice', 'Plagiarism checker']
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
    features: ['Voice cloning', 'Multilingual', 'Real-time streaming', 'High quality audio']
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
    features: ['Code completion', 'Multi-language support', 'Code explanation', 'Bug fixing']
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
    features: ['Magic Design', 'AI Background Remover', 'Text-to-Image', 'Brand Kit']
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
    features: ['Hiểu ngữ cảnh tốt', 'Chất lượng cao', 'Tích hợp ChatGPT', 'Prompt tự động tối ưu']
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
    features: ['Đa dạng style', 'Game asset creation', 'Upscaling AI', 'Community models']
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
    features: ['Text-to-Video', 'Image animation', 'Video effects', 'Discord integration']
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
    features: ['AI Avatars', 'Multi-language', 'Custom avatars', 'Brand templates']
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
    features: ['Visual designer', 'CMS mạnh mẽ', 'E-commerce', 'SEO tools']
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
    features: ['3D websites', 'AI generation', 'No-code', 'Interactive elements']
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
    features: ['High-quality video', 'Smooth animations', 'Text-to-video', 'Image-to-video']
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
    features: ['Music-to-video', 'Artistic styles', 'Animation presets', 'Creative effects']
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
    features: ['Marketing copy', 'Email templates', 'Social media content', 'Blog writing']
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
    features: ['Grammar checker', 'Style suggestions', 'Plagiarism detection', 'Tone adjustment']
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
    features: ['120+ voices', 'Multi-language', 'Voice editing', 'Commercial use']
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
    features: ['Natural voices', 'Speed control', 'Multiple formats', 'Mobile app']
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
    features: ['AI code completion', 'Chat with codebase', 'Bug detection', 'Code explanation']
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
    features: ['Online IDE', 'AI assistance', 'Collaboration', 'Deploy instantly']
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
    features: ['AI design suggestions', 'Auto-layout', 'Component generation', 'Design systems']
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
    features: ['Text effects', 'Generative fill', 'Vector generation', 'Adobe integration']
  }
];