
export const professionalResignationTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र",slug:"/letters"  },
    subcategory: { en: "Resignation Letters", hi: "त्यागपत्र",slug:"/letters/resignation"  },
    template: { en: "Official Resignation Letters", hi: "आधिकारिक त्यागपत्र",slug:""  }
  },

  title: { 
    en: "Resignation Application Letters", 
    hi: "त्यागपत्र आवेदन पत्र" 
  },

  subtitle: { 
    en: "Professional resignation letter formats including standard resignation, short notice, immediate resignation, career change, retirement, and relocation resignation.",
    hi: "पेशेवर त्यागपत्र पत्र प्रारूप—मानक त्यागपत्र, शॉर्ट नोटिस, तत्काल त्यागपत्र, करियर परिवर्तन, सेवानिवृत्ति और स्थानांतरण के लिए।"
  },

  category: { 
    en: "Resignation Letters", 
    hi: "त्यागपत्र" 
  },

  updatedDate: "January 2025",

  variations: [
    // 1. Professional Resignation Letter
    {
      id: "professionalResignation",
      title: { en: "Professional Resignation Letter", hi: "पेशेवर त्यागपत्र" },
      description: {
        en: "A formal resignation letter with a standard notice period.",
        hi: "मानक नोटिस अवधि के साथ एक औपचारिक त्यागपत्र।"
      },
      bestFor: { en: "Regular resignation", hi: "सामान्य त्यागपत्र" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
[Manager Name]
[Company Name]

Subject: Resignation from My Position

I am writing to formally resign from my position as [Your Job Title] at [Company Name]. As per my employment agreement, I will serve a notice period of [Notice Period, e.g., 30 days], with my last working day being [Last Working Date].

I would like to express my sincere gratitude for the opportunities, support, and guidance provided during my time at the company. Working with the team has been a valuable experience, and I truly appreciate the professional growth I have gained here.

I am committed to ensuring a smooth transition and will do my best to complete my responsibilities and assist in handing over my duties during the notice period.

Thank you once again for everything. I wish the company and the team continued success.

Sincerely,
[Your Name]
[Your Employee ID, if applicable]
[Your Contact Number]`,

        hi: `सेवा में,
[मैनेजर का नाम]
[कंपनी का नाम]

विषय: पद से त्यागपत्र

महोदय/महोदया,

मैं आपको सूचित करना चाहता हूँ कि मैं [कंपनी का नाम] में अपने पद [आपका पदनाम] से औपचारिक रूप से त्यागपत्र दे रहा हूँ। मेरी नियुक्ति शर्तों के अनुसार, मैं [नोटिस पीरियड, जैसे 30 दिन] का नोटिस पीरियड पूरा करूँगा, और मेरा अंतिम कार्य दिवस [अंतिम कार्य दिवस] होगा।

यह निर्णय आसान नहीं था, लेकिन मेरे करियर और व्यक्तिगत विकास हेतु आवश्यक है। मैं यहाँ मिले अवसरों, सहयोग और मार्गदर्शन के लिए आपका हार्दिक धन्यवाद करता हूँ। टीम के साथ काम करना मेरे लिए एक मूल्यवान अनुभव रहा है, और मैंने यहाँ से बहुत कुछ सीखा है।

नोटिस पीरियड के दौरान मैं अपने सभी दायित्वों को सुचारु रूप से सौंपने और ट्रांज़िशन प्रक्रिया में पूरा सहयोग देने का प्रयास करूँगा।

एक बार फिर धन्यवाद। मैं कंपनी और पूरी टीम के उज्ज्वल भविष्य की कामना करता हूँ।

सादर,
[आपका नाम]
[कर्मचारी आईडी, यदि लागू हो]
[संपर्क नंबर]`
      }
    }
  ],

  howToWrite: {
    title: { en: "How to Write a Resignation Letter", hi: "त्यागपत्र कैसे लिखें" },
    tips: [
      { text: { en: "Keep the tone respectful and professional.", hi: "लहजा सम्मानजनक और पेशेवर रखें।" } },
      { text: { en: "Mention your last working day clearly.", hi: "अपने अंतिम कार्य दिवस का स्पष्ट उल्लेख करें।" } },
      { text: { en: "Avoid complaining or negativity.", hi: "शिकायत या नकारात्मक बातें न लिखें।" } },
      { text: { en: "Offer help with the transition.", hi: "हस्तांतरण में सहायता की पेशकश करें।" } },
      { text: { en: "Express gratitude for the opportunity.", hi: "मिले अवसरों के लिए आभार व्यक्त करें।" } }
    ]
  },

  relatedTemplates: [
    {
      title: { en: "Appointment Letter", hi: "नियुक्ति पत्र" },
      description: { en: "Official joining/appointment format.", hi: "आधिकारिक नियुक्ति पत्र प्रारूप।" },
      icon: 'FileText',
      link: "/templates/appointment-letter"
    },
    {
      title: { en: "Work Handover Format", hi: "कार्य हस्तांतरण प्रारूप" },
      description: { en: "For smooth transition of responsibilities.", hi: "जिम्मेदारियों के सुचारू हस्तांतरण हेतु।" },
      icon: 'Briefcase',
      link: "/templates/work-handover"
    }
  ],

  blogArticles: [
    {
      title: { en: "How to Resign Professionally", hi: "पेशेवर तरीके से त्यागपत्र कैसे दें" },
      excerpt: { en: "Tips for a smooth and respectful exit.", hi: "सम्मानपूर्वक और सरल तरीके से त्यागपत्र देने के सुझाव।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/professional-resignation"
    },
    {
      title: { en: "Notice Period Rules in India", hi: "भारत में नोटिस पीरियड के नियम" },
      excerpt: { en: "Understand your workplace rights.", hi: "अपने कार्यस्थल के अधिकार जानें।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/notice-period-india"
    }
  ],

  faqs: [
    {
      question: { en: "How long should a resignation letter be?", hi: "त्यागपत्र कितना लंबा होना चाहिए?" },
      answer: { en: "Ideally one page, short and professional.", hi: "आमतौर पर एक पृष्ठ—संक्षिप्त और पेशेवर।" }
    },
    {
      question: { en: "Can I resign without notice?", hi: "क्या मैं बिना नोटिस के त्यागपत्र दे सकता/सकती हूँ?" },
      answer: { en: "Yes, but only in emergency or valid reasons.", hi: "हाँ, लेकिन केवल उचित कारण या आपात स्थिति में।" }
    },
    {
      question: { en: "Should I mention the reason for resignation?", hi: "क्या इस्तीफे का कारण लिखना जरूरी है?" },
      answer: { en: "Optional, but recommended for clarity.", hi: "वैकल्पिक, लेकिन स्पष्टता के लिए उचित।" }
    }
  ]
};
