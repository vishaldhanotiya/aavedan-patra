
export const refundRequestTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र", slug:"/letters" },
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
    // 6. Refund Request
    {
      id: "refundRequest",
      title: { en: "Refund Request Letter", hi: "रिफंड अनुरोध पत्र" },
      description: {
        en: "Used to request refund for purchases or services not delivered correctly.",
        hi: "खरीद या सेवा के गलत/अधूरी डिलीवरी पर रिफंड का अनुरोध।"
      },
      bestFor: { en: "Refund claims", hi: "रिफंड अनुरोध" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
[Company Name / Customer Support]
[Company Address – optional]

Subject: Request for Refund

Dear Sir/Madam,

I am writing to formally request a refund for my order/service dated [Purchase Date] with Order Number [Order Number].

Unfortunately, the product/service I received was [briefly describe the issue — e.g., defective, incorrect item delivered, not delivered, or unsatisfactory service], which caused inconvenience.

Therefore, I kindly request you to process a refund of [Refund Amount] to my original mode of payment, as per your refund policy. For your reference, I have attached the invoice/receipt and relevant supporting documents.

I would appreciate your prompt assistance in resolving this matter. Please let me know if any additional information is required from my side.

Thank you for your cooperation.

Sincerely,
[Your Name]`,

        hi: `प्रति,
[कंपनी / कस्टमर सपोर्ट का नाम]
[कंपनी का पता – वैकल्पिक]

आदरणीय महोदय/महोदया,

सविनय निवेदन है कि मैं दिनांक [खरीद की तारीख] को किए गए अपने ऑर्डर/सेवा (ऑर्डर नंबर: [ऑर्डर नंबर]) के संबंध में रिफंड हेतु यह पत्र लिख रहा/रही हूँ।

दुर्भाग्यवश, प्राप्त उत्पाद/सेवा [समस्या का संक्षिप्त विवरण लिखें — जैसे: उत्पाद खराब था / गलत वस्तु प्राप्त हुई / डिलीवरी नहीं हुई / सेवा संतोषजनक नहीं रही]। इस कारण मुझे असुविधा का सामना करना पड़ा।

अतः आपसे निवेदन है कि आपकी रिफंड नीति के अनुसार कृपया [राशि] की धनवापसी मेरे मूल भुगतान माध्यम में शीघ्र प्रदान करने की कृपा करें। संदर्भ हेतु बिल/इनवॉइस एवं संबंधित दस्तावेज संलग्न हैं।

कृपया इस विषय में शीघ्र कार्यवाही करें। यदि किसी अतिरिक्त जानकारी की आवश्यकता हो, तो कृपया सूचित करें।

आपके सहयोग के लिए अग्रिम धन्यवाद।

सादर,
[आपका पूरा नाम]
[मोबाइल नंबर]
[ईमेल आईडी]
[पता – वैकल्पिक]
`
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
