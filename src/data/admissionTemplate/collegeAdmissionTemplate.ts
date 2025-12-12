
export const collegeAdmissionTemplate = {
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
      id: "collegeAdmission",
      title: { 
        en: "College Admission Application", 
        hi: "कॉलेज प्रवेश आवेदन" 
      },
      description: {
        en: "A formal application format for requesting admission into a college.",
        hi: "कॉलेज में प्रवेश का अनुरोध करने के लिए औपचारिक आवेदन प्रारूप।"
      },
      bestFor: { 
        en: "First-year admission, New college admission", 
        hi: "पहले वर्ष का प्रवेश, नया कॉलेज प्रवेश" 
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Principal
[College Name]
[Address]

Subject: Request for College Admission

Respected Sir/Madam,

I would like to apply for admission to the [Course/Program Name] for the [Year–Year] academic year. I have completed my [Previous Class/Qualification] from [School/Institute Name] with [Percentage/Grade].

I am interested in this course and wish to study at your college because of its good teaching and learning environment. I promise to follow all rules and study sincerely.

Please consider my request for admission. I have attached the necessary documents like my marksheet and transfer certificate.

Thank you.

Yours sincerely,
[Your Name]
[Address]
[Phone Number]
[Email ID]`,

        hi: `सेवा में,
प्राचार्य महोदय/महोदया
[कॉलेज का नाम]
[पता]

विषय: कॉलेज में प्रवेश के लिए आवेदन

महोदय/महोदया,

मैं आपके कॉलेज में [कोर्स/प्रोग्राम का नाम] में [सत्र वर्ष–वर्ष] के लिए प्रवेश लेना चाहता/चाहती हूँ। मैंने अपना [पिछली कक्षा/योग्यता] [स्कूल/संस्थान का नाम] से [प्रतिशत/ग्रेड] के साथ पूरा किया है।

मुझे यह कोर्स करने में रुचि है और आपके कॉलेज का अच्छा शैक्षणिक वातावरण होने के कारण मैं यहाँ अध्ययन करना चाहता/चाहती हूँ। मैं वादा करता/करती हूँ कि कॉलेज के सभी नियमों का पालन करूँगा/करूँगी और मन लगाकर पढ़ाई करूँगा/करूँगी।

कृपया मेरे प्रवेश आवेदन पर विचार करने की कृपा करें। मैंने आवश्यक दस्तावेज़, जैसे मार्कशीट और ट्रांसफर सर्टिफिकेट, संलग्न किए हैं।

धन्यवाद।

भवदीय,
[आपका नाम]
[पता]
[फोन नंबर]
[ईमेल आईडी]`
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
      icon: "FileText",
      link: "/templates/bonafide-certificate"
    },
    {
      title: { en: "Character Certificate Application", hi: "चरित्र प्रमाणपत्र आवेदन" },
      description: { en: "For school/college character certificates.", hi: "स्कूल/कॉलेज चरित्र प्रमाणपत्र के लिए आवेदन।" },
      icon: "Briefcase",
      link: "/templates/character-certificate"
    },
    {
      title: { en: "TC Application Letter", hi: "टीसी आवेदन पत्र" },
      description: { en: "Transfer certificate application format.", hi: "टीसी आवेदन का प्रारूप।" },
      icon: "GraduationCap",
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
