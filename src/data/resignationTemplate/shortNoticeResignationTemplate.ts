
export const shortNoticeResignationTemplate = {
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

    // 2. Short Notice Resignation
    {
      id: "shortNoticeResignation",
      title: { en: "Short Notice Resignation", hi: "शॉर्ट नोटिस त्यागपत्र" },
      description: {
        en: "Used when an employee resigns with a shorter-than-usual notice.",
        hi: "जब कर्मचारी सामान्य से कम नोटिस अवधि में त्यागपत्र देता है।"
      },
      bestFor: { en: "Urgent resignation situations", hi: "तत्काल त्यागपत्र परिस्थितियाँ" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
[Manager Name]
[Company Name]

Subject: Resignation with Short Notice

Respected Sir/Madam,

I hope you are well. I am writing to formally resign from my position as [Your Job Title] at [Company Name], effective [Last Working Date]. Due to unavoidable personal circumstances, I regret that I am unable to serve the standard notice period and request your understanding for this short notice.

I sincerely apologize for any inconvenience this may cause and truly appreciate your support. I am grateful for the opportunities and experience I have gained while working with the team.

I will do my best to complete pending tasks and ensure a smooth handover of my responsibilities during the remaining time.

Thank you for your understanding.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
[मैनेजर का नाम]
[कंपनी का नाम]

विषय: शॉर्ट नोटिस पर त्यागपत्र

महोदय/महोदया,

मैं आपको सूचित करना चाहता हूँ कि मैं [कंपनी का नाम] में अपने पद [आपका पदनाम] से औपचारिक रूप से त्यागपत्र दे रहा हूँ, जो [अंतिम कार्य दिवस] से प्रभावी होगा। अप्रत्याशित परिस्थितियों के कारण, मैं मानक नोटिस पीरियड पूरा करने में असमर्थ हूँ, अतः कृपया इसे शॉर्ट नोटिस के रूप में स्वीकार करने की कृपा करें।

इससे होने वाली किसी भी असुविधा के लिए मैं sincerely क्षमा चाहता हूँ और आपके सहयोग के लिए आभारी हूँ। टीम के साथ काम करते हुए मुझे जो अवसर और अनुभव मिले, उसके लिए मैं धन्यवाद व्यक्त करता हूँ।

शेष समय में मैं अपने लंबित कार्यों को पूरा करने और अपनी जिम्मेदारियों का सुचारु हस्तांतरण सुनिश्चित करने का पूरा प्रयास करूँगा।

आपकी समझ और सहयोग के लिए धन्यवाद।

भवदीय,
[आपका नाम]`
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
