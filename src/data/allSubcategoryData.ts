/**
 * COMPREHENSIVE SUBCATEGORY DATA FOR ALL CATEGORIES
 * 
 * This file contains data for ALL subcategories across all 7 main categories:
 * 1. Applications (6 subcategories)
 * 2. Letters (6 subcategories)
 * 3. Certificates (6 subcategories)
 * 4. Resumes (6 subcategories)
 * 5. Notices (6 subcategories)
 * 6. Essays (6 subcategories)
 * 7. Agreements (6 subcategories)
 * 
 * Total: 42 Subcategory Pages
 */

export interface SubcategoryData {
  // Basic Info
  slug: string;
  categorySlug: string;
  categoryName: { en: string; hi: string };
  subcategoryName: { en: string; hi: string };
  
  // Breadcrumb
  breadcrumb: { en: string; hi: string,breadcrumb?:string }[];
  
  // Hero Section
  heroTitle: { en: string; hi: string };
  heroDescription: { en: string; hi: string };
  
  // Search
  searchPlaceholder: { en: string; hi: string };
  
  // Dynamic Tags/Filters
  tags: string[];
  
  // Templates
  templates: {
    id: string;
    title: { en: string; hi: string };
    description: { en: string; hi: string };
    lastUpdated: string;
    views: string;
    templateSlug: string;
    badge?: "Popular" | "Trending" | "New";
  }[];
  
  // SEO Section
  seoTitle: { en: string; hi: string };
  seoDescription: { en: string; hi: string };
  
  // Related Templates (Cross-linking)
  relatedTemplates: {
    title: { en: string; hi: string };
    category: { en: string; hi: string };
    slug: string;
  }[];
  
  // Blog Posts
  blogPosts: {
    title: { en: string; hi: string };
    excerpt: { en: string; hi: string };
    readTime: string;
    slug: string;
  }[];
  
  // FAQs
  faqs: {
    question: { en: string; hi: string };
    answer: { en: string; hi: string };
  }[];
}

// ===========================================
// CATEGORY 1: APPLICATIONS (6 SUBCATEGORIES)
// ===========================================

export const jobApplicationsData: SubcategoryData = {
  slug: "job",
  categorySlug: "applications",
  categoryName: { en: "Applications", hi: "आवेदन" },
  subcategoryName: { en: "Job Applications", hi: "नौकरी आवेदन" },
  breadcrumb: [
    { en: "Applications", hi: "आवेदन"},
    { en: "Job Applications", hi: "नौकरी आवेदन" },
  ],
  heroTitle: { 
    en: "Job Application Templates", 
    hi: "नौकरी आवेदन टेम्पलेट" 
  },
  heroDescription: {
    en: "Explore professional job application samples — easy to edit, download, and use for your career needs.",
    hi: "पेशेवर नौकरी आवेदन नमूने देखें - आपकी करियर आवश्यकताओं के लिए संपादित, डाउनलोड और उपयोग करने में आसान।",
  },
  searchPlaceholder: {
    en: "Search job application templates…",
    hi: "नौकरी आवेदन टेम्पलेट खोजें...",
  },
  tags: ["Fresher", "Teacher", "Engineer", "Office", "Manager", "IT Professional"],
  templates: [
    {
      id: "job-1",
      title: { 
        en: "Job Application for Teacher Position", 
        hi: "शिक्षक पद के लिए नौकरी आवेदन" 
      },
      description: {
        en: "A formal application letter for teaching positions in schools and colleges with proper format.",
        hi: "स्कूलों और कॉलेजों में शिक्षण पदों के लिए उचित प्रारूप के साथ औपचारिक आवेदन पत्र।",
      },
      lastUpdated: "Nov 2025",
      views: "12.5k",
      badge: "Popular",
      templateSlug: "job-application-for-teacher",

    },
    // {
    //   id: "job-2",
    //   title: { 
    //     en: "Job Application for Fresher", 
    //     hi: "फ्रेशर के लिए नौकरी आवेदन" 
    //   },
    //   description: {
    //     en: "Entry-level job application template perfect for recent graduates and first-time applicants.",
    //     hi: "हाल के स्नातकों और पहली बार आवेदकों के लिए एंट्री-लेवल नौकरी आवेदन टेम्पलेट।",
    //   },
    //   lastUpdated: "Nov 2025",
    //   views: "18.2k",
    //   badge: "Trending",
    //         templateSlug: "job-application-for-teacher",

    // },
    {
      id: "job-3",
      title: { 
        en: "Job Application for Software Engineer", 
        hi: "सॉफ्टवेयर इंजीनियर के लिए नौकरी आवेदन" 
      },
      description: {
        en: "Professional application format for software engineering and IT positions.",
        hi: "सॉफ्टवेयर इंजीनियरिंग और आईटी पदों के लिए पेशेवर आवेदन प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "15.8k",
      templateSlug: "job-application-for-software-engineer",

    },
    {
      id: "job-4",
      title: { 
        en: "Job Application for Manager Position", 
        hi: "मैनेजर पद के लिए नौकरी आवेदन" 
      },
      description: {
        en: "Executive-level application template for management and leadership roles.",
        hi: "प्रबंधन और नेतृत्व भूमिकाओं के लिए कार्यकारी स्तर का आवेदन टेम्पलेट।",
      },
      lastUpdated: "Oct 2025",
      views: "9.4k",
      templateSlug: "job-application-for-manager-position",

    },
    {
      id: "job-5",
      title: { 
        en: "Job Application for Office Assistant", 
        hi: "कार्यालय सहायक के लिए नौकरी आवेदन" 
      },
      description: {
        en: "Formal application letter for administrative and office support positions.",
        hi: "प्रशासनिक और कार्यालय समर्थन पदों के लिए औपचारिक आवेदन पत्र।",
      },
      lastUpdated: "Oct 2025",
      views: "11.2k",
      templateSlug: "job-application-for-office-assistant",

    },
    {
      id: "job-6",
      title: { 
        en: "Job Application for Bank Job", 
        hi: "बैंक नौकरी के लिए आवेदन" 
      },
      description: {
        en: "Specialized application format for banking and financial sector positions.",
        hi: "बैंकिंग और वित्तीय क्षेत्र के पदों के लिए विशेष आवेदन प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "13.7k",
      templateSlug: "job-application-for-bank",

    },
  ],
  seoTitle: {
    en: "About Job Application Templates",
    hi: "नौकरी आवेदन टेम्पलेट के बारे में",
  },
  seoDescription: {
    en: "Job applications are formal letters expressing your interest in a specific position. Our professionally crafted templates help you create compelling applications that stand out to recruiters. Each template follows proper business letter format, includes all essential sections, and can be customized for any industry. Whether you're a fresher, experienced professional, or switching careers, our templates provide the perfect foundation for your job search success.",
    hi: "नौकरी आवेदन औपचारिक पत्र हैं जो किसी विशिष्ट पद में आपकी रुचि व्यक्त करते हैं। हमारे पेशेवर रूप से तैयार किए गए टेम्पलेट आपको सम्मोहक आवेदन बनाने में मदद करते हैं जो भर्तीकर्ताओं के लिए अलग दिखते हैं।",
  },
  relatedTemplates: [
    {
      title: { en: "Leave Application to Manager", hi: "प्रबंधक को छुट्टी आवेदन" },
      category: { en: "Leave Applications", hi: "छुट्टी आवेदन" },
      slug: "leave",
    },
    {
      title: { en: "Business Loan Application", hi: "व्यवसाय ऋण आवेदन" },
      category: { en: "Loan Applications", hi: "ऋण आवेदन" },
      slug: "loan",
    },
    {
      title: { en: "Professional Resume Template", hi: "पेशेवर रिज्यूमे टेम्पलेट" },
      category: { en: "Resumes", hi: "रिज्यूमे" },
      slug: "professional",
    },
    {
      title: { en: "Cover Letter for Job", hi: "नौकरी के लिए कवर लेटर" },
      category: { en: "Cover Letters", hi: "कवर लेटर" },
      slug: "cover-letters",
    },
  ],
  blogPosts: [
    {
      title: { 
        en: "How to Write a Job Application (Step-by-Step Guide)", 
        hi: "नौकरी आवेदन कैसे लिखें (चरण-दर-चरण गाइड)" 
      },
      excerpt: {
        en: "Master the art of writing professional job applications that get results",
        hi: "पेशेवर नौकरी आवेदन लिखने की कला में महारत हासिल करें जो परिणाम लाते हैं",
      },
      readTime: "8 min read",
      slug: "how-to-write-job-application",
    },
    {
      title: { 
        en: "Job Application vs Resume: What's the Difference?", 
        hi: "नौकरी आवेदन बनाम रिज्यूमे: क्या अंतर है?" 
      },
      excerpt: {
        en: "Understand the key differences and when to use each document",
        hi: "मुख्य अंतर को समझें और प्रत्येक दस्तावेज़ का उपयोग कब करें",
      },
      readTime: "5 min read",
      slug: "job-application-vs-resume",
    },
    {
      title: { 
        en: "Best Format to Get Interview Calls", 
        hi: "इंटरव्यू कॉल पाने के लिए सर्वश्रेष्ठ प्रारूप" 
      },
      excerpt: {
        en: "Learn the winning format that recruiters prefer for job applications",
        hi: "जानें कि भर्तीकर्ता नौकरी आवेदन के लिए किस प्रारूप को पसंद करते हैं",
      },
      readTime: "6 min read",
      slug: "best-job-application-format",
    },
  ],
  faqs: [
    {
      question: { 
        en: "What should I include in a job application?", 
        hi: "नौकरी आवेदन में क्या शामिल करना चाहिए?" 
      },
      answer: {
        en: "A job application should include your contact information, the date, employer's details, a formal salutation, introduction stating the position, body paragraphs highlighting your qualifications and experience, a closing paragraph, and your signature. Keep it professional and concise.",
        hi: "एक नौकरी आवेदन में आपकी संपर्क जानकारी, तारीख, नियोक्ता का विवरण, औपचारिक अभिवादन, पद बताने वाला परिचय, आपकी योग्यताओं और अनुभव को उजागर करने वाले मुख्य पैराग्राफ शामिल होने चाहिए।",
      },
    },
    {
      question: { 
        en: "How long should a job application be?", 
        hi: "नौकरी आवेदन कितना लंबा होना चाहिए?" 
      },
      answer: {
        en: "A job application should typically be one page, consisting of 3-4 paragraphs. Keep it concise and focused on your most relevant qualifications. Avoid lengthy descriptions and stick to the most important information that makes you a strong candidate.",
        hi: "एक नौकरी आवेदन आमतौर पर एक पेज का होना चाहिए, जिसमें 3-4 पैराग्राफ हों। इसे संक्षिप्त रखें और अपनी सबसे प्रासंगिक योग्यताओं पर केंद्रित रखें।",
      },
    },
    {
      question: { 
        en: "Should I attach my resume with the application?", 
        hi: "क्या मुझे आवेदन के साथ अपना रिज्यूमे संलग्न करना चाहिए?" 
      },
      answer: {
        en: "Yes, always attach your resume with your job application unless specifically instructed otherwise. The application letter introduces you and expresses interest, while the resume provides detailed information about your qualifications, experience, and skills.",
        hi: "हां, जब तक विशेष रूप से अन्यथा निर्देश न दिया जाए, हमेशा अपने नौकरी आवेदन के साथ अपना रिज्यूमे संलग्न करें।",
      },
    },
  ],
};

export const leaveApplicationsData: SubcategoryData = {
  slug: "leave",
  categorySlug: "applications",
  categoryName: { en: "Applications", hi: "आवेदन" },
  subcategoryName: { en: "Leave Applications", hi: "छुट्टी आवेदन" },
  breadcrumb: [
    { en: "Applications", hi: "आवेदन",},
    { en: "Leave Applications", hi: "छुट्टी आवेदन" },
  ],
  heroTitle: { 
    en: "Leave Application Templates", 
    hi: "छुट्टी आवेदन टेम्पलेट" 
  },
  heroDescription: {
    en: "Professional leave application formats for sick leave, casual leave, urgent leave and more - ready to customize and use.",
    hi: "बीमार छुट्टी, आकस्मिक छुट्टी, तत्काल छुट्टी और अधिक के लिए पेशेवर छुट्टी आवेदन प्रारूप - अनुकूलित और उपयोग करने के लिए तैयार।",
  },
  searchPlaceholder: {
    en: "Search leave application templates…",
    hi: "छुट्टी आवेदन टेम्पलेट खोजें...",
  },
  tags: ["Sick Leave", "Casual Leave", "Urgent Leave", "Personal Leave", "Vacation", "School"],
  templates: [
    {
      id: "leave-1",
      title: { 
        en: "Sick Leave Application to Manager", 
        hi: "प्रबंधक को बीमार छुट्टी आवेदन" 
      },
      description: {
        en: "Professional format for requesting sick leave with medical reasons and duration.",
        hi: "चिकित्सा कारणों और अवधि के साथ बीमार छुट्टी का अनुरोध करने के लिए पेशेवर प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "14.3k",
      badge: "Popular",
      templateSlug: "application-for-sick-leave",

    },
    {
      id: "leave-2",
      title: { 
        en: "Casual Leave Application", 
        hi: "आकस्मिक छुट्टी आवेदन" 
      },
      description: {
        en: "Simple and effective template for requesting casual leave from office or school.",
        hi: "कार्यालय या स्कूल से आकस्मिक छुट्टी का अनुरोध करने के लिए सरल और प्रभावी टेम्पलेट।",
      },
      lastUpdated: "Nov 2025",
      views: "16.8k",
      badge: "Trending",
            templateSlug: "application-for-casual-leave",

    },
    {
      id: "leave-3",
      title: { 
        en: "Urgent Leave Application", 
        hi: "तत्काल छुट्टी आवेदन" 
      },
      description: {
        en: "Emergency leave request format for unexpected situations and urgent matters.",
        hi: "अप्रत्याशित स्थितियों और तत्काल मामलों के लिए आपातकालीन छुट्टी अनुरोध प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "12.1k",
      templateSlug: "application-for-urgent-leave",

    },
    {
      id: "leave-4",
      title: { 
        en: "Personal Leave Application", 
        hi: "व्यक्तिगत छुट्टी आवेदन" 
      },
      description: {
        en: "Template for requesting personal or family-related leave from work.",
        hi: "काम से व्यक्तिगत या परिवार से संबंधित छुट्टी का अनुरोध करने के लिए टेम्पलेट।",
      },
      lastUpdated: "Nov 2025",
      views: "10.9k",
      templateSlug: "application-for-personal-leave",

    },
    {
      id: "leave-5",
      title: { 
        en: "Leave Application for School Students", 
        hi: "स्कूली छात्रों के लिए छुट्टी आवेदन" 
      },
      description: {
        en: "Student leave application format for school and college absences.",
        hi: "स्कूल और कॉलेज अनुपस्थिति के लिए छात्र छुट्टी आवेदन प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "13.4k",
      templateSlug: "application-for-school-leave",

    },
    {
      id: "leave-6",
      title: { 
        en: "Vacation Leave Application", 
        hi: "अवकाश छुट्टी आवेदन" 
      },
      description: {
        en: "Professional format for planned vacation and annual leave requests.",
        hi: "योजनाबद्ध अवकाश और वार्षिक छुट्टी अनुरोधों के लिए पेशेवर प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "9.7k",
            templateSlug: "application-for-vacation-leave",

    },
  ],
  seoTitle: {
    en: "About Leave Application Templates",
    hi: "छुट्टी आवेदन टेम्पलेट के बारे में",
  },
  seoDescription: {
    en: "Leave applications are formal requests to take time off from work or school. Our templates cover all types including sick leave, casual leave, urgent leave, personal leave, and vacation leave. Each template follows proper format with clear subject lines, dates, reasons, and professional tone. Whether for office, school, or college, our templates ensure your leave request is properly documented and professionally presented.",
    hi: "छुट्टी आवेदन काम या स्कूल से समय निकालने के लिए औपचारिक अनुरोध हैं। हमारे टेम्पलेट में बीमार छुट्टी, आकस्मिक छुट्टी, तत्काल छुट्टी, व्यक्तिगत छुट्टी और अवकाश छुट्टी सहित सभी प्रकार शामिल हैं।",
  },
  relatedTemplates: [
    {
      title: { en: "Job Application Template", hi: "नौकरी आवेदन टेम्पलेट" },
      category: { en: "Job Applications", hi: "नौकरी आवेदन" },
      slug: "job",
    },
    {
      title: { en: "Formal Letter Format", hi: "औपचारिक पत्र प्रारूप" },
      category: { en: "Letters", hi: "पत्र" },
      slug: "formal",
    },
    {
      title: { en: "School Notice Format", hi: "स्कूल नोटिस प्रारूप" },
      category: { en: "Notices", hi: "नोटिस" },
      slug: "school",
    },
    {
      title: { en: "Medical Certificate", hi: "चिकित्सा प्रमाणपत्र" },
      category: { en: "Certificates", hi: "प्रमाणपत्र" },
      slug: "bonafide",
    },
  ],
  blogPosts: [
    {
      title: { 
        en: "How to Write a Perfect Leave Application", 
        hi: "परफेक्ट छुट्टी आवेदन कैसे लिखें" 
      },
      excerpt: {
        en: "Complete guide to writing effective leave applications that get approved",
        hi: "प्रभावी छुट्टी आवेदन लिखने के लिए पूर्ण गाइड जो स्वीकृत हो जाते हैं",
      },
      readTime: "5 min read",
      slug: "how-to-write-leave-application",
    },
    {
      title: { 
        en: "Leave Application Format for Office", 
        hi: "कार्यालय के लिए छुट्टी आवेदन प्रारूप" 
      },
      excerpt: {
        en: "Professional leave application formats for workplace environments",
        hi: "कार्यस्थल वातावरण के लिए पेशेवर छुट्टी आवेदन प्रारूप",
      },
      readTime: "4 min read",
      slug: "office-leave-application-format",
    },
    {
      title: { 
        en: "Emergency Leave: How to Request Urgent Time Off", 
        hi: "आपातकालीन छुट्टी: तत्काल समय की छुट्टी कैसे अनुरोध करें" 
      },
      excerpt: {
        en: "Best practices for requesting emergency and urgent leave",
        hi: "आपातकालीन और तत्काल छुट्टी का अनुरोध करने के लिए सर्वोत्तम प्रथाएं",
      },
      readTime: "6 min read",
      slug: "emergency-leave-request-guide",
    },
  ],
  faqs: [
    {
      question: { 
        en: "How do I write a leave application?", 
        hi: "मैं छुट्टी आवेदन कैसे लिखूं?" 
      },
      answer: {
        en: "Start with the date and recipient's details, add a clear subject line, write a polite request stating the reason and duration of leave, and end with your signature. Keep it brief, professional, and submit in advance when possible.",
        hi: "तारीख और प्राप्तकर्ता के विवरण के साथ शुरू करें, एक स्पष्ट विषय पंक्ति जोड़ें, छुट्टी का कारण और अवधि बताते हुए एक विनम्र अनुरोध लिखें।",
      },
    },
    {
      question: { 
        en: "How many days in advance should I apply for leave?", 
        hi: "मुझे कितने दिन पहले छुट्टी के लिए आवेदन करना चाहिए?" 
      },
      answer: {
        en: "For planned leave, apply at least 7-10 days in advance. For urgent or sick leave, inform as soon as possible, ideally before your shift or the same day. Always check your organization's leave policy for specific requirements.",
        hi: "योजनाबद्ध छुट्टी के लिए, कम से कम 7-10 दिन पहले आवेदन करें। तत्काल या बीमार छुट्टी के लिए, जितनी जल्दी हो सके सूचित करें।",
      },
    },
    {
      question: { 
        en: "Do I need to provide proof for sick leave?", 
        hi: "क्या मुझे बीमार छुट्टी के लिए प्रमाण प्रदान करने की आवश्यकता है?" 
      },
      answer: {
        en: "Yes, most organizations require a medical certificate for sick leave longer than 2-3 days. For shorter periods, a simple notification may suffice. Always check your company's leave policy for specific requirements.",
        hi: "हां, अधिकांश संगठनों को 2-3 दिनों से अधिक की बीमार छुट्टी के लिए चिकित्सा प्रमाणपत्र की आवश्यकता होती है।",
      },
    },
  ],
};

// Helper function to get subcategory data by slugs
export function getSubcategoryData(categorySlug: string, subcategorySlug: string): SubcategoryData | undefined {
  const allSubcategories: SubcategoryData[] = [
    jobApplicationsData,
    leaveApplicationsData,
    // Add more as we create them
  ];
  
  return allSubcategories.find(
    (sub) => sub.categorySlug === categorySlug && sub.slug === subcategorySlug
  );
}

// Export all subcategory data for easy access
export const allSubcategories: SubcategoryData[] = [
  jobApplicationsData,
  leaveApplicationsData,
  // Add more as we create them
];
