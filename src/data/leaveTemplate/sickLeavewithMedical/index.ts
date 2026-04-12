
export const sickLeaveMedicalCertificate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug: "/applications" },
    subcategory: {
      en: "Leave Applications",
      hi: "अवकाश आवेदन",
      slug: "/applications/leave",
    },
    template: {
      en: "Sick Leave Application",
      hi: "बीमार छुट्टी आवेदन",
      slug: "",
    },
  },

  title: {
    en: "Sick Leave Application with Medical Certificate",
    hi: "मेडिकल सर्टिफिकेट के साथ बीमार छुट्टी का आवेदन पत्र"
  },
  subtitle: {
    en: "Learn how to write a sick leave application with a medical certificate for extended illness.",
    hi: "मेडिकल सर्टिफिकेट के साथ बीमार छुट्टी का आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ दी गई है।"
  },

  category: {
    en: "Leave Applications",
    hi: "अवकाश आवेदन",
  },

  updatedDate: "January 2025",

  /* ---------------------------------------------------------
   * VARIATIONS
   * --------------------------------------------------------- */
  variations: [
    /* -------------------------------------------------------
     * 4. SICK LEAVE WITH MEDICAL CERTIFICATE
     * ------------------------------------------------------- */
    {
      id: "medicalCertificate",
      title: {
        en: "Sick Leave Application (With Medical Certificate)",
        hi: "बीमार छुट्टी आवेदन (मेडिकल सर्टिफिकेट सहित)",
      },
      description: {
        en: "For long sick leave that requires doctor’s certificate.",
        hi: "जब लंबी बीमारी में डॉक्टरी प्रमाणपत्र की आवश्यकता हो।",
      },
      bestFor: {
        en: "Medical-proof sick leave",
        hi: "डॉक्टर प्रमाण सहित छुट्टी",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `Subject: Sick Leave Application with Medical Certificate  

Dear [HR/Manager's Name],  

I am suffering from [illness], and as per the doctor’s advice, I need complete rest for [X] days. Therefore, I request sick leave from [start date] to [end date].  

I have attached my medical certificate for your reference.  

Kindly approve my leave request.  

Sincerely,  
[Your Name]`,

        hi: `विषय: मेडिकल सर्टिफिकेट सहित बीमार छुट्टी हेतु आवेदन  

माननीय सर/मैडम,

मैं [रोग का नाम] से पीड़ित हूँ, और डॉक्टर की सलाह के अनुसार मुझे [X] दिनों के पूर्ण आराम की आवश्यकता है। अतः कृपया मुझे [प्रारंभ तिथि] से [समाप्ति तिथि] तक बीमारी की छुट्टी प्रदान करने की कृपा करें।

आपकी जानकारी हेतु मेरा चिकित्सीय प्रमाणपत्र संलग्न है।

जैसे ही स्वास्थ्य सुधरेगा, मैं अपने कार्य पुनः आरंभ कर दूँगा/दूँगी। कृपया मेरे अवकाश आवेदन को स्वीकृत करने की कृपा करें।

सधन्यवाद,
[आपका नाम]`,
      },
    }
  ],

  /* ---------------------------------------------------------
   * HOW TO WRITE SECTION
   * --------------------------------------------------------- */
  howToWrite: {
    title: {
      en: "Tips to Write a Sick Leave Application",
      hi: "बीमार छुट्टी आवेदन लिखने के टिप्स",
    },
    tips: [
      {
        text: {
          en: "Clearly mention illness and leave dates.",
          hi: "बीमारी और अवकाश की तिथियों को स्पष्ट लिखें।",
        },
      },
      {
        text: {
          en: "Keep the tone formal and respectful.",
          hi: "लहजा हमेशा औपचारिक रखें।",
        },
      },
      {
        text: {
          en: "Inform early if possible.",
          hi: "संभव हो तो पहले ही सूचित करें।",
        },
      },
      {
        text: {
          en: "Attach medical certificate for long leave.",
          hi: "लंबी छुट्टी पर मेडिकल सर्टिफिकेट संलग्न करें।",
        },
      },
      {
        text: {
          en: "Promise work continuity after recovery.",
          hi: "सुधार के बाद कार्य जारी रखने का आश्वासन दें।",
        },
      },
    ],
  },

  /* ---------------------------------------------------------
   * RELATED TEMPLATES
   * --------------------------------------------------------- */
  relatedTemplates: [
    {
      title: { en: "Emergency Leave Application", hi: "आपातकालीन अवकाश आवेदन" },
      description: {
        en: "Format for sudden urgent leave",
        hi: "अचानक छुट्टी के लिए प्रारूप",
      },
      icon: "FileText",
      link: "/templates/emergency-leave",
    },
    {
      title: { en: "Medical Leave Application", hi: "मेडिकल अवकाश आवेदन" },
      description: {
        en: "Best for long-term sickness",
        hi: "दीर्घ बीमारी के लिए उपयुक्त",
      },
      icon: "Briefcase",
      link: "/templates/medical-leave",
    },
    {
      title: {
        en: "Leave Application for Office",
        hi: "ऑफिस के लिए अवकाश आवेदन",
      },
      description: {
        en: "General leave application formats",
        hi: "सामान्य छुट्टी आवेदन प्रारूप",
      },
      icon: "GraduationCap",
      link: "/templates/office-leave",
    },
  ],

  /* ---------------------------------------------------------
   * BLOG ARTICLES
   * --------------------------------------------------------- */
  blogArticles: [
    {
      title: {
        en: "How to Write Sick Leave Perfectly",
        hi: "बीमार छुट्टी आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "Simple guide with examples.",
        hi: "उदाहरणों सहित आसान गाइड।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/sick-leave-guide",
    },
    {
      title: {
        en: "When to Submit Medical Certificate",
        hi: "मेडिकल सर्टिफिकेट कब जमा करें",
      },
      excerpt: {
        en: "Know when medical proof is required.",
        hi: "जानें कब मेडिकल प्रमाण आवश्यक है।",
      },
      readTime: { en: "3 min read", hi: "3 मिनट पढ़ें" },
      link: "/blog/medical-certificate-rules",
    },
  ],

  /* ---------------------------------------------------------
   * FAQ
   * --------------------------------------------------------- */
  faqs: [
    {
      question: {
        en: "Do I need a medical certificate?",
        hi: "क्या मेडिकल सर्टिफिकेट जरूरी है?",
      },
      answer: {
        en: "Only if you take more than 2–3 days of sick leave.",
        hi: "यदि आप 2–3 दिनों से ज्यादा छुट्टी ले रहे हैं तो आवश्यक है।",
      },
    },
    {
      question: {
        en: "How many days can I take sick leave?",
        hi: "मैं कितने दिन की बीमार छुट्टी ले सकता/सकती हूँ?",
      },
      answer: {
        en: "Depends on company policy, usually 6–12 days yearly.",
        hi: "कंपनी नीति पर निर्भर करता है, आमतौर पर 6–12 दिन प्रतिवर्ष।",
      },
    },
    {
      question: {
        en: "Can I send sick leave through email?",
        hi: "क्या मैं ईमेल से बीमार छुट्टी भेज सकता/सकती हूँ?",
      },
      answer: {
        en: "Yes, most offices accept email sick leave.",
        hi: "हाँ, अधिकांश कार्यालय ईमेल द्वारा बीमार छुट्टी स्वीकार करते हैं।",
      },
    },
  ],
};





    /* -------------------------------------------------------
     * 3. MULTI-DAY SICK LEAVE
     * ------------------------------------------------------- */
//     {
//       id: "multiDay",
//       title: {
//         en: "Multi-Day Sick Leave Application",
//         hi: "कई दिनों की बीमार छुट्टी आवेदन",
//       },
//       description: {
//         en: "For taking 2–7 days of sick leave due to illness.",
//         hi: "2–7 दिनों की बीमारी में उपयोगी।",
//       },
//       bestFor: { en: "Extended sick leave", hi: "लंबी बीमारी की छुट्टी" },
//       length: { en: "Medium", hi: "मध्यम" },
//       difficulty: { en: "Easy", hi: "आसान" },

//       content: {
//         en: `To,  
// The Manager  
// [Company Name]  

// Subject: Request for Sick Leave  

// Respected Sir/Madam,  

// I am diagnosed with [illness] and the doctor has advised me to take rest for [X] days. Due to this, I will not be able to attend work from [start date] to [end date].  

// I will ensure all pending tasks are updated once I return. Kindly approve my leave request.  

// Thank you.  

// Sincerely,  
// [Your Name]`,

//         hi: `सेवा में,  
// मैनेजर महोदय/महोदया  
// [कंपनी का नाम]  

// विषय: बीमार अवकाश हेतु अनुरोध  

// माननीय महोदय/महोदया,  

// मुझे [बीमारी] होने का निदान हुआ है और डॉक्टर ने मुझे [X] दिनों के आराम की सलाह दी है। इसी कारण मैं [आरंभ तिथि] से [अंत तिथि] तक कार्यालय नहीं आ पाऊँगा/पाऊँगी।  

// वापसी के बाद मैं सभी लंबित कार्य पूरी तरह से अपडेट करूँगा/करूँगी। कृपया मेरे अवकाश अनुरोध को स्वीकृत करने की कृपा करें।  

// धन्यवाद।  

// भवदीय,  
// [आपका नाम]`,
//       },
//     },


  /* -------------------------------------------------------
     * FEVER SICK LEAVE
     * ------------------------------------------------------- */
//     {
//       id: "fever",
//       title: {
//         en: "Sick Leave Application for Fever",
//         hi: "बुखार के लिए बीमार छुट्टी आवेदन",
//       },
//       description: {
//         en: "For taking leave when suffering from fever.",
//         hi: "बुखार की स्थिति में अवकाश के लिए।",
//       },
//       bestFor: { en: "1–3 days fever leave", hi: "1–3 दिन का बुखार अवकाश" },
//       length: { en: "Short", hi: "छोटा" },
//       difficulty: { en: "Easy", hi: "आसान" },

//       content: {
//         en: `To,  
// The Manager  
// [Company Name]

// Subject: Sick Leave Due to Fever

// Respected Sir/Madam,

// I am suffering from high fever and am unable to come to work today. The doctor has advised me to take rest for proper recovery.  

// Therefore, I kindly request sick leave for [date]/from [start date] to [end date].  

// Sincerely,  
// [Your Name]`,

//         hi: `सेवा में,  
// मैनेजर महोदय/महोदया  
// [कंपनी का नाम]

// विषय: बुखार के कारण बीमार अवकाश हेतु आवेदन

// माननीय महोदय/महोदया,

// मैं तेज बुखार से पीड़ित हूँ और आज कार्यालय नहीं आ पाऊँगा/पाऊँगी। डॉक्टर ने मुझे आराम करने की सलाह दी है।  

// अतः कृपया मुझे [तारीख] / [आरंभ तिथि] से [अंत तिथि] तक बीमार अवकाश प्रदान करें।  

// भवदीय,  
// [आपका नाम]`,
//       },
//     },


    /* -------------------------------------------------------
     * COLD & COUGH SICK LEAVE
     * ------------------------------------------------------- */
//     {
//       id: "coldCough",
//       title: {
//         en: "Sick Leave for Cold and Cough",
//         hi: "सर्दी और खांसी के लिए बीमार छुट्टी आवेदन",
//       },
//       description: {
//         en: "Useful during seasonal cold/cough or flu.",
//         hi: "मौसमी सर्दी, खांसी या फ्लू के समय उपयोगी।",
//       },
//       bestFor: { en: "Seasonal sickness", hi: "मौसमी बीमारी" },
//       length: { en: "Short", hi: "छोटा" },
//       difficulty: { en: "Easy", hi: "आसान" },

//       content: {
//         en: `To,  
// The Manager  
// [Company Name]

// Subject: Sick Leave Due to Cold and Cough

// Respected Sir/Madam,

// I am suffering from severe cold and cough and am unable to attend office today. To avoid spreading infection, I need a day of rest.

// Please grant me sick leave for [date].

// Sincerely,  
// [Your Name]`,

//         hi: `सेवा में,  
// मैनेजर महोदय/महोदया  
// [कंपनी का नाम]

// विषय: सर्दी और खांसी के कारण बीमार अवकाश हेतु आवेदन

// माननीय महोदय/महोदया,

// मैं गंभीर सर्दी और खांसी से पीड़ित हूँ और आज कार्यालय आना संभव नहीं है। संक्रमण फैलने से रोकने के लिए मुझे आराम की आवश्यकता है।

// कृपया मुझे [तारीख] के लिए बीमार अवकाश प्रदान करें।

// भवदीय,  
// [आपका नाम]`,
//       },
//     },

// {
//   id: "demiseLeave",
//   title: {
//     en: "Application Regarding the Demise of a Relative",
//     hi: "परिजन के निधन की सूचना हेतु आवेदन",
//   },
//   description: {
//     en: "For informing the employer about the demise of a relative and requesting leave.",
//     hi: "परिजन के निधन की सूचना देने और अवकाश माँगने हेतु आवेदन।",
//   },
//   bestFor: { 
//     en: "Employees requesting leave due to relative's demise", 
//     hi: "परिजन के निधन के कारण अवकाश माँगने वाले कर्मचारी" 
//   },
//   length: { en: "Short", hi: "छोटा" },
//   difficulty: { en: "Easy", hi: "आसान" },

//   content: {
//     en: `To,
// The Manager
// [Company Name]

// Subject: Information Regarding the Demise of My [Grandfather/Uncle]

// Respected Sir/Madam,

// I regret to inform you that my [grandfather/uncle] has passed away on [date]. This loss has deeply affected me and my family.
// I will need to be with my family to perform the necessary rituals.
// Therefore, I request your understanding and support during this difficult time.

// Thank you.

// Sincerely,
// [Your Name]`,

//     hi: `सेवा में,
// प्रबंधक महोदय/महोदया
// [कंपनी का नाम]

// विषय: परिजन के निधन की सूचना हेतु आवेदन

// आदरणीय सर/मैडम,

// मुझे आपको यह बताते हुए अत्यंत दुःख हो रहा है कि मेरे [दादा/चाचा] का [तारीख] को निधन हो गया। इस घटना से मेरा परिवार अत्यंत शोकग्रस्त है।
// मुझे अंतिम संस्कार और अन्य आवश्यक कार्यों हेतु परिवार के साथ रहना आवश्यक है।
// अतः कृपया इस कठिन समय में मेरा सहयोग करें और अवकाश प्रदान करने की कृपा करें।

// धन्यवाद।

// सादर,
// [आपका नाम]`,
//   },
// }