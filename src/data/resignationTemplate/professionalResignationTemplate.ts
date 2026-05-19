export const professionalResignationTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र", slug: "/letters" },
    subcategory: {
      en: "Resignation Letters",
      hi: "इस्तीफा पत्र",
      slug: "/letters/resignation",
    },
    template: {
      en: "Professional Resignation Letter",
      hi: "प्रोफेशनल इस्तीफा पत्र",
      slug: "",
    },
  },

  title: {
    en: "Professional Resignation Letter",
    hi: "प्रोफेशनल इस्तीफा पत्र",
  },

  subtitle: {
    en: "Professional resignation letter formats including standard resignation, short notice, immediate resignation, career change, retirement, and relocation resignation.",
    hi: "पेशेवर इस्तीफा पत्र प्रारूप—मानक इस्तीफा, शॉर्ट नोटिस, तत्काल त्यागपत्र, करियर परिवर्तन, सेवानिवृत्ति और स्थानांतरण के लिए।",
  },

  category: {
    en: "Resignation Letters",
    hi: "त्यागपत्र",
  },

  pageMetaData: {
    author:{ en:"Vishal Dhanotiya", hi:"विशाल धनोतिया" },
    updatedAt: "January 2025",
    views: "1200",
    likes: "85",
  },

  updatedDate: "January 2025",

  variations: [
    // 1. Professional Resignation Letter
    {
      id: "professionalResignation",
      title: { en: "Professional Resignation Letter", hi: "पेशेवर त्यागपत्र" },
      description: {
        en: "A formal resignation letter with a standard notice period.",
        hi: "मानक नोटिस अवधि के साथ एक औपचारिक त्यागपत्र।",
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

मैं आपको सूचित करना चाहता हूँ कि मैं [कंपनी का नाम] में अपने पद [आपका पदनाम] से औपचारिक रूप से इस्तीफा पत्र दे रहा हूँ। मेरी नियुक्ति शर्तों के अनुसार, मैं [नोटिस पीरियड, जैसे 30 दिन] का नोटिस पीरियड पूरा करूँगा, और मेरा अंतिम कार्य दिवस [अंतिम कार्य दिवस] होगा।

यह निर्णय आसान नहीं था, लेकिन मेरे करियर और व्यक्तिगत विकास हेतु आवश्यक है। मैं यहाँ मिले अवसरों, सहयोग और मार्गदर्शन के लिए आपका हार्दिक धन्यवाद करता हूँ। टीम के साथ काम करना मेरे लिए एक मूल्यवान अनुभव रहा है, और मैंने यहाँ से बहुत कुछ सीखा है।

नोटिस पीरियड के दौरान मैं अपने सभी दायित्वों को सुचारु रूप से सौंपने और ट्रांज़िशन प्रक्रिया में पूरा सहयोग देने का प्रयास करूँगा।

एक बार फिर धन्यवाद। मैं कंपनी और पूरी टीम के उज्ज्वल भविष्य की कामना करता हूँ।

सादर,
[आपका नाम]
[कर्मचारी आईडी, यदि लागू हो]
[संपर्क नंबर]`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "How to Write a Resignation Letter",
      hi: "इस्तीफा पत्र कैसे लिखें",
    },
    tips: [
      {
        text: {
          en: "Keep the tone respectful and professional.",
          hi: "लहजा सम्मानजनक और पेशेवर रखें।",
        },
      },
      {
        text: {
          en: "Mention your last working day clearly.",
          hi: "अपने अंतिम कार्य दिवस का स्पष्ट उल्लेख करें।",
        },
      },
      {
        text: {
          en: "Avoid complaining or negativity.",
          hi: "शिकायत या नकारात्मक बातें न लिखें।",
        },
      },
      {
        text: {
          en: "Offer help with the transition.",
          hi: "हस्तांतरण में सहायता की पेशकश करें।",
        },
      },
      {
        text: {
          en: "Express gratitude for the opportunity.",
          hi: "मिले अवसरों के लिए आभार व्यक्त करें।",
        },
      },
    ],
  },

  relatedTemplates: [
    {
      title: { en: "Appointment Letter", hi: "नियुक्ति पत्र" },
      description: {
        en: "Official joining/appointment format.",
        hi: "आधिकारिक नियुक्ति पत्र प्रारूप।",
      },
      icon: "FileText",
      link: "/templates/appointment-letter",
    },
    {
      title: { en: "Work Handover Format", hi: "कार्य हस्तांतरण प्रारूप" },
      description: {
        en: "For smooth transition of responsibilities.",
        hi: "जिम्मेदारियों के सुचारू हस्तांतरण हेतु।",
      },
      icon: "Briefcase",
      link: "/templates/work-handover",
    },
  ],

  blogArticles: [
    {
      title: {
        en: "How to Write a Professional Resignation Letter",
        hi: "पेशेवर इस्तीफा पत्र कैसे लिखें",
      },
      excerpt: {
        en: "Tips for leaving your job respectfully with a smooth and professional transition.",
        hi: "सम्मानपूर्वक और पेशेवर तरीके से नौकरी छोड़ने के लिए उपयोगी सुझाव।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-professional-resignation-letter",
    },
    {
      title: {
        en: "Professional Resignation and Notice Period Rules in India",
        hi: "पेशेवर इस्तीफा और भारत में नोटिस पीरियड नियम",
      },
      excerpt: {
        en: "Understand employee rights, notice periods, and resignation procedures in India.",
        hi: "भारत में कर्मचारी अधिकार, नोटिस पीरियड और इस्तीफा प्रक्रिया को समझें।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/professional-resignation-notice-rules",
    },
  ],

  faqs: [
    {
      question: {
        en: "How long should a professional resignation letter be?",
        hi: "पेशेवर इस्तीफा पत्र कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "It should ideally be concise, professional, and limited to one page.",
        hi: "यह आदर्श रूप से संक्षिप्त, पेशेवर और एक पृष्ठ तक सीमित होना चाहिए।",
      },
    },
    {
      question: {
        en: "Should I mention the reason for resignation in a professional resignation letter?",
        hi: "क्या पेशेवर इस्तीफा पत्र में इस्तीफे का कारण लिखना चाहिए?",
      },
      answer: {
        en: "Yes, briefly mentioning the reason is recommended for clarity and professionalism.",
        hi: "हाँ, स्पष्टता और पेशेवरता के लिए संक्षेप में कारण बताना उचित होता है।",
      },
    },
    {
      question: {
        en: "Can I resign without serving the full notice period?",
        hi: "क्या मैं पूरा नोटिस पीरियड पूरा किए बिना इस्तीफा दे सकता/सकती हूँ?",
      },
      answer: {
        en: "It depends on your employment contract and company policies regarding notice periods.",
        hi: "यह आपके रोजगार अनुबंध और कंपनी की नोटिस पीरियड नीति पर निर्भर करता है।",
      },
    },
    {
      question: {
        en: "Should I maintain a positive tone in a professional resignation letter?",
        hi: "क्या पेशेवर इस्तीफा पत्र में सकारात्मक भाषा रखनी चाहिए?",
      },
      answer: {
        en: "Yes, maintaining a polite and positive tone helps preserve professional relationships.",
        hi: "हाँ, विनम्र और सकारात्मक भाषा पेशेवर संबंधों को बनाए रखने में मदद करती है।",
      },
    },
    {
      question: {
        en: "Can a professional resignation letter be sent by email?",
        hi: "क्या पेशेवर इस्तीफा पत्र ईमेल द्वारा भेजा जा सकता है?",
      },
      answer: {
        en: "Yes, most organizations accept resignation letters through official email communication.",
        hi: "हाँ, अधिकांश संगठन आधिकारिक ईमेल के माध्यम से इस्तीफा पत्र स्वीकार करते हैं।",
      },
    },
  ],
};
