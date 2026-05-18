export const characterCertificateTemplate = {
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
    en: "Character Certificate Request Application",
    hi: "चरित्र प्रमाणपत्र अनुरोध आवेदन पत्र",
  },
  subtitle: {
    en: "Ready-made formats for character certificate request from school, college, employer, or police for higher education, job, visa, and other official purposes.",
    hi: "स्कूल, कॉलेज, नियोक्ता या पुलिस से उच्च शिक्षा, नौकरी, वीजा और अन्य आधिकारिक कार्यों हेतु चरित्र प्रमाणपत्र अनुरोध के तैयार प्रारूप।",
  },

  category: {
    en: "Certificate Applications",
    hi: "प्रमाणपत्र आवेदन",
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "characterCertificate",
      title: {
        en: "Character Certificate Request",
        hi: "चरित्र प्रमाणपत्र हेतु आवेदन",
      },
      description: {
        en: "Request letter for issuing character certificate.",
        hi: "चरित्र प्रमाणपत्र जारी करने हेतु आवेदन पत्र।",
      },
      bestFor: {
        en: "Job applications, admission, verification",
        hi: "नौकरी आवेदन, प्रवेश, सत्यापन",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Principal / Officer
[Institution/Authority Name]
[Address]

Subject: Request for Issuance of Character Certificate

Respected Sir/Madam,

I respectfully request you to kindly issue a Character Certificate in my name, as it is required for [job/admission/verification/other purpose]. I have completed my education/employment at your institution and have maintained good conduct and discipline throughout my tenure.

I shall be grateful if you could issue the certificate at the earliest, as it is needed for timely submission to the concerned authority.

Thank you for your kind consideration.

Sincerely,
[Your Name]
[Roll No./Employee ID]
[Department/Class, if applicable]
[Contact Number]
[Date]`,

        hi: `सेवा में,
प्रधानाचार्य / अधिकारी
[संस्थान/प्राधिकरण का नाम]
[पता]

विषय: चरित्र प्रमाण पत्र जारी करने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मुझे [नौकरी/प्रवेश/सत्यापन/अन्य उद्देश्य] हेतु चरित्र प्रमाण पत्र की आवश्यकता है। मैंने आपके संस्थान में अपनी शिक्षा/सेवापूर्ण की है तथा अपने पूरे कार्यकाल/अध्ययन अवधि के दौरान सदैव उत्तम आचरण एवं अनुशासन बनाए रखा है।

अतः आपसे विनम्र अनुरोध है कि कृपया मेरा चरित्र प्रमाण पत्र शीघ्र जारी करने की कृपा करें, ताकि मैं इसे संबंधित प्राधिकरण को समय पर प्रस्तुत कर सकूँ।

आपकी कृपा के लिए सादर धन्यवाद।

भवदीय,
[आपका नाम]
[रोल नंबर/कर्मचारी संख्या]
[कक्षा/विभाग, यदि लागू हो]
[संपर्क नंबर]
[तारीख]`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "How to Write a Character Certificate Request",
      hi: "चरित्र प्रमाणपत्र आवेदन कैसे लिखें",
    },
    tips: [
      {
        text: {
          en: "Mention whether the certificate is needed for a job, admission, visa, police verification, or another purpose.",
          hi: "प्रमाणपत्र नौकरी, प्रवेश, वीजा, पुलिस सत्यापन या किसी अन्य उद्देश्य के लिए चाहिए, यह स्पष्ट लिखें।",
        },
      },
      {
        text: {
          en: "Write your association with the institution, employer, or authority and the relevant dates.",
          hi: "संस्था, नियोक्ता या प्राधिकरण से अपना संबंध और संबंधित तारीखें लिखें।",
        },
      },
      {
        text: {
          en: "Include student ID, employee ID, or police reference number only if it applies.",
          hi: "छात्र आईडी, कर्मचारी आईडी या पुलिस संदर्भ संख्या केवल तभी लिखें जब लागू हो।",
        },
      },
      {
        text: {
          en: "Attach identity proof, address proof, photographs, and any clearance form requested by the authority.",
          hi: "पहचान प्रमाण, पता प्रमाण, फोटो और प्राधिकरण द्वारा मांगा गया क्लीयरेंस फॉर्म संलग्न करें।",
        },
      },
      {
        text: {
          en: "Use respectful wording and avoid making claims the issuing authority cannot verify.",
          hi: "सम्मानजनक भाषा रखें और ऐसे दावे न करें जिन्हें जारी करने वाला प्राधिकरण सत्यापित नहीं कर सकता।",
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
      en: "How to Apply for a Character Certificate",
      hi: "चरित्र प्रमाणपत्र के लिए आवेदन कैसे करें",
    },
    excerpt: {
      en: "Step-by-step guide to applying for a character certificate online or offline.",
      hi: "चरित्र प्रमाणपत्र के लिए ऑनलाइन या ऑफलाइन आवेदन करने की चरणबद्ध गाइड।",
    },
    readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
    link: "/blog/character-certificate-apply",
  },
  {
    title: {
      en: "Documents Required for Character Certificate",
      hi: "चरित्र प्रमाणपत्र के लिए आवश्यक दस्तावेज",
    },
    excerpt: {
      en: "Complete checklist of documents needed for character certificate applications.",
      hi: "चरित्र प्रमाणपत्र आवेदन के लिए आवश्यक दस्तावेजों की पूरी चेकलिस्ट।",
    },
    readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
    link: "/blog/character-certificate-documents",
  },
],

faqs: [
  {
    question: {
      en: "What is a Character Certificate?",
      hi: "चरित्र प्रमाणपत्र क्या है?",
    },
    answer: {
      en: "A character certificate is an official document that certifies a person's good behavior and moral character.",
      hi: "चरित्र प्रमाणपत्र एक आधिकारिक दस्तावेज है जो किसी व्यक्ति के अच्छे आचरण और नैतिक चरित्र को प्रमाणित करता है।",
    },
  },
  {
    question: {
      en: "Who can apply for a Character Certificate?",
      hi: "चरित्र प्रमाणपत्र के लिए कौन आवेदन कर सकता है?",
    },
    answer: {
      en: "Students, employees, and citizens who need proof of good conduct can apply for a character certificate.",
      hi: "छात्र, कर्मचारी और अच्छे आचरण का प्रमाण चाहने वाले नागरिक चरित्र प्रमाणपत्र के लिए आवेदन कर सकते हैं।",
    },
  },
  {
    question: {
      en: "Which documents are required for a Character Certificate?",
      hi: "चरित्र प्रमाणपत्र के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
    },
    answer: {
      en: "Usually ID proof, address proof, passport-size photographs, and application form are required.",
      hi: "आमतौर पर पहचान पत्र, पता प्रमाण, पासपोर्ट साइज फोटो और आवेदन पत्र आवश्यक होते हैं।",
    },
  },
  {
    question: {
      en: "How long does it take to get a Character Certificate?",
      hi: "चरित्र प्रमाणपत्र प्राप्त करने में कितना समय लगता है?",
    },
    answer: {
      en: "The processing time generally ranges from 3 to 15 working days depending on the authority.",
      hi: "प्राधिकरण के अनुसार प्रक्रिया में आमतौर पर 3 से 15 कार्य दिवस लगते हैं।",
    },
  },
  {
    question: {
      en: "Can I apply for a Character Certificate online?",
      hi: "क्या मैं चरित्र प्रमाणपत्र के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes, many schools, colleges, and government portals provide online application facilities.",
      hi: "हाँ, कई स्कूल, कॉलेज और सरकारी पोर्टल ऑनलाइन आवेदन की सुविधा प्रदान करते हैं।",
    },
  },
],
};
