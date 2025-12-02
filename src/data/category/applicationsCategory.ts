import {
  FileText,
  Mail,
  Award,
  Briefcase,
  FileSpreadsheet,
  BookOpen,
  FileSignature,
  GraduationCap,
  Trophy,
  DollarSign,
  Shield,
  Calendar,
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




// Helper function to get category data by slug
export function getCategoryData(slug: string): CategoryData | undefined {
  const categories: CategoryData[] = [
    applicationsCategory  ];

  return categories.find(cat => cat.slug === slug);
}

// Export all categories for easy access
export const allCategories: CategoryData[] = [
  applicationsCategory,
];

// Re-export additional categories for direct import
