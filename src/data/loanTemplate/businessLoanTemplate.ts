/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */

import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const businessLoanTemplate = {
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
    // 2. BUSINESS LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "businessLoan",
      title: {
        en: "Business Loan Application",
        hi: "बिज़नेस लोन आवेदन"
      },
      description: {
        en: "Format for requesting a business loan for expansion, setup or working capital.",
        hi: "व्यवसाय विस्तार, स्थापना या कार्यशील पूंजी के लिए लोन का अनुरोध करने का प्रारूप।"
      },
      bestFor: {
        en: "Small businesses, startups, expansion capital",
        hi: "छोटे व्यवसाय, स्टार्टअप, विस्तार पूंजी"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The Branch Manager  
[Bank Name]  
[Branch Address]

Subject: Application for Business Loan

Respected Sir/Madam,

I am writing to request a business loan of INR [Loan Amount] for [purpose: expansion/working capital/new unit]. I am the proprietor/partner of [Business Name], operating for the past [X] years with stable growth.

Our annual turnover is INR [Turnover], and financial statements of the last three years are attached. The requested loan will help us increase productivity and grow the business further.

I kindly request you to process my application at the earliest.

Thank you for your support.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]  
[शाखा का पता]

विषय: बिज़नेस लोन हेतु आवेदन

महोदय/महोदया,

मैं INR [Loan Amount] के बिज़नेस लोन हेतु आवेदन प्रस्तुत करता/करती हूँ। यह लोन [उद्देश्य: विस्तार/कार्यशील पूंजी/नई यूनिट स्थापना] के लिए आवश्यक है। मैं [Business Name] का स्वामी/सहभागी हूँ और पिछले [X] वर्षों से व्यवसाय चला रहा/रही हूँ।

हमारा वार्षिक टर्नओवर INR [Turnover] है और पिछले तीन वर्षों के वित्तीय दस्तावेज संलग्न हैं। यह लोन हमें उत्पादन बढ़ाने और व्यवसाय का विस्तार करने में सहायता करेगा।

कृपया मेरे आवेदन को शीघ्र स्वीकृति प्रदान करने का कष्ट करें।

धन्यवाद।

भवदीय,  
[आपका नाम]`
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
      icon: FileText,
      link: "/templates/bank-statement"
    },
    {
      title: { en: "Application for ATM Card Issue", hi: "एटीएम कार्ड जारी करने के लिए आवेदन" },
      description: { en: "Format for applying for a new ATM card.", hi: "नया एटीएम कार्ड पाने के लिए प्रारूप।" },
      icon: Briefcase,
      link: "/templates/atm-card"
    },
    {
      title: { en: "Application for Address Change in Bank", hi: "बैंक में पता बदलने के लिए आवेदन" },
      description: { en: "Update address details in bank records.", hi: "बैंक रिकॉर्ड में पता अपडेट करने हेतु।" },
      icon: GraduationCap,
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
