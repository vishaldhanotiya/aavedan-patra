import {
  FileSignature,
  ClipboardCheck,
  Mail,
  AlertCircle,
  Building2,
  Users,
  Target,
  Calendar,
  Settings,
  FileText,
  Award,
} from "lucide-react";
import { CategoryData } from "./applicationsCategory";


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
  icon: 'ClipboardCheck',
  subcategories: [
    {
      icon: 'AlertCircle',
      title: { en: "School Notices", hi: "स्कूल नोटिस" },
      description: { en: "Notice formats for schools and colleges", hi: "स्कूल और कॉलेज के लिए नोटिस प्रारूप" },
      count: 26,
      slug: "school",
    },
    {
      icon: 'Building2',
      title: { en: "Office Notices", hi: "कार्यालय नोटिस" },
      description: { en: "Official workplace notice templates", hi: "आधिकारिक कार्यस्थल नोटिस टेम्पलेट" },
      count: 23,
      slug: "office",
    },
    {
      icon: 'Users',
      title: { en: "Meeting Reports", hi: "बैठक रिपोर्ट" },
      description: { en: "Meeting minutes and report formats", hi: "बैठक मिनट और रिपोर्ट प्रारूप" },
      count: 19,
      slug: "meetings",
    },
    {
      icon: 'Target',
      title: { en: "Project Reports", hi: "परियोजना रिपोर्ट" },
      description: { en: "Project status and completion reports", hi: "परियोजना स्थिति और पूर्णता रिपोर्ट" },
      count: 22,
      slug: "projects",
    },
    {
      icon: 'Calendar',
      title: { en: "Event Notices", hi: "कार्यक्रम नोटिस" },
      description: { en: "Event announcements and invitations", hi: "कार्यक्रम घोषणाएं और निमंत्रण" },
      count: 20,
      slug: "events",
    },
    {
      icon: 'Settings',
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
      icon: 'Mail',
      title: { en: "Letter Templates", hi: "पत्र टेम्पलेट" },
      description: { en: "Formal and informal letters", hi: "औपचारिक और अनौपचारिक पत्र" },
      count: 156,
      slug: "letters",
    },
    {
      icon: 'FileText',
      title: { en: "Applications", hi: "आवेदन" },
      description: { en: "Job and leave applications", hi: "नौकरी और छुट्टी आवेदन" },
      count: 189,
      slug: "applications",
    },
    {
      icon: 'Award',
      title: { en: "Certificates", hi: "प्रमाणपत्र" },
      description: { en: "Official certificate formats", hi: "आधिकारिक प्रमाणपत्र प्रारूप" },
      count: 89,
      slug: "certificates",
    },
    {
      icon: 'FileSignature',
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
      thumbnail: 'ClipboardCheck',
      slug: "office-notice-writing-guide",
    },
    {
      title: { en: "Meeting Minutes: Complete Guide", hi: "बैठक मिनट: पूर्ण गाइड" },
      excerpt: {
        en: "Learn how to document meeting discussions, decisions, and action items effectively",
        hi: "बैठक चर्चाओं, निर्णयों और कार्य वस्तुओं को प्रभावी ढंग से दस्तावेज करना सीखें",
      },
      readTime: "6 min read",
      thumbnail: 'Users',
      slug: "meeting-minutes-guide",
    },
    {
      title: { en: "Project Report Writing Tips", hi: "परियोजना रिपोर्ट लेखन टिप्स" },
      excerpt: {
        en: "Expert tips for creating comprehensive project status and completion reports",
        hi: "व्यापक परियोजना स्थिति और पूर्णता रिपोर्ट बनाने के लिए विशेषज्ञ सुझाव",
      },
      readTime: "7 min read",
      thumbnail: 'Target',
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
