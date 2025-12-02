import { FileText, Briefcase } from "lucide-react";

export const neighborComplaintTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र", slug:"/letters" },
    subcategory: { en: "Complaint Letters", hi: "शिकायत पत्र", slug:"/letters/complaint" },
    template: { en: "Official Complaint Letters", hi: "आधिकारिक शिकायत पत्र", slug:"" },
  },

  title: {
    en: "Complaint Application Letters",
    hi: "शिकायत आवेदन पत्र",
  },

  subtitle: {
    en: "Professional complaint letter formats including product complaints, service issues, workplace concerns, neighbor disputes, online shopping problems, and refund requests.",
    hi: "उत्पाद, सेवा, कार्यस्थल, पड़ोसी विवाद, ऑनलाइन खरीदारी समस्याएँ और रिफंड से संबंधित शिकायतों के लिए पेशेवर प्रारूप।",
  },

  category: {
    en: "Complaint Letters",
    hi: "शिकायत पत्र",
  },

  updatedDate: "January 2025",

  variations: [
    // 4. Neighbor Complaint
    {
      id: "neighborComplaint",
      title: { en: "Neighbor Complaint Letter", hi: "पड़ोसी शिकायत पत्र" },
      description: {
        en: "Used to address loud noise, disputes, or disturbances caused by neighbors.",
        hi: "पड़ोसियों द्वारा उत्पन्न शोर, विवाद या अन्य समस्याओं की शिकायत करने के लिए।",
      },
      bestFor: {
        en: "Noise, disturbance, property issues",
        hi: "शोर, असुविधा, संपत्ति विवाद",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
[Neighbor Name]
[Address]

Subject: Complaint Regarding Disturbance

Dear [Name],

I request your cooperation in addressing the disturbance caused by [specific issue]. The noise/issue has been affecting my peace and daily routine continuously.

Kindly resolve this matter and avoid such disturbances in the future. I hope for a peaceful and respectful neighborhood relationship.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
[पड़ोसी का नाम]
[पता]

विषय: असुविधा के संबंध में शिकायत

प्रिय [नाम],

मैं [विशिष्ट समस्या] के कारण हो रही असुविधा को दूर करने हेतु आपका सहयोग चाहता/चाहती हूँ। यह शोर/समस्या लगातार मेरी दिनचर्या और शांति को प्रभावित कर रही है।

कृपया इस समस्या का समाधान करें और भविष्य में ऐसी असुविधा न होने दें। मैं एक शांतिपूर्ण और सम्मानजनक पड़ोस संबंध की आशा करता/करती हूँ।

भवदीय,
[आपका नाम]`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "How to Write a Complaint Letter",
      hi: "शिकायत पत्र कैसे लिखें",
    },
    tips: [
      {
        text: { en: "Be clear and factual.", hi: "स्पष्ट और तथ्यपूर्ण रहें।" },
      },
      {
        text: {
          en: "Mention date, receipt, order ID if applicable.",
          hi: "तिथि, रसीद या ऑर्डर ID अवश्य लिखें।",
        },
      },
      {
        text: {
          en: "Avoid emotional or rude language.",
          hi: "भावुक या अशिष्ट भाषा न लिखें।",
        },
      },
      {
        text: {
          en: "Request a proper action or resolution.",
          hi: "उचित कार्रवाई या समाधान का अनुरोध करें।",
        },
      },
      {
        text: {
          en: "Attach documents or photos if needed.",
          hi: "जरूरत पड़े तो दस्तावेज़ या फोटो संलग्न करें।",
        },
      },
    ],
  },

  relatedTemplates: [
    {
      title: { en: "Refund Request Email", hi: "रिफंड अनुरोध ईमेल" },
      description: {
        en: "For quick online refund requests.",
        hi: "ऑनलाइन रिफंड अनुरोधों के लिए।",
      },
      icon: FileText,
      link: "/templates/refund-email",
    },
    {
      title: {
        en: "Complaint to Customer Care",
        hi: "कस्टमर केयर को शिकायत पत्र",
      },
      description: {
        en: "Easy format for customer care complaints.",
        hi: "कस्टमर केयर शिकायतों के लिए सरल प्रारूप।",
      },
      icon: Briefcase,
      link: "/templates/customer-care-complaint",
    },
  ],

  blogArticles: [
    {
      title: {
        en: "How to File an Effective Complaint",
        hi: "प्रभावी शिकायत कैसे दर्ज करें",
      },
      excerpt: {
        en: "Learn the right structure and tone.",
        hi: "सही संरचना और लहजे के बारे में जानें।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-complaint-letter",
    },
    {
      title: {
        en: "Consumer Rights You Should Know",
        hi: "उपभोक्ता अधिकार जो आपको जानने चाहिए",
      },
      excerpt: {
        en: "Important rights for purchase & service issues.",
        hi: "खरीद और सेवा संबंधी महत्वपूर्ण अधिकार।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/consumer-rights",
    },
  ],

  faqs: [
    {
      question: {
        en: "Should I attach proof with complaint?",
        hi: "क्या शिकायत के साथ सबूत संलग्न करना चाहिए?",
      },
      answer: {
        en: "Yes, it increases credibility and speeds up resolution.",
        hi: "हाँ, इससे विश्वसनीयता बढ़ती है और समाधान जल्दी मिलता है।",
      },
    },
    {
      question: {
        en: "Can I file a complaint through email?",
        hi: "क्या मैं ईमेल से शिकायत कर सकता/सकती हूँ?",
      },
      answer: {
        en: "Yes, most companies accept email complaints.",
        hi: "हाँ, अधिकांश कंपनियाँ ईमेल शिकायत स्वीकार करती हैं।",
      },
    },
    {
      question: {
        en: "How long should a complaint letter be?",
        hi: "शिकायत पत्र कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "Keep it short, clear, and professional (1 page).",
        hi: "इसे छोटा, स्पष्ट और पेशेवर रखें (1 पेज)।",
      },
    },
  ],
};
