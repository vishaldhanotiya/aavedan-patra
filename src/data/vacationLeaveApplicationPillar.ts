import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const vacationLeaveApplicationPillar = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन",slug:'/applications' },
    subcategory: { en: "Leave Applications", hi: "अवकाश आवेदन",slug:'/applications/leave' },
    template: { en: "Vacation Leave Application", hi: "छुट्टी (वैकेशन) आवेदन" ,slug:''}
  },

  title: {
    en: "Vacation Leave Application to Manager",
    hi: "मैनेजर को वैकेशन अवकाश हेतु आवेदन"
  },

  subtitle: {
    en: "Templates for planned vacations — short trips, long breaks, seasonal holidays, and pre-approved leave requests.",
    hi: "पूर्वनियोजित अवकाश के लिए प्रारूप — छोटे ट्रिप, लंबी छुट्टियाँ, मौसमी अवकाश और पूर्व-अनुमोदित छुट्टियाँ।"
  },

  category: { en: "Leave Applications", hi: "अवकाश आवेदन" },

  updatedDate: "January 2025",

  variations: [
    /* 1. GENERAL VACATION LEAVE */
    {
      id: "general",
      title: { en: "General Vacation Leave Application", hi: "सामान्य वैकेशन अवकाश आवेदन" },
      description: {
        en: "A standard format for requesting vacation leave for personal travel or rest.",
        hi: "निजी यात्रा या विश्राम के लिए वैकेशन अवकाश का सामान्य प्रारूप।"
      },
      bestFor: { en: "Planned personal vacation", hi: "पूर्वनियोजित व्यक्तिगत छुट्टी" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },
      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Vacation Leave Application

Respected Sir/Madam,

I would like to request vacation leave from [start date] to [end date] for personal travel/ rest. I have planned this vacation in advance and will ensure that my responsibilities are handed over to [colleague name] during my absence. I will also be reachable at [phone/email] for any urgent matters.

Kindly approve my leave request.

Thank you for your consideration.

Sincerely,  
[Your Name]  
[Designation]`,
        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: वैकेशन अवकाश हेतु आवेदन

माननीय महोदय/महोदया,

मैं [आरंभ तिथि] से [अंत तिथि] तक निजी यात्रा/विश्राम हेतु वैकेशन अवकाश का अनुरोध करता/करती हूँ। यह अवकाश पूर्वनियोजित है और मेरी अनुपस्थिति के दौरान मेरी जिम्मेदारियाँ [सहकर्मी का नाम] को सौंप दी जाएँगी। आवश्यक होने पर मैं [फोन/ईमेल] पर उपलब्ध रहूँगा/रहूँगी।

कृपया मेरे अवकाश अनुरोध को स्वीकृत करने की कृपा करें।

धन्यवाद।  

भवदीय,  
[आपका नाम]  
[पद]`
      }
    },

    /* 2. SHORT VACATION (2-5 DAYS) */
    {
      id: "shortVacation",
      title: { en: "Short Vacation Leave (2–5 days)", hi: "लघु वैकेशन अवकाश (2–5 दिन)" },
      description: {
        en: "Quick breaks for short trips or family visits where work handover is minimal.",
        hi: "छोटी यात्राओं या पारिवारिक मुलाकातों के लिए जब कार्य हस्तांतरण कम हो।"
      },
      bestFor: { en: "Short trips / family visit", hi: "छोटी यात्रा / पारिवारिक यात्रा" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },
      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Short Vacation Leave Request

Respected Sir/Madam,

I request short vacation leave from [start date] to [end date] to visit family/attend a short trip. I have updated my current tasks and discussed handover with [colleague name] so there will be no disruption.

Please approve my leave.

Regards,  
[Your Name]`,
        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: लघु वैकेशन अवकाश हेतु अनुरोध

माननीय महोदय/महोदया,

मैं [आरंभ तिथि] से [अंत तिथि] तक परिवार से मिलने/छोटी यात्रा के लिए अवकाश का अनुरोध करता/करती हूँ। मैंने अपने चल रहे कार्यों को अपडेट कर दिया है और [सहकर्मी का नाम] के साथ हैंडओवर कर दिया गया है ताकि कोई व्यवधान न हो।

कृपया मुझे अवकाश प्रदान करें।

सादर,  
[आपका नाम]`
      }
    },

    /* 3. LONG VACATION (7+ DAYS) */
    {
      id: "longVacation",
      title: { en: "Long Vacation Leave (7+ days)", hi: "लंबी वैकेशन अवकाश (7+ दिन)" },
      description: {
        en: "For extended holidays or planned trips that require prior approval and detailed handover.",
        hi: "विस्तारित छुट्टियों या योजनाबद्ध यात्राओं के लिए जिनके लिए पूर्व-अनुमोदन और विस्तृत हैंडओवर आवश्यक हो।"
      },
      bestFor: { en: "Extended holidays, international travel", hi: "लंबी छुट्टियाँ, अंतरराष्ट्रीय यात्रा" },
      length: { en: "Long", hi: "लंबा" },
      difficulty: { en: "Moderate", hi: "मध्यम" },
      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Request for Long Vacation Leave

Respected Sir/Madam,

I am planning an extended vacation from [start date] to [end date] and request your approval for leave during this period. I will complete high-priority tasks before my departure and have prepared a handover document with [colleague name]/team to manage ongoing work. I will periodically check emails for urgent items.

I appreciate your consideration and look forward to your approval.

Warm regards,  
[Your Name]  
[Designation]`,
        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: लंबी वैकेशन अवकाश हेतु अनुरोध

माननीय महोदय/महोदया,

मैं [आरंभ तिथि] से [अंत तिथि] तक विस्तारित अवकाश पर जाने का विचार कर रहा/रही हूँ और कृपया उक्त अवधि के लिए अवकाश प्रदान करने की अनुमति दें। मैं प्रस्थान से पहले उच्च प्राथमिकता के कार्य पूरे कर दूँगा/दूंगी और [सहकर्मी का नाम]/टीम के साथ हैंडओवर डॉक्यूमेंट तैयार कर दिया है ताकि कार्य सुचारू रूप से चल सके। आवश्यक होने पर मैं समय-समय पर ईमेल चेक कर लूँगा/लूँगी।

आपकी सहमति के लिए धन्यवाद।

सादर,  
[आपका नाम]  
[पद]`
      }
    },

    /* 4. SEASONAL VACATION (SUMMER / WINTER) */
    {
      id: "seasonalVacation",
      title: { en: "Seasonal Vacation Leave (Summer / Winter)", hi: "मौसमी छुट्टी (ग्रीष्म/शीतकालीन)" },
      description: {
        en: "Used for planning leave during school/college holidays or popular vacation seasons.",
        hi: "स्कूल/कॉलेज अवकाश या सामान्य छुट्टियों के मौसम में छुट्टी के लिए उपयोगी।"
      },
      bestFor: { en: "School holidays, festival season travel", hi: "विद्यालय अवकाश, त्योहारीन यात्राएँ" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },
      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Seasonal Vacation Leave Request

Respected Sir/Madam,

I request seasonal vacation leave from [start date] to [end date] to coincide with school/college holidays and family plans. I have coordinated with the team to ensure coverage and will handover pending items to [colleague name].

Please grant approval for the requested dates.

Thank you,  
[Your Name]`,
        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: मौसमी छुट्टी हेतु अवकाश अनुरोध

माननीय महोदय/महोदया,

मैं विद्यालय/कॉलेज अवकाश के दौरान और पारिवारिक योजनाओं के कारण [आरंभ तिथि] से [अंत तिथि] तक मौसमी छुट्टी का अनुरोध करता/करती हूँ। मैंने टीम के साथ समन्वय कर लिया है और [सहकर्मी का नाम] को लंबित कार्य सौंप दिए हैं।

कृपया अनुरोध स्वीकृत करें।

धन्यवाद,  
[आपका नाम]`
      }
    },

    /* 5. PRE-PLANNED VACATION (APPROVAL REQUEST) */
    {
      id: "prePlanned",
      title: { en: "Pre-Planned Vacation (Approval Request)", hi: "पूर्व-योजित छुट्टी (अनुमोदन अनुरोध)" },
      description: {
        en: "Formal request for vacations planned well in advance — mentions plans and assurance of minimal disruption.",
        hi: "पूर्व में योजनाबद्ध छुट्टियों के लिए औपचारिक अनुरोध — योजनाएँ और न्यूनतम व्यवधान का आश्वासन।"
      },
      bestFor: { en: "Advance planned leave", hi: "पूर्व-नियोजित अवकाश" },
      length: { en: "Variable", hi: "परिवर्ती" },
      difficulty: { en: "Moderate", hi: "मध्यम" },
      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Approval Request for Pre-Planned Vacation

Respected Sir/Madam,

I am writing to request approval for a pre-planned vacation from [start date] to [end date]. This plan was discussed earlier with my reporting manager on [date of discussion]. I have prepared a detailed handover and task schedule to minimize impact on deliverables. Please let me know if any additional arrangements are required.

Thank you for considering my request.

Best regards,  
[Your Name]`,
        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: पूर्व-योजित छुट्टी के लिए अनुमोदन अनुरोध

माननीय महोदय/महोदया,

मैं [आरंभ तिथि] से [अंत तिथि] तक पूर्व-योजित छुट्टी के लिए अनुमोदन का अनुरोध कर रहा/रही हूँ। यह योजना पहले मेरे रिपोर्टिंग मैनेजर से [चर्चा की तिथि] को साझा की गयी थी। मैंने डिलीवरबिलिटी पर प्रभाव कम करने के लिए विस्तृत हैंडओवर और कार्य अनुसूची तैयार कर दी है। कृपया बताएं क्या किसी अतिरिक्त व्यवस्था की आवश्यकता है।

आपके विचार के लिए धन्यवाद।

सादर,  
[आपका नाम]`
      }
    },

    /* 6. VACATION INTERRUPTION / EXTENSION REQUEST */
    {
      id: "extensionOrInterruption",
      title: { en: "Vacation Extension / Interruption Request", hi: "छुट्टी बढ़ाने / बीच में रोकने हेतु अनुरोध" },
      description: {
        en: "Templates for requesting extension of vacation or early return due to change in plan.",
        hi: "योजना में बदलाव के कारण छुट्टी बढ़ाने या जल्दी लौटने के लिए अनुरोध।"
      },
      bestFor: { en: "Extend or shorten vacation", hi: "छुट्टी बढ़ाना/घटाना" },
      length: { en: "Variable", hi: "परिवर्ती" },
      difficulty: { en: "Moderate", hi: "मध्यम" },
      content: {
        en: `To,  
The Manager  
[Company Name]

Subject: Request to Extend/Shorten Vacation Leave

Respected Sir/Madam,

Due to [reason — e.g., changed travel plans / emergency], I request an extension of my vacation from [original end date] to [new end date]. / I request to cut short my vacation and return on [new return date]. I have informed [colleague name] and updated the handover documents accordingly.

Please approve the modification to my leave.

Thank you,  
[Your Name]`,
        hi: `सेवा में,  
मैनेजर महोदय/महोदया  
[कंपनी का नाम]

विषय: वैकेशन अवकाश बढ़ाने/कम करने हेतु अनुरोध

माननीय महोदय/महोदया,

[कारण — जैसे यात्रा योजना बदलना/आपात स्थिति] के कारण मैं अपनी छुट्टी को [मूल समाप्ति तिथि] से बढ़ाकर [नई समाप्ति तिथि] करने का अनुरोध करता/करती हूँ। / मैं अपनी छुट्टी जल्दी समाप्त करके [नई वापसी तिथि] को लौटने का अनुरोध करता/करती हूँ। मैंने [सहकर्मी का नाम] को अवगत करा दिया है और हैंडओवर दस्तावेज़ अपडेट कर दिए हैं।

कृपया मेरे अवकाश में आवश्यक संशोधन स्वीकृत करें।

धन्यवाद,  
[आपका नाम]`
      }
    }
  ],

  howToWrite: {
    title: { en: "Tips to Write a Vacation Leave Application", hi: "वैकेशन अवकाश आवेदन कैसे लिखें" },
    tips: [
      { text: { en: "State vacation dates clearly and mention purpose (brief).", hi: "छुट्टियों की तिथियाँ स्पष्ट रूप से लिखें और संक्षेप में उद्देश्य बताएं।" } },
      { text: { en: "Confirm handover plan and responsible colleague.", hi: "हैंडओवर योजना और जिम्मेदार सहकर्मी का उल्लेख करें।" } },
      { text: { en: "Request approval politely and provide contact details for emergencies.", hi: "विनम्रता से अनुमोदन माँगें और आपात स्थिति के लिए संपर्क जानकारी दें।" } },
      { text: { en: "For long vacations, prepare a detailed handover document.", hi: "लंबी छुट्टियों के लिए विस्तृत हैंडओवर डॉक्यूमेंट तैयार करें।" } },
      { text: { en: "Give sufficient notice whenever possible.", hi: "संभव हो तो पर्याप्त पूर्व सूचना दें।" } }
    ]
  },

  relatedTemplates: [
    {
      title: { en: "Casual Leave Application", hi: "साधारण अवकाश आवेदन" },
      description: { en: "Short personal leaves and quick breaks", hi: "छोटे व्यक्तिगत अवकाश" },
      icon: FileText,
      link: "/templates/casual-leave"
    },
    {
      title: { en: "Long Leave / Sabbatical", hi: "लंबी छुट्टी / सैबटिकल" },
      description: { en: "Requests for extended unpaid or sabbatical leave", hi: "लंबे अवकाश के लिए अनुरोध" },
      icon: Briefcase,
      link: "/templates/long-leave"
    },
    {
      title: { en: "Pre-Planned Leave Request", hi: "पूर्व-योजित अवकाश अनुरोध" },
      description: { en: "Formal advance notice templates", hi: "पूर्व में सूचित करने के लिए औपचारिक प्रारूप" },
      icon: GraduationCap,
      link: "/templates/pre-planned-leave"
    }
  ],

  blogArticles: [
    {
      title: { en: "How to Plan Vacation Leave Professionally", hi: "वैकेशन अवकाश को पेशेवर तरीके से कैसे प्लान करें" },
      excerpt: { en: "Steps for planning, handover and approval.", hi: "योजना, हैंडओवर और अनुमोदन के चरण।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/plan-vacation-leave"
    },
    {
      title: { en: "Handing Over Work Before Leave", hi: "छुट्टी से पहले कार्य का हैंडओवर कैसे करें" },
      excerpt: { en: "Checklist and sample handover document.", hi: "चेकलिस्ट और हैंडओवर डॉक्यूमेंट का नमूना।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/handover-checklist"
    }
  ],

  faqs: [
    {
      question: { en: "How far in advance should I request vacation leave?", hi: "कितने समय पहले छुट्टी का अनुरोध करें?" },
      answer: { en: "Ideally 2–4 weeks for short vacations and 1–2 months for long/peak-season plans.", hi: "छोटी छुट्टियों के लिए आदर्श रूप से 2–4 सप्ताह और लंबी/पीक-सीज़न योजनाओं के लिए 1–2 महीने।" }
    },
    {
      question: { en: "Do I need to share travel details?", hi: "क्या मुझे यात्रा विवरण साझा करना चाहिए?" },
      answer: { en: "Share only necessary details (dates, emergency contact). Full itinerary is optional.", hi: "केवल आवश्यक जानकारी साझा करें (तिथि, आपातकालीन संपर्क)। पूरा यात्रा विवरण वैकल्पिक है।" }
    },
    {
      question: { en: "Will vacation be paid?", hi: "क्या वैकेशन भुगतानयुक्त होगी?" },
      answer: { en: "Depends on company policy and leave balance; check HR policy for paid/ unpaid rules.", hi: "कंपनी नीति और आपके छुट्टी बैलेंस पर निर्भर करता है; पेड/अनपेड नियमों के लिए HR नीति देखें।" }
    }
  ]
};
