import {
  FileSpreadsheet,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Mail,
  FileText,
  MessageSquare,
  Heart,
} from "lucide-react";
import { CategoryData } from "./applicationsCategory";

// ===========================
// ESSAYS & PARAGRAPHS CATEGORY
// ===========================
export const essaysCategory: CategoryData = {
  slug: "essays",
  name: {
    en: "Essay & Paragraph Templates",
    hi: "निबंध और पैराग्राफ टेम्पलेट",
  },
  description: {
    en: "Essay templates and paragraph samples for students on various topics. Download formats for 100 words, 200 words, 500 words essays, speeches, and paragraph writing.",
    hi: "विभिन्न विषयों पर छात्रों के लिए निबंध टेम्पलेट और पैराग्राफ नमूने। 100 शब्द, 200 शब्द, 500 शब्द निबंध, भाषण और पैराग्राफ लेखन के लिए प्रारूप डाउनलोड करें।",
  },
  breadcrumbs: [
    { en: "Essays & Paragraphs", hi: "निबंध और पैराग्राफ" },
  ],
  icon: BookOpen,
  subcategories: [
    {
      icon: FileText,
      title: { en: "100 Words Essays", hi: "100 शब्द निबंध" },
      description: { en: "Short essay templates in 100 words", hi: "100 शब्दों में लघु निबंध टेम्पलेट" },
      count: 42,
      slug: "100-words",
    },
    {
      icon: FileText,
      title: { en: "200 Words Essays", hi: "200 शब्द निबंध" },
      description: { en: "Medium-length essay formats", hi: "मध्यम-लंबाई निबंध प्रारूप" },
      count: 38,
      slug: "200-words",
    },
    {
      icon: BookOpen,
      title: { en: "500 Words Essays", hi: "500 शब्द निबंध" },
      description: { en: "Detailed essay templates", hi: "विस्तृत निबंध टेम्पलेट" },
      count: 35,
      slug: "500-words",
    },
    {
      icon: MessageSquare,
      title: { en: "Speeches", hi: "भाषण" },
      description: { en: "Speech writing templates", hi: "भाषण लेखन टेम्पलेट" },
      count: 29,
      slug: "speeches",
    },
    {
      icon: Heart,
      title: { en: "Moral Stories", hi: "नैतिक कहानियां" },
      description: { en: "Story writing with moral lessons", hi: "नैतिक पाठ के साथ कहानी लेखन" },
      count: 26,
      slug: "stories",
    },
    {
      icon: GraduationCap,
      title: { en: "Paragraphs", hi: "पैराग्राफ" },
      description: { en: "Paragraph writing samples", hi: "पैराग्राफ लेखन नमूने" },
      count: 44,
      slug: "paragraphs",
    },
  ],
  templates: [
    {
      title: { en: "Essay on Importance of Education", hi: "शिक्षा के महत्व पर निबंध" },
      description: {
        en: "Complete essay discussing the significance of education in society",
        hi: "समाज में शिक्षा के महत्व पर चर्चा करने वाला पूर्ण निबंध",
      },
      views: "45.2k",
      date: "Nov 2025",
      tag: "Popular",
    },
    {
      title: { en: "Essay on Global Warming (500 Words)", hi: "ग्लोबल वार्मिंग पर निबंध (500 शब्द)" },
      description: {
        en: "Detailed essay on climate change causes and solutions",
        hi: "जलवायु परिवर्तन के कारणों और समाधान पर विस्तृत निबंध",
      },
      views: "42.8k",
      date: "Nov 2025",
    },
    {
      title: { en: "Speech on Independence Day", hi: "स्वतंत्रता दिवस पर भाषण" },
      description: {
        en: "Patriotic speech template for Independence Day celebrations",
        hi: "स्वतंत्रता दिवस समारोह के लिए देशभक्ति भाषण टेम्पलेट",
      },
      views: "39.5k",
      date: "Nov 2025",
      tag: "Trending",
    },
    {
      title: { en: "Paragraph on My Best Friend", hi: "मेरे सबसे अच्छे दोस्त पर पैराग्राफ" },
      description: {
        en: "Short paragraph describing friendship and best friend qualities",
        hi: "दोस्ती और सबसे अच्छे दोस्त के गुणों का वर्णन करने वाला छोटा पैराग्राफ",
      },
      views: "36.3k",
      date: "Nov 2025",
    },
    {
      title: { en: "Essay on Pollution (200 Words)", hi: "प्रदूषण पर निबंध (200 शब्द)" },
      description: {
        en: "Concise essay on environmental pollution and its effects",
        hi: "पर्यावरण प्रदूषण और इसके प्रभावों पर संक्षिप्त निबंध",
      },
      views: "34.1k",
      date: "Nov 2025",
    },
    {
      title: { en: "Story with Moral: Honesty is Best Policy", hi: "नैतिक कहानी: ईमानदारी सर्वश्रेष्ठ नीति है" },
      description: {
        en: "Moral story teaching the value of honesty and truthfulness",
        hi: "ईमानदारी और सच्चाई के मूल्य को सिखाने वाली नैतिक कहानी",
      },
      views: "31.7k",
      date: "Oct 2025",
    },
  ],
  aboutContent: {
    en: "Essay and paragraph templates are valuable resources for students at all education levels. Our comprehensive collection includes short essays in 100 words, medium-length essays in 200 words, detailed essays in 500 words, speech templates for various occasions, moral stories with life lessons, and paragraph writing samples on diverse topics. Each template is carefully structured with proper introduction, body paragraphs, and conclusion, helping students learn effective writing techniques while completing their assignments.",
    hi: "निबंध और पैराग्राफ टेम्पलेट सभी शिक्षा स्तरों पर छात्रों के लिए मूल्यवान संसाधन हैं। हमारे व्यापक संग्रह में 100 शब्दों में लघु निबंध, 200 शब्दों में मध्यम-लंबाई निबंध, 500 शब्दों में विस्तृत निबंध, विभिन्न अवसरों के लिए भाषण टेम्पलेट, जीवन पाठ के साथ नैतिक कहानियां और विविध विषयों पर पैराग्राफ लेखन नमूने शामिल हैं।",
  },
  relatedCategories: [
    {
      icon: Mail,
      title: { en: "Letters", hi: "पत्र" },
      description: { en: "Formal and informal letters", hi: "औपचारिक और अनौपचारिक पत्र" },
      count: 156,
      slug: "letters",
    },
    {
      icon: FileText,
      title: { en: "Applications", hi: "आवेदन" },
      description: { en: "Various application formats", hi: "विभिन्न आवेदन प्रारूप" },
      count: 189,
      slug: "applications",
    },
    {
      icon: ClipboardCheck,
      title: { en: "Notices & Reports", hi: "नोटिस और रिपोर्ट" },
      description: { en: "Official notice formats", hi: "आधिकारिक नोटिस प्रारूप" },
      count: 128,
      slug: "notices",
    },
    {
      icon: FileSpreadsheet,
      title: { en: "Resumes", hi: "रिज्यूमे" },
      description: { en: "Resume and CV templates", hi: "रिज्यूमे और सीवी टेम्पलेट" },
      count: 167,
      slug: "resumes",
    },
  ],
  blogs: [
    {
      title: { en: "How to Write a Perfect Essay", hi: "परफेक्ट निबंध कैसे लिखें" },
      excerpt: {
        en: "Step-by-step guide to essay writing with structure, tips, and examples",
        hi: "संरचना, सुझाव और उदाहरणों के साथ निबंध लेखन के लिए चरण-दर-चरण गाइड",
      },
      readTime: "6 min read",
      thumbnail: BookOpen,
      slug: "perfect-essay-writing-guide",
    },
    {
      title: { en: "Speech Writing Tips for Students", hi: "छात्रों के लिए भाषण लेखन टिप्स" },
      excerpt: {
        en: "Master the art of speech writing with these expert tips and techniques",
        hi: "इन विशेषज्ञ सुझावों और तकनीकों के साथ भाषण लेखन की कला में महारत हासिल करें",
      },
      readTime: "5 min read",
      thumbnail: MessageSquare,
      slug: "speech-writing-tips",
    },
    {
      title: { en: "Paragraph Writing Made Easy", hi: "पैराग्राफ लेखन आसान बनाया गया" },
      excerpt: {
        en: "Learn the fundamentals of paragraph writing with examples and practice",
        hi: "उदाहरणों और अभ्यास के साथ पैराग्राफ लेखन की मूल बातें सीखें",
      },
      readTime: "4 min read",
      thumbnail: FileText,
      slug: "paragraph-writing-guide",
    },
  ],
  faqs: [
    {
      question: { en: "How do I write a good essay?", hi: "मैं एक अच्छा निबंध कैसे लिखूं?" },
      answer: {
        en: "A good essay has a clear introduction with thesis statement, well-structured body paragraphs with supporting evidence, and a strong conclusion. Plan your essay, use proper grammar, and revise before submitting.",
        hi: "एक अच्छे निबंध में थीसिस कथन के साथ स्पष्ट परिचय, सहायक साक्ष्य के साथ अच्छी तरह से संरचित मुख्य पैराग्राफ और एक मजबूत निष्कर्ष होता है।",
      },
    },
    {
      question: { en: "What is the difference between 100 and 500 word essays?", hi: "100 और 500 शब्द निबंध में क्या अंतर है?" },
      answer: {
        en: "A 100-word essay is concise with one main idea and minimal details. A 500-word essay allows for deeper exploration, multiple supporting points, and more comprehensive discussion of the topic.",
        hi: "एक 100 शब्द का निबंध एक मुख्य विचार और न्यूनतम विवरण के साथ संक्षिप्त होता है। 500 शब्द का निबंध गहरी खोज, कई सहायक बिंदुओं की अनुमति देता है।",
      },
    },
    {
      question: { en: "How do I write an effective speech?", hi: "मैं एक प्रभावी भाषण कैसे लिखूं?" },
      answer: {
        en: "Start with a strong opening, organize your points logically, use examples and stories, include rhetorical questions, and end with a memorable conclusion. Practice delivery for best results.",
        hi: "एक मजबूत शुरुआत के साथ शुरू करें, अपने बिंदुओं को तार्किक रूप से व्यवस्थित करें, उदाहरण और कहानियां उपयोग करें, और एक यादगार निष्कर्ष के साथ समाप्त करें।",
      },
    },
    {
      question: { en: "Can I use these essays for my school assignments?", hi: "क्या मैं अपने स्कूल असाइनमेंट के लिए इन निबंधों का उपयोग कर सकता हूं?" },
      answer: {
        en: "Yes, but use them as reference and learning tools. Customize the content with your own ideas and words rather than copying directly. These templates are meant to guide your writing.",
        hi: "हां, लेकिन इन्हें संदर्भ और सीखने के उपकरण के रूप में उपयोग करें। सीधे कॉपी करने के बजाय अपने विचारों और शब्दों के साथ सामग्री को अनुकूलित करें।",
      },
    },
    {
      question: { en: "What makes a good paragraph?", hi: "एक अच्छा पैराग्राफ क्या बनाता है?" },
      answer: {
        en: "A good paragraph has a topic sentence, supporting details, examples or evidence, and a concluding sentence. It should focus on one main idea and flow logically from sentence to sentence.",
        hi: "एक अच्छे पैराग्राफ में एक विषय वाक्य, सहायक विवरण, उदाहरण या साक्ष्य और एक समापन वाक्य होता है।",
      },
    },
  ],
  seoKeywords: [
    "essay templates",
    "paragraph writing",
    "speech writing",
    "100 words essay",
    "500 words essay",
    "moral stories",
    "student essays",
  ],
};
