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
  }
];