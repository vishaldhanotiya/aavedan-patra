
export const onlineShoppingComplaintTemplate = {
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
    // 5. Online Shopping Complaint
    {
      id: "onlineShoppingComplaint",
      title: { en: "Online Shopping Complaint", hi: "ऑनलाइन शॉपिंग शिकायत" },
      description: {
        en: "For issues like wrong delivery, damaged product, late delivery, or missing items.",
        hi: "गलत डिलीवरी, खराब उत्पाद, देर से डिलीवरी या गायब सामान की शिकायत हेतु।"
      },
      bestFor: { en: "E-commerce problems", hi: "ई-कॉमर्स समस्याएँ" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
Customer Support
[Online Store Name]

Subject: Complaint Regarding Online Order

Respected Sir/Madam,

I am writing to formally complain about my recent order placed on your online platform. On [date of order], I placed Order #[order number] for [briefly describe the product(s), e.g., "a Samsung 55-inch LED TV (Model XYZ) worth Rs. 45,000"] using payment method [e.g., credit card/UPI]. The expected delivery date was [expected date], and I received a confirmation email with tracking details [reference tracking ID if available].

Unfortunately, the delivery did not meet your service standards. [Describe the specific issue in detail:
• For wrong delivery: "I received a completely different item – a blender instead of the ordered TV."
• For damaged product: "The product arrived with visible damage, including a cracked screen and dented packaging."
• For late delivery: "The order is delayed by [X days/weeks] beyond the promised date, causing inconvenience."

For missing items: "Only partial items were delivered; [list missing items, e.g., the charger and remote are absent]."]

I have attached supporting evidence, including:
• Order confirmation and invoice.
• Photos of the received item/packaging.
• Delivery receipt or courier details.

This issue has caused me significant inconvenience and financial loss [mention if applicable, e.g., "as I needed the product urgently for personal use"]. I kindly request one of the following resolutions within [specify timeframe, e.g., 7 business days]:

• Immediate replacement with the correct/undamaged product.
• Full refund to my original payment method.
• [Alternative, e.g., Partial refund or store credit].

I trust you will resolve this promptly as per your return and refund policy. Please contact me at [your phone/email] to confirm the next steps. I look forward to your response within 48 hours.

Thank you for your attention.

Sincerely,
[Your Full Name]`,

        hi: `सेवा में,
कस्टमर सपोर्ट
[ऑनलाइन स्टोर का नाम]

विषय: ऑनलाइन ऑर्डर के संबंध में शिकायत

महोदय/महोदया,

मैं आपके ऑनलाइन प्लेटफ़ॉर्म पर किए गए अपने हालिया ऑर्डर के संबंध में औपचारिक शिकायत दर्ज कराने हेतु यह पत्र लिख रहा/रही हूँ। दिनांक [ऑर्डर की तारीख] को मैंने ऑर्डर संख्या #[Order Number] के अंतर्गत [प्रोडक्ट का संक्षिप्त विवरण, जैसे “Samsung 55-inch LED TV (Model XYZ) जिसकी कीमत ₹45,000 है”] का ऑर्डर किया था, जिसका भुगतान [भुगतान माध्यम, जैसे UPI/क्रेडिट कार्ड] के माध्यम से किया गया।

डिलीवरी की अपेक्षित तिथि [Expected Date] थी, तथा मुझे ट्रैकिंग विवरण सहित कन्फर्मेशन ईमेल भी प्राप्त हुआ था [यदि उपलब्ध हो तो ट्रैकिंग ID लिखें]।

दुर्भाग्यवश, आपकी सेवा अपेक्षाओं के अनुरूप नहीं रही। मुझे निम्न समस्या का सामना करना पड़ा:

[समस्या विस्तार से लिखें, उदाहरण:
• गलत डिलीवरी: “मुझे ऑर्डर किए गए टीवी के स्थान पर ब्लेंडर प्राप्त हुआ।”
• खराब प्रोडक्ट: “प्रोडक्ट टूटी हुई स्क्रीन और क्षतिग्रस्त पैकेजिंग के साथ मिला।”
• देर से डिलीवरी: “डिलीवरी तय समय से [X दिन/सप्ताह] देरी से हुई।”
• सामान गायब: “पैकेज में केवल आंशिक सामान मिला — [जैसे चार्जर/रिमोट गायब है]।”]

आपकी जानकारी हेतु, मैंने निम्न दस्तावेज़ संलग्न किए हैं:
• ऑर्डर कन्फर्मेशन और इनवॉइस की प्रति
• प्राप्त प्रोडक्ट/पैकेजिंग की फोटो
• डिलीवरी रसीद या कूरियर विवरण

इस समस्या के कारण मुझे काफी असुविधा एवं आर्थिक नुकसान हुआ है [यदि लागू हो तो उल्लेख करें, जैसे “क्योंकि मुझे यह प्रोडक्ट तत्काल व्यक्तिगत उपयोग हेतु चाहिए था”]।

अतः आपसे विनम्र अनुरोध है कि कृपया [उदाहरण: 7 कार्यदिवस] के भीतर निम्न में से कोई एक समाधान प्रदान करें:
• सही/अक्षत प्रोडक्ट का तत्काल रिप्लेसमेंट
• मूल भुगतान माध्यम में पूर्ण रिफंड
• [वैकल्पिक: आंशिक रिफंड या स्टोर क्रेडिट]

मुझे विश्वास है कि आप अपनी रिटर्न एवं रिफंड नीति के अनुसार शीघ्र समाधान प्रदान करेंगे। कृपया आगे की प्रक्रिया की पुष्टि हेतु मुझसे [फोन/ईमेल]पर संपर्क करें। मैं 48 घंटों के भीतर आपके उत्तर की अपेक्षा करता/करती हूँ।

आपके सहयोग के लिए धन्यवाद।

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
