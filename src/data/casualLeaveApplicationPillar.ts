import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const casualLeaveApplicationPillar = {
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
     * 1. GENERAL CASUAL LEAVE
     * ------------------------------------------------------- */
    {
      id: "general",
      title: { en: "General Casual Leave Application", hi: "सामान्य साधारण अवकाश आवेदन" },
      description: { 
        en: "Suitable for general casual leave without detailed explanation.",
        hi: "बिना अधिक कारण बताए सामान्य साधारण अवकाश के लिए।"
      },
      bestFor: { en: "1–2 days casual leave", hi: "1–2 दिन का साधारण अवकाश" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]  

Subject: Casual Leave Application  

Respected Sir/Madam,  

I request you to kindly grant me casual leave from [start date] to [end date] due to personal reasons. I will ensure all urgent tasks are managed.  

Thank you.  

Sincerely,  
[Your Name]  
[Designation]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]  

विषय: साधारण अवकाश हेतु आवेदन  

माननीय महोदय/महोदया,  

मैं व्यक्तिगत कारणों से [आरंभ तिथि] से [अंत तिथि] तक साधारण अवकाश का निवेदन करता/करती हूँ। मैं सभी आवश्यक कार्यों को सुनिश्चित कर दूंगा/दूंगी।  

धन्यवाद।  

भवदीय,  
[आपका नाम]  
[पद]`
      }
    },

    /* -------------------------------------------------------
     * 2. ONE-DAY CASUAL LEAVE
     * ------------------------------------------------------- */
    {
      id: "oneDay",
      title: { en: "One-Day Casual Leave Application", hi: "एक दिन का साधारण अवकाश आवेदन" },
      description: { en: "Best for taking one day off for quick work.", hi: "एक दिन के छोटे कार्यों के लिए उपयोगी।" },
      bestFor: { en: "1-day leave", hi: "1 दिन की छुट्टी" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]  

Subject: One-Day Casual Leave  

Respected Sir/Madam,  

I request one day of casual leave on [date] due to personal work. I will resume work the next day.  

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]  

विषय: एक दिन के साधारण अवकाश हेतु आवेदन  

माननीय महोदय/महोदया,  

मैं व्यक्तिगत कार्य के कारण [तारीख] को एक दिन का साधारण अवकाश लेने का अनुरोध करता/करती हूँ। मैं अगले दिन से कार्य पर उपस्थित रहूँगा/रहूँगी।  

भवदीय,  
[आपका नाम]`
      }
    },

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
        en: `To,  
The Manager  
[Company Name]

Subject: Casual Leave for Personal Work

Respected Sir/Madam,

I need to attend some important personal work, due to which I will not be able to come to office on [date]. Kindly grant me casual leave for the day.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: व्यक्तिगत कार्य हेतु साधारण अवकाश आवेदन

माननीय महोदय/महोदया,

मुझे कुछ महत्वपूर्ण व्यक्तिगत कार्य के कारण [तारीख] को कार्यालय उपस्थित होना संभव नहीं है। कृपया मुझे उस दिन का साधारण अवकाश प्रदान करें।

भवदीय,  
[आपका नाम]`
      }
    },

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
        en: `To,  
The Manager  
[Company Name]

Subject: Casual Leave for Travel

Respected Sir/Madam,

I need to travel to [place] for a short personal visit. Therefore, I request casual leave from [start date] to [end date].

Please grant me leave for the mentioned dates.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: यात्रा हेतु साधारण अवकाश आवेदन

माननीय महोदय/महोदया,

मुझे निजी कारणों से [स्थान] की यात्रा करनी है। अतः कृपया [आरंभ तिथि] से [अंत तिथि] तक साधारण अवकाश प्रदान करें।

भवदीय,  
[आपका नाम]`
      }
    },

    /* -------------------------------------------------------
     * 5. FAMILY FUNCTION LEAVE
     * ------------------------------------------------------- */
    {
      id: "familyFunction",
      title: { en: "Casual Leave for Family Function", hi: "पारिवारिक कार्यक्रम हेतु साधारण अवकाश" },
      description: { en: "For attending family functions, ceremonies, or events.", hi: "पारिवारिक कार्यक्रम, समारोह या आयोजन के लिए।" },
      bestFor: { en: "Family gatherings", hi: "पारिवारिक समारोह" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Leave for Family Function

Respected Sir/Madam,

I need to attend a family function on [date] and will be unable to attend work. Kindly grant me casual leave for the day.

Thank you.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: पारिवारिक कार्यक्रम के लिए साधारण अवकाश आवेदन

माननीय महोदय/महोदया,

मुझे [तारीख] को एक पारिवारिक कार्यक्रम में शामिल होना है, जिसके कारण मैं कार्यालय उपस्थित नहीं हो पाऊँगा/पाऊँगी। अतः कृपया मुझे उस दिन का साधारण अवकाश प्रदान करें।

धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    },

    /* -------------------------------------------------------
     * 6. URGENT HOME WORK LEAVE
     * ------------------------------------------------------- */
    {
      id: "urgentHomeWork",
      title: { en: "Casual Leave for Urgent Home Work", hi: "आपातकालीन घरेलू कार्य के लिए साधारण अवकाश" },
      description: { en: "Best when sudden household or maintenance tasks arise.", hi: "अचानक घर के जरूरी कार्य के लिए।" },
      bestFor: { en: "Urgent domestic work", hi: "आपात घरेलू कार्य" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Casual Leave for Urgent Home Work

Respected Sir/Madam,

I request casual leave on [date] due to urgent household work that requires my immediate attention.

Kindly approve my leave request.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: आपात घरेलू कार्य हेतु साधारण अवकाश आवेदन

माननीय महोदय/महोदया,

मुझे [तारीख] को कुछ आवश्यक घरेलू कार्य के कारण अवकाश की आवश्यकता है। अतः कृपया मेरे अवकाश अनुरोध को स्वीकृत करने की कृपा करें।

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
      icon: FileText,
      link: "/templates/emergency-leave"
    },
    {
      title: { en: "Sick Leave Application", hi: "बीमार छुट्टी आवेदन" },
      description: { en: "Use for illness or medical leave", hi: "बीमारी या चिकित्सा अवकाश के लिए" },
      icon: Briefcase,
      link: "/templates/sick-leave"
    },
    {
      title: { en: "Short Leave Application", hi: "शॉर्ट लीव आवेदन" },
      description: { en: "Best for 2–3 hour leave", hi: "2–3 घंटे के अवकाश के लिए सबसे अच्छा" },
      icon: GraduationCap,
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
