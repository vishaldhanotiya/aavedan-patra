import {
  FileText,
  Mail,
  Award,
  Briefcase,
  FileSpreadsheet,
  BookOpen,
  FileSignature,
  GraduationCap,
  Heart,
  Wallet,
  School,
  Trophy,
  Building2,
  Home,
  DollarSign,
  UserCheck,
  Shield,
  Gift,
  ClipboardCheck,
  MessageSquare,
  AlertCircle,
  LogOut,
  PartyPopper,
  Settings,
  Users,
  Calendar,
  Clock,
  Zap,
  Target,
  Star,
  TrendingUp,
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
// APPLICATIONS CATEGORY
// ===========================
export const applicationsCategory: CategoryData = {
  slug: "applications",
  name: {
    en: "Application Templates",
    hi: "आवेदन टेम्पलेट",
  },
  description: {
    en: "Browse professional application templates for jobs, leaves, loans, admissions, and scholarships. Download free, editable formats in English and Hindi.",
    hi: "नौकरी, छुट्टी, ऋण, प्रवेश और छात्रवृत्ति के लिए पेशेवर आवेदन टेम्पलेट देखें। अंग्रेजी और हिंदी में मुफ्त, संपादन योग्य प्रारूप डाउनलोड करें।",
  },
  breadcrumbs: [
    { en: "Applications", hi: "आवेदन" },
  ],
  icon: FileText,
  subcategories: [
    {
      icon: Briefcase,
      title: { en: "Job Applications", hi: "नौकरी आवेदन" },
      description: { en: "Professional job application formats", hi: "पेशेवर नौकरी आवेदन प्रारूप" },
      count: 6,
      slug: "job",
    },
    {
      icon: Calendar,
      title: { en: "Leave Applications", hi: "छुट्टी आवेदन" },
      description: { en: "Leave request templates for office & school", hi: "कार्यालय और स्कूल के लिए छुट्टी आवेदन" },
      count: 38,
      slug: "leave",
    },
    {
      icon: DollarSign,
      title: { en: "Loan Applications", hi: "ऋण आवेदन" },
      description: { en: "Bank loan application formats", hi: "बैंक ऋण आवेदन प्रारूप" },
      count: 32,
      slug: "loan",
    },
    {
      icon: GraduationCap,
      title: { en: "Admission Applications", hi: "प्रवेश आवेदन" },
      description: { en: "School & college admission templates", hi: "स्कूल और कॉलेज प्रवेश टेम्पलेट" },
      count: 29,
      slug: "admission",
    },
    {
      icon: Trophy,
      title: { en: "Scholarship Applications", hi: "छात्रवृत्ति आवेदन" },
      description: { en: "Scholarship request letter formats", hi: "छात्रवृत्ति अनुरोध पत्र प्रारूप" },
      count: 24,
      slug: "scholarship",
    },
    {
      icon: Shield,
      title: { en: "Certificate Applications", hi: "प्रमाणपत्र आवेदन" },
      description: { en: "Request letters for certificates", hi: "प्रमाणपत्र के लिए अनुरोध पत्र" },
      count: 21,
      slug: "certificate-request",
    },
  ],
  templates: [
    {
      title: { en: "Job Application for Teacher Position", hi: "शिक्षक पद के लिए नौकरी आवेदन" },
      description: {
        en: "Professional application format for teaching positions in schools and colleges",
        hi: "स्कूलों और कॉलेजों में शिक्षण पदों के लिए पेशेवर आवेदन प्रारूप",
      },
      views: "24.5k",
      date: "Nov 2025",
      tag: "Popular",
    },
    {
      title: { en: "Sick Leave Application to Manager", hi: "प्रबंधक को बीमारी की छुट्टी आवेदन" },
      description: {
        en: "Formal sick leave request with medical reasons and duration",
        hi: "चिकित्सा कारणों और अवधि के साथ औपचारिक बीमारी छुट्टी अनुरोध",
      },
      views: "21.8k",
      date: "Nov 2025",
    },
    {
      title: { en: "Personal Loan Application to Bank", hi: "बैंक को व्यक्तिगत ऋण आवेदन" },
      description: {
        en: "Complete format for requesting personal loans with income details",
        hi: "आय विवरण के साथ व्यक्तिगत ऋण के लिए पूर्ण प्रारूप",
      },
      views: "19.2k",
      date: "Nov 2025",
      tag: "Trending",
    },
    {
      title: { en: "College Admission Application", hi: "कॉलेज प्रवेश आवेदन" },
      description: {
        en: "Formal application letter for undergraduate and postgraduate admissions",
        hi: "स्नातक और स्नातकोत्तर प्रवेश के लिए औपचारिक आवेदन पत्र",
      },
      views: "17.5k",
      date: "Nov 2025",
    },
    {
      title: { en: "Merit Scholarship Application", hi: "मेरिट छात्रवृत्ति आवेदन" },
      description: {
        en: "Application format for academic merit-based scholarships",
        hi: "शैक्षणिक मेरिट आधारित छात्रवृत्ति के लिए आवेदन प्रारूप",
      },
      views: "16.9k",
      date: "Nov 2025",
    },
    {
      title: { en: "Casual Leave Application", hi: "आकस्मिक छुट्टी आवेदन" },
      description: {
        en: "Simple template for requesting casual leave from office",
        hi: "कार्यालय से आकस्मिक छुट्टी के अनुरोध के लिए सरल टेम्पलेट",
      },
      views: "15.3k",
      date: "Oct 2025",
    },
  ],
  aboutContent: {
    en: "Application templates are essential documents used for making formal requests in professional, educational, and financial contexts. Our collection includes professionally crafted formats for job applications, leave requests, loan applications, college admissions, scholarship requests, and certificate applications. Each template follows proper formatting standards, includes all necessary sections, and can be easily customized for your specific needs. Whether you're a student, employee, or professional, our templates help you communicate your requests clearly and effectively while maintaining proper etiquette and professionalism.",
    hi: "आवेदन टेम्पलेट पेशेवर, शैक्षिक और वित्तीय संदर्भों में औपचारिक अनुरोध करने के लिए उपयोग किए जाने वाले आवश्यक दस्तावेज हैं। हमारे संग्रह में नौकरी आवेदन, छुट्टी अनुरोध, ऋण आवेदन, कॉलेज प्रवेश, छात्रवृत्ति अनुरोध और प्रमाणपत्र आवेदन के लिए पेशेवर रूप से तैयार प्रारूप शामिल हैं। प्रत्येक टेम्पलेट उचित स्वरूपण मानकों का पालन करता है, सभी आवश्यक अनुभाग शामिल करता है, और आपकी विशिष्ट आवश्यकताओं के लिए आसानी से अनुकूलित किया जा सकता है।",
  },
  relatedCategories: [
    {
      icon: Mail,
      title: { en: "Letter Templates", hi: "पत्र टेम्पलेट" },
      description: { en: "Formal and informal letter formats", hi: "औपचारिक और अनौपचारिक पत्र प्रारूप" },
      count: 156,
      slug: "letters",
    },
    {
      icon: Award,
      title: { en: "Certificates", hi: "प्रमाणपत्र" },
      description: { en: "Professional certificate templates", hi: "पेशेवर प्रमाणपत्र टेम्पलेट" },
      count: 89,
      slug: "certificates",
    },
    {
      icon: FileSpreadsheet,
      title: { en: "Resumes & Cover Letters", hi: "रिज्यूमे और कवर लेटर" },
      description: { en: "CV and cover letter formats", hi: "सीवी और कवर लेटर प्रारूप" },
      count: 67,
      slug: "resumes",
    },
    {
      icon: FileSignature,
      title: { en: "Agreements & Forms", hi: "समझौते और फॉर्म" },
      description: { en: "Legal agreement templates", hi: "कानूनी समझौता टेम्पलेट" },
      count: 54,
      slug: "agreements",
    },
  ],
  blogs: [
    {
      title: { en: "How to Write a Job Application Letter", hi: "नौकरी आवेदन पत्र कैसे लिखें" },
      excerpt: {
        en: "Learn the essential steps and best practices for creating professional job applications that get noticed",
        hi: "पेशेवर नौकरी आवेदन बनाने के लिए आवश्यक कदम और सर्वोत्तम प्रथाएं सीखें",
      },
      readTime: "5 min read",
      thumbnail: BookOpen,
      slug: "how-to-write-job-application",
    },
    {
      title: { en: "Leave Application Format: Complete Guide", hi: "छुट्टी आवेदन प्रारूप: पूर्ण गाइड" },
      excerpt: {
        en: "Everything you need to know about writing effective leave applications for office and school",
        hi: "कार्यालय और स्कूल के लिए प्रभावी छुट्टी आवेदन लिखने के बारे में सब कुछ जानें",
      },
      readTime: "4 min read",
      thumbnail: Calendar,
      slug: "leave-application-guide",
    },
    {
      title: { en: "Loan Application Tips for Faster Approval", hi: "तेज़ अनुमोदन के लिए ऋण आवेदन टिप्स" },
      excerpt: {
        en: "Expert tips and required documents for successful loan applications to banks",
        hi: "बैंकों में सफल ऋण आवेदन के लिए विशेषज्ञ सुझाव और आवश्यक दस्तावेज",
      },
      readTime: "6 min read",
      thumbnail: DollarSign,
      slug: "loan-application-tips",
    },
  ],
  faqs: [
    {
      question: { en: "How do I write a job application?", hi: "मैं नौकरी आवेदन कैसे लिखूं?" },
      answer: {
        en: "A job application should include your contact information, the position you're applying for, your qualifications, relevant experience, and why you're a good fit for the role. Use our templates as a starting point and customize them with your details.",
        hi: "नौकरी आवेदन में आपकी संपर्क जानकारी, आप जिस पद के लिए आवेदन कर रहे हैं, आपकी योग्यता, प्रासंगिक अनुभव और आप भूमिका के लिए एक अच्छे उम्मीदवार क्यों हैं, शामिल होना चाहिए।",
      },
    },
    {
      question: { en: "What should be included in a leave application?", hi: "छुट्टी आवेदन में क्या शामिल होना चाहिए?" },
      answer: {
        en: "A leave application should mention the reason for leave, start and end dates, number of days, contact details during leave, and any work handover arrangements. Keep it concise and professional.",
        hi: "छुट्टी आवेदन में छुट्टी का कारण, शुरुआत और अंत की तारीखें, दिनों की संख्या, छुट्टी के दौरान संपर्क विवरण और कोई भी कार्य हस्तांतरण व्यवस्था का उल्लेख होना चाहिए।",
      },
    },
    {
      question: { en: "How long does loan approval take?", hi: "ऋण अनुमोदन में कितना समय लगता है?" },
      answer: {
        en: "Loan approval typically takes 3-7 business days for personal loans and 15-30 days for home loans. Having all required documents ready and submitting a well-formatted application can speed up the process.",
        hi: "व्यक्तिगत ऋण के लिए ऋण अनुमोदन में आमतौर पर 3-7 कार्य दिवस और गृह ऋण के लिए 15-30 दिन लगते हैं।",
      },
    },
    {
      question: { en: "Can I use these templates for Hindi applications?", hi: "क्या मैं हिंदी आवेदन के लिए इन टेम्पलेट का उपयोग कर सकता हूं?" },
      answer: {
        en: "Yes! All our templates are available in both English and Hindi. You can download the version you need or switch between languages easily.",
        hi: "हां! हमारे सभी टेम्पलेट अंग्रेजी और हिंदी दोनों में उपलब्ध हैं। आप आवश्यक संस्करण डाउनलोड कर सकते हैं या आसानी से भाषाओं के बीच स्विच कर सकते हैं।",
      },
    },
    {
      question: { en: "Are these application formats legally valid?", hi: "क्या ये आवेदन प्रारूप कानूनी रूप से मान्य हैं?" },
      answer: {
        en: "Our templates follow standard professional formats widely accepted in India. However, some organizations may have specific requirements, so always check with your institution or employer for any additional guidelines.",
        hi: "हमारे टेम्पलेट मानक पेशेवर प्रारूपों का पालन करते हैं जो भारत में व्यापक रूप से स्वीकृत हैं। हालांकि, कुछ संगठनों की विशिष्ट आवश्यकताएं हो सकती हैं।",
      },
    },
  ],
  seoKeywords: [
    "job application format",
    "leave application",
    "loan application to bank",
    "college admission application",
    "scholarship application letter",
    "application templates",
    "formal application format",
  ],
};

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

// ===========================
// CERTIFICATES CATEGORY
// ===========================
export const certificatesCategory: CategoryData = {
  slug: "certificates",
  name: {
    en: "Certificate Templates",
    hi: "प्रमाणपत्र टेम्पलेट",
  },
  description: {
    en: "Download free certificate templates for experience, bonafide, character, internship, course completion, and more. Available in professional formats.",
    hi: "अनुभव, बोनाफाइड, चरित्र, इंटर्नशिप, पाठ्यक्रम पूर्णता और अधिक के लिए मुफ्त प्रमाणपत्र टेम्पलेट डाउनलोड करें।",
  },
  breadcrumbs: [
    { en: "Certificates", hi: "प्रमाणपत्र" },
  ],
  icon: Award,
  subcategories: [
    {
      icon: Briefcase,
      title: { en: "Experience Certificates", hi: "अनुभव प्रमाणपत्र" },
      description: { en: "Work experience certificate formats", hi: "कार्य अनुभव प्रमाणपत्र प्रारूप" },
      count: 28,
      slug: "experience",
    },
    {
      icon: School,
      title: { en: "Bonafide Certificates", hi: "बोनाफाइड प्रमाणपत्र" },
      description: { en: "School and college bonafide formats", hi: "स्कूल और कॉलेज बोनाफाइड प्रारूप" },
      count: 22,
      slug: "bonafide",
    },
    {
      icon: Shield,
      title: { en: "Character Certificates", hi: "चरित्र प्रमाणपत्र" },
      description: { en: "Character and conduct certificates", hi: "चरित्र और आचरण प्रमाणपत्र" },
      count: 19,
      slug: "character",
    },
    {
      icon: UserCheck,
      title: { en: "Internship Certificates", hi: "इंटर्नशिप प्रमाणपत्र" },
      description: { en: "Internship completion certificates", hi: "इंटर्नशिप पूर्णता प्रमाणपत्र" },
      count: 24,
      slug: "internship",
    },
    {
      icon: Trophy,
      title: { en: "Course Certificates", hi: "पाठ्यक्रम प्रमाणपत्र" },
      description: { en: "Course and training certificates", hi: "पाठ्यक्रम और प्रशिक्षण प्रमाणपत्र" },
      count: 31,
      slug: "course",
    },
    {
      icon: Gift,
      title: { en: "Appreciation Certificates", hi: "प्रशंसा प्रमाणपत्र" },
      description: { en: "Recognition and appreciation formats", hi: "पहचान और प्रशंसा प्रारूप" },
      count: 26,
      slug: "appreciation",
    },
  ],
  templates: [
    {
      title: { en: "Experience Certificate for Employee", hi: "कर्मचारी के लिए अनुभव प्रमाणपत्र" },
      description: {
        en: "Professional work experience certificate with job responsibilities and duration",
        hi: "नौकरी जिम्मेदारियों और अवधि के साथ पेशेवर कार्य अनुभव प्रमाणपत्र",
      },
      views: "32.5k",
      date: "Nov 2025",
      tag: "Popular",
    },
    {
      title: { en: "Bonafide Certificate for School Student", hi: "स्कूल छात्र के लिए बोनाफाइड प्रमाणपत्र" },
      description: {
        en: "School bonafide certificate confirming student enrollment and attendance",
        hi: "छात्र नामांकन और उपस्थिति की पुष्टि करने वाला स्कूल बोनाफाइड प्रमाणपत्र",
      },
      views: "28.9k",
      date: "Nov 2025",
    },
    {
      title: { en: "Character Certificate from Principal", hi: "प्रधानाचार्य से चरित्र प्रमाणपत्र" },
      description: {
        en: "Official character certificate from school or college principal",
        hi: "स्कूल या कॉलेज प्रधानाचार्य से आधिकारिक चरित्र प्रमाणपत्र",
      },
      views: "24.2k",
      date: "Nov 2025",
      tag: "Trending",
    },
    {
      title: { en: "Internship Completion Certificate", hi: "इंटर्नशिप पूर्णता प्रमाणपत्र" },
      description: {
        en: "Certificate format for successful internship completion with details",
        hi: "विवरण के साथ सफल इंटर्नशिप पूर्णता के लिए प्रमाणपत्र प्रारूप",
      },
      views: "21.7k",
      date: "Nov 2025",
    },
    {
      title: { en: "Course Completion Certificate", hi: "पाठ्यक्रम पूर्णता प्रमाणपत्र" },
      description: {
        en: "Training and course completion certificate with skills acquired",
        hi: "प्राप्त कौशल के साथ प्रशिक्षण और पाठ्यक्रम पूर्णता प्रमाणपत्र",
      },
      views: "19.8k",
      date: "Nov 2025",
    },
    {
      title: { en: "Appreciation Certificate for Employee", hi: "कर्मचारी के लिए प्रशंसा प्रमाणपत्र" },
      description: {
        en: "Recognition certificate for outstanding performance and achievements",
        hi: "उत्कृष्ट प्रदर्शन और उपलब्धियों के लिए मान्यता प्रमाणपत्र",
      },
      views: "17.4k",
      date: "Oct 2025",
    },
  ],
  aboutContent: {
    en: "Certificate templates are professional documents used to verify credentials, achievements, and affiliations. Our collection includes experience certificates for employment verification, bonafide certificates for student enrollment confirmation, character certificates for conduct verification, internship certificates for training completion, course certificates for skill validation, and appreciation certificates for recognition. All templates follow official formats and can be customized with your organization's letterhead and details.",
    hi: "प्रमाणपत्र टेम्पलेट पेशेवर दस्तावेज हैं जिनका उपयोग क्रेडेंशियल्स, उपलब्धियों और संबद्धताओं को सत्यापित करने के लिए किया जाता है। हमारे संग्रह में रोजगार सत्यापन के लिए अनुभव प्रमाणपत्र, छात्र नामांकन पुष्टि के लिए बोनाफाइड प्रमाणपत्र, आचरण सत्यापन के लिए चरित्र प्रमाणपत्र, प्रशिक्षण पूर्णता के लिए इंटर्नशिप प्रमाणपत्र शामिल हैं।",
  },
  relatedCategories: [
    {
      icon: FileText,
      title: { en: "Application Templates", hi: "आवेदन टेम्पलेट" },
      description: { en: "Certificate request applications", hi: "प्रमाणपत्र अनुरोध आवेदन" },
      count: 189,
      slug: "applications",
    },
    {
      icon: Mail,
      title: { en: "Letter Templates", hi: "पत्र टेम्पलेट" },
      description: { en: "Formal letter formats", hi: "औपचारिक पत्र प्रारूप" },
      count: 156,
      slug: "letters",
    },
    {
      icon: FileSpreadsheet,
      title: { en: "Resumes & Cover Letters", hi: "रिज्यूमे और कवर लेटर" },
      description: { en: "Professional CV templates", hi: "पेशेवर सीवी टेम्पलेट" },
      count: 67,
      slug: "resumes",
    },
    {
      icon: BookOpen,
      title: { en: "Notices & Reports", hi: "नोटिस और रिपोर्ट" },
      description: { en: "Official notice formats", hi: "आधिकारिक नोटिस प्रारूप" },
      count: 78,
      slug: "notices",
    },
  ],
  blogs: [
    {
      title: { en: "How to Request an Experience Certificate", hi: "अनुभव प्रमाणपत्र का अनुरोध कैसे करें" },
      excerpt: {
        en: "Complete guide on requesting and obtaining experience certificates from employers",
        hi: "नियोक्ताओं से अनुभव प्रमाणपत्र का अनुरोध और प्राप्त करने पर पूर्ण गाइड",
      },
      readTime: "4 min read",
      thumbnail: Briefcase,
      slug: "experience-certificate-guide",
    },
    {
      title: { en: "Bonafide Certificate: Uses and Format", hi: "बोनाफाइड प्रमाणपत्र: उपयोग और प्रारूप" },
      excerpt: {
        en: "Understanding bonafide certificates, their purposes, and how to apply for them",
        hi: "बोनाफाइड प्रमाणपत्र, उनके उद्देश्य और उनके लिए आवेदन कैसे करें को समझना",
      },
      readTime: "5 min read",
      thumbnail: School,
      slug: "bonafide-certificate-uses",
    },
    {
      title: { en: "Creating Professional Course Certificates", hi: "पेशेवर पाठ्यक्रम प्रमाणपत्र बनाना" },
      excerpt: {
        en: "Best practices for designing and issuing course completion certificates",
        hi: "पाठ्यक्रम पूर्णता प्रमाणपत्र डिजाइन और जारी करने के लिए सर्वोत्तम प्रथाएं",
      },
      readTime: "6 min read",
      thumbnail: Trophy,
      slug: "course-certificate-guide",
    },
  ],
  faqs: [
    {
      question: { en: "What is an experience certificate?", hi: "अनुभव प्रमाणपत्र क्या है?" },
      answer: {
        en: "An experience certificate is an official document issued by an employer confirming your employment duration, job role, and responsibilities. It's essential for future job applications and career verification.",
        hi: "अनुभव प्रमाणपत्र एक आधिकारिक दस्तावेज है जो नियोक्ता द्वारा आपके रोजगार की अवधि, नौकरी की भूमिका और जिम्मेदारियों की पुष्टि करते हुए जारी किया जाता है।",
      },
    },
    {
      question: { en: "How do I get a bonafide certificate from school?", hi: "मैं स्कूल से बोनाफाइड प्रमाणपत्र कैसे प्राप्त करूं?" },
      answer: {
        en: "Submit a written application to your school principal requesting a bonafide certificate. Include the purpose (exam, bank account, etc.) and your student details. Most schools issue it within 2-3 days.",
        hi: "बोनाफाइड प्रमाणपत्र का अनुरोध करते हुए अपने स्कूल प्रधानाचार्य को एक लिखित आवेदन प्रस्तुत करें।",
      },
    },
    {
      question: { en: "Are these certificate templates legally valid?", hi: "क्या ये प्रमाणपत्र टेम्पलेट कानूनी रूप से मान्य हैं?" },
      answer: {
        en: "Our templates follow standard professional formats. For legal validity, certificates must be issued on official letterhead with authorized signatures and stamps from the issuing organization.",
        hi: "हमारे टेम्पलेट मानक पेशेवर प्रारूपों का पालन करते हैं। कानूनी वैधता के लिए, प्रमाणपत्र आधिकारिक लेटरहेड पर जारी किए जाने चाहिए।",
      },
    },
    {
      question: { en: "Can I edit these certificate templates?", hi: "क्या मैं इन प्रमाणपत्र टेम्पलेट को संपादित कर सकता हूं?" },
      answer: {
        en: "Yes, all our templates are fully editable. You can customize names, dates, details, and add your organization's logo and letterhead. Download in Word or PDF format for easy editing.",
        hi: "हां, हमारे सभी टेम्पलेट पूरी तरह से संपादन योग्य हैं। आप नाम, तारीखें, विवरण अनुकूलित कर सकते हैं।",
      },
    },
    {
      question: { en: "What should an internship certificate include?", hi: "इंटर्नशिप प्रमाणपत्र में क्या शामिल होना चाहिए?" },
      answer: {
        en: "An internship certificate should mention the intern's name, internship duration, department/role, key responsibilities, skills gained, and performance feedback. It should be on company letterhead with authorized signature.",
        hi: "इंटर्नशिप प्रमाणपत्र में इंटर्न का नाम, इंटर्नशिप की अवधि, विभाग/भूमिका, मुख्य जिम्मेदारियां, प्राप्त कौशल और प्रदर्शन प्रतिक्रिया का उल्लेख होना चाहिए।",
      },
    },
  ],
  seoKeywords: [
    "experience certificate format",
    "bonafide certificate",
    "character certificate",
    "internship certificate",
    "course completion certificate",
    "certificate templates",
    "professional certificates",
  ],
};

// Import additional categories
import { 
  resumesCategory, 
  noticesCategory, 
  essaysCategory, 
  agreementsCategory 
} from "./additionalCategories";

// Helper function to get category data by slug
export function getCategoryData(slug: string): CategoryData | undefined {
  const categories: CategoryData[] = [
    applicationsCategory,
    lettersCategory,
    certificatesCategory,
    resumesCategory,
    noticesCategory,
    essaysCategory,
    agreementsCategory,
  ];

  return categories.find(cat => cat.slug === slug);
}

// Export all categories for easy access
export const allCategories: CategoryData[] = [
  applicationsCategory,
  lettersCategory,
  certificatesCategory,
  resumesCategory,
  noticesCategory,
  essaysCategory,
  agreementsCategory,
];

// Re-export additional categories for direct import
export { resumesCategory, noticesCategory, essaysCategory, agreementsCategory };
