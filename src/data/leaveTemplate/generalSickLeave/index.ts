
export const generalSickLeave = {
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
