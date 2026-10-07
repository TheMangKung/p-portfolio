export interface Project {
  id: string;
  title: string;
  category: 'web' | 'design' | 'fullstack';
  categoryLabel: string;
  image: string;
  description: string;
  shortDesc: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  client: string;
  deliveryDays: number;
  rating: number;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  caseStudyDetails?: {
    challenge: string;
    solution: string;
    results: string[];
  };
}

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  price: number;
  soldCount: number;
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  revisions: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface Review {
  id: string;
  clientName: string;
  clientRole: string;
  avatar: string;
  rating: number;
  date: string;
  projectTitle: string;
  comment: string;
  verified: boolean;
}

export interface OrbitCard {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  cover: string;
  rot: number;
  isMain?: boolean;
}

export const PROFILE_DATA = {
  name: "P (@p_dev)",
  username: "@p_dev",
  title: "Senior Full-Stack Developer & UI/UX Designer",
  location: "Bangkok, Thailand",
  status: "พร้อมรับงาน (Online)",
  followers: "12.8K followers",
  headline: "เปลี่ยนทุกไอเดียของคุณ ให้กลายเป็นของจริง",
  subheadline: "ในยุคของ AI ทักษะและผลงานจริงคือสิ่งพิสูจน์ว่าทำไมลูกค้าถึงต้องเลือกคุณ",
  heroQuote: "Clients don't just buy outputs. They buy expertise, experience, taste, and trust.",
  bio: "ผู้เชี่ยวชาญการพัฒนา Web Application แบบครบวงจร และออกแบบ UI/UX สวยงามระดับสากล สร้างสรรค์ผลงานจริงทั้ง Commercial B2B SaaS (Sangjan Live Screen), แพลตฟอร์มระดับมหาวิทยาลัย (WUSAB.net) และระบบงาน Event Check-in ขนาดใหญ่ พร้อมรับงานพัฒนาและให้คำปรึกษาฟรี",
  avatar: "/selling/p-avatar.jpg",
  coverImage: "/selling/p-cover.jpg",
  stats: {
    rating: 5.0,
    totalReviews: 89,
    completedJobs: 94,
    completionRate: 100,
    responseTime: "< 15 นาที",
    onTimeRate: 100,
  },
  badges: [
    { name: "Verified Pro", desc: "ฟรีแลนซ์ระดับมืออาชีพที่ผ่านการยืนยันตัวตนและมาตรฐานสูงสุด" },
    { name: "Top Rated 5.0 ★", desc: "คะแนนรีวิวระดับ 5 ดาวต่อเนื่อง" },
    { name: "ตอบกลับไว < 15 นาที", desc: "ให้คำปรึกษาและตอบบรีฟไวมาก" },
    { name: "ส่งงานตรงเวลา 100%", desc: "ไม่เคยส่งงานเลทตามข้อตกลง" },
  ],
  contacts: {
    email: "p.dev.work@gmail.com",
    line: "@p_dev",
    github: "https://github.com/TheMangKung",
    linkedin: "https://linkedin.com",
    tel: "08x-xxx-xxxx"
  }
};

export const ORBIT_CARDS: OrbitCard[] = [
  {
    id: "orbit-1",
    name: "P (You)",
    role: "Full-Stack Dev & UI/UX",
    location: "Bangkok",
    avatar: "/selling/p-avatar.jpg",
    cover: "/selling/p-cover.jpg",
    rot: -3,
    isMain: true,
  },
  {
    id: "orbit-2",
    name: "NovaPay Mobile",
    role: "FinTech UI/UX & Design System",
    location: "Figma",
    avatar: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80",
    rot: 4,
  },
  {
    id: "orbit-3",
    name: "SaaS Analytics Pro",
    role: "Cloud Web App & Recharts",
    location: "React / Vite",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    rot: -2,
  },
  {
    id: "orbit-4",
    name: "Luxury Villas & Stay",
    role: "Direct Booking Platform",
    location: "Next.js & Tailwind",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    cover: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80",
    rot: 3,
  },
];

export const SERVICES: ServicePackage[] = [
  {
    id: "landing",
    name: "High-Converting Landing Page & Performance Web",
    badge: "เริ่มต้นง่าย & โหลดไว",
    price: 9500,
    soldCount: 54,
    rating: 4.9,
    reviewCount: 48,
    deliveryTime: "3 - 5 วัน",
    revisions: "แก้ไขได้ 3 ครั้ง",
    description: "หน้าเว็บเดี่ยวระดับพรีเมียม โครงสร้างชัดเจน โหลดไวคะแนน 95+ ใน PageSpeed พร้อมฟอร์มส่งข้อมูลและ Responsive 100%",
    features: [
      "Responsive 100% (Mobile, Tablet, Desktop)",
      "พัฒนาด้วย React / Vite + Tailwind CSS สปีดโหลดสูง",
      "โครงสร้าง On-Page SEO ติดอันดับ Google ง่าย",
      "เชื่อมต่อฟอร์มติดต่อ (Contact Form / Line Notify / Email)",
      "รวม Source Code และไฟล์ assets ลิขสิทธิ์ของคุณ 100%"
    ]
  },
  {
    id: "standard",
    name: "Corporate Web & Interactive UI/UX Design System",
    badge: "ยอดนิยมสำหรับธุรกิจ",
    isPopular: true,
    price: 18500,
    soldCount: 41,
    rating: 5.0,
    reviewCount: 39,
    deliveryTime: "7 - 12 วัน",
    revisions: "แก้ไขได้ 5 ครั้ง",
    description: "เว็บไซต์บริษัทและบริการ 4-6 หน้า พร้อมระบบ CMS หรือ Admin ควบคุมเนื้อหา และไฟล์ออกแบบ Figma ระดับโปรดักชัน",
    features: [
      "ทุกความสามารถใน Landing Page Package",
      "โครงสร้าง 4-6 หน้าเพจ พร้อมระบบนำทางแบบไดนามิก",
      "ระบบจัดการเนื้อหา (CMS / Markdown / Database)",
      "Design System & UI Components ที่นำไปต่อยอดได้",
      "ระบบแชทลูกค้า / ระบบลงทะเบียนหรือสมาชิกเบื้องต้น",
      "ดูแลระบบและรับประกันแก้ไขบั๊กฟรี 30 วันหลังส่งมอบ"
    ]
  },
  {
    id: "custom-saas",
    name: "Custom Full-Stack Web Application & SaaS Platform",
    badge: "ครบวงจรระดับองค์กร",
    price: 36000,
    soldCount: 28,
    rating: 5.0,
    reviewCount: 26,
    deliveryTime: "15 - 25 วัน",
    revisions: "แก้ไขได้ไม่จำกัดในขอบเขต",
    description: "ระบบ Web App แบบกำหนดเอง มีระบบฐานข้อมูล, แดชบอร์ดเรียลไทม์, Authentication และระบบชำระเงินครบถ้วน",
    features: [
      "สถาปัตยกรรม Full-Stack (Frontend React/Next.js + Backend API)",
      "ฐานข้อมูล PostgreSQL / Supabase / Firebase",
      "ระบบ Authentication & Role-based Access Control",
      "Payment Gateway (PromptPay QR, Stripe, บัตรเครดิต)",
      "ระบบ Dashboard สรุปผลทางสถิติแบบ Real-time",
      "ส่งมอบโครงสร้างระดับ Production พร้อมเอกสาร API / Schema",
      "ดูแลบั๊กและการทำงานฟรี 60 วัน"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-sangjan",
    title: "Sangjan - Live Screen Shoutout",
    category: "fullstack",
    categoryLabel: "Commercial SaaS & Live Event Platform",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "ส่งภาพ & ข้อความขึ้นจอใหญ่สดทันที เพิ่มความตื่นเต้นและสร้างความมีส่วนร่วมในงานอีเวนต์ คอนเสิร์ต และปาร์ตี้",
    description: "SaaS แพลตฟอร์มเชิงพาณิชย์สำหรับงานอีเวนต์ คอนเสิร์ต และร้านสังสรรค์ ออกแบบและพัฒนาเพื่อรองรับผู้ใช้งานพร้อมกันจำนวนมากแบบ High Concurrency สแกน QR แล้วส่งข้อความหรือรูปภาพขึ้นจอแสดงผลขนาดใหญ่ได้ทันทีแบบเสี้ยววินาที พร้อมระบบ Admin Live Moderation กรองคำและรูปภาพอย่างปลอดภัย",
    tags: ["React", "TypeScript", "Node.js", "WebSocket", "Real-Time", "Tailwind CSS", "SaaS B2B"],
    client: "Sangjan Commercial SaaS (สร้างจริงและขายได้แล้ว)",
    deliveryDays: 30,
    rating: 5.0,
    liveUrl: "https://sangjan.com/",
    metrics: [
      { label: "Status", value: "Commercial Ready" },
      { label: "Latency", value: "< 200ms" },
      { label: "Real-time Concurrency", value: "1,000+ Users" }
    ],
    caseStudyDetails: {
      challenge: "งานอีเวนต์และคอนเสิร์ตต้องการสร้างความตื่นเต้นและการมีส่วนร่วมของผู้ชม โดยระบบต้องเสถียร รองรับคนใช้งานพร้อมกันจำนวนมาก และต้องคัดกรองข้อความก่อนขึ้นจอได้ทันทีแบบไม่ดีเลย์",
      solution: "ออกแบบสถาปัตยกรรม High-Concurrency WebSocket พร้อมระบบ Admin Live Moderation และหน้าจอ Display อัตราการเรนเดอร์ระดับ 60 FPS ปรับขนาดตามจอ LED ทุกสัดส่วน",
      results: [
        "ส่งภาพและข้อความขึ้นจอใหญ่ได้ในเวลาเสี้ยววินาที ตอบสนองรวดเร็ว",
        "มีลูกค้าใช้งานจริงในงานแสดงและอีเวนต์เชิงพาณิชย์สร้างรายได้จริง",
        "เพิ่มการมีส่วนร่วม (Audience Engagement) ในงานสูงขึ้นอย่างมาก"
      ]
    }
  },
  {
    id: "proj-wusab",
    title: "WUSAB.net - องค์การบริหาร องค์การนักศึกษา ม.วลัยลักษณ์",
    category: "fullstack",
    categoryLabel: "Official University Portal & Web Platform",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "เว็บไซต์ศูนย์กลางข้อมูล ข่าวสาร และกิจกรรมนักศึกษา มหาวิทยาลัยวลัยลักษณ์ (พัฒนาเพื่อนักศึกษาและมหาวิทยาลัยฟรี)",
    description: "เว็บพอร์ทัลหลักอย่างเป็นทางการขององค์การบริหาร องค์การนักศึกษา มหาวิทยาลัยวลัยลักษณ์ (อบ. มวล.) ออกแบบ UI/UX ระดับพรีเมียม รวบรวมข่าวสารสำคัญ โครงการกิจกรรม ปฏิทินงาน และช่องทางบริการนักศึกษากว่า 15,000 คน มุ่งเน้นการใช้งานง่าย รวดเร็ว และรองรับทุกขนาดหน้าจอ",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "University Portal", "UI/UX System"],
    client: "องค์การนักศึกษา มหาวิทยาลัยวลัยลักษณ์ (อบ. มวล.)",
    deliveryDays: 20,
    rating: 5.0,
    liveUrl: "https://www.wusab.net/",
    githubUrl: "https://github.com/TheMangKung/WUSAB-web-main",
    metrics: [
      { label: "Target Audience", value: "15,000+ นักศึกษา" },
      { label: "Performance Score", value: "98/100" },
      { label: "Impact", value: "Free for Students" }
    ],
    caseStudyDetails: {
      challenge: "การประชาสัมพันธ์ข้อมูลข่าวสารและกิจกรรมขององค์การนักศึกษาเดิมกระจัดกระจายหลายช่องทาง นักศึกษาเข้าถึงประกาศและสิทธิประโยชน์ได้ยาก",
      solution: "ออกแบบและสร้างแพลตฟอร์มศูนย์กลางข้อมูลข่าวสารขององค์การนักศึกษาใหม่ทั้งหมด วาง Information Architecture ชัดเจน และเชื่อมต่อช่องทางติดต่อแบบบูรณาการ",
      results: [
        "ยกระดับภาพลักษณ์ขององค์การนักศึกษาสู่มาตรฐานระดับองค์กรสากล",
        "นักศึกษาเข้าถึงข่าวสารและปฏิทินกิจกรรมได้สะดวกรวดเร็วในที่เดียว"
      ]
    }
  },
  {
    id: "proj-openworld",
    title: "Check in - SAB of Walailak U. (OpenWorld)",
    category: "fullstack",
    categoryLabel: "High-Traffic Event Attendance & QR Verification",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "ระบบลงทะเบียนและเช็กอินเข้าร่วมกิจกรรมระดับมหาวิทยาลัย รองรับคนหลักพันสแกนพร้อมกันได้ลื่นไหล (พัฒนาเพื่อนักศึกษาฟรี)",
    description: "เว็บแอปพลิเคชันระบบเช็กอินเข้าร่วมกิจกรรมสำหรับงาน OpenWorld และกิจกรรมนักศึกษา มหาวิทยาลัยวลัยลักษณ์ รองรับการสแกน QR Code ตรวจสอบข้อมูลรหัสนักศึกษา ตรวจสอบสิทธิ์ และบันทึกประวัติการเข้าร่วมกิจกรรมแบบ Real-time พร้อมแผงสรุปยอดผู้เข้าร่วมงานสำหรับทีมงาน",
    tags: ["React", "TypeScript", "Node.js", "QR Verification", "Real-Time DB", "Mobile-First"],
    client: "องค์การบริหาร องค์การนักศึกษา ม.วลัยลักษณ์",
    deliveryDays: 15,
    rating: 5.0,
    liveUrl: "https://openworld.wusab.net/",
    githubUrl: "https://github.com/TheMangKung/Check-in-main",
    metrics: [
      { label: "Check-in Speed", value: "< 1 Sec / person" },
      { label: "Uptime", value: "99.99%" },
      { label: "Concurrent Users", value: "Thousands of students" }
    ],
    caseStudyDetails: {
      challenge: "ในวันจัดกิจกรรมใหญ่มีนักศึกษาเข้าคิวเช็กอินเข้าร่วมกิจกรรมพร้อมกันนับพันคน ระบบเดิมเกิดความล่าช้า แถวยาว และเสี่ยงต่อข้อมูลซ้ำซ้อน",
      solution: "พัฒนาระบบ Web App น้ำหนักเบา ออกแบบโฟลว์ให้สแกนแล้วบันทึกทันทีใน 1 วินาที มีระบบป้องกันการสแกนซ้ำ และอัปเดตสถานะแบบ Real-time",
      results: [
        "ลดแถวคอยลงอย่างชัดเจน ตรวจสอบสิทธิ์นักศึกษาได้รวดเร็วและแม่นยำ 100%",
        "ทีมงานผู้จัดงานสามารถมอนิเตอร์จำนวนผู้เข้าร่วมกิจกรรมแบบ Real-time"
      ]
    }
  },
  {
    id: "proj-4",
    title: "CraftCafe - E-Commerce & Omnichannel Order System",
    category: "fullstack",
    categoryLabel: "E-Commerce Web",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "ระบบร้านค้าออนไลน์เมล็ดกาแฟ Specialty Coffee สั่งซื้อผ่านเว็บและตัดสต็อกหน้าร้านอัตโนมัติ",
    description: "ร้านค้าออนไลน์ที่มีระบบ Subscription รายเดือนสำหรับคนรักกาแฟ ออกแบบ UI ให้มีความโฮมมี่ มินิมอล มีระบบแจ้งเตือนคำสั่งซื้อผ่าน Line Official Account แบบอัตโนมัติ",
    tags: ["React", "Node.js", "PromptPay QR", "LINE Notify", "Tailwind CSS"],
    client: "Craft Roastery BKK",
    deliveryDays: 12,
    rating: 4.9,
    liveUrl: "https://example.com/craft-cafe",
    metrics: [
      { label: "Online Sales", value: "+180%" },
      { label: "Mobile Traffic", value: "84%" },
      { label: "Average Order Value", value: "฿1,250" }
    ],
    caseStudyDetails: {
      challenge: "ร้านกาแฟเปิดขายเมล็ดกาแฟผ่านไลน์แชททำให้แอดมินตอบไม่ทันและออเดอร์ตกหล่น",
      solution: "พัฒนาระบบ Self-Checkout สแกนจ่ายพร้อมส่งสลิปตรวจสลิปอัตโนมัติ และยิงเข้าเครื่องพิมพ์ในครัว",
      results: [
        "ประหยัดเวลาแอดมินตอบแชทวันละกว่า 4 ชั่วโมง",
        "ยอดขายเมล็ดกาแฟทั่วประเทศเติบโต 180% ภายใน 2 เดือนแรก"
      ]
    }
  },
  {
    id: "proj-5",
    title: "Apex Fitness Studio - Web UI & Brand Identity",
    category: "design",
    categoryLabel: "UI/UX & Branding",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "การออกแบบเว็บไซต์และตารางคลาสออกกำลังกาย สไตล์ Modern High-Energy พร้อมดีไซน์ซิสเต็ม",
    description: "งานออกแบบ Visual Brand & Web Layout สำหรับสตูดิโอฟิตเนสระดับพรีเมียม ให้ภาพลักษณ์ทรงพลัง เข้าถึงง่าย และดึงดูดกลุ่มคนรุ่นใหม่",
    tags: ["Figma", "Branding", "UI Design", "Visual Identity", "Prototyping"],
    client: "Apex Fitness Co.",
    deliveryDays: 7,
    rating: 5.0,
    figmaUrl: "https://figma.com",
    metrics: [
      { label: "Brand Assets", value: "50+ items" },
      { label: "Lead Gen", value: "+65%" }
    ],
    caseStudyDetails: {
      challenge: "ต้องการเปลี่ยนภาพลักษณ์ฟิตเนสเดิมให้ดูโมเดิร์น ไฮเอนด์ เพื่อดึงดูดลูกค้ากลุ่มคนรุ่นใหม่",
      solution: "ออกแบบโทนสีนีออนผสมดาร์กโหมด ลายเส้นสะอาดสะอ้าน และหน้าคลาสที่จองได้ในคลิกเดียว",
      results: [
        "ยอดลงทะเบียนทดลองเล่นฟรีสัปดาห์แรกเต็มทุกโควตา",
        "ได้รับคำชมด้านความสวยงามจากลูกค้ากว่า 90%"
      ]
    }
  },
  {
    id: "proj-6",
    title: "NeuroPrompt - AI Creative Assistant Web App",
    category: "web",
    categoryLabel: "Frontend Web App",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    shortDesc: "เว็บแอปพลิเคชันสำหรับนักสร้างคอนเทนต์ จัดการและสร้าง Prompt AI ด้วย Template สำเร็จรูป",
    description: "เครื่องมือเว็บสำหรับคัดลอก ทดสอบ และจัดระเบียบคำสั่ง AI มีฟังก์ชันบันทึก Favorite, ค้นหาแบบทันที (Instant Search) และแปลงข้อความเป็นรูปแบบต่างๆ ด้วย UI ที่ลื่นไหล",
    tags: ["React", "Vite", "Tailwind CSS", "Local Storage", "Lucide Icons"],
    client: "PromptCraft Labs",
    deliveryDays: 8,
    rating: 5.0,
    liveUrl: "https://example.com/demo-ai",
    githubUrl: "https://github.com",
    metrics: [
      { label: "Load Time", value: "0.4s" },
      { label: "Stars on GitHub", value: "340+" }
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    clientName: "คุณกิตติศักดิ์ ภักดีไพศาล",
    clientRole: "Managing Director @ FinPulse",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "28 ก.ย. 2026",
    projectTitle: "SaaS Analytics & Cloud Dashboard",
    comment: "คุณชานนท์ทำงานมืออาชีพมากครับ! ทั้งเรื่อง UI ที่ออกมาสวยคลีนระดับอินเตอร์ และเรื่องโค้ด React ที่เขียนมาเนี๊ยบ ปรับแก้ง่ายตามหลัก Clean Code ส่งงานก่อนกำหนดด้วย ขอแนะนำต่อเลยครับ",
    verified: true
  },
  {
    id: "rev-2",
    clientName: "คุณศศิธร เจริญยิ่ง",
    clientRole: "Head of Product @ Nova Capital",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "14 ก.ย. 2026",
    projectTitle: "NovaPay - Mobile Banking UI/UX",
    comment: "บรีฟงานรอบเดียวเข้าใจจุดประสงค์ธุรกิจทันที ดีไซน์ที่ส่งมาใน Figma วาง Auto Layout และ Component ไว้อย่างดี ทีมนักพัฒนาของเราเอาไปขึ้นโค้ดต่อได้ราบรื่นมาก ประทับใจมากค่ะ 10/10",
    verified: true
  },
  {
    id: "rev-3",
    clientName: "คุณธนาธิป สิทธิผล",
    clientRole: "Owner @ Azure Horizons",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "02 ก.ย. 2026",
    projectTitle: "Villas & Stay Luxury Platform",
    comment: "เว็บโหลดเร็วมาก ลูกค้าต่างชาติชมว่าเปิดดูรูปห้องพักและทำการจองง่ายมากครับ ตั้งแต่เปลี่ยนมาใช้เว็บนี้ ยอดจองตรงเพิ่มขึ้นแบบเห็นได้ชัด คุ้มค่าเงินทุกบาทแน่นอนครับ",
    verified: true
  },
  {
    id: "rev-4",
    clientName: "คุณณภัทร วงศ์เจริญ",
    clientRole: "Founder @ Craft Roastery BKK",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "18 ส.ค. 2026",
    projectTitle: "CraftCafe E-Commerce System",
    comment: "ตอบแชทไว คอยให้คำปรึกษาตลอดไม่ทิ้งงาน งานละเอียดมากครับ ระบบตัดสแกนจ่ายพร้อมแจ้งเตือนในไลน์ช่วยลดงานแอดมินไปได้เยอะมาก แนะนำฟรีแลนซ์ท่านนี้เลยครับ",
    verified: true
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: "💻 Web Development",
    skills: [
      { name: "React.js / Next.js", level: "เชี่ยวชาญสูง (Expert)" },
      { name: "TypeScript / JavaScript", level: "เชี่ยวชาญสูง (Expert)" },
      { name: "Tailwind CSS / PostCSS", level: "เชี่ยวชาญสูง (Expert)" },
      { name: "Node.js / Express", level: "ชำนาญ (Advanced)" },
      { name: "RESTful API & GraphQL", level: "ชำนาญ (Advanced)" },
      { name: "PostgreSQL / Supabase", level: "ชำนาญ (Advanced)" },
      { name: "Performance & SEO Optimization", level: "เชี่ยวชาญสูง (Expert)" },
      { name: "Git & CI/CD Deployment", level: "ชำนาญ (Advanced)" }
    ]
  },
  {
    category: "🎨 UI/UX & Graphic Design",
    skills: [
      { name: "Figma (Auto Layout & Variants)", level: "เชี่ยวชาญสูง (Expert)" },
      { name: "Design System Architecture", level: "เชี่ยวชาญสูง (Expert)" },
      { name: "User Journey & Wireframing", level: "เชี่ยวชาญสูง (Expert)" },
      { name: "Interactive Prototyping", level: "ชำนาญ (Advanced)" },
      { name: "Mobile & Responsive UI", level: "เชี่ยวชาญสูง (Expert)" },
      { name: "Adobe Photoshop & Illustrator", level: "ชำนาญ (Advanced)" },
      { name: "Conversion Rate Optimization (CRO)", level: "ชำนาญ (Advanced)" }
    ]
  },
  {
    category: "⚡ Human Craft vs AI",
    skills: [
      { name: "Deep Business Empathy", level: "ตอบโจทย์เฉพาะทาง" },
      { name: "Clean Architecture & Scalability", level: "มาตรฐาน 100%" },
      { name: "ความรับผิดชอบและส่งตรงเวลา", level: "สถิติ 100%" },
      { name: "บริการหลังการขายและการดูแล", level: "ดูแลต่อเนื่อง" }
    ]
  }
];
