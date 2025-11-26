/**
 * SAMPLE EDITOR TEMPLATE DATA
 * Example data for Template Editor Modal
 */

export const teacherApplicationEditorData = {
  templateTitle: {
    en: "Job Application for Teacher",
    hi: "शिक्षक के लिए नौकरी आवेदन",
  },
  variations: [
    {
      id: "general",
      title: {
        en: "General Teacher Application",
        hi: "सामान्य शिक्षक आवेदन",
      },
      content: `[yourName]
[yourAddress]
[yourCity]
[yourEmail]
[yourPhone]

Date: [date]

To,
The Principal
[schoolName]
[schoolAddress]
[schoolCity]

Subject: [subject]

[greeting],

[bodyText]

I am confident that my [qualification] and passion for teaching will make me a valuable addition to your institution. I have attached my resume for your review and would welcome the opportunity to discuss my application in person.

Thank you for considering my application. I look forward to hearing from you.

Yours sincerely,
[signatureName]

Enclosures:
1. Resume
2. Educational Certificates
3. Experience Letters`,
      fields: [
        {
          id: "yourName",
          label: { en: "Your Name", hi: "आपका नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
        },
        {
          id: "yourAddress",
          label: { en: "Your Address", hi: "आपका पता" },
          type: "text" as const,
          placeholder: { en: "123 Main Street", hi: "123 मेन स्ट्रीट" },
          defaultValue: "",
        },
        {
          id: "yourCity",
          label: { en: "Your City & PIN", hi: "आपका शहर और पिन" },
          type: "text" as const,
          placeholder: { en: "New Delhi - 110001", hi: "नई दिल्ली - 110001" },
          defaultValue: "",
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text" as const,
          placeholder: {
            en: "john.smith@email.com",
            hi: "john.smith@email.com",
          },
          defaultValue: "",
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone Number", hi: "आपका फोन नंबर" },
          type: "text" as const,
          placeholder: { en: "+91 98765 43210", hi: "+91 98765 43210" },
          defaultValue: "",
        },
        {
          id: "date",
          label: { en: "Date", hi: "तारीख" },
          type: "date" as const,
          placeholder: { en: "DD/MM/YYYY", hi: "DD/MM/YYYY" },
          tooltip: {
            en: "Date of application submission",
            hi: "आवेदन जमा करने की तारीख",
          },
        },
        {
          id: "schoolName",
          label: { en: "School Name", hi: "स्कूल का नाम" },
          type: "text" as const,
          placeholder: {
            en: "ABC International School",
            hi: "ABC इंटरनेशनल स्कूल",
          },
          defaultValue: "",
          required: true,
          tooltip: {
            en: "Name of the school you're applying to",
            hi: "जिस स्कूल में आप आवेदन कर रहे हैं उसका नाम",
          },
        },
        {
          id: "schoolAddress",
          label: { en: "School Address", hi: "स्कूल का पता" },
          type: "text" as const,
          placeholder: { en: "456 School Road", hi: "456 स्कूल रोड" },
          defaultValue: "",
        },
        {
          id: "schoolCity",
          label: { en: "School City & PIN", hi: "स्कूल शहर और पिन" },
          type: "text" as const,
          placeholder: { en: "Mumbai - 400001", hi: "मुंबई - 400001" },
          defaultValue: "",
        },
        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text" as const,
          placeholder: {
            en: "Application for the Position of Teacher",
            hi: "शिक्षक पद के लिए आवेदन",
          },
          defaultValue: "Application for the Position of Teacher",
          tooltip: {
            en: "Brief description of your application purpose",
            hi: "आपके आवेदन उद्देश्य का संक्षिप्त विवरण",
          },
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text" as const,
          placeholder: { en: "Respected Sir/Madam", hi: "आदरणीय महोदय/महोदया" },
          defaultValue: "Respected Sir/Madam",
        },
        {
          id: "bodyText",
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          type: "textarea" as const,
          placeholder: {
            en: "I am writing to express my interest in the teaching position at your esteemed institution. I have recently completed my B.Ed. from XYZ University and am eager to begin my teaching career.",
            hi: "मैं आपकी प्रतिष्ठित संस्था में शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं।",
          },
          defaultValue:
            "I am writing to express my interest in the teaching position at your esteemed institution. I have recently completed my B.Ed. from XYZ University and am eager to begin my teaching career.",
          tooltip: {
            en: "Main content of your application letter",
            hi: "आपके आवेदन पत्र की मुख्य सामग्री",
          },
        },
        {
          id: "qualification",
          label: { en: "Your Qualification", hi: "आपकी योग्यता" },
          type: "text" as const,
          placeholder: { en: "B.Ed. degree", hi: "B.Ed. डिग्री" },
          defaultValue: "B.Ed. degree",
          tooltip: {
            en: "Your educational qualification",
            hi: "आपकी शैक्षिक योग्यता",
          },
        },
        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
        },
      ],
    },
    {
      id: "experienced",
      title: {
        en: "Experienced Teacher Application",
        hi: "अनुभवी शिक्षक आवेदन",
      },
      content: `[yourName]
[yourAddress]
[yourCity]
[yourEmail]
[yourPhone]

Date: [date]

To,
The Principal
[schoolName]
[schoolAddress]
[schoolCity]

Subject: [subject]

[greeting],

[bodyText]

Professional Experience:
• Taught [subject] to classes [grades] for [years] years
• [achievement]
• [additionalInfo]

I am confident that my [years] years of teaching experience and proven track record will make me a valuable addition to your institution.

Thank you for considering my application. I look forward to the possibility of contributing to your school's continued success.

Yours sincerely,
[signatureName]

Enclosures:
1. Detailed Resume
2. Experience Certificates
3. Academic Qualifications
4. Letters of Recommendation`,
      fields: [
        {
          id: "yourName",
          label: { en: "Your Name", hi: "आपका नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
        },
        {
          id: "yourAddress",
          label: { en: "Your Address", hi: "आपका पता" },
          type: "text" as const,
          placeholder: { en: "123 Main Street", hi: "123 मेन स्ट्रीट" },
          defaultValue: "",
        },
        {
          id: "yourCity",
          label: { en: "Your City & PIN", hi: "आपका शहर और पिन" },
          type: "text" as const,
          placeholder: { en: "New Delhi - 110001", hi: "नई दिल्ली - 110001" },
          defaultValue: "",
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text" as const,
          placeholder: {
            en: "john.smith@email.com",
            hi: "john.smith@email.com",
          },
          defaultValue: "",
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone Number", hi: "आपका फोन नंबर" },
          type: "text" as const,
          placeholder: { en: "+91 98765 43210", hi: "+91 98765 43210" },
          defaultValue: "",
        },
        {
          id: "date",
          label: { en: "Date", hi: "तारीख" },
          type: "date" as const,
          placeholder: { en: "DD/MM/YYYY", hi: "DD/MM/YYYY" },
        },
        {
          id: "schoolName",
          label: { en: "School Name", hi: "स्कूल का नाम" },
          type: "text" as const,
          placeholder: {
            en: "ABC International School",
            hi: "ABC इंटरनेशनल स्कूल",
          },
          defaultValue: "",
          required: true,
        },
        {
          id: "schoolAddress",
          label: { en: "School Address", hi: "स्कूल का पता" },
          type: "text" as const,
          placeholder: { en: "456 School Road", hi: "456 स्कूल रोड" },
          defaultValue: "",
        },
        {
          id: "schoolCity",
          label: { en: "School City & PIN", hi: "स्कूल शहर और पिन" },
          type: "text" as const,
          placeholder: { en: "Mumbai - 400001", hi: "मुंबई - 400001" },
          defaultValue: "",
        },
        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text" as const,
          placeholder: {
            en: "Application for Senior Teacher Position",
            hi: "वरिष्ठ शिक्षक पद के लिए आवेदन",
          },
          defaultValue: "Application for Senior Teacher Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text" as const,
          placeholder: { en: "Respected Sir/Madam", hi: "आदरणीय महोदय/महोदया" },
          defaultValue: "Respected Sir/Madam",
        },
        {
          id: "bodyText",
          label: { en: "Opening Paragraph", hi: "प्रारंभिक पैराग्राफ" },
          type: "textarea" as const,
          placeholder: {
            en: "I am writing to express my strong interest in the teaching position at your prestigious institution. With over X years of teaching experience, I have developed a proven track record of helping students achieve academic excellence.",
            hi: "मैं आपकी प्रतिष्ठित संस्था में शिक्षण पद में अपनी गहरी रुचि व्यक्त करने के लिए लिख रहा हूं।",
          },
          defaultValue:
            "I am writing to express my strong interest in the teaching position at your prestigious institution. With over X years of teaching experience, I have developed a proven track record of helping students achieve academic excellence.",
        },
        {
          id: "subject",
          label: { en: "Subject Taught", hi: "पढ़ाया गया विषय" },
          type: "text" as const,
          placeholder: { en: "Mathematics", hi: "गणित" },
          defaultValue: "Mathematics",
        },
        {
          id: "grades",
          label: { en: "Grade Levels", hi: "ग्रेड स्तर" },
          type: "text" as const,
          placeholder: { en: "6-10", hi: "6-10" },
          defaultValue: "6-10",
        },
        {
          id: "years",
          label: { en: "Years of Experience", hi: "अनुभव के वर्ष" },
          type: "text" as const,
          placeholder: { en: "5", hi: "5" },
          defaultValue: "5",
          tooltip: {
            en: "Total years of teaching experience",
            hi: "शिक्षण अनुभव के कुल वर्ष",
          },
        },
        {
          id: "achievement",
          label: { en: "Key Achievement", hi: "प्रमुख उपलब्धि" },
          type: "text" as const,
          placeholder: {
            en: "Improved student performance by 25% in board exams",
            hi: "बोर्ड परीक्षाओं में छात्र प्रदर्शन में 25% सुधार",
          },
          defaultValue: "Improved student performance by 25% in board exams",
        },
        {
          id: "additionalInfo",
          label: { en: "Additional Info", hi: "अतिरिक्त जानकारी" },
          type: "text" as const,
          placeholder: {
            en: "Served as Department Head for 2 years",
            hi: "2 वर्षों तक विभाग प्रमुख के रूप में सेवा की",
          },
          defaultValue: "Implemented innovative teaching methods",
        },
        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
        },
      ],
    },
  ],
};
