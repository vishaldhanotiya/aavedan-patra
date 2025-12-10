/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */


export const homeLoanTemplate = {
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
    // 4. HOME LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "homeLoan",
      title: {
        en: "Home Loan Application",
        hi: "होम लोन आवेदन"
      },
      description: {
        en: "Format for requesting a home loan to purchase or construct a house.",
        hi: "घर खरीदने या निर्माण के लिए होम लोन का आवेदन प्रारूप।"
      },
      bestFor: {
        en: "Home purchase or construction",
        hi: "घर खरीदने या निर्माण"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
The Branch Manager
[Bank Name]
[Branch Address]

Subject: Request for Sanction of Home Loan

Respected Sir/Madam,

I hereby submit my application for the sanction of a home loan amounting to INR [Loan Amount] for the purchase/construction of a residential property situated at [Property Location]. The total cost of the said property is INR [Total Cost], and I seek to avail the loan for a tenure of [Tenure] years.

I am currently employed as [Job Title] with [Company Name], drawing a monthly income of INR [Income]. I have been maintaining a savings account with your esteemed bank for the past [X Years] under account number [Account Number]. I would like to state that I have a stable financial profile with no major outstanding liabilities.

I am enclosing all necessary documents, including property papers, income proof, bank statements, and identity and address proof. I humbly request you to examine my application and initiate the loan processing at the earliest.

I shall be grateful for your cooperation.

Thanking you,
Yours faithfully,
[Your Name]
[Your Address]
[Phone Number]`,

        hi: `सेवा में,
शाखा प्रबंधक
[बैंक का नाम]
[शाखा का पता]

विषय: आवास ऋण (Home Loan) स्वीकृति हेतु आवेदन

महोदय/महोदया,

मैं विनम्रतापूर्वक निवेदन करता/करती हूँ कि कृपया मुझे INR [Loan Amount] का आवास ऋण प्रदान करने की कृपा करें। यह ऋण मैं [Property Location] स्थित आवासीय संपत्ति के क्रय/निर्माण हेतु लेना चाहता/चाहती हूँ। उक्त संपत्ति की कुल लागत INR [Total Cost] है, तथा मैं इस ऋण को [Tenure] वर्षों की अवधि के लिए लेना चाहता/चाहती हूँ।

वर्तमान में मैं [Company Name] में [Job Title] के पद पर कार्यरत हूँ, तथा मेरी मासिक आय INR [Income] है। मैं पिछले [X Years] वर्षों से आपके प्रतिष्ठित बैंक का ग्राहक हूँ और मेरा बचत खाता संख्या [Account Number] है। मेरी वित्तीय स्थिति स्थिर है तथा मुझ पर कोई प्रमुख बकाया देनदारी नहीं है।

मैं अपने आवेदन के साथ आवश्यक दस्तावेज—संपत्ति से संबंधित कागजात, आय प्रमाण पत्र, बैंक विवरण, पहचान एवं पते का प्रमाण—संलग्न कर रहा/रही हूँ।
अतः आपसे विनम्र अनुरोध है कि कृपया मेरे आवेदन पर विचार कर इसे शीघ्र स्वीकृत करने की कृपा करें।

आपके समय और सहयोग के लिए धन्यवाद।

भवदीय/भवदीया,
[Your Name]
[Your Address]`
      }
    }
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
