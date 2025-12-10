
export const businessMeetingInvitationTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र",slug:"/letters"  },
    subcategory: { en: "Invitation Letters", hi: "निमंत्रण पत्र",slug:"/letters/invitation"  },
    template: { en: "Formal Invitation Letters", hi: "औपचारिक निमंत्रण पत्र",slug:""  }
  },

  title: { 
    en: "Invitation Application Letters", 
    hi: "निमंत्रण आवेदन पत्र" 
  },

  subtitle: { 
    en: "Formal and informal invitation formats including event invitations, business meetings, weddings, birthdays, seminars, and guest speaker invitations.",
    hi: "कार्यक्रम, व्यवसायिक बैठक, शादी, जन्मदिन, सेमिनार और अतिथि वक्ता निमंत्रण के लिए औपचारिक और अनौपचारिक पत्र प्रारूप।"
  },

  category: { 
    en: "Invitation Letters", 
    hi: "निमंत्रण पत्र" 
  },

  updatedDate: "January 2025",

  variations: [
    // 2. Business Meeting Invitation
    {
      id: "businessMeetingInvitation",
      title: { en: "Business Meeting Invitation", hi: "व्यावसायिक बैठक निमंत्रण" },
      description: {
        en: "Professional letter for inviting clients or team members to a business meeting.",
        hi: "क्लाइंट या टीम सदस्यों को व्यावसायिक बैठक में आमंत्रित करने हेतु।"
      },
      bestFor: { en: "Corporate meetings", hi: "कॉरपोरेट बैठकों" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },
      content: {
        en: `To,
[Name]
[Company]

Subject: Invitation for Business Meeting

Respected Sir/Madam,

We would like to invite you to a business meeting scheduled on [Date/Time] at [Venue]. The purpose of the meeting is to discuss [Agenda Details].

Your insights and participation will be valuable for the discussion. Kindly confirm your availability.

Regards,
[Your Name]`,

        hi: `सेवा में,
[नाम]
[कंपनी]

विषय: व्यावसायिक बैठक हेतु निमंत्रण

महोदय/महोदया,

हम आपको [Date/Time] को [Venue] में निर्धारित व्यावसायिक बैठक में सम्मिलित होने हेतु आमंत्रित करते हैं। बैठक का उद्देश्य [एजेंडा विवरण] पर चर्चा करना है।

आपकी उपस्थिति और सुझाव बैठक के लिए महत्वपूर्ण होंगे। कृपया अपनी उपलब्धता की पुष्टि करें।

सादर,
[आपका नाम]`
      }
    },
  ],

  howToWrite: {
    title: { en: "How to Write an Invitation Letter", hi: "निमंत्रण पत्र कैसे लिखें" },
    tips: [
      { text: { en: "Keep the tone warm and respectful.", hi: "लहजा गर्मजोशी और सम्मानपूर्ण रखें।" } },
      { text: { en: "Mention the date, time, and venue clearly.", hi: "तिथि, समय और स्थान स्पष्ट रूप से लिखें।" } },
      { text: { en: "Explain the purpose of invitation.", hi: "निमंत्रण का उद्देश्य बताएं।" } },
      { text: { en: "Request confirmation or RSVP.", hi: "उपस्थिति की पुष्टि (RSVP) का अनुरोध करें।" } },
      { text: { en: "Be concise and polite.", hi: "संक्षिप्त और विनम्र रहें।" } }
    ]
  },

  relatedTemplates: [
    {
      title: { en: "Function Invitation Letter", hi: "कार्यक्रम निमंत्रण पत्र" },
      description: { en: "Useful for cultural or social events.", hi: "सांस्कृतिक या सामाजिक कार्यक्रमों के लिए उपयोगी।" },
      icon: 'FileText',
      link: "/templates/function-invitation"
    },
    {
      title: { en: "RSVP Email Format", hi: "RSVP ईमेल प्रारूप" },
      description: { en: "For confirming invitations.", hi: "निमंत्रण की पुष्टि के लिए।" },
      icon: 'Briefcase',
      link: "/templates/rsvp-email"
    }
  ],

  blogArticles: [
    {
      title: { en: "Tips for Writing Perfect Invitation Letters", hi: "सही निमंत्रण पत्र लिखने के सुझाव" },
      excerpt: { en: "Simple rules for formal and informal invites.", hi: "औपचारिक और अनौपचारिक निमंत्रणों के सरल नियम।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-invitation"
    },
    {
      title: { en: "How to Format RSVP Responses", hi: "RSVP प्रतिक्रिया कैसे लिखें" },
      excerpt: { en: "Learn the correct way to respond to invitations.", hi: "निमंत्रणों का सही जवाब देना सीखें।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/rsvp-guide"
    }
  ],

  faqs: [
    {
      question: { en: "Should I include dress code?", hi: "क्या मुझे ड्रेस कोड शामिल करना चाहिए?" },
      answer: { en: "Yes, if the event requires it.", hi: "हाँ, यदि कार्यक्रम में आवश्यक हो।" }
    },
    {
      question: { en: "Are invitation letters formal or informal?", hi: "क्या निमंत्रण पत्र औपचारिक होते हैं या अनौपचारिक?" },
      answer: { en: "Depends on the event—business events are formal, parties are informal.", hi: "कार्यक्रम पर निर्भर करता है—व्यावसायिक कार्यक्रम औपचारिक, पार्टियाँ अनौपचारिक।" }
    },
    {
      question: { en: "Should I ask for RSVP?", hi: "क्या मुझे RSVP माँगना चाहिए?" },
      answer: { en: "Yes, it helps in planning the event.", hi: "हाँ, इससे कार्यक्रम की तैयारी में मदद मिलती है।" }
    }
  ]
};
