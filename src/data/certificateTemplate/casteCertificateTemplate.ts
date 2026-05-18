export const casteCertificateTemplate = {
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
    en: "Caste Certificate Application",
    hi: "जाति प्रमाणपत्र आवेदन पत्र",
  },
  subtitle: {
    en: "Ready-made formats for caste certificate application for government schemes, education, job, and other official purposes.",
    hi: "सरकारी योजनाओं, शिक्षा, नौकरी और अन्य आधिकारिक कार्यों हेतु जाति प्रमाणपत्र आवेदन के तैयार प्रारूप।",
  },

  category: {
    en: "Certificate Applications",
    hi: "प्रमाणपत्र आवेदन",
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "casteCertificate",
      title: {
        en: "Caste Certificate Application",
        hi: "जाति प्रमाणपत्र हेतु आवेदन",
      },
      description: {
        en: "Application for requesting caste certificate from government authorities.",
        hi: "सरकारी अधिकारियों से जाति प्रमाणपत्र हेतु आवेदन।",
      },
      bestFor: {
        en: "SC/ST/OBC category verification",
        hi: "SC/ST/OBC वर्ग सत्यापन",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
The Tehsildar / SDM Office
[District Name]
[Address, if needed]

Subject: Request for Issuance of Caste Certificate

Respected Sir/Madam,

I respectfully request the issuance of my Caste Certificate, as I belong to the [SC / ST / OBC] category. The certificate is required for government schemes, reservation benefits, educational purposes, and other official documentation.

I am enclosing all necessary supporting documents, including identity proof, address proof, and category-related records, for your kind verification. I shall be grateful if my application is processed at the earliest, as the document is required within the stipulated time.

Thank you for your consideration.

Sincerely,
[Your Name]
[Address]
[Contact Number]
[Date]

`,

        hi: `सेवा में,
तहसीलदार / एस.डी.एम. कार्यालय
[ज़िला नाम]
[पता (ऐच्छिक)]

विषय: जाति प्रमाण पत्र जारी करने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं [SC / ST / OBC] श्रेणी से संबंधित हूँ। अतः कृपया मेरे नाम से जाति प्रमाण पत्र जारी करने की कृपा करें। यह प्रमाण पत्र सरकारी योजनाओं, आरक्षण लाभों, शैक्षणिक प्रक्रियाओं एवं अन्य आधिकारिक आवश्यकताओं के लिए आवश्यक है।

सत्यापन हेतु पहचान पत्र, पते का प्रमाण तथा श्रेणी संबंधी सभी आवश्यक दस्तावेज़ संलग्न कर रहा/रही हूँ। आपसे विनम्र अनुरोध है कि कृपया मेरे आवेदन पर शीघ्र कार्रवाई कर प्रमाण पत्र प्रदान करने की कृपा करें, ताकि मैं इसे निर्धारित समय में संबंधित विभाग में प्रस्तुत कर सकूँ।

आपकी कृपा के लिए सादर धन्यवाद।

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
      en: "How to Write a Caste Certificate Application",
      hi: "जाति प्रमाणपत्र आवेदन कैसे लिखें",
    },
    tips: [
      {
        text: {
          en: "Mention the caste/community name and category exactly as used in official records.",
          hi: "आधिकारिक रिकॉर्ड में दर्ज जाति/समुदाय का नाम और श्रेणी सही-सही लिखें।",
        },
      },
      {
        text: {
          en: "State the purpose, such as reservation, scholarship, admission, job, or government scheme.",
          hi: "आरक्षण, छात्रवृत्ति, प्रवेश, नौकरी या सरकारी योजना जैसे उद्देश्य को स्पष्ट करें।",
        },
      },
      {
        text: {
          en: "Attach Aadhaar, address proof, family caste certificate, ration card, and school records if required.",
          hi: "आधार, पता प्रमाण, परिवार का जाति प्रमाणपत्र, राशन कार्ड और स्कूल रिकॉर्ड यदि आवश्यक हों तो संलग्न करें।",
        },
      },
      {
        text: {
          en: "Submit the request to the correct revenue authority, Tehsildar, SDM, or state portal.",
          hi: "आवेदन सही राजस्व अधिकारी, तहसीलदार, एसडीएम या राज्य पोर्टल पर जमा करें।",
        },
      },
      {
        text: {
          en: "Make sure names, father's name, address, and category match across all documents.",
          hi: "सभी दस्तावेजों में नाम, पिता का नाम, पता और श्रेणी समान हों, यह सुनिश्चित करें।",
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
        en: "How to Apply for a Caste Certificate",
        hi: "जाति प्रमाणपत्र के लिए आवेदन कैसे करें",
      },
      excerpt: {
        en: "Step-by-step guide to applying for a caste certificate online or offline.",
        hi: "जाति प्रमाणपत्र के लिए ऑनलाइन या ऑफलाइन आवेदन करने की चरणबद्ध गाइड।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/caste-certificate-apply",
    },
    {
      title: {
        en: "Documents Required for Caste Certificate",
        hi: "जाति प्रमाणपत्र के लिए आवश्यक दस्तावेज",
      },
      excerpt: {
        en: "Complete checklist of documents needed for caste certificate applications.",
        hi: "जाति प्रमाणपत्र आवेदन के लिए आवश्यक दस्तावेजों की पूरी चेकलिस्ट।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/caste-certificate-documents",
    },
  ],

  faqs: [
    {
      question: {
        en: "What is a Caste Certificate?",
        hi: "जाति प्रमाणपत्र क्या है?",
      },
      answer: {
        en: "A caste certificate is an official document issued by the government to certify a person's caste category.",
        hi: "जाति प्रमाणपत्र सरकार द्वारा जारी किया गया एक आधिकारिक दस्तावेज है जो किसी व्यक्ति की जाति श्रेणी को प्रमाणित करता है।",
      },
    },
    {
      question: {
        en: "Who can apply for a Caste Certificate?",
        hi: "जाति प्रमाणपत्र के लिए कौन आवेदन कर सकता है?",
      },
      answer: {
        en: "Any eligible citizen belonging to SC, ST, or OBC categories can apply for a caste certificate.",
        hi: "एससी, एसटी या ओबीसी श्रेणी से संबंधित कोई भी पात्र नागरिक जाति प्रमाणपत्र के लिए आवेदन कर सकता है।",
      },
    },
    {
      question: {
        en: "Which documents are required for a Caste Certificate?",
        hi: "जाति प्रमाणपत्र के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
      },
      answer: {
        en: "Usually Aadhaar card, address proof, identity proof, and supporting caste documents are required.",
        hi: "आमतौर पर आधार कार्ड, पता प्रमाण, पहचान प्रमाण और जाति संबंधी सहायक दस्तावेज आवश्यक होते हैं।",
      },
    },
    {
      question: {
        en: "How long does it take to get a Caste Certificate?",
        hi: "जाति प्रमाणपत्र प्राप्त करने में कितना समय लगता है?",
      },
      answer: {
        en: "The processing time generally ranges from 7 to 21 working days depending on the state authority.",
        hi: "राज्य प्राधिकरण के अनुसार प्रक्रिया में आमतौर पर 7 से 21 कार्य दिवस लगते हैं।",
      },
    },
    {
      question: {
        en: "Can I apply for a Caste Certificate online?",
        hi: "क्या मैं जाति प्रमाणपत्र के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
      },
      answer: {
        en: "Yes, many state government portals provide online caste certificate application services.",
        hi: "हाँ, कई राज्य सरकार पोर्टल ऑनलाइन जाति प्रमाणपत्र आवेदन की सुविधा प्रदान करते हैं।",
      },
    },
  ],
};
