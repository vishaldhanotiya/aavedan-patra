import { Briefcase, FileText } from "lucide-react";

export const retirementResignationTemplate = {
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
    // 5. Retirement Resignation
    {
      id: "retirementResignation",
      title: { en: "Retirement Resignation Letter", hi: "सेवानिवृत्ति इस्तीफा पत्र" },
      description: {
        en: "Resignation submitted at the time of retirement from service.",
        hi: "सेवानिवृत्ति के समय प्रस्तुत किया जाने वाला इस्तीफा पत्र।"
      },
      bestFor: { en: "Retirement from service", hi: "सेवा से सेवानिवृत्ति" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
[Manager Name]
[Company Name]

Subject: Retirement Resignation

Respected Sir/Madam,

With due respect, I hereby submit my resignation as I will be retiring from my position of [Your Position] effective from [Retirement Date]. It has been an honor to serve the organization during my tenure.

I request you to initiate my retirement formalities and guide me through the process. Thank you for the support and opportunities throughout my career.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
[मैनेजर का नाम]
[कंपनी का नाम]

विषय: सेवानिवृत्ति हेतु इस्तीफा

महोदय/महोदया,

सादर निवेदन है कि मैं [सेवानिवृत्ति तिथि] से [आपका पद] से सेवानिवृत्त हो रहा/रही हूँ और अपना इस्तीफा प्रस्तुत करता/करती हूँ। इस संस्था में सेवा करना मेरे लिए सम्मान की बात रही है।

कृपया सेवानिवृत्ति संबंधी औपचारिकताओं की प्रक्रिया प्रारंभ करने की कृपा करें। पूरे कार्यकाल में मिले सहयोग के लिए धन्यवाद।

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
