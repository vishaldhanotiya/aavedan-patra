/**
 * ALL LETTERS SUBCATEGORIES (6 total)
 * Complete data for Letters category subcategories
 */

import { SubcategoryData } from "../category/jobCategory";


// 1. FORMAL LETTERS
export const formalLetters: SubcategoryData = {
  slug: "formal",
  categorySlug: "letters",
  categoryName: { en: "Letters", hi: "पत्र" },
  subcategoryName: { en: "Formal Letters", hi: "औपचारिक पत्र" },
  breadcrumb: [
    { en: "Letters", hi: "पत्र", slug:"/letters" },
    { en: "Formal Letters", hi: "औपचारिक पत्र",slug:"/letters" },
  ],
  heroTitle: { 
    en: "Formal Letter Templates", 
    hi: "औपचारिक पत्र टेम्पलेट" 
  },
  heroDescription: {
    en: "Professional formal letter formats for business, official, and professional communication - ready to download and customize.",
    hi: "व्यवसाय, आधिकारिक और पेशेवर संचार के लिए पेशेवर औपचारिक पत्र प्रारूप - डाउनलोड और अनुकूलित करने के लिए तैयार।",
  },
  searchPlaceholder: {
    en: "Search formal letter templates…",
    hi: "औपचारिक पत्र टेम्पलेट खोजें...",
  },
  tags: ["Business Letter", "Official Letter", "Government", "Professional", "Corporate", "Formal Request"],
  templates: [
    {
      id: "formal-1",
      title: { 
        en: "Formal Letter to Principal", 
        hi: "प्रधानाचार्य को औपचारिक पत्र" 
      },
      description: {
        en: "Professional format for writing formal letters to school or college principal.",
        hi: "स्कूल या कॉलेज प्रधानाचार्य को औपचारिक पत्र लिखने के लिए पेशेवर प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "22.4k",
      badge: "Popular",
      templateSlug:'/'
    },
    {
      id: "formal-2",
      title: { 
        en: "Business Letter Format", 
        hi: "व्यापार पत्र प्रारूप" 
      },
      description: {
        en: "Standard business letter template for corporate and professional communication.",
        hi: "कॉर्पोरेट और पेशेवर संचार के लिए मानक व्यापार पत्र टेम्पलेट।",
      },
      lastUpdated: "Nov 2025",
      views: "20.8k",
      badge: "Trending",
      templateSlug:'/'
    },
    {
      id: "formal-3",
      title: { 
        en: "Formal Letter to Manager", 
        hi: "प्रबंधक को औपचारिक पत्र" 
      },
      description: {
        en: "Professional letter format for workplace communication with managers.",
        hi: "प्रबंधकों के साथ कार्यस्थल संचार के लिए पेशेवर पत्र प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "18.6k",
      templateSlug:'/'
    },
    {
      id: "formal-4",
      title: { 
        en: "Letter to Government Official", 
        hi: "सरकारी अधिकारी को पत्र" 
      },
      description: {
        en: "Formal letter format for addressing government authorities and officials.",
        hi: "सरकारी अधिकारियों और अधिकारियों को संबोधित करने के लिए औपचारिक पत्र प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "16.2k",
      templateSlug:'/'
    },
    {
      id: "formal-5",
      title: { 
        en: "Professional Email Letter", 
        hi: "पेशेवर ईमेल पत्र" 
      },
      description: {
        en: "Formal email letter format for professional and business correspondence.",
        hi: "पेशेवर और व्यापार पत्राचार के लिए औपचारिक ईमेल पत्र प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "15.1k",
      templateSlug:'/'
    },
    {
      id: "formal-6",
      title: { 
        en: "Formal Request Letter", 
        hi: "औपचारिक अनुरोध पत्र" 
      },
      description: {
        en: "Template for formal requests to organizations and authorities.",
        hi: "संगठनों और अधिकारियों को औपचारिक अनुरोध के लिए टेम्पलेट।",
      },
      lastUpdated: "Oct 2025",
      views: "14.3k",
      templateSlug:'/'
    },
  ],
  seoTitle: {
    en: "About Formal Letter Templates",
    hi: "औपचारिक पत्र टेम्पलेट के बारे में",
  },
  seoDescription: {
    en: "Formal letters are professional written communications used in business, academic, and official contexts. Our templates include business letters for corporate communication, letters to principals for school matters, formal workplace letters to managers, government correspondence, professional email formats, and formal request letters. Each template follows proper formatting with sender and recipient details, subject line, salutation, body content, and professional closing. These structured formats ensure clear, respectful communication suitable for official purposes.",
    hi: "औपचारिक पत्र व्यावसायिक, शैक्षणिक और आधिकारिक संदर्भों में उपयोग किए जाने वाले पेशेवर लिखित संचार हैं।",
  },
  relatedTemplates: [
    {
      title: { en: "Job Application Letter", hi: "नौकरी आवेदन पत्र" },
      category: { en: "Applications", hi: "आवेदन" },
      slug: "job",
    },
    {
      title: { en: "Request Letter Template", hi: "अनुरोध पत्र टेम्पलेट" },
      category: { en: "Letters", hi: "पत्र" },
      slug: "request",
    },
    {
      title: { en: "Office Notice Format", hi: "कार्यालय नोटिस प्रारूप" },
      category: { en: "Notices", hi: "नोटिस" },
      slug: "office",
    },
    {
      title: { en: "Business Agreement", hi: "व्यापार समझौता" },
      category: { en: "Agreements", hi: "समझौते" },
      slug: "business",
    },
  ],
  blogPosts: [
    {
      title: { 
        en: "How to Write a Perfect Formal Letter", 
        hi: "परफेक्ट औपचारिक पत्र कैसे लिखें" 
      },
      excerpt: {
        en: "Step-by-step guide to writing professional formal letters with proper format",
        hi: "उचित प्रारूप के साथ पेशेवर औपचारिक पत्र लिखने के लिए चरण-दर-चरण गाइड",
      },
      readTime: "6 min read",
      slug: "how-to-write-formal-letter",
    },
    {
      title: { 
        en: "Formal vs Informal Letters: Key Differences", 
        hi: "औपचारिक बनाम अनौपचारिक पत्र: मुख्य अंतर" 
      },
      excerpt: {
        en: "Understand when to use formal vs informal letter formats",
        hi: "समझें कि औपचारिक बनाम अनौपचारिक पत्र प्रारूपों का उपयोग कब करें",
      },
      readTime: "5 min read",
      slug: "formal-vs-informal-letters",
    },
    {
      title: { 
        en: "Business Letter Writing Tips", 
        hi: "व्यापार पत्र लेखन सुझाव" 
      },
      excerpt: {
        en: "Professional tips for effective business correspondence",
        hi: "प्रभावी व्यापार पत्राचार के लिए पेशेवर सुझाव",
      },
      readTime: "7 min read",
      slug: "business-letter-writing-tips",
    },
  ],
  faqs: [
    {
      question: { 
        en: "What is the format of a formal letter?", 
        hi: "औपचारिक पत्र का प्रारूप क्या है?" 
      },
      answer: {
        en: "A formal letter should include sender's address, date, recipient's address, subject line, formal salutation (Dear Sir/Madam), body paragraphs, complimentary close (Yours sincerely), and signature. Maintain professional tone throughout and use proper spacing.",
        hi: "एक औपचारिक पत्र में प्रेषक का पता, तारीख, प्राप्तकर्ता का पता, विषय पंक्ति, औपचारिक अभिवादन, मुख्य पैराग्राफ और हस्ताक्षर शामिल होने चाहिए।",
      },
    },
    {
      question: { 
        en: "How do I address a formal letter?", 
        hi: "मैं औपचारिक पत्र को कैसे संबोधित करूं?" 
      },
      answer: {
        en: "Use 'Dear Sir/Madam' if you don't know the recipient's name. If you know their name, use 'Dear Mr./Ms./Dr. [Last Name]'. For organizations, use 'Dear [Department Name] Team'. Always use 'Yours sincerely' if you know the name, or 'Yours faithfully' if you don't.",
        hi: "यदि आप प्राप्तकर्ता का नाम नहीं जानते हैं तो 'प्रिय महोदय/महोदया' का उपयोग करें। यदि आप उनका नाम जानते हैं, तो 'प्रिय श्री/सुश्री' का उपयोग करें।",
      },
    },
    {
      question: { 
        en: "Can I use contractions in formal letters?", 
        hi: "क्या मैं औपचारिक पत्रों में संकुचन का उपयोग कर सकता हूं?" 
      },
      answer: {
        en: "No, avoid contractions (don't, can't, won't) in formal letters. Write out the full words (do not, cannot, will not). Also avoid slang, colloquialisms, and casual language. Maintain a professional, respectful tone throughout.",
        hi: "नहीं, औपचारिक पत्रों में संकुचन से बचें। पूर्ण शब्द लिखें। साथ ही स्लैंग और अनौपचारिक भाषा से बचें।",
      },
    },
  ],
};

// Export all Letters subcategories
export const allLettersSubcategories = [
  formalLetters,
  // Add 3 more: complaint, resignation, invitation
];