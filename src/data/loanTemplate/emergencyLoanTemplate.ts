/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */

export const emergencyLoanTemplate = {
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
    en: "Emergency Loan Request Letter",
    hi: "आपातकालीन लोन के लिए अनुरोध पत्र",
  },

  subtitle: {
    en: "Learn how to write an emergency loan request letter for urgent financial needs such as medical emergencies or personal crises. This page includes the correct format, ready-to-use sample letters, key details to mention, and tips to make your request clear, genuine, and more likely to be approved quickly.",
    hi: "आपातकालीन लोन के लिए अनुरोध पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ दी गई है। इस पेज पर चिकित्सा या व्यक्तिगत संकट के समय तुरंत वित्तीय सहायता पाने के लिए सही प्रारूप, तैयार नमूना पत्र, आवश्यक जानकारी और आवेदन को स्पष्ट व प्रभावी बनाने के महत्वपूर्ण सुझाव दिए गए हैं, जिससे आपका अनुरोध जल्दी स्वीकृत हो सके।",
  },

  category: { en: "Loan Applications", hi: "ऋण आवेदन" },
  updatedDate: "January 2025",

  // ----------------------------------------------------
  // VARIATIONS (6 loan types)
  // ----------------------------------------------------
  variations: [
    // ----------------------------------------------------
    // 6. EMERGENCY LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "emergencyLoan",
      title: {
        en: "Emergency Loan Request Letter",
        hi: "आपातकालीन लोन अनुरोध पत्र",
      },
      description: {
        en: "Format for requesting urgent financial help due to medical or personal crisis.",
        hi: "चिकित्सा या व्यक्तिगत संकट में आपातकालीन लोन का अनुरोध करने का प्रारूप।",
      },
      bestFor: {
        en: "Medical emergencies, urgent personal needs",
        hi: "चिकित्सा आपातकाल, तात्कालिक व्यक्तिगत आवश्यकता",
      },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Branch Manager
[Bank Name]
[Branch Address]

Subject: Application for Emergency Loan

Respected Sir/Madam,

I am writing to request the sanction of an emergency loan of INR [Loan Amount] due to an unforeseen situation related to [brief reason for emergency]. The matter is urgent, and I require immediate financial assistance to manage the expenses arising from this situation.

I have been maintaining a [Savings/Current] account with your esteemed bank for the past [X years], and my account number is [Account Number]. I am currently employed as [Your Job Title] at [Company Name], with a monthly income of INR [Income]. I assure you of timely repayment within the proposed tenure of [Preferred Tenure].

Kindly process my application at the earliest. I am enclosing the following documents for your reference and verification:

1. Identity Proof
2. Address Proof
3. Income Proof / Salary Slip
4. Emergency-related supporting documents (if any)

Thank you for your understanding and prompt assistance.

Sincerely,
[Your Name]
[Mobile Number]
[Email ID]`,

        hi: `सेवा में,
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: आपातकालीन ऋण (Emergency Loan) के लिए आवेदन

महोदय/महोदया,

मैं [आपातकाल का कारण संक्षेप में] के कारण उत्पन्न अप्रत्याशित परिस्थिति को देखते हुए INR [Loan Amount] का आपातकालीन ऋण प्रदान करने हेतु निवेदन कर रहा/रही हूँ। यह स्थिति अत्यंत त्वरित है, इसलिए मुझे तुरंत वित्तीय सहायता की आवश्यकता है।

मैं पिछले [X वर्ष] से आपके बैंक का [बचत/चलता] खाता धारक हूँ, और मेरा खाता संख्या [Account Number] है। वर्तमान में मैं [पद] के रूप में [कंपनी का नाम] में कार्यरत हूँ, तथा मेरी मासिक आय INR [Income] है। मैं [Loan Tenure] के भीतर ऋण का समय पर पुनर्भुगतान करने का आश्वासन देता/देती हूँ।

कृपया मेरे आवेदन पर शीघ्र कार्रवाई करने की कृपा करें। संलग्न दस्तावेज़ आपकी प्रति-जांच के लिए प्रस्तुत हैं:

1. पहचान प्रमाण
2. पता प्रमाण
3. आय प्रमाण / वेतन पर्ची
4. आपातकाल से संबंधित दस्तावेज़ (यदि उपलब्ध हों)

आपकी सहायता एवं सहयोग के लिए आपका आभारी/आभारी हूँ।

सादर,
[Your Name]
[Mobile Number]
[Email ID]`,
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
      en: "How to Write an Emergency Loan Application",
      hi: "इमरजेंसी लोन आवेदन कैसे लिखें",
    },
    excerpt: {
      en: "Simple tips to write a professional emergency loan application for urgent financial needs.",
      hi: "तत्काल वित्तीय आवश्यकताओं के लिए पेशेवर इमरजेंसी लोन आवेदन लिखने के आसान सुझाव।",
    },
    readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
    link: "/blog/how-to-write-emergency-loan-application",
  },
  {
    title: {
      en: "Documents Required for Emergency Loan Approval",
      hi: "इमरजेंसी लोन स्वीकृति के लिए आवश्यक दस्तावेज़",
    },
    excerpt: {
      en: "Checklist of important documents required for emergency loan applications.",
      hi: "इमरजेंसी लोन आवेदन के लिए आवश्यक महत्वपूर्ण दस्तावेज़ों की सूची।",
    },
    readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
    link: "/blog/emergency-loan-documents",
  },
  {
    title: {
      en: "Common Mistakes in Emergency Loan Applications",
      hi: "इमरजेंसी लोन आवेदनों में सामान्य गलतियाँ",
    },
    excerpt: {
      en: "Avoid these mistakes to improve your emergency loan approval chances.",
      hi: "इमरजेंसी लोन स्वीकृति की संभावना बढ़ाने के लिए इन गलतियों से बचें।",
    },
    readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
    link: "/blog/emergency-loan-application-mistakes",
  },
],

faqs: [
  {
    question: {
      en: "How long should an emergency loan application be?",
      hi: "इमरजेंसी लोन आवेदन कितना लंबा होना चाहिए?",
    },
    answer: {
      en: "One page is usually enough. Keep the details clear, direct, and professional.",
      hi: "आमतौर पर एक पेज पर्याप्त होता है। जानकारी स्पष्ट, सीधी और पेशेवर रखें।",
    },
  },
  {
    question: {
      en: "Should I explain the emergency reason in the application?",
      hi: "क्या मुझे आवेदन में आपात स्थिति का कारण बताना चाहिए?",
    },
    answer: {
      en: "Yes, briefly explaining the emergency helps the bank understand the urgency of your request.",
      hi: "हाँ, आपात स्थिति का संक्षिप्त विवरण देने से बैंक को आपकी आवश्यकता की तात्कालिकता समझने में मदद मिलती है।",
    },
  },
  {
    question: {
      en: "Is income proof necessary for an emergency loan?",
      hi: "क्या इमरजेंसी लोन के लिए आय प्रमाण आवश्यक है?",
    },
    answer: {
      en: "Yes, banks usually require income proof and financial documents for emergency loan approval.",
      hi: "हाँ, बैंक आमतौर पर इमरजेंसी लोन स्वीकृति के लिए आय प्रमाण और वित्तीय दस्तावेज़ मांगते हैं।",
    },
  },
  {
    question: {
      en: "How quickly can an emergency loan be approved?",
      hi: "इमरजेंसी लोन कितनी जल्दी स्वीकृत हो सकता है?",
    },
    answer: {
      en: "Depending on the bank and verification process, approval may take 1–5 working days.",
      hi: "बैंक और सत्यापन प्रक्रिया के अनुसार स्वीकृति में 1–5 कार्य दिवस लग सकते हैं।",
    },
  },
  {
    question: {
      en: "Can I apply for an emergency loan online?",
      hi: "क्या मैं इमरजेंसी लोन के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes, many banks and financial institutions provide online emergency loan application facilities.",
      hi: "हाँ, कई बैंक और वित्तीय संस्थान ऑनलाइन इमरजेंसी लोन आवेदन की सुविधा प्रदान करते हैं।",
    },
  },
],
};
