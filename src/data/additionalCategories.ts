import {
  FileSpreadsheet,
  BookOpen,
  FileSignature,
  ClipboardCheck,
  Briefcase,
  GraduationCap,
  Mail,
  Star,
  TrendingUp,
  Zap,
  AlertCircle,
  Building2,
  Users,
  Target,
  Calendar,
  Settings,
  FileText,
  MessageSquare,
  Heart,
  Home,
  Shield,
  Award,
} from "lucide-react";
import type { CategoryData } from "./categoryData";

// ===========================
// RESUMES & COVER LETTERS CATEGORY
// ===========================
export const resumesCategory: CategoryData = {
  slug: "resumes",
  name: {
    en: "Resume & Cover Letter Templates",
    hi: "रिज्यूमे और कवर लेटर टेम्पलेट",
  },
  description: {
    en: "Professional resume, CV, and cover letter templates for all industries. Download editable formats to create impressive job applications that get noticed.",
    hi: "सभी उद्योगों के लिए पेशेवर रिज्यूमे, सीवी और कवर लेटर टेम्पलेट। प्रभावशाली नौकरी आवेदन बनाने के लिए संपादन योग्य प्रारूप डाउनलोड करें।",
  },
  breadcrumbs: [
    { en: "Resumes & Cover Letters", hi: "रिज्यूमे और कवर लेटर" },
  ],
  icon: FileSpreadsheet,
  subcategories: [
    {
      icon: Briefcase,
      title: { en: "Professional Resumes", hi: "पेशेवर रिज्यूमे" },
      description: { en: "Modern resume templates for professionals", hi: "पेशेवरों के लिए आधुनिक रिज्यूमे टेम्पलेट" },
      count: 34,
      slug: "professional",
    },
    {
      icon: GraduationCap,
      title: { en: "Fresher Resumes", hi: "फ्रेशर रिज्यूमे" },
      description: { en: "Entry-level resume formats", hi: "एंट्री-लेवल रिज्यूमे प्रारूप" },
      count: 28,
      slug: "fresher",
    },
    {
      icon: Mail,
      title: { en: "Cover Letters", hi: "कवर लेटर" },
      description: { en: "Job application cover letter templates", hi: "नौकरी आवेदन कवर लेटर टेम्पलेट" },
      count: 25,
      slug: "cover-letters",
    },
    {
      icon: Star,
      title: { en: "Executive Resumes", hi: "कार्यकारी रिज्यूमे" },
      description: { en: "Senior-level and executive CV formats", hi: "वरिष्ठ स्तर और कार्यकारी सीवी प्रारूप" },
      count: 22,
      slug: "executive",
    },
    {
      icon: TrendingUp,
      title: { en: "Industry-Specific", hi: "उद्योग-विशिष्ट" },
      description: { en: "Tailored resumes for specific industries", hi: "विशिष्ट उद्योगों के लिए अनुकूलित रिज्यूमे" },
      count: 31,
      slug: "industry",
    },
    {
      icon: Zap,
      title: { en: "ATS-Friendly", hi: "ATS-अनुकूल" },
      description: { en: "Applicant tracking system optimized", hi: "आवेदक ट्रैकिंग सिस्टम अनुकूलित" },
      count: 27,
      slug: "ats",
    },
  ],
  templates: [
    {
      title: { en: "Professional Resume Template", hi: "पेशेवर रिज्यूमे टेम्पलेट" },
      description: {
        en: "Clean and modern professional resume format with experience and skills sections",
        hi: "अनुभव और कौशल अनुभागों के साथ स्वच्छ और आधुनिक पेशेवर रिज्यूमे प्रारूप",
      },
      views: "35.2k",
      date: "Nov 2025",
      tag: "Popular",
    },
    {
      title: { en: "Fresher Resume Format", hi: "फ्रेशर रिज्यूमे प्रारूप" },
      description: {
        en: "Entry-level resume template highlighting education and projects",
        hi: "शिक्षा और परियोजनाओं को उजागर करने वाला एंट्री-लेवल रिज्यूमे टेम्पलेट",
      },
      views: "31.8k",
      date: "Nov 2025",
    },
    {
      title: { en: "Cover Letter for Job Application", hi: "नौकरी आवेदन के लिए कवर लेटर" },
      description: {
        en: "Professional cover letter format to accompany your resume",
        hi: "अपने रिज्यूमे के साथ पेशेवर कवर लेटर प्रारूप",
      },
      views: "29.5k",
      date: "Nov 2025",
      tag: "Trending",
    },
    {
      title: { en: "Executive Resume Template", hi: "कार्यकारी रिज्यूमे टेम्पलेट" },
      description: {
        en: "Senior-level resume with leadership achievements and strategic impact",
        hi: "नेतृत्व उपलब्धियों और रणनीतिक प्रभाव के साथ वरिष्ठ स्तर रिज्यूमे",
      },
      views: "26.4k",
      date: "Nov 2025",
    },
    {
      title: { en: "ATS-Optimized Resume", hi: "ATS-अनुकूलित रिज्यूमे" },
      description: {
        en: "Applicant tracking system friendly resume format with keywords",
        hi: "कीवर्ड के साथ आवेदक ट्रैकिंग सिस्टम अनुकूल रिज्यूमे प्रारूप",
      },
      views: "24.7k",
      date: "Nov 2025",
    },
    {
      title: { en: "Software Engineer Resume", hi: "सॉफ्टवेयर इंजीनियर रिज्यूमे" },
      description: {
        en: "Technical resume template for software developers and engineers",
        hi: "सॉफ्टवेयर डेवलपर्स और इंजीनियरों के लिए तकनीकी रिज्यूमे टेम्पलेट",
      },
      views: "23.1k",
      date: "Oct 2025",
    },
  ],
  aboutContent: {
    en: "Resume and cover letter templates are essential tools for job seekers across all industries and experience levels. Our professionally designed collection includes modern resume formats for experienced professionals, entry-level templates for freshers, compelling cover letters, executive CVs for senior positions, industry-specific formats, and ATS-optimized templates that pass applicant tracking systems. Each template is carefully crafted to highlight your skills, experience, and achievements while maintaining professional formatting standards that recruiters expect.",
    hi: "रिज्यूमे और कवर लेटर टेम्पलेट सभी उद्योगों और अनुभव स्तरों में नौकरी चाहने वालों के लिए आवश्यक उपकरण हैं। हमारे पेशेवर रूप से डिज़ाइन किए गए संग्रह में अनुभवी पेशेवरों के लिए आधुनिक रिज्यूमे प्रारूप, फ्रेशर्स के लिए एंट्री-लेवल टेम्पलेट, सम्मोहक कवर लेटर, वरिष्ठ पदों के लिए कार्यकारी सीवी, उद्योग-विशिष्ट प्रारूप और ATS-अनुकूलित टेम्पलेट शामिल हैं।",
  },
  relatedCategories: [
    {
      icon: FileText,
      title: { en: "Application Templates", hi: "आवेदन टेम्पलेट" },
      description: { en: "Job and leave applications", hi: "नौकरी और छुट्टी आवेदन" },
      count: 189,
      slug: "applications",
    },
    {
      icon: Award,
      title: { en: "Certificates", hi: "प्रमाणपत्र" },
      description: { en: "Experience and bonafide certificates", hi: "अनुभव और बोनाफाइड प्रमाणपत्र" },
      count: 89,
      slug: "certificates",
    },
    {
      icon: Mail,
      title: { en: "Letters", hi: "पत्र" },
      description: { en: "Formal and informal letters", hi: "औपचारिक और अनौपचारिक पत्र" },
      count: 156,
      slug: "letters",
    },
    {
      icon: BookOpen,
      title: { en: "Essays & Paragraphs", hi: "निबंध और पैराग्राफ" },
      description: { en: "Essay writing templates", hi: "निबंध लेखन टेम्पलेट" },
      count: 124,
      slug: "essays",
    },
  ],
  blogs: [
    {
      title: { en: "How to Write a Professional Resume in 2025", hi: "2025 में पेशेवर रिज्यूमे कैसे लिखें" },
      excerpt: {
        en: "Complete guide to creating modern resumes that get past ATS and impress recruiters",
        hi: "आधुनिक रिज्यूमे बनाने के लिए पूर्ण गाइड जो ATS को पास करते हैं और भर्तीकर्ताओं को प्रभावित करते हैं",
      },
      readTime: "8 min read",
      thumbnail: FileSpreadsheet,
      slug: "professional-resume-guide-2025",
    },
    {
      title: { en: "Cover Letter Writing Tips That Get Results", hi: "कवर लेटर लेखन टिप्स जो परिणाम देते हैं" },
      excerpt: {
        en: "Expert advice on crafting compelling cover letters that complement your resume",
        hi: "सम्मोहक कवर लेटर तैयार करने पर विशेषज्ञ सलाह जो आपके रिज्यूमे को पूरक बनाते हैं",
      },
      readTime: "6 min read",
      thumbnail: Mail,
      slug: "cover-letter-tips",
    },
    {
      title: { en: "ATS Resume Optimization Guide", hi: "ATS रिज्यूमे अनुकूलन गाइड" },
      excerpt: {
        en: "Learn how to optimize your resume for applicant tracking systems and increase callbacks",
        hi: "जानें कि आवेदक ट्रैकिंग सिस्टम के लिए अपने रिज्यूमे को कैसे अनुकूलित करें",
      },
      readTime: "7 min read",
      thumbnail: Zap,
      slug: "ats-optimization-guide",
    },
  ],
  faqs: [
    {
      question: { en: "What should I include in my resume?", hi: "मुझे अपने रिज्यूमे में क्या शामिल करना चाहिए?" },
      answer: {
        en: "A professional resume should include contact information, professional summary, work experience, education, skills, and relevant achievements. Tailor each section to the job you're applying for and use action verbs to describe your accomplishments.",
        hi: "एक पेशेवर रिज्यूमे में संपर्क जानकारी, पेशेवर सारांश, कार्य अनुभव, शिक्षा, कौशल और प्रासंगिक उपलब्धियां शामिल होनी चाहिए।",
      },
    },
    {
      question: { en: "How long should my resume be?", hi: "मेरा रिज्यूमे कितना लंबा होना चाहिए?" },
      answer: {
        en: "For most professionals, a one-page resume is ideal. However, if you have 10+ years of experience or extensive relevant achievements, a two-page resume is acceptable. Focus on quality over quantity and include only relevant information.",
        hi: "अधिकांश पेशेवरों के लिए, एक पेज का रिज्यूमे आदर्श है। हालांकि, यदि आपके पास 10+ वर्षों का अनुभव है, तो दो पेज का रिज्यूमे स्वीकार्य है।",
      },
    },
    {
      question: { en: "Do I need a cover letter?", hi: "क्या मुझे कवर लेटर की आवश्यकता है?" },
      answer: {
        en: "Yes, a cover letter is highly recommended. It allows you to explain why you're a great fit for the position, highlight specific achievements, and show your personality. Even when optional, a well-written cover letter can set you apart from other candidates.",
        hi: "हां, कवर लेटर अत्यधिक अनुशंसित है। यह आपको यह समझाने की अनुमति देता है कि आप पद के लिए एक महान फिट क्यों हैं।",
      },
    },
    {
      question: { en: "What is an ATS-friendly resume?", hi: "ATS-अनुकूल रिज्यूमे क्या है?" },
      answer: {
        en: "An ATS (Applicant Tracking System) friendly resume uses simple formatting, standard fonts, and relevant keywords that can be easily read by automated systems. Avoid tables, graphics, and unusual formatting that might confuse the ATS.",
        hi: "एक ATS अनुकूल रिज्यूमे सरल स्वरूपण, मानक फ़ॉन्ट और प्रासंगिक कीवर्ड का उपयोग करता है जिसे स्वचालित सिस्टम द्वारा आसानी से पढ़ा जा सकता है।",
      },
    },
    {
      question: { en: "Can I use these templates for free?", hi: "क्या मैं इन टेम्पलेट का मुफ्त में उपयोग कर सकता हूं?" },
      answer: {
        en: "Yes, all our resume and cover letter templates are completely free to download and use. You can customize them with your information and use them for your job applications without any restrictions.",
        hi: "हां, हमारे सभी रिज्यूमे और कवर लेटर टेम्पलेट डाउनलोड और उपयोग के लिए पूरी तरह से मुफ्त हैं।",
      },
    },
  ],
  seoKeywords: [
    "resume templates",
    "cv format",
    "cover letter templates",
    "professional resume",
    "fresher resume",
    "ATS resume",
    "job application resume",
  ],
};

// ===========================
// NOTICES & REPORTS CATEGORY
// ===========================
export const noticesCategory: CategoryData = {
  slug: "notices",
  name: {
    en: "Notice & Report Templates",
    hi: "नोटिस और रिपोर्ट टेम्पलेट",
  },
  description: {
    en: "Official notice and report templates for schools, offices, and organizations. Download professional formats for announcements, meeting reports, and official communications.",
    hi: "स्कूलों, कार्यालयों और संगठनों के लिए आधिकारिक नोटिस और रिपोर्ट टेम्पलेट। घोषणाओं, बैठक रिपोर्ट और आधिकारिक संचार के लिए पेशेवर प्रारूप डाउनलोड करें।",
  },
  breadcrumbs: [
    { en: "Notices & Reports", hi: "नोटिस और रिपोर्ट" },
  ],
  icon: ClipboardCheck,
  subcategories: [
    {
      icon: AlertCircle,
      title: { en: "School Notices", hi: "स्कूल नोटिस" },
      description: { en: "Notice formats for schools and colleges", hi: "स्कूल और कॉलेज के लिए नोटिस प्रारूप" },
      count: 26,
      slug: "school",
    },
    {
      icon: Building2,
      title: { en: "Office Notices", hi: "कार्यालय नोटिस" },
      description: { en: "Official workplace notice templates", hi: "आधिकारिक कार्यस्थल नोटिस टेम्पलेट" },
      count: 23,
      slug: "office",
    },
    {
      icon: Users,
      title: { en: "Meeting Reports", hi: "बैठक रिपोर्ट" },
      description: { en: "Meeting minutes and report formats", hi: "बैठक मिनट और रिपोर्ट प्रारूप" },
      count: 19,
      slug: "meetings",
    },
    {
      icon: Target,
      title: { en: "Project Reports", hi: "परियोजना रिपोर्ट" },
      description: { en: "Project status and completion reports", hi: "परियोजना स्थिति और पूर्णता रिपोर्ट" },
      count: 22,
      slug: "projects",
    },
    {
      icon: Calendar,
      title: { en: "Event Notices", hi: "कार्यक्रम नोटिस" },
      description: { en: "Event announcements and invitations", hi: "कार्यक्रम घोषणाएं और निमंत्रण" },
      count: 20,
      slug: "events",
    },
    {
      icon: Settings,
      title: { en: "Policy Notices", hi: "नीति नोटिस" },
      description: { en: "Policy changes and updates", hi: "नीति परिवर्तन और अपडेट" },
      count: 18,
      slug: "policy",
    },
  ],
  templates: [
    {
      title: { en: "School Notice for Parents", hi: "अभिभावकों के लिए स्कूल नोटिस" },
      description: {
        en: "Official notice template for parent-teacher meetings and school events",
        hi: "अभिभावक-शिक्षक बैठकों और स्कूल कार्यक्रमों के लिए आधिकारिक नोटिस टेम्पलेट",
      },
      views: "27.3k",
      date: "Nov 2025",
      tag: "Popular",
    },
    {
      title: { en: "Office Circular Notice", hi: "कार्यालय परिपत्र नोटिस" },
      description: {
        en: "Professional format for office announcements and policy updates",
        hi: "कार्यालय घोषणाओं और नीति अपडेट के लिए पेशेवर प्रारूप",
      },
      views: "24.8k",
      date: "Nov 2025",
    },
    {
      title: { en: "Meeting Minutes Report", hi: "बैठक मिनट रिपोर्ट" },
      description: {
        en: "Formal template for documenting meeting discussions and decisions",
        hi: "बैठक चर्चाओं और निर्णयों को दस्तावेज करने के लिए औपचारिक टेम्पलेट",
      },
      views: "22.5k",
      date: "Nov 2025",
      tag: "Trending",
    },
    {
      title: { en: "Project Completion Report", hi: "परियोजना पूर्णता रिपोर्ट" },
      description: {
        en: "Comprehensive format for project status and final reports",
        hi: "परियोजना स्थिति और अंतिम रिपोर्ट के लिए व्यापक प्रारूप",
      },
      views: "20.1k",
      date: "Nov 2025",
    },
    {
      title: { en: "Event Announcement Notice", hi: "कार्यक्रम घोषणा नोटिस" },
      description: {
        en: "Notice template for announcing upcoming events and programs",
        hi: "आगामी कार्यक्रमों और कार्यक्रमों की घोषणा के लिए नोटिस टेम्पलेट",
      },
      views: "18.7k",
      date: "Nov 2025",
    },
    {
      title: { en: "Holiday Notice Format", hi: "छुट्टी नोटिस प्रारूप" },
      description: {
        en: "Official template for announcing holidays and closures",
        hi: "छुट्टियों और बंद होने की घोषणा के लिए आधिकारिक टेम्पलेट",
      },
      views: "17.4k",
      date: "Oct 2025",
    },
  ],
  aboutContent: {
    en: "Notice and report templates are essential communication tools for schools, offices, and organizations. Our collection includes professional formats for school notices to parents, office circular announcements, meeting minutes, project reports, event notices, and policy updates. Each template follows official formatting standards and includes all necessary sections for clear, effective communication. Whether you're announcing events, documenting meetings, or sharing important updates, our templates ensure professional presentation.",
    hi: "नोटिस और रिपोर्ट टेम्पलेट स्कूलों, कार्यालयों और संगठनों के लिए आवश्यक संचार उपकरण हैं। हमारे संग्रह में अभिभावकों के लिए स्कूल नोटिस, कार्यालय परिपत्र घोषणाएं, बैठक मिनट, परियोजना रिपोर्ट, कार्यक्रम नोटिस और नीति अपडेट के लिए पेशेवर प्रारूप शामिल हैं।",
  },
  relatedCategories: [
    {
      icon: Mail,
      title: { en: "Letter Templates", hi: "पत्र टेम्पलेट" },
      description: { en: "Formal and informal letters", hi: "औपचारिक और अनौपचारिक पत्र" },
      count: 156,
      slug: "letters",
    },
    {
      icon: FileText,
      title: { en: "Applications", hi: "आवेदन" },
      description: { en: "Job and leave applications", hi: "नौकरी और छुट्टी आवेदन" },
      count: 189,
      slug: "applications",
    },
    {
      icon: Award,
      title: { en: "Certificates", hi: "प्रमाणपत्र" },
      description: { en: "Official certificate formats", hi: "आधिकारिक प्रमाणपत्र प्रारूप" },
      count: 89,
      slug: "certificates",
    },
    {
      icon: FileSignature,
      title: { en: "Agreements", hi: "समझौते" },
      description: { en: "Legal agreement templates", hi: "कानूनी समझौता टेम्पलेट" },
      count: 54,
      slug: "agreements",
    },
  ],
  blogs: [
    {
      title: { en: "How to Write an Effective Office Notice", hi: "प्रभावी कार्यालय नोटिस कैसे लिखें" },
      excerpt: {
        en: "Best practices for creating clear and professional office notices that get attention",
        hi: "स्पष्ट और पेशेवर कार्यालय नोटिस बनाने के लिए सर्वोत्तम प्रथाएं",
      },
      readTime: "5 min read",
      thumbnail: ClipboardCheck,
      slug: "office-notice-writing-guide",
    },
    {
      title: { en: "Meeting Minutes: Complete Guide", hi: "बैठक मिनट: पूर्ण गाइड" },
      excerpt: {
        en: "Learn how to document meeting discussions, decisions, and action items effectively",
        hi: "बैठक चर्चाओं, निर्णयों और कार्य वस्तुओं को प्रभावी ढंग से दस्तावेज करना सीखें",
      },
      readTime: "6 min read",
      thumbnail: Users,
      slug: "meeting-minutes-guide",
    },
    {
      title: { en: "Project Report Writing Tips", hi: "परियोजना रिपोर्ट लेखन टिप्स" },
      excerpt: {
        en: "Expert tips for creating comprehensive project status and completion reports",
        hi: "व्यापक परियोजना स्थिति और पूर्णता रिपोर्ट बनाने के लिए विशेषज्ञ सुझाव",
      },
      readTime: "7 min read",
      thumbnail: Target,
      slug: "project-report-tips",
    },
  ],
  faqs: [
    {
      question: { en: "What should be included in a school notice?", hi: "स्कूल नोटिस में क्या शामिल होना चाहिए?" },
      answer: {
        en: "A school notice should include the school letterhead, date, subject line, clear message body, relevant details (date, time, venue for events), and authorized signature. Keep it concise and use simple language.",
        hi: "एक स्कूल नोटिस में स्कूल लेटरहेड, तारीख, विषय पंक्ति, स्पष्ट संदेश निकाय, प्रासंगिक विवरण और अधिकृत हस्ताक्षर शामिल होने चाहिए।",
      },
    },
    {
      question: { en: "How do I write meeting minutes?", hi: "मैं बैठक मिनट कैसे लिखूं?" },
      answer: {
        en: "Meeting minutes should include date, time, attendees, agenda items, key discussions, decisions made, action items with assigned responsibilities, and next meeting date. Be objective and focus on decisions rather than detailed conversations.",
        hi: "बैठक मिनट में तारीख, समय, उपस्थित लोग, एजेंडा आइटम, मुख्य चर्चाएं, किए गए निर्णय, सौंपी गई जिम्मेदारियों के साथ कार्य आइटम शामिल होने चाहिए।",
      },
    },
    {
      question: { en: "What is the format for an office circular?", hi: "कार्यालय परिपत्र का प्रारूप क्या है?" },
      answer: {
        en: "An office circular should have company letterhead, circular number, date, subject, salutation, clear message explaining the announcement or policy, effective date, and authorized signature. Ensure wide distribution to all relevant employees.",
        hi: "एक कार्यालय परिपत्र में कंपनी लेटरहेड, परिपत्र संख्या, तारीख, विषय, अभिवादन, घोषणा या नीति की व्याख्या करने वाला स्पष्ट संदेश होना चाहिए।",
      },
    },
    {
      question: { en: "How long should a project report be?", hi: "परियोजना रिपोर्ट कितनी लंबी होनी चाहिए?" },
      answer: {
        en: "Project report length depends on complexity. A status report is typically 2-3 pages, while a final completion report might be 5-10 pages. Include executive summary, objectives, methodology, findings, and recommendations.",
        hi: "परियोजना रिपोर्ट की लंबाई जटिलता पर निर्भर करती है। स्थिति रिपोर्ट आमतौर पर 2-3 पेज होती है, जबकि अंतिम पूर्णता रिपोर्ट 5-10 पेज हो सकती है।",
      },
    },
    {
      question: { en: "Can I customize these notice templates?", hi: "क्या मैं इन नोटिस टेम्पलेट को अनुकूलित कर सकता हूं?" },
      answer: {
        en: "Yes, all our notice and report templates are fully editable. You can add your organization's letterhead, modify content, adjust formatting, and customize them according to your specific requirements.",
        hi: "हां, हमारे सभी नोटिस और रिपोर्ट टेम्पलेट पूरी तरह से संपादन योग्य हैं। आप अपने संगठन का लेटरहेड जोड़ सकते हैं, सामग्री संशोधित कर सकते हैं।",
      },
    },
  ],
  seoKeywords: [
    "notice format",
    "school notice",
    "office circular",
    "meeting minutes",
    "project report",
    "notice templates",
    "official notice format",
  ],
};

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

// ===========================
// AGREEMENTS & FORMS CATEGORY
// ===========================
export const agreementsCategory: CategoryData = {
  slug: "agreements",
  name: {
    en: "Agreement & Form Templates",
    hi: "समझौता और फॉर्म टेम्पलेट",
  },
  description: {
    en: "Legal agreement and form templates for rental, business, employment, and personal use. Download professional formats that are ready to customize and print.",
    hi: "किराया, व्यवसाय, रोजगार और व्यक्तिगत उपयोग के लिए कानूनी समझौता और फॉर्म टेम्पलेट। अनुकूलित और प्रिंट करने के लिए तैयार पेशेवर प्रारूप डाउनलोड करें।",
  },
  breadcrumbs: [
    { en: "Agreements & Forms", hi: "समझौते और फॉर्म" },
  ],
  icon: FileSignature,
  subcategories: [
    {
      icon: Home,
      title: { en: "Rental Agreements", hi: "किराया समझौते" },
      description: { en: "House and property rental contracts", hi: "घर और संपत्ति किराया अनुबंध" },
      count: 18,
      slug: "rental",
    },
    {
      icon: Briefcase,
      title: { en: "Business Agreements", hi: "व्यापार समझौते" },
      description: { en: "Partnership and vendor agreements", hi: "साझेदारी और विक्रेता समझौते" },
      count: 22,
      slug: "business",
    },
    {
      icon: Users,
      title: { en: "Employment Contracts", hi: "रोजगार अनुबंध" },
      description: { en: "Employee agreement templates", hi: "कर्मचारी समझौता टेम्पलेट" },
      count: 16,
      slug: "employment",
    },
    {
      icon: Heart,
      title: { en: "Personal Agreements", hi: "व्यक्तिगत समझौते" },
      description: { en: "Loan and personal contracts", hi: "ऋण और व्यक्तिगत अनुबंध" },
      count: 14,
      slug: "personal",
    },
    {
      icon: Shield,
      title: { en: "Legal Forms", hi: "कानूनी फॉर्म" },
      description: { en: "Affidavit and declaration forms", hi: "शपथ पत्र और घोषणा फॉर्म" },
      count: 19,
      slug: "legal",
    },
    {
      icon: FileText,
      title: { en: "Application Forms", hi: "आवेदन फॉर्म" },
      description: { en: "Various application form templates", hi: "विभिन्न आवेदन फॉर्म टेम्पलेट" },
      count: 21,
      slug: "forms",
    },
  ],
  templates: [
    {
      title: { en: "House Rental Agreement", hi: "घर किराया समझौता" },
      description: {
        en: "Comprehensive rental agreement for residential property with all legal clauses",
        hi: "सभी कानूनी खंडों के साथ आवासीय संपत्ति के लिए व्यापक किराया समझौता",
      },
      views: "38.5k",
      date: "Nov 2025",
      tag: "Popular",
    },
    {
      title: { en: "Partnership Agreement Format", hi: "साझेदारी समझौता प्रारूप" },
      description: {
        en: "Business partnership contract with profit sharing and responsibilities",
        hi: "लाभ साझाकरण और जिम्मेदारियों के साथ व्यापार साझेदारी अनुबंध",
      },
      views: "34.2k",
      date: "Nov 2025",
    },
    {
      title: { en: "Employment Contract Template", hi: "रोजगार अनुबंध टेम्पलेट" },
      description: {
        en: "Professional employment agreement with terms, salary, and conditions",
        hi: "शर्तों, वेतन और स्थितियों के साथ पेशेवर रोजगार समझौता",
      },
      views: "31.7k",
      date: "Nov 2025",
      tag: "Trending",
    },
    {
      title: { en: "Personal Loan Agreement", hi: "व्यक्तिगत ऋण समझौता" },
      description: {
        en: "Loan agreement between individuals with repayment terms",
        hi: "पुनर्भुगतान शर्तों के साथ व्यक्तियों के बीच ऋण समझौता",
      },
      views: "28.9k",
      date: "Nov 2025",
    },
    {
      title: { en: "Affidavit Format", hi: "शपथ पत्र प्रारूप" },
      description: {
        en: "General affidavit template for legal declarations and statements",
        hi: "कानूनी घोषणाओं और बयानों के लिए सामान्य शपथ पत्र टेम्पलेट",
      },
      views: "26.3k",
      date: "Nov 2025",
    },
    {
      title: { en: "Vendor Agreement Template", hi: "विक्रेता समझौता टेम्पलेट" },
      description: {
        en: "Business vendor contract with terms of service and payment",
        hi: "सेवा और भुगतान की शर्तों के साथ व्यापार विक्रेता अनुबंध",
      },
      views: "24.1k",
      date: "Oct 2025",
    },
  ],
  aboutContent: {
    en: "Agreement and form templates provide legally sound formats for various personal and business needs. Our collection includes rental agreements for property leasing, business agreements for partnerships and vendors, employment contracts for hiring, personal agreements for loans and commitments, legal forms like affidavits and declarations, and various application forms. Each template includes essential clauses and terms to protect all parties involved. While our templates follow standard formats, we recommend consulting legal professionals for specific situations.",
    hi: "समझौता और फॉर्म टेम्पलेट विभिन्न व्यक्तिगत और व्यावसायिक आवश्यकताओं के लिए कानूनी रूप से सही प्रारूप प्रदान करते हैं। हमारे संग्रह में संपत्ति पट्टे के लिए किराया समझौते, साझेदारी और विक्रेताओं के लिए व्यापार समझौते, भर्ती के लिए रोजगार अनुबंध, ऋण और प्रतिबद्धताओं के लिए व्यक्तिगत समझौते शामिल हैं।",
  },
  relatedCategories: [
    {
      icon: FileText,
      title: { en: "Applications", hi: "आवेदन" },
      description: { en: "Various application formats", hi: "विभिन्न आवेदन प्रारूप" },
      count: 189,
      slug: "applications",
    },
    {
      icon: Mail,
      title: { en: "Letters", hi: "पत्र" },
      description: { en: "Formal and business letters", hi: "औपचारिक और व्यावसायिक पत्र" },
      count: 156,
      slug: "letters",
    },
    {
      icon: ClipboardCheck,
      title: { en: "Notices & Reports", hi: "नोटिस और रिपोर्ट" },
      description: { en: "Official notice formats", hi: "आधिकारिक नोटिस प्रारूप" },
      count: 128,
      slug: "notices",
    },
    {
      icon: Award,
      title: { en: "Certificates", hi: "प्रमाणपत्र" },
      description: { en: "Professional certificates", hi: "पेशेवर प्रमाणपत्र" },
      count: 89,
      slug: "certificates",
    },
  ],
  blogs: [
    {
      title: { en: "Essential Clauses in Rental Agreements", hi: "किराया समझौतों में आवश्यक खंड" },
      excerpt: {
        en: "Learn about important clauses to include in rental agreements for protection",
        hi: "सुरक्षा के लिए किराया समझौतों में शामिल करने के लिए महत्वपूर्ण खंडों के बारे में जानें",
      },
      readTime: "7 min read",
      thumbnail: Home,
      slug: "rental-agreement-clauses",
    },
    {
      title: { en: "Business Partnership Agreement Guide", hi: "व्यापार साझेदारी समझौता गाइड" },
      excerpt: {
        en: "Complete guide to drafting partnership agreements with profit sharing terms",
        hi: "लाभ साझाकरण शर्तों के साथ साझेदारी समझौते तैयार करने के लिए पूर्ण गाइड",
      },
      readTime: "8 min read",
      thumbnail: Briefcase,
      slug: "partnership-agreement-guide",
    },
    {
      title: { en: "Understanding Employment Contracts", hi: "रोजगार अनुबंध को समझना" },
      excerpt: {
        en: "Key elements of employment contracts and what to look for before signing",
        hi: "रोजगार अनुबंधों के मुख्य तत्व और हस्ताक्षर करने से पहले क्या देखना है",
      },
      readTime: "6 min read",
      thumbnail: Users,
      slug: "employment-contract-guide",
    },
  ],
  faqs: [
    {
      question: { en: "Are these agreement templates legally valid?", hi: "क्या ये समझौता टेम्पलेट कानूनी रूप से मान्य हैं?" },
      answer: {
        en: "Our templates follow standard legal formats, but laws vary by location. We recommend having important agreements reviewed by a legal professional before signing. These templates serve as a starting point for creating legally sound documents.",
        hi: "हमारे टेम्पलेट मानक कानूनी प्रारूपों का पालन करते हैं, लेकिन कानून स्थान के अनुसार भिन्न होते हैं। हम अनुशंसा करते हैं कि हस्ताक्षर करने से पहले महत्वपूर्ण समझौतों की समीक्षा कानूनी पेशेवर द्वारा की जाए।",
      },
    },
    {
      question: { en: "What should be included in a rental agreement?", hi: "किराया समझौते में क्या शामिल होना चाहिए?" },
      answer: {
        en: "A rental agreement should include property details, rent amount and payment terms, security deposit, duration of tenancy, maintenance responsibilities, terms for termination, and signatures of both landlord and tenant with witnesses.",
        hi: "किराया समझौते में संपत्ति विवरण, किराया राशि और भुगतान शर्तें, सुरक्षा जमा, किरायेदारी की अवधि, रखरखाव जिम्मेदारियां शामिल होनी चाहिए।",
      },
    },
    {
      question: { en: "How do I customize these templates?", hi: "मैं इन टेम्पलेट को कैसे अनुकूलित करूं?" },
      answer: {
        en: "Download the template, fill in the specific details (names, dates, amounts, terms), review all clauses carefully, make any necessary modifications, and have all parties review before signing. Consider legal consultation for important agreements.",
        hi: "टेम्पलेट डाउनलोड करें, विशिष्ट विवरण भरें, सभी खंडों की सावधानीपूर्वक समीक्षा करें, आवश्यक संशोधन करें, और हस्ताक्षर करने से पहले सभी पक्षों से समीक्षा कराएं।",
      },
    },
    {
      question: { en: "Do I need witnesses for agreements?", hi: "क्या मुझे समझौतों के लिए गवाहों की आवश्यकता है?" },
      answer: {
        en: "While not always legally required, having witnesses strengthens the validity of agreements. Rental agreements, partnership agreements, and other important contracts typically benefit from witness signatures and in some cases, notarization.",
        hi: "हालांकि कानूनी रूप से हमेशा आवश्यक नहीं है, गवाहों का होना समझौतों की वैधता को मजबूत करता है।",
      },
    },
    {
      question: { en: "Can I use these for business purposes?", hi: "क्या मैं इन्हें व्यावसायिक उद्देश्यों के लिए उपयोग कर सकता हूं?" },
      answer: {
        en: "Yes, our business agreement templates are designed for commercial use. Customize them with your specific business terms, review with legal counsel if needed, and ensure all parties understand and agree to the terms before execution.",
        hi: "हां, हमारे व्यापार समझौता टेम्पलेट वाणिज्यिक उपयोग के लिए डिज़ाइन किए गए हैं। उन्हें अपनी विशिष्ट व्यावसायिक शर्तों के साथ अनुकूलित करें।",
      },
    },
  ],
  seoKeywords: [
    "rental agreement",
    "partnership agreement",
    "employment contract",
    "affidavit format",
    "business agreement",
    "legal forms",
    "agreement templates",
  ],
};
