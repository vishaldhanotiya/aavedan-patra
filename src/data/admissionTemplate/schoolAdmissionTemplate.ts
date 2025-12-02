import { FileText,Briefcase,GraduationCap } from "lucide-react";

export const schoolAdmissionTemplate = {
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
      id: "schoolAdmission",
      title: { 
        en: "School Admission Application for Students", 
        hi: "छात्रों हेतु स्कूल प्रवेश आवेदन" 
      },
      description: {
        en: "Format for requesting new school admission.",
        hi: "नए स्कूल में प्रवेश के लिए आवेदन प्रारूप।"
      },
      bestFor: { 
        en: "Primary, middle, or high-school admission", 
        hi: "प्राथमिक, माध्यमिक या उच्च विद्यालय प्रवेश" 
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

I request admission for my ward [Student Name] in class [Class]. My child previously studied at [Previous School Name].

Your school is known for discipline and quality education. I believe it will help in my child's overall development.

Kindly accept this admission request.

Sincerely,
[Parent/Guardian Name]`,

        hi: `सेवा में,
प्राचार्य महोदय/महोदया
[स्कूल का नाम]
[पता]

विषय: स्कूल प्रवेश हेतु आवेदन

महोदय/महोदया,

मैं अपने बच्चे [Student Name] को कक्षा [Class] में प्रवेश दिलाने हेतु आवेदन प्रस्तुत करता/करती हूँ। वह पूर्व में [Previous School Name] में अध्ययनरत था/थी।

आपका विद्यालय अनुशासन और गुणवत्तापूर्ण शिक्षा के लिए प्रसिद्ध है। मुझे विश्वास है कि यह मेरे बच्चे के सर्वांगीण विकास में सहायक होगा।

कृपया इस प्रवेश आवेदन को स्वीकार करने की कृपा करें।

धन्यवाद।

भवदीय,
[अभिभावक का नाम]`
      }
    }
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
      icon: FileText,
      link: "/templates/bonafide-certificate"
    },
    {
      title: { en: "Character Certificate Application", hi: "चरित्र प्रमाणपत्र आवेदन" },
      description: { en: "For school/college character certificates.", hi: "स्कूल/कॉलेज चरित्र प्रमाणपत्र के लिए आवेदन।" },
      icon: Briefcase,
      link: "/templates/character-certificate"
    },
    {
      title: { en: "TC Application Letter", hi: "टीसी आवेदन पत्र" },
      description: { en: "Transfer certificate application format.", hi: "टीसी आवेदन का प्रारूप।" },
      icon: GraduationCap,
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
