/**
 * CORPORATE JOB APPLICATION PILLAR TEMPLATE
 * Manager, HR, Operations, Sales/Marketing
 */

import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const managerHrOperationsSalesTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Job Applications", hi: "नौकरी आवेदन", slug:"/applications/job" },
    template: { en: "Corporate Job Application", hi: "कॉर्पोरेट नौकरी आवेदन", slug:"" }
  },

  title: {
    en: "Job Application for Corporate Roles",
    hi: "कॉर्पोरेट भूमिकाओं के लिए नौकरी आवेदन"
  },

  subtitle: {
    en: "Medium-length job application formats for Manager, HR, Operations, and Sales/Marketing roles.",
    hi: "मैनेजर, एचआर, ऑपरेशंस और सेल्स/मार्केटिंग भूमिकाओं के लिए मध्यम-लंबाई के आवेदन प्रारूप।"
  },

  category: {
    en: "Corporate Job Applications",
    hi: "कॉर्पोरेट नौकरी आवेदन"
  },

  updatedDate: "January 2025",

  variations: [
    // ----------------------------------------------------
    // 1. MANAGER JOB APPLICATION
    // ----------------------------------------------------
    {
      id: "manager",
      title: {
        en: "Manager Job Application",
        hi: "मैनेजर नौकरी आवेदन"
      },
      description: {
        en: "Professional application format for managerial positions, focusing on leadership and experience.",
        hi: "प्रबंधकीय पदों के लिए पेशेवर आवेदन प्रारूप, नेतृत्व और अनुभव पर केंद्रित।"
      },
      bestFor: {
        en: "Team Lead, Supervisor, Project Manager, Admin Manager",
        hi: "टीम लीड, सुपरवाइज़र, प्रोजेक्ट मैनेजर, एडमिन मैनेजर"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,  
The Hiring Manager  
[Company Name]  
[Company Address]  
[City, State - PIN Code]

Subject: Application for Manager Position

Respected Sir/Madam, 

I am writing to express my interest in the Manager position at your esteemed organization. With [X] years of experience in leading teams, managing operations, and driving business growth, I believe my expertise aligns well with the requirements of this role.

In my previous role at [Previous Company], I successfully supervised a team of [X] members, streamlined processes to improve efficiency by [X]%, and implemented strategies that helped increase overall productivity. My leadership style focuses on teamwork, clear communication, and data-driven decision-making.

I am confident that my ability to manage projects, handle cross-functional coordination, and motivate teams makes me a strong candidate for this position. I would welcome the opportunity to discuss how my experience can contribute to your organization’s goals.

Thank you for considering my application. I look forward to the opportunity to contribute positively to your team.

Sincerely,  
[Your Name]`,

        hi: `[आपका नाम]  
[आपका पता]  
[शहर, राज्य - पिन कोड]  
[आपका ईमेल]  
[आपका फोन नंबर]

तारीख: [DD/MM/YYYY]

सेवा में,  
हायरिंग मैनेजर  
[कंपनी का नाम]  
[कंपनी का पता]  
[शहर, राज्य - पिन कोड]

विषय: मैनेजर पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके प्रतिष्ठित संगठन में मैनेजर पद के लिए आवेदन प्रस्तुत कर रहा/रही हूँ। टीम प्रबंधन, संचालन सुधार और व्यवसाय वृद्धि में [X] वर्षों के अनुभव के साथ, मुझे विश्वास है कि मेरी क्षमताएँ इस भूमिका की आवश्यकताओं के अनुरूप हैं।

अपने पिछले संगठन [कंपनी का नाम] में, मैंने [X] सदस्यों की टीम का सफलतापूर्वक नेतृत्व किया, प्रक्रियाओं को सुव्यवस्थित करके दक्षता में [X]% सुधार किया और ऐसी रणनीतियाँ लागू कीं जिससे उत्पादकता में उल्लेखनीय वृद्धि हुई। मेरा नेतृत्व शैली टीमवर्क, स्पष्ट संचार और डेटा-आधारित निर्णय लेने पर आधारित है।

मैं परियोजनाओं का प्रबंधन करने, क्रॉस-फ़ंक्शनल टीमों के साथ समन्वय करने और कर्मचारियों को प्रोत्साहित करने की क्षमता रखता/रखती हूँ, जो मुझे इस पद के लिए एक मजबूत उम्मीदवार बनाती है।

कृपया मेरे आवेदन पर विचार करें। आपके संगठन में योगदान देने का अवसर पाकर मुझे खुशी होगी।

भवदीय,  
[आपका नाम]`
      }
    },

    // ----------------------------------------------------
    // 2. HR JOB APPLICATION
    // ----------------------------------------------------
    {
      id: "hr",
      title: {
        en: "HR Job Application",
        hi: "एचआर नौकरी आवेदन"
      },
      description: {
        en: "Ideal for candidates applying for HR Executive, Recruiter, HR Manager roles.",
        hi: "एचआर एग्जीक्यूटिव, रिक्रूटर, एचआर मैनेजर भूमिकाओं के लिए उपयुक्त।"
      },
      bestFor: {
        en: "HR Executive, Recruiter, HR Coordinator",
        hi: "एचआर एग्जीक्यूटिव, रिक्रूटर, एचआर कोऑर्डिनेटर"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,  
The Hiring Manager  
[Company Name]  
[Company Address]  
[City, State - PIN Code]

Subject: Application for HR Position

Respected Sir/Madam,

I am writing to apply for the HR position at your esteemed company. With experience in recruitment, employee onboarding, training coordination, and HR operations, I believe I can contribute effectively to your team.

At my previous organization [Company Name], I managed end-to-end recruitment, conducted interviews, and supported employee engagement activities. I also maintained HR records, prepared reports, and assisted in implementing HR policies.

My strengths include strong communication, people management, multitasking, and a positive approach to resolving employee concerns. I enjoy working with teams and creating a healthy, productive workplace environment.

I look forward to the chance to bring my HR skills to your organization.

Thank you for your time and consideration.

Sincerely,  
[Your Name]`,

        hi: `[आपका नाम]  
[आपका पता]  
[शहर, राज्य - पिन कोड]  
[आपका ईमेल]  
[आपका फोन नंबर]

तारीख: [DD/MM/YYYY]

सेवा में,  
हायरिंग मैनेजर  
[कंपनी का नाम]  
[कंपनी का पता]  
[शहर, राज्य - पिन कोड]

विषय: एचआर पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके प्रतिष्ठित संगठन में एचआर पद के लिए आवेदन प्रस्तुत करना चाहता/चाहती हूँ। भर्ती, कर्मचारी ऑनबोर्डिंग, प्रशिक्षण समन्वय और एचआर संचालन में मिले अनुभव के आधार पर मैं आपके संगठन में प्रभावी योगदान दे सकता/सकती हूँ।

अपने पिछले संगठन [कंपनी का नाम] में, मैंने एंड-टू-एंड भर्ती प्रक्रिया संभाली, इंटरव्यू लिए और कर्मचारी सहभागिता गतिविधियों में भाग लिया। इसके अलावा, मैंने एचआर रिकॉर्ड्स का रखरखाव किया, रिपोर्ट तैयार कीं और एचआर नीतियों को लागू करने में सहायता की।

मेरी ताकतें हैं—सशक्त संचार कौशल, लोगों के साथ तालमेल, मल्टीटास्किंग और सकारात्मक कार्य दृष्टिकोण। मैं स्वस्थ और उत्पादक कार्य वातावरण बनाने में विश्वास रखता/रखती हूँ।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    },

    // ----------------------------------------------------
    // 3. OPERATIONS JOB APPLICATION
    // ----------------------------------------------------
    {
      id: "operations",
      title: {
        en: "Operations Job Application",
        hi: "ऑपरेशंस नौकरी आवेदन"
      },
      description: {
        en: "For candidates applying for Operations Executive, Operations Manager, or Process roles.",
        hi: "ऑपरेशंस एग्जीक्यूटिव, ऑपरेशंस मैनेजर या प्रक्रिया भूमिकाओं हेतु उपयुक्त।"
      },
      bestFor: {
        en: "Operations, Process, Logistics, Coordination roles",
        hi: "ऑपरेशंस, प्रोसेस, लॉजिस्टिक्स, कोऑर्डिनेशन भूमिकाएँ"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,  
The Hiring Manager  
[Company Name]  
[Company Address]  
[City, State - PIN Code]

Subject: Application for Operations Position

Respected Sir/Madam,

I am writing to express my interest in the Operations position at your organization. With experience in process management, daily operations handling, coordination, and workflow optimization, I am confident in my ability to support your team effectively.

At my previous job at [Company Name], I ensured smooth day-to-day operations, monitored KPIs, coordinated with cross-functional departments, and contributed to improving efficiency by [X]%. I am adept at problem-solving and maintaining accuracy in high-pressure environments.

I believe my analytical mindset and commitment to timely execution make me a strong fit for this role. I would welcome the opportunity to contribute to your organization’s operational excellence.

Thank you for your consideration.

Sincerely,  
[Your Name]`,

        hi: `[आपका नाम]  
[आपका पता]  
[शहर, राज्य - पिन कोड]  
[आपका ईमेल]  
[आपका फोन नंबर]

तारीख: [DD/MM/YYYY]

सेवा में,  
हायरिंग मैनेजर  
[कंपनी का नाम]  
[कंपनी का पता]  
[शहर, राज्य - पिन कोड]

विषय: ऑपरेशंस पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके संगठन में ऑपरेशंस पद के लिए आवेदन करना चाहता/चाहती हूँ। प्रक्रिया प्रबंधन, दैनिक संचालन, समन्वय और वर्कफ़्लो अनुकूलन में अनुभव के आधार पर मैं आपकी टीम में महत्वपूर्ण योगदान दे सकता/सकती हूँ।

अपने पिछले संगठन [कंपनी का नाम] में, मैंने दैनिक संचालन को सुचारू रूप से संचालित किया, KPI मॉनिटर किए, विभिन्न विभागों के साथ समन्वय किया और दक्षता में [X]% सुधार में योगदान दिया। मैं तेज़-गति वाले वातावरण में सटीकता और समस्या-समाधान में कुशल हूँ।

मेरा विश्लेषणात्मक दृष्टिकोण और समय पर कार्य पूरा करने की क्षमता मुझे इस भूमिका के लिए उपयुक्त बनाती है।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    },

    // ----------------------------------------------------
    // 4. SALES / MARKETING JOB APPLICATION
    // ----------------------------------------------------
    {
      id: "salesMarketing",
      title: {
        en: "Sales / Marketing Job Application",
        hi: "सेल्स / मार्केटिंग नौकरी आवेदन"
      },
      description: {
        en: "Perfect for candidates applying to sales executive, marketing coordinator, or business development roles.",
        hi: "सेल्स एग्जीक्यूटिव, मार्केटिंग कोऑर्डिनेटर या बिजनेस डेवलपमेंट भूमिकाओं के लिए उपयुक्त।"
      },
      bestFor: {
        en: "BD, Sales, Marketing, Field Sales, Digital Marketing roles",
        hi: "बिजनेस डेवलपमेंट, सेल्स, मार्केटिंग, फील्ड सेल्स, डिजिटल मार्केटिंग"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,  
The Hiring Manager  
[Company Name]  
[Company Address]  
[City, State - PIN Code]

Subject: Application for Sales/Marketing Position

Respected Sir/Madam,

I am writing to apply for the Sales/Marketing position at your organization. With experience in lead generation, customer relationship management, marketing campaigns, and business development, I believe I can add value to your team.

In my previous role at [Company Name], I consistently achieved sales targets, managed client accounts, and contributed to revenue growth. I also supported online and offline marketing activities, including social media promotions, product presentations, and customer outreach.

My strengths include strong communication, negotiation, persuasive skills, and a goal-oriented work approach. I enjoy working in dynamic environments and building long-term customer relationships.

I look forward to the opportunity to contribute to your company's growth.

Sincerely,  
[Your Name]`,

        hi: `[आपका नाम]  
[आपका पता]  
[शहर, राज्य - पिन कोड]  
[आपका ईमेल]  
[आपका फोन नंबर]

तारीख: [DD/MM/YYYY]

सेवा में,  
हायरिंग मैनेजर  
[कंपनी का नाम]  
[कंपनी का पता]  
[शहर, राज्य - पिन कोड]

विषय: सेल्स/मार्केटिंग पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके संगठन में सेल्स/मार्केटिंग पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। लीड जनरेशन, ग्राहक संबंध प्रबंधन, मार्केटिंग कैंपेन और बिजनेस डेवलपमेंट में मिले अनुभव के आधार पर मैं आपकी टीम में प्रभावी योगदान दे सकता/सकती हूँ।

अपने पिछले संगठन [कंपनी का नाम] में, मैंने निरंतर सेल्स टार्गेट हासिल किए, क्लाइंट अकाउंट्स का प्रबंधन किया और राजस्व वृद्धि में योगदान दिया। इसके अतिरिक्त, मैंने ऑनलाइन और ऑफलाइन मार्केटिंग गतिविधियों में भी सक्रिय भूमिका निभाई, जैसे—सोशल मीडिया प्रमोशन, प्रोडक्ट प्रेजेंटेशन और ग्राहक संपर्क।

मेरी ताकतें हैं—सशक्त संचार कौशल, बातचीत एवं मनाने की क्षमता और लक्ष्य-उन्मुख कार्यशैली। मैं गतिशील वातावरण में काम करना और ग्राहकों के साथ दीर्घकालीन संबंध बनाना पसंद करता/करती हूँ।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।

भवदीय,  
[आपका नाम]`
      }
    }
  ],

  // ----------------------------------------------------
  // HOW TO WRITE SECTION
  // ----------------------------------------------------
  howToWrite: {
    title: {
      en: "Tips to Write a Perfect Corporate Job Application",
      hi: "एक आदर्श कॉर्पोरेट नौकरी आवेदन लिखने के टिप्स"
    },
    tips: [
      {
        text: {
          en: "Always customize your application to match the job role.",
          hi: "हमेशा नौकरी की भूमिका के अनुसार आवेदन को अनुकूलित करें।"
        }
      },
      {
        text: {
          en: "Highlight relevant work experience and measurable achievements.",
          hi: "संबंधित कार्य अनुभव और मापने योग्य उपलब्धियों को उजागर करें।"
        }
      },
      {
        text: {
          en: "Maintain a formal, polite and professional tone throughout the application.",
          hi: "पूरे आवेदन में औपचारिक, विनम्र और पेशेवर लहजा रखें।"
        }
      },
      {
        text: {
          en: "Keep the content clear, concise, and focused on the job.",
          hi: "सामग्री को स्पष्ट, संक्षिप्त और नौकरी पर केंद्रित रखें।"
        }
      },
      {
        text: {
          en: "Proofread for grammar and formatting before sending.",
          hi: "भेजने से पहले व्याकरण और फ़ॉर्मेटिंग की जांच अवश्य करें।"
        }
      }
    ]
  },

  // ----------------------------------------------------
  // RELATED TEMPLATES
  // ----------------------------------------------------
  relatedTemplates: [
    {
      title: {
        en: "Application for Office Job",
        hi: "ऑफिस नौकरी आवेदन"
      },
      description: {
        en: "Simple format for general office roles.",
        hi: "सामान्य ऑफिस नौकरियों के लिए सरल प्रारूप।"
      },
      icon: 'Briefcase',
      link: "/templates/office-job"
    },
    {
      title: {
        en: "Application for Internship",
        hi: "इंटर्नशिप के लिए आवेदन"
      },
      description: {
        en: "Ideal for students and freshers applying for internships.",
        hi: "इंटर्नशिप के लिए आवेदन करने वाले छात्रों के लिए उपयुक्त।"
      },
      icon: 'GraduationCap',
      link: "/templates/internship"
    },
    {
      title: {
        en: "Application for Business Development Role",
        hi: "बिजनेस डेवलपमेंट पद के लिए आवेदन"
      },
      description: {
        en: "Useful for BD, sales and client communication roles.",
        hi: "बीडी, सेल्स और क्लाइंट कम्युनिकेशन भूमिकाओं के लिए उपयोगी।"
      },
      icon: 'FileText',
      link: "/templates/business-development"
    }
  ],

  // ----------------------------------------------------
  // BLOG ARTICLES
  // ----------------------------------------------------
  blogArticles: [
    {
      title: {
        en: "How to Write a Corporate Job Application",
        hi: "कॉर्पोरेट नौकरी आवेदन कैसे लिखें"
      },
      excerpt: {
        en: "A complete guide to writing professional job applications for office and business roles.",
        hi: "ऑफिस और व्यापार भूमिकाओं के लिए पेशेवर आवेदन लिखने की पूरी गाइड।"
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/corporate-job-application"
    },
    {
      title: {
        en: "Important Skills for Corporate Jobs",
        hi: "कॉर्पोरेट नौकरियों के लिए महत्वपूर्ण कौशल"
      },
      excerpt: {
        en: "Learn the essential skills needed for HR, operations, and management roles.",
        hi: "एचआर, ऑपरेशंस और मैनेजमेंट भूमिकाओं के लिए आवश्यक कौशल जानें।"
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/corporate-skills"
    },
    {
      title: {
        en: "Common Mistakes in Job Applications",
        hi: "नौकरी आवेदनों में सामान्य गलतियाँ"
      },
      excerpt: {
        en: "Avoid these mistakes to increase your chances of selection.",
        hi: "चयन की संभावना बढ़ाने के लिए इन गलतियों से बचें।"
      },
      readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
      link: "/blog/job-application-mistakes"
    }
  ],

  // ----------------------------------------------------
  // FAQ SECTION
  // ----------------------------------------------------
  faqs: [
    {
      question: {
        en: "Which format is best for corporate job applications?",
        hi: "कॉर्पोरेट नौकरी आवेदनों के लिए कौन सा प्रारूप सबसे अच्छा है?"
      },
      answer: {
        en: "Choose a format that matches your role—Manager, HR, Operations, or Sales. Each template highlights relevant skills.",
        hi: "अपनी भूमिका—मैनेजर, एचआर, ऑपरेशंस या सेल्स—के अनुसार प्रारूप चुनें।"
      }
    },
    {
      question: {
        en: "Can I modify these templates for different companies?",
        hi: "क्या मैं इन टेम्पलेट्स को अलग-अलग कंपनियों के लिए बदल सकता हूँ?"
      },
      answer: {
        en: "Yes, simply change the company name, address, and job details to suit each role.",
        hi: "हाँ, कंपनी का नाम, पता और नौकरी विवरण बदलकर आप इन्हें आसानी से अनुकूलित कर सकते हैं।"
      }
    },
    {
      question: {
        en: "Should I add my resume along with the application?",
        hi: "क्या आवेदन के साथ रिज्यूमे जोड़ना चाहिए?"
      },
      answer: {
        en: "Yes, always attach an updated resume, experience letters, and certificates.",
        hi: "हाँ, हमेशा अपडेटेड रिज्यूमे, अनुभव पत्र और प्रमाणपत्र संलग्न करें।"
      }
    },
    {
      question: {
        en: "How long should a corporate job application be?",
        hi: "कॉर्पोरेट नौकरी आवेदन कितना लंबा होना चाहिए?"
      },
      answer: {
        en: "Ideally 1 page. Medium-length content works best for HR, Operations, Manager, and Sales roles.",
        hi: "आदर्श रूप से 1 पेज। मध्यम-लंबाई का कंटेंट इन भूमिकाओं के लिए सबसे अच्छा रहता है।"
      }
    }
  ]
};


// Subject: Application for Manager Position
// Subject: Application for Operations Position
// विषय: एचआर पद हेतु आवेदन
// विषय: मैनेजर पद हेतु आवेदन

