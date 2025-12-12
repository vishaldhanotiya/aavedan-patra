
export const experienceCertificateTemplate = {
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
      id: "experienceCertificate",
      title: { 
        en: "Experience Certificate Request Letter", 
        hi: "अनुभव प्रमाणपत्र हेतु आवेदन पत्र" 
      },
      description: {
        en: "For employees requesting an experience certificate from employer.",
        hi: "कर्मचारियों द्वारा नियोक्ता से अनुभव प्रमाणपत्र हेतु आवेदन।"
      },
      bestFor: { 
        en: "Job change, proof of work experience", 
        hi: "नौकरी परिवर्तन, अनुभव प्रमाण हेतु" 
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
`
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
