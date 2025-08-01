import { aiTools, aiToolCategories } from '@/data/aiTools';
import { Header } from '@/components/Header';
import { SimpleAIToolCard } from '@/components/SimpleAIToolCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ExternalLink, User, Search, Calculator, Languages, Presentation, Star, Video, PenTool, Building2, Image, Zap, Palette, Headphones, Code, MoreHorizontal, Heart, Church, GraduationCap, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

// Import brand logos
import claudeLogo from '@/assets/claude-logo.png';
import chatgptLogo from '@/assets/chatgpt-logo.png';
import perplexityLogo from '@/assets/perplexity-logo.png';
import consensusLogo from '@/assets/consensus-logo.png';
import elicitLogo from '@/assets/elicit-logo.png';
import semanticScholarLogo from '@/assets/semantic-scholar-logo.png';
import excelFormulaBotLogo from '@/assets/excel-formula-bot-logo.png';
import airtableLogo from '@/assets/airtable-logo.png';
import rowsLogo from '@/assets/rows-logo.png';
import deeplLogo from '@/assets/deepl-logo.png';
import reversoLogo from '@/assets/reverso-logo.png';
import lingueeLogo from '@/assets/linguee-logo.png';
import gammaLogo from '@/assets/gamma-logo.png';
import tomeLogo from '@/assets/tome-logo.png';
import beautifulAiLogo from '@/assets/beautiful-ai-logo.png';

const AllTools = () => {
  // Group tools by category
  const groupedTools = aiToolCategories.reduce((acc, category) => {
    acc[category.id] = aiTools.filter(tool => tool.category === category.id);
    return acc;
  }, {} as Record<string, typeof aiTools>);

  const [showCategoryDetails, setShowCategoryDetails] = useState('');

  // Logo mapping - using placeholder for now, will be updated with actual logos
  const logoMap = {
    'claude': claudeLogo,
    'chatgpt': chatgptLogo,
    'perplexity': perplexityLogo,
    'consensus': consensusLogo,
    'elicit': elicitLogo,
    'semantic-scholar': semanticScholarLogo,
    'excel-formula-bot': excelFormulaBotLogo,
    'airtable-ai': airtableLogo,
    'rows': rowsLogo,
    'deepl': deeplLogo,
    'reverso': reversoLogo,
    'linguee': lingueeLogo,
    'gamma': gammaLogo,
    'tome': tomeLogo,
    'beautiful-ai': beautifulAiLogo,
  };

  // All category subcategories data
  const categorySubcategories = {
    productivity: {
      name: 'Công Cụ AI Tăng Năng Suất',
      subcategories: [
        {
          id: 'personal-assistant',
          name: 'Trợ lý cá nhân',
          icon: User,
          tools: [
            { id: 'claude', name: 'Claude', description: 'Trợ lý AI thông minh từ Anthropic, hỗ trợ viết lách, phân tích và giải quyết vấn đề', website: 'https://claude.ai', rating: 5 },
            { id: 'chatgpt', name: 'ChatGPT', description: 'Trợ lý AI đa năng từ OpenAI, giúp trả lời câu hỏi và hỗ trợ công việc hàng ngày', website: 'https://chat.openai.com', rating: 5 },
            { id: 'perplexity', name: 'Perplexity AI', description: 'Công cụ tìm kiếm AI thông minh, cung cấp câu trả lời chính xác với nguồn tin cậy', website: 'https://perplexity.ai', rating: 4 }
          ]
        },
        {
          id: 'research',
          name: 'Nghiên cứu',
          icon: Search,
          tools: [
            { id: 'consensus', name: 'Consensus', description: 'Tìm kiếm và tóm tắt nghiên cứu khoa học bằng AI, trích xuất thông tin từ papers', website: 'https://consensus.app', rating: 4 },
            { id: 'elicit', name: 'Elicit', description: 'Trợ lý nghiên cứu AI giúp tìm kiếm, tóm tắt và phân tích tài liệu học thuật', website: 'https://elicit.org', rating: 4 },
            { id: 'semantic-scholar', name: 'Semantic Scholar', description: 'Công cụ tìm kiếm tài liệu khoa học với AI, từ Allen Institute', website: 'https://semanticscholar.org', rating: 4 }
          ]
        },
        {
          id: 'spreadsheet',
          name: 'Bảng tính',
          icon: Calculator,
          tools: [
            { id: 'excel-formula-bot', name: 'Excel Formula Bot', description: 'Tạo công thức Excel phức tạp bằng ngôn ngữ tự nhiên, tiết kiệm thời gian làm việc', website: 'https://formulabot.com', rating: 4 },
            { id: 'airtable-ai', name: 'Airtable AI', description: 'Tính năng AI tích hợp trong Airtable giúp tự động hóa và phân tích dữ liệu', website: 'https://airtable.com/ai', rating: 4 },
            { id: 'rows', name: 'Rows', description: 'Bảng tính thông minh với tích hợp AI, kết nối APIs và tự động hóa workflows', website: 'https://rows.com', rating: 4 }
          ]
        },
        {
          id: 'translation',
          name: 'Dịch thuật',
          icon: Languages,
          tools: [
            { id: 'deepl', name: 'DeepL', description: 'Dịch thuật AI chất lượng cao, hỗ trợ nhiều ngôn ngữ với độ chính xác vượt trội', website: 'https://deepl.com', rating: 5 },
            { id: 'reverso', name: 'Reverso Context', description: 'Dịch thuật với ngữ cảnh thực tế, học từ hàng triệu văn bản song ngữ', website: 'https://context.reverso.net', rating: 4 },
            { id: 'linguee', name: 'Linguee', description: 'Từ điển và dịch thuật với ví dụ thực tế từ các tài liệu song ngữ', website: 'https://linguee.com', rating: 4 }
          ]
        },
        {
          id: 'presentation',
          name: 'Thuyết trình',
          icon: Presentation,
          tools: [
            { id: 'gamma', name: 'Gamma', description: 'Tạo slides và thuyết trình đẹp mắt bằng AI, chỉ cần mô tả nội dung', website: 'https://gamma.app', rating: 4 },
            { id: 'tome', name: 'Tome', description: 'Công cụ storytelling AI tạo presentations tương tác và hấp dẫn', website: 'https://tome.app', rating: 4 },
            { id: 'beautiful-ai', name: 'Beautiful.AI', description: 'Tạo slides chuyên nghiệp với AI, tự động điều chỉnh thiết kế và bố cục', website: 'https://beautiful.ai', rating: 4 }
          ]
        }
      ]
    },
    video: {
      name: 'Công Cụ AI Cho Video',
      subcategories: [
        {
          id: 'video-enhancement',
          name: 'Tăng chất lượng video',
          icon: Video,
          tools: [
            { id: 'topaz-video-ai', name: 'Topaz Video AI', description: 'Nâng cấp chất lượng video lên 4K và 8K bằng AI, khử nhiễu và tăng độ sắc nét', website: 'https://topazlabs.com/video-ai', rating: 5 },
            { id: 'vmake-ai', name: 'Vmake AI', description: 'Công cụ AI toàn diện cho chỉnh sửa video, tăng chất lượng và hiệu ứng', website: 'https://vmake.ai', rating: 4 }
          ]
        },
        {
          id: 'video-editing',
          name: 'Chỉnh sửa video',
          icon: Video,
          tools: [
            { id: 'runway', name: 'Runway ML', description: 'Bộ công cụ AI mạnh mẽ cho chỉnh sửa video, tạo hiệu ứng và xóa nền', website: 'https://runwayml.com', rating: 5 },
            { id: 'descript', name: 'Descript', description: 'Chỉnh sửa video bằng cách chỉnh sửa text transcript, đơn giản và hiệu quả', website: 'https://descript.com', rating: 4 }
          ]
        },
        {
          id: 'video-generation',
          name: 'Tạo video tự động',
          icon: Video,
          tools: [
            { id: 'synthesia', name: 'Synthesia', description: 'Tạo video với avatar AI, hỗ trợ hơn 120 ngôn ngữ và giọng nói tự nhiên', website: 'https://synthesia.io', rating: 5 },
            { id: 'pictory', name: 'Pictory', description: 'Chuyển đổi script thành video chuyên nghiệp với AI, tự động thêm hình ảnh và âm thanh', website: 'https://pictory.ai', rating: 4 }
          ]
        },
        {
          id: 'text-to-video',
          name: 'Chuyển văn bản thành video',
          icon: PenTool,
          tools: [
            { id: 'invideo-ai', name: 'InVideo AI', description: 'Tạo video từ text prompt, tự động chọn cảnh, nhạc nền và hiệu ứng phù hợp', website: 'https://invideo.io/ai', rating: 4 },
            { id: 'lumen5', name: 'Lumen5', description: 'Chuyển đổi blog posts và articles thành video hấp dẫn với AI', website: 'https://lumen5.com', rating: 4 }
          ]
        }
      ]
    },
    writing: {
      name: 'Công Cụ Tạo Văn Bản Bằng AI',
      subcategories: [
        {
          id: 'prompt-generation',
          name: 'Tạo prompt gợi ý',
          icon: PenTool,
          tools: [
            { id: 'promptperfect', name: 'PromptPerfect', description: 'Tối ưu hóa prompts cho ChatGPT, Claude và các AI khác để có kết quả tốt nhất', website: 'https://promptperfect.jina.ai', rating: 4 },
            { id: 'promptbase', name: 'PromptBase', description: 'Marketplace cho prompts chất lượng cao, mua bán prompts hiệu quả', website: 'https://promptbase.com', rating: 4 }
          ]
        },
        {
          id: 'content-writing',
          name: 'Viết nội dung',
          icon: PenTool,
          tools: [
            { id: 'jasper', name: 'Jasper AI', description: 'Trợ lý viết nội dung AI chuyên nghiệp, hỗ trợ marketing và blog posts', website: 'https://jasper.ai', rating: 5 },
            { id: 'copy-ai', name: 'Copy.ai', description: 'Tạo nội dung marketing, emails và social media posts bằng AI', website: 'https://copy.ai', rating: 4 }
          ]
        },
        {
          id: 'paraphrasing',
          name: 'Diễn đạt lại câu chữ',
          icon: PenTool,
          tools: [
            { id: 'quillbot', name: 'QuillBot', description: 'Công cụ paraphrase mạnh mẽ, viết lại văn bản với nhiều tone khác nhau', website: 'https://quillbot.com', rating: 5 },
            { id: 'wordtune', name: 'Wordtune', description: 'AI writing companion giúp viết lại câu văn rõ ràng và hấp dẫn hơn', website: 'https://wordtune.com', rating: 4 }
          ]
        },
        {
          id: 'storytelling',
          name: 'Kể chuyện bằng AI',
          icon: BookOpen,
          tools: [
            { id: 'sudowrite', name: 'Sudowrite', description: 'AI writing tool dành cho creative writers, giúp viết tiểu thuyết và truyện ngắn', website: 'https://sudowrite.com', rating: 4 },
            { id: 'novelai', name: 'NovelAI', description: 'AI storyteller để tạo ra những câu chuyện độc đáo và sáng tạo', website: 'https://novelai.net', rating: 4 }
          ]
        },
        {
          id: 'advertising',
          name: 'Viết quảng cáo',
          icon: PenTool,
          tools: [
            { id: 'anyword', name: 'Anyword', description: 'AI copywriting platform với predictive performance scores cho ads', website: 'https://anyword.com', rating: 4 },
            { id: 'persado', name: 'Persado', description: 'AI-powered marketing language platform cho enterprise', website: 'https://persado.com', rating: 4 }
          ]
        }
      ]
    },
    business: {
      name: 'Công Cụ AI Cho Doanh Nghiệp',
      subcategories: [
        {
          id: 'website-creation',
          name: 'Tạo website',
          icon: Building2,
          tools: [
            { id: 'wix-adi', name: 'Wix ADI', description: 'Artificial Design Intelligence tạo website tự động dựa trên yêu cầu của bạn', website: 'https://wix.com/adi', rating: 4 },
            { id: 'bookmark-aida', name: 'Bookmark AIDA', description: 'AI Design Assistant tạo website trong vài phút chỉ với thông tin cơ bản', website: 'https://bookmark.com', rating: 4 }
          ]
        },
        {
          id: 'marketing',
          name: 'Tiếp thị – Marketing',
          icon: Building2,
          tools: [
            { id: 'hubspot-ai', name: 'HubSpot AI', description: 'Bộ công cụ AI tích hợp cho marketing automation và customer relationship', website: 'https://hubspot.com/ai', rating: 5 },
            { id: 'marketo-ai', name: 'Adobe Marketo', description: 'AI-powered marketing automation platform cho enterprise', website: 'https://marketo.com', rating: 4 }
          ]
        },
        {
          id: 'finance-management',
          name: 'Quản lý tài chính',
          icon: Calculator,
          tools: [
            { id: 'quickbooks-ai', name: 'QuickBooks AI', description: 'AI assistant cho quản lý tài chính và kế toán doanh nghiệp', website: 'https://quickbooks.intuit.com', rating: 4 },
            { id: 'xero-ai', name: 'Xero AI', description: 'Accounting software với AI features cho small business', website: 'https://xero.com', rating: 4 }
          ]
        },
        {
          id: 'project-management',
          name: 'Quản lý dự án',
          icon: Building2,
          tools: [
            { id: 'monday-ai', name: 'Monday.com AI', description: 'Work OS với AI automation cho project management và team collaboration', website: 'https://monday.com', rating: 4 },
            { id: 'asana-ai', name: 'Asana Intelligence', description: 'AI-powered insights và automation cho project management', website: 'https://asana.com', rating: 4 }
          ]
        },
        {
          id: 'social-media',
          name: 'Quản lý mạng xã hội',
          icon: Building2,
          tools: [
            { id: 'hootsuite-ai', name: 'Hootsuite AI', description: 'AI-powered social media management với content suggestions và analytics', website: 'https://hootsuite.com', rating: 4 },
            { id: 'buffer-ai', name: 'Buffer AI Assistant', description: 'AI writing assistant cho social media content creation và scheduling', website: 'https://buffer.com', rating: 4 }
          ]
        }
      ]
    },
    'image-editing': {
      name: 'Công Cụ AI Tạo & Chỉnh Ảnh',
      subcategories: [
        {
          id: 'design-creation',
          name: 'Tạo thiết kế',
          icon: Palette,
          tools: [
            { id: 'canva-ai', name: 'Canva AI', description: 'Magic Design tạo thiết kế tự động với AI, từ text prompts đến designs hoàn chỉnh', website: 'https://canva.com/ai', rating: 5 },
            { id: 'adobe-firefly', name: 'Adobe Firefly', description: 'AI creative suite từ Adobe cho design, photo editing và digital art', website: 'https://firefly.adobe.com', rating: 5 }
          ]
        },
        {
          id: 'ai-image-generation',
          name: 'Tạo ảnh bằng AI',
          icon: Image,
          tools: [
            { id: 'midjourney', name: 'Midjourney', description: 'AI art generator tạo ra những hình ảnh nghệ thuật chất lượng cao từ text prompts', website: 'https://midjourney.com', rating: 5 },
            { id: 'dall-e', name: 'DALL·E 3', description: 'AI image generator từ OpenAI, tạo hình ảnh realistic và artistic', website: 'https://openai.com/dall-e-3', rating: 5 },
            { id: 'stable-diffusion', name: 'Stable Diffusion', description: 'Open-source AI model tạo hình ảnh với khả năng customization cao', website: 'https://stability.ai', rating: 4 }
          ]
        },
        {
          id: 'photo-editing',
          name: 'Chỉnh sửa ảnh',
          icon: Image,
          tools: [
            { id: 'photoshop-ai', name: 'Photoshop AI', description: 'Adobe Photoshop với Generative Fill và AI-powered editing tools', website: 'https://adobe.com/photoshop', rating: 5 },
            { id: 'topaz-photo-ai', name: 'Topaz Photo AI', description: 'AI photo enhancement: sharpen, denoise, upscale photos với chất lượng professional', website: 'https://topazlabs.com/photo-ai', rating: 5 }
          ]
        },
        {
          id: 'text-to-image',
          name: 'Chuyển văn bản thành hình ảnh',
          icon: PenTool,
          tools: [
            { id: 'leonardo-ai', name: 'Leonardo AI', description: 'AI art platform với multiple models cho different styles và use cases', website: 'https://leonardo.ai', rating: 4 },
            { id: 'playground-ai', name: 'Playground AI', description: 'User-friendly AI image generator với intuitive interface', website: 'https://playgroundai.com', rating: 4 }
          ]
        }
      ]
    },
    automation: {
      name: 'Công Cụ Tự Động Hóa Bằng AI',
      subcategories: [
        {
          id: 'workflow-automation',
          name: 'Quy trình làm việc tự động',
          icon: Zap,
          tools: [
            { id: 'zapier-ai', name: 'Zapier AI', description: 'No-code automation platform với AI-powered workflow suggestions', website: 'https://zapier.com', rating: 5 },
            { id: 'make-ai', name: 'Make (Integromat)', description: 'Visual automation platform với AI integrations cho complex workflows', website: 'https://make.com', rating: 4 }
          ]
        },
        {
          id: 'ai-agents',
          name: 'Tác tử AI – AI tự động làm việc',
          icon: Zap,
          tools: [
            { id: 'autogpt', name: 'AutoGPT', description: 'Autonomous AI agent có thể thực hiện tasks phức tạp một cách độc lập', website: 'https://autogpt.net', rating: 4 },
            { id: 'agent-gpt', name: 'AgentGPT', description: 'Platform tạo và deploy AI agents cho various business tasks', website: 'https://agentgpt.reworkd.ai', rating: 4 }
          ]
        }
      ]
    },
    art: {
      name: 'Công Cụ Tạo Nghệ Thuật Bằng AI',
      subcategories: [
        {
          id: 'animation',
          name: 'Tạo tranh hoạt hình',
          icon: Palette,
          tools: [
            { id: 'runway-animation', name: 'Runway Animation', description: 'AI tools tạo animations và motion graphics từ static images', website: 'https://runwayml.com', rating: 4 },
            { id: 'pika-labs', name: 'Pika Labs', description: 'AI video generator tạo animations từ text prompts và images', website: 'https://pika.art', rating: 4 }
          ]
        },
        {
          id: 'portraits',
          name: 'Tạo chân dung',
          icon: User,
          tools: [
            { id: 'lensa-ai', name: 'Lensa AI', description: 'AI portrait generator tạo magic avatars và artistic portraits', website: 'https://lensa.app', rating: 4 },
            { id: 'artbreeder', name: 'Artbreeder', description: 'Collaborative AI art platform cho portrait generation và character design', website: 'https://artbreeder.com', rating: 4 }
          ]
        },
        {
          id: 'avatars',
          name: 'Tạo avatar',
          icon: User,
          tools: [
            { id: 'ready-player-me', name: 'Ready Player Me', description: 'AI-powered avatar creator cho metaverse và games', website: 'https://readyplayer.me', rating: 4 },
            { id: 'avatarify', name: 'Avatarify', description: 'Real-time avatar generation và face swapping với AI', website: 'https://avatarify.ai', rating: 4 }
          ]
        },
        {
          id: 'logos',
          name: 'Tạo logo',
          icon: Palette,
          tools: [
            { id: 'looka', name: 'Looka', description: 'AI logo maker tạo professional logos trong vài phút', website: 'https://looka.com', rating: 4 },
            { id: 'brandmark', name: 'Brandmark', description: 'AI-powered branding tool tạo logos, business cards và brand identity', website: 'https://brandmark.io', rating: 4 }
          ]
        },
        {
          id: '3d-images',
          name: 'Tạo ảnh 3D',
          icon: Image,
          tools: [
            { id: 'spline-ai', name: 'Spline AI', description: 'AI-powered 3D design tool tạo 3D scenes và objects từ prompts', website: 'https://spline.design', rating: 4 },
            { id: 'luma-ai', name: 'Luma AI', description: 'AI platform tạo 3D models từ photos và videos', website: 'https://lumalabs.ai', rating: 4 }
          ]
        }
      ]
    },
    audio: {
      name: 'Công Cụ AI Âm Thanh',
      subcategories: [
        {
          id: 'audio-editing',
          name: 'Chỉnh sửa âm thanh',
          icon: Headphones,
          tools: [
            { id: 'adobe-podcast', name: 'Adobe Podcast', description: 'AI-powered audio editing với speech enhancement và noise removal', website: 'https://podcast.adobe.com', rating: 4 },
            { id: 'krisp', name: 'Krisp', description: 'AI noise cancellation cho calls và recordings', website: 'https://krisp.ai', rating: 4 }
          ]
        },
        {
          id: 'text-to-speech',
          name: 'Chuyển văn bản thành giọng nói',
          icon: Headphones,
          tools: [
            { id: 'elevenlabs', name: 'ElevenLabs', description: 'AI voice generator với realistic voices và voice cloning', website: 'https://elevenlabs.io', rating: 5 },
            { id: 'murf-ai', name: 'Murf AI', description: 'AI voice generator với 120+ voices trong multiple languages', website: 'https://murf.ai', rating: 4 }
          ]
        },
        {
          id: 'music-generation',
          name: 'Tạo nhạc bằng AI',
          icon: Headphones,
          tools: [
            { id: 'suno-ai', name: 'Suno AI', description: 'AI music generator tạo complete songs từ text prompts', website: 'https://suno.ai', rating: 4 },
            { id: 'aiva', name: 'AIVA', description: 'AI composer tạo nhạc nền và soundtracks cho media projects', website: 'https://aiva.ai', rating: 4 }
          ]
        },
        {
          id: 'speech-to-text',
          name: 'Chuyển giọng nói thành văn bản',
          icon: Headphones,
          tools: [
            { id: 'otter-ai', name: 'Otter.ai', description: 'AI meeting transcription với real-time notes và summaries', website: 'https://otter.ai', rating: 5 },
            { id: 'rev-ai', name: 'Rev AI', description: 'Professional transcription service với high accuracy AI', website: 'https://rev.ai', rating: 4 }
          ]
        }
      ]
    },
    coding: {
      name: 'Công Cụ Hỗ Trợ Lập Trình',
      subcategories: [
        {
          id: 'code-assistant',
          name: 'Trợ lý viết mã',
          icon: Code,
          tools: [
            { id: 'github-copilot', name: 'GitHub Copilot', description: 'AI pair programmer từ GitHub và OpenAI, suggests code in real-time', website: 'https://github.com/copilot', rating: 5 },
            { id: 'codeium', name: 'Codeium', description: 'Free AI code completion tool với support cho 70+ programming languages', website: 'https://codeium.com', rating: 4 },
            { id: 'tabnine', name: 'Tabnine', description: 'AI assistant cho developers với code predictions và completions', website: 'https://tabnine.com', rating: 4 }
          ]
        },
        {
          id: 'no-code',
          name: 'Công cụ ít mã/không mã',
          icon: Code,
          tools: [
            { id: 'bubble', name: 'Bubble', description: 'No-code platform tạo web applications với AI-assisted development', website: 'https://bubble.io', rating: 4 },
            { id: 'webflow-ai', name: 'Webflow AI', description: 'Visual web design platform với AI content generation', website: 'https://webflow.com', rating: 4 }
          ]
        },
        {
          id: 'sql-queries',
          name: 'Truy vấn dữ liệu SQL',
          icon: Code,
          tools: [
            { id: 'text2sql', name: 'Text2SQL', description: 'AI tool chuyển đổi natural language thành SQL queries', website: 'https://text2sql.ai', rating: 4 },
            { id: 'sqlai', name: 'SQL AI', description: 'AI SQL query generator và optimizer cho databases', website: 'https://sqlai.ai', rating: 4 }
          ]
        }
      ]
    },
    other: {
      name: 'Công Cụ AI Khác',
      subcategories: [
        {
          id: 'health-fitness',
          name: 'Thể dục/sức khỏe',
          icon: Heart,
          tools: [
            { id: 'fitbod', name: 'Fitbod', description: 'AI personal trainer tạo workout plans dựa trên goals và progress', website: 'https://fitbod.me', rating: 4 },
            { id: 'ada-health', name: 'Ada Health', description: 'AI health assessment app giúp identify potential health issues', website: 'https://ada.com', rating: 4 }
          ]
        },
        {
          id: 'religion',
          name: 'Tôn giáo',
          icon: Church,
          tools: [
            { id: 'pray-ai', name: 'Pray.com AI', description: 'AI-powered prayer và meditation guidance app', website: 'https://pray.com', rating: 4 },
            { id: 'bible-ai', name: 'Bible AI', description: 'AI assistant cho Bible study và spiritual guidance', website: 'https://bible.ai', rating: 4 }
          ]
        },
        {
          id: 'students',
          name: 'Dành cho học sinh/sinh viên',
          icon: GraduationCap,
          tools: [
            { id: 'socratic', name: 'Socratic by Google', description: 'AI homework helper sử dụng camera để solve math problems', website: 'https://socratic.org', rating: 4 },
            { id: 'quizlet-ai', name: 'Quizlet AI', description: 'AI-powered study tools với intelligent flashcards và practice tests', website: 'https://quizlet.com', rating: 4 }
          ]
        },
        {
          id: 'education',
          name: 'Giáo dục – học tập',
          icon: BookOpen,
          tools: [
            { id: 'khan-academy-ai', name: 'Khan Academy AI', description: 'AI tutor personalizing learning experiences cho students', website: 'https://khanacademy.org', rating: 4 },
            { id: 'coursera-ai', name: 'Coursera AI', description: 'AI-powered course recommendations và personalized learning paths', website: 'https://coursera.org', rating: 4 }
          ]
        }
      ]
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    if (showCategoryDetails === categoryId) {
      setShowCategoryDetails('');
    } else {
      setShowCategoryDetails(categoryId);
    }
  };

  const renderCategoryDetails = (categoryId: string) => {
    const categoryData = categorySubcategories[categoryId as keyof typeof categorySubcategories];
    if (!categoryData) return null;

    return (
      <div className="space-y-16 mb-16">
        <div className="flex items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              {categoryData.name}
            </h2>
            <p className="text-muted-foreground mt-2">
              Khám phá {categoryData.subcategories.reduce((total, cat) => total + cat.tools.length, 0)} công cụ AI chuyên dụng
            </p>
          </div>
        </div>

        {categoryData.subcategories.map(subcategory => {
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

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                 {subcategory.tools.map(tool => (
                   <Card key={tool.id} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-card/90 backdrop-blur-sm aspect-[6/5] flex flex-col">
                     <CardHeader className="flex-shrink-0 p-2">
                       <div className="flex flex-col items-center text-center space-y-1">
                         <div className="w-8 h-8 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center">
                           <img 
                             src={logoMap[tool.id as keyof typeof logoMap] || '/placeholder.svg'} 
                             alt={`${tool.name} logo`}
                             className="w-6 h-6 object-contain"
                           />
                         </div>
                         <CardTitle className="text-xs font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-1">
                           {tool.name}
                         </CardTitle>
                       </div>
                     </CardHeader>
                     
                     <CardContent className="flex-grow flex flex-col justify-between p-2 pt-0">
                       <div className="space-y-1">
                         <CardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                           {tool.description}
                         </CardDescription>
                         
                         {/* Star Rating */}
                         <div className="flex justify-center gap-1">
                           {[...Array(5)].map((_, index) => (
                             <Star 
                               key={index}
                               className={`w-2.5 h-2.5 ${
                                 index < tool.rating 
                                   ? 'fill-yellow-400 text-yellow-400' 
                                   : 'text-gray-300'
                               }`}
                             />
                           ))}
                         </div>
                       </div>
                       
                       <a 
                         href={tool.website}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="inline-block w-full mt-1"
                       >
                         <Button 
                           size="sm" 
                           className="w-full text-xs bg-gradient-primary hover:shadow-glow transition-all duration-300 py-0.5 h-6"
                         >
                           <ExternalLink className="w-2.5 h-2.5 mr-1" />
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
    );
  };

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
            const isActive = showCategoryDetails === category.id;
            
            return (
              <Button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
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
          {showCategoryDetails && renderCategoryDetails(showCategoryDetails)}
        </main>
      </div>
    </div>
  );
};

export default AllTools;