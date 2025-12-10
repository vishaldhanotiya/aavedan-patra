
export const bonafideCertificateTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन" , slug:"/applications"},
    subcategory: { en: "Certificate Requests", hi: "प्रमाणपत्र आवेदन", slug:"/applications/certificate-request" },
    template: { en: "Certificate Request Letters", hi: "प्रमाणपत्र अनुरोध पत्र", slug:"" }
  },

  title: { 
    en: "Certificate Request Letters", 
    hi: "प्रमाणपत्र अनुरोध पत्र" 
  },

  subtitle: { 
    en: "Ready-made formats for experience, income, TC, bonafide, character, and caste certificate applications.",
    hi: "अनुभव, आय, टीसी, बोनाफाइड, चरित्र और जाति प्रमाणपत्र आवेदन के तैयार प्रारूप।" 
  },

  category: { 
    en: "Certificate Applications", 
    hi: "प्रमाणपत्र आवेदन" 
  },

  updatedDate: "January 2025",

  variations: [
 
    {
      id: "bonafideCertificate",
      title: { 
        en: "Bonafide Certificate Request Application", 
        hi: "बोनाफाइड प्रमाणपत्र हेतु आवेदन" 
      },
      description: {
        en: "Used for requesting bonafide certificate from school/college.",
        hi: "स्कूल/कॉलेज से बोनाफाइड प्रमाणपत्र प्राप्त करने हेतु आवेदन।"
      },
      bestFor: { 
        en: "Scholarship, admission, identity verification", 
        hi: "छात्रवृत्ति, प्रवेश, पहचान सत्यापन" 
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Principal
[School/College Name]

Subject: Application for Bonafide Certificate

Respected Sir/Madam,

I request you to kindly issue my bonafide certificate as I require it for [purpose: scholarship/passport/verification]. I am a regular student of your institution studying in class/year [Class/Year].

Please issue the certificate at the earliest.

Thank you.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
प्राचार्य महोदय/महोदया
[स्कूल/कॉलेज का नाम]

विषय: बोनाफाइड प्रमाणपत्र हेतु आवेदन

महोदय/महोदया,

कृपया मेरा बोनाफाइड प्रमाणपत्र जारी करने की कृपा करें, जो मुझे [Scholarship/पासपोर्ट/सत्यापन] हेतु आवश्यक है। मैं आपकी संस्था में कक्षा/वर्ष [Class/Year] का नियमित छात्र/छात्रा हूँ।

कृपया प्रमाणपत्र शीघ्र जारी करने की कृपा करें।

धन्यवाद।

भवदीय,
[आपका नाम]`
      }
    }
  ],

  howToWrite: {
    title: { en: "How to Write a Certificate Request Letter", hi: "प्रमाणपत्र आवेदन पत्र कैसे लिखें" },
    tips: [
      { text: { en: "Mention your purpose clearly.", hi: "अपना उद्देश्य स्पष्ट रूप से लिखें।" } },
      { text: { en: "Attach required documents.", hi: "आवश्यक दस्तावेज संलग्न करें।" } },
      { text: { en: "Keep the tone formal.", hi: "लहजे को औपचारिक रखें।" } },
      { text: { en: "Include your ID/enrollment number.", hi: "अपना आईडी/नामांकन नंबर जोड़ें।" } },
      { text: { en: "Keep letter short and clear.", hi: "पत्र को छोटा और स्पष्ट रखें।" } }
    ]
  },

  relatedTemplates: [
    {
      title: { en: "Address Proof Letter", hi: "पते का प्रमाण पत्र" },
      description: { en: "For verifying residence details.", hi: "निवास विवरण सत्यापन हेतु पत्र।" },
      icon: 'FileText',
      link: "/templates/address-proof"
    },
    {
      title: { en: "ID Proof Request Letter", hi: "पहचान प्रमाणपत्र हेतु आवेदन" },
      description: { en: "For official ID verification letters.", hi: "आधिकारिक पहचान प्रमाण हेतु पत्र।" },
      icon: 'Briefcase',
      link: "/templates/id-proof"
    },
    {
      title: { en: "NOC Application Letter", hi: "एनओसी आवेदन पत्र" },
      description: { en: "Request for No Objection Certificate.", hi: "एनओसी के लिए आवेदन।" },
      icon: 'GraduationCap',
      link: "/templates/noc-application"
    }
  ],

  blogArticles: [
    {
      title: { en: "How to Request Official Certificates", hi: "आधिकारिक प्रमाणपत्र कैसे प्राप्त करें" },
      excerpt: { en: "Step-by-step guide for applying certificates.", hi: "प्रमाणपत्र आवेदन के लिए चरणबद्ध गाइड।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/get-certificates"
    },
    {
      title: { en: "Important Documents for Certificate Applications", hi: "प्रमाणपत्र आवेदन के लिए आवश्यक दस्तावेज" },
      excerpt: { en: "Checklist for smooth application process.", hi: "सहज आवेदन प्रक्रिया के लिए चेकलिस्ट।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/certificate-documents"
    }
  ],

  faqs: [
    {
      question: { en: "How long does it take to get a certificate?", hi: "प्रमाणपत्र प्राप्त करने में कितना समय लगता है?" },
      answer: { en: "It depends on the institution—usually 2-7 days.", hi: "संस्था पर निर्भर करता है—आमतौर पर 2-7 दिन।" }
    },
    {
      question: { en: "Are documents required for all certificates?", hi: "क्या सभी प्रमाणपत्रों के लिए दस्तावेज जरूरी हैं?" },
      answer: { en: "Yes, supporting documents are usually required.", hi: "हाँ, सहायक दस्तावेज आमतौर पर आवश्यक होते हैं।" }
    },
    {
      question: { en: "Can I apply online?", hi: "क्या मैं ऑनलाइन आवेदन कर सकता/सकती हूँ?" },
      answer: { en: "Yes, many institutions provide online application options.", hi: "हाँ, कई संस्थाएँ ऑनलाइन आवेदन की सुविधा देती हैं।" }
    }
  ]
};
