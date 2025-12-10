/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */

export const carLoanTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Loan Applications", hi: "ऋण आवेदन", slug:"/applications/loan" },
    template: { en: "Loan Application Formats", hi: "लोन आवेदन प्रारूप", slug:"" }
  },

  title: {
    en: "Loan Application Formats for All Purposes",
    hi: "सभी प्रकार के लोन के लिए आवेदन प्रारूप"
  },

  subtitle: {
    en: "Find ready-made formats for Personal Loan, Home Loan, Education Loan, Business Loan, Car Loan and Emergency Loan applications.",
    hi: "पर्सनल लोन, होम लोन, एजुकेशन लोन, बिजनेस लोन, कार लोन और इमरजेंसी लोन के लिए तैयार आवेदन प्रारूप।"
  },

  category: { en: "Loan Applications", hi: "ऋण आवेदन" },
  updatedDate: "January 2025",

  // ----------------------------------------------------
  // VARIATIONS (6 loan types)
  // ----------------------------------------------------
  variations: [
  

    // ----------------------------------------------------
    // 5. CAR LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "carLoan",
      title: {
        en: "Car Loan Application",
        hi: "कार लोन आवेदन"
      },
      description: {
        en: "Application format for requesting a car purchase loan.",
        hi: "कार खरीदने हेतु लोन का आवेदन प्रारूप।"
      },
      bestFor: {
        en: "New or used car purchase",
        hi: "नई या पुरानी कार खरीद"
      },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Branch Manager
[Bank Name]
[Branch Address]

Subject: Application for Car Loan

Respected Sir/Madam,

I would like to apply for a car loan of INR [Loan Amount] to purchase [Car Model]. I am working as [Your Job Title]at [Company Name], and my monthly income is INR [Income]. I also have a savings account in your bank, and my account number is [Account Number].

The on-road price of the car is INR [Price], and I have attached the dealer’s quotation for your reference. I would like to choose a loan tenure of [X years]. I assure you that I will make all EMI payments on time.

I am ready to submit all required documents, including KYC papers, salary slips, bank statements, and any other details needed for processing the loan. I kindly request you to consider my application and start the loan approval process.

Thank you for your support.

Yours sincerely,
[Your Name]
[Contact Number]
[Address]`,

        hi: `सेवा में,
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: कार ऋण (Car Loan) स्वीकृति हेतु आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं [Car Model] वाहन क्रय करने हेतु INR [Loan Amount] का कार ऋण प्राप्त करना चाहता/चाहती हूँ। मैं [Company Name] में [Your Job Title] के पद पर कार्यरत हूँ तथा मेरी मासिक आय INR [Income] है। मेरा बचत खाता आपके बैंक में संचालित है, जिसका खाता संख्या [Account Number] है।

उक्त वाहन की ऑन-रोड कीमत INR [Price] है। इसके संबंध में डीलर द्वारा प्रदान किया गया कोटेशन संलग्न है। मैं [X वर्ष] की ऋण अवधि का विकल्प चुनना चाहता/चाहती हूँ। मैं आपको यह आश्वासन देता/देती हूँ कि ऋण की निर्धारित ईएमआई का भुगतान समयानुसार एवं नियमित रूप से किया जाएगा।

ऋण स्वीकृति हेतु आवश्यक सभी दस्तावेज – केवाईसी दस्तावेज, वेतन पर्चियाँ, बैंक स्टेटमेंट तथा अन्य प्रमाणपत्र – प्रस्तुत करने हेतु मैं तैयार हूँ। अतः आपसे विनम्र निवेदन है कि कृपया मेरे आवेदन पर अनुकंपापूर्वक विचार करते हुए ऋण स्वीकृति की प्रक्रिया आगे बढ़ाने का कष्ट करें।

आपकी कृपा हेतु सदैव आभारी रहूँगा/रहूँगी।

भवदीय,
[आपका नाम]
[संपर्क नंबर]
[पता]`
      }
    },

  ],

  // ----------------------------------------------------
  // HOW TO WRITE
  // ----------------------------------------------------
  howToWrite: {
    title: {
      en: "Tips to Write a Perfect Loan Application",
      hi: "सही लोन आवेदन लिखने के टिप्स"
    },
    tips: [
      {
        text: {
          en: "Mention the exact loan amount and reason clearly.",
          hi: "लोन राशि और कारण को स्पष्ट रूप से लिखें।"
        }
      },
      {
        text: {
          en: "Provide accurate financial and employment details.",
          hi: "सही वित्तीय और रोजगार विवरण प्रदान करें।"
        }
      },
      {
        text: {
          en: "Maintain a formal and respectful tone.",
          hi: "औपचारिक और विनम्र भाषा का उपयोग करें।"
        }
      },
      {
        text: {
          en: "Attach all required supporting documents.",
          hi: "सभी आवश्यक दस्तावेज संलग्न करें।"
        }
      },
      {
        text: {
          en: "Keep the letter simple, clear and direct.",
          hi: "पत्र को सरल, स्पष्ट और सीधा रखें।"
        }
      }
    ]
  },

  // ----------------------------------------------------
  // RELATED TEMPLATES
  // ----------------------------------------------------
  relatedTemplates: [
    {
      title: { en: "Application for Bank Statement", hi: "बैंक स्टेटमेंट के लिए आवेदन" },
      description: { en: "Useful for banking-related requests.", hi: "बैंकिंग संबंधित अनुरोधों के लिए उपयोगी।" },
      icon: 'FileText',
      link: "/templates/bank-statement"
    },
    {
      title: { en: "Application for ATM Card Issue", hi: "एटीएम कार्ड जारी करने के लिए आवेदन" },
      description: { en: "Format for applying for a new ATM card.", hi: "नया एटीएम कार्ड पाने के लिए प्रारूप।" },
      icon: 'Briefcase',
      link: "/templates/atm-card"
    },
    {
      title: { en: "Application for Address Change in Bank", hi: "बैंक में पता बदलने के लिए आवेदन" },
      description: { en: "Update address details in bank records.", hi: "बैंक रिकॉर्ड में पता अपडेट करने हेतु।" },
      icon: 'GraduationCap',
      link: "/templates/address-change"
    }
  ],

  // ----------------------------------------------------
  // BLOG ARTICLES
  // ----------------------------------------------------
  blogArticles: [
    {
      title: { en: "How to Write a Loan Application to Bank", hi: "बैंक को लोन आवेदन कैसे लिखें" },
      excerpt: { en: "Simple tips to write a perfect bank loan application.", hi: "सही बैंक लोन आवेदन लिखने के आसान टिप्स।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/how-to-write-loan-application"
    },
    {
      title: { en: "Documents Required for Loan Approval", hi: "लोन स्वीकृति के लिए आवश्यक दस्तावेज़" },
      excerpt: { en: "Checklist for all loan types.", hi: "सभी प्रकार के लोन के लिए दस्तावेज़ चेकलिस्ट।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/loan-documents"
    },
    {
      title: { en: "Common Mistakes in Loan Applications", hi: "लोन आवेदनों में सामान्य गलतियाँ" },
      excerpt: { en: "Avoid mistakes to increase approval chances.", hi: "स्वीकृति की संभावना बढ़ाने के लिए इन गलतियों से बचें।" },
      readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
      link: "/blog/loan-application-mistakes"
    }
  ],

  // ----------------------------------------------------
  // FAQ SECTION
  // ----------------------------------------------------
  faqs: [
    {
      question: { en: "How long should a loan application be?", hi: "लोन आवेदन कितना लंबा होना चाहिए?" },
      answer: {
        en: "One page is enough. Keep the content clear and precise.",
        hi: "एक पेज पर्याप्त है। सामग्री स्पष्ट और संक्षिप्त रखें।"
      }
    },
    {
      question: { en: "Should I mention my account number?", hi: "क्या मुझे अपना खाता नंबर लिखना चाहिए?" },
      answer: {
        en: "Yes, always mention your account number for faster processing.",
        hi: "हाँ, तेज़ प्रक्रिया के लिए खाता संख्या अवश्य लिखें।"
      }
    },
    {
      question: { en: "Is it necessary to attach income proof?", hi: "क्या आय प्रमाण संलग्न करना आवश्यक है?" },
      answer: {
        en: "Yes, income proof is mandatory for loan approval.",
        hi: "हाँ, लोन स्वीकृति के लिए आय प्रमाण अनिवार्य है।"
      }
    },
    {
      question: { en: "How soon can a loan be approved?", hi: "लोन कितने समय में स्वीकृत हो सकता है?" },
      answer: {
        en: "Depending on the bank, it may take 3–7 working days.",
        hi: "बैंक के अनुसार इसमें 3–7 कार्य दिवस लग सकते हैं।"
      }
    }
  ]
};
