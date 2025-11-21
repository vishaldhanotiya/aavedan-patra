/**
 * SAMPLE TEMPLATE DETAIL DATA
 * Examples showing how the universal template detail page works for different categories
 */

export interface TemplateDetailData {
  // Basic Info
  title: { en: string; hi: string };
  category: { en: string; hi: string };
  categorySlug: string;
  subcategory: { en: string; hi: string };
  subcategorySlug: string;
  
  // Meta Info
  updatedAt: string;
  readingTime: string;
  views: string;
  
  // Description
  description: { en: string; hi: string };
  
  // Main Template Content
  templateContent: { en: string; hi: string };
  
  // Writing Tips
  tips: Array<{ en: string; hi: string }>;
  
  // Related Templates
  relatedTemplates: Array<{
    title: { en: string; hi: string };
    category: { en: string; hi: string };
    url: string;
  }>;
  
  // Related Blog Articles
  relatedBlogs: Array<{
    title: { en: string; hi: string };
    excerpt: { en: string; hi: string };
    readTime: string;
    url: string;
  }>;
  
  // FAQs
  faqs: Array<{
    question: { en: string; hi: string };
    answer: { en: string; hi: string };
  }>;
}
// Example 1: Job Application Template
export const jobApplicationTeacherTemplate: TemplateDetailData = {
  title: { 
    en: "Job Application for Teacher Position", 
    hi: "शिक्षक पद के लिए नौकरी आवेदन" 
  },
  category: { en: "Applications", hi: "आवेदन" },
  categorySlug: "applications",
  subcategory: { en: "Job Applications", hi: "नौकरी आवेदन" },
  subcategorySlug: "job",
  
  updatedAt: "November 15, 2025",
  readingTime: "5 min read",
  views: "42.5k",
  
  description: { 
    en: "A professional job application format for teaching positions in schools, colleges, and educational institutions. This template helps you present your qualifications, experience, and teaching skills effectively.", 
    hi: "स्कूलों, कॉलेजों और शैक्षणिक संस्थानों में शिक्षण पदों के लिए एक पेशेवर नौकरी आवेदन प्रारूप।" 
  },
  
  templateContent: {
    en: `To,
The Principal,
[School/College Name]
[Complete Address]
[City, State - PIN Code]

Date: [DD/MM/YYYY]

Subject: Application for the Post of [Subject] Teacher

Respected Sir/Madam,

I am writing to express my keen interest in the position of [Subject] Teacher at your esteemed institution, as advertised in [Newspaper Name/Website] on [Date].

I have completed my [Degree Name] from [University Name] with [Percentage/Grade]. I possess [X years] of teaching experience in [Previous School/Institution], where I successfully taught [Subjects] to students of classes [Class Range].

My teaching methodology focuses on:
• Interactive and engaging classroom sessions
• Practical application of theoretical concepts
• Individual attention to students' learning needs
• Regular assessment and feedback mechanisms

I am confident that my educational background, teaching experience, and passion for education make me an ideal candidate for this position. I am enthusiastic about contributing to the academic excellence of your institution.

I have enclosed the following documents for your consideration:
1. Updated Resume/CV
2. Educational Certificates
3. Experience Certificates
4. Identity Proof
5. Recent Passport Size Photographs

I would be grateful for an opportunity to discuss my application in a personal interview at your earliest convenience.

Thank you for considering my application. I look forward to your positive response.

Yours sincerely,

[Your Full Name]
[Your Contact Number]
[Your Email Address]
[Your Address]

Enclosures: As mentioned above`,
    hi: `सेवा में,
प्राचार्य महोदय/महोदया,
[स्कूल/कॉलेज का नाम]
[पूरा पता]
[शहर, राज्य - पिन कोड]

दिनांक: [दिन/महीना/वर्ष]

विषय: [विषय] शिक्षक के पद के लिए आवेदन

माननीय महोदय/महोदया,

मैं आपके प्रतिष्ठित संस्थान में [विषय] शिक्षक के पद के लिए अपनी गहरी रुचि व्यक्त करने के लिए लिख रहा/रही हूं, जैसा कि [समाचार पत्र का नाम/वेबसाइट] में [तारीख] को विज्ञापित किया गया था।

मैंने [विश्वविद्यालय का नाम] से [डिग्री का नाम] [प्रतिशत/ग्रेड] के साथ पूरा किया है। मैं [पिछले स्कूल/संस्थान] में [X वर्ष] का शिक्षण अनुभव रखता/रखती हूं।

मेरी शिक्षण पद्धति पर ध्यान केंद्रित करती है:
• इंटरैक्टिव और engaging कक्षा सत्र
• सैद्धांतिक अवधारणाओं का व्यावहारिक अनुप्रयोग
• छात्रों की सीखने की जरूरतों पर व्यक्तिगत ध्यान
• नियमित मूल्यांकन और प्रतिक्रिया तंत्र

मुझे विश्वास है कि मेरी शैक्षिक पृष्ठभूमि, शिक्षण अनुभव और शिक्षा के प्रति जुनून मुझे इस पद के लिए एक आदर्श उम्मीदवार बनाते हैं।

मैंने आपके विचार के लिए निम्नलिखित दस्तावेज संलग्न किए हैं:
1. अद्यतन रिज्यूमे/सीवी
2. शैक्षिक प्रमाण पत्र
3. अनुभव प्रमाण पत्र
4. पहचान प्रमाण
5. हाल ही की पासपोर्ट साइज फोटो

मैं आपकी सुविधानुसार व्यक्तिगत साक्षात्कार में अपने आवेदन पर चर्चा करने के अवसर के लिए आभारी रहूंगा/रहूंगी।

मेरे आवेदन पर विचार करने के लिए धन्यवाद। मैं आपकी सकारात्मक प्रतिक्रिया की प्रतीक्षा कर रहा/रही हूं।

भवदीय,

[आपका पूरा नाम]
[आपका संपर्क नंबर]
[आपका ईमेल पता]
[आपका पता]

संलग्नक: जैसा ऊपर उल्लेख किया गया है`
  },
  
  tips: [
    { 
      en: "Keep your tone formal and professional throughout the application", 
      hi: "पूरे आवेदन में अपना स्वर औपचारिक और पेशेवर रखें" 
    },
    { 
      en: "Clearly mention the specific teaching position and subject you're applying for", 
      hi: "स्पष्ट रूप से विशिष्ट शिक्षण पद और विषय का उल्लेख करें जिसके लिए आप आवेदन कर रहे हैं" 
    },
    { 
      en: "Highlight your relevant educational qualifications and teaching experience", 
      hi: "अपनी प्रासंगिक शैक्षिक योग्यता और शिक्षण अनुभव को उजागर करें" 
    },
    { 
      en: "Mention your teaching methodology and approach to student engagement", 
      hi: "अपनी शिक्षण पद्धति और छात्र जुड़ाव के लिए दृष्टिकोण का उल्लेख करें" 
    },
    { 
      en: "Include a list of enclosed documents for easy reference", 
      hi: "आसान संदर्भ के लिए संलग्न दस्तावेजों की सूची शामिल करें" 
    },
    { 
      en: "Proofread carefully to avoid spelling and grammatical errors", 
      hi: "वर्तनी और व्याकरण संबंधी त्रुटियों से बच���े के लिए सावधानीपूर्वक प्रूफरीड करें" 
    }
  ],
  
  relatedTemplates: [
    {
      title: { en: "Application for Principal Position", hi: "प्राचार्य पद के लिए आवेदन" },
      category: { en: "Job Applications", hi: "नौकरी आवेदन" },
      url: "/applications/job/principal-application"
    },
    {
      title: { en: "Application for Lecturer Post", hi: "व्याख्याता पद के लिए आवेदन" },
      category: { en: "Job Applications", hi: "नौकरी आवेदन" },
      url: "/applications/job/lecturer-application"
    },
    {
      title: { en: "Job Transfer Application", hi: "नौकरी स्थानांतरण आवेदन" },
      category: { en: "Job Applications", hi: "नौकरी आवेदन" },
      url: "/applications/job/transfer-application"
    }
  ],
  
  relatedBlogs: [
    {
      title: { 
        en: "How to Write a Perfect Job Application", 
        hi: "एक परफेक्ट नौकरी आवेदन कैसे लिखें" 
      },
      excerpt: { 
        en: "Learn the essential elements of a winning job application that gets you noticed by employers", 
        hi: "एक विजयी नौकरी आवेदन के आवश्यक तत्व सीखें जो आपको नियोक्ताओं द्वारा देखा जाए" 
      },
      readTime: "8 min read",
      url: "/blog/perfect-job-application"
    },
    {
      title: { 
        en: "Teaching Resume Tips for Freshers", 
        hi: "फ्रेशर्स के लिए शिक्षण रिज्यूमे सुझाव" 
      },
      excerpt: { 
        en: "Expert tips on crafting a compelling teaching resume when you're just starting your career", 
        hi: "जब आप अपना करियर शुरू कर रहे हों तो एक आकर्षक शिक्षण रिज्यूमे तैयार करने पर विशेषज्ञ सुझाव" 
      },
      readTime: "6 min read",
      url: "/blog/teaching-resume-tips"
    }
  ],
  
  faqs: [
    {
      question: { 
        en: "Can I use this template for any teaching position?", 
        hi: "क्या मैं इस टेम्पलेट का उपयोग किसी भी शिक्षण पद के लिए कर सकता हूं?" 
      },
      answer: { 
        en: "Yes, this template can be customized for any teaching position - from primary school teachers to college lecturers. Just modify the subject, qualifications, and experience sections according to your specific role.", 
        hi: "हां, इस टेम्पलेट को किसी भी शिक्षण पद के लिए अनुकूलित किया जा सकता है - प्राथमिक स्कूल के शिक्षकों से लेकर कॉलेज के व्याख्याताओं तक।" 
      }
    },
    {
      question: { 
        en: "Should I mention my expected salary in the application?", 
        hi: "क्या मुझे आवेदन में अपेक्षित वेतन का उल्लेख करना चाहिए?" 
      },
      answer: { 
        en: "It's generally not recommended to mention salary expectations in the initial application unless specifically asked. You can discuss salary during the interview stage.", 
        hi: "आम तौर पर प्रारंभिक आवेदन में वेतन अपेक्षाओं का उल्लेख करने की सिफारिश नहीं की जाती है जब तक कि विशेष रूप से नहीं कहा जाता है।" 
      }
    },
    {
      question: { 
        en: "How many documents should I attach with the application?", 
        hi: "मुझे आवेदन के साथ कितने दस्तावेज संलग्न करने चाहिए?" 
      },
      answer: { 
        en: "Typically, you should attach: resume/CV, educational certificates, experience letters (if any), identity proof, and 2 passport size photographs. Some institutions may require additional documents like a no-objection certificate from your current employer.", 
        hi: "आम तौर पर, आपको संलग्न करना चाहिए: रिज्यूमे/सीवी, शैक्षिक प्रमाण पत्र, अनुभव पत्र (यदि कोई हो), पहचान प्रमाण, और 2 पासपोर्ट साइज फोटो।" 
      }
    },
    {
      question: { 
        en: "Is it okay to send this application via email?", 
        hi: "क्या इस आवेदन को ईमेल के माध्यम से भेजना ठीक है?" 
      },
      answer: { 
        en: "Yes, email applications are widely accepted. Ensure you attach all documents as PDF files, write a brief cover email, and use a professional subject line like 'Application for [Subject] Teacher Position - [Your Name]'.", 
        hi: "हां, ईमेल आवेदन व्यापक रूप से स्वीकार किए जाते हैं। सुनिश्चित करें कि आप सभी दस्तावेज़ों को PDF फ़ाइलों के रूप में संलग्न करते हैं।" 
      }
    }
  ]
};

// Example 2: Complaint Letter Template
export const complaintLetterProductTemplate: TemplateDetailData = {
  title: { 
    en: "Complaint Letter for Defective Product", 
    hi: "दोषपूर्ण उत्पाद के लिए शिकायत पत्र" 
  },
  category: { en: "Letters", hi: "पत्र" },
  categorySlug: "letters",
  subcategory: { en: "Complaint Letters", hi: "शिकायत पत्र" },
  subcategorySlug: "complaint",
  
  updatedAt: "November 14, 2025",
  readingTime: "4 min read",
  views: "38.2k",
  
  description: { 
    en: "A professional complaint letter format for defective or damaged products. Use this template to formally request a replacement, refund, or compensation from sellers or manufacturers.", 
    hi: "दोषपूर्ण या क्षतिग्रस्त उत्पादों के लिए एक पेशेवर शिकायत पत्र प्रारूप।" 
  },
  
  templateContent: {
    en: `From:
[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Phone Number]
[Your Email]

Date: [DD/MM/YYYY]

To:
[Customer Service Manager]
[Company Name]
[Company Address]
[City, State - PIN Code]

Subject: Complaint Regarding Defective [Product Name] - Order ID: [Order Number]

Dear Sir/Madam,

I am writing to formally lodge a complaint regarding a [Product Name] that I purchased from your [Store/Website] on [Purchase Date]. The order ID is [Order Number] and the invoice number is [Invoice Number].

Issue Description:
Upon receiving and using the product, I discovered the following defects:
• [Describe the specific defect or issue]
• [Additional problems if any]
• [Impact on product functionality]

I have attached the following documents for your reference:
1. Purchase invoice/receipt
2. Product photographs showing the defect
3. Warranty card (if applicable)
4. Original packaging details

As per the consumer protection laws and your company's return/replacement policy, I am entitled to either:
1. A complete replacement of the defective product, OR
2. A full refund of the purchase amount

I have been a loyal customer of your brand for [X years/months] and have always appreciated your product quality. However, this experience has been disappointing, and I trust that you will resolve this matter promptly.

I request you to:
• Acknowledge this complaint within 48 hours
• Arrange for product pickup or return
• Process the replacement/refund within [timeframe as per policy]

I expect a written response to this complaint at the earliest. If this matter is not resolved satisfactorily within [reasonable timeframe], I will be compelled to escalate this complaint to the consumer forum.

Thank you for your immediate attention to this matter. I look forward to a quick and satisfactory resolution.

Yours sincerely,

[Your Signature]
[Your Name]
[Contact Number]

Enclosures: As mentioned above`,
    hi: `प्रेषक:
[आपका नाम]
[आपका पता]
[शहर, राज्य - पिन कोड]
[आपका फोन नंबर]
[आपका ईमेल]

दिनांक: [दिन/महीना/वर्ष]

सेवा में:
[ग्राहक सेवा प्रबंधक]
[कंपनी का नाम]
[कंपनी का पता]
[शहर, राज्य - पिन कोड]

विषय: दोषपूर्ण [उत्पाद का नाम] के संबंध में शिकायत - ऑर्डर आईडी: [ऑर्डर नंबर]

महोदय/महोदया,

मैं औपचारिक रूप से [उत्पाद का नाम] के बारे में शिकायत दर्ज करने के लिए लिख रहा/रही हूं जो मैंने [खरीद तिथि] को आपके [स्टोर/वेबसाइट] से खरीदा था।

समस्या विवरण:
उत्पाद प्राप्त करने और उपयोग करने पर, मैंने निम्नलिखित दोष पाए:
• [विशिष्ट दोष या समस्या का वर्णन करें]
• [अतिरिक्त समस्याएं यदि कोई हों]
• [उत्पाद कार्यक्षमता पर प्रभाव]

मैंने आपके संदर्भ के लिए निम्नलिखित दस्तावेज संलग्न किए हैं:
1. खरीद चालान/रसीद
2. दोष दिखाने वाली उत्पाद तस्वीरें
3. वारंटी कार्ड (यदि लागू हो)
4. मूल पैकेजिंग विवरण

उपभोक्ता संरक्षण कानूनों और आपकी कंपनी की वापसी/प्रतिस्थापन नीति के अनुसार, मैं या तो:
1. दोषपूर्ण उत्पाद का पूर्ण प्रतिस्थापन, या
2. खरीद राशि की पूर्ण वापसी

मैं [X वर्ष/महीने] से आपके ब्रांड का वफादार ग्राहक रहा हूं। हालांकि, यह अनुभव निराशाजनक रहा है।

मैं आपसे अनुरोध करता/करती हूं:
• 48 घंटों के भीतर इस शिकायत को स्वीकार करें
• उत्पाद पिकअप या वापसी की व्यवस्था करें
• प्रतिस्थापन/रिफंड प्रक्रिया पूर्ण करें

मैं इस शिकायत का लिखित जवाब जल्द से जल्द की उम्मीद करता/करती हूं।

भवदीय,

[आपके हस्ताक्षर]
[आपका नाम]
[संपर्क नंबर]

संलग्नक: जैसा ऊपर उल्लेख किया गया है`
  },
  
  tips: [
    { 
      en: "Maintain a professional and polite tone, even when expressing frustration", 
      hi: "निराशा व्यक्त करते समय भी पेशेवर और विनम्र लहजा बनाए रखें" 
    },
    { 
      en: "Include specific details: order number, purchase date, invoice number", 
      hi: "विशिष्ट विवरण शामिल करें: ऑर्डर नंबर, खरीद तिथि, चालान नंबर" 
    },
    { 
      en: "Clearly describe the defect or problem with evidence (photos, videos)", 
      hi: "सबूतों के साथ दोष या समस्या का स्पष्ट वर्णन करें (फोटो, वीडियो)" 
    },
    { 
      en: "State your desired resolution: replacement, refund, or compensation", 
      hi: "अपना वांछित समाधान बताएं: प्रतिस्थापन, रिफंड, या मुआवजा" 
    },
    { 
      en: "Set a reasonable timeframe for response and resolution", 
      hi: "प्रतिक्रिया और समाधान के लिए एक उचित समय सीमा निर्धारित करें" 
    },
    { 
      en: "Mention escalation to consumer forums only as a last resort", 
      hi: "उपभोक्ता मंचों में वृद्धि का उल्लेख केवल अंतिम उपाय के रूप में करें" 
    }
  ],
  
  relatedTemplates: [
    {
      title: { en: "Complaint Letter to Bank", hi: "बैंक को शिकायत पत्र" },
      category: { en: "Complaint Letters", hi: "शिकायत पत्र" },
      url: "/letters/complaint/bank-complaint"
    },
    {
      title: { en: "Complaint Letter for Poor Service", hi: "खराब सेवा के लिए शिकायत पत्र" },
      category: { en: "Complaint Letters", hi: "शिकायत पत्र" },
      url: "/letters/complaint/poor-service"
    },
    {
      title: { en: "Complaint Letter for Delayed Delivery", hi: "विलंबित डिलीवरी के लिए शिकायत पत्र" },
      category: { en: "Complaint Letters", hi: "शिकायत पत्र" },
      url: "/letters/complaint/delayed-delivery"
    }
  ],
  
  relatedBlogs: [
    {
      title: { 
        en: "Consumer Rights Every Shopper Should Know", 
        hi: "उपभोक्ता अधिकार जो हर खरीददार को पता होने चाहिए" 
      },
      excerpt: { 
        en: "Learn about your rights as a consumer and how to protect yourself from defective products and poor service", 
        hi: "एक उपभोक्ता के रूप में अपने अधिकारों के बारे में जानें और दोषपूर्ण उत्पादों से खुद को कैसे बचाएं" 
      },
      readTime: "7 min read",
      url: "/blog/consumer-rights"
    },
    {
      title: { 
        en: "How to File a Consumer Complaint Online", 
        hi: "ऑनलाइन उपभोक्ता शिकायत कैसे दर्ज करें" 
      },
      excerpt: { 
        en: "Step-by-step guide to filing consumer complaints through online portals and getting quick resolutions", 
        hi: "ऑनलाइन पोर्टलों के माध्यम से उपभोक्ता शिकायतें दर्ज करने के लिए चरण-दर-चरण गाइड" 
      },
      readTime: "6 min read",
      url: "/blog/file-consumer-complaint"
    }
  ],
  
  faqs: [
    {
      question: { 
        en: "What documents should I attach with a complaint letter?", 
        hi: "मुझे शिकायत पत्र के साथ कौन से दस्तावेज संलग्न करने चाहिए?" 
      },
      answer: { 
        en: "Always attach: purchase invoice/receipt, product photographs showing defects, warranty card (if applicable), and any communication with customer service. These documents strengthen your complaint.", 
        hi: "हमेशा संलग्न करें: खरीद चालान/रसीद, दोष दिखाने वाली उत्पाद तस्वीरें, वारंटी कार्ड, और ग्राहक सेवा के साथ कोई भी संचार।" 
      }
    },
    {
      question: { 
        en: "How long should I wait for a response?", 
        hi: "मुझे प्रतिक्रिया के लिए कितना समय इंतजार करना चाहिए?" 
      },
      answer: { 
        en: "Most companies respond within 48-72 hours for complaint acknowledgment. Resolution typically takes 7-14 business days depending on the issue. If there's no response within this timeframe, follow up or escalate.", 
        hi: "अधिकांश कंपनियां शिकायत स्वीकृति के लिए 48-72 घंटों के भीतर जवाब देती हैं। समाधान आमतौर पर 7-14 व्यावसायिक दिन लगता है।" 
      }
    },
    {
      question: { 
        en: "Can I request both replacement and refund?", 
        hi: "क्या मैं प्रतिस्थापन और रिफंड दोनों का अनुरोध कर सकता हूं?" 
      },
      answer: { 
        en: "You should choose one: either replacement OR refund. However, you can mention that if replacement is not possible, you prefer a refund. Be clear about your primary preference.", 
        hi: "आपको एक चुनना चाहिए: या तो प्रतिस्थापन या रिफंड। हालांकि, आप उल्लेख कर सकते हैं कि यदि प्रतिस्थापन संभव नहीं है, तो आप रिफंड पसंद करते हैं।" 
      }
    },
    {
      question: { 
        en: "What if the company doesn't respond to my complaint?", 
        hi: "यदि कंपनी मेरी शिकायत का जवाब नहीं देती है तो क्या होगा?" 
      },
      answer: { 
        en: "If there's no satisfactory response within a reasonable time (usually 30 days), you can file a complaint with the consumer forum or consumer helpline (1800-11-4000 in India). Keep all documentation ready.", 
        hi: "यदि उचित समय (आमतौर पर 30 दिन) के भीतर कोई संतोषजनक प्रतिक्रिया नहीं मिलती है, तो आप उपभोक्ता मंच या उपभोक्ता हेल्पलाइन (भारत में 1800-11-4000) में शिकायत दर्ज कर सकते हैं।" 
      }
    }
  ]
};

// Export all sample templates
export const allSampleTemplateDetails = {
  jobApplicationTeacher: jobApplicationTeacherTemplate,
  complaintLetterProduct: complaintLetterProductTemplate,
};
