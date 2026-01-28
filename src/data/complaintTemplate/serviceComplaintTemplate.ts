
export const serviceComplaintTemplate = {
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

    // 2. Service Complaint
    {
      id: "serviceComplaint",
      title: { en: "Service Complaint Letter", hi: "सेवा शिकायत पत्र" },
      description: {
        en: "For reporting poor or unsatisfactory service from a company or professional.",
        hi: "किसी कंपनी या सेवा प्रदाता की खराब सेवा की शिकायत दर्ज करने के लिए।"
      },
      bestFor: { en: "Poor service, delay, misbehavior", hi: "खराब सेवा, देरी, अनुचित व्यवहार" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
Service Manager
[Company Name]

Subject: Complaint Regarding Poor Service

Respected Sir/Madam,

I hope this message finds you well. My name is [your name], and I am writing to formally register a complaint regarding the unsatisfactory service I received from your organization on [mention date], related to [briefly describe the service, e.g., internet installation / repair service / customer support].

Unfortunately, the service provided did not meet the expected standards. Specifically, [clearly explain the issue — delays, unprofessional behavior, incomplete work, repeated follow-ups, etc.]. Despite multiple attempts to resolve this matter through your customer support team on [mention dates if applicable], the issue remains unresolved, which has caused considerable inconvenience and frustration.

I kindly request your immediate attention to this matter. I expect a prompt resolution along with a clear explanation of the corrective steps being taken. If applicable, I also request appropriate compensation or service rectification as per your company policy.

Please treat this matter as urgent. I look forward to your response within [e.g., 3–5 working days]. You may contact me at [your phone number] or [your email address] for any further details.

Thank you for your cooperation.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
सेवा प्रबंधक
[कंपनी का नाम]

विषय: खराब सेवा के संबंध में शिकायत

महोदय/महोदया,

महोदय/महोदया,

आशा है आप कुशल मंगल होंगे। मेरा नाम विषाल धनोटिया है, और मैं आपके संगठन द्वारा [तारीख का उल्लेख करें] को प्रदान की गई [सेवा का संक्षिप्त विवरण दें — जैसे इंटरनेट इंस्टॉलेशन / मरम्मत सेवा / कस्टमर सपोर्ट] से संबंधित असंतोषजनक सेवा के बारे में औपचारिक शिकायत दर्ज कराने हेतु यह पत्र लिख रहा हूँ।

दुर्भाग्यवश, प्रदान की गई सेवा अपेक्षित मानकों पर खरी नहीं उतरी। विशेष रूप से, [समस्या स्पष्ट रूप से बताएं — जैसे देरी, गैर-पेशेवर व्यवहार, अधूरा कार्य, बार-बार फॉलो-अप आदि]। इसके अतिरिक्त, [यदि लागू हो तो तारीखें लिखें] को आपकी ग्राहक सहायता टीम से कई बार संपर्क करने के बावजूद समस्या का समाधान नहीं हुआ, जिससे मुझे काफी असुविधा और परेशानी का सामना करना पड़ा।

अतः आपसे विनम्र निवेदन है कि इस विषय पर तत्काल ध्यान दें। मुझे शीघ्र समाधान के साथ-साथ उठाए गए सुधारात्मक कदमों की स्पष्ट जानकारी भी प्रदान की जाए। यदि लागू हो, तो कृपया आपकी कंपनी नीति के अनुसार उचित मुआवज़ा या सेवा सुधार भी प्रदान करें।

कृपया इस मामले को अत्यावश्यक समझते हुए [उदाहरण: 3–5 कार्य दिवसों] के भीतर उत्तर देने का कष्ट करें। किसी भी अतिरिक्त जानकारी हेतु आप मुझसे [आपका फ़ोन नंबर] या [आपका ईमेल पता] पर संपर्क कर सकते हैं।

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
