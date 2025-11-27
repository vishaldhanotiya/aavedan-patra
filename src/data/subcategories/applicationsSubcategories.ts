/**
 * ALL APPLICATIONS SUBCATEGORIES (6 total)
 * Complete data for Applications category subcategories
 */

import type { SubcategoryData } from "../allSubcategoryData";

// 1. Job Applications (already exists in allSubcategoryData.ts)
// 2. Leave Applications (already exists in allSubcategoryData.ts)

// 3. LOAN APPLICATIONS
export const loanApplicationsData: SubcategoryData = {
  slug: "loan",
  categorySlug: "applications",
  categoryName: { en: "Applications", hi: "आवेदन" },
  subcategoryName: { en: "Loan Applications", hi: "ऋण आवेदन" },
  breadcrumb: [
    { en: "Applications", hi: "आवेदन" },
    { en: "Loan Applications", hi: "ऋण आवेदन" },
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

// 4. ADMISSION APPLICATIONS
export const admissionApplicationsData: SubcategoryData = {
  slug: "admission",
  categorySlug: "applications",
  categoryName: { en: "Applications", hi: "आवेदन" },
  subcategoryName: { en: "Admission Applications", hi: "प्रवेश आवेदन" },
  breadcrumb: [
    { en: "Applications", hi: "आवेदन" },
    { en: "Admission Applications", hi: "प्रवेश आवेदन" },
  ],
  heroTitle: {
    en: "Admission Application Templates",
    hi: "प्रवेश आवेदन टेम्पलेट",
  },
  heroDescription: {
    en: "College, school, and course admission application formats for students - easy to customize for any educational institution.",
    hi: "छात्रों के लिए कॉलेज, स्कूल और पाठ्यक्रम प्रवेश आवेदन प्रारूप - किसी भी शैक्षणिक संस्थान के लिए अनुकूलित करना आसान।",
  },
  searchPlaceholder: {
    en: "Search admission application templates…",
    hi: "प्रवेश आवेदन टेम्पलेट खोजें...",
  },
  tags: [
    "College Admission",
    "School Admission",
    "Course Admission",
    "University",
    "Transfer",
    "Readmission",
  ],
  templates: [
    {
      id: "admission-1",
      title: {
        en: "College Admission Application",
        hi: "कॉलेज प्रवेश आवेदन",
      },
      description: {
        en: "Professional format for undergraduate and postgraduate college admission applications.",
        hi: "स्नातक और स्नातकोत्तर कॉलेज प्रवेश आवेदन के लिए पेशेवर प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "18.5k",
      badge: "Popular",
      templateSlug: "application-for-college-admission",
    },
    {
      id: "admission-2",
      title: {
        en: "School Admission Application for Students",
        hi: "छात्रों के लिए स्कूल प्रवेश आवेदन",
      },
      description: {
        en: "Application template for admission in primary, middle, and high schools.",
        hi: "प्राथमिक, मध्य और उच्च विद्यालयों में प्रवेश के लिए आवेदन टेम्पलेट।",
      },
      lastUpdated: "Nov 2025",
      views: "16.2k",
      badge: "Trending",
      templateSlug: "application-for-school-admission",
    },
    {
      id: "admission-3",
      title: {
        en: "University Admission Request Letter",
        hi: "विश्वविद्यालय प्रवेश अनुरोध पत्र",
      },
      description: {
        en: "Formal application for university admission with academic achievements and goals.",
        hi: "शैक्षणिक उपलब्धियों और लक्ष्यों के साथ विश्वविद्यालय प्रवेश के लिए औपचारिक आवेदन।",
      },
      lastUpdated: "Nov 2025",
      views: "14.7k",
      templateSlug: "application-for-university-admission",
    },
    {
      id: "admission-4",
      title: {
        en: "Course Admission Application",
        hi: "पाठ्यक्रम प्रवेश आवेदन",
      },
      description: {
        en: "Application format for professional courses and certification programs.",
        hi: "पेशेवर पाठ्यक्रमों और प्रमाणन कार्यक्रमों के लिए आवेदन प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "12.3k",
      templateSlug: "application-for-course-admission",
    },
    {
      id: "admission-5",
      title: {
        en: "School Transfer Application",
        hi: "स्कूल स्थानांतरण आवेदन",
      },
      description: {
        en: "Transfer application template for changing schools with valid reasons.",
        hi: "वैध कारणों के साथ स्कूल बदलने के लिए स्थानांतरण आवेदन टेम्पलेट।",
      },
      lastUpdated: "Oct 2025",
      views: "11.1k",
      templateSlug: "application-for-school-transfer",
    },
    {
      id: "admission-6",
      title: {
        en: "Readmission Application Letter",
        hi: "पुनः प्रवेश आवेदन पत्र",
      },
      description: {
        en: "Application format for rejoining school or college after a break.",
        hi: "विराम के बाद स्कूल या कॉलेज में फिर से शामिल होने के लिए आवेदन प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "9.8k",
      templateSlug: "application-for-readmission",
    },
  ],
  seoTitle: {
    en: "About Admission Application Templates",
    hi: "प्रवेश आवेदन टेम्पलेट के बारे में",
  },
  seoDescription: {
    en: "Admission applications are formal requests to educational institutions for enrollment in schools, colleges, or courses. Our templates cover all types including college admission, school admission, university applications, course enrollment, transfer requests, and readmission letters. Each template includes proper format with student details, academic background, achievements, and reasons for admission. These professionally crafted templates help students create compelling applications that increase acceptance chances.",
    hi: "प्रवेश आवेदन स्कूलों, कॉलेजों या पाठ्यक्रमों में नामांकन के लिए शैक्षणिक संस्थानों को औपचारिक अनुरोध हैं। हमारे टेम्पलेट में कॉलेज प्रवेश, स्कूल प्रवेश, विश्वविद्यालय आवेदन शामिल हैं।",
  },
  relatedTemplates: [
    {
      title: { en: "Scholarship Application", hi: "छात्रवृत्ति आवेदन" },
      category: { en: "Scholarship Applications", hi: "छात्रवृत्ति आवेदन" },
      slug: "scholarship",
    },
    {
      title: { en: "Student ID Card Request", hi: "छात्र आईडी कार्ड अनुरोध" },
      category: { en: "Certificate Requests", hi: "प्रमाणपत्र अनुरोध" },
      slug: "certificate-request",
    },
    {
      title: {
        en: "Leave Application for Students",
        hi: "छात्रों के लिए छुट्टी आवेदन",
      },
      category: { en: "Leave Applications", hi: "छुट्टी आवेदन" },
      slug: "leave",
    },
    {
      title: {
        en: "Request Letter to Principal",
        hi: "प्रधानाचार्य को अनुरोध पत्र",
      },
      category: { en: "Letters", hi: "पत्र" },
      slug: "request",
    },
  ],
  blogPosts: [
    {
      title: {
        en: "How to Write a College Admission Application",
        hi: "कॉलेज प्रवेश आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "Step-by-step guide to creating winning college admission applications",
        hi: "विजयी कॉलेज प्रवेश आवेदन बनाने के लिए चरण-दर-चरण गाइड",
      },
      readTime: "6 min read",
      slug: "college-admission-application-guide",
    },
    {
      title: {
        en: "School Admission: Tips for Parents",
        hi: "स्कूल प्रवेश: माता-पिता के लिए सुझाव",
      },
      excerpt: {
        en: "Essential tips for parents applying for their child's school admission",
        hi: "अपने बच्चे के स्कूल प्रवेश के लिए आवेदन करने वाले माता-पिता के लिए आवश्यक सुझाव",
      },
      readTime: "5 min read",
      slug: "school-admission-tips-parents",
    },
    {
      title: {
        en: "Transfer Application: When and How to Apply",
        hi: "स्थानांतरण आवेदन: कब और कैसे आवेदन करें",
      },
      excerpt: {
        en: "Complete guide to school and college transfer applications",
        hi: "स्कूल और कॉलेज स्थानांतरण आवेदन के लिए पूर्ण गाइड",
      },
      readTime: "7 min read",
      slug: "transfer-application-guide",
    },
  ],
  faqs: [
    {
      question: {
        en: "When should I apply for college admission?",
        hi: "मुझे कॉलेज प्रवेश के लिए कब आवेदन करना चाहिए?",
      },
      answer: {
        en: "Most colleges have admission cycles in spring and fall. Start the application process 6-12 months before your intended start date. Check specific deadlines on the college website as they vary by institution and program.",
        hi: "अधिकांश कॉलेजों में वसंत और पतझड़ में प्रवेश चक्र होते हैं। अपनी इच्छित प्रारंभ तिथि से 6-12 महीने पहले आवेदन प्रक्रिया शुरू करें।",
      },
    },
    {
      question: {
        en: "What documents are needed for admission?",
        hi: "प्रवेश के लिए कौन से दस्तावेज आवश्यक हैं?",
      },
      answer: {
        en: "Common documents include previous academic certificates, mark sheets, transfer certificate (if applicable), birth certificate, passport-size photos, ID proof, and caste certificate (if applicable). Some institutions may require entrance exam scores or recommendation letters.",
        hi: "सामान्य दस्तावेजों में पिछले शैक्षणिक प्रमाणपत्र, अंक पत्रक, स्थानांतरण प्रमाणपत्र, जन्म प्रमाणपत्र, पासपोर्ट आकार की तस्वीरें शामिल हैं।",
      },
    },
    {
      question: {
        en: "Can I apply to multiple colleges at once?",
        hi: "क्या मैं एक साथ कई कॉलेजों में आवेदन कर सकता हूं?",
      },
      answer: {
        en: "Yes, you can and should apply to multiple colleges to increase your chances of admission. However, be mindful of application fees and ensure you can meet all deadlines. Apply to a mix of reach, match, and safety schools.",
        hi: "हां, आप प्रवेश की संभावनाओं को बढ़ाने के लिए कई कॉलेजों में आवेदन कर सकते हैं और करना चाहिए। हालांकि, आवेदन शुल्क का ध्यान रखें।",
      },
    },
  ],
};

// 5. SCHOLARSHIP APPLICATIONS
export const scholarshipApplicationsData: SubcategoryData = {
  slug: "scholarship",
  categorySlug: "applications",
  categoryName: { en: "Applications", hi: "आवेदन" },
  subcategoryName: { en: "Scholarship Applications", hi: "छात्रवृत्ति आवेदन" },
  breadcrumb: [
    { en: "Applications", hi: "आवेदन" },
    { en: "Scholarship Applications", hi: "छात्रवृत्ति आवेदन" },
  ],
  heroTitle: {
    en: "Scholarship Application Templates",
    hi: "छात्रवृत्ति आवेदन टेम्पलेट",
  },
  heroDescription: {
    en: "Merit-based and need-based scholarship application formats for students - increase your chances of financial aid approval.",
    hi: "छात्रों के लिए योग्यता-आधारित और आवश्यकता-आधारित छात्रवृत्ति आवेदन प्रारूप - अपनी वित्तीय सहायता स्वीकृति की संभावनाओं को बढ़ाएं।",
  },
  searchPlaceholder: {
    en: "Search scholarship application templates…",
    hi: "छात्रवृत्ति आवेदन टेम्पलेट खोजें...",
  },
  tags: [
    "Merit Scholarship",
    "Need-Based",
    "Sports Scholarship",
    "Government",
    "Private",
    "Research Grant",
  ],
  templates: [
    {
      id: "scholarship-1",
      title: {
        en: "Merit-Based Scholarship Application",
        hi: "योग्यता-आधारित छात्रवृत्ति आवेदन",
      },
      description: {
        en: "Application format for academic excellence and merit-based scholarships.",
        hi: "शैक्षणिक उत्कृष्टता और योग्यता-आधारित छात्रवृत्ति के लिए आवेदन प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "17.3k",
      badge: "Popular",
      templateSlug: "application-for-merit-scholarship",
    },
    {
      id: "scholarship-2",
      title: {
        en: "Need-Based Financial Aid Application",
        hi: "आवश्यकता-आधारित वित्तीय सहायता आवेदन",
      },
      description: {
        en: "Template for applying for scholarships based on financial need and family income.",
        hi: "वित्तीय आवश्यकता और पारिवारिक आय के आधार पर छात्रवृत्ति के लिए आवेदन करने के लिए टेम्पलेट।",
      },
      lastUpdated: "Nov 2025",
      views: "15.8k",
      badge: "Trending",
      templateSlug: "application-for-need-based-scholarship",
    },
    {
      id: "scholarship-3",
      title: {
        en: "Government Scholarship Application",
        hi: "सरकारी छात्रवृत्ति आवेदन",
      },
      description: {
        en: "Official format for applying to government and state-funded scholarship programs.",
        hi: "सरकारी और राज्य-वित्त पोषित छात्रवृत्ति कार्यक्रमों के लिए आवेदन करने के लिए आधिकारिक प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "14.1k",
      templateSlug: "application-for-government-scholarship",
    },
    {
      id: "scholarship-4",
      title: {
        en: "Sports Scholarship Application Letter",
        hi: "खेल छात्रवृत्ति आवेदन पत्र",
      },
      description: {
        en: "Application template for athletes seeking sports-based scholarships.",
        hi: "खेल-आधारित छात्रवृत्ति चाहने वाले एथलीटों के लिए आवेदन टेम्पलेट।",
      },
      lastUpdated: "Oct 2025",
      views: "11.6k",
      templateSlug: "application-for-sports-scholarship",
    },
    {
      id: "scholarship-5",
      title: {
        en: "Private Scholarship Application",
        hi: "निजी छात्रवृत्ति आवेदन",
      },
      description: {
        en: "Format for corporate and private foundation scholarship applications.",
        hi: "कॉर्पोरेट और निजी फाउंडेशन छात्रवृत्ति आवेदन के लिए प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "10.2k",
      templateSlug: "application-for-private-scholarship",
    },
    {
      id: "scholarship-6",
      title: {
        en: "Research Grant Application",
        hi: "अनुसंधान अनुदान आवेदन",
      },
      description: {
        en: "Application template for academic research grants and fellowships.",
        hi: "शैक्षणिक अनुसंधान अनुदान और फ़ेलोशिप के लिए आवेदन टेम्पलेट।",
      },
      lastUpdated: "Oct 2025",
      views: "9.4k",
      templateSlug: "application-for-research-grant",
    },
  ],
  seoTitle: {
    en: "About Scholarship Application Templates",
    hi: "छात्रवृत्ति आवेदन टेम्पलेट के बारे में",
  },
  seoDescription: {
    en: "Scholarship applications are formal requests for financial aid to support education costs. Our templates include merit-based scholarships for academic excellence, need-based applications for financial assistance, government scholarship formats, sports scholarships for athletes, private foundation grants, and research fellowships. Each template helps students highlight their achievements, demonstrate financial need, and present compelling cases for scholarship approval. These structured formats significantly improve chances of securing educational funding.",
    hi: "छात्रवृत्ति आवेदन शिक्षा लागत का समर्थन करने के लिए वित्तीय सहायता के लिए औपचारिक अनुरोध हैं। हमारे टेम्पलेट में शैक्षणिक उत्कृष्टता के लिए योग्यता-आधारित छात्रवृत्ति शामिल है।",
  },
  relatedTemplates: [
    {
      title: { en: "College Admission Application", hi: "कॉलेज प्रवेश आवेदन" },
      category: { en: "Admission Applications", hi: "प्रवेश आवेदन" },
      slug: "admission",
    },
    {
      title: { en: "Education Loan Application", hi: "शिक्षा ऋण आवेदन" },
      category: { en: "Loan Applications", hi: "ऋण आवेदन" },
      slug: "loan",
    },
    {
      title: { en: "Income Certificate Request", hi: "आय प्रमाणपत्र अनुरोध" },
      category: { en: "Certificate Requests", hi: "प्रमाणपत्र अनुरोध" },
      slug: "certificate-request",
    },
    {
      title: {
        en: "Request Letter to Principal",
        hi: "प्रधानाचार्य को अनुरोध पत्र",
      },
      category: { en: "Letters", hi: "पत्र" },
      slug: "request",
    },
  ],
  blogPosts: [
    {
      title: {
        en: "How to Write a Winning Scholarship Application",
        hi: "विजयी छात्रवृत्ति आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "Proven strategies to make your scholarship application stand out",
        hi: "अपने छात्रवृत्ति आवेदन को अलग बनाने के लिए सिद्ध रणनीतियां",
      },
      readTime: "8 min read",
      slug: "winning-scholarship-application",
    },
    {
      title: {
        en: "Top Government Scholarships for Students in India",
        hi: "भारत में छात्रों के लिए शीर्ष सरकारी छात्रवृत्तियां",
      },
      excerpt: {
        en: "Complete list of government scholarships and how to apply",
        hi: "सरकारी छात्रवृत्तियों की पूर्ण सूची और आवेदन कैसे करें",
      },
      readTime: "6 min read",
      slug: "government-scholarships-india",
    },
    {
      title: {
        en: "Scholarship Essay Writing Tips",
        hi: "छात्रवृत्ति निबंध लेखन सुझाव",
      },
      excerpt: {
        en: "Expert tips for writing compelling scholarship essays that get funded",
        hi: "सम्मोहक छात्रवृत्ति निबंध लिखने के लिए विशेषज्ञ सुझाव जो वित्त पोषित होते हैं",
      },
      readTime: "7 min read",
      slug: "scholarship-essay-tips",
    },
  ],
  faqs: [
    {
      question: {
        en: "When should I apply for scholarships?",
        hi: "मुझे छात्रवृत्ति के लिए कब आवेदन करना चाहिए?",
      },
      answer: {
        en: "Start researching and applying for scholarships as early as possible, ideally 6-12 months before you need the funds. Many scholarships have specific deadlines throughout the year. Create a calendar of deadlines and start applications early to avoid last-minute rush.",
        hi: "जितनी जल्दी हो सके छात्रवृत्ति के लिए शोध और आवेदन करना शुरू करें, आदर्श रूप से धन की आवश्यकता से 6-12 महीने पहले।",
      },
    },
    {
      question: {
        en: "Can I apply for multiple scholarships?",
        hi: "क्या मैं कई छात्रवृत्तियों के लिए आवेदन कर सकता हूं?",
      },
      answer: {
        en: "Yes, you should apply for as many scholarships as you qualify for. There's no limit to the number of scholarships you can receive. Each application increases your chances of securing financial aid. However, some scholarships may have restrictions on combining with others.",
        hi: "हां, आपको जितने भी छात्रवृत्तियों के लिए आप योग्य हैं, उनके लिए आवेदन करना चाहिए। आप जितनी छात्रवृत्तियां प्राप्त कर सकते हैं, उनकी कोई सीमा नहीं है।",
      },
    },
    {
      question: {
        en: "What makes a scholarship application strong?",
        hi: "छात्रवृत्ति आवेदन को मजबूत क्या बनाता है?",
      },
      answer: {
        en: "A strong scholarship application includes excellent academic records, compelling personal statement, clear demonstration of need or merit, strong recommendations, relevant achievements and extracurricular activities, and error-free writing. Tailor each application to the specific scholarship requirements.",
        hi: "एक मजबूत छात्रवृत्ति आवेदन में उत्कृष्ट शैक्षणिक रिकॉर्ड, सम्मोहक व्यक्तिगत बयान, आवश्यकता या योग्यता का स्पष्ट प्रदर्शन शामिल है।",
      },
    },
  ],
};

// 6. CERTIFICATE REQUEST APPLICATIONS
export const certificateRequestData: SubcategoryData = {
  slug: "certificate-request",
  categorySlug: "applications",
  categoryName: { en: "Applications", hi: "आवेदन" },
  subcategoryName: {
    en: "Certificate Request Applications",
    hi: "प्रमाणपत्र अनुरोध आवेदन",
  },
  breadcrumb: [
    { en: "Applications", hi: "आवेदन" },
    { en: "Certificate Requests", hi: "प्रमाणपत्र अनुरोध" },
  ],
  heroTitle: {
    en: "Certificate Request Application Templates",
    hi: "प्रमाणपत्र अनुरोध आवेदन टेम्पलेट",
  },
  heroDescription: {
    en: "Professional formats for requesting various certificates from schools, colleges, offices, and government departments.",
    hi: "स्कूलों, कॉलेजों, कार्यालयों और सरकारी विभागों से विभिन्न प्रमाणपत्रों का अनुरोध करने के लिए पेशेवर प्रारूप।",
  },
  searchPlaceholder: {
    en: "Search certificate request templates…",
    hi: "प्रमाणपत्र अनुरोध टेम्पलेट खोजें...",
  },
  tags: [
    "Experience Certificate",
    "Transfer Certificate",
    "Income Certificate",
    "Caste Certificate",
    "Bonafide",
    "Character Certificate",
  ],
  templates: [
    {
      id: "cert-req-1",
      title: {
        en: "Experience Certificate Request Letter",
        hi: "अनुभव प्रमाणपत्र अनुरोध पत्र",
      },
      description: {
        en: "Formal request to employer for experience or service certificate.",
        hi: "अनुभव या सेवा प्रमाणपत्र के लिए नियोक्त��� को औपचारिक अनुरोध।",
      },
      lastUpdated: "Nov 2025",
      views: "19.2k",
      badge: "Popular",
      templateSlug: "application-for-experience-certificate-request",
    },
    {
      id: "cert-req-2",
      title: {
        en: "Transfer Certificate Request",
        hi: "स्थानांतरण प्रमाणपत्र अनुरोध",
      },
      description: {
        en: "Application to school or college for transfer certificate and documents.",
        hi: "स्थानांतरण प्रमाणपत्र और दस्तावेजों के लिए स्कूल या कॉलेज को आवेदन।",
      },
      lastUpdated: "Nov 2025",
      views: "17.5k",
      badge: "Trending",
      templateSlug: "application-for-transfer-certificate-request",
    },
    {
      id: "cert-req-3",
      title: {
        en: "Income Certificate Application",
        hi: "आय प्रमाणपत्र आवेदन",
      },
      description: {
        en: "Request format for income certificate from government authorities.",
        hi: "सरकारी अधिकारियों से आय प्रमाणपत्र के लिए अनुरोध प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "16.3k",
      templateSlug: "application-for-income-certificate",
    },
    {
      id: "cert-req-4",
      title: {
        en: "Bonafide Certificate Request",
        hi: "बोनाफाइड प्रमाणपत्र अनुरोध",
      },
      description: {
        en: "Application template for student bonafide certificate from educational institutions.",
        hi: "शैक्षणिक संस्थानों से छात्र बोनाफाइड प्रमाणपत्र के लिए आवेदन टेम्पलेट।",
      },
      lastUpdated: "Oct 2025",
      views: "14.8k",
      templateSlug: "application-for-bonafide-certificate-request",
    },
    {
      id: "cert-req-5",
      title: {
        en: "Character Certificate Request",
        hi: "चरित्र प्रमाणपत्र अनुरोध",
      },
      description: {
        en: "Formal request for character certificate from school, college, or employer.",
        hi: "स्कूल, कॉलेज या नियोक्ता से चरित्र प्रमाणपत्र के लिए औपचारिक अनुरोध।",
      },
      lastUpdated: "Oct 2025",
      views: "13.1k",
      templateSlug: "application-for-character-certificate-request",
    },
    {
      id: "cert-req-6",
      title: {
        en: "Caste Certificate Application",
        hi: "जाति प्रमाणपत्र आवेदन",
      },
      description: {
        en: "Application format for caste certificate from competent authority.",
        hi: "सक्षम प्राधिकारी से जाति प्रमाणपत्र के लिए आवेदन प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "12.4k",
      templateSlug: "application-for-caste-certificate-request",
    },
  ],
  seoTitle: {
    en: "About Certificate Request Applications",
    hi: "प्रमाणपत्र अनुरोध आवेदन के बारे में",
  },
  seoDescription: {
    en: "Certificate request applications are formal letters requesting various certificates from institutions and authorities. Our templates cover experience certificates from employers, transfer certificates from schools, income certificates from government offices, bonafide certificates for students, character certificates, and caste certificates. Each template follows official format with proper addressing, clear purpose statement, and necessary details. These professionally structured applications ensure smooth processing and timely certificate issuance.",
    hi: "प्रमाणपत्र अनुरोध आवेदन संस्थानों और अधिकारियों से विभिन्न प्रमाणपत्रों का अनुरोध करने वाले औपचारिक पत्र हैं। हमारे टेम्पलेट में नियोक्ताओं से अनुभव प्रमाणपत्र शामिल हैं।",
  },
  relatedTemplates: [
    {
      title: {
        en: "Experience Certificate Format",
        hi: "अनुभव प्रमाणपत्र प्रारूप",
      },
      category: { en: "Certificates", hi: "प्रमाणपत्र" },
      slug: "experience",
    },
    {
      title: { en: "Resignation Letter", hi: "त्यागपत्र" },
      category: { en: "Letters", hi: "पत्र" },
      slug: "resignation",
    },
    {
      title: {
        en: "School Transfer Application",
        hi: "स्कूल स्थानांतरण आवेदन",
      },
      category: { en: "Admission Applications", hi: "प्रवेश आवेदन" },
      slug: "admission",
    },
    {
      title: { en: "Request Letter Format", hi: "अनुरोध पत्र प्रारूप" },
      category: { en: "Letters", hi: "पत्र" },
      slug: "request",
    },
  ],
  blogPosts: [
    {
      title: {
        en: "How to Request Experience Certificate from Employer",
        hi: "नियोक्ता से अनुभव प्रमाणपत्र का अनुरोध कैसे करें",
      },
      excerpt: {
        en: "Professional guidelines for requesting experience certificates",
        hi: "अनुभव प्रमाणपत्र का अनुरोध करने के लिए पेशेवर दिशानिर्देश",
      },
      readTime: "5 min read",
      slug: "request-experience-certificate",
    },
    {
      title: {
        en: "Transfer Certificate: Complete Process Guide",
        hi: "स्थानांतरण प्रमाणपत्र: पूर्ण प्रक्रिया गाइड",
      },
      excerpt: {
        en: "Everything you need to know about obtaining transfer certificates",
        hi: "स्थानांतरण प्रमाणपत्र प्राप्त करने के बारे में आपको जो कुछ भी जानने की आवश्यकता है",
      },
      readTime: "6 min read",
      slug: "transfer-certificate-guide",
    },
    {
      title: {
        en: "Income Certificate: Documents and Procedure",
        hi: "आय प्रमाणपत्र: दस्तावेज और प्रक्रिया",
      },
      excerpt: {
        en: "Step-by-step guide to apply for income certificate online and offline",
        hi: "आय प्रमाणपत्र के लिए ऑनलाइन और ऑफलाइन आवेदन करने के लिए चरण-दर-चरण गाइड",
      },
      readTime: "7 min read",
      slug: "income-certificate-procedure",
    },
  ],
  faqs: [
    {
      question: {
        en: "How do I request an experience certificate?",
        hi: "मैं अनुभव प्रमाणपत्र का अनुरोध कैसे करूं?",
      },
      answer: {
        en: "Write a formal letter to your HR department or manager requesting the experience certificate. Include your employee ID, designation, dates of employment, and reason for request. Submit it at least 2 weeks before you need it. Follow up politely if you don't receive it within the promised timeframe.",
        hi: "अनुभव प्रमाणपत्र का अनुरोध करते हुए अपने एचआर विभाग या प्रबंधक को एक औपचारिक पत्र लिखें। अपनी कर्मचारी आईडी, पदनाम, रोजगार की तारीखें शामिल करें।",
      },
    },
    {
      question: {
        en: "What documents are needed for income certificate?",
        hi: "आय प्रमाणपत्र के लिए कौन से दस्तावेज आवश्यक हैं?",
      },
      answer: {
        en: "Required documents typically include application form, ID proof (Aadhaar/PAN), address proof, salary slips or income statements, property documents (if applicable), and passport-size photographs. Self-employed individuals may need business registration and ITR documents.",
        hi: "आवश्यक दस्तावेजों में आमतौर पर आवेदन पत्र, पहचान प्रमाण, पता प्रमाण, वेतन पर्ची या आय विवरण, संपत्ति दस्तावेज और पासपोर्ट आकार की तस्वीरें शामिल हैं।",
      },
    },
    {
      question: {
        en: "How long does it take to get a transfer certificate?",
        hi: "स्थानांतरण प्रमाणपत्र प्राप्त करने में कितना समय लगता है?",
      },
      answer: {
        en: "Most schools and colleges issue transfer certificates within 7-15 days of application, provided all dues are cleared and necessary documents are submitted. Some institutions may take longer during peak admission seasons. Apply well in advance if you have a deadline.",
        hi: "अधिकांश स्कूल और कॉलेज आवेदन के 7-15 दिनों के भीतर स्थानांतरण प्रमाणपत��र जारी करते हैं, बशर्ते सभी बकाया साफ हों और आवश्यक दस्तावेज जमा किए गए हों।",
      },
    },
  ],
};

// Export all Applications subcategories
export const allApplicationsSubcategories = [
  loanApplicationsData,
  admissionApplicationsData,
  scholarshipApplicationsData,
  certificateRequestData,
];
