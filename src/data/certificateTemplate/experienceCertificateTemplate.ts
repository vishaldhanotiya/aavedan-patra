export const experienceCertificateTemplate = {
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
    en: "Experience Certificate Request Letter",
    hi: "अनुभव प्रमाणपत्र अनुरोध पत्र",
  },
  subtitle: {
    en: "Ready-made formats for experience certificate request from employer or company for new job applications, higher studies, or visa purposes.",
    hi: "नई नौकरी के आवेदन, उच्च शिक्षा या वीजा उद्देश्यों हेतु नियोक्ता या कंपनी से अनुभव प्रमाणपत्र अनुरोध के तैयार प्रारूप।",
  },

  category: {
    en: "Certificate Applications",
    hi: "प्रमाणपत्र आवेदन",
  },
  
  pageMetaData: {
    author: "Vishal Dhanotiya",
    updatedAt: "January 2025",
    views: "1200",
    likes: "85",
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "experienceCertificate",
      title: {
        en: "Experience Certificate Request Letter",
        hi: "अनुभव प्रमाणपत्र हेतु आवेदन पत्र",
      },
      description: {
        en: "For employees requesting an experience certificate from employer.",
        hi: "कर्मचारियों द्वारा नियोक्ता से अनुभव प्रमाणपत्र हेतु आवेदन।",
      },
      bestFor: {
        en: "Job change, proof of work experience",
        hi: "नौकरी परिवर्तन, अनुभव प्रमाण हेतु",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The HR Manager
[Company Name]
[City]

Subject: Request for Issuance of Experience Certificate

Respected Sir/Madam,

I humbly request you to kindly issue my Experience Certificate for the period of my employment with your esteemed organisation, from [Start Date] to [End Date]. I require this document to complete the verification process for my upcoming employment.

I have fulfilled all assigned duties during my tenure and have completed the necessary exit formalities. I would be grateful if the certificate could be provided at your earliest convenience.

Thank you for your support and cooperation.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
मानव संसाधन प्रबंधक
[कंपनी का नाम]
[शहर]

विषय: अनुभव प्रमाण पत्र जारी करने हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि कृपया मेरे द्वारा आपकी प्रतिष्ठित संस्था में [आरंभ तिथि] से [समाप्ति तिथि] तक की गई सेवा अवधि का अनुभव प्रमाण पत्रप्रदान करने की कृपा करें। यह प्रमाण पत्र मेरे भविष्य के रोजगार से संबंधित औपचारिकताओं हेतु आवश्यक है।

मैंने अपने कार्यकाल के दौरान सभी सौंपे गए दायित्वों का पूर्ण रूप से निर्वहन किया है तथा संबंधित औपचारिकताएँ भी पूरी कर दी हैं। अतः आपसे विनम्र अनुरोध है कि कृपया यथाशीघ्र अनुभव प्रमाण पत्र उपलब्ध कराने का कष्ट करें।

आपकी कृपा के लिए सदा आभारी रहूँगा/रहूँगी।

भवदीय,
[आपका नाम]
`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "How to Write an Experience Certificate Request",
      hi: "अनुभव प्रमाणपत्र आवेदन कैसे लिखें",
    },
    tips: [
      {
        text: {
          en: "Mention your employee ID, designation, department, joining date, and last working day.",
          hi: "अपना कर्मचारी आईडी, पद, विभाग, जॉइनिंग तारीख और अंतिम कार्य दिवस लिखें।",
        },
      },
      {
        text: {
          en: "State why you need the certificate, such as a new job, higher studies, visa, or professional record.",
          hi: "नौकरी, उच्च शिक्षा, वीजा या पेशेवर रिकॉर्ड जैसे प्रमाणपत्र की आवश्यकता का कारण लिखें।",
        },
      },
      {
        text: {
          en: "Attach resignation acceptance, relieving letter, salary slip, or clearance confirmation if available.",
          hi: "यदि उपलब्ध हो तो इस्तीफा स्वीकृति, रिलीविंग लेटर, वेतन पर्ची या क्लीयरेंस पुष्टि संलग्न करें।",
        },
      },
      {
        text: {
          en: "Request HR or the reporting manager to include role, duration, conduct, and key responsibilities.",
          hi: "HR या रिपोर्टिंग मैनेजर से पद, अवधि, आचरण और मुख्य जिम्मेदारियाँ शामिल करने का अनुरोध करें।",
        },
      },
      {
        text: {
          en: "Keep the tone professional and mention any urgent submission deadline politely.",
          hi: "भाषा पेशेवर रखें और यदि कोई अंतिम तारीख हो तो विनम्रता से लिखें।",
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
      en: "How to Apply for an Experience Certificate",
      hi: "अनुभव प्रमाणपत्र के लिए आवेदन कैसे करें",
    },
    excerpt: {
      en: "Step-by-step guide to requesting an experience certificate from your employer.",
      hi: "अपने नियोक्ता से अनुभव प्रमाणपत्र प्राप्त करने के लिए चरणबद्ध गाइड।",
    },
    readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
    link: "/blog/experience-certificate-apply",
  },
  {
    title: {
      en: "Documents Required for Experience Certificate",
      hi: "अनुभव प्रमाणपत्र के लिए आवश्यक दस्तावेज",
    },
    excerpt: {
      en: "Complete checklist of documents needed for experience certificate applications.",
      hi: "अनुभव प्रमाणपत्र आवेदन के लिए आवश्यक दस्तावेजों की पूरी चेकलिस्ट।",
    },
    readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
    link: "/blog/experience-certificate-documents",
  },
],

faqs: [
  {
    question: {
      en: "What is an Experience Certificate?",
      hi: "अनुभव प्रमाणपत्र क्या है?",
    },
    answer: {
      en: "An experience certificate is an official document issued by an employer that confirms an employee's job role and work duration.",
      hi: "अनुभव प्रमाणपत्र एक आधिकारिक दस्तावेज है जो नियोक्ता द्वारा जारी किया जाता है और कर्मचारी की नौकरी की भूमिका तथा कार्य अवधि की पुष्टि करता है।",
    },
  },
  {
    question: {
      en: "Who can apply for an Experience Certificate?",
      hi: "अनुभव प्रमाणपत्र के लिए कौन आवेदन कर सकता है?",
    },
    answer: {
      en: "Any current or former employee can request an experience certificate from their employer.",
      hi: "कोई भी वर्तमान या पूर्व कर्मचारी अपने नियोक्ता से अनुभव प्रमाणपत्र के लिए अनुरोध कर सकता है।",
    },
  },
  {
    question: {
      en: "Which documents are required for an Experience Certificate?",
      hi: "अनुभव प्रमाणपत्र के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
    },
    answer: {
      en: "Usually employee ID, joining details, resignation letter, and identification proof are required.",
      hi: "आमतौर पर कर्मचारी आईडी, जॉइनिंग विवरण, इस्तीफा पत्र और पहचान प्रमाण आवश्यक होते हैं।",
    },
  },
  {
    question: {
      en: "How long does it take to get an Experience Certificate?",
      hi: "अनुभव प्रमाणपत्र प्राप्त करने में कितना समय लगता है?",
    },
    answer: {
      en: "The process usually takes 3 to 10 working days depending on the company policies.",
      hi: "कंपनी की नीतियों के अनुसार प्रक्रिया में आमतौर पर 3 से 10 कार्य दिवस लगते हैं।",
    },
  },
  {
    question: {
      en: "Can I apply for an Experience Certificate online?",
      hi: "क्या मैं अनुभव प्रमाणपत्र के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes, many companies provide online HR portals or email-based request systems.",
      hi: "हाँ, कई कंपनियाँ ऑनलाइन HR पोर्टल या ईमेल आधारित अनुरोध प्रणाली प्रदान करती हैं।",
    },
  },
],
};
