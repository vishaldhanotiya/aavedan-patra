
export const sponsorshipRequestTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र" , slug:"/letters"},
    subcategory: { en: "Request Letters", hi: "अनुरोध पत्र", slug:"/letters/request" },
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
      id: "sponsorshipRequest",
      title: { en: "Sponsorship Request Letter", hi: "प्रायोजन अनुरोध पत्र" },
      description: {
        en: "For requesting sponsorship for events, students, NGOs, or activities.",
        hi: "कार्यक्रमों, छात्रों, एनजीओ या गतिविधियों के लिए प्रायोजन अनुरोध।"
      },
      bestFor: { en: "Events, NGOs, cultural activities", hi: "कार्यक्रम, एनजीओ, सांस्कृतिक गतिविधियाँ" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
The Sponsorship Manager
[Company/Organization]

Subject: Request for Sponsorship

Respected Sir/Madam,

I hope you are doing well. My name is [Your Full Name], and I am writing to seek your kind support for my higher studies in [Field of Study] at [University Name], beginning [Semester/Year].

I have received admission to the [Program Name], which is a major step toward my goal of becoming a [your career goal]. However, the total cost of tuition and living expenses is approximately [Total Amount]. Despite arranging partial funding, I am still facing a financial shortfall.

I truly admire your support for education and personal growth, and I would be deeply grateful if you would consider sponsoring a part of my studies. Your support would make a meaningful difference in helping me achieve my academic goals.

I assure you that I will maintain strong academic performance and keep you informed about my progress. I have attached my admission letter and estimated budget for your reference.

Thank you very much for your time and consideration. I would be happy to share any additional details if required.

Sincerely
[Your Full Name]
[Phone Number]
[Email Address]`,

        hi: `सेवा में,
प्रायोजन प्रबंधक
[कंपनी/संगठन]

विषय: प्रायोजन हेतु अनुरोध

महोदय/महोदया,

आदरणीय [प्रायोजक का नाम],

सादर नमस्कार। मेरा नाम [आपका पूरा नाम] है। मैं अपनी उच्च शिक्षा के लिए आपके सहयोग का विनम्र अनुरोध करने हेतु यह पत्र लिख रहा/रही हूँ। मुझे [University Name] में [Program Name] के लिए [Semester/Year] से प्रवेश प्राप्त हुआ है।

यह कार्यक्रम मेरे [आपका करियर लक्ष्य] बनने के उद्देश्य की दिशा में एक महत्वपूर्ण कदम है। मेरी पढ़ाई एवं रहने का कुल अनुमानित खर्च लगभग [Total Amount] है। आंशिक व्यवस्था के बावजूद अभी भी कुछ वित्तीय कमी बनी हुई है।

शिक्षा के प्रति आपके सहयोग और मार्गदर्शन से मैं अत्यंत प्रेरित हूँ। यदि आप मेरी पढ़ाई के लिए आंशिक या पूर्ण सहायता प्रदान कर सकें, तो यह मेरे लिए अत्यंत सहायक होगा।

मैं आपको आश्वस्त करता/करती हूँ कि मैं अपनी पढ़ाई में उत्कृष्ट प्रदर्शन बनाए रखूँगा/रखूँगी तथा समय-समय पर अपनी प्रगति की जानकारी साझा करता/करती रहूँगा/रहूँगी। संदर्भ हेतु मैंने अपना प्रवेश पत्र एवं बजट विवरण संलग्न किया है।

आपके समय और सहयोग के लिए हृदय से धन्यवाद।

सादर,
[आपका पूरा नाम]
[फोन नंबर]
[ईमेल पता]`
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
      icon: 'Briefcase',
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
