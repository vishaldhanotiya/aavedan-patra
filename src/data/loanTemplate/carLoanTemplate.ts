/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */

export const carLoanTemplate = {
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
    en: "Car Loan Application",
    hi: "कार लोन के लिए आवेदन पत्र",
  },

  subtitle: {
    en: "Learn how to write a car loan application for purchasing a new or used vehicle. This page includes the correct format, ready-to-use sample applications, important details required by banks or financial institutions, and useful tips to make your loan request clear and professionally written.",
    hi: "कार लोन के लिए आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ दी गई है। इस पेज पर नई या पुरानी कार खरीदने के लिए लोन लेने हेतु सही प्रारूप, तैयार नमूना आवेदन पत्र, बैंक द्वारा मांगी जाने वाली आवश्यक जानकारी और आवेदन को प्रभावी बनाने के महत्वपूर्ण सुझाव दिए गए हैं।",
  },

  category: { en: "Loan Applications", hi: "ऋण आवेदन" },

  pageMetaData: {
    author:{ en:"Vishal Dhanotiya", hi:"विशाल धनोतिया" },
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
    // 5. CAR LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "carLoan",
      title: {
        en: "Car Loan Application",
        hi: "कार लोन आवेदन",
      },
      description: {
        en: "Application format for requesting a car purchase loan.",
        hi: "कार खरीदने हेतु लोन का आवेदन प्रारूप।",
      },
      bestFor: {
        en: "New or used car purchase",
        hi: "नई या पुरानी कार खरीद",
      },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Branch Manager
[Bank Name]
[Branch Address]

Subject: Application for Car Loan

Respected Sir/Madam,

I would like to apply for a car loan of INR [Loan Amount] to purchase [Car Model]. I am working as [Your Job Title]at [Company Name], and my monthly income is INR [Income]. I also have a savings account in your bank, and my account number is [Account Number].

The on-road price of the car is INR [Price], and I have attached the dealer’s quotation for your reference. I would like to choose a loan tenure of [X years]. I assure you that I will make all EMI payments on time.

I am ready to submit all required documents, including KYC papers, salary slips, bank statements, and any other details needed for processing the loan. I kindly request you to consider my application and start the loan approval process.

Thank you for your support.

Yours sincerely,
[Your Name]
[Contact Number]
[Address]`,

        hi: `सेवा में,
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: कार ऋण (Car Loan) स्वीकृति हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं [Car Model] वाहन क्रय करने हेतु INR [Loan Amount] का कार ऋण प्राप्त करना चाहता/चाहती हूँ। मैं [Company Name] में [Your Job Title] के पद पर कार्यरत हूँ तथा मेरी मासिक आय INR [Income] है। मेरा बचत खाता आपके बैंक में संचालित है, जिसका खाता संख्या [Account Number] है।

उक्त वाहन की ऑन-रोड कीमत INR [Price] है। इसके संबंध में डीलर द्वारा प्रदान किया गया कोटेशन संलग्न है। मैं [X वर्ष] की ऋण अवधि का विकल्प चुनना चाहता/चाहती हूँ। मैं आपको यह आश्वासन देता/देती हूँ कि ऋण की निर्धारित ईएमआई का भुगतान समयानुसार एवं नियमित रूप से किया जाएगा।

ऋण स्वीकृति हेतु आवश्यक सभी दस्तावेज – केवाईसी दस्तावेज, वेतन पर्चियाँ, बैंक स्टेटमेंट तथा अन्य प्रमाणपत्र – प्रस्तुत करने हेतु मैं तैयार हूँ। अतः आपसे विनम्र निवेदन है कि कृपया मेरे आवेदन पर अनुकंपापूर्वक विचार करते हुए ऋण स्वीकृति की प्रक्रिया आगे बढ़ाने का कष्ट करें।

आपकी कृपा हेतु सदैव आभारी रहूँगा/रहूँगी।

भवदीय,
[आपका नाम]
[संपर्क नंबर]
[पता]`,
      },
    },
  ],

  // ----------------------------------------------------
  // HOW TO WRITE
  // ----------------------------------------------------
  howToWrite: {
    title: {
      en: "Tips to Write a Perfect Car Loan Application",
      hi: "सही कार लोन आवेदन लिखने के टिप्स",
    },
    tips: [
      {
        text: {
          en: "Mention the car model, variant, on-road price, and requested loan amount clearly.",
          hi: "कार मॉडल, वैरिएंट, ऑन-रोड कीमत और मांगी गई लोन राशि स्पष्ट रूप से लिखें।",
        },
      },
      {
        text: {
          en: "Attach the dealer quotation, proforma invoice, or booking receipt if available.",
          hi: "डीलर कोटेशन, प्रोफॉर्मा इनवॉइस या बुकिंग रसीद उपलब्ध हो तो संलग्न करें।",
        },
      },
      {
        text: {
          en: "Include your income proof and preferred EMI tenure to show repayment capacity.",
          hi: "भुगतान क्षमता दिखाने के लिए आय प्रमाण और पसंदीदा EMI अवधि शामिल करें।",
        },
      },
      {
        text: {
          en: "Mention expected RTO registration, insurance, and down payment details where relevant.",
          hi: "जहाँ लागू हो, RTO रजिस्ट्रेशन, इंश्योरेंस और डाउन पेमेंट विवरण लिखें।",
        },
      },
      {
        text: {
          en: "Keep the request formal, short, and focused on vehicle purchase financing.",
          hi: "अनुरोध को औपचारिक, संक्षिप्त और वाहन खरीद फाइनेंस पर केंद्रित रखें।",
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
      en: "How to Write a Car Loan Application",
      hi: "कार लोन आवेदन कैसे लिखें",
    },
    excerpt: {
      en: "Simple tips to write a professional car loan application for faster approval.",
      hi: "तेज़ स्वीकृति के लिए पेशेवर कार लोन आवेदन लिखने के आसान सुझाव।",
    },
    readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
    link: "/blog/how-to-write-car-loan-application",
  },
  {
    title: {
      en: "Documents Required for Car Loan Approval",
      hi: "कार लोन स्वीकृति के लिए आवश्यक दस्तावेज़",
    },
    excerpt: {
      en: "Checklist of important documents needed for car loan applications.",
      hi: "कार लोन आवेदन के लिए आवश्यक महत्वपूर्ण दस्तावेज़ों की सूची।",
    },
    readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
    link: "/blog/car-loan-documents",
  },
  {
    title: {
      en: "Common Mistakes in Car Loan Applications",
      hi: "कार लोन आवेदनों में सामान्य गलतियाँ",
    },
    excerpt: {
      en: "Avoid these mistakes to improve your car loan approval chances.",
      hi: "कार लोन स्वीकृति की संभावना बढ़ाने के लिए इन गलतियों से बचें।",
    },
    readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
    link: "/blog/car-loan-application-mistakes",
  },
],

faqs: [
  {
    question: {
      en: "How long should a car loan application be?",
      hi: "कार लोन आवेदन कितना लंबा होना चाहिए?",
    },
    answer: {
      en: "One page is usually enough. Keep the information clear and professional.",
      hi: "आमतौर पर एक पेज पर्याप्त होता है। जानकारी स्पष्ट और पेशेवर रखें।",
    },
  },
  {
    question: {
      en: "Should I mention my bank account number in the application?",
      hi: "क्या मुझे आवेदन में अपना बैंक खाता नंबर लिखना चाहिए?",
    },
    answer: {
      en: "Yes, mentioning your account number helps the bank process your application faster.",
      hi: "हाँ, खाता संख्या लिखने से बैंक को आवेदन प्रक्रिया तेज़ करने में मदद मिलती है।",
    },
  },
  {
    question: {
      en: "Is income proof necessary for a car loan?",
      hi: "क्या कार लोन के लिए आय प्रमाण आवश्यक है?",
    },
    answer: {
      en: "Yes, income proof and financial documents are mandatory for car loan approval.",
      hi: "हाँ, कार लोन स्वीकृति के लिए आय प्रमाण और वित्तीय दस्तावेज़ आवश्यक होते हैं।",
    },
  },
  {
    question: {
      en: "How long does car loan approval take?",
      hi: "कार लोन स्वीकृति में कितना समय लगता है?",
    },
    answer: {
      en: "Depending on the bank and verification process, approval may take 3–7 working days.",
      hi: "बैंक और सत्यापन प्रक्रिया के अनुसार स्वीकृति में 3–7 कार्य दिवस लग सकते हैं।",
    },
  },
  {
    question: {
      en: "Can I apply for a car loan online?",
      hi: "क्या मैं कार लोन के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes, most banks and financial institutions provide online car loan application facilities.",
      hi: "हाँ, अधिकांश बैंक और वित्तीय संस्थान ऑनलाइन कार लोन आवेदन की सुविधा प्रदान करते हैं।",
    },
  },
],
};
