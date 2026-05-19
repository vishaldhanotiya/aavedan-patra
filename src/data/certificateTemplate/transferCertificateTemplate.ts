export const transferCertificateTemplate = {
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
    en: "Transfer Certificate (TC) Request Application",
    hi: "स्थानांतरण प्रमाणपत्र (टीसी) अनुरोध आवेदन पत्र",
  },
  subtitle: {
    en: "Ready-made formats for TC request from school, college, or university for admission to another institution, school transfer, or relocation purposes.",
    hi: "किसी अन्य संस्थान में प्रवेश, स्कूल स्थानांतरण या स्थान परिवर्तन हेतु स्कूल, कॉलेज या विश्वविद्यालय से टीसी अनुरोध के तैयार प्रारूप।",
  },

  category: {
    en: "Certificate Applications",
    hi: "प्रमाणपत्र आवेदन",
  },

  pageMetaData: {
    author:{ en:"Vishal Dhanotiya", hi:"विशाल धनोतिया" },
    updatedAt: "January 2025",
    views: "1200",
    likes: "85",
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "transferCertificate",
      title: {
        en: "Transfer Certificate (TC) Request Application",
        hi: "ट्रांसफर सर्टिफिकेट (TC) हेतु आवेदन",
      },
      description: {
        en: "Used for requesting a Transfer Certificate from school or college.",
        hi: "स्कूल/कॉलेज से टीसी प्राप्त करने हेतु आवेदन।",
      },
      bestFor: {
        en: "School transfer, relocation",
        hi: "स्कूल परिवर्तन, स्थानांतरण",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Principal
[School/College Name]
[Address]

Subject: Request for Transfer Certificate (TC)

Respected Sir/Madam,

I respectfully request you to kindly issue the Transfer Certificate for my ward, [Student Name], who is currently studying in Class [Class]. As our family is relocating to [New City], it has become necessary to seek admission in a new institution.

All school dues and formalities have been duly completed. I would be grateful if you could issue the Transfer Certificate at your earliest convenience, as it is required for the admission process.

Thank you for your kind cooperation.

Sincerely,
[Parent/Guardian Name]
[Contact Number]`,

        hi: `सेवा में,
प्रधानाचार्य महोदय/महोदया
[विद्यालय/कॉलेज का नाम]
[पता]

विषय: ट्रांसफ़र सर्टिफ़िकेट (TC) जारी करने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि कृपया मेरे वार्ड [Student Name], कक्षा [Class] के छात्र/छात्रा के लिए ट्रांसफ़र सर्टिफ़िकेट जारी करने की कृपा करें। हमारा परिवार [New City] स्थानांतरित हो रहा है, जिसके कारण मेरे वार्ड का प्रवेश अन्य विद्यालय में कराना आवश्यक है।

विद्यालय की सभी देय राशि एवं औपचारिकताएँ पूर्ण कर दी गई हैं। अतः आपसे विनम्र अनुरोध है कि कृपया शीघ्रातिशीघ्र टी.सी. प्रदान करने की कृपा करें, जिससे आगे की प्रवेश प्रक्रिया समय पर पूरी की जा सके।

आपकी कृपा के लिए सदैव आभारी रहूँगा/रहूँगी।

भवदीय,
[Parent/Guardian Name]
[संपर्क संख्या]`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "How to Write a Transfer Certificate Request",
      hi: "ट्रांसफर सर्टिफिकेट आवेदन कैसे लिखें",
    },
    tips: [
      {
        text: {
          en: "Mention the student's name, class, roll number, and admission number clearly.",
          hi: "विद्यार्थी का नाम, कक्षा, रोल नंबर और प्रवेश संख्या स्पष्ट रूप से लिखें।",
        },
      },
      {
        text: {
          en: "State the reason for leaving, such as relocation, new admission, or school change.",
          hi: "स्थान परिवर्तन, नए प्रवेश या स्कूल बदलने जैसे छोड़ने का कारण लिखें।",
        },
      },
      {
        text: {
          en: "Confirm that fees, library books, and other school dues have been cleared.",
          hi: "फीस, पुस्तकालय की पुस्तकें और अन्य स्कूल बकाया जमा होने की पुष्टि करें।",
        },
      },
      {
        text: {
          en: "Attach parent ID proof, fee clearance receipt, and previous report card if requested.",
          hi: "यदि मांगा जाए तो अभिभावक पहचान प्रमाण, फीस क्लीयरेंस रसीद और पिछला रिपोर्ट कार्ड संलग्न करें।",
        },
      },
      {
        text: {
          en: "Request the TC, conduct certificate, and marksheet together if the new school needs them.",
          hi: "यदि नए स्कूल को आवश्यकता हो तो टीसी, आचरण प्रमाणपत्र और मार्कशीट साथ में मांगें।",
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
      en: "How to Apply for a Transfer Certificate",
      hi: "स्थानांतरण प्रमाणपत्र के लिए आवेदन कैसे करें",
    },
    excerpt: {
      en: "Step-by-step guide to applying for a transfer certificate from your school or college.",
      hi: "अपने स्कूल या कॉलेज से स्थानांतरण प्रमाणपत्र प्राप्त करने के लिए चरणबद्ध गाइड।",
    },
    readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
    link: "/blog/transfer-certificate-apply",
  },
  {
    title: {
      en: "Documents Required for Transfer Certificate",
      hi: "स्थानांतरण प्रमाणपत्र के लिए आवश्यक दस्तावेज",
    },
    excerpt: {
      en: "Complete checklist of documents needed for transfer certificate applications.",
      hi: "स्थानांतरण प्रमाणपत्र आवेदन के लिए आवश्यक दस्तावेजों की पूरी चेकलिस्ट।",
    },
    readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
    link: "/blog/transfer-certificate-documents",
  },
],

faqs: [
  {
    question: {
      en: "What is a Transfer Certificate?",
      hi: "स्थानांतरण प्रमाणपत्र क्या है?",
    },
    answer: {
      en: "A transfer certificate is an official document issued by a school or college when a student leaves the institution.",
      hi: "स्थानांतरण प्रमाणपत्र एक आधिकारिक दस्तावेज है जो किसी छात्र के संस्था छोड़ने पर स्कूल या कॉलेज द्वारा जारी किया जाता है।",
    },
  },
  {
    question: {
      en: "Who can apply for a Transfer Certificate?",
      hi: "स्थानांतरण प्रमाणपत्र के लिए कौन आवेदन कर सकता है?",
    },
    answer: {
      en: "Students or their parents/guardians can apply for a transfer certificate from the institution.",
      hi: "छात्र या उनके माता-पिता/अभिभावक संस्था से स्थानांतरण प्रमाणपत्र के लिए आवेदन कर सकते हैं।",
    },
  },
  {
    question: {
      en: "Which documents are required for a Transfer Certificate?",
      hi: "स्थानांतरण प्रमाणपत्र के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
    },
    answer: {
      en: "Usually student ID, fee clearance receipt, application form, and identity proof are required.",
      hi: "आमतौर पर छात्र आईडी, फीस क्लियरेंस रसीद, आवेदन पत्र और पहचान प्रमाण आवश्यक होते हैं।",
    },
  },
  {
    question: {
      en: "How long does it take to get a Transfer Certificate?",
      hi: "स्थानांतरण प्रमाणपत्र प्राप्त करने में कितना समय लगता है?",
    },
    answer: {
      en: "The process usually takes 3 to 10 working days depending on the institution.",
      hi: "संस्था के अनुसार प्रक्रिया में आमतौर पर 3 से 10 कार्य दिवस लगते हैं।",
    },
  },
  {
    question: {
      en: "Can I apply for a Transfer Certificate online?",
      hi: "क्या मैं स्थानांतरण प्रमाणपत्र के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes, many schools and colleges provide online transfer certificate application facilities.",
      hi: "हाँ, कई स्कूल और कॉलेज ऑनलाइन स्थानांतरण प्रमाणपत्र आवेदन की सुविधा प्रदान करते हैं।",
    },
  },
],
};
