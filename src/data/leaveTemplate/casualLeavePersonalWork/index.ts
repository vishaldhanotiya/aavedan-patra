
export const casualPersonalWorkLeave = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Leave Applications", hi: "अवकाश आवेदन", slug:"/applications/leave" },
    template: { en: "Casual Leave Application", hi: "साधारण अवकाश आवेदन", slug:"" }
  },

  title: { 
    en: "Casual Leave Application to Manager", 
    hi: "मैनेजर को साधारण अवकाश हेतु आवेदन" 
  },

  subtitle: { 
    en: "Use these formats for personal work, urgent reasons, family functions, one-day, and short casual leave.",
    hi: "व्यक्तिगत कार्य, आपातकालीन कारण, पारिवारिक कार्यक्रम, एक दिन या छोटी अवधि के साधारण अवकाश के लिए यह प्रारूप उपयोग करें।"
  },

  category: { en: "Leave Applications", hi: "अवकाश आवेदन" },

  updatedDate: "January 2025",

  /* ---------------------------------------------------------
   * VARIATIONS
   * --------------------------------------------------------- */
  variations: [
    /* -------------------------------------------------------
     * 3. PERSONAL WORK LEAVE
     * ------------------------------------------------------- */
    {
      id: "personalWork",
      title: { en: "Casual Leave for Personal Work", hi: "व्यक्तिगत कार्य के लिए साधारण अवकाश आवेदन" },
      description: { en: "For personal commitments or household work.", hi: "घरेलू कार्य या व्यक्तिगत काम के लिए।" },
      bestFor: { en: "Short personal work", hi: "छोटे व्यक्तिगत कार्य" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Casual Leave for Personal Work

Respected Sir/Madam,

I need to attend some important personal work, due to which I will not be able to come to the office on [date]. Kindly grant me casual leave for the day.

I have completed my priority tasks and will be reachable on my phone if needed.

Thank you for your understanding.

Sincerely,  
[Your Name]`,

        hi: `विषय: व्यक्तिगत कार्य हेतु साधारण अवकाश आवेदन

माननीय महोदय/महोदया,

मुझे कुछ महत्वपूर्ण व्यक्तिगत कार्यों में शामिल होना है, जिसके कारण मैं [तारीख] को कार्यालय नहीं आ पाऊँगा/पाऊँगी। कृपया मुझे उस दिन के लिए अनौपचारिक अवकाश प्रदान करें।

मैंने अपनी प्राथमिकता वाले कार्य पूरे कर लिए हैं और यदि आवश्यकता हुई तो मैं अपने फोन पर संपर्क करने योग्य रहूँगा/रहूँगी।

आपकी सहानुभूति के लिए धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    }
  ],

  /* ---------------------------------------------------------
   * HOW TO WRITE SECTION
   * --------------------------------------------------------- */
  howToWrite: {
    title: { en: "Tips to Write a Casual Leave Application", hi: "साधारण अवकाश आवेदन लिखने के टिप्स" },
    tips: [
      { text: { en: "State your reason clearly but briefly.", hi: "कारण स्पष्ट लिखें पर बहुत लंबा न करें।" } },
      { text: { en: "Mention leave dates clearly.", hi: "अवकाश की तिथियाँ स्पष्ट रूप से लिखें।" } },
      { text: { en: "Keep the tone formal and polite.", hi: "लहजा औपचारिक और विनम्र रखें।" } },
      { text: { en: "Request approval respectfully.", hi: "अनुमति विनम्रता से माँगें।" } },
      { text: { en: "Thank the manager at the end.", hi: "अंत में धन्यवाद अवश्य दें।" } }
    ]
  },

  /* ---------------------------------------------------------
   * RELATED TEMPLATES
   * --------------------------------------------------------- */
  relatedTemplates: [
    {
      title: { en: "Emergency Leave Application", hi: "आपातकालीन अवकाश आवेदन" },
      description: { en: "For sudden urgent leave needs", hi: "अचानक जरूरत में छुट्टी" },
      icon: 'FileText',
      link: "/templates/emergency-leave"
    },
    {
      title: { en: "Sick Leave Application", hi: "बीमार छुट्टी आवेदन" },
      description: { en: "Use for illness or medical leave", hi: "बीमारी या चिकित्सा अवकाश के लिए" },
      icon: 'Briefcase',
      link: "/templates/sick-leave"
    },
    {
      title: { en: "Short Leave Application", hi: "शॉर्ट लीव आवेदन" },
      description: { en: "Best for 2–3 hour leave", hi: "2–3 घंटे के अवकाश के लिए सबसे अच्छा" },
      icon: 'GraduationCap',
      link: "/templates/short-leave"
    }
  ],

  /* ---------------------------------------------------------
   * BLOG ARTICLES
   * --------------------------------------------------------- */
  blogArticles: [
    {
      title: { en: "How to Write Casual Leave Properly", hi: "साधारण अवकाश आवेदन कैसे लिखें" },
      excerpt: { en: "Simple and effective writing tips.", hi: "सरल और प्रभावी लेखन सुझाव।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/casual-leave-guide"
    },
    {
      title: { en: "Difference Between Casual Leave and Sick Leave", hi: "साधारण और बीमार अवकाश में अंतर" },
      excerpt: { en: "Understand when to use which type.", hi: "जानें किस स्थिति में कौन सा अवकाश लें।" },
      readTime: { en: "3 min read", hi: "3 मिनट पढ़ें" },
      link: "/blog/leave-types"
    }
  ],

  /* ---------------------------------------------------------
   * FAQS
   * --------------------------------------------------------- */
  faqs: [
    {
      question: { en: "How many casual leaves are allowed?", hi: "कितनी साधारण छुट्टियाँ मिलती हैं?" },
      answer: { 
        en: "Most companies offer 6–12 casual leaves annually.",
        hi: "अधिकांश कंपनियों में 6–12 साधारण अवकाश मिलते हैं।" 
      }
    },
    {
      question: { en: "Do I need to mention the reason?", hi: "क्या कारण बताना जरूरी है?" },
      answer: { 
        en: "A short and simple personal reason is enough.",
        hi: "छोटा और सरल व्यक्तिगत कारण पर्याप्त है।" 
      }
    },
    {
      question: { en: "Can I take casual leave without prior notice?", hi: "क्या बिना बताये साधारण छुट्टी ले सकते हैं?" },
      answer: { 
        en: "Yes, but only for urgent situations.",
        hi: "हाँ, लेकिन केवल आपात स्थिति में।" 
      }
    }
  ]
};
