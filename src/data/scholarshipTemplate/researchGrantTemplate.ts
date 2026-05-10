export const researchGrantTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug: "/applications" },
    subcategory: {
      en: "Scholarship Applications",
      hi: "छात्रवृत्ति आवेदन",
      slug: "/applications/scholarship",
    },
    template: {
      en: "Scholarship Application Letters",
      hi: "छात्रवृत्ति आवेदन पत्र",
      slug: "",
    },
  },

  title: {
    en: "Research Grant Application Letter",
    hi: "अनुसंधान अनुदान आवेदन पत्र",
  },
  subtitle: {
    en: "Pre-designed formats for PhD research grant, academic research funding, scientific project grant, and post-doctoral fellowship applications.",
    hi: "पीएचडी अनुसंधान अनुदान, शैक्षणिक अनुसंधान निधि, वैज्ञानिक परियोजना अनुदान और पोस्ट-डॉक्टोरल फेलोशिप आवेदन के पूर्व-प्रारूपित प्रारूप।",
  },

  category: {
    en: "Scholarship Applications",
    hi: "छात्रवृत्ति आवेदन",
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "researchGrant",
      title: { en: "Research Grant Application", hi: "अनुसंधान अनुदान आवेदन" },
      description: {
        en: "For students or researchers requesting funding for research.",
        hi: "अनुसंधान कार्य के लिए अनुदान हेतु आवेदन।",
      },
      bestFor: {
        en: "Researchers & postgraduate students",
        hi: "अनुसंधानकर्ता एवं स्नातकोत्तर विद्यार्थी",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
The Research Committee
[University/Organization Name]

Subject: Application for Research Grant

Respected Sir/Madam,

I am writing to request a research grant for my project titled “[Project Title]”. My research focuses on [Topic], and it requires financial support for resources and fieldwork.

This grant will help me complete the study effectively and contribute valuable findings to the field.

Kindly approve my research grant request.

Sincerely,
[Your Name]`,

        hi: `सेवा में,
अनुसंधान समिति
[विश्वविद्यालय/संगठन का नाम]

विषय: अनुसंधान अनुदान हेतु आवेदन

महोदय/महोदया,

मैं “[Project Title]” विषय पर अपने अनुसंधान कार्य के लिए अनुदान का आवेदन करता/करती हूँ। मेरा शोध [Topic] पर केंद्रित है, जिसके लिए संसाधन और फील्डवर्क हेतु वित्तीय सहायता की आवश्यकता है।

यह अनुदान मुझे अपना अध्ययन प्रभावी ढंग से पूर्ण करने में सहायक होगा और इस क्षेत्र में महत्वपूर्ण योगदान देगा।

कृपया मेरे अनुसंधान अनुदान आवेदन को स्वीकृत करने की कृपा करें।

धन्यवाद।

भवदीय,
[आपका नाम]`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "How to Write a Scholarship Application",
      hi: "छात्रवृत्ति आवेदन कैसे लिखें",
    },
    tips: [
      {
        text: {
          en: "Mention your academic achievements clearly.",
          hi: "अपनी शैक्षणिक उपलब्धियों का स्पष्ट उल्लेख करें।",
        },
      },
      {
        text: {
          en: "Explain why you need the scholarship.",
          hi: "बताएँ कि आपको छात्रवृत्ति की आवश्यकता क्यों है।",
        },
      },
      {
        text: {
          en: "Keep the content honest and factual.",
          hi: "सामग्री को ईमानदार और तथ्यात्मक रखें।",
        },
      },
      {
        text: {
          en: "Attach required documents like marksheets, ID, certificates.",
          hi: "आवश्यक दस्तावेज़ जैसे मार्कशीट, आईडी, प्रमाणपत्र संलग्न करें।",
        },
      },
      {
        text: {
          en: "Keep tone formal and respectful.",
          hi: "लहजे को औपचारिक और सम्मानजनक रखें।",
        },
      },
    ],
  },

  relatedTemplates: [
    {
      title: { en: "Fee Concession Application", hi: "फीस रियायत आवेदन" },
      description: {
        en: "Format for requesting fee reduction.",
        hi: "फीस में रियायत हेतु आवेदन प्रारूप।",
      },
      icon: "FileText",
      link: "/templates/fee-concession",
    },
    {
      title: { en: "Education Loan Application", hi: "शिक्षा ऋण आवेदन" },
      description: {
        en: "For requesting a student education loan.",
        hi: "शिक्षा ऋण हेतु आवेदन।",
      },
      icon: "Briefcase",
      link: "/templates/education-loan",
    },
    {
      title: {
        en: "Bonafide Certificate Request",
        hi: "बोनाफाइड प्रमाणपत्र आवेदन",
      },
      description: {
        en: "Required for scholarship and admission.",
        hi: "छात्रवृत्ति और प्रवेश के लिए आवश्यक।",
      },
      icon: "GraduationCap",
      link: "/templates/bonafide-certificate",
    },
  ],

blogArticles: [
  {
    title: {
      en: "How to Apply for a Research Grant Scholarship",
      hi: "रिसर्च ग्रांट छात्रवृत्ति के लिए आवेदन कैसे करें",
    },
    excerpt: {
      en: "Step-by-step guide to applying for research grant scholarships successfully.",
      hi: "रिसर्च ग्रांट छात्रवृत्ति के लिए सफलतापूर्वक आवेदन करने की चरणबद्ध गाइड।",
    },
    readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
    link: "/blog/research-grant-scholarship-apply",
  },
  {
    title: {
      en: "Documents Required for Research Grant Scholarship",
      hi: "रिसर्च ग्रांट छात्रवृत्ति के लिए आवश्यक दस्तावेज",
    },
    excerpt: {
      en: "Complete checklist of documents needed for research grant scholarship applications.",
      hi: "रिसर्च ग्रांट छात्रवृत्ति आवेदन के लिए आवश्यक दस्तावेजों की पूरी चेकलिस्ट।",
    },
    readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
    link: "/blog/research-grant-scholarship-documents",
  },
],

faqs: [
  {
    question: {
      en: "What is a Research Grant Scholarship?",
      hi: "रिसर्च ग्रांट छात्रवृत्ति क्या है?",
    },
    answer: {
      en: "A research grant scholarship is financial support provided to students or researchers for academic research projects and studies.",
      hi: "रिसर्च ग्रांट छात्रवृत्ति छात्रों या शोधकर्ताओं को शैक्षणिक शोध परियोजनाओं और अध्ययन के लिए दी जाने वाली वित्तीय सहायता है।",
    },
  },
  {
    question: {
      en: "Who can apply for a Research Grant Scholarship?",
      hi: "रिसर्च ग्रांट छात्रवृत्ति के लिए कौन आवेदन कर सकता है?",
    },
    answer: {
      en: "Students, research scholars, and academic professionals meeting the eligibility criteria can apply.",
      hi: "पात्रता मानदंड पूरे करने वाले छात्र, शोधार्थी और शैक्षणिक पेशेवर आवेदन कर सकते हैं।",
    },
  },
  {
    question: {
      en: "Which documents are required for a Research Grant Scholarship?",
      hi: "रिसर्च ग्रांट छात्रवृत्ति के लिए कौन-कौन से दस्तावेज आवश्यक हैं?",
    },
    answer: {
      en: "Usually research proposal, academic records, recommendation letters, ID proof, and publication details are required.",
      hi: "आमतौर पर रिसर्च प्रस्ताव, शैक्षणिक रिकॉर्ड, सिफारिश पत्र, पहचान प्रमाण और प्रकाशन विवरण आवश्यक होते हैं।",
    },
  },
  {
    question: {
      en: "Can I apply for multiple Research Grant Scholarships?",
      hi: "क्या मैं कई रिसर्च ग्रांट छात्रवृत्तियों के लिए आवेदन कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes, applicants can apply for multiple grants if allowed by the funding organizations.",
      hi: "हाँ, यदि फंडिंग संगठन अनुमति देते हैं तो आवेदक कई ग्रांट के लिए आवेदन कर सकते हैं।",
    },
  },
  {
    question: {
      en: "Can I apply for a Research Grant Scholarship online?",
      hi: "क्या मैं रिसर्च ग्रांट छात्रवृत्ति के लिए ऑनलाइन आवेदन कर सकता/सकती हूँ?",
    },
    answer: {
      en: "Yes, many universities, institutions, and funding agencies provide online application facilities.",
      hi: "हाँ, कई विश्वविद्यालय, संस्थान और फंडिंग एजेंसियाँ ऑनलाइन आवेदन की सुविधा प्रदान करती हैं।",
    },
  },
],
};
