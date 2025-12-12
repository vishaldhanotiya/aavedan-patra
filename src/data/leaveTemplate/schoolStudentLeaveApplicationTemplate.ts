
export const schoolStudentLeaveApplicationTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Leave Applications", hi: "अवकाश आवेदन", slug:"/applications/leave" },
    template: { en: "Leave Application for School Students", hi: "स्कूल छात्रों के लिए अवकाश आवेदन", slug:"" }
  },

  title: { 
    en: "Leave Application for School Students", 
    hi: "स्कूल छात्रों के लिए अवकाश आवेदन" 
  },

  subtitle: { 
    en: "Simple and easy leave application formats for school students including sick leave, fever, out-of-station, family function, and half-day leave.",
    hi: "स्कूल छात्रों के लिए सरल अवकाश प्रारूप — बीमारी, बुखार, बाहर जाना, पारिवारिक कार्यक्रम और आधे दिन की छुट्टी के लिए।"
  },

  category: { en: "Leave Applications", hi: "अवकाश आवेदन" },

  updatedDate: "January 2025",

  /* ---------------------------------------------------------
   * VARIATIONS
   * --------------------------------------------------------- */
  variations: [


    /* -------------------------------------------------------
     * 2. SICK LEAVE (STUDENT)
     * ------------------------------------------------------- */
    {
      id: "sickLeave",
      title: { en: "Sick Leave Application for School Student", hi: "स्कूल छात्र के लिए बीमारी अवकाश" },
      description: { en: "For students who are sick and cannot attend school.", hi: "बीमार विद्यार्थियों के लिए।" },
      bestFor: { en: "1–3 days sick leave", hi: "1–3 दिन का बीमार अवकाश" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Principal
[School Name]

Date: [Date of Application]

Subject: Application for Sick Leave

Respected Sir/Madam,

With Due Respect I am a student of class [Class] (Roll No: [Roll No]). I am suffering from [a severe case of] [illness, e.g., viral fever]. So, I will not be able to attend school from [start date] to [end date].

Please kindly grant me sick leave for the mentioned period. A medical certificate from our doctor is attached for your reference.

Thank you for your consideration.

Yours obediently,
[Your Name]`,

        hi: `प्रति,
प्रधानाचार्य महोदय/महोदया
[विद्यालय का नाम]

दिनांक: [आवेदन की तारीख]

विषय: बीमारी के कारण अवकाश हेतु आवेदन

आदरणीय महोदय/महोदया,

सविनय निवेदन है कि मैं, [आपका नाम], कक्षा [कक्षा] (रोल नंबर: [रोल नंबर]) का छात्र/छात्रा हूँ। मैं [बीमारी, जैसे - तेज़ बुखार] से पीड़ित हूँ। अतः, मैं [प्रारंभ तिथि] से [अंत तिथि] तक विद्यालय आने में असमर्थ रहूँगा/रहूँगी।

मैं आपसे विनम्रतापूर्वक अनुरोध करता/करती हूँ कि उक्त अवधि के लिए मुझे चिकित्सकीय अवकाश प्रदान करने की कृपा करें। आपके संदर्भ के लिए हमारे चिकित्सक का प्रमाण पत्र संलग्न है।

आपके विचारार्थ धन्यवाद।

आपका आज्ञाकारी,
[आपका नाम]
रोल नंबर: [रोल नंबर]`
      }
    },

    /* -------------------------------------------------------
     * 3. FEVER LEAVE
     * ------------------------------------------------------- */
    {
      id: "fever",
      title: { en: "Leave Application for Fever (Student)", hi: "बुखार के लिए अवकाश आवेदन (छात्र)" },
      description: { en: "For students suffering from fever.", hi: "बुखार में अवकाश के लिए।" },
      bestFor: { en: "1–2 day fever", hi: "1–2 दिन का बुखार" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Principal  
[School Name]

Subject: Leave Application Due to Fever  

Respected Sir/Madam,  

With Due respect, I am a student of class [Class]. I am suffering from fever and cannot attend school on [date]. Kindly grant me leave for the mentioned day.  

Thank you.  

Yours faithfully,  
[Your Name]`,

        hi: `सेवा में,  
प्रधानाचार्य महोदय/महोदया  
[स्कूल का नाम]

विषय: बुखार के कारण अवकाश हेतु आवेदन  

माननीय सर/मैडम,  

सविनय निवेदन है, कि मैं कक्षा [कक्षा] का छात्र/छात्रा हूँ। मुझे बुखार है और [तारीख] को स्कूल आना संभव नहीं है। कृपया मुझे उक्त दिन का अवकाश प्रदान करें।  

धन्यवाद।  

आपका विश्वासी,  
[आपका नाम]`
      }
    },

    /* -------------------------------------------------------
     * 4. OUT OF STATION LEAVE
     * ------------------------------------------------------- */
    {
      id: "outOfStation",
      title: { en: "Out-of-Station Leave for Students", hi: "बाहर जाने के लिए छात्र अवकाश" },
      description: { en: "For traveling with family or leaving town.", hi: "परिवार के साथ यात्रा या शहर से बाहर जाने के लिए।" },
      bestFor: { en: "Trips, travel", hi: "यात्रा, घूमने जाना" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Principal  
[School Name]

Subject: Out-of-Station Leave Request  

Respected Sir/Madam,  

With Due respect, I am a student of class [Class]. I will be out of station with my family from [start date] to [end date]. Kindly grant me leave for these days.  

Thank you.  

Yours obediently,  
[Your Name]  
Roll No: [Roll No]`,

        hi: `सेवा में,  
प्रधानाचार्य महोदय/महोदया  
[स्कूल का नाम]

विषय: बाहर जाने हेतु अवकाश आवेदन  

माननीय सर/मैडम,  

सविनय निवेदन है, कि मैं कक्षा [कक्षा] का छात्र/छात्रा हूँ। मैं अपने परिवार के साथ [आरंभ तिथि] से [अंत तिथि] तक शहर से बाहर रहूँगा/रहूँगी। कृपया मुझे इन दिनों का अवकाश प्रदान करें।  

धन्यवाद।  

आपका आज्ञाकारी,  
[आपका नाम]  
रोल नंबर: [रोल नंबर]`
      }
    },

    /* -------------------------------------------------------
     * 5. FAMILY FUNCTION
     * ------------------------------------------------------- */
    {
      id: "familyFunction",
      title: { en: "Leave for Family Function (Student)", hi: "पारिवारिक कार्यक्रम हेतु अवकाश (छात्र)" },
      description: { en: "For weddings, ceremonies, or family gatherings.", hi: "शादी, समारोह या पारिवारिक कार्यक्रमों के लिए।" },
      bestFor: { en: "Family events", hi: "पारिवारिक कार्यक्रम" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Principal  
[School Name]

Subject: Leave Request for Family Function  

Respected Sir/Madam,  

With Due respect, I am a student of class [Class]. I need leave on [date] to attend a family function. Kindly grant me leave for the day.  

Thank you.  

Yours obediently,  
[Your Name]`,

        hi: `सेवा में,  
प्रधानाचार्य महोदय/महोदया  
[स्कूल का नाम]

विषय: पारिवारिक कार्यक्रम हेतु अवकाश आवेदन  

माननीय सर/मैडम,  

सविनय निवेदन है, कि मैं कक्षा [कक्षा] का छात्र/छात्रा हूँ। मुझे [तारीख] को एक पारिवारिक कार्यक्रम में सम्मिलित होना है। कृपया मुझे उस दिन का अवकाश प्रदान करें।  

धन्यवाद।  

आपका आज्ञाकारी,  
[आपका नाम]`
      }
    },

    /* -------------------------------------------------------
     * 6. HALF-DAY LEAVE FOR STUDENTS
     * ------------------------------------------------------- */
    {
      id: "halfDay",
      title: { en: "Half-Day Leave for Students", hi: "छात्रों के लिए आधे दिन का अवकाश" },
      description: { en: "For mid-day appointments, errands, or emergencies.", hi: "मध्याह्न अपॉइंटमेंट या छोटे कार्यों के लिए।" },
      bestFor: { en: "Half-day absence", hi: "आधे दिन की छुट्टी" },
      length: { en: "Short", hi: "छोटा" },
      difficulty: { en: "Very Easy", hi: "बहुत आसान" },

      content: {
        en: `To,  
The Principal  
[School Name]

Subject: Half-Day Leave Application  

Respected Sir/Madam,  

With Due Respect, I am a student of class [Class]. I request half-day leave on [date] as I have to attend [reason]. Kindly allow me to go after the recess.  

Thank you.  

Yours obediently,  
[Your Name]`,

        hi: `सेवा में,  
प्रधानाचार्य महोदय/महोदया  
[स्कूल का नाम]

विषय: आधे दिन के अवकाश हेतु आवेदन  

माननीय सर/मैडम,  

सविनय निवेदन है, कि मैं कक्षा [कक्षा] का छात्र/छात्रा हूँ। मुझे [कारण] के कारण [तारीख] को आधे दिन का अवकाश चाहिए। कृपया मुझे मध्यांतर (रीसेस) के बाद जाने की अनुमति दें।  

धन्यवाद।  

आपका आज्ञाकारी,  
[आपका नाम]`
      }
    }
  ],

  /* ---------------------------------------------------------
   * HOW TO WRITE SECTION
   * --------------------------------------------------------- */
  howToWrite: {
    title: { en: "How to Write a Leave Application for School", hi: "स्कूल के लिए अवकाश आवेदन कैसे लिखें" },
    tips: [
      { text: { en: "Write your class and roll number clearly.", hi: "अपनी कक्षा और रोल नंबर स्पष्ट रूप से लिखें।" } },
      { text: { en: "Keep the reason short.", hi: "कारण छोटा और सरल रखें।" } },
      { text: { en: "Mention exact dates.", hi: "सटीक तिथि लिखें।" } },
      { text: { en: "Use polite language.", hi: "विनम्र भाषा का उपयोग करें।" } },
      { text: { en: "End with ‘Yours obediently’.", hi: "‘आपका आज्ञाकारी’ से समाप्त करें।" } }
    ]
  },

  /* ---------------------------------------------------------
   * RELATED TEMPLATES
   * --------------------------------------------------------- */
  relatedTemplates: [
    {
      title: { en: "Sick Leave (Student)", hi: "बीमार अवकाश (छात्र)" },
      description: { en: "For fever or illness", hi: "बीमारी या बुखार के लिए" },
      icon: 'FileText',
      link: "/templates/sick-leave-student"
    },
    {
      title: { en: "Absent Note for School", hi: "स्कूल अनुपस्थिति नोट" },
      description: { en: "For single-day absence", hi: "एक दिन की अनुपस्थिति के लिए" },
      icon: 'Briefcase',
      link: "/templates/absent-note"
    },
    {
      title: { en: "Parent to Teacher Leave Request", hi: "अभिभावक द्वारा शिक्षक को अवकाश आवेदन" },
      description: { en: "For parents writing on behalf of child", hi: "अभिभावक द्वारा बच्चे के लिए" },
      icon: 'GraduationCap',
      link: "/templates/parent-leave"
    }
  ],

  /* ---------------------------------------------------------
   * BLOG ARTICLES
   * --------------------------------------------------------- */
  blogArticles: [
    {
      title: { en: "How Students Should Write Leave Applications", hi: "छात्र अवकाश आवेदन कैसे लिखें" },
      excerpt: { en: "Learn simple formats for students.", hi: "छात्रों के लिए आसान प्रारूप।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/student-leave-writing"
    },
    {
      title: { en: "Difference Between Sick Leave and Casual Leave for Students", hi: "छात्रों के लिए बीमार और साधारण अवकाश में अंतर" },
      excerpt: { en: "Understand the difference easily.", hi: "अंतर को सरलता से समझें।" },
      readTime: { en: "3 min read", hi: "3 मिनट पढ़ें" },
      link: "/blog/student-leave-types"
    }
  ],

  /* ---------------------------------------------------------
   * FAQS
   * --------------------------------------------------------- */
  faqs: [
    {
      question: { en: "Do students need to give a reason?", hi: "क्या छात्रों को कारण लिखना जरूरी है?" },
      answer: { 
        en: "Yes, a short reason is required in school leave applications.",
        hi: "हाँ, स्कूल अवकाश आवेदन में छोटा कारण लिखना आवश्यक है।"
      }
    },
    {
      question: { en: "Can parents write the leave letter?", hi: "क्या माता-पिता अवकाश आवेदन लिख सकते हैं?" },
      answer: { 
        en: "Yes, especially for younger students.",
        hi: "हाँ, विशेषकर छोटे बच्चों के लिए।"
      }
    },
    {
      question: { en: "Is a medical certificate required?", hi: "क्या मेडिकल सर्टिफिकेट जरूरी है?" },
      answer: { 
        en: "Only if the leave is for more than 2–3 days.",
        hi: "केवल तब जब 2–3 दिनों से अधिक का अवकाश हो।"
      }
    }
  ]
};


    /* -------------------------------------------------------
     * 1. GENERAL STUDENT LEAVE
     * ------------------------------------------------------- */
//     {
//       id: "general",
//       title: { en: "General Leave Application for School", hi: "स्कूल के लिए सामान्य अवकाश आवेदन" },
//       description: { 
//         en: "Simple leave format for students for any general reason.",
//         hi: "किसी भी सामान्य कारण के लिए विद्यार्थियों का सरल अवकाश प्रारूप।"
//       },
//       bestFor: { en: "Any general leave", hi: "सामान्य अवकाश" },
//       length: { en: "Short", hi: "छोटा" },
//       difficulty: { en: "Very Easy", hi: "बहुत आसान" },

//       content: {
//         en: `To,  
// The Principal  
// [School Name]  
// [City]

// Subject: Leave Application  

// Respected Sir/Madam,  

// I am a student of class [Class] and I request leave on [date] due to [reason]. I kindly request you to grant me leave for the mentioned day.  

// Thank you.  

// Yours obediently,  
// [Your Name]  
// Class: [Class]  
// Roll No: [Roll No]`,

//         hi: `सेवा में,  
// प्रधानाचार्य महोदय/महोदया  
// [स्कूल का नाम]  
// [शहर]

// विषय: अवकाश हेतु आवेदन  

// माननीय सर/मैडम,  

// मैं कक्षा [कक्षा] का छात्र/छात्रा हूँ और [कारण] के कारण [तारीख] को अवकाश लेना चाहता/चाहती हूँ। कृपया मुझे उक्त दिन के लिए अवकाश प्रदान करने की कृपा करें।  

// धन्यवाद।  

// आपका आज्ञाकारी,  
// [आपका नाम]  
// कक्षा: [कक्षा]  
// रोल नंबर: [रोल नंबर]`
//       }
//     },