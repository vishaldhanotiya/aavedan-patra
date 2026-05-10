export const neighborComplaintTemplate = {
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
    en: "Neighbor Complaint Letters",
    hi: "पड़ोसी शिकायत पत्र",
  },

  subtitle: {
    en: "Professional complaint letter formats for neighbor disputes including noise complaints, parking issues, property damage, cleanliness concerns, disturbances, and society-related complaints.",
    hi: "शोर शिकायत, पार्किंग समस्या, संपत्ति नुकसान, सफाई संबंधी समस्या, परेशानियों और सोसाइटी से जुड़ी शिकायतों के लिए पेशेवर पड़ोसी शिकायत पत्र प्रारूप।",
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
The Secretary / Manager
[Housing Society / Apartment Name]

Subject: Polite Request Regarding Ongoing Disturbance

Dear Sir/Madam,

I am writing to bring to your attention a concern regarding ongoing disturbances coming from your residence, particularly related to [loud music / late-night noise / frequent gatherings / other issue], which usually occur around [mention approximate time or days].

While I fully understand that everyone has the right to enjoy their home, the noise levels have been affecting my family’s comfort and daily routine. I kindly request your cooperation in keeping the noise to a reasonable level, especially during late evening and early morning hours.

I believe this matter can be resolved amicably, and I truly appreciate your understanding and support in maintaining a peaceful neighborhood for everyone.

Thank you for your time and consideration.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
सचिव / प्रबंधक
[हाउसिंग सोसायटी / अपार्टमेंट का नाम]

विषय: शोर-शराबे की समस्या के संबंध में अनुरोध

प्रिय [नाम],

मैं आपका ध्यान आपके निवास स्थान से हो रही लगातार परेशानियों की ओर आकर्षित करना चाहता हूँ, विशेष रूप से [तेज़ संगीत / देर रात का शोर / बार-बार होने वाली सभाएँ / अन्य समस्या], जो प्रायः [समय या दिन उल्लेख करें] के आसपास होती हैं।

मैं समझता हूँ कि हर व्यक्ति को अपने घर में सहज रहने का अधिकार है, परंतु शोर का स्तर मेरे परिवार की शांति और दैनिक दिनचर्या को प्रभावित कर रहा है। आपसे विनम्र अनुरोध है कि कृपया शोर को उचित सीमा में रखें, विशेषकर देर शाम और सुबह के समय।

मुझे विश्वास है कि हम इस विषय को आपसी समझ से सुलझा सकते हैं। एक शांतिपूर्ण पड़ोस बनाए रखने में आपके सहयोग और समझ के लिए मैं आभारी रहूँगा।

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
        en: "How to Write an Effective Neighbor Complaint Letter",
        hi: "प्रभावी पड़ोसी शिकायत पत्र कैसे लिखें",
      },
      excerpt: {
        en: "Learn how to write a polite and professional complaint letter regarding neighborhood issues.",
        hi: "पड़ोस से जुड़ी समस्याओं के लिए विनम्र और पेशेवर शिकायत पत्र लिखना सीखें।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-neighbor-complaint-letter",
    },
    {
      title: {
        en: "Common Neighborhood Issues and Legal Rights",
        hi: "सामान्य पड़ोस समस्याएँ और कानूनी अधिकार",
      },
      excerpt: {
        en: "Understand your rights regarding noise, parking, property disputes, and other neighborhood issues.",
        hi: "शोर, पार्किंग, संपत्ति विवाद और अन्य पड़ोस समस्याओं से संबंधित अपने अधिकार जानें।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/neighborhood-rights",
    },
  ],

  faqs: [
    {
      question: {
        en: "Should I attach proof with a neighbor complaint letter?",
        hi: "क्या पड़ोसी शिकायत पत्र के साथ सबूत संलग्न करना चाहिए?",
      },
      answer: {
        en: "Yes, attaching photos, videos, or recordings can help support your complaint.",
        hi: "हाँ, फोटो, वीडियो या रिकॉर्डिंग संलग्न करने से आपकी शिकायत को समर्थन मिलता है।",
      },
    },
    {
      question: {
        en: "Can I file a neighbor complaint through email?",
        hi: "क्या मैं ईमेल के माध्यम से पड़ोसी शिकायत दर्ज कर सकता/सकती हूँ?",
      },
      answer: {
        en: "Yes, many housing societies, landlords, and authorities accept complaints through email.",
        hi: "हाँ, कई हाउसिंग सोसाइटी, मकान मालिक और प्राधिकरण ईमेल के माध्यम से शिकायत स्वीकार करते हैं।",
      },
    },
    {
      question: {
        en: "How long should a neighbor complaint letter be?",
        hi: "पड़ोसी शिकायत पत्र कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "Keep it short, clear, respectful, and professional—ideally one page.",
        hi: "इसे छोटा, स्पष्ट, सम्मानजनक और पेशेवर रखें—आदर्श रूप से एक पेज।",
      },
    },
    {
      question: {
        en: "What issues can be mentioned in a neighbor complaint letter?",
        hi: "पड़ोसी शिकायत पत्र में किन समस्याओं का उल्लेख किया जा सकता है?",
      },
      answer: {
        en: "You can mention issues like loud noise, parking disputes, garbage problems, property damage, or disturbances.",
        hi: "आप तेज़ शोर, पार्किंग विवाद, कचरा समस्या, संपत्ति नुकसान या अन्य परेशानियों का उल्लेख कर सकते हैं।",
      },
    },
    {
      question: {
        en: "Should I remain polite in a neighbor complaint letter?",
        hi: "क्या मुझे पड़ोसी शिकायत पत्र में विनम्र रहना चाहिए?",
      },
      answer: {
        en: "Yes, maintaining a calm and respectful tone increases the chances of a positive resolution.",
        hi: "हाँ, शांत और सम्मानजनक भाषा समाधान की संभावना बढ़ाती है।",
      },
    },
  ],
};
