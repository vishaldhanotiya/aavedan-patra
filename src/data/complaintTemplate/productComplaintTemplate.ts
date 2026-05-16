export const productComplaintTemplate = {
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
    en: "Product Complaint Letters",
    hi: "उत्पाद शिकायत पत्र",
  },

  subtitle: {
    en: "Professional complaint letter formats for defective, damaged, expired, low-quality, or wrong products including refund, replacement, and warranty-related issues.",
    hi: "खराब, क्षतिग्रस्त, एक्सपायर्ड, निम्न गुणवत्ता वाले या गलत उत्पादों से संबंधित शिकायतों के लिए पेशेवर प्रारूप, जिनमें रिफंड, रिप्लेसमेंट और वारंटी समस्याएँ शामिल हैं।",
  },

  category: {
    en: "Complaint Letters",
    hi: "शिकायत पत्र",
  },

  updatedDate: "January 2025",

  variations: [
    // 1. Product Complaint
    {
      id: "productComplaint",
      title: { en: "Product Complaint Letter", hi: "उत्पाद शिकायत पत्र" },
      description: {
        en: "Used to report issues related to defective, damaged, or low-quality products.",
        hi: "खराब, क्षतिग्रस्त या निम्न-गुणवत्ता वाले उत्पादों की शिकायत दर्ज करने के लिए।",
      },
      bestFor: {
        en: "Product defects, warranty, replacement",
        hi: "उत्पाद खराबी, वारंटी, बदलने का अनुरोध",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
Customer Support
[Company Name]

Subject: Complaint Regarding Defective Product

Respected Sir/Madam,

I hope you are doing well.

I am writing to formally lodge a complaint regarding a product I purchased from your company on [purchase date]. Unfortunately, the product ([product name/model]) I received is defective/damaged/not as described.

Issue Description:
[Briefly explain the problem clearly — for example: not working, damaged on arrival, missing parts, poor quality, etc.]

Order Details:
  1. Order Number: [XXXX]
  2. Product Name: [Product Name]
  3. Date of Purchase: [Date]

I have attached photos of the product along with a copy of the purchase invoice for your reference.

This has caused inconvenience, and I kindly request a suitable resolution at the earliest, such as a replacement, repair, or full refund, as per your company policy.

Please let me know the next steps in this process.

Thank you for your prompt attention to this matter. I look forward to your response.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
कस्टमर सपोर्ट
[कंपनी का नाम]

विषय: खराब उत्पाद के संबंध में शिकायत

मैं आपके प्रतिष्ठान से दिनांक [खरीद की तारीख] को खरीदे गए एक उत्पाद के संबंध में औपचारिक शिकायत दर्ज कराना चाहता हूँ। मुझे प्राप्त हुआ उत्पाद ([उत्पाद का नाम/मॉडल]) दोषपूर्ण/क्षतिग्रस्त/विवरण के अनुरूप नहीं है।

समस्या का विवरण:
[यहाँ समस्या को संक्षेप में स्पष्ट रूप से लिखें — जैसे उत्पाद काम नहीं कर रहा, टूटा हुआ मिला, आवश्यक पार्ट्स नहीं हैं, गुणवत्ता खराब है आदि।]

ऑर्डर विवरण:
  1.ऑर्डर संख्या: [XXXX]
  2.उत्पाद का नाम: [उत्पाद का नाम]
  3.खरीद की तारीख: [तारीख]

इस ईमेल के साथ मैंने उत्पाद की फोटो एवं खरीद की इनवॉइस संलग्न कर दी है, कृपया संदर्भ हेतु देखें।

इस कारण मुझे असुविधा हुई है। अतः आपसे विनम्र निवेदन है कि कंपनी की नीति के अनुसार शीघ्र ही उचित समाधान प्रदान करें, जैसे कि उत्पाद का प्रतिस्थापन (Replacement), मरम्मत (Repair) या पूर्ण धनवापसी (Refund)।

कृपया आगे की प्रक्रिया के बारे में मुझे सूचित करने का कष्ट करें।

आपके शीघ्र उत्तर की प्रतीक्षा में।

धन्यवाद।

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
        en: "How to Write an Effective Product Complaint Letter",
        hi: "प्रभावी उत्पाद शिकायत पत्र कैसे लिखें",
      },
      excerpt: {
        en: "Learn how to write a professional complaint letter for damaged, defective, or wrong products.",
        hi: "खराब, दोषपूर्ण या गलत उत्पादों के लिए पेशेवर शिकायत पत्र लिखना सीखें।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-product-complaint-letter",
    },
    {
      title: {
        en: "Consumer Rights for Defective Products",
        hi: "दोषपूर्ण उत्पादों के लिए उपभोक्ता अधिकार",
      },
      excerpt: {
        en: "Understand your rights regarding refunds, replacements, warranties, and defective products.",
        hi: "रिफंड, रिप्लेसमेंट, वारंटी और दोषपूर्ण उत्पादों से संबंधित अपने अधिकार जानें।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/product-consumer-rights",
    },
  ],

  faqs: [
    {
      question: {
        en: "Should I attach proof with a product complaint?",
        hi: "क्या उत्पाद शिकायत के साथ सबूत संलग्न करना चाहिए?",
      },
      answer: {
        en: "Yes, attaching invoices, warranty cards, photos, or screenshots helps strengthen your complaint.",
        hi: "हाँ, बिल, वारंटी कार्ड, फोटो या स्क्रीनशॉट संलग्न करने से आपकी शिकायत मजबूत होती है।",
      },
    },
    {
      question: {
        en: "Can I file a product complaint through email?",
        hi: "क्या मैं ईमेल के माध्यम से उत्पाद शिकायत दर्ज कर सकता/सकती हूँ?",
      },
      answer: {
        en: "Yes, most companies and sellers accept product complaints through email or customer support portals.",
        hi: "हाँ, अधिकांश कंपनियाँ और विक्रेता ईमेल या कस्टमर सपोर्ट पोर्टल के माध्यम से शिकायत स्वीकार करते हैं।",
      },
    },
    {
      question: {
        en: "How long should a product complaint letter be?",
        hi: "उत्पाद शिकायत पत्र कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "Keep it short, clear, and professional—ideally within one page.",
        hi: "इसे छोटा, स्पष्ट और पेशेवर रखें—आदर्श रूप से एक पेज के भीतर।",
      },
    },
    {
      question: {
        en: "What issues can be mentioned in a product complaint letter?",
        hi: "उत्पाद शिकायत पत्र में किन समस्याओं का उल्लेख किया जा सकता है?",
      },
      answer: {
        en: "You can mention issues like damaged products, defective items, wrong deliveries, expired products, or warranty problems.",
        hi: "आप खराब उत्पाद, दोषपूर्ण सामान, गलत डिलीवरी, एक्सपायर्ड उत्पाद या वारंटी समस्याओं का उल्लेख कर सकते हैं।",
      },
    },
    {
      question: {
        en: "Should I remain polite in a product complaint letter?",
        hi: "क्या मुझे उत्पाद शिकायत पत्र में विनम्र रहना चाहिए?",
      },
      answer: {
        en: "Yes, maintaining a calm and professional tone improves the chances of quick resolution.",
        hi: "हाँ, शांत और पेशेवर भाषा समाधान की संभावना को बढ़ाती है।",
      },
    },
  ],
};
