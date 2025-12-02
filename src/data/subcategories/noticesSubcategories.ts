/**
 * ALL NOTICES SUBCATEGORIES (6 total)
 * Complete data for Notices category subcategories
 */

import { SubcategoryData } from "../category/jobCategory";


// 1. SCHOOL NOTICES
export const schoolNoticesData: SubcategoryData = {
  slug: "school",
  categorySlug: "notices",
  categoryName: { en: "Notices", hi: "नोटिस" },
  subcategoryName: { en: "School Notices", hi: "स्कूल नोटिस" },
  breadcrumb: [
    { en: "Notices", hi: "नोटिस", slug:"/letters" },
    { en: "School Notices", hi: "स्कूल नोटिस", slug:"/letters" },
  ],
  heroTitle: { en: "School Notice Templates", hi: "स्कूल नोटिस टेम्पलेट" },
  heroDescription: {
    en: "Professional school notice board formats for announcements, circulars, and communications - ready-to-use school notice templates.",
    hi: "घोषणाओं, परिपत्रों और संचार के लिए पेशेवर स्कूल नोटिस बोर्ड प्रारूप - उपयोग के लिए तैयार स्कूल नोटिस टेम्पलेट।",
  },
  searchPlaceholder: { en: "Search school notice templates…", hi: "स्कूल नोटिस टेम्पलेट खोजें..." },
  tags: ["School Announcement", "Exam Notice", "Holiday Notice", "Fee Notice", "Parent Circular", "Event Notice"],
  templates: [
    {
      id: "school-1",
      title: { en: "School Notice Board Format", hi: "स्कूल नोटिस बोर्ड प्रारूप" },
      description: { en: "Standard notice format for school announcements and updates.", hi: "स्कूल घोषणाओं और अपडेट के लिए मानक नोटिस प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "38.9k",
      badge: "Popular",
      templateSlug:'/'
    },
    {
      id: "school-2",
      title: { en: "Exam Notice Template", hi: "परीक्षा नोटिस टेम्पलेट" },
      description: { en: "Notice format for exam schedules, dates, and instructions.", hi: "परीक्षा कार्यक्रम, तिथियों और निर्देशों के लिए नोटिस प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "35.4k",
      badge: "Trending",
      templateSlug:'/'
    },
    {
      id: "school-3",
      title: { en: "Holiday Notice Format", hi: "छुट्टी नोटिस प्रारूप" },
      description: { en: "Notice template for school holidays and vacation announcements.", hi: "स्कूल की छुट्टियों और छुट्टियों की घोषणाओं के लिए नोटिस टेम्पलेट।" },
      lastUpdated: "Nov 2025",
      views: "32.7k",
      templateSlug:'/'
    },
    {
      id: "school-4",
      title: { en: "Fee Notice Template", hi: "शुल्क नोटिस टेम्पलेट" },
      description: { en: "Notice format for fee payment reminders and due dates.", hi: "शुल्क भुगतान अनुस्मारक और नियत तिथियों के लिए नोटिस प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "29.8k",
      templateSlug:'/'
    },
    {
      id: "school-5",
      title: { en: "Admission Notice", hi: "प्रवेश नोटिस" },
      description: { en: "Notice template for new admission announcements and dates.", hi: "नए प्रवेश घोषणाओं और तिथियों के लिए नोटिस टेम्पलेट।" },
      lastUpdated: "Oct 2025",
      views: "27.3k",
      templateSlug:'/'
    },
    {
      id: "school-6",
      title: { en: "School Event Notice", hi: "स्कूल कार्यक्रम नोटिस" },
      description: { en: "Notice format for school events, functions, and programs.", hi: "स्कूल कार्यक्रमों, समारोहों और कार्यक्रमों के लिए नोटिस प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "25.1k",
      templateSlug:'/'
    },
  ],
  seoTitle: { en: "About School Notice Templates", hi: "स्कूल नोटिस टेम्पलेट के बारे में" },
  seoDescription: {
    en: "School notices formally communicate important information to students, parents, and staff. Our templates include school notice board formats for general announcements, exam notice templates with schedules, holiday notice formats for vacation dates, fee notice templates for payment reminders, admission notices for enrollment, and event notices for school programs. Each template follows proper school letterhead format with clear, concise messaging for effective communication.",
    hi: "स्कूल नोटिस औपचारिक रूप से छात्रों, अभिभावकों और कर्मचारियों को महत्वपूर्ण जानकारी संप्रेषित करते हैं।",
  },
  relatedTemplates: [
    { title: { en: "Leave Application", hi: "छुट्टी आवेदन" }, category: { en: "Applications", hi: "आवेदन" }, slug: "leave" },
    { title: { en: "Bonafide Certificate", hi: "प्रामाणिक प्रमाणपत्र" }, category: { en: "Certificates", hi: "प्रमाणपत्र" }, slug: "bonafide" },
    { title: { en: "Formal Letter", hi: "औपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
    { title: { en: "School Essay", hi: "स्कूल निबंध" }, category: { en: "Essays", hi: "निबंध" }, slug: "100-words" },
  ],
  blogPosts: [
    { title: { en: "How to Write Effective School Notices", hi: "प्रभावी स्कूल नोटिस कैसे लिखें" }, excerpt: { en: "Best practices for clear school communication", hi: "स्पष्ट स्कूल संचार के लिए सर्वोत्तम प्रथाएं" }, readTime: "6 min read", slug: "effective-school-notices" },
    { title: { en: "School Notice Board Management", hi: "स्कूल नोटिस बोर्ड प्रबंधन" }, excerpt: { en: "Organizing and displaying school notices effectively", hi: "स्कूल नोटिस को प्रभावी ढंग से व्यवस्थित और प्रदर्शित करना" }, readTime: "5 min read", slug: "notice-board-management" },
    { title: { en: "Digital vs Physical School Notices", hi: "डिजिटल बनाम भौतिक स्कूल नोटिस" }, excerpt: { en: "Modern approaches to school communication", hi: "स्कूल संचार के लिए आधुनिक दृष्टिकोण" }, readTime: "7 min read", slug: "digital-school-notices" },
  ],
  faqs: [
    { question: { en: "What should a school notice include?", hi: "स्कूल नोटिस में क्या शामिल होना चाहिए?" }, answer: { en: "Include: School name and letterhead, notice number, date, subject/heading, clear message body, relevant details (dates, times, venues), action required, issuing authority's name and signature. Keep it concise and use simple language for easy understanding.", hi: "शामिल करें: स्कूल का नाम, नोटिस संख्या, तिथि, विषय, स्पष्ट संदेश, प्रासंगिक विवरण, आवश्यक कार्रवाई, हस्ताक्षर।" } },
    { question: { en: "How long should school notices be displayed?", hi: "स्कूल नोटिस कब तक प्रदर्शित होने चाहिए?" }, answer: { en: "Display notices for at least 7-10 days for routine announcements. Important notices (exams, holidays): 2-3 weeks. Urgent notices: highlight prominently. Remove outdated notices regularly to maintain board relevance.", hi: "नियमित घोषणाओं के लिए कम से कम 7-10 दिनों तक नोटिस प्रदर्शित करें। महत्वपूर्ण नोटिस: 2-3 सप्ताह। पुराने नोटिस नियमित रूप से हटाएं।" } },
    { question: { en: "Can school notices be sent digitally?", hi: "क्या स्कूल नोटिस डिजिटल रूप से भेजे जा सकते हैं?" }, answer: { en: "Yes! Use school apps, email, SMS, WhatsApp groups, and school websites for digital notices. Ensure all parents receive them. Keep physical notice boards for important announcements as backup. Digital notices offer instant delivery and confirmation.", hi: "हां! स्कूल ऐप्स, ईमेल, एसएमएस, व्हाट्सएप समूह और स्कूल वेबसाइटों का उपयोग करें। सभी अभिभावक प्राप्त करें सुनिश्चित करें।" } },
  ],
};

// 2. OFFICE NOTICES
export const officeNoticesData: SubcategoryData = {
  slug: "office",
  categorySlug: "notices",
  categoryName: { en: "Notices", hi: "नोटिस" },
  subcategoryName: { en: "Office Notices", hi: "कार्यालय नोटिस" },
  breadcrumb: [
    { en: "Notices", hi: "नोटिस", slug:"/letters" },
    { en: "Office Notices", hi: "कार्यालय नोटिस", slug:"/letters" },
  ],
  heroTitle: { en: "Office Notice Templates", hi: "कार्यालय नोटिस टेम्पलेट" },
  heroDescription: {
    en: "Professional office memo and notice formats for workplace communication - corporate announcement templates.",
    hi: "कार्यस्थल संचार के लिए पेशेवर कार्यालय ज्ञापन और नोटिस प्रारूप - कॉर्पोरेट घोषणा टेम्पलेट।",
  },
  searchPlaceholder: { en: "Search office notice templates…", hi: "कार्यालय नोटिस टेम्पलेट खोजें..." },
  tags: ["Office Memo", "Policy Update", "Meeting Notice", "Employee Notice", "Corporate Announcement", "Internal Communication"],
  templates: [
    {
      id: "office-1",
      title: { en: "Office Memo Format", hi: "कार्यालय ज्ञापन प्रारूप" },
      description: { en: "Standard memo format for internal office communication.", hi: "आंतरिक कार्यालय संचार के लिए मानक ज्ञापन प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "34.2k",
      badge: "Popular",
      templateSlug:'/'
    },
    {
      id: "office-2",
      title: { en: "Policy Update Notice", hi: "नीति अद्यतन नोटिस" },
      description: { en: "Notice template for company policy changes and updates.", hi: "कंपनी नीति परिवर्तन और अपडेट के लिए नोटिस टेम्पलेट।" },
      lastUpdated: "Nov 2025",
      views: "31.8k",
      badge: "Trending",
      templateSlug:'/'
    },
    {
      id: "office-3",
      title: { en: "Meeting Notice Format", hi: "बैठक नोटिस प्रारूप" },
      description: { en: "Notice format for official meetings and conferences.", hi: "आधिकारिक बैठकों और सम्मेलनों के लिए नोटिस प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "28.9k",
      templateSlug:'/'
    },
    {
      id: "office-4",
      title: { en: "Office Closure Notice", hi: "कार्यालय बंद नोटिस" },
      description: { en: "Notice template for office holidays and closures.", hi: "कार्यालय छुट्टियों और बंद करने के लिए नोटिस टेम्पलेट।" },
      lastUpdated: "Oct 2025",
      views: "26.4k",
      templateSlug:'/'
    },
    {
      id: "office-5",
      title: { en: "Employee Notice", hi: "कर्मचारी नोटिस" },
      description: { en: "Notice format for employee-related announcements.", hi: "कर्मचारी-संबंधित घोषणाओं के लिए नोटिस प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "24.1k",
      templateSlug:'/'
    },
    {
      id: "office-6",
      title: { en: "Department Notice", hi: "विभाग नोटिस" },
      description: { en: "Notice template for department-specific communications.", hi: "विभाग-विशिष्ट संचार के लिए नोटिस टेम्पलेट।" },
      lastUpdated: "Oct 2025",
      views: "22.7k",
      templateSlug:'/'
    },
  ],
  seoTitle: { en: "About Office Notice Templates", hi: "कार्यालय नोटिस टेम्पलेट के बारे में" },
  seoDescription: {
    en: "Office notices facilitate professional workplace communication and announcements. Our templates include office memo formats for internal updates, policy update notices for procedural changes, meeting notice formats with agendas, office closure notices for holidays, employee notices for HR communications, and department notices for team-specific updates. Each template maintains professional tone and clear formatting for effective corporate communication.",
    hi: "कार्यालय नोटिस पेशेवर कार्यस्थल संचार और घोषणाओं को सुविधाजनक बनाते हैं।",
  },
  relatedTemplates: [
    { title: { en: "Formal Letter", hi: "औपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
    { title: { en: "Meeting Report", hi: "बैठक रिपोर्ट" }, category: { en: "Notices", hi: "नोटिस" }, slug: "meeting" },
    { title: { en: "Resignation Letter", hi: "इस्तीफा पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "resignation" },
    { title: { en: "Employment Contract", hi: "रोजगार अनुबंध" }, category: { en: "Agreements", hi: "समझौते" }, slug: "employment" },
  ],
  blogPosts: [
    { title: { en: "Writing Effective Office Memos", hi: "प्रभावी कार्यालय ज्ञापन लिखना" }, excerpt: { en: "Best practices for professional memos", hi: "पेशेवर ज्ञापन के लिए सर्वोत्तम प्रथाएं" }, readTime: "6 min read", slug: "effective-office-memos" },
    { title: { en: "Internal Communication Strategies", hi: "आंतरिक संचार रणनीतियां" }, excerpt: { en: "Improving workplace communication", hi: "कार्यस्थल संचार में सुधार" }, readTime: "7 min read", slug: "internal-communication" },
    { title: { en: "Policy Change Communication", hi: "नीति परिवर्तन संचार" }, excerpt: { en: "Announcing policy updates effectively", hi: "नीति अपडेट को प्रभावी ढंग से घोषित करना" }, readTime: "5 min read", slug: "policy-communication" },
  ],
  faqs: [
    { question: { en: "What is an office memo?", hi: "कार्यालय ज्ञापन क्या है?" }, answer: { en: "An office memo (memorandum) is a written message used for internal communication within an organization. It's typically brief, formal, and used to convey policies, procedures, or important information to employees.", hi: "कार्यालय ज्ञापन एक संगठन के भीतर आंतरिक संचार के लिए उपयोग किया जाने वाला एक लिखित संदेश है।" } },
    { question: { en: "How to write a professional office notice?", hi: "पेशेवर कार्यालय नोटिस कैसे लिखें?" }, answer: { en: "Include: Company letterhead, notice title, date, recipient (To: All Employees/Department), subject, clear message, action required, effective date, issuing authority signature. Use professional language and proper formatting.", hi: "शामिल करें: कंपनी लेटरहेड, नोटिस शीर्षक, तिथि, प्राप्तकर्ता, विषय, स्पष्ट संदेश, आवश्यक कार्रवाई, हस्ताक्षर।" } },
    { question: { en: "What's the difference between notice and memo?", hi: "नोटिस और ज्ञापन में क्या अंतर है?" }, answer: { en: "Memos are for internal communication on routine matters and updates. Notices are more formal, used for official announcements, policy changes, or important information requiring acknowledgment. Both serve different communication purposes in organizations.", hi: "ज्ञापन नियमित मामलों पर आंतरिक संचार के लिए हैं। नोटिस अधिक औपचारिक हैं, आधिकारिक घोषणाओं के लिए उपयोग किए जाते हैं।" } },
  ],
};

// 3. MEETING REPORTS
export const meetingReportsData: SubcategoryData = {
  slug: "meeting",
  categorySlug: "notices",
  categoryName: { en: "Notices", hi: "नोटिस" },
  subcategoryName: { en: "Meeting Reports", hi: "बैठक रिपोर्ट" },
  breadcrumb: [
    { en: "Notices", hi: "नोटिस", slug:"/letters" },
    { en: "Meeting Reports", hi: "बैठक रिपोर्ट", slug:"/letters" },
  ],
  heroTitle: { en: "Meeting Report Templates", hi: "बैठक रिपोर्ट टेम्पलेट" },
  heroDescription: {
    en: "Professional meeting minutes and MOM formats - detailed meeting report templates with action items.",
    hi: "पेशेवर बैठक मिनट और MOM प्रारूप - कार्य वस्तुओं के साथ विस्तृत बैठक रिपोर्ट टेम्पलेट।",
  },
  searchPlaceholder: { en: "Search meeting report templates…", hi: "बैठक रिपोर्ट टेम्पलेट खोजें..." },
  tags: ["Meeting Minutes", "MOM", "Board Meeting", "Team Meeting", "Action Items", "Meeting Summary"],
  templates: [
    {
      id: "meeting-1",
      title: { en: "Meeting Minutes Format", hi: "बैठक मिनट प्रारूप" },
      description: { en: "Standard format for recording meeting discussions and decisions.", hi: "बैठक चर्चाओं और निर्णयों को रिकॉर्ड करने के लिए मानक प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "36.7k",
      badge: "Popular",
      templateSlug:'/'
    },
    {
      id: "meeting-2",
      title: { en: "Board Meeting Report", hi: "बोर्ड बैठक रिपोर्ट" },
      description: { en: "Formal report format for board meetings and AGM.", hi: "बोर्ड बैठकों और एजीएम के लिए औपचारिक रिपोर्ट प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "33.2k",
      badge: "Trending",
      templateSlug:'/'
    },
    {
      id: "meeting-3",
      title: { en: "Team Meeting Summary", hi: "टीम बैठक सारांश" },
      description: { en: "Summary template for team and department meetings.", hi: "टीम और विभाग बैठकों के लिए सारांश टेम्पलेट।" },
      lastUpdated: "Nov 2025",
      views: "30.4k",
      templateSlug:'/'
    },
    {
      id: "meeting-4",
      title: { en: "AGM Report Format", hi: "एजीएम रिपोर्ट प्रारूप" },
      description: { en: "Annual General Meeting report with resolutions.", hi: "प्रस्तावों के साथ वार्षिक आम बैठक रिपोर्ट।" },
      lastUpdated: "Oct 2025",
      views: "27.8k",
      templateSlug:'/'
    },
    {
      id: "meeting-5",
      title: { en: "Project Meeting Notes", hi: "परियोजना बैठक नोट्स" },
      description: { en: "Meeting notes template for project discussions.", hi: "परियोजना चर्चाओं के लिए बैठक नोट्स टेम्पलेट।" },
      lastUpdated: "Oct 2025",
      views: "25.3k",
      templateSlug:'/'
    },
    {
      id: "meeting-6",
      title: { en: "Action Items Report", hi: "कार्य वस्तु रिपोर्ट" },
      description: { en: "Report format tracking meeting action items and follow-ups.", hi: "बैठक कार्य वस्तुओं और फॉलो-अप को ट्रैक करने के लिए रिपोर्ट प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "23.1k",
      templateSlug:'/'
    },
  ],
  seoTitle: { en: "About Meeting Report Templates", hi: "बैठक रिपोर्ट टेम्पलेट के बारे में" },
  seoDescription: {
    en: "Meeting reports document discussions, decisions, and action items from professional meetings. Our templates include meeting minutes formats for standard documentation, board meeting reports for formal sessions, team meeting summaries for departmental updates, AGM report formats for annual meetings, project meeting notes for tracking progress, and action items reports for follow-up accountability. Each template ensures comprehensive meeting documentation.",
    hi: "बैठक रिपोर्ट पेशेवर बैठकों से चर्चाओं, निर्णयों और कार्य वस्तुओं को दस्तावेज करती हैं।",
  },
  relatedTemplates: [
    { title: { en: "Office Notice", hi: "कार्यालय नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "office" },
    { title: { en: "Project Report", hi: "परियोजना रिपोर्ट" }, category: { en: "Notices", hi: "नोटिस" }, slug: "project" },
    { title: { en: "Formal Letter", hi: "औपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
    { title: { en: "Business Agreement", hi: "व्यापार समझौता" }, category: { en: "Agreements", hi: "समझौते" }, slug: "business" },
  ],
  blogPosts: [
    { title: { en: "How to Write Effective Meeting Minutes", hi: "प्रभावी बैठक मिनट कैसे लिखें" }, excerpt: { en: "Best practices for documenting meetings", hi: "बैठकों को दस्तावेज करने के लिए सर्वोत्तम प्रथाएं" }, readTime: "8 min read", slug: "effective-meeting-minutes" },
    { title: { en: "Meeting Follow-Up Strategies", hi: "बैठक फॉलो-अप रणनीतियां" }, excerpt: { en: "Ensuring action items are completed", hi: "कार्य वस्तुओं को पूरा करना सुनिश्चित करना" }, readTime: "6 min read", slug: "meeting-follow-up" },
    { title: { en: "Digital Meeting Documentation", hi: "डिजिटल बैठक दस्तावेज" }, excerpt: { en: "Modern tools for meeting notes", hi: "बैठक नोट्स के लिए आधुनिक उपकरण" }, readTime: "7 min read", slug: "digital-meeting-notes" },
  ],
  faqs: [
    { question: { en: "What are meeting minutes?", hi: "बैठक मिनट क्या हैं?" }, answer: { en: "Meeting minutes are official written records of what was discussed and decided in a meeting. They include: attendees, agenda items, discussions, decisions, action items, and next steps. Minutes serve as legal records and reference documents.", hi: "बैठक मिनट बैठक में क्या चर्चा की गई और निर्णय लिया गया इसका आधिकारिक लिखित रिकॉर्ड हैं।" } },
    { question: { en: "Who writes meeting minutes?", hi: "बैठक मिनट कौन लिखता है?" }, answer: { en: "Typically, a designated secretary, administrative assistant, or meeting coordinator takes minutes. For board meetings, the company secretary records minutes. The person should be organized, detail-oriented, and familiar with the meeting's context.", hi: "आमतौर पर, एक नामित सचिव, प्रशासनिक सहायक या बैठक समन्वयक मिनट लेता है। बोर्ड बैठकों के लिए, कंपनी सचिव रिकॉर्ड करता है।" } },
    { question: { en: "How soon should meeting minutes be distributed?", hi: "बैठक मिनट कितनी जल्दी वितरित किए जाने चाहिए?" }, answer: { en: "Distribute minutes within 24-48 hours while the meeting is fresh in participants' minds. For formal meetings, within 1 week. Quick distribution ensures timely action on decisions and maintains accountability.", hi: "प्रतिभागियों के दिमाग में बैठक ताजा होने पर 24-48 घंटों के भीतर मिनट वितरित करें। औपचारिक बैठकों के लिए, 1 सप्ताह के भीतर।" } },
  ],
};

// 4. PROJECT REPORTS
export const projectReportsData: SubcategoryData = {
  slug: "project",
  categorySlug: "notices",
  categoryName: { en: "Notices", hi: "नोटिस" },
  subcategoryName: { en: "Project Reports", hi: "परियोजना रिपोर्ट" },
  breadcrumb: [
    { en: "Notices", hi: "नोटिस", slug:"/letters" },
    { en: "Project Reports", hi: "परियोजना रिपोर्ट", slug:"/letters" },
  ],
  heroTitle: { en: "Project Report Templates", hi: "परियोजना रिपोर्ट टेम्पलेट" },
  heroDescription: {
    en: "Professional project status and progress report formats - comprehensive project documentation templates.",
    hi: "पेशेवर परियोजना स्थिति और प्रगति रिपोर्ट प्रारूप - व्यापक परियोजना दस्तावेज़ीकरण टेम्पलेट।",
  },
  searchPlaceholder: { en: "Search project report templates…", hi: "परियोजना रिपोर्ट टेम्पलेट खोजें..." },
  tags: ["Status Report", "Progress Report", "Project Summary", "Milestone Report", "Completion Report", "Project Update"],
  templates: [
    {
      id: "project-1",
      title: { en: "Project Status Report", hi: "परियोजना स्थिति रिपोर्ट" },
      description: { en: "Standard format for project status updates and progress.", hi: "परियोजना स्थिति अपडेट और प्रगति के लिए मानक प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "39.8k",
      badge: "Popular",
      templateSlug:'/'
    },
    {
      id: "project-2",
      title: { en: "Progress Report Format", hi: "प्रगति रिपोर्ट प्रारूप" },
      description: { en: "Report template for tracking project progress and milestones.", hi: "परियोजना प्रगति और मील के पत्थर को ट्रैक करने के लिए रिपोर्ट टेम्पलेट।" },
      lastUpdated: "Nov 2025",
      views: "35.9k",
      badge: "Trending",
      templateSlug:'/'
    },
    {
      id: "project-3",
      title: { en: "Project Completion Report", hi: "परियोजना पूर्णता रिपोर्ट" },
      description: { en: "Final report format for completed projects with outcomes.", hi: "परिणामों के साथ पूर्ण परियोजनाओं के लिए अंतिम रिपोर्ट प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "32.4k",
      templateSlug:'/'
    },
    {
      id: "project-4",
      title: { en: "Monthly Project Report", hi: "मासिक परियोजना रिपोर्ट" },
      description: { en: "Monthly report template for project updates and status.", hi: "परियोजना अपडेट और स्थिति के लिए मासिक रिपोर्ट टेम्पलेट।" },
      lastUpdated: "Oct 2025",
      views: "29.1k",
      templateSlug:'/'
    },
    {
      id: "project-5",
      title: { en: "Project Summary Report", hi: "परियोजना सारांश रिपोर्ट" },
      description: { en: "Executive summary format for project overview.", hi: "परियोजना अवलोकन के लिए कार्यकारी सारांश प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "26.7k",
      templateSlug:'/'
    },
    {
      id: "project-6",
      title: { en: "Milestone Achievement Report", hi: "मील का पत्थर उपलब्धि रिपोर्ट" },
      description: { en: "Report format for documenting milestone achievements.", hi: "मील के पत्थर उपलब्धियों को दस्तावेज करने के लिए रिपोर्ट प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "24.3k",
      templateSlug:'/'
    },
  ],
  seoTitle: { en: "About Project Report Templates", hi: "परियोजना रिपोर्ट टेम्पलेट के बारे में" },
  seoDescription: {
    en: "Project reports track progress, status, and outcomes of projects. Our templates include project status reports for regular updates, progress reports tracking milestones, project completion reports documenting final outcomes, monthly project reports for periodic updates, project summary reports for executive overview, and milestone achievement reports celebrating key deliverables. Each template provides clear project visibility and accountability.",
    hi: "परियोजना रिपोर्ट परियोजनाओं की प्रगति, स्थिति और परिणामों को ट्रैक करती हैं।",
  },
  relatedTemplates: [
    { title: { en: "Meeting Report", hi: "बैठक रिपोर्ट" }, category: { en: "Notices", hi: "नोटिस" }, slug: "meeting" },
    { title: { en: "Office Notice", hi: "कार्यालय नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "office" },
    { title: { en: "Professional Resume", hi: "पेशेवर रिज्यूमे" }, category: { en: "Resumes", hi: "रिज्यूमे" }, slug: "professional" },
    { title: { en: "Business Agreement", hi: "व्यापार समझौता" }, category: { en: "Agreements", hi: "समझौते" }, slug: "business" },
  ],
  blogPosts: [
    { title: { en: "Writing Effective Project Reports", hi: "प्रभावी परियोजना रिपोर्ट लिखना" }, excerpt: { en: "Best practices for project documentation", hi: "परियोजना दस्तावेज़ीकरण के लिए सर्वोत्तम प्रथाएं" }, readTime: "9 min read", slug: "effective-project-reports" },
    { title: { en: "Project Status Communication", hi: "परियोजना स्थिति संचार" }, excerpt: { en: "Keeping stakeholders informed", hi: "हितधारकों को सूचित रखना" }, readTime: "7 min read", slug: "project-communication" },
    { title: { en: "Project Management Tools", hi: "परियोजना प्रबंधन उपकरण" }, excerpt: { en: "Digital tools for project reporting", hi: "परियोजना रिपोर्टिंग के लिए डिजिटल उपकरण" }, readTime: "8 min read", slug: "project-tools" },
  ],
  faqs: [
    { question: { en: "What should a project report include?", hi: "परियोजना रिपोर्ट में क्या शामिल होना चाहिए?" }, answer: { en: "Include: Project name, reporting period, executive summary, progress on objectives, milestones achieved, challenges faced, solutions implemented, budget status, timeline updates, next steps, and recommendations. Use charts and metrics for clarity.", hi: "शामिल करें: परियोजना नाम, रिपोर्टिंग अवधि, कार्यकारी सारांश, उद्देश्यों पर प्रगति, प्राप्त मील के पत्थर, चुनौतियां, बजट स्थिति।" } },
    { question: { en: "How often should project reports be submitted?", hi: "परियोजना रिपोर्ट कितनी बार जमा की जानी चाहिए?" }, answer: { en: "Frequency depends on project duration and stakeholder needs. Weekly: for short/critical projects, Bi-weekly: for medium projects, Monthly: for long-term projects, Quarterly: for strategic initiatives. Always report at major milestones.", hi: "आवृत्ति परियोजना अवधि और हितधारक आवश्यकताओं पर निर्भर करती है। साप्ताहिक, पाक्षिक, मासिक या त्रैमासिक हो सकती है।" } },
    { question: { en: "Who should receive project reports?", hi: "परियोजना रिपोर्ट किसे प्राप्त करनी चाहिए?" }, answer: { en: "Distribute to: Project sponsors, steering committee, project team members, department heads, stakeholders, and clients (if applicable). Tailor detail level to audience - executives need summaries, team members need detailed reports.", hi: "वितरित करें: परियोजना प्रायोजक, संचालन समिति, परियोजना टीम सदस्य, विभाग प्रमुख, हितधारक और ग्राहक।" } },
  ],
};

// Continue with Event Notices and Policy Notices...

// 5. EVENT NOTICES
export const eventNoticesData: SubcategoryData = {
  slug: "event",
  categorySlug: "notices",
  categoryName: { en: "Notices", hi: "नोटिस" },
  subcategoryName: { en: "Event Notices", hi: "कार्यक्रम नोटिस" },
  breadcrumb: [{ en: "Notices", hi: "नोटिस", slug:"/letters" }, { en: "Event Notices", hi: "कार्यक्रम नोटिस", slug:"/letters" }],
  heroTitle: { en: "Event Notice Templates", hi: "कार्यक्रम नोटिस टेम्पलेट" },
  heroDescription: { en: "Professional event announcement formats for seminars, workshops, and programs - engaging event notice templates.", hi: "सेमिनार, कार्यशालाओं और कार्यक्रमों के लिए पेशेवर कार्यक्रम घोषणा प्रारूप।" },
  searchPlaceholder: { en: "Search event notice templates…", hi: "कार्यक्रम नोटिस टेम्पलेट खोजें..." },
  tags: ["Event Announcement", "Seminar Notice", "Workshop Notice", "Conference", "Cultural Event", "Sports Event"],
  templates: [
    { id: "event-1", title: { en: "Event Announcement Notice", hi: "कार्यक्रम घोषणा नोटिस" }, description: { en: "General event announcement with details and RSVP.", hi: "विवरण और आरएसवीपी के साथ सामान्य कार्यक्रम घोषणा।" }, lastUpdated: "Nov 2025", views: "37.4k", badge: "Popular",templateSlug:'/' },
    { id: "event-2", title: { en: "Seminar Notice Format", hi: "सेमिनार नोटिस प्रारूप" }, description: { en: "Notice template for academic and professional seminars.", hi: "शैक्षिक और पेशेवर सेमिनारों के लिए नोटिस टेम्पलेट।" }, lastUpdated: "Nov 2025", views: "33.8k", badge: "Trending",templateSlug:'/' },
    { id: "event-3", title: { en: "Workshop Notice", hi: "कार्यशाला नोटिस" }, description: { en: "Notice format for workshops and training sessions.", hi: "कार्यशालाओं और प्रशिक्षण सत्रों के लिए नोटिस प्रारूप।" }, lastUpdated: "Nov 2025", views: "30.6k",templateSlug:'/' },
    { id: "event-4", title: { en: "Conference Notice", hi: "सम्मेलन नोटिस" }, description: { en: "Professional notice for conferences and symposiums.", hi: "सम्मेलनों और संगोष्ठियों के लिए पेशेवर नोटिस।" }, lastUpdated: "Oct 2025", views: "27.9k",templateSlug:'/' },
    { id: "event-5", title: { en: "Cultural Event Notice", hi: "सांस्कृतिक कार्यक्रम नोटिस" }, description: { en: "Notice template for cultural programs and festivals.", hi: "सांस्कृतिक कार्यक्रमों और त्योहारों के लिए नोटिस टेम्पलेट।" }, lastUpdated: "Oct 2025", views: "25.2k",templateSlug:'/' },
    { id: "event-6", title: { en: "Sports Event Notice", hi: "खेल कार्यक्रम नोटिस" }, description: { en: "Notice format for sports competitions and tournaments.", hi: "खेल प्रतियोगिताओं और टूर्नामेंट के लिए नोटिस प्रारूप।" }, lastUpdated: "Oct 2025", views: "22.8k",templateSlug:'/' },
  ],
  seoTitle: { en: "About Event Notice Templates", hi: "कार्यक्रम नोटिस टेम्पलेट के बारे में" },
  seoDescription: { en: "Event notices announce and promote upcoming events, programs, and activities. Our templates include event announcement notices with details, seminar notices for academic events, workshop notices for training sessions, conference notices for professional gatherings, cultural event notices for celebrations, and sports event notices for competitions with schedules and registration information.", hi: "कार्यक्रम नोटिस आगामी कार्यक्रमों, कार्यक्रमों और गतिविधियों की घोषणा और प्रचार करते हैं।" },
  relatedTemplates: [
    { title: { en: "Invitation Letter", hi: "निमंत्रण पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "invitation" },
    { title: { en: "School Notice", hi: "स्कूल नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "school" },
    { title: { en: "Appreciation Certificate", hi: "प्रशंसा प्रमाणपत्र" }, category: { en: "Certificates", hi: "प्रमाणपत्र" }, slug: "appreciation" },
    { title: { en: "Speech Writing", hi: "भाषण लेखन" }, category: { en: "Essays", hi: "निबंध" }, slug: "speeches" },
  ],
  blogPosts: [
    { title: { en: "Creating Engaging Event Notices", hi: "आकर्षक कार्यक्रम नोटिस बनाना" }, excerpt: { en: "Tips for effective event promotion", hi: "प्रभावी कार्यक्रम प्रचार के लिए सुझाव" }, readTime: "6 min read", slug: "engaging-event-notices" },
    { title: { en: "Event Marketing Strategies", hi: "कार्यक्रम विपणन रणनीतियां" }, excerpt: { en: "Promoting events through notices", hi: "नोटिस के माध्यम से कार्यक्रमों को बढ़ावा देना" }, readTime: "7 min read", slug: "event-marketing" },
    { title: { en: "RSVP Management Tips", hi: "आरएसवीपी प्रबंधन सुझाव" }, excerpt: { en: "Handling event registrations effectively", hi: "कार्यक्रम पंजीकरण को प्रभावी ढंग से संभालना" }, readTime: "5 min read", slug: "rsvp-management" },
  ],
  faqs: [
    { question: { en: "What information should an event notice include?", hi: "कार्यक्रम नोटिस में कौन सी जानकारी शामिल होनी चाहिए?" }, answer: { en: "Include: Event name, date and time, venue with address, event description, speakers/performers, registration details, RSVP deadline, contact information, dress code (if any), and any special instructions or requirements.", hi: "शामिल करें: कार्यक्रम नाम, तिथि और समय, स्थान, विवरण, वक्ता, पंजीकरण विवरण, आरएसवीपी समय सीमा, संपर्क जानकारी।" } },
    { question: { en: "How far in advance should event notices be sent?", hi: "कार्यक्रम नोटिस कितने समय पहले भेजे जाने चाहिए?" }, answer: { en: "Large events/conferences: 6-8 weeks advance, Workshops/seminars: 3-4 weeks, Small meetings: 1-2 weeks, Urgent events: minimum 3-5 days. Include RSVP deadline at least 1 week before event.", hi: "बड़े कार्यक्रम: 6-8 सप्ताह पहले, कार्यशालाएं: 3-4 सप्ताह, छोटी बैठकें: 1-2 सप्ताह। कम से कम 1 सप्ताह पहले आरएसवीपी समय सीमा शामिल करें।" } },
    { question: { en: "Can event notices be sent digitally?", hi: "क्या कार्यक्रम नोटिस डिजिटल रूप से भेजे जा सकते हैं?" }, answer: { en: "Yes! Use email, social media, event platforms, WhatsApp, SMS, and websites. Digital notices are faster, trackable, and eco-friendly. Include calendar invites and registration links for convenience.", hi: "हां! ईमेल, सोशल मीडिया, कार्यक्रम प्लेटफ़ॉर्म, व्हाट्सएप, एसएमएस और वेबसाइटों का उपयोग करें। डिजिटल नोटिस तेज और ट्रैक करने योग्य हैं।" } },
  ],
};

// 6. POLICY NOTICES
export const policyNoticesData: SubcategoryData = {
  slug: "policy",
  categorySlug: "notices",
  categoryName: { en: "Notices", hi: "नोटिस" },
  subcategoryName: { en: "Policy Notices", hi: "नीति नोटिस" },
  breadcrumb: [{ en: "Notices", hi: "नोटिस", slug:"/letters" }, { en: "Policy Notices", hi: "नीति नोटिस", slug:"/letters" }],
  heroTitle: { en: "Policy Notice Templates", hi: "नीति नोटिस टेम्पलेट" },
  heroDescription: { en: "Professional policy update and compliance notice formats - official policy announcement templates.", hi: "पेशेवर नीति अद्यतन और अनुपालन नोटिस प्रारूप - आधिकारिक नीति घोषणा टेम्पलेट।" },
  searchPlaceholder: { en: "Search policy notice templates…", hi: "नीति नोटिस टेम्पलेट खोजें..." },
  tags: ["Policy Update", "Compliance Notice", "Regulation", "Guidelines", "Procedure", "SOP"],
  templates: [
    { id: "policy-1", title: { en: "Policy Update Notice", hi: "नीति अद्यतन नोटिस" }, description: { en: "Notice format for company policy changes and updates.", hi: "कंपनी नीति परिवर्तन और अपडेट के लिए नोटिस प्रारूप।" }, lastUpdated: "Nov 2025", views: "35.6k", badge: "Popular",templateSlug:'/' },
    { id: "policy-2", title: { en: "New Policy Announcement", hi: "नई नीति घोषणा" }, description: { en: "Announcement template for introducing new policies.", hi: "नई नीतियों को पेश करने के लिए घोषणा टेम्पलेट।" }, lastUpdated: "Nov 2025", views: "32.1k", badge: "Trending",templateSlug:'/' },
    { id: "policy-3", title: { en: "Compliance Notice", hi: "अनुपालन नोटिस" }, description: { en: "Notice template for compliance and regulatory requirements.", hi: "अनुपालन और नियामक आवश्यकताओं के लिए नोटिस टेम्पलेट।" }, lastUpdated: "Nov 2025", views: "29.4k" ,templateSlug:'/'},
    { id: "policy-4", title: { en: "Regulatory Notice", hi: "नियामक नोटिस" }, description: { en: "Notice format for regulatory changes and compliance.", hi: "नियामक परिवर्तनों और अनुपालन के लिए नोटिस प्रारूप।" }, lastUpdated: "Oct 2025", views: "26.8k" ,templateSlug:'/'},
    { id: "policy-5", title: { en: "Guidelines Notice", hi: "दिशानिर्देश नोटिस" }, description: { en: "Notice template for new guidelines and procedures.", hi: "नए दिशानिर्देशों और प्रक्रियाओं के लिए नोटिस टेम्पलेट।" }, lastUpdated: "Oct 2025", views: "24.2k",templateSlug:'/' },
    { id: "policy-6", title: { en: "SOP Update Notice", hi: "एसओपी अद्यतन नोटिस" }, description: { en: "Notice format for Standard Operating Procedure updates.", hi: "मानक संचालन प्रक्रिया अपडेट के लिए नोटिस प्रारूप।" }, lastUpdated: "Oct 2025", views: "21.9k",templateSlug:'/' },
  ],
  seoTitle: { en: "About Policy Notice Templates", hi: "नीति नोटिस टेम्पलेट के बारे में" },
  seoDescription: { en: "Policy notices communicate organizational policies, regulations, and procedural changes. Our templates include policy update notices for changes, new policy announcements for implementations, compliance notices for regulatory requirements, regulatory notices for legal updates, guidelines notices for procedural instructions, and SOP update notices for operational changes ensuring clear policy communication.", hi: "नीति नोटिस संगठनात्मक नीतियों, विनियमों और प्रक्रियात्मक परिवर्तनों को संप्रेषित करते हैं।" },
  relatedTemplates: [
    { title: { en: "Office Notice", hi: "कार्यालय नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "office" },
    { title: { en: "Employment Contract", hi: "रोजगार अनुबंध" }, category: { en: "Agreements", hi: "समझौते" }, slug: "employment" },
    { title: { en: "Legal Forms", hi: "कानूनी फॉर्म" }, category: { en: "Agreements", hi: "समझौते" }, slug: "legal" },
    { title: { en: "Formal Letter", hi: "औपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
  ],
  blogPosts: [
    { title: { en: "Communicating Policy Changes Effectively", hi: "नीति परिवर्तनों को प्रभावी ढंग से संप्रेषित करना" }, excerpt: { en: "Best practices for policy announcements", hi: "नीति घोषणाओं के लिए सर्वोत्तम प्रथाएं" }, readTime: "7 min read", slug: "policy-communication" },
    { title: { en: "Compliance Management Tips", hi: "अनुपालन प्रबंधन सुझाव" }, excerpt: { en: "Ensuring organizational compliance", hi: "संगठनात्मक अनुपालन सुनिश्चित करना" }, readTime: "8 min read", slug: "compliance-management" },
    { title: { en: "Policy Documentation Best Practices", hi: "नीति दस्तावेज़ीकरण सर्वोत्तम प्रथाएं" }, excerpt: { en: "Creating clear policy documents", hi: "स्पष्ट नीति दस्तावेज़ बनाना" }, readTime: "6 min read", slug: "policy-documentation" },
  ],
  faqs: [
    { question: { en: "What is a policy notice?", hi: "नीति नोटिस क्या है?" }, answer: { en: "A policy notice is an official communication informing employees or stakeholders about new policies, policy changes, or compliance requirements. It includes policy details, effective date, rationale, and implementation steps.", hi: "नीति नोटिस एक आधिकारिक संचार है जो कर्मचारियों या हितधारकों को नई नीतियों, नीति परिवर्तनों या अनुपालन आवश्यकताओं के बारे में सूचित करता है।" } },
    { question: { en: "How to announce a new policy?", hi: "नई नीति की घोषणा कैसे करें?" }, answer: { en: "Send official notice via email/memo, explain policy purpose and benefits, provide clear implementation timeline, offer training if needed, create FAQ document, designate point of contact for questions, and follow up to ensure understanding.", hi: "ईमेल/ज्ञापन के माध्यम से आधिकारिक नोटिस भेजें, नीति उद्देश्य और लाभ समझाएं, कार्यान्वयन समयरेखा प्रदान करें, प्रशिक्षण प्रदान करें।" } },
    { question: { en: "How long before a policy change should notice be given?", hi: "नीति परिवर्तन से पहले कितने समय पहले नोटिस दिया जाना चाहिए?" }, answer: { en: "Minor changes: 2-4 weeks notice, Major changes: 1-2 months notice, Compliance-related: as per legal requirements. Provide adequate time for employees to understand and adapt to new policies.", hi: "मामूली परिवर्तन: 2-4 सप्ताह नोटिस, प्रमुख परिवर्तन: 1-2 महीने नोटिस, अनुपालन-संबंधित: कानूनी आवश्यकताओं के अनुसार।" } },
  ],
};

// Export all Notices subcategories
export const allNoticesSubcategories = [
  schoolNoticesData,
  officeNoticesData,
  meetingReportsData,
  projectReportsData,
  eventNoticesData,
  policyNoticesData,
];
