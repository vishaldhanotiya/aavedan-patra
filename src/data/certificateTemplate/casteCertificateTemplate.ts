
export const casteCertificateTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
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
      id: "casteCertificate",
      title: { 
        en: "Caste Certificate Application", 
        hi: "जाति प्रमाणपत्र हेतु आवेदन" 
      },
      description: {
        en: "Application for requesting caste certificate from government authorities.",
        hi: "सरकारी अधिकारियों से जाति प्रमाणपत्र हेतु आवेदन।"
      },
      bestFor: { 
        en: "SC/ST/OBC category verification", 
        hi: "SC/ST/OBC वर्ग सत्यापन" 
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
The Tehsildar/SDM Office
[District Name]

Subject: Application for Caste Certificate

Respected Sir/Madam,

I request you to issue my caste certificate as I belong to the [SC/ST/OBC] category. This document is required for government schemes, reservation benefits, and educational purposes.

I have attached all necessary proof documents for verification. Kindly process my application.

Thank you.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
तहसीलदार/एसडीएम कार्यालय
[जिले का नाम]

विषय: जाति प्रमाणपत्र हेतु आवेदन

महोदय/महोदया,

कृपया मेरा जाति प्रमाणपत्र जारी करने की कृपा करें। मैं [SC/ST/OBC] वर्ग से संबंधित हूँ और यह दस्तावेज सरकारी योजनाओं, आरक्षण लाभ और शैक्षणिक उद्देश्यों के लिए आवश्यक है।

सत्यापन हेतु सभी आवश्यक दस्तावेज संलग्न हैं। कृपया मेरे आवेदन पर शीघ्र कार्रवाई करें।

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
