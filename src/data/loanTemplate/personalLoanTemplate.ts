/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */

export const personalLoanTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug: "/applications" },
    subcategory: {
      en: "Loan Applications",
      hi: "ऋण आवेदन",
      slug: "/applications/loan",
    },
    template: {
      en: "Loan Application Formats",
      hi: "लोन आवेदन प्रारूप",
      slug: "",
    },
  },

  title: {
    en: "Loan Application Formats for All Purposes",
    hi: "सभी प्रकार के लोन के लिए आवेदन प्रारूप",
  },

  subtitle: {
    en: "Find ready-made formats for Personal Loan, Home Loan, Education Loan, Business Loan, Car Loan and Emergency Loan applications.",
    hi: "पर्सनल लोन, होम लोन, एजुकेशन लोन, बिजनेस लोन, कार लोन और इमरजेंसी लोन के लिए तैयार आवेदन प्रारूप।",
  },

  category: { en: "Loan Applications", hi: "ऋण आवेदन" },
  updatedDate: "January 2025",

  // ----------------------------------------------------
  // VARIATIONS (6 loan types)
  // ----------------------------------------------------
  variations: [
    // ----------------------------------------------------
    // 1. PERSONAL LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "generalPersonalLoan",
      title: {
        en: "Personal Loan Application to Bank",
        hi: "बैंक में पर्सनल लोन हेतु आवेदन",
      },
      description: {
        en: "A professional format for requesting a personal loan for medical, family, or personal needs.",
        hi: "चिकित्सा, पारिवारिक या व्यक्तिगत आवश्यकताओं के लिए पर्सनल लोन का अनुरोध करने हेतु पेशेवर प्रारूप।",
      },
      bestFor: {
        en: "Personal financial needs, urgent expenses",
        hi: "व्यक्तिगत वित्तीय आवश्यकताएँ, अचानक खर्च",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Branch Manager  
[Bank Name]  
[Branch Address]  

Subject: Application for Personal Loan of ₹[Amount] for [Purpose]

Respected Sir/Madam,  

I am writing to apply for a personal loan of ₹[Loan Amount, e.g., 10,00,000] from your bank for [Specific Purpose, e.g., home renovation/medical treatment/education]

I am currently employed as a [Your Job Title] at [Company Name] with a monthly income of ₹[Salary]. I have been working in this role for [Years of Experience] years and have a stable financial standing. I have no outstanding defaults or pending liabilities   

I have attached all requisite documents for your perusal, including KYC documents, salary slips for the last 3 months, bank statements, and the completed application form.

I assure you of timely repayments and am willing to comply with all your bank's policies regarding the loan tenure and interest rate.  

I kindly request you to process my application at the earliest. I am available for any further verification or discussion as required.  

Thank you for considering my application.  

Yours sincerely,  
[Your Full Name]  
Mobile: [Your Contact Number]  
Email: [Your Email]  
Address: [Your Address]  
Date: [Date]  `,

        hi: `सेवा में,
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: ₹[राशि] के व्यक्तिगत ऋण (Personal Loan) हेतु आवेदन

महोदय/महोदया,

मैं आपके बैंक से ₹[Loan Amount, जैसे 10,00,000] का व्यक्तिगत ऋण [उद्देश्य, जैसे घर की मरम्मत/चिकित्सा उपचार/शिक्षा] के लिए आवेदन करना चाहता/चाहती हूँ।

मैं वर्तमान में [आपका पद] के रूप में [कंपनी का नाम] में कार्यरत हूँ और मेरी मासिक आय ₹[Salary] है। इस भूमिका में मुझे कार्य करते हुए [Years of Experience] वर्ष हो चुके हैं, और मेरी वित्तीय स्थिति स्थिर है। मेरे ऊपर किसी भी प्रकार की बकाया देनदारी या डिफॉल्ट नहीं है।

मैंने आपके अवलोकन हेतु सभी आवश्यक दस्तावेज संलग्न कर दिए हैं, जिनमें KYC दस्तावेज, पिछले 3 महीनों की वेतन पर्चियाँ, बैंक स्टेटमेंट तथा भरा हुआ आवेदन फॉर्म शामिल है।

मैं आपको आश्वस्त करता/करती हूँ कि मैं ऋण की सभी किश्तें समय पर जमा करूँगा/करूँगी तथा बैंक की सभी शर्तों और नियमों का पालन करूँगा/करूँगी।

अतः आपसे विनम्र अनुरोध है कि कृपया मेरे आवेदन को शीघ्र प्रक्रिया में लें। किसी भी प्रकार की अतिरिक्त जानकारी या सत्यापन के लिए मैं उपलब्ध हूँ।

धन्यवाद।

भवदीय/भवदिया,
[आपका पूरा नाम]
मोबाइल: [आपका संपर्क नंबर]
ईमेल: [आपका ईमेल]
पता: [आपका पता]
तारीख: [तारीख]`,
      },
    },
    {
      id: "personalLoanWithExistingBank",
      title: {
        en: "Personal Loan With Existing Bank",
        hi: "बैंक में पर्सनल लोन हेतु आवेदन",
      },
      description: {
        en: "A professional format for requesting a personal loan for medical, family, or personal needs.",
        hi: "चिकित्सा, पारिवारिक या व्यक्तिगत आवश्यकताओं के लिए पर्सनल लोन का अनुरोध करने हेतु पेशेवर प्रारूप।",
      },
      bestFor: {
        en: "Personal financial needs, urgent expenses",
        hi: "व्यक्तिगत वित्तीय आवश्यकताएँ, अचानक खर्च",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Branch Manager
[Bank Name]
[Branch Address]

Subject: Application for Personal Loan of ₹[Loan Amount] for [Specific Purpose, e.g., Home Renovation]

Respected Sir/Madam,

I, [Your Full Name], have been maintaining a savings account in your bank for the last [Number of Years] years, and my account number is [Account Number]. I would like to apply for a personal loan of ₹[Loan Amount] for [Reason for Loan].

I am currently employed as a [Your Job Title] at [Company/Organization Name], and my monthly income is ₹[Salary]. I have a stable financial background and can comfortably manage the loan EMIs. I am willing to opt for a repayment period of [X Years] or as per the bank’s policy. I maintain a healthy account balance and a strong credit history

I have attached all the required documents, including identity proof, address proof, salary slips, and bank statements.

I kindly request you to consider my application and process it at the earliest. I shall be grateful for your support and cooperation.

Thank you.
Sincerely,
[Your Full Name]
Mobile: [Your Contact Number]
Address: [Your Address]
Date: [DD/MM/YYYY]
`,

        hi: `प्रति,
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: [विशेष उद्देश्य, जैसे: घर की मरम्मत] के लिए ₹[ऋण राशि] के व्यक्तिगत ऋण हेतु आवेदन

आदरणीय महोदय/महोदया,

मैं, [आपका पूरा नाम], पिछले [वर्षों की संख्या] वर्षों से आपके बैंक में एक बचत खाता संचालित कर रहा हूं/रही हूं, और मेरा खाता नंबर [खाता नंबर] है। मैं [ऋण का कारण] के लिए ₹[ऋण राशि] का व्यक्तिगत ऋण लेने के लिए आवेदन करना चाहता हूं/चाहती हूं।

मैं वर्तमान में [कंपनी/संस्था का नाम] में [आपकी जॉब पोस्ट] के पद पर कार्यरत हूं/हूं, और मेरी मासिक आय ₹[वेतन] है। मेरी आर्थिक स्थिति स्थिर है और मैं ऋण की ईएमआई आसानी से चुका सकता हूं/सकती हूं। मैं [X वर्षों] की अवधि में या बैंक की नीति के अनुसार ऋण चुकाना चाहता हूं/चाहती हूं। मेरे खाते में पर्याप्त शेष राशि है और मेरा क्रेडिट इतिहास अच्छा है।

मैंने सभी आवश्यक दस्तावेज़, जैसे पहचान प्रमाण, पता प्रमाण, वेतन पर्ची और बैंक स्टेटमेंट संलग्न किए हैं।

मेरी विनम्र प्रार्थना है कि आप मेरा आवेदन पर विचार करें और इसे शीघ्रता से आगे बढ़ाएं। मैं आपके सहयोग के लिए आभारी रहूंगा/रहूंगी।

धन्यवाद।
आपका विश्वासी,
[आपका पूरा नाम]
मोबाइल नंबर: [आपका संपर्क नंबर]
पता: [आपका पता]
दिनांक: [दिन/महीना/साल]`,
      },
    },
  ],

  // ----------------------------------------------------
  // HOW TO WRITE
  // ----------------------------------------------------
  howToWrite: {
    title: {
      en: "Tips to Write a Perfect Loan Application",
      hi: "सही लोन आवेदन लिखने के टिप्स",
    },
    tips: [
      {
        text: {
          en: "Mention the exact loan amount and reason clearly.",
          hi: "लोन राशि और कारण को स्पष्ट रूप से लिखें।",
        },
      },
      {
        text: {
          en: "Provide accurate financial and employment details.",
          hi: "सही वित्तीय और रोजगार विवरण प्रदान करें।",
        },
      },
      {
        text: {
          en: "Maintain a formal and respectful tone.",
          hi: "औपचारिक और विनम्र भाषा का उपयोग करें।",
        },
      },
      {
        text: {
          en: "Attach all required supporting documents.",
          hi: "सभी आवश्यक दस्तावेज संलग्न करें।",
        },
      },
      {
        text: {
          en: "Keep the letter simple, clear and direct.",
          hi: "पत्र को सरल, स्पष्ट और सीधा रखें।",
        },
      },
    ],
  },

  // ----------------------------------------------------
  // RELATED TEMPLATES
  // ----------------------------------------------------
  relatedTemplates: [
    {
      title: {
        en: "Application for Bank Statement",
        hi: "बैंक स्टेटमेंट के लिए आवेदन",
      },
      description: {
        en: "Useful for banking-related requests.",
        hi: "बैंकिंग संबंधित अनुरोधों के लिए उपयोगी।",
      },
      icon: "FileText",
      link: "/templates/bank-statement",
    },
    {
      title: {
        en: "Application for ATM Card Issue",
        hi: "एटीएम कार्ड जारी करने के लिए आवेदन",
      },
      description: {
        en: "Format for applying for a new ATM card.",
        hi: "नया एटीएम कार्ड पाने के लिए प्रारूप।",
      },
      icon: "Briefcase",
      link: "/templates/atm-card",
    },
    {
      title: {
        en: "Application for Address Change in Bank",
        hi: "बैंक में पता बदलने के लिए आवेदन",
      },
      description: {
        en: "Update address details in bank records.",
        hi: "बैंक रिकॉर्ड में पता अपडेट करने हेतु।",
      },
      icon: "GraduationCap",
      link: "/templates/address-change",
    },
  ],

  // ----------------------------------------------------
  // BLOG ARTICLES
  // ----------------------------------------------------
  blogArticles: [
    {
      title: {
        en: "How to Write a Loan Application to Bank",
        hi: "बैंक को लोन आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "Simple tips to write a perfect bank loan application.",
        hi: "सही बैंक लोन आवेदन लिखने के आसान टिप्स।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/how-to-write-loan-application",
    },
    {
      title: {
        en: "Documents Required for Loan Approval",
        hi: "लोन स्वीकृति के लिए आवश्यक दस्तावेज़",
      },
      excerpt: {
        en: "Checklist for all loan types.",
        hi: "सभी प्रकार के लोन के लिए दस्तावेज़ चेकलिस्ट।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/loan-documents",
    },
    {
      title: {
        en: "Common Mistakes in Loan Applications",
        hi: "लोन आवेदनों में सामान्य गलतियाँ",
      },
      excerpt: {
        en: "Avoid mistakes to increase approval chances.",
        hi: "स्वीकृति की संभावना बढ़ाने के लिए इन गलतियों से बचें।",
      },
      readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
      link: "/blog/loan-application-mistakes",
    },
  ],

  // ----------------------------------------------------
  // FAQ SECTION
  // ----------------------------------------------------
  faqs: [
    {
      question: {
        en: "How long should a loan application be?",
        hi: "लोन आवेदन कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "One page is enough. Keep the content clear and precise.",
        hi: "एक पेज पर्याप्त है। सामग्री स्पष्ट और संक्षिप्त रखें।",
      },
    },
    {
      question: {
        en: "Should I mention my account number?",
        hi: "क्या मुझे अपना खाता नंबर लिखना चाहिए?",
      },
      answer: {
        en: "Yes, always mention your account number for faster processing.",
        hi: "हाँ, तेज़ प्रक्रिया के लिए खाता संख्या अवश्य लिखें।",
      },
    },
    {
      question: {
        en: "Is it necessary to attach income proof?",
        hi: "क्या आय प्रमाण संलग्न करना आवश्यक है?",
      },
      answer: {
        en: "Yes, income proof is mandatory for loan approval.",
        hi: "हाँ, लोन स्वीकृति के लिए आय प्रमाण अनिवार्य है।",
      },
    },
    {
      question: {
        en: "How soon can a loan be approved?",
        hi: "लोन कितने समय में स्वीकृत हो सकता है?",
      },
      answer: {
        en: "Depending on the bank, it may take 3–7 working days.",
        hi: "बैंक के अनुसार इसमें 3–7 कार्य दिवस लग सकते हैं।",
      },
    },
  ],
};
