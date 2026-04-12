export const viralInfectionLeave = {
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
    en: "Sick Leave Application for Viral Infection",
    hi: "वायरल इंफेक्शन के लिए छुट्टी का आवेदन पत्र",
  },
  subtitle: {
    en: "Learn how to write a sick leave application for viral infection or viral fever.",
    hi: "वायरल इंफेक्शन या वायरल बुखार के लिए छुट्टी का आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ दी गई है।",
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
