
export const universityAdmissionTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Admission Applications", hi: "प्रवेश आवेदन", slug:"/applications/admission" },
    template: { en: "Student Admission Application", hi: "छात्र प्रवेश आवेदन", slug:"" }
  },

  title: { 
    en: "Admission Application Letters", 
    hi: "प्रवेश आवेदन पत्र" 
  },

  subtitle: { 
    en: "Find ready-made formats for college, school, university, course admission, transfer, and readmission.",
    hi: "कॉलेज, स्कूल, विश्वविद्यालय, कोर्स प्रवेश, ट्रांसफर और पुनः प्रवेश के तैयार आवेदन प्रारूप।" 
  },

  category: { 
    en: "Admission Applications", 
    hi: "प्रवेश आवेदन" 
  },

  updatedDate: "January 2025",

  variations: [

    {
      id: "universityAdmission",
      title: { 
        en: "University Admission Request Letter", 
        hi: "विश्वविद्यालय प्रवेश आवेदन पत्र" 
      },
      description: {
        en: "A professional format for requesting admission to a university program.",
        hi: "विश्वविद्यालय कार्यक्रम में प्रवेश का अनुरोध करने का पेशेवर प्रारूप।"
      },
      bestFor: { 
        en: "UG & PG university admissions", 
        hi: "स्नातक और स्नातकोत्तर प्रवेश" 
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,
The Admission Officer
[University Name]
[Address]

Subject: Application for Admission

Respected Sir/Madam,

I would like to apply for admission to the [Course/Department] program. I completed my [Last Qualification] from [Institution Name] in [Year] with [Percentage/Grade].

I am interested in this course and wish to study at your university because it offers good education and a supportive environment. I promise to work hard and follow all rules.

I request you to kindly consider my admission application. My documents are attached for your review.

Sincerely,
[Your Name]
[Email ID]
[Phone Number]`,

        hi: `To,
The Admission Officer
[University Name]
[Address]

Subject: आवेदन पत्र – प्रवेश हेतु

माननीय महोदय/महोदया,

सविनय निवेदन है कि मैं आपके प्रतिष्ठित विश्वविद्यालय के [Course/Department] कार्यक्रम में प्रवेश के लिए आवेदन करना चाहता/चाहती हूँ। मैंने [Institution Name] से [Year] में अपना [Last Qualification] [Percentage/Grade] के साथ पूर्ण किया है।

मुझे [Subject/Field] में विशेष रुचि है, और आपके विश्वविद्यालय की उत्कृष्ट शैक्षणिक गुणवत्ता, अनुभवी संकाय एवं अनुशासित शिक्षण वातावरण को देखते हुए यहाँ अध्ययन करना मेरे लिए अत्यंत लाभकारी होगा।

मैं आपको विश्वास दिलाता/दिलाती हूँ कि पाठ्यक्रम अवधि के दौरान पूरी निष्ठा, अनुशासन और परिश्रम के साथ अध्ययन करूँगा/करूँगी। कृपया संलग्न शैक्षणिक दस्तावेजों का अवलोकन करने की कृपा करें।

आपसे विनम्र अनुरोध है कि मेरे आवेदन पर सहर्ष विचार करें।

भवदीय,
[Your Name]
[Email ID]
[Phone Number]`
      }
    },
  ],

  howToWrite: {
    title: { 
      en: "Tips to Write an Admission Application", 
      hi: "प्रवेश आवेदन लिखने के टिप्स" 
    },
    tips: [
      { text: { en: "Clearly mention the purpose of admission.", hi: "प्रवेश का उद्देश्य स्पष्ट रूप से लिखें।" } },
      { text: { en: "Keep the tone polite and formal.", hi: "लहजा विनम्र और औपचारिक रखें।" } },
      { text: { en: "Add previous academic details where needed.", hi: "आवश्यकतानुसार पूर्व शैक्षणिक विवरण जोड़ें।" } },
      { text: { en: "Include supporting documents if required.", hi: "आवश्यक होने पर सहायक दस्तावेज शामिल करें।" } },
      { text: { en: "Keep the application short and clear.", hi: "आवेदन को छोटा और स्पष्ट रखें।" } }
    ]
  },

  relatedTemplates: [
    {
      title: { en: "Bonafide Certificate Application", hi: "बोनाफाइड प्रमाणपत्र आवेदन" },
      description: { en: "Format for requesting a bonafide certificate.", hi: "बोनाफाइड प्रमाणपत्र प्राप्त करने का प्रारूप।" },
      icon: 'FileText',
      link: "/templates/bonafide-certificate"
    },
    {
      title: { en: "Character Certificate Application", hi: "चरित्र प्रमाणपत्र आवेदन" },
      description: { en: "For school/college character certificates.", hi: "स्कूल/कॉलेज चरित्र प्रमाणपत्र के लिए आवेदन।" },
      icon: 'Briefcase',
      link: "/templates/character-certificate"
    },
    {
      title: { en: "TC Application Letter", hi: "टीसी आवेदन पत्र" },
      description: { en: "Transfer certificate application format.", hi: "टीसी आवेदन का प्रारूप।" },
      icon: 'GraduationCap',
      link: "/templates/transfer-certificate"
    }
  ],

  blogArticles: [
    {
      title: { en: "How to Write a Perfect Admission Letter", hi: "परफेक्ट प्रवेश आवेदन कैसे लिखें" },
      excerpt: { en: "A complete guide to writing strong admission applications.", hi: "प्रवेश आवेदन लिखने की संपूर्ण गाइड।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-admission-letter"
    },
    {
      title: { en: "Documents Required for Admission", hi: "प्रवेश हेतु आवश्यक दस्तावेज" },
      excerpt: { en: "Checklist for school and college admissions.", hi: "स्कूल और कॉलेज प्रवेश हेतु दस्तावेज सूची।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/admission-documents"
    }
  ],

  faqs: [
    {
      question: { en: "How long should an admission application be?", hi: "प्रवेश आवेदन कितना लंबा होना चाहिए?" },
      answer: { en: "One page is enough. Keep the content clear and concise.", hi: "एक पेज पर्याप्त है। सामग्री स्पष्ट और संक्षिप्त रखें।" }
    },
    {
      question: { en: "Should I include previous school details?", hi: "क्या मुझे पिछली स्कूल जानकारी जोड़नी चाहिए?" },
      answer: { en: "Yes, it helps institutions verify your academic background.", hi: "हाँ, इससे संस्था आपके शैक्षणिक पृष्ठभूमि की पुष्टि कर सकती है।" }
    },
    {
      question: { en: "Can these formats be used online?", hi: "क्या इन प्रारूपों का उपयोग ऑनलाइन किया जा सकता है?" },
      answer: { en: "Yes, these templates are suitable for both online and offline submissions.", hi: "हाँ, यह प्रारूप ऑनलाइन और ऑफलाइन दोनों के लिए उपयुक्त हैं।" }
    }
  ]
};
