import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const researchGrantTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Scholarship Applications", hi: "छात्रवृत्ति आवेदन", slug:"/applications/scholarship" },
    template: { en: "Scholarship Application Letters", hi: "छात्रवृत्ति आवेदन पत्र", slug:"" }
  },

  title: { 
    en: "Scholarship Application Letters", 
    hi: "छात्रवृत्ति आवेदन पत्र" 
  },

  subtitle: { 
    en: "Ready-made formats for merit-based, need-based, government, sports, private, and research grant applications.",
    hi: "मेधावी, आर्थिक, सरकारी, खेल, निजी और अनुसंधान अनुदान आवेदन के तैयार प्रारूप।"
  },

  category: { 
    en: "Scholarship Applications", 
    hi: "छात्रवृत्ति आवेदन" 
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "researchGrant",
      title: { en: "Research Grant Application", hi: "अनुसंधान अनुदान आवेदन" },
      description: {
        en: "For students or researchers requesting funding for research.",
        hi: "अनुसंधान कार्य के लिए अनुदान हेतु आवेदन।"
      },
      bestFor: { en: "Researchers & postgraduate students", hi: "अनुसंधानकर्ता एवं स्नातकोत्तर विद्यार्थी" },
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
[आपका नाम]`
      }
    }
  ],

  howToWrite: {
    title: { en: "How to Write a Scholarship Application", hi: "छात्रवृत्ति आवेदन कैसे लिखें" },
    tips: [
      { text: { en: "Mention your academic achievements clearly.", hi: "अपनी शैक्षणिक उपलब्धियों का स्पष्ट उल्लेख करें।" } },
      { text: { en: "Explain why you need the scholarship.", hi: "बताएँ कि आपको छात्रवृत्ति की आवश्यकता क्यों है।" } },
      { text: { en: "Keep the content honest and factual.", hi: "सामग्री को ईमानदार और तथ्यात्मक रखें।" } },
      { text: { en: "Attach required documents like marksheets, ID, certificates.", hi: "आवश्यक दस्तावेज़ जैसे मार्कशीट, आईडी, प्रमाणपत्र संलग्न करें।" } },
      { text: { en: "Keep tone formal and respectful.", hi: "लहजे को औपचारिक और सम्मानजनक रखें।" } }
    ]
  },

  relatedTemplates: [
    {
      title: { en: "Fee Concession Application", hi: "फीस रियायत आवेदन" },
      description: { en: "Format for requesting fee reduction.", hi: "फीस में रियायत हेतु आवेदन प्रारूप।" },
      icon: FileText,
      link: "/templates/fee-concession"
    },
    {
      title: { en: "Education Loan Application", hi: "शिक्षा ऋण आवेदन" },
      description: { en: "For requesting a student education loan.", hi: "शिक्षा ऋण हेतु आवेदन।" },
      icon: Briefcase,
      link: "/templates/education-loan"
    },
    {
      title: { en: "Bonafide Certificate Request", hi: "बोनाफाइड प्रमाणपत्र आवेदन" },
      description: { en: "Required for scholarship and admission.", hi: "छात्रवृत्ति और प्रवेश के लिए आवश्यक।" },
      icon: GraduationCap,
      link: "/templates/bonafide-certificate"
    }
  ],

  blogArticles: [
    {
      title: { en: "Tips to Win a Scholarship", hi: "छात्रवृत्ति पाने के टिप्स" },
      excerpt: { en: "Improve your chances with these proven strategies.", hi: "सिद्ध रणनीतियों के साथ अपनी संभावनाएँ बढ़ाएँ।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/how-to-win-scholarship"
    },
    {
      title: { en: "Documents Required for Scholarship", hi: "छात्रवृत्ति हेतु आवश्यक दस्तावेज" },
      excerpt: { en: "Checklist for quick approval.", hi: "त्वरित स्वीकृति के लिए जरूरी दस्तावेज़।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/scholarship-documents"
    }
  ],

  faqs: [
    {
      question: { en: "Can I apply for multiple scholarships?", hi: "क्या मैं कई छात्रवृत्तियों के लिए आवेदन कर सकता/सकती हूँ?" },
      answer: { en: "Yes, unless restricted by the institution.", hi: "हाँ, जब तक संस्था द्वारा प्रतिबंधित न किया गया हो।" }
    },
    {
      question: { en: "Do I need income proof for need-based scholarships?", hi: "नीड-बेस्ड छात्रवृत्ति के लिए आय प्रमाण जरूरी है?" },
      answer: { en: "Yes, income certificate is mandatory.", hi: "हाँ, आय प्रमाणपत्र आवश्यक है।" }
    },
    {
      question: { en: "Are private scholarships reliable?", hi: "क्या निजी छात्रवृत्तियाँ विश्वसनीय होती हैं?" },
      answer: { en: "Yes, if offered by registered organizations or foundations.", hi: "हाँ, यदि वे पंजीकृत संगठन या फाउंडेशन द्वारा दी जाती हों।" }
    }
  ]
};
