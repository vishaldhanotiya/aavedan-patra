
export const sickLeaveApplicationTemplate = {
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
    en: "Sick Leave Application to Manager",
    hi: "मैनेजर को बीमार छुट्टी के लिए आवेदन",
  },

  subtitle: {
    en: "Submit professional sick leave requests including one-day, multi-day, urgent leave, and medical certificate formats.",
    hi: "एक दिन, कई दिनों, आपातकालीन छुट्टी और मेडिकल सर्टिफिकेट सहित पेशेवर बीमार अवकाश आवेदन प्राप्त करें।",
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
     * 1. GENERAL SICK LEAVE
     * ------------------------------------------------------- */
    {
      id: "general",
      title: {
        en: "General Sick Leave Application",
        hi: "सामान्य बीमार छुट्टी आवेदन",
      },
      description: {
        en: "Suitable for regular sick leave for 1–3 days with a simple explanation.",
        hi: "1–3 दिनों की सामान्य बीमार छुट्टी के लिए उपयुक्त।",
      },
      bestFor: { en: "Short sick leave", hi: "कम अवधि की बीमार छुट्टी" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Sick Leave Application

Dear [HR/Manager's Name],

I am writing to inform you that I am suffering from [illness-head ache, fever and cold cough]. Due to this, I will not be able to attend work from [start date] to [end date].

I will resume my duties as soon as I recover. Kindly grant me sick leave for the mentioned period.

Thank you.

Sincerely,
[Your Name]
[Designation]`,

        hi: `विषय: बीमार छुट्टी हेतु आवेदन  

माननीय महोदय/महोदया,  

मैं आपको सूचित करना चाहता/चाहती हूँ कि मैं [बीमारी(सिरदर्द, बुखार, सर्दी)] से पीड़ित हूँ। इसी कारण मैं [आरंभ तिथि] से [अंत तिथि] तक कार्यालय नहीं आ पाऊँगा/पाऊँगी।  

जैसे ही मैं स्वस्थ हो जाऊँगा/जाऊँगी, मैं अपना काम फिर से शुरू कर दूँगा/दूँगी। कृपया मुझे उपरोक्त अवधि के लिए बीमार अवकाश प्रदान करें।

धन्यवाद।  

भवदीय,  
[आपका नाम]  
[पद]`,
      },
    },

    /* -------------------------------------------------------
     * 2. ONE-DAY SICK LEAVE
     * ------------------------------------------------------- */
    {
      id: "oneDay",
      title: {
        en: "One-Day Sick Leave Application",
        hi: "एक दिन की बीमार छुट्टी आवेदन",
      },
      description: {
        en: "Short leave when you need only one day's rest.",
        hi: "केवल एक दिन की बीमारी में उपयोगी।",
      },
      bestFor: { en: "1-day sick leave", hi: "1 दिन की छुट्टी" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: One-Day Sick Leave Application

Dear [HR/Manager's Name],

I am not feeling well today due to [fever/cold/headache] and will not be able to attend the office. Kindly grant me sick leave for today, i.e., [date]. I will complete any pending work once I resume.

Thank you for understanding.

Sincerely,
[Your Name]`,

        hi: `विषय: एक दिन का बीमारी अवकाश आवेदन

मान्यवर,

आज मैं स्वास्थ्य ठीक न होने के कारण (जैसे [बुखार/सर्दी/सिरदर्द]) ऑफिस नहीं आ पाऊँगा/पाऊँगी। अतः कृपया मुझे आज दिनांक [date] का बीमारी अवकाश प्रदान करने की कृपा करें। मैं ठीक होते ही लंबित कार्य पूरा कर दूँगा/दूँगी।

धन्यवाद।

भवदीय,
[आपका नाम]`,
      },
    },

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
    },

    /* -------------------------------------------------------
     * VIRAL INFECTION SICK LEAVE
     * ------------------------------------------------------- */
    {
      id: "viral",
      title: {
        en: "Sick Leave for Viral Infection",
        hi: "वायरल इंफेक्शन के लिए बीमार छुट्टी आवेदन",
      },
      description: {
        en: "For viral fever or viral infection.",
        hi: "वायरल बुखार या वायरल संक्रमण में उपयोगी।",
      },
      bestFor: { en: "2–5 day viral sickness", hi: "2–5 दिन का वायरल संक्रमण" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Sick Leave Request Due to Viral Infection

Dear [HR/Manager's Name], 

I am currently suffering from a viral infection and experiencing weakness. The doctor has advised complete rest and medication for a few days.

Kindly approve my sick leave from [start date] to [end date].  

Thank you.

Sincerely,  
[Your Name]`,

        hi: `विषय: वायरल इंफेक्शन के कारण बीमार छुट्टी हेतु आवेदन

माननीय महोदय/महोदया,

मैं वायरल इंफेक्शन से पीड़ित हूँ और काफी कमजोरी महसूस कर रहा/रही हूँ। डॉक्टर ने मुझे कुछ दिनों के आराम की सलाह दी है।

कृपया मुझे [आरंभ तिथि] से [अंत तिथि] तक बीमार अवकाश प्रदान करने की कृपा करें।  

धन्यवाद।

भवदीय,  
[आपका नाम]`,
      },
    },

    /* -------------------------------------------------------
     * FOOD POISONING SICK LEAVE
     * ------------------------------------------------------- */
    {
      id: "foodPoisoning",
      title: {
        en: "Sick Leave for Food Poisoning",
        hi: "फूड पॉइजनिंग के लिए बीमार छुट्टी आवेदन",
      },
      description: {
        en: "For sudden sickness caused by food poisoning.",
        hi: "फूड पॉइजनिंग से होने वाली तत्काल बीमारी के लिए।",
      },
      bestFor: { en: "1–3 days rest", hi: "1–3 दिन आराम" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Sick Leave Request Due to Food Poisoning

Dear [HR/Manager's Name], 

I am suffering from food poisoning and am unable to attend the office. The doctor has advised me to take proper rest for a day or two. Therefore, I request you to kindly grant me sick leave for [date] / from [start date] to [end date].

I will resume work as soon as I recover.

Sincerely,
[Your Name]`,

        hi: `विषय: फ़ूड पॉइज़निंग के कारण बीमारी की छुट्टी हेतु आवेदन

माननीय सर/मैडम,

मुझे फ़ूड पॉइज़निंग हो गई है और डॉक्टर ने एक–दो दिन आराम करने की सलाह दी है। इस कारण मैं कार्यालय उपस्थित नहीं हो पाऊँगा/पाऊँगी।

अतः कृपया मुझे [तारीख] / [प्रारंभ तिथि] से [समाप्ति तिथि] तक बीमारी की छुट्टी प्रदान करने की कृपा करें।

धन्यवाद।

सधन्यवाद,
[आपका नाम]`,
      },
    },

    /* -------------------------------------------------------
     * MIGRAINE / HEADACHE SICK LEAVE
     * ------------------------------------------------------- */
    {
      id: "migraine",
      title: {
        en: "Sick Leave for Migraine / Headache",
        hi: "माइग्रेन / सिरदर्द के लिए बीमार छुट्टी आवेदन",
      },
      description: {
        en: "For severe headache or migraine issues.",
        hi: "माइग्रेन या तेज़ सिरदर्द की स्थिति में।",
      },
      bestFor: { en: "1-day leave", hi: "1 दिन की छुट्टी" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Sick Leave Request Due to Migraine

Dear [HR/Manager's Name], 

I am experiencing a severe migraine today and am unable to focus on work. I request you to kindly grant me sick leave for today.

Thank you.

Sincerely,  
[Your Name]`,

        hi: `विषय: माइग्रेन के कारण बीमार अवकाश हेतु आवेदन

माननीय महोदय/महोदया,

मुझे आज गंभीर माइग्रेन की समस्या हो रही है और मैं कार्य पर ध्यान केंद्रित नहीं कर पा रहा/पा रही हूँ। कृपया मुझे आज के लिए बीमार अवकाश प्रदान करें।

धन्यवाद।

भवदीय,  
[आपका नाम]`,
      },
    },

    /* -------------------------------------------------------
     * EMERGENCY SICK LEAVE (SUDDEN)
     * ------------------------------------------------------- */
    {
      id: "emergencySick",
      title: {
        en: "Emergency Sick Leave Application",
        hi: "आपातकालीन बीमार छुट्टी आवेदन",
      },
      description: {
        en: "For sudden sickness without prior notice.",
        hi: "अचानक हुई बीमारी, जब पहले से सूचित न कर सकें।",
      },
      bestFor: { en: "Same-day leave", hi: "उसी दिन की छुट्टी" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Emergency Sick Leave Request

Dear [HR/Manager's Name], 

I am feeling extremely unwell and unable to come to office today. As this is sudden, I could not inform earlier.

Kindly approve my emergency sick leave for today.

Sincerely,  
[Your Name]`,

        hi: `विषय: आपातकालीन बीमार अवकाश हेतु आवेदन

माननीय महोदय/महोदया,

मैं अचानक अस्वस्थ हो गया/गई हूँ और आज कार्यालय नहीं आ पाऊँगा/पाऊँगी। स्थिति अचानक होने के कारण पहले से सूचित नहीं कर सका/सकी।

कृपया आज का आपातकालीन बीमार अवकाश प्रदान करें।

भवदीय,  
[आपका नाम]`,
      },
    },

    /* -------------------------------------------------------
     * WORK FROM HOME DUE TO ILLNESS
     * ------------------------------------------------------- */
    {
      id: "workFromHomeSick",
      title: {
        en: "Work From Home Request (Sick)",
        hi: "बीमारी के कारण वर्क फ्रॉम होम अनुरोध",
      },
      description: {
        en: "Useful when you are sick but can work from home.",
        hi: "जब थोड़ी बीमारी में घर से काम कर सकते हों।",
      },
      bestFor: { en: "Mild illness", hi: "हल्की बीमारी" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Request for Work From Home Due to Illness

Dear [HR/Manager's Name], 

I am feeling slightly unwell today and may not be able to commute to the office. However, I am capable of handling my responsibilities from home. Therefore, I kindly request your permission to work from home on [date].

I will remain available on phone, email, and chat for any coordination and will ensure that my tasks are completed without delay.

Thank you for your understanding and support.

Sincerely,
[Your Name]`,

        hi: `विषय: बीमारी के कारण वर्क फ्रॉम होम का अनुरोध

माननीय सर/मैडम,

मैं आज थोड़ा अस्वस्थ महसूस कर रहा/रही हूँ और ऑफिस आने में असमर्थ हूँ। लेकिन मैं घर से अपना कार्य संभाल सकता/सकती हूँ। अतः कृपया मुझे [तारीख] को वर्क फ्रॉम होम की अनुमति देने की कृपा करें।

मैं फोन, ईमेल और चैट पर उपलब्ध रहूँगा/रहूँगी और अपने सभी कार्य समय पर पूरा कर दूँगा/दूँगी।

आपके सहयोग के लिए धन्यवाद।

सधन्यवाद,
[Your Name]`,
      },
    },

    /* -------------------------------------------------------
     * SICK LEAVE FOR CHILD ILLNESS
     * ------------------------------------------------------- */
    {
      id: "childSick",
      title: {
        en: "Sick Leave to Take Care of Child",
        hi: "बच्चे की बीमारी के कारण छुट्टी आवेदन",
      },
      description: {
        en: "For parents when their child is sick.",
        hi: "जब बच्चे की देखभाल के लिए छुट्टी चाहिए।",
      },
      bestFor: { en: "Parents with sick child", hi: "बीमार बच्चे की देखभाल" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Leave Request for Child Care

Dear [HR/Manager's Name], 

I would like to inform you that my child is unwell and requires my care at home. Therefore, I request leave for [date] / from [start date] to [end date]. 

In case of any urgent work, I will try to be available over phone/email. 

Kindly consider and approve my leave request.

Sincerely,
[Your Name]`,

        hi: `विषय: बच्चे की देखभाल के लिए अवकाश हेतु प्रार्थना

आदरणीय सर/मैडम,

मैं आपको सूचित करना चाहता/चाहती हूँ कि मेरा बच्चा बीमार है और उसकी देखभाल के लिए मुझे घर पर रहना आवश्यक है। इसलिए, कृपया मुझे [तारीख] / [आरंभ तिथि] से [अंत तिथि] तक अवकाश प्रदान करने की कृपा करें।

किसी भी आवश्यक कार्य के लिए मैं फ़ोन/ईमेल पर उपलब्ध रहने की कोशिश करूँगा/करूँगी।

कृपया मेरे अवकाश आवेदन पर सहमति प्रदान करें।

धन्यवाद।

सादर,
[आपका नाम]`,
      },
    },


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