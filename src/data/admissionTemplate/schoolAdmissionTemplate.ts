export const schoolAdmissionTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug: "/applications" },
    subcategory: {
      en: "Admission Applications",
      hi: "प्रवेश आवेदन",
      slug: "/applications/admission",
    },
    template: {
      en: "Student Admission Application",
      hi: "छात्र प्रवेश आवेदन",
      slug: "",
    },
  },

  title: {
    en: "School Admission Application Letter",
    hi: "स्कूल प्रवेश आवेदन पत्र",
  },

  subtitle: {
    en: "Ready-made school admission application format for nursery, primary, middle, and high-school admission requests.",
    hi: "नर्सरी, प्राथमिक, मिडिल और हाई-स्कूल प्रवेश अनुरोधों के लिए स्कूल प्रवेश आवेदन का तैयार प्रारूप।",
  },

  category: {
    en: "Admission Applications",
    hi: "प्रवेश आवेदन",
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "schoolAdmission",
      title: {
        en: "School Admission Application for Students",
        hi: "छात्रों हेतु स्कूल प्रवेश आवेदन",
      },
      description: {
        en: "Format for requesting new school admission.",
        hi: "नए स्कूल में प्रवेश के लिए आवेदन प्रारूप।",
      },
      bestFor: {
        en: "Primary, middle, or high-school admission",
        hi: "प्राथमिक, माध्यमिक या उच्च विद्यालय प्रवेश",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Principal
[School Name]
[Address]

Subject: Application for School Admission

Respected Sir/Madam,

I request admission for my child, [Student Name], in Class [Class] for the new academic year. He/She previously studied at [Previous School Name].

Your school is known for good education and discipline. I believe it will help in my child’s overall development. I am attaching the required documents for your review.

Kindly consider my request.

Sincerely,
[Parent/Guardian Name]
[Contact Number]
[Email ID]
[Date]`,

        hi: `सेवा में,
प्राचार्य महोदय/महोदया
[स्कूल का नाम]
[पता]

विषय: विद्यालय में प्रवेश हेतु आवेदन

माननीय सर/मैडम,

मैं अपने बच्चे [Student Name] के लिए कक्षा [Class] में प्रवेश का विनम्र अनुरोध करता/करती हूँ। वह पहले [Previous School Name] में पढ़ता/पढ़ती था/थी।

आपका विद्यालय अनुशासन और अच्छी शिक्षा के लिए जाना जाता है। मुझे विश्वास है कि यहाँ पढ़ने से मेरे बच्चे का समग्र विकास होगा। आवश्यक दस्तावेज संलग्न हैं।

कृपया मेरे आवेदन पर विचार करने की कृपा करें।

धन्यवाद,
[Parent/Guardian Name]
[Contact Number]
[Email ID]
[Date]`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "Tips to Write a School Admission Application",
      hi: "स्कूल प्रवेश आवेदन लिखने के टिप्स",
    },
    tips: [
      {
        text: {
          en: "Mention the child's full name, date of birth, class sought, and academic session clearly.",
          hi: "बच्चे का पूरा नाम, जन्म तिथि, जिस कक्षा में प्रवेश चाहिए और शैक्षणिक सत्र स्पष्ट लिखें।",
        },
      },
      {
        text: {
          en: "Attach the birth certificate or age proof because schools verify age eligibility by class.",
          hi: "जन्म प्रमाणपत्र या आयु प्रमाण संलग्न करें क्योंकि स्कूल कक्षा के अनुसार आयु पात्रता जांचते हैं।",
        },
      },
      {
        text: {
          en: "Add previous school details, report card, and transfer certificate if the child studied elsewhere.",
          hi: "यदि बच्चा पहले कहीं पढ़ा है तो पिछले स्कूल का विवरण, रिपोर्ट कार्ड और ट्रांसफर सर्टिफिकेट जोड़ें।",
        },
      },
      {
        text: {
          en: "Include parent or guardian details, address proof, contact number, and passport-size photographs.",
          hi: "माता-पिता या अभिभावक का विवरण, पता प्रमाण, संपर्क नंबर और पासपोर्ट साइज फोटो शामिल करें।",
        },
      },
      {
        text: {
          en: "Mention vaccination record or health information for nursery and primary classes if the school asks for it.",
          hi: "यदि स्कूल मांगे तो नर्सरी और प्राथमिक कक्षाओं के लिए टीकाकरण रिकॉर्ड या स्वास्थ्य जानकारी लिखें।",
        },
      },
    ],
  },

  relatedTemplates: [
    {
      title: {
        en: "Bonafide Certificate Application",
        hi: "बोनाफाइड प्रमाणपत्र आवेदन",
      },
      description: {
        en: "Format for requesting a bonafide certificate.",
        hi: "बोनाफाइड प्रमाणपत्र प्राप्त करने का प्रारूप।",
      },
      icon: "FileText",
      link: "/templates/bonafide-certificate",
    },
    {
      title: {
        en: "Character Certificate Application",
        hi: "चरित्र प्रमाणपत्र आवेदन",
      },
      description: {
        en: "For school/college character certificates.",
        hi: "स्कूल/कॉलेज चरित्र प्रमाणपत्र के लिए आवेदन।",
      },
      icon: "Briefcase",
      link: "/templates/character-certificate",
    },
    {
      title: { en: "TC Application Letter", hi: "टीसी आवेदन पत्र" },
      description: {
        en: "Transfer certificate application format.",
        hi: "टीसी आवेदन का प्रारूप।",
      },
      icon: "GraduationCap",
      link: "/templates/transfer-certificate",
    },
  ],

  blogArticles: [
    {
      title: {
        en: "How to Write a Perfect Admission Letter",
        hi: "परफेक्ट प्रवेश आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "A complete guide to writing strong admission applications.",
        hi: "प्रवेश आवेदन लिखने की संपूर्ण गाइड।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-admission-letter",
    },
    {
      title: {
        en: "Documents Required for Admission",
        hi: "प्रवेश हेतु आवश्यक दस्तावेज",
      },
      excerpt: {
        en: "Checklist for school and college admissions.",
        hi: "स्कूल और कॉलेज प्रवेश हेतु दस्तावेज सूची।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/admission-documents",
    },
  ],

  faqs: [
    {
      question: {
        en: "How long should an admission application be?",
        hi: "प्रवेश आवेदन कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "One page is enough. Keep the content clear and concise.",
        hi: "एक पेज पर्याप्त है। सामग्री स्पष्ट और संक्षिप्त रखें।",
      },
    },
    {
      question: {
        en: "Should I include previous school details?",
        hi: "क्या मुझे पिछली स्कूल जानकारी जोड़नी चाहिए?",
      },
      answer: {
        en: "Yes, it helps institutions verify your academic background.",
        hi: "हाँ, इससे संस्था आपके शैक्षणिक पृष्ठभूमि की पुष्टि कर सकती है।",
      },
    },
    {
      question: {
        en: "Can these formats be used online?",
        hi: "क्या इन प्रारूपों का उपयोग ऑनलाइन किया जा सकता है?",
      },
      answer: {
        en: "Yes, these templates are suitable for both online and offline submissions.",
        hi: "हाँ, यह प्रारूप ऑनलाइन और ऑफलाइन दोनों के लिए उपयुक्त हैं।",
      },
    },
  ],
};
