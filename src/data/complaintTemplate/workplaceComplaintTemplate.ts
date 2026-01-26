
export const workplaceComplaintTemplate = {
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
    // 3. Workplace Complaint
    {
      id: "workplaceComplaint",
      title: { en: "Workplace Complaint Letter", hi: "कार्यस्थल शिकायत पत्र" },
      description: {
        en: "Used for reporting harassment, discrimination, misconduct, or unfair treatment at workplace.",
        hi: "कार्यस्थल पर उत्पीड़न, भेदभाव, दुर्व्यवहार या अनुचित व्यवहार की शिकायत करने के लिए।"
      },
      bestFor: { en: "HR issues, harassment, misconduct", hi: "एचआर समस्याएँ, उत्पीड़न, दुर्व्यवहार" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
HR Department
[Company Name]

Subject: Complaint Regarding Workplace Misconduct

Respected Sir/Madam,

I am writing to formally bring to your attention an issue of [harassment / discrimination / misconduct / unfair treatment] that I have been experiencing at the workplace.

The incident(s) occurred on [mention date(s)], involving [name/designation if appropriate], where [briefly and clearly explain what happened]. These events have caused me significant discomfort and have affected my ability to work in a positive and professional environment.

I initially tried to resolve this matter amicably; however, the situation has not improved. Therefore, I request your kind intervention to investigate this matter and take appropriate action as per company policies.

I trust that this complaint will be handled with confidentiality and fairness. I am available to provide any additional details or clarification if required.

Thank you for your understanding and support. I look forward to a prompt resolution.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
एचआर विभाग
[कंपनी का नाम]

विषय: कार्यस्थल पर दुर्व्यवहार के संबंध में शिकायत

महोदय/महोदया,

मैं यह पत्र आपके संज्ञान में कार्यस्थल पर मेरे साथ हो रहे [उत्पीड़न / भेदभाव / दुर्व्यवहार / अनुचित व्यवहार] की औपचारिक शिकायत दर्ज कराने हेतु लिख रहा/रही हूँ।

यह घटना/घटनाएँ [तारीख/तिथियाँ] को हुईं, जिनमें [संबंधित व्यक्ति का नाम/पदनाम, यदि आवश्यक हो] शामिल थे, जहाँ [संक्षेप में और स्पष्ट रूप से घटना का विवरण दें]। इन घटनाओं के कारण मुझे काफी असुविधा हुई है तथा इसका मेरे कार्य प्रदर्शन और पेशेवर वातावरण पर नकारात्मक प्रभाव पड़ा है।

मैंने प्रारंभ में इस विषय को आपसी समझ के माध्यम से सुलझाने का प्रयास किया, परंतु स्थिति में कोई सुधार नहीं हुआ। अतः मैं आपसे विनम्र अनुरोध करता/करती हूँ कि कृपया इस मामले की जाँच कर कंपनी की नीतियों के अनुसार उचित कार्रवाई करें।

मुझे विश्वास है कि इस शिकायत को गोपनीयता और निष्पक्षता के साथ संभाला जाएगा। आवश्यकता पड़ने पर मैं अतिरिक्त जानकारी या स्पष्टीकरण प्रदान करने के लिए उपलब्ध हूँ।

आपके सहयोग और समझ के लिए धन्यवाद। मैं शीघ्र समाधान की अपेक्षा करता/करती हूँ।

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
