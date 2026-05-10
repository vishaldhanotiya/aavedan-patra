/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */

export const businessLoanTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug: "/applications" },
    subcategory: {
      en: "Loan Applications",
      hi: "ऋण आवेदन",
      slug: "/applications/loan",
    },
    template: {
      en: "Loan Application Formats",
      hi: "लोन आवेदन प्रारूप",
      slug: "",
    },
  },

  title: {
    en: "Business Loan Application",
    hi: "बिज़नेस लोन के लिए आवेदन पत्र",
  },

  subtitle: {
    en: "Learn how to write a business loan application for business expansion, setup, or working capital needs.",
    hi: "बिज़नेस लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ दी गई है। इस पेज पर व्यवसाय विस्तार, नई स्थापना या कार्यशील पूंजी के लिए लोन लेने हेतु सही प्रारूप, तैयार नमूना आवेदन पत्र, बैंक द्वारा मांगी जाने वाली आवश्यक जानकारी और आवेदन को प्रभावी बनाने के महत्वपूर्ण सुझाव दिए गए हैं।",
  },

  category: { en: "Loan Applications", hi: "ऋण आवेदन" },
  updatedDate: "January 2025",

  // ----------------------------------------------------
  // VARIATIONS (6 loan types)
  // ----------------------------------------------------
  variations: [
    // ----------------------------------------------------
    // 2. BUSINESS LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "businessLoan",
      title: {
        en: "Business Loan Application",
        hi: "बिज़नेस लोन आवेदन",
      },
      description: {
        en: "Format for requesting a business loan for expansion, setup or working capital.",
        hi: "व्यवसाय विस्तार, स्थापना या कार्यशील पूंजी के लिए लोन का अनुरोध करने का प्रारूप।",
      },
      bestFor: {
        en: "Small businesses, startups, expansion capital",
        hi: "छोटे व्यवसाय, स्टार्टअप, विस्तार पूंजी",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
The Branch Manager
[Bank Name]
[Branch Address]

Subject: Application for Business Loan

Respected Sir/Madam,

I am writing to apply for a business loan of INR [Loan Amount] for [purpose: business expansion/working capital/setting up a new unit]. I am the proprietor/partner of [Business Name], which has been operating successfully for the past [X] years with stable and consistent growth.

Our annual turnover is INR [Turnover], and the financial statements for the last three years are enclosed for your review. The requested loan will help us improve productivity, enhance operations, and support the future growth of the business.

I kindly request you to consider my application and process it at the earliest.

Thank you for your cooperation.

Sincerely,
[Your Name]
[Contact Number]
[Address] (optional)`,

        hi: `सेवा में,
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: बिज़नेस लोन के लिए आवेदन

महोदय/महोदया,

मैं आपके बैंक से INR [Loan Amount] का बिज़नेस लोन लेने के लिए आवेदन कर रहा/रही हूँ। मेरा व्यवसाय [Business Name] पिछले [X] वर्षों से सफलतापूर्वक संचालित हो रहा है।

हमारा वार्षिक टर्नओवर INR [Turnover] है। पिछले तीन वर्षों के वित्तीय दस्तावेज़ संलग्न हैं। यह लोन हमारे व्यवसाय की उत्पादकता बढ़ाने, संचालन सुधारने और आगे विस्तार करने में मदद करेगा।

कृपया मेरे आवेदन पर शीघ्र कार्रवाई करने की कृपा करें।

धन्यवाद।

भवदीय,
[आपका नाम]
[संपर्क नंबर]
[पता] (वैकल्पिक)`,
      },
    },
  ],

  // ----------------------------------------------------
  // HOW TO WRITE
  // ----------------------------------------------------
  howToWrite: {
    title: {
      en: "Tips to Write a Perfect Loan Application",
      hi: "सही लोन आवेदन लिखने के टिप्स",
    },
    tips: [
      {
        text: {
          en: "Mention the exact loan amount and reason clearly.",
          hi: "लोन राशि और कारण को स्पष्ट रूप से लिखें।",
        },
      },
      {
        text: {
          en: "Provide accurate financial and employment details.",
          hi: "सही वित्तीय और रोजगार विवरण प्रदान करें।",
        },
      },
      {
        text: {
          en: "Maintain a formal and respectful tone.",
          hi: "औपचारिक और विनम्र भाषा का उपयोग करें।",
        },
      },
      {
        text: {
          en: "Attach all required supporting documents.",
          hi: "सभी आवश्यक दस्तावेज संलग्न करें।",
        },
      },
      {
        text: {
          en: "Keep the letter simple, clear and direct.",
          hi: "पत्र को सरल, स्पष्ट और सीधा रखें।",
        },
      },
    ],
  },

  // ----------------------------------------------------
  // RELATED TEMPLATES
  // ----------------------------------------------------
  relatedTemplates: [
    {
      title: {
        en: "Application for Bank Statement",
        hi: "बैंक स्टेटमेंट के लिए आवेदन",
      },
      description: {
        en: "Useful for banking-related requests.",
        hi: "बैंकिंग संबंधित अनुरोधों के लिए उपयोगी।",
      },
      icon: "FileText",
      link: "/templates/bank-statement",
    },
    {
      title: {
        en: "Application for ATM Card Issue",
        hi: "एटीएम कार्ड जारी करने के लिए आवेदन",
      },
      description: {
        en: "Format for applying for a new ATM card.",
        hi: "नया एटीएम कार्ड पाने के लिए प्रारूप।",
      },
      icon: "Briefcase",
      link: "/templates/atm-card",
    },
    {
      title: {
        en: "Application for Address Change in Bank",
        hi: "बैंक में पता बदलने के लिए आवेदन",
      },
      description: {
        en: "Update address details in bank records.",
        hi: "बैंक रिकॉर्ड में पता अपडेट करने हेतु।",
      },
      icon: "GraduationCap",
      link: "/templates/address-change",
    },
  ],

  // ----------------------------------------------------
  // BLOG ARTICLES
  // ----------------------------------------------------
blogArticles: [
  {
    title: {
      en: "How to Write a Business Loan Application",
      hi: "बिजनेस लोन आवेदन कैसे लिखें",
    },
    excerpt: {
      en: "Simple tips to write a professional business loan application for faster approval.",
      hi: "तेज़ स्वीकृति के लिए पेशेवर बिजनेस लोन आवेदन लिखने के आसान सुझाव।",
    },
    readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
    link: "/blog/how-to-write-business-loan-application",
  },
  {
    title: {
      en: "Documents Required for Business Loan Approval",
      hi: "बिजनेस लोन स्वीकृति के लिए आवश्यक दस्तावेज़",
    },
    excerpt: {
      en: "Checklist of important documents required for business loan applications.",
      hi: "बिजनेस लोन आवेदन के लिए आवश्यक महत्वपूर्ण दस्तावेज़ों की सूची।",
    },
    readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
    link: "/blog/business-loan-documents",
  },
  {
    title: {
      en: "Common Mistakes in Business Loan Applications",
      hi: "बिजनेस लोन आवेदनों में सामान्य गलतियाँ",
    },
    excerpt: {
      en: "Avoid these mistakes to improve your business loan approval chances.",
      hi: "बिजनेस लोन स्वीकृति की संभावना बढ़ाने के लिए इन गलतियों से बचें।",
    },
    readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
    link: "/blog/business-loan-application-mistakes",
  },
],

faqs: [
  {
    question: {
      en: "How long should a business loan application be?",
      hi: "बिजनेस लोन आवेदन कितना लंबा होना चाहिए?",
    },
    answer: {
      en: "One page is usually enough. Keep the details clear, professional, and precise.",
      hi: "आमतौर पर एक पेज पर्याप्त होता है। जानकारी स्पष्ट, पेशेवर और संक्षिप्त रखें।",
    },
  },
  {
    question: {
      en: "Should I mention my business account number in the application?",
      hi: "क्या मुझे आवेदन में अपना बिजनेस खाता नंबर लिखना चाहिए?",
    },
    answer: {
      en: "Yes, mentioning your business account number helps the bank process your application faster.",
      hi: "हाँ, बिजनेस खाता संख्या लिखने से बैंक को आवेदन प्रक्रिया तेज़ करने में मदद मिलती है।",
    },
  },
  {
    question: {
      en: "Is income proof necessary for a business loan?",
      hi: "क्या बिजनेस लोन के लिए आय प्रमाण आवश्यक है?",
    },
    answer: {
      en: "Yes, banks usually require income proof, business statements, and financial records for approval.",
      hi: "हाँ, बैंक आमतौर पर स्वीकृति के लिए आय प्रमाण, बिजनेस स्टेटमेंट और वित्तीय रिकॉर्ड मांगते हैं।",
    },
  },
  {
    question: {
      en: "How long does business loan approval take?",
      hi: "बिजनेस लोन स्वीकृति में कितना समय लगता है?",
    },
    answer: {
      en: "Depending on the bank and documentation, approval may take 5–10 working days.",
      hi: "बैंक और दस्तावेज़ों के आधार पर स्वीकृति में 5–10 कार्य दिवस लग सकते हैं।",
    },
  },
  {
    question: {
      en: "Can I apply for a business loan online?",
      hi: "क्या मैं बिजनेस लोन के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes, most banks and financial institutions provide online business loan application facilities.",
      hi: "हाँ, अधिकांश बैंक और वित्तीय संस्थान ऑनलाइन बिजनेस लोन आवेदन की सुविधा प्रदान करते हैं।",
    },
  },
],
};
