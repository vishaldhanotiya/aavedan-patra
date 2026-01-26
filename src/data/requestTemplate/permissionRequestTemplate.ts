
export const permissionRequestTemplate = {
  breadcrumb: {
    category: { en: "Letters", hi: "पत्र" , slug:"/letters"},
    subcategory: { en: "Request Letters", hi: "अनुरोध पत्र", slug:"/letters/request" },
    template: { en: "Official Request Letters", hi: "आधिकारिक अनुरोध पत्र", slug:"" }
  },

  title: { 
    en: "Request Application Letters", 
    hi: "अनुरोध आवेदन पत्र" 
  },

  subtitle: { 
    en: "Professional formats for permission, information, meetings, sponsorship, donation, and recommendation requests.",
    hi: "अनुमति, जानकारी, बैठक, प्रायोजन, दान और सिफारिश के अनुरोध हेतु पेशेवर प्रारूप।" 
  },

  category: { 
    en: "Request Letters", 
    hi: "अनुरोध पत्र" 
  },

  updatedDate: "January 2025",

  variations: [
    {
      id: "permissionRequest",
      title: { en: "Permission Request Letter", hi: "अनुमति हेतु अनुरोध पत्र" },
      description: {
        en: "For requesting permission from authorities, principal, manager, or organization.",
        hi: "अधिकारियों, प्राचार्य, प्रबंधक या संस्था से अनुमति हेतु अनुरोध।"
      },
      bestFor: { en: "Leave, event, activity permission", hi: "छुट्टी, कार्यक्रम, गतिविधि अनुमति" },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,
The Principal
[School Name]
[School Address]

Subject: Request for Permission to Conduct (Name of Event) on (Date)

Respected Sir/Madam,

With due respect, I, (Your Full Name), (Your Designation) at (Organization Name), on behalf of our organization, humbly submit this request seeking permission to conduct a (Name of Event) on (Day, Date) from (Start Time) to (End Time) in the (Venue).

We wish to inform you that prior approval has already been obtained from (Name of Class Teacher / HOD).

The objective of this event is to (brief purpose — e.g., promote scientific curiosity / enhance learning / develop skills)among students through (activities such as demonstrations, workshops, etc.).

Event Highlights:
  1. (Brief description of event / organizer)
  2. Participation of approximately (number) students from (Classes / Grades)
  3. (Key activity – e.g., live demonstrations / workshops) conducted by (experts/trainers)
  4. (Certificates / kits / awards) for all participants

The event will be conducted (free of cost / at nominal charges) under (CSR initiative / school program, if applicable)

We assure you that the programme will be conducted in a disciplined and orderly manner without causing any disruption to regular academic activities. Our trained staff will supervise the entire event, and the organization shall take full responsibility for safety and management of any unforeseen situations. Proper cleanup will be ensured after the event, and a detailed event report along with photographs will be submitted within (number) days. We further confirm that there will be no financial obligation on the part of the school.

We therefore humbly request your kind approval to conduct the above-mentioned event. We shall be highly obliged for your favorable consideration.

Thanking you.

Yours sincerely,
[Signature]

(Your Full Name)
(Designation)
(Organization Name)
Contact: (Phone Number)
Email: (Email ID)
Website: (Website, optional)

Enclosures:
1. (Company/Organization Profile)
2. (Event Agenda)
3. (Sample Certificates, if any)
4. (Past Event Photographs, if any)`,

        hi: `प्रति,
प्रधानाचार्य महोदय/महोदया
[विद्यालय का नाम]
[विद्यालय का पता]

विषय: (कार्यक्रम का नाम) दिनांक (तारीख) को आयोजित करने हेतु अनुमति

महोदय/महोदया,

सविनय निवेदन है कि मैं (आपका पूरा नाम), (आपका पद), (संस्था का नाम) की ओर से यह प्रार्थना पत्र प्रस्तुत कर रहा/रही हूँ कि दिनांक (दिन, तारीख) को (प्रारंभ समय) से (समाप्ति समय) तक (स्थान) में (कार्यक्रम का नाम) आयोजित करने की अनुमति प्रदान करने की कृपा करें।

सूचित करना है कि इस कार्यक्रम हेतु (कक्षा अध्यापक / विभागाध्यक्ष का नाम) से पूर्व अनुमति प्राप्त कर ली गई है।

इस कार्यक्रम का उद्देश्य विद्यार्थियों में (संक्षिप्त उद्देश्य – जैसे वैज्ञानिक जिज्ञासा बढ़ाना / सीखने को प्रोत्साहित करना / कौशल विकास) को बढ़ावा देना है, जिसके अंतर्गत (गतिविधियाँ – जैसे प्रदर्शन, कार्यशाला आदि) आयोजित की जाएँगी।

कार्यक्रम की मुख्य विशेषताएँ:
  1. (कार्यक्रम/आयोजक का संक्षिप्त विवरण)
  2. (कक्षा/श्रेणी) के लगभग (संख्या) विद्यार्थियों की सहभागिता
  3. (मुख्य गतिविधि – जैसे लाइव डेमो / कार्यशाला) (विशेषज्ञों/प्रशिक्षकों) द्वारा
  4. सभी प्रतिभागियों को (प्रमाण पत्र / किट / पुरस्कार)
  5. कार्यक्रम (निःशुल्क / नाममात्र शुल्क) पर (CSR पहल / विद्यालय कार्यक्रम) के अंतर्गत आयोजित किया जाएगा

हम आपको आश्वस्त करते हैं कि कार्यक्रम पूर्ण अनुशासन एवं सुव्यवस्थित तरीके से आयोजित किया जाएगा तथा नियमित शैक्षणिक गतिविधियों में कोई बाधा नहीं आएगी। हमारी प्रशिक्षित टीम पूरे कार्यक्रम की निगरानी करेगी तथा किसी भी अप्रत्याशित स्थिति की पूर्ण जिम्मेदारी संस्था की होगी। कार्यक्रम के पश्चात उचित स्वच्छता सुनिश्चित की जाएगी तथा (दिनों की संख्या) दिनों के भीतर कार्यक्रम रिपोर्ट एवं फोटो प्रस्तुत किए जाएंगे। विद्यालय पर किसी प्रकार का कोई आर्थिक भार नहीं पड़ेगा।

अतः आपसे विनम्र अनुरोध है कि कृपया उपरोक्त कार्यक्रम आयोजित करने की अनुमति प्रदान करें। इसके लिए हम आपके आभारी रहेंगे।

धन्यवाद सहित।

भवदीय,
[हस्ताक्षर]
(आपका पूरा नाम)
(पद)
(संस्था का नाम)
संपर्क: (मोबाइल नंबर)
ईमेल: (ईमेल आईडी)
वेबसाइट: (वैकल्पिक)

संलग्नक:
1. (संस्था प्रोफ़ाइल)
2. (कार्यक्रम एजेंडा)
3. (नमूना प्रमाण पत्र, यदि हों)
4. (पूर्व कार्यक्रमों की तस्वीरें, यदि हों)`
      }
    }
  ],

  howToWrite: {
    title: { en: "How to Write a Request Letter", hi: "अनुरोध पत्र कैसे लिखें" },
    tips: [
      { text: { en: "Be polite and respectful.", hi: "विनम्र और सम्मानजनक रहें।" } },
      { text: { en: "State the purpose clearly.", hi: "उद्देश्य स्पष्ट रूप से लिखें।" } },
      { text: { en: "Keep the letter short and professional.", hi: "पत्र को छोटा और पेशेवर रखें।" } },
      { text: { en: "Include necessary details and dates.", hi: "आवश्यक विवरण और तिथि शामिल करें।" } },
      { text: { en: "Thank the recipient at the end.", hi: "अंत में प्राप्तकर्ता को धन्यवाद दें।" } }
    ]
  },

  relatedTemplates: [
    {
      title: { en: "Approval Request Letter", hi: "अनुमोदन हेतु अनुरोध पत्र" },
      description: { en: "For requesting official approval.", hi: "आधिकारिक अनुमोदन हेतु अनुरोध।" },
      icon: 'FileText',
      link: "/templates/approval-request"
    },
    {
      title: { en: "Official Email Request Format", hi: "आधिकारिक ईमेल अनुरोध प्रारूप" },
      description: { en: "For professional email requests.", hi: "पेशेवर ईमेल अनुरोध हेतु प्रारूप।" },
      icon: 'Briefcase',
      link: "/templates/request-email"
    }
  ],

  blogArticles: [
    {
      title: { en: "How to Write a Professional Request Letter", hi: "पेशेवर अनुरोध पत्र कैसे लिखें" },
      excerpt: { en: "A guide to writing formal request applications.", hi: "औपचारिक अनुरोध पत्र लिखने की गाइड।" },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/write-request-letter"
    },
    {
      title: { en: "Common Mistakes in Formal Letters", hi: "औपचारिक पत्रों में आम गलतियाँ" },
      excerpt: { en: "Avoid these errors when writing requests.", hi: "अनुरोध पत्र लिखते समय इन गलतियों से बचें।" },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/formal-letter-mistakes"
    }
  ],

  faqs: [
    {
      question: { en: "Should request letters be short?", hi: "क्या अनुरोध पत्र छोटा होना चाहिए?" },
      answer: { en: "Yes, keep them brief and to the point.", hi: "हाँ, उन्हें संक्षिप्त और सीधा रखें।" }
    },
    {
      question: { en: "Can I email a request letter?", hi: "क्या मैं अनुरोध पत्र ईमेल कर सकता/सकती हूँ?" },
      answer: { en: "Yes, most institutions accept email requests.", hi: "हाँ, अधिकांश संस्थाएँ ईमेल अनुरोध स्वीकार करती हैं।" }
    },
    {
      question: { en: "Should I attach documents?", hi: "क्या मुझे दस्तावेज संलग्न करने चाहिए?" },
      answer: { en: "Yes, if required for verification.", hi: "हाँ, यदि सत्यापन के लिए आवश्यक हो।" }
    }
  ]
};
