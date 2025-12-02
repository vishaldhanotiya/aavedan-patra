/**
 * ALL APPLICATIONS SUBCATEGORIES (6 total)
 * Complete data for Applications category subcategories
 */

import { SubcategoryData } from "../category/jobCategory";


// 1. Job Applications (already exists in allSubcategoryData.ts)
// 2. Leave Applications (already exists in allSubcategoryData.ts)

// 3. LOAN APPLICATIONS
export const loanApplications: SubcategoryData = {
  slug: "loan",
  categorySlug: "applications",
  categoryName: { en: "Applications", hi: "आवेदन" },
  subcategoryName: { en: "Loan Applications", hi: "ऋण आवेदन" },
  breadcrumb: [
    { en: "Applications", hi: "आवेदन",slug:"/applications" },
    { en: "Loan Applications", hi: "ऋण आवेदन",slug:"/applications/loan" },
  ],
  heroTitle: {
    en: "Loan Application Templates",
    hi: "ऋण आवेदन टेम्पलेट",
  },
  heroDescription: {
    en: "Professional loan application formats for personal loans, business loans, education loans and more - ready to download and customize.",
    hi: "व्यक्तिगत ऋण, व्यवसाय ऋण, शिक्षा ऋण और अधिक के लिए पेशेवर ऋण आवेदन प्रारूप - डाउनलोड और अनुकूलित करने के लिए तैयार।",
  },
  searchPlaceholder: {
    en: "Search loan application templates…",
    hi: "ऋण आवेदन टेम्पलेट खोजें...",
  },
  tags: [
    "Personal Loan",
    "Business Loan",
    "Education Loan",
    "Home Loan",
    "Car Loan",
    "Emergency Loan",
  ],
  templates: [
    {
      id: "loan-1",
      title: {
        en: "Personal Loan Application to Bank",
        hi: "बैंक को व्यक्तिगत ऋण आवेदन",
      },
      description: {
        en: "Formal application format for requesting personal loans from banks with proper documentation.",
        hi: "उचित दस्तावेज के साथ बैंकों से व्यक्तिगत ऋण का अनुरोध करने के लिए औपचारिक आवेदन प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "15.7k",
      badge: "Popular",
      templateSlug: "application-for-personal-loan",
    },
    {
      id: "loan-2",
      title: {
        en: "Business Loan Application Format",
        hi: "व्यवसाय ऋण आवेदन प्रारूप",
      },
      description: {
        en: "Professional template for business loan requests with financial details and business plan.",
        hi: "वित्तीय विवरण और व्यवसाय योजना के साथ व्यवसाय ऋण अनुरोधों के लिए पेशेवर टेम्पलेट।",
      },
      lastUpdated: "Nov 2025",
      views: "13.4k",
      badge: "Trending",
      templateSlug: "application-for-business-loan",
    },
    {
      id: "loan-3",
      title: {
        en: "Education Loan Application",
        hi: "शिक्षा ऋण आवेदन",
      },
      description: {
        en: "Student loan application format for higher education and professional courses.",
        hi: "उच्च शिक्षा और पेशेवर पाठ्यक्रमों के लिए छात्र ऋण आवेदन प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "14.2k",
      templateSlug: "application-for-education-loan",
    },
    {
      id: "loan-4",
      title: {
        en: "Home Loan Application Letter",
        hi: "गृह ऋण आवेदन पत्र",
      },
      description: {
        en: "Complete application format for home purchase and construction loans.",
        hi: "घर खरीद और निर्माण ऋण के लिए पूर्ण आवेदन प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "11.8k",
      templateSlug: "application-for-home-loan",
    },
    {
      id: "loan-5",
      title: {
        en: "Car Loan Application Format",
        hi: "कार ऋण आवेदन प्रारूप",
      },
      description: {
        en: "Auto loan application template for vehicle purchase financing.",
        hi: "वाहन खरीद वित्तपोषण के लिए ऑटो ऋण आवेदन टेम्पलेट।",
      },
      lastUpdated: "Oct 2025",
      views: "10.5k",
      templateSlug: "application-for-car-loan",
    },
    {
      id: "loan-6",
      title: {
        en: "Emergency Loan Request Letter",
        hi: "आपातकालीन ऋण अनुरोध पत्र",
      },
      description: {
        en: "Urgent loan application format for medical and personal emergencies.",
        hi: "चिकित्सा और व्यक्तिगत आपात स्थितियों के लिए तत्काल ऋण आवेदन प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "9.3k",
      templateSlug: "application-for-emergency-loan",
    },
  ],
  seoTitle: {
    en: "About Loan Application Templates",
    hi: "ऋण आवेदन टेम्पलेट के बारे में",
  },
  seoDescription: {
    en: "Loan applications are formal requests to financial institutions for borrowing money. Our templates cover personal loans, business loans, education loans, home loans, and vehicle loans. Each template includes proper format with applicant details, loan amount, purpose, repayment plan, and supporting documents list. Whether applying to banks, credit unions, or NBFCs, our professionally structured templates help present your loan request clearly and increase approval chances.",
    hi: "ऋण आवेदन वित्तीय संस्थानों को पैसे उधार लेने के लिए औपचारिक अनुरोध हैं। हमारे टेम्पलेट में व्यक्तिगत ऋण, व्यवसाय ऋण, शिक्षा ऋण, गृह ऋण और वाहन ऋण शामिल हैं।",
  },
  relatedTemplates: [
    {
      title: { en: "Job Application Template", hi: "नौकरी आवेदन टेम्पलेट" },
      category: { en: "Job Applications", hi: "नौकरी आवेदन" },
      slug: "job",
    },
    {
      title: { en: "Income Certificate Request", hi: "आय प्रमाणपत्र अनुरोध" },
      category: { en: "Certificate Requests", hi: "प्रमाणपत्र अनुरोध" },
      slug: "certificate-request",
    },
    {
      title: { en: "Business Agreement", hi: "व्यापार समझौता" },
      category: { en: "Agreements", hi: "समझौते" },
      slug: "business",
    },
    {
      title: { en: "Formal Letter Format", hi: "औपचारिक पत्र प्रारूप" },
      category: { en: "Letters", hi: "पत्र" },
      slug: "formal",
    },
  ],
  blogPosts: [
    {
      title: {
        en: "How to Write a Loan Application That Gets Approved",
        hi: "ऋण आवेदन कैसे लिखें जो स्वीकृत हो",
      },
      excerpt: {
        en: "Expert tips for writing effective loan applications with higher approval rates",
        hi: "उच्च अनुमोदन दरों के साथ प्रभावी ऋण आवेदन लिखने के लिए विशेषज्ञ सुझाव",
      },
      readTime: "7 min read",
      slug: "how-to-write-loan-application",
    },
    {
      title: {
        en: "Documents Required for Loan Application",
        hi: "ऋण आवेदन के लिए आवश्यक दस्तावेज",
      },
      excerpt: {
        en: "Complete checklist of documents needed for different types of loans",
        hi: "विभिन्न प्रकार के ऋणों के लिए आवश्यक दस्तावेजों की पूर्ण जांच सूची",
      },
      readTime: "5 min read",
      slug: "loan-application-documents",
    },
    {
      title: {
        en: "Personal Loan vs Business Loan: Which to Apply For?",
        hi: "व्यक्तिगत ऋण बनाम व्यवसाय ऋण: किसके लिए आवेदन करें?",
      },
      excerpt: {
        en: "Understand the differences and choose the right loan for your needs",
        hi: "अंतर को समझें और अपनी आवश्यकताओं के लिए सही ऋण चुनें",
      },
      readTime: "6 min read",
      slug: "personal-vs-business-loan",
    },
  ],
  faqs: [
    {
      question: {
        en: "What should I include in a loan application?",
        hi: "मुझे ऋण आवेदन में क्या शामिल करना चाहिए?",
      },
      answer: {
        en: "A loan application should include your personal details, employment information, loan amount required, purpose of the loan, repayment plan, and list of supporting documents. Also mention your income sources, existing liabilities, and collateral if any. Be honest and provide accurate information to increase approval chances.",
        hi: "एक ऋण आवेदन में आपके व्यक्तिगत विवरण, रोजगार जानकारी, आवश्यक ऋण राशि, ऋण का उद्देश्य, पुनर्भुगतान योजना और सहायक दस्तावेजों की सूची शामिल होनी चाहिए।",
      },
    },
    {
      question: {
        en: "How long does loan approval take?",
        hi: "ऋण स्वीकृति में कितना समय लगता है?",
      },
      answer: {
        en: "Loan approval time varies by type and lender. Personal loans may take 2-7 days, while home loans can take 2-4 weeks. Business loans typically require 1-3 weeks. Having complete documentation ready can speed up the process significantly.",
        hi: "ऋण स्वीकृति का समय प्रकार और ऋणदाता के अनुसार भिन्न होता है। व्यक्तिगत ऋण में 2-7 दिन लग सकते हैं, जबकि गृह ऋण में 2-4 सप्ताह लग सकते हैं।",
      },
    },
    {
      question: {
        en: "Can I apply for multiple loans simultaneously?",
        hi: "क्या मैं एक साथ कई ऋणों के लिए आवेदन कर सकता हूं?",
      },
      answer: {
        en: "While you can apply for multiple loans, it's generally not recommended as multiple credit inquiries can lower your credit score. Focus on one application at a time and ensure you meet the eligibility criteria before applying.",
        hi: "हालांकि आप कई ऋणों के लिए आवेदन कर सकते हैं, यह आमतौर पर अनुशंसित नहीं है क्योंकि कई क्रेडिट पूछताछ आपके क्रेडिट स्कोर को कम कर सकती है।",
      },
    },
  ],
};


// Export all Applications subcategories
export const allApplicationsSubcategories = [
  loanApplications,
];
