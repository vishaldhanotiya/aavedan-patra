
export const relocationResignationTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र",slug:"/letters"  },
    subcategory: { en: "Resignation Letters", hi: "इस्तीफा पत्र",slug:"/letters/resignation"  },
    template: { en: "Official Resignation Letters", hi: "आधिकारिक इस्तीफा पत्र",slug:""  }
  },

  title: { 
    en: "Resignation Application Letters", 
    hi: "इस्तीफा आवेदन पत्र" 
  },

  subtitle: { 
    en: "Professional resignation letter formats including standard resignation, short notice, immediate resignation, career change, retirement, and relocation resignation.",
    hi: "पेशेवर इस्तीफा पत्र प्रारूप—मानक इस्तीफा, शॉर्ट नोटिस, तत्काल इस्तीफा, करियर परिवर्तन, सेवानिवृत्ति और स्थानांतरण के लिए।"
  },

  category: { 
    en: "Resignation Letters", 
    hi: "इस्तीफा पत्र" 
  },

  updatedDate: "January 2025",

  variations: [

    // 6. Relocation Resignation
    {
      id: "relocationResignation",
      title: { en: "Relocation Resignation Letter", hi: "स्थानांतरण के कारण इस्तीफा पत्र" },
      description: {
        en: "Used when resigning due to moving to another city or country.",
        hi: "अन्य शहर/देश में स्थानांतरण के कारण दिया गया इस्तीफा।"
      },
      bestFor: { en: "Relocation", hi: "स्थानांतरण" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
[Manager Name]
[Company Name]

Subject: Resignation Due to Relocation

Respected Sir/Madam,

I hereby submit my resignation from the position of [Your Position], effective from [Last Working Day], as I am relocating to [New City/Country]. Due to this relocation, I will not be able to continue my employment.

I assure full cooperation in completing my responsibilities before leaving. Kindly process my resignation.

Thank you for your understanding.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
[मैनेजर का नाम]
[कंपनी का नाम]

विषय: स्थानांतरण के कारण इस्तीफा

महोदय/महोदया,

मैं [अंतिम कार्य दिवस] से [आपका पद] से अपना इस्तीफा प्रस्तुत करता/करती हूँ, क्योंकि मैं [नया शहर/देश] स्थानांतरित हो रहा/रही हूँ। इस कारण मैं अपने वर्तमान पद पर कार्य जारी नहीं रख सकूँगा/सकूँगी।

मैं प्रस्थान से पूर्व सभी कार्यों का उचित हस्तांतरण सुनिश्चित करूँगा/करूँगी। कृपया मेरा इस्तीफा स्वीकार करने की कृपा करें।

धन्यवाद।

भवदीय,
[आपका नाम]`
      }
    }
  ],

  howToWrite: {
    title: { en: "How to Write a Resignation Letter", hi: "इस्तीफा पत्र कैसे लिखें" },
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
      title: { en: "How to Resign Professionally", hi: "पेशेवर तरीके से इस्तीफा कैसे दें" },
      excerpt: { en: "Tips for a smooth and respectful exit.", hi: "सम्मानपूर्वक और सरल तरीके से इस्तीफा देने के सुझाव।" },
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
      question: { en: "How long should a resignation letter be?", hi: "इस्तीफा पत्र कितना लंबा होना चाहिए?" },
      answer: { en: "Ideally one page, short and professional.", hi: "आमतौर पर एक पृष्ठ—संक्षिप्त और पेशेवर।" }
    },
    {
      question: { en: "Can I resign without notice?", hi: "क्या मैं बिना नोटिस के इस्तीफा दे सकता/सकती हूँ?" },
      answer: { en: "Yes, but only in emergency or valid reasons.", hi: "हाँ, लेकिन केवल उचित कारण या आपात स्थिति में।" }
    },
    {
      question: { en: "Should I mention the reason for resignation?", hi: "क्या इस्तीफे का कारण लिखना जरूरी है?" },
      answer: { en: "Optional, but recommended for clarity.", hi: "वैकल्पिक, लेकिन स्पष्टता के लिए उचित।" }
    }
  ]
};
