import {
  FileText,
  Mail,
  Award,
  Briefcase,
  FileSpreadsheet,
  BookOpen,
  School,
  Trophy,
  UserCheck,
  Shield,
  Gift,
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



// Helper function to get category data by slug
export function getCategoryData(slug: string): CategoryData | undefined {
  const categories: CategoryData[] = [
    certificatesCategory
  ];

  return categories.find(cat => cat.slug === slug);
}

// Export all categories for easy access
export const allCategories: CategoryData[] = [
  certificatesCategory,
];

// Re-export additional categories for direct import
