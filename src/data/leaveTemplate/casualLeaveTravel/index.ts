
export const casualTravelLeave = {
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

  /* -----------------------------s----------------------------
   * VARIATIONS
   * --------------------------------------------------------- */
  variations: [
    /* -------------------------------------------------------
     * 4. TRAVEL LEAVE
     * ------------------------------------------------------- */
    {
      id: "travel",
      title: { en: "Casual Leave for Travel", hi: "यात्रा के लिए साधारण अवकाश आवेदन" },
      description: { en: "For short trips, outstation visits, or urgent travel.", hi: "यात्रा, बाहर जाना या अचानक यात्रा में उपयोगी।" },
      bestFor: { en: "Travel leave", hi: "यात्रा अवकाश" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Casual Leave for Travel

Respected Sir/Madam,

I am planning to travel to [place] for a short personal visit. I kindly request casual leave from [start date] to [end date].

My current assignments are on track, and I have informed my team about my absence. I will be accessible by phone for any urgent matters during this period.

Please approve my leave for the mentioned dates.

Thank you for your understanding.

Sincerely,  
[Your Name]`,

        hi: `विषय: यात्रा हेतु साधारण अवकाश आवेदन

माननीय महोदय/महोदया,

मैं एक छोटी व्यक्तिगत यात्रा पर [स्थान] जाने की योजना बना रहा/रही हूँ। मैं [आरंभ तिथि] से [समाप्ति तिथि] तक अनौपचारिक अवकाश का विनम्र अनुरोध करता/करती हूँ।

मेरे वर्तमान कार्य योजना के अनुसार चल रहे हैं और मैंने अपनी टीम को अपनी अनुपस्थिति के बारे में सूचित कर दिया है। इस अवधि के दौरान मैं किसी भी जरूरी मामले के लिए फोन पर उपलब्ध रहूंगा/रहूंगी।

कृपया उल्लिखित तिथियों के लिए मेरे अवकाश को स्वीकृति प्रदान करें।

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
