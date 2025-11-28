import {FileText, Briefcase } from "lucide-react";

export const permissionRequest = {
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
      id: "permissionRequest",
      title: { en: "Permission Request Letter", hi: "अनुमति हेतु अनुरोध पत्र" },
      description: {
        en: "For requesting permission from authorities, principal, manager, or organization.",
        hi: "अधिकारियों, प्राचार्य, प्रबंधक या संस्था से अनुमति हेतु अनुरोध।"
      },
      bestFor: { en: "Leave, event, activity permission", hi: "छुट्टी, कार्यक्रम, गतिविधि अनुमति" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
[Authority Name]
[Designation]
[Organization]

Subject: Request for Permission

Respected Sir/Madam,

I kindly request your permission to [mention purpose] on [date/time]. This permission is required to complete my responsibility and participate in the activity without any issues.

I assure you that I will follow all rules and maintain proper discipline during the activity. I request you to grant the required permission.

Thank you.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
[अधिकारी का नाम]
[पदनाम]
[संस्थान]

विषय: अनुमति प्रदान करने हेतु अनुरोध

महोदय/महोदया,

कृपया मुझे [उद्देश्य का उल्लेख] हेतु दिनांक [date/time] को अनुमति प्रदान करने की कृपा करें। यह अनुमति मुझे अपनी जिम्मेदारी पूर्ण करने और गतिविधि में बिना किसी बाधा के भाग लेने के लिए आवश्यक है।

मैं आश्वासन देता/देती हूँ कि नियमों का पालन करूँगा/करूँगी और अनुशासन बनाए रखूँगा/रखूँगी। कृपया आवश्यक अनुमति प्रदान करें।

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
      icon: FileText,
      link: "/templates/approval-request"
    },
    {
      title: { en: "Official Email Request Format", hi: "आधिकारिक ईमेल अनुरोध प्रारूप" },
      description: { en: "For professional email requests.", hi: "पेशेवर ईमेल अनुरोध हेतु प्रारूप।" },
      icon: Briefcase,
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
