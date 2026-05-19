/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */

export const educationLoanTemplate = {
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
    en: "Education Loan Application",
    hi: "शिक्षा लोन के लिए आवेदन पत्र",
  },

  subtitle: {
    en: "Learn how to write an education loan application for higher studies in India or abroad. This page includes the correct format, ready-to-use sample applications, important details required by banks, and useful tips to help students create a clear and professionally written loan request.",
    hi: "शिक्षा लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ दी गई है। इस पेज पर भारत या विदेश में पढ़ाई के लिए लोन लेने हेतु सही प्रारूप, तैयार नमूना आवेदन पत्र, बैंक द्वारा मांगी जाने वाली आवश्यक जानकारी और छात्रों के लिए आवेदन को प्रभावी बनाने के महत्वपूर्ण सुझाव दिए गए हैं।",
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
    // 3. EDUCATION LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "educationLoan",
      title: {
        en: "Education Loan Application",
        hi: "शिक्षा लोन आवेदन",
      },
      description: {
        en: "Application format for students applying for an education loan.",
        hi: "शिक्षा लोन हेतु आवेदन करने वाले छात्रों के लिए प्रारूप।",
      },
      bestFor: {
        en: "Higher studies, study abroad, college fees",
        hi: "उच्च शिक्षा, विदेश में पढ़ाई, कॉलेज फीस",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `
To,
The Branch Manager
[Bank Name]
[Branch Address]

Subject: Application for Education Loan

Respected Sir/Madam,

I am applying for an education loan of INR [Loan Amount] to pursue my [Course Name] at [University/College Name]. I have secured admission, and I am enclosing the offer letter and the detailed fee structure for your reference. The total estimated cost of the course is INR [Total Course Cost], and the duration of the program is [X years].

I have completed my [Previous Qualification] with [Percentage/Grade], fulfilling the eligibility criteria for the course.

My [father/mother/guardian], [Name], employed as [Job Title] at [Company/Business Name], will act as the co-applicant for this loan. We maintain a savings account with your bank, bearing account number [Account Number].

All necessary documents, including identity proofs, income proofs, academic records, and admission letters, are enclosed for your kind perusal. I request you to kindly process my education loan application at the earliest. I am available for any further verification or discussion as required.

Thank you for your time and consideration.

Sincerely,
[Your Name]
[Address]
[Phone Number]
[Email Address]`,

        hi: `सेवा में,  
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: शिक्षा ऋण प्रदान करने के संबंध में आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं [University/College Name] में [Course Name] करने हेतु चयनित हुआ/हुई हूँ। इस पाठ्यक्रम की कुल अनुमानित लागत INR [Total Course Cost] है। अतः पाठ्यक्रम शुल्क एवं अन्य शैक्षणिक व्ययों की पूर्ति हेतु मुझे INR [Loan Amount] के शिक्षा ऋण की आवश्यकता है।

मैं अपना [Previous Qualification] [Percentage/Grade] के साथ उत्तीर्ण कर चुका/चुकी हूँ। पाठ्यक्रम की अवधि [X वर्ष] है। प्रवेश पत्र, शुल्क संरचना, शैक्षणिक अभिलेख एवं अन्य आवश्यक दस्तावेज़ संलग्न हैं।

मेरे [पिता/माता/अभिभावक], [Name], जो [Company/Business Name] में [Job Title] के पद पर कार्यरत हैं, इस ऋण के सह-आवेदक होंगे। हमारा आपके बैंक में बचत खाता संख्या [Account Number] है, जिसे आप दस्तावेज़ी प्रक्रिया हेतु संदर्भित कर सकते हैं।

अतः आपसे विनम्र अनुरोध है कि कृपया मेरे आवेदन पर सहानुभूतिपूर्वक विचार कर शिक्षा ऋण शीघ्र स्वीकृत करने की कृपा करें। आवश्यकता पड़ने पर मैं किसी भी प्रकार की अतिरिक्त जानकारी या सत्यापन हेतु उपलब्ध हूँ।

आपके सहयोग हेतु मैं सदा आभारी रहूँगा/रहूँगी।

भवदीय,
[Your Name]
[पूरा पता]
[फ़ोन नंबर]
[ईमेल आईडी]
तारीख: [Date]`,
      },
    },
  ],

  // ----------------------------------------------------
  // HOW TO WRITE
  // ----------------------------------------------------
  howToWrite: {
    title: {
      en: "Tips to Write an Education Loan Application",
      hi: "शिक्षा ऋण आवेदन लिखने के टिप्स",
    },
    tips: [
      {
        text: {
          en: "Mention the course name, college, and total education expenses clearly.",
          hi: "कोर्स का नाम, कॉलेज और कुल शिक्षा खर्च स्पष्ट रूप से लिखें।",
        },
      },
      {
        text: {
          en: "Include details of the co-applicant or guardian if required by the bank.",
          hi: "यदि बैंक द्वारा आवश्यक हो तो सह-आवेदक या अभिभावक की जानकारी जोड़ें।",
        },
      },
      {
        text: {
          en: "Attach admission proof, fee structure, and academic records.",
          hi: "प्रवेश प्रमाण, फीस संरचना और शैक्षणिक रिकॉर्ड संलग्न करें।",
        },
      },
      {
        text: {
          en: "Mention repayment plans or future career goals confidently.",
          hi: "भविष्य की करियर योजना या ऋण चुकाने की क्षमता का उल्लेख करें।",
        },
      },
      {
        text: {
          en: "Keep the application formal, concise, and factually accurate.",
          hi: "आवेदन को औपचारिक, संक्षिप्त और तथ्यात्मक रखें।",
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
        en: "How to Write an Education Loan Application",
        hi: "शिक्षा लोन आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "Simple tips to write a professional education loan application for faster approval.",
        hi: "तेज़ स्वीकृति के लिए पेशेवर शिक्षा लोन आवेदन लिखने के आसान सुझाव।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/how-to-write-education-loan-application",
    },
    {
      title: {
        en: "Documents Required for Education Loan Approval",
        hi: "शिक्षा लोन स्वीकृति के लिए आवश्यक दस्तावेज़",
      },
      excerpt: {
        en: "Checklist of important documents needed for education loan applications.",
        hi: "शिक्षा लोन आवेदन के लिए आवश्यक महत्वपूर्ण दस्तावेज़ों की सूची।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/education-loan-documents",
    },
    {
      title: {
        en: "Common Mistakes in Education Loan Applications",
        hi: "शिक्षा लोन आवेदनों में सामान्य गलतियाँ",
      },
      excerpt: {
        en: "Avoid these mistakes to improve your education loan approval chances.",
        hi: "शिक्षा लोन स्वीकृति की संभावना बढ़ाने के लिए इन गलतियों से बचें।",
      },
      readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
      link: "/blog/education-loan-application-mistakes",
    },
  ],

  faqs: [
    {
      question: {
        en: "How long should an education loan application be?",
        hi: "शिक्षा लोन आवेदन कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "One page is usually enough. Keep the information clear, accurate, and professional.",
        hi: "आमतौर पर एक पेज पर्याप्त होता है। जानकारी स्पष्ट, सटीक और पेशेवर रखें।",
      },
    },
    {
      question: {
        en: "Should I mention my admission details in the application?",
        hi: "क्या मुझे आवेदन में अपने प्रवेश विवरण का उल्लेख करना चाहिए?",
      },
      answer: {
        en: "Yes, mentioning course, institution, and admission details helps the bank process your loan faster.",
        hi: "हाँ, कोर्स, संस्थान और प्रवेश विवरण लिखने से बैंक को लोन प्रक्रिया तेज़ करने में मदद मिलती है।",
      },
    },
    {
      question: {
        en: "Is income proof necessary for an education loan?",
        hi: "क्या शिक्षा लोन के लिए आय प्रमाण आवश्यक है?",
      },
      answer: {
        en: "Yes, income proof of parents or guardians is generally required for education loan approval.",
        hi: "हाँ, शिक्षा लोन स्वीकृति के लिए आमतौर पर माता-पिता या अभिभावकों का आय प्रमाण आवश्यक होता है।",
      },
    },
    {
      question: {
        en: "How long does education loan approval take?",
        hi: "शिक्षा लोन स्वीकृति में कितना समय लगता है?",
      },
      answer: {
        en: "Depending on the bank and verification process, approval may take 5–10 working days.",
        hi: "बैंक और सत्यापन प्रक्रिया के अनुसार स्वीकृति में 5–10 कार्य दिवस लग सकते हैं।",
      },
    },
    {
      question: {
        en: "Can I apply for an education loan online?",
        hi: "क्या मैं शिक्षा लोन के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
      },
      answer: {
        en: "Yes, most banks and financial institutions provide online education loan application facilities.",
        hi: "हाँ, अधिकांश बैंक और वित्तीय संस्थान ऑनलाइन शिक्षा लोन आवेदन की सुविधा प्रदान करते हैं।",
      },
    },
  ],
};
