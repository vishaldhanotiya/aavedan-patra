export const donationRequestTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र", slug: "/letters" },
    subcategory: {
      en: "Request Letters",
      hi: "अनुरोध पत्र",
      slug: "/letters/request",
    },
    template: {
      en: "Donation Request Letters",
      hi: "दान हेतु अनुरोध पत्र",
      slug: "",
    },
  },

  title: {
    en: "Donation Request Letters",
    hi: "दान हेतु आवेदन पत्र",
  },

  subtitle: {
    en: "For requesting donations for social, educational, medical, or charity causes.",
    hi: "सामाजिक, शैक्षणिक, चिकित्सा या चैरिटी उद्देश्यों हेतु दान अनुरोध।",
  },

  category: {
    en: "Request Letters",
    hi: "अनुरोध पत्र",
  },

  pageMetaData: {
    author: "Vishal Dhanotiya",
    updatedAt: "January 2025",
    views: "1200",
    likes: "85",
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "donationRequest",
      title: { en: "Donation Request Letter", hi: "दान हेतु अनुरोध पत्र" },
      description: {
        en: "For requesting donations for social, educational, medical, or charity causes.",
        hi: "सामाजिक, शैक्षणिक, चिकित्सा या चैरिटी उद्देश्यों हेतु दान अनुरोध।",
      },
      bestFor: {
        en: "NGOs, students, medical help",
        hi: "एनजीओ, छात्र, चिकित्सा सहायता",
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `From:
[Your Name]
[Your Organization / Address]
[City, State]
[Contact Number]
[Email]

Date: [DD/MM/YYYY]

To:
[Donor’s Name / Organization]
[Address]

Subject: Request for Donation to Support [Cause / Program Name]

Respected Sir/Madam,

I hope this letter finds you well. I am writing to kindly request your support through a donation for [briefly mention cause – e.g., education for underprivileged children / medical aid / community development].

Our organization, [Organization Name], has been actively working towards [short description of work]. With your generous contribution, we will be able to [explain how the funds will help] and positively impact many lives.

Any amount you are able to contribute will be deeply appreciated. Your support will help us continue our mission and bring meaningful change to the community.

Donation details are provided below:
Bank Name: [Bank Name]
Account Name: [Name]
Account Number: [XXXX]
IFSC Code: [XXXX]
UPI (if any): [XXXX]

We would be grateful for your kindness and support. Please feel free to contact us for any additional information.

Thank you for your time and generosity.

Sincerely,
[Your Name]
[Designation]
[Organization Name]
[Phone Number]`,

        hi: `प्रेषक:
[आपका नाम]
[संस्था / पता]
[शहर, राज्य]
[मोबाइल नंबर]

दिनांक: [DD/MM/YYYY]

प्रति,
[दाता का नाम / संस्था]
[पता]

विषय: [कार्य / उद्देश्य] हेतु दान प्रदान करने के संबंध में आवेदन

महोदय/महोदया,

सविनय निवेदन है कि हमारी संस्था [संस्था का नाम] द्वारा [उद्देश्य – जैसे गरीब बच्चों की शिक्षा / चिकित्सा सहायता / सामाजिक विकास] के लिए कार्य किया जा रहा है।

इस कार्य को आगे बढ़ाने हेतु हमें आपके सहयोग की आवश्यकता है। आपके द्वारा दिया गया दान अनेक जरूरतमंद लोगों के जीवन में सकारात्मक बदलाव ला सकता है।

आपकी सुविधा हेतु दान का विवरण नीचे दिया गया है:
बैंक का नाम: [ ]
खाता नाम: [ ]
खाता संख्या: [ ]
IFSC कोड: [ ]
UPI (यदि हो): [ ]

आपके सहयोग के लिए हम सदैव आभारी रहेंगे। किसी भी जानकारी के लिए आप हमसे संपर्क कर सकते हैं।

धन्यवाद।

भवदीय,
[आपका नाम]
[पद]
[संस्था का नाम]
[मोबाइल नंबर]`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "How to Write a Request Letter",
      hi: "अनुरोध पत्र कैसे लिखें",
    },
    tips: [
      {
        text: {
          en: "Be polite and respectful.",
          hi: "विनम्र और सम्मानजनक रहें।",
        },
      },
      {
        text: {
          en: "State the purpose clearly.",
          hi: "उद्देश्य स्पष्ट रूप से लिखें।",
        },
      },
      {
        text: {
          en: "Keep the letter short and professional.",
          hi: "पत्र को छोटा और पेशेवर रखें।",
        },
      },
      {
        text: {
          en: "Include necessary details and dates.",
          hi: "आवश्यक विवरण और तिथि शामिल करें।",
        },
      },
      {
        text: {
          en: "Thank the recipient at the end.",
          hi: "अंत में प्राप्तकर्ता को धन्यवाद दें।",
        },
      },
    ],
  },

  relatedTemplates: [
    {
      title: { en: "Approval Request Letter", hi: "अनुमोदन हेतु अनुरोध पत्र" },
      description: {
        en: "For requesting official approval.",
        hi: "आधिकारिक अनुमोदन हेतु अनुरोध।",
      },
      icon: "FileText",
      link: "/templates/approval-request",
    },
    {
      title: {
        en: "Official Email Request Format",
        hi: "आधिकारिक ईमेल अनुरोध प्रारूप",
      },
      description: {
        en: "For professional email requests.",
        hi: "पेशेवर ईमेल अनुरोध हेतु प्रारूप।",
      },
      icon: "Briefcase",
      link: "/templates/request-email",
    },
  ],

  blogArticles: [
    {
      title: {
        en: "How to Write a Donation Request Letter",
        hi: "दान अनुरोध पत्र कैसे लिखें",
      },
      excerpt: {
        en: "Step-by-step guide to writing an effective donation request letter.",
        hi: "प्रभावी दान अनुरोध पत्र लिखने की चरणबद्ध गाइड।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-donation-request-letter",
    },
    {
      title: {
        en: "Common Mistakes in Donation Request Letters",
        hi: "दान अनुरोध पत्रों में आम गलतियाँ",
      },
      excerpt: {
        en: "Avoid these common mistakes while requesting donations formally.",
        hi: "औपचारिक रूप से दान मांगते समय इन सामान्य गलतियों से बचें।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/donation-letter-mistakes",
    },
  ],

  faqs: [
    {
      question: {
        en: "What is a donation request letter?",
        hi: "दान अनुरोध पत्र क्या है?",
      },
      answer: {
        en: "A donation request letter is a formal letter written to individuals or organizations asking for financial or material support.",
        hi: "दान अनुरोध पत्र एक औपचारिक पत्र है जिसे व्यक्तियों या संगठनों से आर्थिक या वस्तुगत सहायता प्राप्त करने के लिए लिखा जाता है।",
      },
    },
    {
      question: {
        en: "Should a donation request letter be short?",
        hi: "क्या दान अनुरोध पत्र छोटा होना चाहिए?",
      },
      answer: {
        en: "Yes, it should clearly explain the purpose and request in a concise manner.",
        hi: "हाँ, इसमें उद्देश्य और अनुरोध को संक्षिप्त और स्पष्ट रूप से बताया जाना चाहिए।",
      },
    },
    {
      question: {
        en: "Can I send a donation request letter by email?",
        hi: "क्या मैं दान अनुरोध पत्र ईमेल द्वारा भेज सकता/सकती हूँ?",
      },
      answer: {
        en: "Yes, many organizations and donors accept donation requests through email.",
        hi: "हाँ, कई संगठन और दाता ईमेल के माध्यम से दान अनुरोध स्वीकार करते हैं।",
      },
    },
    {
      question: {
        en: "Should I attach supporting documents with a donation request letter?",
        hi: "क्या मुझे दान अनुरोध पत्र के साथ सहायक दस्तावेज संलग्न करने चाहिए?",
      },
      answer: {
        en: "Yes, attaching supporting documents helps establish trust and verify the purpose of the donation.",
        hi: "हाँ, सहायक दस्तावेज संलग्न करने से विश्वास बढ़ता है और दान के उद्देश्य का सत्यापन होता है।",
      },
    },
    {
      question: {
        en: "Who can write a donation request letter?",
        hi: "दान अनुरोध पत्र कौन लिख सकता है?",
      },
      answer: {
        en: "Individuals, NGOs, schools, charities, and organizations can write donation request letters.",
        hi: "व्यक्ति, एनजीओ, स्कूल, चैरिटी और संगठन दान अनुरोध पत्र लिख सकते हैं।",
      },
    },
  ],
};
