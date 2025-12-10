
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

We are organizing [event/project] on [date], and we wish to request your support through sponsorship. Your contribution will help us make this event successful and impactful.

We will acknowledge your organization in all promotional materials. Kindly consider our request.

Thank you.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
प्रायोजन प्रबंधक
[कंपनी/संगठन]

विषय: प्रायोजन हेतु अनुरोध

महोदय/महोदया,

हम [date] को [कार्यक्रम/परियोजना] आयोजित कर रहे हैं और इसके लिए आपके प्रायोजन समर्थन का अनुरोध करते हैं। आपका सहयोग कार्यक्रम को सफल और प्रभावी बनाने में महत्वपूर्ण भूमिका निभाएगा।

आपके संगठन का नाम सभी प्रचार सामग्रियों में प्रदर्शित किया जाएगा। कृपया हमारे अनुरोध पर विचार करें।

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
