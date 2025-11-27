import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const personalLeaveApplicationPillar = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Leave Applications", hi: "अवकाश आवेदन", slug:"/applications/leave" },
    template: { en: "Personal Leave Application", hi: "पर्सनल लीव आवेदन", slug:"" }
  },

  title: { 
    en: "Personal Leave Application to Manager", 
    hi: "मैनेजर को पर्सनल लीव हेतु आवेदन" 
  },

  subtitle: { 
    en: "Use these formats for personal work, family matters, travel, mental rest, or unavoidable personal commitments.",
    hi: "व्यक्तिगत कार्य, पारिवारिक कारण, यात्रा, मानसिक विश्राम या अनिवार्य व्यक्तिगत कारणों के लिए इन प्रारूपों का उपयोग करें।"
  },

  category: { en: "Leave Applications", hi: "अवकाश आवेदन" },

  updatedDate: "January 2025",

  /* ---------------------------------------------------------
   * VARIATIONS
   * --------------------------------------------------------- */
  variations: [
    /* -------------------------------------------------------
     * 1. GENERAL PERSONAL LEAVE
     * ------------------------------------------------------- */
    {
      id: "general",
      title: { en: "General Personal Leave Application", hi: "सामान्य पर्सनल लीव आवेदन" },
      description: { 
        en: "Simple format for general personal leave.",
        hi: "सामान्य व्यक्तिगत अवकाश के लिए सरल प्रारूप।"
      },
      bestFor: { en: "Any personal reason", hi: "किसी भी व्यक्तिगत कारण के लिए" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]  

Subject: Personal Leave Application  

Respected Sir/Madam,  

I request you to kindly grant me personal leave from [start date] to [end date] due to personal reasons. I will ensure that all urgent tasks are handled properly.  

Thank you.  

Sincerely,  
[Your Name]  
[Designation]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]  

विषय: पर्सनल लीव हेतु आवेदन  

माननीय महोदय/महोदया,  

व्यक्तिगत कारणों से मैं [आरंभ तिथि] से [अंत तिथि] तक पर्सनल लीव का अनुरोध करता/करती हूँ। मैं सुनिश्चित करूंगा/करूंगी कि सभी आवश्यक कार्य पूरे हो जाएं।  

धन्यवाद।  

भवदीय,  
[आपका नाम]  
[पद]`
      }
    },

    /* -------------------------------------------------------
     * 2. PERSONAL WORK LEAVE
     * ------------------------------------------------------- */
    {
      id: "personalWork",
      title: { en: "Personal Work Leave Application", hi: "व्यक्तिगत कार्य हेतु अवकाश" },
      description: { 
        en: "Useful when you have important personal work.",
        hi: "महत्वपूर्ण व्यक्तिगत कार्य होने पर उपयोगी।"
      },
      bestFor: { en: "Important personal work", hi: "ज़रूरी व्यक्तिगत कार्य" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Leave Request for Personal Work

Respected Sir/Madam,

I have some important personal work to attend on [date], hence I request you to grant me personal leave for the day. I will resume work the next day.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: व्यक्तिगत कार्य हेतु अवकाश आवेदन

माननीय महोदय/महोदया,

मुझे [तारीख] को कुछ महत्वपूर्ण व्यक्तिगत कार्य के कारण अवकाश की आवश्यकता है। कृपया मुझे उस दिन का पर्सनल लीव प्रदान करने की कृपा करें। मैं अगले दिन से कार्य में उपस्थित रहूँगा/रहूँगी।  

भवदीय,  
[आपका नाम]`
      }
    },

    /* -------------------------------------------------------
     * 3. PERSONAL LEAVE FOR FAMILY MATTERS
     * ------------------------------------------------------- */
    {
      id: "familyMatters",
      title: { en: "Leave for Family Matters", hi: "पारिवारिक कारणों से अवकाश आवेदन" },
      description: { 
        en: "For family responsibilities or unavoidable family issues.",
        hi: "पारिवारिक जिम्मेदारी या अनिवार्य पारिवारिक कारणों के लिए।"
      },
      bestFor: { en: "Family issues", hi: "पारिवारिक समस्याएँ" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Leave for Family Reasons

Respected Sir/Madam,

Due to some important family matters, I will be unable to attend office on [date]. Kindly grant me personal leave for the mentioned date.

Thank you for your understanding.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: पारिवारिक कारणों से अवकाश हेतु आवेदन

माननीय महोदय/महोदया,

महत्वपूर्ण पारिवारिक कारणों के चलते मैं [तारीख] को कार्यालय नहीं आ पाऊँगा/पाऊँगी। कृपया मुझे उस दिन का व्यक्तिगत अवकाश प्रदान करें।  

आपकी समझदारी के लिए धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    },

    /* -------------------------------------------------------
     * 4. PERSONAL LEAVE FOR TRAVEL
     * ------------------------------------------------------- */
    {
      id: "personalTravel",
      title: { en: "Personal Leave for Travel", hi: "यात्रा हेतु व्यक्तिगत अवकाश" },
      description: { 
        en: "For short personal trips or travel plans.",
        hi: "छोटी व्यक्तिगत यात्रा या बाहर जाने के लिए।"
      },
      bestFor: { en: "Travel leave", hi: "यात्रा अवकाश" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Leave Request for Personal Travel

Respected Sir/Madam,

I need to travel to [place] for personal reasons and request leave from [start date] to [end date]. I will ensure to complete pending tasks before leaving.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: व्यक्तिगत यात्रा हेतु अवकाश आवेदन

माननीय महोदय/महोदया,

मुझे व्यक्तिगत कारणों से [स्थान] की यात्रा करनी है, जिसके लिए मैं [आरंभ तिथि] से [अंत तिथि] तक अवकाश का अनुरोध करता/करती हूँ। मैं सभी लंबित कार्य पहले ही पूरा कर दूँगा/दूँगी।  

भवदीय,  
[आपका नाम]`
      }
    },

    /* -------------------------------------------------------
     * 5. PERSONAL LEAVE FOR MENTAL REST / STRESS
     * ------------------------------------------------------- */
    {
      id: "mentalRest",
      title: { en: "Personal Leave for Mental Rest", hi: "मानसिक विश्राम हेतु व्यक्तिगत अवकाश" },
      description: { 
        en: "For stress, mental rest, burnout recovery.",
        hi: "तनाव, मानसिक विश्राम या थकान कम करने के लिए।"
      },
      bestFor: { en: "Mental wellness leave", hi: "मानसिक स्वास्थ्य अवकाश" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Personal Leave for Mental Rest

Respected Sir/Madam,

I have been experiencing stress and fatigue lately and need a short break for mental rest. Therefore, I request personal leave from [start date] to [end date].

I will ensure all urgent work is managed.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: मानसिक विश्राम हेतु व्यक्तिगत अवकाश आवेदन

माननीय महोदय/महोदया,

पिछले कुछ समय से मुझे तनाव और थकान महसूस हो रही है, इसलिए मुझे मानसिक विश्राम के लिए कुछ समय का अवकाश चाहिए।  
अतः कृपया [आरंभ तिथि] से [अंत तिथि] तक मुझे व्यक्तिगत अवकाश प्रदान करें।  

भवदीय,  
[आपका नाम]`
      }
    },

    /* -------------------------------------------------------
     * 6. PERSONAL LEAVE FOR GOVERNMENT / DOCUMENT WORK
     * ------------------------------------------------------- */
    {
      id: "documentWork",
      title: { en: "Personal Leave for Documentation Work", hi: "सरकारी/दस्तावेज कार्य हेतु व्यक्तिगत अवकाश" },
      description: { 
        en: "For passport, Aadhar, bank, government office, documentation tasks.",
        hi: "पासपोर्ट, आधार, बैंक या सरकारी कार्य के लिए।"
      },
      bestFor: { en: "Government/document work", hi: "सरकारी/दस्तावेज कार्य" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Leave Request for Documentation Work

Respected Sir/Madam,

I need to visit a government office for important documentation work on [date]. Therefore, I request personal leave for the day.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: दस्तावेज कार्य हेतु व्यक्तिगत अवकाश आवेदन

माननीय महोदय/महोदया,

मुझे [तारीख] को महत्वपूर्ण सरकारी दस्तावेज कार्य हेतु कार्यालय जाना है। अतः कृपया मुझे उस दिन का व्यक्तिगत अवकाश प्रदान करें।  

भवदीय,  
[आपका नाम]`
      }
    }
  ],

  /* ---------------------------------------------------------
   * HOW TO WRITE SECTION
   * --------------------------------------------------------- */
  howToWrite: {
    title: { en: "Tips to Write a Personal Leave Application", hi: "पर्सनल लीव आवेदन लिखने के टिप्स" },
    tips: [
      { text: { en: "Mention your reason briefly but clearly.", hi: "कारण को स्पष्ट लेकिन संक्षेप में लिखें।" } },
      { text: { en: "Write exact leave dates.", hi: "छुट्टी की सटीक तिथियाँ लिखें।" } },
      { text: { en: "Keep tone formal and polite.", hi: "लहजा औपचारिक और विनम्र रखें।" } },
      { text: { en: "Reassure that work will be managed.", hi: "बताएँ कि काम प्रभावित नहीं होगा।" } },
      { text: { en: "Thank the manager at the end.", hi: "अंत में मैनेजर को धन्यवाद दें।" } }
    ]
  },

  /* ---------------------------------------------------------
   * RELATED TEMPLATES
   * --------------------------------------------------------- */
  relatedTemplates: [
    {
      title: { en: "Casual Leave Application", hi: "साधारण अवकाश आवेदन" },
      description: { en: "For non-urgent personal leave", hi: "गैर-आपात व्यक्तिगत छुट्टियाँ" },
      icon: FileText,
      link: "/templates/casual-leave"
    },
    {
      title: { en: "Urgent Leave Application", hi: "आपात अवकाश आवेदन" },
      description: { en: "For sudden emergency situations", hi: "अचानक आपात स्थितियों के लिए" },
      icon: Briefcase,
      link: "/templates/urgent-leave"
    },
    {
      title: { en: "Sick Leave Application", hi: "बीमार छुट्टी आवेदन" },
      description: { en: "For health-related leave", hi: "बीमारी में उपयोगी" },
      icon: GraduationCap,
      link: "/templates/sick-leave"
    }
  ],

  /* ---------------------------------------------------------
   * BLOG ARTICLES
   * --------------------------------------------------------- */
  blogArticles: [
    {
      title: { en: "When to Take Personal Leave", hi: "व्यक्तिगत अवकाश कब लें" },
      excerpt: { en: "Understand ideal situations for taking personal leave.", hi: "जानें कब पर्सनल लीव लेना उचित है।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/personal-leave-guide"
    },
    {
      title: { en: "Difference Between Personal and Casual Leave", hi: "पर्सनल और कैज़ुअल लीव में अंतर" },
      excerpt: { en: "Clear difference explained simply.", hi: "सरल भाषा में पूरा अंतर समझें।" },
      readTime: { en: "3 min read", hi: "3 मिनट पढ़ें" },
      link: "/blog/leave-types"
    }
  ],

  /* ---------------------------------------------------------
   * FAQS
   * --------------------------------------------------------- */
  faqs: [
    {
      question: { en: "Is personal leave paid?", hi: "क्या पर्सनल लीव भुगतानयुक्त होती है?" },
      answer: { 
        en: "Most companies count personal leave under casual leave, which is generally paid.",
        hi: "अधिकांश कंपनियाँ पर्सनल लीव को कैज़ुअल लीव में शामिल करती हैं, जो आमतौर पर भुगतानयुक्त होती है।" 
      }
    },
    {
      question: { en: "Do I need to mention the exact reason?", hi: "क्या सटीक कारण बताना जरूरी है?" },
      answer: { 
        en: "No, a short general reason is enough.",
        hi: "नहीं, छोटा और सामान्य कारण पर्याप्त है।" 
      }
    },
    {
      question: { en: "How many days of personal leave can I take?", hi: "कितने दिनों की व्यक्तिगत छुट्टी ले सकते हैं?" },
      answer: { 
        en: "Usually 1–3 days depending on company policy.",
        hi: "आमतौर पर 1–3 दिन, कंपनी की नीति पर आधारित।" 
      }
    }
  ]
};
