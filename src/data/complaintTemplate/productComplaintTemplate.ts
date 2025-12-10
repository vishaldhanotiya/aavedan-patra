
export const productComplaintTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र", slug:"/letters"},
    subcategory: { en: "Complaint Letters", hi: "शिकायत पत्र", slug:"/letters/complaint" },
    template: { en: "Official Complaint Letters", hi: "आधिकारिक शिकायत पत्र", slug:"" }
  },

  title: { 
    en: "Complaint Application Letters", 
    hi: "शिकायत आवेदन पत्र" 
  },

  subtitle: { 
    en: "Professional complaint letter formats including product complaints, service issues, workplace concerns, neighbor disputes, online shopping problems, and refund requests.",
    hi: "उत्पाद, सेवा, कार्यस्थल, पड़ोसी विवाद, ऑनलाइन खरीदारी समस्याएँ और रिफंड से संबंधित शिकायतों के लिए पेशेवर प्रारूप।"
  },

  category: { 
    en: "Complaint Letters", 
    hi: "शिकायत पत्र" 
  },

  updatedDate: "January 2025",

  variations: [
    // 1. Product Complaint
    {
      id: "productComplaint",
      title: { en: "Product Complaint Letter", hi: "उत्पाद शिकायत पत्र" },
      description: {
        en: "Used to report issues related to defective, damaged, or low-quality products.",
        hi: "खराब, क्षतिग्रस्त या निम्न-गुणवत्ता वाले उत्पादों की शिकायत दर्ज करने के लिए।"
      },
      bestFor: { en: "Product defects, warranty, replacement", hi: "उत्पाद खराबी, वारंटी, बदलने का अनुरोध" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
Customer Support
[Company Name]

Subject: Complaint Regarding Defective Product

Respected Sir/Madam,

I am writing to report an issue with the product I purchased from your store/website on [date]. The product, [Product Name & Model], is defective and not functioning as expected.

Despite following all instructions, the product failed to perform properly. I kindly request you to replace the product or provide a refund as per company policy.

Please look into this matter at the earliest.

Thank you.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
कस्टमर सपोर्ट
[कंपनी का नाम]

विषय: खराब उत्पाद के संबंध में शिकायत

महोदय/महोदया,

मैं [date] को आपके स्टोर/वेबसाइट से खरीदे गए उत्पाद के संबंध में शिकायत दर्ज कर रहा/रही हूँ। [उत्पाद का नाम और मॉडल] खराब है और उम्मीद के अनुसार काम नहीं कर रहा है।

सभी निर्देशों का पालन करने के बावजूद भी उत्पाद सही तरीके से काम नहीं कर रहा है। कृपया कंपनी की नीति के अनुसार उत्पाद बदलने या रिफंड प्रदान करने की कृपा करें।

कृपया इस विषय पर शीघ्र कार्रवाई करें।

धन्यवाद।

भवदीय,
[आपका नाम]`
      }
    }
  ],

  howToWrite: {
    title: { en: "How to Write a Complaint Letter", hi: "शिकायत पत्र कैसे लिखें" },
    tips: [
      { text: { en: "Be clear and factual.", hi: "स्पष्ट और तथ्यपूर्ण रहें।" } },
      { text: { en: "Mention date, receipt, order ID if applicable.", hi: "तिथि, रसीद या ऑर्डर ID अवश्य लिखें।" } },
      { text: { en: "Avoid emotional or rude language.", hi: "भावुक या अशिष्ट भाषा न लिखें।" } },
      { text: { en: "Request a proper action or resolution.", hi: "उचित कार्रवाई या समाधान का अनुरोध करें।" } },
      { text: { en: "Attach documents or photos if needed.", hi: "जरूरत पड़े तो दस्तावेज़ या फोटो संलग्न करें।" } }
    ]
  },

  relatedTemplates: [
    {
      title: { en: "Refund Request Email", hi: "रिफंड अनुरोध ईमेल" },
      description: { en: "For quick online refund requests.", hi: "ऑनलाइन रिफंड अनुरोधों के लिए।" },
      icon: 'FileText',
      link: "/templates/refund-email"
    },
    {
      title: { en: "Complaint to Customer Care", hi: "कस्टमर केयर को शिकायत पत्र" },
      description: { en: "Easy format for customer care complaints.", hi: "कस्टमर केयर शिकायतों के लिए सरल प्रारूप।" },
      icon: 'Briefcase',
      link: "/templates/customer-care-complaint"
    }
  ],

  blogArticles: [
    {
      title: { en: "How to File an Effective Complaint", hi: "प्रभावी शिकायत कैसे दर्ज करें" },
      excerpt: { en: "Learn the right structure and tone.", hi: "सही संरचना और लहजे के बारे में जानें।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-complaint-letter"
    },
    {
      title: { en: "Consumer Rights You Should Know", hi: "उपभोक्ता अधिकार जो आपको जानने चाहिए" },
      excerpt: { en: "Important rights for purchase & service issues.", hi: "खरीद और सेवा संबंधी महत्वपूर्ण अधिकार।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/consumer-rights"
    }
  ],

  faqs: [
    {
      question: { en: "Should I attach proof with complaint?", hi: "क्या शिकायत के साथ सबूत संलग्न करना चाहिए?" },
      answer: { en: "Yes, it increases credibility and speeds up resolution.", hi: "हाँ, इससे विश्वसनीयता बढ़ती है और समाधान जल्दी मिलता है।" }
    },
    {
      question: { en: "Can I file a complaint through email?", hi: "क्या मैं ईमेल से शिकायत कर सकता/सकती हूँ?" },
      answer: { en: "Yes, most companies accept email complaints.", hi: "हाँ, अधिकांश कंपनियाँ ईमेल शिकायत स्वीकार करती हैं।" }
    },
    {
      question: { en: "How long should a complaint letter be?", hi: "शिकायत पत्र कितना लंबा होना चाहिए?" },
      answer: { en: "Keep it short, clear, and professional (1 page).", hi: "इसे छोटा, स्पष्ट और पेशेवर रखें (1 पेज)।" }
    }
  ]
};
