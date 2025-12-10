
export const donationRequestTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र", slug:"/letters" },
    subcategory: { en: "Request Letters", hi: "अनुरोध पत्र", slug:"/letters/request"},
    template: { en: "Official Request Letters", hi: "आधिकारिक अनुरोध पत्र", slug:"" }
  },

  title: { 
    en: "Request Application Letters", 
    hi: "अनुरोध आवेदन पत्र" 
  },

  subtitle: { 
    en: "Professional formats for permission, information, meetings, sponsorship, donation, and recommendation requests.",
    hi: "अनुमति, जानकारी, बैठक, प्रायोजन, दान और सिफारिश के अनुरोध हेतु पेशेवर प्रारूप।" 
  },

  category: { 
    en: "Request Letters", 
    hi: "अनुरोध पत्र" 
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "donationRequest",
      title: { en: "Donation Request Letter", hi: "दान हेतु अनुरोध पत्र" },
      description: {
        en: "For requesting donations for social, educational, medical, or charity causes.",
        hi: "सामाजिक, शैक्षणिक, चिकित्सा या चैरिटी उद्देश्यों हेतु दान अनुरोध।"
      },
      bestFor: { en: "NGOs, students, medical help", hi: "एनजीओ, छात्र, चिकित्सा सहायता" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
[Donor/Organization Name]

Subject: Request for Donation

Respected Sir/Madam,

I request your kind support in the form of a donation for [cause: medical treatment/education/charity]. Your contribution will greatly help us achieve our purpose and support those in need.

We assure full transparency and proper use of the donated funds.

Thank you for considering our request.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
[दाता/संगठन का नाम]

विषय: दान हेतु अनुरोध

महोदय/महोदया,

कृपया [उद्देश्य: चिकित्सा उपचार/शिक्षा/चैरिटी] के लिए दान प्रदान करने की कृपा करें। आपका सहयोग हमारे उद्देश्य को पूरा करने और जरूरतमंद लोगों की सहायता करने में अत्यंत सहायक होगा।

हम दान की पूरी पारदर्शिता और उचित उपयोग का आश्वासन देते हैं।

कृपया हमारे अनुरोध पर सहानुभूतिपूर्वक विचार करें।

धन्यवाद।

भवदीय,
[आपका नाम]`
      }
    },

    {
      id: "recommendationRequest",
      title: { en: "Recommendation Request Letter", hi: "सिफारिश पत्र हेतु अनुरोध" },
      description: {
        en: "Used for requesting recommendation from teacher, manager, or senior.",
        hi: "शिक्षक, प्रबंधक या वरिष्ठ से सिफारिश प्राप्त करने हेतु आवेदन।"
      },
      bestFor: { en: "Job, college admission, scholarships", hi: "नौकरी, कॉलेज प्रवेश, छात्रवृत्ति" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
[Teacher/Manager Name]

Subject: Request for Recommendation Letter

Respected Sir/Madam,

I kindly request you to provide a recommendation letter for my application to [job/college/scholarship]. Your recommendation will greatly strengthen my profile and support my application.

I assure that I will maintain the values and reputation associated with your recommendation.

Thank you.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
[शिक्षक/प्रबंधक का नाम]

विषय: सिफारिश पत्र प्रदान करने हेतु अनुरोध

महोदय/महोदया,

कृपया मुझे [नौकरी/कॉलेज/छात्रवृत्ति] हेतु आवेदन में उपयोग करने के लिए एक सिफारिश पत्र प्रदान करने की कृपा करें। आपकी सिफारिश मेरे प्रोफाइल को मजबूत बनाने में अत्यंत सहायक होगी।

मैं आश्वासन देता/देती हूँ कि आपकी सिफारिश के अनुरूप व्यवहार और प्रदर्शन बनाए रखूँगा/रखूँगी।

धन्यवाद।

भवदीय,
[आपका नाम]`
      }
    }
  ],

  howToWrite: {
    title: { en: "How to Write a Request Letter", hi: "अनुरोध पत्र कैसे लिखें" },
    tips: [
      { text: { en: "Be polite and respectful.", hi: "विनम्र और सम्मानजनक रहें।" } },
      { text: { en: "State the purpose clearly.", hi: "उद्देश्य स्पष्ट रूप से लिखें।" } },
      { text: { en: "Keep the letter short and professional.", hi: "पत्र को छोटा और पेशेवर रखें।" } },
      { text: { en: "Include necessary details and dates.", hi: "आवश्यक विवरण और तिथि शामिल करें।" } },
      { text: { en: "Thank the recipient at the end.", hi: "अंत में प्राप्तकर्ता को धन्यवाद दें।" } }
    ]
  },

  relatedTemplates: [
    {
      title: { en: "Approval Request Letter", hi: "अनुमोदन हेतु अनुरोध पत्र" },
      description: { en: "For requesting official approval.", hi: "आधिकारिक अनुमोदन हेतु अनुरोध।" },
      icon: 'FileText',
      link: "/templates/approval-request"
    },
    {
      title: { en: "Official Email Request Format", hi: "आधिकारिक ईमेल अनुरोध प्रारूप" },
      description: { en: "For professional email requests.", hi: "पेशेवर ईमेल अनुरोध हेतु प्रारूप।" },
      icon:'Briefcase',
      link: "/templates/request-email"
    }
  ],

  blogArticles: [
    {
      title: { en: "How to Write a Professional Request Letter", hi: "पेशेवर अनुरोध पत्र कैसे लिखें" },
      excerpt: { en: "A guide to writing formal request applications.", hi: "औपचारिक अनुरोध पत्र लिखने की गाइड।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-request-letter"
    },
    {
      title: { en: "Common Mistakes in Formal Letters", hi: "औपचारिक पत्रों में आम गलतियाँ" },
      excerpt: { en: "Avoid these errors when writing requests.", hi: "अनुरोध पत्र लिखते समय इन गलतियों से बचें।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/formal-letter-mistakes"
    }
  ],

  faqs: [
    {
      question: { en: "Should request letters be short?", hi: "क्या अनुरोध पत्र छोटा होना चाहिए?" },
      answer: { en: "Yes, keep them brief and to the point.", hi: "हाँ, उन्हें संक्षिप्त और सीधा रखें।" }
    },
    {
      question: { en: "Can I email a request letter?", hi: "क्या मैं अनुरोध पत्र ईमेल कर सकता/सकती हूँ?" },
      answer: { en: "Yes, most institutions accept email requests.", hi: "हाँ, अधिकांश संस्थाएँ ईमेल अनुरोध स्वीकार करती हैं।" }
    },
    {
      question: { en: "Should I attach documents?", hi: "क्या मुझे दस्तावेज संलग्न करने चाहिए?" },
      answer: { en: "Yes, if required for verification.", hi: "हाँ, यदि सत्यापन के लिए आवश्यक हो।" }
    }
  ]
};
