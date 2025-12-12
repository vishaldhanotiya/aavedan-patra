
export const transferCertificateTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Certificate Requests", hi: "प्रमाणपत्र आवेदन", slug:"/applications/certificate-request"  },
    template: { en: "Certificate Request Letters", hi: "प्रमाणपत्र अनुरोध पत्र", slug:""  }
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
      id: "transferCertificate",
      title: { 
        en: "Transfer Certificate (TC) Request Application", 
        hi: "ट्रांसफर सर्टिफिकेट (TC) हेतु आवेदन" 
      },
      description: {
        en: "Used for requesting a Transfer Certificate from school or college.",
        hi: "स्कूल/कॉलेज से टीसी प्राप्त करने हेतु आवेदन।"
      },
      bestFor: { 
        en: "School transfer, relocation", 
        hi: "स्कूल परिवर्तन, स्थानांतरण" 
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
[संपर्क संख्या]`
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
