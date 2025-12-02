import {
  FileText,
  Mail,
  FileSpreadsheet,
  BookOpen,
  ClipboardCheck,
  AlertCircle,
  LogOut,
  PartyPopper,
} from "lucide-react";

// Multilingual content interface
interface MultilingualContent {
  en: string;
  hi: string;
  slug?:string 
}

interface CategoryTemplate {
  title: MultilingualContent;
  description: MultilingualContent;
  views: string;
  date: string;
  tag?: string;
  slug?:string 

}

interface CategorySubcategory {
  icon: React.ElementType;
  title: MultilingualContent;
  description: MultilingualContent;
  count: number;
  slug: string;
}

interface CategoryRelated {
  icon: React.ElementType;
  title: MultilingualContent;
  description: MultilingualContent;
  count: number;
  slug: string;
}

interface CategoryBlog {
  title: MultilingualContent;
  excerpt: MultilingualContent;
  readTime: string;
  thumbnail: React.ElementType;
  slug: string;
}

interface CategoryFAQ {
  question: MultilingualContent;
  answer: MultilingualContent;
}

export interface CategoryData {
  slug: string;
  name: MultilingualContent;
  description: MultilingualContent;
  breadcrumbs: MultilingualContent[];
  icon: React.ElementType;
  subcategories: CategorySubcategory[];
  templates: CategoryTemplate[];
  aboutContent: MultilingualContent;
  relatedCategories: CategoryRelated[];
  blogs: CategoryBlog[];
  faqs: CategoryFAQ[];
  seoKeywords: string[];
}

// ===========================
// LETTERS CATEGORY
// ===========================
export const lettersCategory: CategoryData = {
  slug: "letters",
  name: {
    en: "Letter Templates",
    hi: "पत्र टेम्पलेट",
  },
  description: {
    en: "Find professional and personal letter formats for all situations — resignation, request, complaint, apology, and invitation letters. Copy, edit, or download instantly.",
    hi: "सभी स्थितियों के लिए पेशेवर और व्यक्तिगत पत्र प्रारूप खोजें - त्यागपत्र, अनुरोध, शिकायत, माफी और निमंत्रण पत्र। तुरंत कॉपी, संपादित या डाउनलोड करें।",
  },
  breadcrumbs: [
    { en: "Letters", hi: "पत्र",  slug:'/letters' },
  ],
  icon: Mail,
  subcategories: [
    // {
    //   icon: FileText,
    //   title: { en: "Formal Letters", hi: "औपचारिक पत्र" },
    //   description: { en: "Official and business letter formats", hi: "आधिकारिक और व्यावसायिक पत्र प्रारूप" },
    //   count: 48,
    //   slug: "formal",
    // },
    // {
    //   icon: MessageSquare,
    //   title: { en: "Informal Letters", hi: "अनौपचारिक पत्र" },
    //   description: { en: "Personal and casual letter templates", hi: "व्यक्तिगत और आकस्मिक पत्र टेम्पलेट" },
    //   count: 34,
    //   slug: "informal",
    // },
    {
      icon: ClipboardCheck,
      title: { en: "Request Letters", hi: "अनुरोध पत्र" },
      description: { en: "Letters for making formal requests", hi: "औपचारिक अनुरोध के लिए पत्र" },
      count: 41,
      slug: "request",
    },
    {
      icon: AlertCircle,
      title: { en: "Complaint Letters", hi: "शिकायत पत्र" },
      description: { en: "Complaint and grievance formats", hi: "शिकायत और परेशानी प्रारूप" },
      count: 29,
      slug: "complaint",
    },
    {
      icon: LogOut,
      title: { en: "Resignation Letters", hi: "त्यागपत्र" },
      description: { en: "Professional resignation templates", hi: "पेशेवर त्यागपत्र टेम्पलेट" },
      count: 25,
      slug: "resignation",
    },
    {
      icon: PartyPopper,
      title: { en: "Invitation Letters", hi: "निमंत्रण पत्र" },
      description: { en: "Event and occasion invitations", hi: "कार्यक्रम और अवसर निमंत्रण" },
      count: 32,
      slug: "invitation",
    },
  ],
  templates: [
    {
      title: { en: "Resignation Letter for Employee", hi: "कर्मचारी के लिए त्यागपत्र" },
      description: {
        en: "Professional resignation letter format with notice period and gratitude",
        hi: "नोटिस अवधि और कृतज्ञता के साथ पेशेवर त्यागपत्र प्रारूप",
      },
      views: "28.5k",
      date: "Nov 2025",
      tag: "Popular",
    },
    {
      title: { en: "Complaint Letter to Bank", hi: "बैंक को शिकायत पत्र" },
      description: {
        en: "Formal complaint letter format for banking issues and grievances",
        hi: "बैंकिंग मुद्दों और शिकायतों के लिए औपचारिक शिकायत पत्र प्रारूप",
      },
      views: "22.4k",
      date: "Nov 2025",
    },
    {
      title: { en: "Request Letter to Principal", hi: "प्रधानाचार्य को अनुरोध पत्र" },
      description: {
        en: "Student request letter for various school-related matters",
        hi: "विभिन्न स्कूल संबंधी मामलों के लिए छात्र अनुरोध पत्र",
      },
      views: "20.8k",
      date: "Nov 2025",
    },
    {
      title: { en: "Invitation Letter for Birthday Party", hi: "जन्मदिन की पार्टी के लिए निमंत्रण पत्र" },
      description: {
        en: "Friendly invitation letter format for birthday celebrations",
        hi: "जन्मदिन समारोह के लिए मित्रवत निमंत्रण पत्र प्रारूप",
      },
      views: "18.3k",
      date: "Nov 2025",
      tag: "Trending",
    },
    {
      title: { en: "Apology Letter to Teacher", hi: "शिक्षक को माफी पत्र" },
      description: {
        en: "Sincere apology letter format for students",
        hi: "छात्रों के लिए ईमानदार माफी पत्र प्रारूप",
      },
      views: "16.7k",
      date: "Nov 2025",
    },
    {
      title: { en: "Business Proposal Letter", hi: "व्यापार प्रस्ताव पत्र" },
      description: {
        en: "Professional business proposal and partnership letter",
        hi: "पेशेवर व्यापार प्रस्ताव और साझेदारी पत्र",
      },
      views: "15.5k",
      date: "Oct 2025",
    },
  ],
  aboutContent: {
    en: "Letter templates serve as essential communication tools for both personal and professional correspondence. Our comprehensive collection includes formal letters for business and official purposes, informal letters for friends and family, request letters for various needs, complaint letters for raising concerns, resignation letters for career transitions, and invitation letters for events. Each template is carefully crafted to maintain proper tone, structure, and etiquette while being easily customizable to suit your specific situation.",
    hi: "पत्र टेम्पलेट व्यक्तिगत और पेशेवर पत्राचार दोनों के लिए आवश्यक संचार उपकरण के रूप में काम करते हैं। हमारे व्यापक संग्रह में व्यवसाय और आधिकारिक उद्देश्यों के लिए औपचारिक पत्र, दोस्तों और परिवार के लिए अनौपचारिक पत्र, विभिन्न जरूरतों के लिए अनुरोध पत्र, चिंताओं को उठाने के लिए शिकायत पत्र, करियर परिवर्तन के लिए त्यागपत्र, और कार्यक्रमों के लिए निमंत्रण पत्र शामिल हैं।",
  },
  relatedCategories: [
    {
      icon: FileText,
      title: { en: "Application Templates", hi: "आवेदन टेम्पलेट" },
      description: { en: "Job, leave, and loan applications", hi: "नौकरी, छुट्टी और ऋण आवेदन" },
      count: 189,
      slug: "applications",
    },
    {
      icon: FileSpreadsheet,
      title: { en: "Resumes & Cover Letters", hi: "रिज्यूमे और कवर लेटर" },
      description: { en: "Professional CV and cover letters", hi: "पेशेवर सीवी और कवर लेटर" },
      count: 67,
      slug: "resumes",
    },
    {
      icon: BookOpen,
      title: { en: "Essays & Paragraphs", hi: "निबंध और पैराग्राफ" },
      description: { en: "Essay writing templates", hi: "निबंध लेखन टेम्पलेट" },
      count: 124,
      slug: "essays",
    },
    {
      icon: ClipboardCheck,
      title: { en: "Notices & Reports", hi: "नोटिस और रिपोर्ट" },
      description: { en: "Notice and report formats", hi: "नोटिस और रिपोर्ट प्रारूप" },
      count: 78,
      slug: "notices",
    },
  ],
  blogs: [
    {
      title: { en: "How to Write a Formal Letter", hi: "औपचारिक पत्र कैसे लिखें" },
      excerpt: {
        en: "Step-by-step guide to writing professional formal letters with proper format and tone",
        hi: "उचित प्रारूप और स्वर के साथ पेशेवर औपचारिक पत्र लिखने के लिए चरण-दर-चरण गाइड",
      },
      readTime: "5 min read",
      thumbnail: FileText,
      slug: "formal-letter-guide",
    },
    {
      title: { en: "Resignation Letter Writing Tips", hi: "त्यागपत्र पत्र लेखन सुझाव" },
      excerpt: {
        en: "Expert advice on writing professional resignation letters that maintain positive relationships",
        hi: "सकारात्मक संबंध बनाए रखने वाले पेशेवर त्यागपत्र लिखने पर विशेषज्ञ सलाह",
      },
      readTime: "4 min read",
      thumbnail: LogOut,
      slug: "resignation-letter-tips",
    },
    {
      title: { en: "The Art of Writing Complaint Letters", hi: "शिकायत पत्र लिखने की कला" },
      excerpt: {
        en: "Learn how to write effective complaint letters that get results while remaining professional",
        hi: "जानें कि प्रभावी शिकायत पत्र कैसे लिखें जो पेशेवर रहते हुए परिणाम प्राप्त करें",
      },
      readTime: "6 min read",
      thumbnail: AlertCircle,
      slug: "complaint-letter-writing",
    },
  ],
  faqs: [
    {
      question: { en: "What is the difference between formal and informal letters?", hi: "औपचारिक और अनौपचारिक पत्रों में क्या अंतर है?" },
      answer: {
        en: "Formal letters follow a structured format and professional tone for official communication, while informal letters are casual and conversational, used for personal correspondence with friends and family.",
        hi: "औपचारिक पत्र आधिकारिक संचार के लिए एक संरचित प्रारूप और पेशेवर स्वर का पालन करते हैं, जबकि अनौपचारिक पत्र आकस्मिक और संवादात्मक होते हैं।",
      },
    },
    {
      question: { en: "How do I write a professional resignation letter?", hi: "मैं एक पेशेवर त्यागपत्र कैसे लिखूं?" },
      answer: {
        en: "Include your intention to resign, last working day (considering notice period), gratitude for opportunities, and offer to help with transition. Keep it positive and professional regardless of your reasons for leaving.",
        hi: "अपने इस्तीफे के इरादे, अंतिम कार्य दिवस, अवसरों के लिए कृतज्ञता, और संक्रमण में मदद करने की पेशकश शामिल करें।",
      },
    },
    {
      question: { en: "Can I use these letter templates for official purposes?", hi: "क्या मैं आधिकारिक उद्देश्यों के लिए इन पत्र टेम्पलेट का उपयोग कर सकता हूं?" },
      answer: {
        en: "Yes, our templates follow professional standards and are suitable for official use. However, customize them with accurate details and verify any specific requirements from your organization.",
        hi: "हां, हमारे टेम्पलेट पेशेवर मानकों का पालन करते हैं और आधिकारिक उपयोग के लिए उपयुक्त हैं।",
      },
    },
    {
      question: { en: "How should I address the recipient in a formal letter?", hi: "मुझे औपचारिक पत्र में प्राप्तकर्ता को कैसे संबोधित करना चाहिए?" },
      answer: {
        en: "Use appropriate titles (Mr., Ms., Dr., etc.) with the person's last name. If you don't know the name, use 'Sir' or 'Madam'. For very formal letters, 'Dear Sir/Madam' or 'To Whom It May Concern' are acceptable.",
        hi: "व्यक्ति के अंतिम नाम के साथ उपयुक्त शीर्षक (श्री, सुश्री, डॉ, आदि) का उपयोग करें।",
      },
    },
    {
      question: { en: "What's the proper format for a business letter?", hi: "व्यावसायिक पत्र का उचित प्रारूप क्या है?" },
      answer: {
        en: "A business letter should include: sender's address, date, recipient's address, salutation, body paragraphs, closing, and signature. Use block format with single spacing within paragraphs and double spacing between them.",
        hi: "व्यावसायिक पत्र में शामिल होना चाहिए: प्रेषक का पता, तारीख, प्राप्तकर्ता का पता, अभिवादन, मुख्य पैराग्राफ, समापन और हस्ताक्षर।",
      },
    },
  ],
  seoKeywords: [
    "formal letter format",
    "resignation letter",
    "complaint letter",
    "request letter",
    "invitation letter",
    "business letter",
    "letter templates",
  ],
};




// Helper function to get category data by slug
export function getCategoryData(slug: string): CategoryData | undefined {
  const categories: CategoryData[] = [
    lettersCategory  ];

  return categories.find(cat => cat.slug === slug);
}

// Export all categories for easy access
export const allCategories: CategoryData[] = [
  lettersCategory,
];

// Re-export additional categories for direct import
