export const incomeCertificateTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug: "/applications" },
    subcategory: {
      en: "Certificate Requests",
      hi: "प्रमाणपत्र आवेदन",
      slug: "/applications/certificate",
    },
    template: {
      en: "Certificate Request Letters",
      hi: "प्रमाणपत्र अनुरोध पत्र",
      slug: "",
    },
  },

  title: {
    en: "Income Certificate Application",
    hi: "आय प्रमाणपत्र आवेदन पत्र",
  },

  subtitle: {
    en: "Ready-made formats for experience, income, TC, bonafide, character, and caste certificate applications.",
    hi: "अनुभव, आय, टीसी, बोनाफाइड, चरित्र और जाति प्रमाणपत्र आवेदन के तैयार प्रारूप।",
  },

  category: {
    en: "Certificate Applications",
    hi: "प्रमाणपत्र आवेदन",
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "incomeCertificate",
      title: {
        en: "Income Certificate Application",
        hi: "आय प्रमाणपत्र हेतु आवेदन",
      },
      description: {
        en: "Used to request an income certificate from government offices.",
        hi: "सरकारी कार्यालय से आय प्रमाणपत्र प्राप्त करने हेतु आवेदन।",
      },
      bestFor: {
        en: "Scholarship, govt schemes, financial aid",
        hi: "छात्रवृत्ति, सरकारी योजनाएँ, आर्थिक सहायता",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
The Tehsildar / SDM Office
[District Name]

Subject: Request for Issuance of Income Certificate

Respected Sir/Madam,

I respectfully request the issuance of my Income Certificate, which is required for [scholarship/government scheme/admission/other purpose]. The total annual income of my family is approximately [amount].

I am enclosing the required documents, including identity proof, address proof, and income-related records, for your kind verification. I shall be grateful if you could kindly process my application at the earliest, as the certificate is needed within the stipulated time.

Thank you for your consideration.

Sincerely,
[Your Name]
[Address]
[Contact Number]
[Date]`,

        hi: `सेवा में,
तहसीलदार / एस.डी.एम. कार्यालय
[ज़िला नाम]

विषय: आय प्रमाण पत्र जारी करने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मुझे [छात्रवृत्ति/सरकारी योजना/प्रवेश/अन्य कारण] हेतु आय प्रमाण पत्र की आवश्यकता है। मेरे परिवार की कुल वार्षिक आय लगभग [राशि] है।

मैं सत्यापन हेतु आवश्यक दस्तावेज़—जैसे पहचान पत्र, पते का प्रमाण तथा आय से संबंधित अभिलेख—संलग्न कर रहा/रही हूँ। अतः आपसे विनम्र अनुरोध है कि कृपया मेरे आवेदन पर शीघ्र कार्रवाई कर आय प्रमाण पत्र प्रदान करने की कृपा करें।

आपकी कृपा के लिए सधन्यवाद।

भवदीय,
[आपका नाम]
[पता]
[संपर्क नंबर]
[तारीख]`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "How to Write a Certificate Request Letter",
      hi: "प्रमाणपत्र आवेदन पत्र कैसे लिखें",
    },
    tips: [
      {
        text: {
          en: "Mention your purpose clearly.",
          hi: "अपना उद्देश्य स्पष्ट रूप से लिखें।",
        },
      },
      {
        text: {
          en: "Attach required documents.",
          hi: "आवश्यक दस्तावेज संलग्न करें।",
        },
      },
      { text: { en: "Keep the tone formal.", hi: "लहजे को औपचारिक रखें।" } },
      {
        text: {
          en: "Include your ID/enrollment number.",
          hi: "अपना आईडी/नामांकन नंबर जोड़ें।",
        },
      },
      {
        text: {
          en: "Keep letter short and clear.",
          hi: "पत्र को छोटा और स्पष्ट रखें।",
        },
      },
    ],
  },

  relatedTemplates: [
    {
      title: { en: "Address Proof Letter", hi: "पते का प्रमाण पत्र" },
      description: {
        en: "For verifying residence details.",
        hi: "निवास विवरण सत्यापन हेतु पत्र।",
      },
      icon: "FileText",
      link: "/templates/address-proof",
    },
    {
      title: {
        en: "ID Proof Request Letter",
        hi: "पहचान प्रमाणपत्र हेतु आवेदन",
      },
      description: {
        en: "For official ID verification letters.",
        hi: "आधिकारिक पहचान प्रमाण हेतु पत्र।",
      },
      icon: "Briefcase",
      link: "/templates/id-proof",
    },
    {
      title: { en: "NOC Application Letter", hi: "एनओसी आवेदन पत्र" },
      description: {
        en: "Request for No Objection Certificate.",
        hi: "एनओसी के लिए आवेदन।",
      },
      icon: "GraduationCap",
      link: "/templates/noc-application",
    },
  ],
blogArticles: [
  {
    title: {
      en: "How to Apply for an Income Certificate",
      hi: "आय प्रमाणपत्र के लिए आवेदन कैसे करें",
    },
    excerpt: {
      en: "Step-by-step guide to applying for an income certificate online or offline.",
      hi: "आय प्रमाणपत्र के लिए ऑनलाइन या ऑफलाइन आवेदन करने की चरणबद्ध गाइड।",
    },
    readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
    link: "/blog/income-certificate-apply",
  },
  {
    title: {
      en: "Documents Required for Income Certificate",
      hi: "आय प्रमाणपत्र के लिए आवश्यक दस्तावेज",
    },
    excerpt: {
      en: "Complete checklist of documents needed for income certificate applications.",
      hi: "आय प्रमाणपत्र आवेदन के लिए आवश्यक दस्तावेजों की पूरी चेकलिस्ट।",
    },
    readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
    link: "/blog/income-certificate-documents",
  },
],

faqs: [
  {
    question: {
      en: "What is an Income Certificate?",
      hi: "आय प्रमाणपत्र क्या है?",
    },
    answer: {
      en: "An income certificate is an official government document that certifies a person's or family's annual income.",
      hi: "आय प्रमाणपत्र एक सरकारी आधिकारिक दस्तावेज है जो किसी व्यक्ति या परिवार की वार्षिक आय को प्रमाणित करता है।",
    },
  },
  {
    question: {
      en: "Who can apply for an Income Certificate?",
      hi: "आय प्रमाणपत्र के लिए कौन आवेदन कर सकता है?",
    },
    answer: {
      en: "Any eligible citizen who needs proof of income for government schemes, education, or financial purposes can apply.",
      hi: "सरकारी योजनाओं, शिक्षा या वित्तीय उद्देश्यों के लिए आय प्रमाण की आवश्यकता रखने वाला कोई भी पात्र नागरिक आवेदन कर सकता है।",
    },
  },
  {
    question: {
      en: "Which documents are required for an Income Certificate?",
      hi: "आय प्रमाणपत्र के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
    },
    answer: {
      en: "Usually Aadhaar card, address proof, salary slip, bank statement, and income proof documents are required.",
      hi: "आमतौर पर आधार कार्ड, पता प्रमाण, वेतन पर्ची, बैंक स्टेटमेंट और आय संबंधी दस्तावेज आवश्यक होते हैं।",
    },
  },
  {
    question: {
      en: "How long does it take to get an Income Certificate?",
      hi: "आय प्रमाणपत्र प्राप्त करने में कितना time लगता है?",
    },
    answer: {
      en: "The processing time generally ranges from 7 to 15 working days depending on the state authority.",
      hi: "राज्य प्राधिकरण के अनुसार प्रक्रिया में आमतौर पर 7 से 15 कार्य दिवस लगते हैं।",
    },
  },
  {
    question: {
      en: "Can I apply for an Income Certificate online?",
      hi: "क्या मैं आय प्रमाणपत्र के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes, many state government portals provide online income certificate application services.",
      hi: "हाँ, कई राज्य सरकार पोर्टल ऑनलाइन आय प्रमाणपत्र आवेदन की सुविधा प्रदान करते हैं।",
    },
  },
],
};
