/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */


export const educationLoanTemplate = {
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
    // 3. EDUCATION LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "educationLoan",
      title: {
        en: "Education Loan Application",
        hi: "शिक्षा लोन आवेदन"
      },
      description: {
        en: "Application format for students applying for an education loan.",
        hi: "शिक्षा लोन हेतु आवेदन करने वाले छात्रों के लिए प्रारूप।"
      },
      bestFor: {
        en: "Higher studies, study abroad, college fees",
        hi: "उच्च शिक्षा, विदेश में पढ़ाई, कॉलेज फीस"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `
To,
The Branch Manager
[Bank Name]
[Branch Address]

Subject: Application for Education Loan

Respected Sir/Madam,

I am applying for an education loan of INR [Loan Amount] to pursue my [Course Name] at [University/College Name]. I have secured admission, and I am enclosing the offer letter and the detailed fee structure for your reference. The total estimated cost of the course is INR [Total Course Cost], and the duration of the program is [X years].

I have completed my [Previous Qualification] with [Percentage/Grade], fulfilling the eligibility criteria for the course.

My [father/mother/guardian], [Name], employed as [Job Title] at [Company/Business Name], will act as the co-applicant for this loan. We maintain a savings account with your bank, bearing account number [Account Number].

All necessary documents, including identity proofs, income proofs, academic records, and admission letters, are enclosed for your kind perusal. I request you to kindly process my education loan application at the earliest. I am available for any further verification or discussion as required.

Thank you for your time and consideration.

Sincerely,
[Your Name]
[Address]
[Phone Number]
[Email Address]`,

        hi: `सेवा में,  
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: शिक्षा ऋण प्रदान करने के संबंध में आवेदन

महोदय/महोदया,

सविनय निवेदन है कि मैं [University/College Name] में [Course Name] करने हेतु चयनित हुआ/हुई हूँ। इस पाठ्यक्रम की कुल अनुमानित लागत INR [Total Course Cost] है। अतः पाठ्यक्रम शुल्क एवं अन्य शैक्षणिक व्ययों की पूर्ति हेतु मुझे INR [Loan Amount] के शिक्षा ऋण की आवश्यकता है।

मैं अपना [Previous Qualification] [Percentage/Grade] के साथ उत्तीर्ण कर चुका/चुकी हूँ। पाठ्यक्रम की अवधि [X वर्ष] है। प्रवेश पत्र, शुल्क संरचना, शैक्षणिक अभिलेख एवं अन्य आवश्यक दस्तावेज़ संलग्न हैं।

मेरे [पिता/माता/अभिभावक], [Name], जो [Company/Business Name] में [Job Title] के पद पर कार्यरत हैं, इस ऋण के सह-आवेदक होंगे। हमारा आपके बैंक में बचत खाता संख्या [Account Number] है, जिसे आप दस्तावेज़ी प्रक्रिया हेतु संदर्भित कर सकते हैं।

अतः आपसे विनम्र अनुरोध है कि कृपया मेरे आवेदन पर सहानुभूतिपूर्वक विचार कर शिक्षा ऋण शीघ्र स्वीकृत करने की कृपा करें। आवश्यकता पड़ने पर मैं किसी भी प्रकार की अतिरिक्त जानकारी या सत्यापन हेतु उपलब्ध हूँ।

आपके सहयोग हेतु मैं सदा आभारी रहूँगा/रहूँगी।

भवदीय,
[Your Name]
[पूरा पता]
[फ़ोन नंबर]
[ईमेल आईडी]
तारीख: [Date]`
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
