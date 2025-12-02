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
  breadcrumb: { en: string; hi: string, slug?:string }[];
  
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



export const leaveCategory: SubcategoryData = {
  slug: "leave",
  categorySlug: "applications",
  categoryName: { en: "Applications", hi: "आवेदन" },
  subcategoryName: { en: "Leave Applications", hi: "छुट्टी आवेदन" },
  breadcrumb: [
    { en: "Applications", hi: "आवेदन",slug:"/applications"},
    { en: "Leave Applications", hi: "छुट्टी आवेदन",slug:"/applications/leave" },
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
    leaveCategory,
    // Add more as we create them
  ];
  
  return allSubcategories.find(
    (sub) => sub.categorySlug === categorySlug && sub.slug === subcategorySlug
  );
}

// Export all subcategory data for easy access
export const allSubcategories: SubcategoryData[] = [
  leaveCategory,
  // Add more as we create them
];
