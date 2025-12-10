/**
 * LOAN APPLICATION PILLAR TEMPLATE (BILINGUAL)
 * Includes: Personal Loan, Business Loan, Education Loan, Home Loan, Car Loan, Emergency Loan
 */


export const loanApplicationTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Loan Applications", hi: "ऋण आवेदन", slug:"/applications/loan" },
    template: { en: "Loan Application Formats", hi: "लोन आवेदन प्रारूप", slug:"/" }
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
    // 1. PERSONAL LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "personalLoan",
      title: {
        en: "Personal Loan Application to Bank",
        hi: "बैंक में पर्सनल लोन हेतु आवेदन"
      },
      description: {
        en: "A professional format for requesting a personal loan for medical, family, or personal needs.",
        hi: "चिकित्सा, पारिवारिक या व्यक्तिगत आवश्यकताओं के लिए पर्सनल लोन का अनुरोध करने हेतु पेशेवर प्रारूप।"
      },
      bestFor: {
        en: "Personal financial needs, urgent expenses",
        hi: "व्यक्तिगत वित्तीय आवश्यकताएँ, अचानक खर्च"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Branch Manager  
[Bank Name]  
[Branch Address]

Subject: Application for Personal Loan

Respected Sir/Madam,

I am writing to request a personal loan of INR [Loan Amount]. I have been maintaining a savings account with your branch for the last [X] years under account number [Account Number].

The loan is required to meet [reason: medical need/personal expenses/home repair]. I assure you that I will comply with all the loan terms and repay the EMIs on time.

Kindly inform me about the required documents and the next steps in the approval process.

Thank you for your assistance.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]  
[शाखा का पता]

विषय: पर्सनल लोन हेतु आवेदन

महोदय/महोदया,

मैं पर्सनल लोन की राशि INR [Loan Amount] के लिए आवेदन कर रहा/रही हूँ। मैं पिछले [X] वर्षों से आपके बैंक का ग्राहक हूँ और मेरा खाता संख्या [Account Number] है।

यह लोन [कारण: चिकित्सा जरूरत/व्यक्तिगत खर्च/घर मरम्मत] के लिए आवश्यक है। मैं समय पर किस्तों का भुगतान करने का पूर्ण आश्वासन देता/देती हूँ।

कृपया आवश्यक दस्तावेज़ों और प्रक्रिया की जानकारी प्रदान करने का कष्ट करें।

धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    },

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
        en: `To,  
The Branch Manager  
[Bank Name]  
[Branch Address]

Subject: Application for Education Loan

Respected Sir/Madam,

I am applying for an education loan of INR [Loan Amount] to pursue my [Course Name] from [University/College]. I have secured admission and attached the offer letter along with the fee structure.

My parent/guardian will act as co-applicant, and all identity, income and academic documents are enclosed.

Kindly process my application at the earliest.

Thank you.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]  
[शाखा का पता]

विषय: शिक्षा लोन हेतु आवेदन

महोदय/महोदया,

मैं [University/College] में [Course Name] करने हेतु INR [Loan Amount] का शिक्षा लोन प्राप्त करना चाहता/चाहती हूँ। मुझे प्रवेश मिल चुका है और ऑफर लेटर तथा फीस स्ट्रक्चर संलग्न हैं।

मेरे माता-पिता/अभिभावक सह-आवेदक होंगे। सभी पहचान, आय और शैक्षणिक प्रमाणपत्र संलग्न हैं।

कृपया मेरे आवेदन को शीघ्र स्वीकृति प्रदान करें।

धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    },

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

Subject: Application for Home Loan

Respected Sir/Madam,

I am writing to apply for a home loan of INR [Loan Amount] for purchasing/construction of a house located at [Property Location]. I am employed with [Company Name] earning a monthly income of INR [Income].

I am attaching property papers, salary slips and identity documents as required.

Kindly process my application at the earliest.

Thank you.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]  
[शाखा का पता]

विषय: होम लोन हेतु आवेदन

महोदय/महोदया,

मैं [Property Location] पर घर खरीदने/निर्माण हेतु INR [Loan Amount] के होम लोन के लिए आवेदन करता/करती हूँ। मैं [Company Name] में कार्यरत हूँ और मेरी मासिक आय INR [Income] है।

संपत्ति दस्तावेज़, सैलरी स्लिप और पहचान पत्र संलग्न हैं।

कृपया आवेदन को शीघ्र प्रक्रिया में लें।

धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    },

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

I wish to apply for a car loan of INR [Loan Amount] to purchase a [Car Model]. I am a salaried employee at [Company Name] with stable financial background.

I request you to guide me through the documentation and approval process.

Thank you.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]  
[शाखा का पता]

विषय: कार लोन हेतु आवेदन

महोदय/महोदया,

मैं INR [Loan Amount] में [Car Model] खरीदने हेतु कार लोन का आवेदन करता/करती हूँ। मैं [Company Name] में कार्यरत हूँ और मेरी आर्थिक स्थिति स्थिर है।

कृपया प्रक्रिया और आवश्यक दस्तावेजों की जानकारी प्रदान करें।

धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    },

    // ----------------------------------------------------
    // 6. EMERGENCY LOAN APPLICATION
    // ----------------------------------------------------
    {
      id: "emergencyLoan",
      title: {
        en: "Emergency Loan Request Letter",
        hi: "आपातकालीन लोन अनुरोध पत्र"
      },
      description: {
        en: "Format for requesting urgent financial help due to medical or personal crisis.",
        hi: "चिकित्सा या व्यक्तिगत संकट में आपातकालीन लोन का अनुरोध करने का प्रारूप।"
      },
      bestFor: {
        en: "Medical emergencies, urgent personal needs",
        hi: "चिकित्सा आपातकाल, तात्कालिक व्यक्तिगत आवश्यकता"
      },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Branch Manager  
[Bank Name]  
[Branch Address]

Subject: Request for Emergency Loan

Respected Sir/Madam,

Due to an unexpected emergency related to [reason], I urgently require financial assistance. I request an emergency loan of INR [Loan Amount]. 

I assure timely repayment and request quick processing of the application.

Thank you for your support.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]  
[शाखा का पता]

विषय: आपातकालीन लोन हेतु अनुरोध

महोदय/महोदया,

[कारण] से संबंधित अचानक आपातकाल के कारण मुझे तुरंत वित्तीय सहायता की आवश्यकता है। अतः कृपया INR [Loan Amount] का आपातकालीन लोन स्वीकृत करने का कष्ट करें।

मैं समय पर भुगतान करने का आश्वासन देता/देती हूँ। कृपया आवेदन को शीघ्र प्रक्रिया में लें।

धन्यवाद।

भवदीय,  
[आपका नाम]`
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
