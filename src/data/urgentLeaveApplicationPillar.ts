import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const urgentLeaveApplicationPillar = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug: "/applications" },
    subcategory: {
      en: "Leave Applications",
      hi: "अवकाश आवेदन",
      slug: "/applications/leave",
    },
    template: {
      en: "Urgent Leave Application",
      hi: "आपात अवकाश आवेदन",
      slug: "",
    },
  },

  title: {
    en: "Urgent Leave Application to Manager",
    hi: "मैनेजर को आपात अवकाश हेतु आवेदन",
  },

  subtitle: {
    en: "Use these urgent leave formats for sudden situations like emergencies, unexpected work at home, medical issues, or urgent travel.",
    hi: "आपातकालीन स्थितियों, अचानक घरेलू कार्य, चिकित्सीय समस्याओं या अचानक यात्रा के लिए इन आपात अवकाश प्रारूपों का उपयोग करें।",
  },

  category: { en: "Leave Applications", hi: "अवकाश आवेदन" },

  updatedDate: "January 2025",

  /* ---------------------------------------------------------
   * VARIATIONS
   * --------------------------------------------------------- */
  variations: [

    /* -------------------------------------------------------
     * 2. URGENT WORK AT HOME
     * ------------------------------------------------------- */
    {
      id: "urgentHome",
      title: {
        en: "Urgent Work at Home Leave",
        hi: "आपात घरेलू कार्य के लिए अवकाश",
      },
      description: {
        en: "For urgent household situations like repair, maintenance, or family issues.",
        hi: "मरम्मत, रखरखाव या पारिवारिक समस्या जैसी घरेलू आपात स्थिति के लिए।",
      },
      bestFor: { en: "Home emergencies", hi: "घरेलू आपात स्थिति" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Urgent Home Work Leave

Respected Sir/Madam,

I have an urgent situation at home that requires my immediate attention. Therefore, I request urgent leave on [date].

Kindly approve my request.

Sincerely,  
[Your Name]`,

        hi: `विषय: आपात घरेलू कार्य हेतु अवकाश आवेदन

माननीय महोदय/महोदया,

घर पर अचानक उत्पन्न हुए आपात कार्य के कारण मुझे [तारीख] को अवकाश लेना आवश्यक है।  
कृपया मेरे अवकाश अनुरोध को स्वीकार करने की कृपा करें।  

भवदीय,  
[आपका नाम]`,
      },
    },

    /* -------------------------------------------------------
     * 3. MEDICAL EMERGENCY (FAMILY)
     * ------------------------------------------------------- */
    {
      id: "medicalEmergency",
      title: {
        en: "Urgent Leave for Family Medical Emergency",
        hi: "परिवार में चिकित्सीय आपात स्थिति हेतु अवकाश",
      },
      description: {
        en: "For sudden illness or hospitalization of a family member.",
        hi: "परिवार के किसी सदस्य की अचानक तबीयत खराब होने या अस्पताल में भर्ती होने पर।",
      },
      bestFor: { en: "Medical emergencies", hi: "चिकित्सीय आपात स्थिति" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Leave for Medical Emergency

Respected Sir/Madam,

There is a medical emergency in my family, and I need to be present immediately. Therefore, I request urgent leave on [date].

I will ensure pending tasks are managed.

Sincerely,  
[Your Name]`,

        hi: `विषय: चिकित्सीय आपात स्थिति हेतु अवकाश

माननीय महोदय/महोदया,

मेरे परिवार में एक चिकित्सीय आपात स्थिति उत्पन्न हो गई है, जिसके कारण मुझे तुरंत वहाँ उपस्थित होना आवश्यक है।  
अतः कृपया मुझे [तारीख] का आपात अवकाश प्रदान करें।  

मैं सभी लंबित कार्यों को शीघ्र ही पूरा कर दूँगा/दूँगी।  

भवदीय,  
[आपका नाम]`,
      },
    },

    /* -------------------------------------------------------
     * 4. SUDDEN TRAVEL EMERGENCY
     * ------------------------------------------------------- */
    {
      id: "travelEmergency",
      title: {
        en: "Urgent Leave for Sudden Travel",
        hi: "अचानक यात्रा हेतु आपात अवकाश",
      },
      description: {
        en: "For immediate outstation travel required due to urgent matters.",
        hi: "अचानक बाहर जाने की आपात आवश्यकता होने पर।",
      },
      bestFor: { en: "Urgent travel", hi: "आपात यात्रा" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Urgent Leave for Travel

Respected Sir/Madam,

I need to travel urgently to [place] due to an unexpected situation. Kindly grant me urgent leave on [date].

Thank you.

Sincerely,  
[Your Name]`,

        hi: `विषय: आपात यात्रा हेतु अवकाश आवेदन

माननीय महोदय/महोदया,

अचानक उत्पन्न हुई आवश्यकता के कारण मुझे तुरंत [स्थान] की यात्रा करनी पड़ रही है।  
अतः कृपया [तारीख] को आपात अवकाश प्रदान करें।  

धन्यवाद।  

भवदीय,  
[आपका नाम]`,
      },
    },

    /* -------------------------------------------------------
     * 5. ELECTRICITY/PLUMBING/REPAIR EMERGENCY
     * ------------------------------------------------------- */
    {
      id: "repairEmergency",
      title: {
        en: "Urgent Leave for Home Repair Emergency",
        hi: "घर में मरम्मत की आपात स्थिति हेतु अवकाश",
      },
      description: {
        en: "For urgent repair issues like water leakage, electricity failure, plumbing issues, etc.",
        hi: "पानी रिसाव, बिजली खराबी, प्लंबिंग जैसी आपात मरम्मत समस्याओं के लिए।",
      },
      bestFor: {
        en: "Home repair emergencies",
        hi: "घर की मरम्मत की आपात समस्याएँ",
      },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Urgent Leave for Home Repair

Respected Sir/Madam,

There is an urgent repair issue at my home (electricity/plumbing/water leakage) that needs immediate attention. Therefore, I request urgent leave on [date].

Sincerely,  
[Your Name]`,

        hi: `विषय: घर में आपात मरम्मत हेतु अवकाश आवेदन

माननीय महोदय/महोदया,

मेरे घर में (बिजली/प्लम्बिंग/पानी रिसाव) संबंधी एक आपात मरम्मत कार्य उत्पन्न हो गया है, जिसे तुरंत ठीक कराना आवश्यक है।  
अतः कृपया [तारीख] को मुझे आपात अवकाश प्रदान करें।  

भवदीय,  
[आपका नाम]`,
      },
    },

    /* -------------------------------------------------------
     * 6. UNAVOIDABLE PERSONAL EMERGENCY
     * ------------------------------------------------------- */
    {
      id: "personalEmergency",
      title: {
        en: "Leave for Unavoidable Personal Emergency",
        hi: "अनिवार्य व्यक्तिगत आपात स्थिति हेतु अवकाश",
      },
      description: {
        en: "For unavoidable unexpected personal emergencies.",
        hi: "अचानक आए अनिवार्य व्यक्तिगत आपात स्थितियों के लिए।",
      },
      bestFor: {
        en: "Unexpected personal issues",
        hi: "अचानक व्यक्तिगत समस्याएँ",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `Subject: Urgent Leave Request

Respected Sir/Madam,

Due to an unavoidable personal emergency, I need to take urgent leave on [date]. I assure you that I will complete any pending work as soon as possible.

Kindly approve my leave request.

Sincerely,  
[Your Name]`,

        hi: `विषय: अनिवार्य व्यक्तिगत आपात स्थिति हेतु अवकाश आवेदन

माननीय महोदय/महोदया,

एक अनिवार्य व्यक्तिगत आपात स्थिति के कारण मुझे [तारीख] को आपात अवकाश लेने की आवश्यकता है।  
मैं आश्वस्त करता/करती हूँ कि सभी लंबित कार्य जल्द ही पूरा कर दूँगा/दूँगी।  

कृपया मेरे अवकाश को स्वीकृति प्रदान करें।  

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
      en: "Tips to Write an Urgent Leave Application",
      hi: "आपात अवकाश आवेदन लिखने के टिप्स",
    },
    tips: [
      {
        text: {
          en: "State the urgency clearly in short.",
          hi: "आपात स्थिति का कारण संक्षेप में बताएं।",
        },
      },
      {
        text: { en: "Mention date clearly.", hi: "तारीख स्पष्ट रूप से लिखें।" },
      },
      { text: { en: "Keep the tone formal.", hi: "लहजा औपचारिक रखें।" } },
      {
        text: {
          en: "Thank the manager politely.",
          hi: "मैनेजर को विनम्रता से धन्यवाद दें।",
        },
      },
      {
        text: {
          en: "Avoid unnecessary details.",
          hi: "अनावश्यक विवरण न लिखें।",
        },
      },
    ],
  },

  /* ---------------------------------------------------------
   * RELATED TEMPLATES
   * --------------------------------------------------------- */
  relatedTemplates: [
    {
      title: { en: "Casual Leave Application", hi: "साधारण अवकाश आवेदन" },
      description: {
        en: "For non-urgent leave",
        hi: "साधारण, गैर-आपात छुट्टियों के लिए",
      },
      icon: 'FileText',
      link: "/templates/casual-leave",
    },
    {
      title: { en: "Sick Leave Application", hi: "बीमार छुट्टी आवेदन" },
      description: { en: "When you are unwell", hi: "बीमारी में उपयोग करें" },
      icon: 'Briefcase',
      link: "/templates/sick-leave",
    },
    {
      title: { en: "Half-Day Leave Application", hi: "आधा दिन का अवकाश आवेदन" },
      description: { en: "For 2–4 hours leave", hi: "2–4 घंटे की छुट्टी" },
      icon: 'GraduationCap',
      link: "/templates/half-day-leave",
    },
  ],

  /* ---------------------------------------------------------
   * BLOG ARTICLES
   * --------------------------------------------------------- */
  blogArticles: [
    {
      title: {
        en: "How to Write Urgent Leave Professionally",
        hi: "आपात अवकाश आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "Learn formal urgent leave writing.",
        hi: "औपचारिक आपात अवकाश लिखना सीखें।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/urgent-leave-guide",
    },
    {
      title: { en: "When to Use Urgent Leave", hi: "आपात अवकाश कब लें" },
      excerpt: {
        en: "Differences between urgent and casual leave.",
        hi: "आपात और साधारण अवकाश में अंतर।",
      },
      readTime: { en: "3 min read", hi: "3 मिनट पढ़ें" },
      link: "/blog/types-of-leave",
    },
  ],

  /* ---------------------------------------------------------
   * FAQS
   * --------------------------------------------------------- */
  faqs: [
    {
      question: {
        en: "Do I need to mention the reason?",
        hi: "क्या कारण बताना आवश्यक है?",
      },
      answer: {
        en: "Yes, mention a brief reason without going into detail.",
        hi: "हाँ, कारण संक्षेप में लिखें, विस्तार से नहीं।",
      },
    },
    {
      question: {
        en: "Can urgent leave be taken without prior notice?",
        hi: "क्या बिना बताए आपात अवकाश लिया जा सकता है?",
      },
      answer: {
        en: "Yes, for emergencies it is acceptable.",
        hi: "हाँ, आपात स्थितियों में यह स्वीकार्य है।",
      },
    },
    {
      question: {
        en: "Will urgent leave be paid or unpaid?",
        hi: "क्या आपात अवकाश भुगतानयुक्त होगा?",
      },
      answer: {
        en: "Depends on company policy; most companies treat it as casual leave.",
        hi: "कंपनी की नीति पर निर्भर करता है; अधिकांश कंपनियाँ इसे साधारण अवकाश मानती हैं।",
      },
    },
  ],
};
