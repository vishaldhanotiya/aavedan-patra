export const refundRequestTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र", slug: "/letters" },
    subcategory: {
      en: "Complaint Letters",
      hi: "शिकायत पत्र",
      slug: "/letters/complaint",
    },
    template: {
      en: "Official Complaint Letters",
      hi: "आधिकारिक शिकायत पत्र",
      slug: "",
    },
  },
  title: {
    en: "Refund Request Letters",
    hi: "रिफंड अनुरोध पत्र",
  },

  subtitle: {
    en: "Professional refund request letter formats for damaged products, canceled services, online shopping issues, payment errors, duplicate transactions, and unsatisfactory purchases.",
    hi: "खराब उत्पाद, रद्द सेवाएँ, ऑनलाइन शॉपिंग समस्याएँ, भुगतान त्रुटियाँ, डुप्लिकेट लेनदेन और असंतोषजनक खरीदारी से संबंधित पेशेवर रिफंड अनुरोध पत्र प्रारूप।",
  },

  category: {
    en: "Complaint Letters",
    hi: "शिकायत पत्र",
  },

  updatedDate: "January 2025",

  variations: [
    // 6. Refund Request
    {
      id: "refundRequest",
      title: { en: "Refund Request Letter", hi: "रिफंड अनुरोध पत्र" },
      description: {
        en: "Used to request refund for purchases or services not delivered correctly.",
        hi: "खरीद या सेवा के गलत/अधूरी डिलीवरी पर रिफंड का अनुरोध।",
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
`,
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
      icon: "FileText",
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
      icon: "Briefcase",
      link: "/templates/customer-care-complaint",
    },
  ],

  blogArticles: [
    {
      title: {
        en: "How to Write an Effective Refund Request Letter",
        hi: "प्रभावी रिफंड अनुरोध पत्र कैसे लिखें",
      },
      excerpt: {
        en: "Learn how to write a professional refund request letter for products, services, or online purchases.",
        hi: "उत्पाद, सेवाओं या ऑनलाइन खरीदारी के लिए पेशेवर रिफंड अनुरोध पत्र लिखना सीखें।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-refund-request-letter",
    },
    {
      title: {
        en: "Consumer Rights for Refund and Return Issues",
        hi: "रिफंड और रिटर्न समस्याओं के लिए उपभोक्ता अधिकार",
      },
      excerpt: {
        en: "Understand your rights related to refunds, returns, cancellations, and payment disputes.",
        hi: "रिफंड, रिटर्न, रद्दीकरण और भुगतान विवादों से संबंधित अपने अधिकार जानें।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/refund-consumer-rights",
    },
  ],

  faqs: [
    {
      question: {
        en: "Should I attach proof with a refund request letter?",
        hi: "क्या रिफंड अनुरोध पत्र के साथ सबूत संलग्न करना चाहिए?",
      },
      answer: {
        en: "Yes, attaching invoices, receipts, screenshots, or payment details helps strengthen your request.",
        hi: "हाँ, बिल, रसीद, स्क्रीनशॉट या भुगतान विवरण संलग्न करने से आपका अनुरोध मजबूत होता है।",
      },
    },
    {
      question: {
        en: "Can I send a refund request through email?",
        hi: "क्या मैं ईमेल के माध्यम से रिफंड अनुरोध भेज सकता/सकती हूँ?",
      },
      answer: {
        en: "Yes, most companies and online platforms accept refund requests through email or support portals.",
        hi: "हाँ, अधिकांश कंपनियाँ और ऑनलाइन प्लेटफॉर्म ईमेल या सपोर्ट पोर्टल के माध्यम से रिफंड अनुरोध स्वीकार करते हैं।",
      },
    },
    {
      question: {
        en: "How long should a refund request letter be?",
        hi: "रिफंड अनुरोध पत्र कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "Keep it short, clear, and professional—ideally within one page.",
        hi: "इसे छोटा, स्पष्ट और पेशेवर रखें—आदर्श रूप से एक पेज के भीतर।",
      },
    },
    {
      question: {
        en: "What reasons can be mentioned in a refund request letter?",
        hi: "रिफंड अनुरोध पत्र में किन कारणों का उल्लेख किया जा सकता है?",
      },
      answer: {
        en: "You can mention reasons such as damaged products, wrong items, service cancellation, duplicate payment, or unsatisfactory quality.",
        hi: "आप खराब उत्पाद, गलत सामान, सेवा रद्दीकरण, डुप्लिकेट भुगतान या असंतोषजनक गुणवत्ता जैसे कारणों का उल्लेख कर सकते हैं।",
      },
    },
    {
      question: {
        en: "Should I remain polite in a refund request letter?",
        hi: "क्या मुझे रिफंड अनुरोध पत्र में विनम्र रहना चाहिए?",
      },
      answer: {
        en: "Yes, maintaining a calm and professional tone improves the chances of quick resolution.",
        hi: "हाँ, शांत और पेशेवर भाषा समाधान की संभावना को बढ़ाती है।",
      },
    },
  ],
};
