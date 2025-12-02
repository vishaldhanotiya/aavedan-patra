/**
 * ALL LETTERS SUBCATEGORIES (6 total)
 * Complete data for Letters category subcategories
 */

import { SubcategoryData } from "../category/jobCategory";

// 3. REQUEST LETTERS
export const requestLetters: SubcategoryData = {
  slug: "request",
  categorySlug: "letters",
  categoryName: { en: "Letters", hi: "पत्र" },
  subcategoryName: { en: "Request Letters", hi: "अनुरोध पत्र" },
  breadcrumb: [
    { en: "Letters", hi: "पत्र", slug:'/letters'},
    { en: "Request Letters", hi: "अनुरोध पत्र", slug:'/letters/request' },
  ],
  heroTitle: { 
    en: "Request Letter Templates", 
    hi: "अनुरोध पत्र टेम्पलेट" 
  },
  heroDescription: {
    en: "Professional request letter formats for permissions, approvals, information, and various formal requests - polite and effective templates.",
    hi: "अनुमति, अनुमोदन, जानकारी और विभिन्न औपचारिक अनुरोधों के लिए पेशेवर अनुरोध पत्र प्रारूप - विनम्र और प्रभावी टेम्पलेट।",
  },
  searchPlaceholder: {
    en: "Search request letter templates…",
    hi: "अनुरोध पत्र टेम्पलेट खोजें...",
  },
  tags: ["Permission Request", "Information Request", "Approval", "Sponsorship", "Meeting", "Donation"],
  templates: [
    {
      id: "request-1",
      title: { 
        en: "Permission Request Letter", 
        hi: "अनुमति अनुरोध पत्र" 
      },
      description: {
        en: "Polite format for requesting permission from authorities and organizations.",
        hi: "अधिकारियों और संगठनों से अनुमति का अनुरोध करने के लिए विनम्र प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "21.2k",
      badge: "Popular",
      templateSlug:'permission-request-letter'
    },
    {
      id: "request-2",
      title: { 
        en: "Information Request Letter", 
        hi: "जानकारी अनुरोध पत्र" 
      },
      description: {
        en: "Professional template for requesting information and documents.",
        hi: "जानकारी और दस्तावेजों का अनुरोध करने के लिए पेशेवर टेम्पलेट।",
      },
      lastUpdated: "Nov 2025",
      views: "18.9k",
      badge: "Trending",
      templateSlug:'information-request-letter'
    },
    {
      id: "request-3",
      title: { 
        en: "Meeting Request Letter", 
        hi: "बैठक अनुरोध पत्र" 
      },
      description: {
        en: "Format for requesting appointments and meetings with officials.",
        hi: "अधिकारियों के साथ नियुक्तियों और बैठकों का अनुरोध करने के लिए प्रारूप।",
      },
      lastUpdated: "Nov 2025",
      views: "17.4k",
      templateSlug:'meeting-request-letter'
    },
    {
      id: "request-4",
      title: { 
        en: "Sponsorship Request Letter", 
        hi: "प्रायोजन अनुरोध पत्र" 
      },
      description: {
        en: "Professional request format for event and project sponsorship.",
        hi: "कार्यक्रम और परियोजना प्रायोजन के लिए पेशेवर अनुरोध प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "15.6k",
      templateSlug:'sponsorship-request-letter'
    },
    {
      id: "request-5",
      title: { 
        en: "Donation Request Letter", 
        hi: "दान अनुरोध पत्र" 
      },
      description: {
        en: "Template for requesting donations for charitable causes and events.",
        hi: "धर्मार्थ कारणों और कार्यक्रमों के लिए दान का अनुरोध करने के लिए टेम्पलेट।",
      },
      lastUpdated: "Oct 2025",
      views: "14.2k",
      templateSlug:'donation-request-letter'
    },
    {
      id: "request-6",
      title: { 
        en: "Recommendation Request Letter", 
        hi: "सिफारिश अनुरोध पत्र" 
      },
      description: {
        en: "Polite format for requesting recommendation letters from professors or employers.",
        hi: "प्रोफेसरों या नियोक्ताओं से सिफारिश पत्र का अनुरोध करने के लिए विनम्र प्रारूप।",
      },
      lastUpdated: "Oct 2025",
      views: "13.1k",
      templateSlug:'recommendation-request-letter'
    },
  ],
  seoTitle: {
    en: "About Request Letter Templates",
    hi: "अनुरोध पत्र टेम्पलेट के बारे में",
  },
  seoDescription: {
    en: "Request letters are formal communications asking for permission, information, approval, or assistance. Our templates cover permission requests for events and activities, information requests from organizations, meeting appointment requests, sponsorship proposals, donation appeals, and recommendation letter requests. Each template uses polite, professional language with clear explanation of the request, justification, and expected outcome. These well-structured formats increase approval chances and maintain professional relationships while making effective requests.",
    hi: "अनुरोध पत्र औपचारिक संचार हैं जो अनुमति, जानकारी, अनुमोदन या सहायता मांगते हैं।",
  },
  relatedTemplates: [
    {
      title: { en: "Formal Letter Template", hi: "औपचारिक पत्र टेम्पलेट" },
      category: { en: "Letters", hi: "पत्र" },
      slug: "formal",
    },
    {
      title: { en: "Job Application", hi: "नौकरी आवेदन" },
      category: { en: "Applications", hi: "आवेदन" },
      slug: "job",
    },
    {
      title: { en: "Complaint Letter", hi: "शिकायत पत्र" },
      category: { en: "Letters", hi: "पत्र" },
      slug: "complaint",
    },
    {
      title: { en: "Business Proposal", hi: "व्यापार प्रस्ताव" },
      category: { en: "Agreements", hi: "समझौते" },
      slug: "business",
    },
  ],
  blogPosts: [
    {
      title: { 
        en: "How to Write an Effective Request Letter", 
        hi: "प्रभावी अनुरोध पत्र कैसे लिखें" 
      },
      excerpt: {
        en: "Tips for writing request letters that get positive responses",
        hi: "सकारात्मक प्रतिक्रियाएं प्राप्त करने वाले अनुरोध पत्र लिखने के लिए सुझाव",
      },
      readTime: "6 min read",
      slug: "effective-request-letter",
    },
    {
      title: { 
        en: "Permission Request: Do's and Don'ts", 
        hi: "अनुमति अनुरोध: क्या करें और क्या न करें" 
      },
      excerpt: {
        en: "Best practices for requesting permissions professionally",
        hi: "पेशेवर रूप से अनुमति का अनुरोध करने के लिए सर्वोत्तम प्रथाएं",
      },
      readTime: "5 min read",
      slug: "permission-request-best-practices",
    },
    {
      title: { 
        en: "Sponsorship Request: Winning Strategies", 
        hi: "प्रायोजन अनुरोध: विजयी रणनीतियां" 
      },
      excerpt: {
        en: "How to write sponsorship requests that attract funding",
        hi: "प्रायोजन अनुरोध कैसे लिखें जो वित्त पोषण आकर्षित करते हैं",
      },
      readTime: "7 min read",
      slug: "sponsorship-request-strategies",
    },
  ],
  faqs: [
    {
      question: { 
        en: "How do I make my request letter effective?", 
        hi: "मैं अपने अनुरोध पत्र को प्रभावी कैसे बनाऊं?" 
      },
      answer: {
        en: "Be clear and specific about what you're requesting. Explain why you need it and how it will be used. Use polite, professional language. Provide necessary details and deadlines. Thank the recipient in advance for their consideration. Keep it concise and well-organized.",
        hi: "स्पष्ट रहें कि आप क्या अनुरोध कर रहे हैं। समझाएं कि आपको इसकी आवश्यकता क्यों है। विनम्र, पेशेवर भाषा का उपयोग करें।",
      },
    },
    {
      question: { 
        en: "When should I follow up on a request letter?", 
        hi: "मुझे अनुरोध पत्र पर कब फॉलो-अप करना चाहिए?" 
      },
      answer: {
        en: "Wait 5-7 business days before following up unless there's an urgent deadline. Send a polite follow-up email or letter referencing your original request. Be patient and understanding, as decision-makers may need time to review requests.",
        hi: "तत्काल समय सीमा न होने तक फॉलो-अप करने से पहले 5-7 व्यावसायिक दिन प्रतीक्षा करें। अपने मूल अनुरोध का संदर्भ देते हुए एक विनम्र फॉलो-अप भेजें।",
      },
    },
    {
      question: { 
        en: "What if my request is denied?", 
        hi: "यदि मेरा अनुरोध अस्वीकार कर दिया जाता है तो क्या होगा?" 
      },
      answer: {
        en: "Respond graciously and thank them for considering your request. Ask for feedback to understand the reasons. If appropriate, ask if there's a different time or alternative approach that might work. Maintain professional relationships regardless of the outcome.",
        hi: "कृपापूर्वक जवाब दें और अपने अनुरोध पर विचार करने के लिए उन्हें धन्यवाद दें। कारणों को समझने के लिए प्रतिक्रिया मांगें।",
      },
    },
  ],
};

// Export all Letters subcategories
export const allLettersSubcategories = [
  requestLetters
  // Add 3 more: complaint, resignation, invitation
];