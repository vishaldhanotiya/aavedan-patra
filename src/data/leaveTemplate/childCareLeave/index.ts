
export const childCareLeave = {
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
    en: "Sick Leave Application to Take Care of a Child",
    hi: "बच्चे की देखभाल के लिए बीमारी की छुट्टी का आवेदन पत्र"
  },
  subtitle: {
    en: "Learn how to write a sick leave application to take care of your child.",
    hi: "बच्चे की देखभाल के लिए बीमारी की छुट्टी का आवेदन पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ दी गई है।"
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
