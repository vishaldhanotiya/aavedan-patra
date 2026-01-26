
export const meetingRequestTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र", slug:"/letters" },
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
      id: "meetingRequest",
      title: { en: "Meeting Request Letter", hi: "बैठक हेतु अनुरोध पत्र" },
      description: {
        en: "Used for requesting a meeting with manager, principal, or official.",
        hi: "प्रबंधक, प्राचार्य या अधिकारी से बैठक के लिए अनुरोध।"
      },
      bestFor: { en: "Business, students, official meeting", hi: "व्यवसाय, छात्र, आधिकारिक बैठक" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
[Name]
[Designation]

Subject: Request for Meeting

Respected Sir/Madam,

I hope your doing well. 

I am writing to request a meeting at your convenience to discuss upcoming projects and explore potential collaboration opportunities. I believe this discussion could help identify areas of mutual benefit.

If agreeable, I would like to propose March 20, 2057, at 1:00 PM as a tentative schedule. However, I am happy to adjust according to your availability. The meeting may be held at your office or any other suitable location.

Kindly confirm your availability at your earliest convenience so that necessary arrangements can be made. 

Thank you for your time and consideration.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
[नाम]
[पदनाम]

विषय: बैठक हेतु अनुरोध

महोदय/महोदया,

आशा है आप स्वस्थ एवं प्रसन्न होंगे। मैं आपसे निवेदन करना चाहता हूँ कि आगामी परियोजनाओं तथा संभावित सहयोग के अवसरों पर चर्चा हेतु आपकी सुविधा अनुसार एक औपचारिक बैठक निर्धारित की जाए। मुझे विश्वास है कि यह बैठक दोनों पक्षों के लिए लाभदायक सिद्ध होगी।

यदि आपकी सहमति हो, तो मैं 20 मार्च 2057 को दोपहर 1:00 बजे बैठक का प्रस्ताव रखना चाहूँगा। हालांकि, आपके समय के अनुसार इसमें परिवर्तन संभव है। बैठक आपके कार्यालय या किसी अन्य उपयुक्त स्थान पर आयोजित की जा सकती है।

कृपया अपनी उपलब्धता की पुष्टि शीघ्र करें, ताकि आवश्यक व्यवस्थाएँ की जा सकें। आपके समय एवं सहयोग के लिए धन्यवाद। आपके सकारात्मक उत्तर की प्रतीक्षा रहेगी।

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
