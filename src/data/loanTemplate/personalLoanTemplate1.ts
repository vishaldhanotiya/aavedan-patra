/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */

export const personalLoanTemplate1 = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug: "/applications" },
    subcategory: {
      en: "Loan Applications",
      hi: "ऋण आवेदन",
      slug: "/applications/loan",
    },
    template: {
      en: "Personal Loan Application",
      hi: "पर्सनल लोन आवेदन पत्र",
      slug: "",
    },
  },

  title: {
    en: "Personal Loan Application",
    hi: "पर्सनल लोन आवेदन पत्र",
  },

  subtitle: {
    en: "Hindi personal loan application for banks—ready sample letter, document checklist, and step-by-step format for medical, family, or urgent needs.",
    hi: "बैंक से Personal Loan के लिए हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ सूची और Personal Loan Application लिखने की गाइड।",
  },

  category: { en: "Loan Applications", hi: "ऋण आवेदन" },

  pageMetaData: {
    author: "Vishal Dhanotiya",
    updatedAt: "January 2025",
    views: "1200",
    likes: "85",
  },

  updatedDate: "January 2025",

  // ----------------------------------------------------
  // VARIATIONS (6 loan types)
  // ----------------------------------------------------
  variations: [
    // ----------------------------------------------------
    // 1. PERSONAL LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "generalPersonalLoan",
      title: {
        en: "Personal Loan Application to Bank",
        hi: "बैंक में पर्सनल लोन हेतु आवेदन",
      },
      description: {
        en: "A professional format for requesting a personal loan for medical, family, or personal needs.",
        hi: "चिकित्सा, पारिवारिक या व्यक्तिगत आवश्यकताओं के लिए पर्सनल लोन का अनुरोध करने हेतु पेशेवर प्रारूप।",
      },
      bestFor: {
        en: "Personal financial needs, urgent expenses",
        hi: "व्यक्तिगत वित्तीय आवश्यकताएँ, अचानक खर्च",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Branch Manager
[Bank Name]
[Branch Address]

Subject: Application for Personal Loan of ₹[Loan Amount] for [Specific Purpose, e.g., Home Renovation]

Respected Sir/Madam,

I, [Your Full Name], have been maintaining a savings account in your bank for the last [Number of Years] years, and my account number is [Account Number]. I would like to apply for a personal loan of ₹[Loan Amount] for [Reason for Loan].

I am currently employed as a [Your Job Title] at [Company/Organization Name], and my monthly income is ₹[Salary]. I have a stable financial background and can comfortably manage the loan EMIs. I am willing to opt for a repayment period of [X Years] or as per the bank’s policy. I maintain a healthy account balance and a strong credit history

I have attached all the required documents, including identity proof, address proof, salary slips, and bank statements.

I kindly request you to consider my application and process it at the earliest. I shall be grateful for your support and cooperation.

Thank you.
Sincerely,
[Your Full Name]
Mobile: [Your Contact Number]
Address: [Your Address]
Date: [DD/MM/YYYY]
`,

        hi: `प्रति,
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: [विशेष उद्देश्य, जैसे: घर की मरम्मत] के लिए ₹[ऋण राशि] के व्यक्तिगत ऋण हेतु आवेदन

आदरणीय महोदय/महोदया,

मैं, [आपका पूरा नाम], पिछले [वर्षों की संख्या] वर्षों से आपके बैंक में एक बचत खाता संचालित कर रहा हूं/रही हूं, और मेरा खाता नंबर [खाता नंबर] है। मैं [ऋण का कारण] के लिए ₹[ऋण राशि] का व्यक्तिगत ऋण लेने के लिए आवेदन करना चाहता हूं/चाहती हूं।

मैं वर्तमान में [कंपनी/संस्था का नाम] में [आपकी जॉब पोस्ट] के पद पर कार्यरत हूं/हूं, और मेरी मासिक आय ₹[वेतन] है। मेरी आर्थिक स्थिति स्थिर है और मैं ऋण की ईएमआई आसानी से चुका सकता हूं/सकती हूं। मैं [X वर्षों] की अवधि में या बैंक की नीति के अनुसार ऋण चुकाना चाहता हूं/चाहती हूं। मेरे खाते में पर्याप्त शेष राशि है और मेरा क्रेडिट इतिहास अच्छा है।

मैंने सभी आवश्यक दस्तावेज़, जैसे पहचान प्रमाण, पता प्रमाण, वेतन पर्ची और बैंक स्टेटमेंट संलग्न किए हैं।

मेरी विनम्र प्रार्थना है कि आप मेरा आवेदन पर विचार करें और इसे शीघ्रता से आगे बढ़ाएं। मैं आपके सहयोग के लिए आभारी रहूंगा/रहूंगी।

धन्यवाद।
आपका विश्वासी,
[आपका पूरा नाम]
मोबाइल नंबर: [आपका संपर्क नंबर]
पता: [आपका पता]
दिनांक: [दिन/महीना/साल]`,
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

  blogArticles: [
    {
      title: {
        en: "How to Write a Personal Loan Application",
        hi: "पर्सनल लोन आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "Simple tips to write a professional personal loan application for faster approval.",
        hi: "तेज़ स्वीकृति के लिए पेशेवर पर्सनल लोन आवेदन लिखने के आसान सुझाव।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/how-to-write-personal-loan-application",
    },
    {
      title: {
        en: "Documents Required for Personal Loan Approval",
        hi: "पर्सनल लोन स्वीकृति के लिए आवश्यक दस्तावेज़",
      },
      excerpt: {
        en: "Checklist of important documents needed for personal loan applications.",
        hi: "पर्सनल लोन आवेदन के लिए आवश्यक महत्वपूर्ण दस्तावेज़ों की सूची।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/personal-loan-documents",
    },
    {
      title: {
        en: "Common Mistakes in Personal Loan Applications",
        hi: "पर्सनल लोन आवेदनों में सामान्य गलतियाँ",
      },
      excerpt: {
        en: "Avoid these mistakes to improve your personal loan approval chances.",
        hi: "पर्सनल लोन स्वीकृति की संभावना बढ़ाने के लिए इन गलतियों से बचें।",
      },
      readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
      link: "/blog/personal-loan-application-mistakes",
    },
  ],

  faqs: [
    {
      question: {
        en: "How long should a personal loan application be?",
        hi: "पर्सनल लोन आवेदन कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "One page is usually enough. Keep the details clear, professional, and concise.",
        hi: "आमतौर पर एक पेज पर्याप्त होता है। जानकारी स्पष्ट, पेशेवर और संक्षिप्त रखें।",
      },
    },
    {
      question: {
        en: "Should I mention my bank account number in the application?",
        hi: "क्या मुझे आवेदन में अपना बैंक खाता नंबर लिखना चाहिए?",
      },
      answer: {
        en: "Yes, mentioning your bank account number helps in faster processing of your loan application.",
        hi: "हाँ, बैंक खाता संख्या लिखने से लोन आवेदन की प्रक्रिया तेज़ होती है।",
      },
    },
    {
      question: {
        en: "Is income proof necessary for a personal loan?",
        hi: "क्या पर्सनल लोन के लिए आय प्रमाण आवश्यक है?",
      },
      answer: {
        en: "Yes, income proof such as salary slips, bank statements, or ITR is mandatory for approval.",
        hi: "हाँ, स्वीकृति के लिए सैलरी स्लिप, बैंक स्टेटमेंट या आयकर रिटर्न जैसे आय प्रमाण आवश्यक होते हैं।",
      },
    },
    {
      question: {
        en: "How long does personal loan approval take?",
        hi: "पर्सनल लोन स्वीकृति में कितना समय लगता है?",
      },
      answer: {
        en: "Depending on the bank and verification process, approval may take 1–7 working days.",
        hi: "बैंक और सत्यापन प्रक्रिया के अनुसार स्वीकृति में 1–7 कार्य दिवस लग सकते हैं।",
      },
    },
    {
      question: {
        en: "Can I apply for a personal loan online?",
        hi: "क्या मैं पर्सनल लोन के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
      },
      answer: {
        en: "Yes, most banks and financial institutions provide online personal loan application facilities.",
        hi: "हाँ, अधिकांश बैंक और वित्तीय संस्थान ऑनलाइन पर्सनल लोन आवेदन की सुविधा प्रदान करते हैं।",
      },
    },
  ],
};
