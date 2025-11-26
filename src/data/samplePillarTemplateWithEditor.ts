/**
 * SAMPLE PILLAR TEMPLATE WITH EDITOR DATA
 * Example data for Pillar Template Page with Editor support
 */

import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const teacherJobApplicationPillarWithEditor = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", linkSlug: "/applications" },
    subcategory: {
      en: "Job Applications",
      hi: "नौकरी आवेदन",
      linkSlug: "/applications/jobs",
    },
    template: {
      en: "Teacher Job Application",
      hi: "शिक्षक नौकरी आवेदन",
      linkSlug: "",
    },
  },

  title: {
    en: "Job Application for Teacher",
    hi: "शिक्षक के लिए नौकरी आवेदन",
  },

  subtitle: {
    en: "Find multiple formats including fresher, experienced, Math teacher, English teacher, and school-specific versions. Choose the format that best suits your situation.",
    hi: "फ्रेशर, अनुभवी, गणित शिक्षक, अंग्रेजी शिक्षक और स्कूल-विशिष्ट संस्करणों सहित कई प्रारूप खोजें।",
  },

  category: {
    en: "Job Applications",
    hi: "नौकरी आवेदन",
  },

  updatedDate: "November 2024",

  // Editor variations with fields
  editorVariations: [
    {
      id: "general",
      title: {
        en: "General Teacher Job Application",
        hi: "सामान्य शिक्षक नौकरी आवेदन",
      },
      content: `To,
The Principal
[schoolName]
[schoolAddress]
[schoolCity]

Subject: [subject]

[greeting],

[bodyText]

Yours sincerely,
[signatureName]
[yourEmail]
[yourPhone]


Enclosures:
1. Resume
2. Educational Certificates
3. Experience Letters`,
      fields: [
        // {
        //   id: "yourName",
        //   label: { en: "Your Name", hi: "आपका नाम" },
        //   type: "text" as const,
        //   placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
        //   defaultValue: "",
        //   required: true
        // },
        // {
        //   id: "yourAddress",
        //   label: { en: "Your Address", hi: "आपका पता" },
        //   type: "text" as const,
        //   placeholder: { en: "123 Main Street", hi: "123 मेन स्ट्रीट" },
        //   defaultValue: ""
        // },
        // {
        //   id: "yourCity",
        //   label: { en: "Your City & PIN", hi: "आपका शहर और पिन" },
        //   type: "text" as const,
        //   placeholder: { en: "New Delhi - 110001", hi: "नई दिल्ली - 110001" },
        //   defaultValue: ""
        // },
        // {
        //   id: "yourEmail",
        //   label: { en: "Your Email", hi: "आपका ईमेल" },
        //   type: "text" as const,
        //   placeholder: { en: "john.smith@email.com", hi: "john.smith@email.com" },
        //   defaultValue: ""
        // },
        // {
        //   id: "yourPhone",
        //   label: { en: "Your Phone Number", hi: "आपका फोन नंबर" },
        //   type: "text" as const,
        //   placeholder: { en: "+91 98765 43210", hi: "+91 98765 43210" },
        //   defaultValue: ""
        // },
        // {
        //   id: "date",
        //   label: { en: "Date", hi: "तारीख" },
        //   type: "date" as const,
        //   placeholder: { en: "DD/MM/YYYY", hi: "DD/MM/YYYY" }
        // },
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
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          defaultValue: `I am writing to express my interest in the teaching position at your esteemed institution. I have recently completed my B. Ed from Oxford Institute and I am eager to begin my teaching career.

I am passionate about education and have strong communication skills. During my academic years, I have participated in various teaching workshops and seminars which have equipped me with modern teaching methodologies.

I am confident that my dedication to teaching and my subject knowledge will make me a valuable addition to your school. I have attached my resume for your review and would welcome the opportunity to discuss my application in person.

Thank you for considering my application. I look forward to hearing from you.`,
        },
        // {
        //   id: "qualification",
        //   label: { en: "Your Qualification", hi: "आपकी योग्यता" },
        //   type: "text" as const,
        //   placeholder: { en: "B.Ed. degree", hi: "B.Ed. डिग्री" },
        //   defaultValue: "B.Ed. degree"
        // },
        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
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
      ],
    },

    {
      id: "fresher",
      title: {
        en: "Fresher Teacher Job Application",
        hi: "फ्रेशर शिक्षक नौकरी आवेदन",
      },
      content: `To,
The Principal
[schoolName]
[schoolAddress]
[schoolCity]

Subject: [subject]

[greeting],

[bodyText]

Yours sincerely,
[signatureName]
[yourEmail]
[yourPhone]


Enclosures:
1. Resume
2. Educational Certificates
3. Experience Letters`,
      fields: [
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
          defaultValue: "Application for Teacher Position - Fresher",
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
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          defaultValue: `I am applying for the position of Primary School Teacher at [School Name], as advertised on [heard from like facebook linkedin]. I have recently completed my [Education] from the [College name]. I enjoy being around young children, and I’m excited to begin my teaching career where I can help them learn and grow in a positive way.

During my graduation, I taught children as a volunteer at a local NGO. I also gave home tuitions and helped students with their daily studies. Later, I taught at a coaching class, where I worked with small groups of kids. These experiences helped me learn how to stay patient, explain things clearly, and make learning enjoyable for children.

Key Skills & Experience
• Using basic technology and digital tools to support learning
• Managing classrooms with patience and empathy
• Keeping simple academic records and helping with basic tasks
• Building good relationships with students, parents, and teachers

My resume, educational certificates, and recommendation letters are attached for your kind consideration. I would be happy to talk further about my application. Please feel free to contact me by phone or email.

Thank you for your time. I look forward to the opportunity to be a part of your school.`,
        },
        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
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
      ],
    },
    {
      id: "montessori",
      title: {
        en: "Montessori Teacher Job Application",
        hi: "मोंटेसरी शिक्षक नौकरी आवेदन",
      },
      content: `To,
The Principal
[schoolName]
[schoolAddress]
[schoolCity]

Subject: [subject]

[greeting],

[bodyText]

Yours sincerely,
[signatureName]

Enclosures:
1. Detailed Resume
2. Experience Certificates
3. Academic Qualifications
4. Letters of Recommendation`,
      fields: [
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
            en: "Application for the Montessori Position Teacher",
            hi: "मोंटेसरी शिक्षक पद के लिए आवेदन",
          },
          defaultValue: "Application for the Montessori Position Teacher",
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
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          defaultValue: `I'm excited to apply for the kindergarten teacher position at [school name]. I recently came across your job posting and was drawn to the school’s focus on play-based learning.

I completed my Montessori training three years ago and have been working as a nursery teacher at [Previous school name] since then. What I enjoy most about teaching young children is seeing their confidence grow. Last month, I created an alphabet activity using building blocks and pictures, and it helped some of my shy students open up and participate more actively.

I’m comfortable planning age-appropriate lessons, managing mixed-ability classrooms, and building positive relationships with students and parents. I’m also eager to learn more about [school name] approach to early childhood development and how I can contribute to the team.

I would welcome the opportunity to discuss my application further. Thank you for your time and consideration.`,
        },
        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
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
      ],
    },
    {
      id: "experienced",
      title: {
        en: "Experienced Teacher Job Application",
        hi: "अनुभवी शिक्षक नौकरी आवेदन",
      },
      content: `To,
The Principal
[schoolName]
[schoolAddress]
[schoolCity]

Subject: [subject]

[greeting],

[bodyText]

Yours sincerely,
[signatureName]

Enclosures:
1. Detailed Resume
2. Experience Certificates
3. Academic Qualifications
4. Letters of Recommendation`,
      fields: [
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
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          type: "textarea" as const,
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          defaultValue: `I'm writing to apply for the Senior Teacher position at your school. For the past [No. of years] years, I've been teaching at [school name], and I've loved helping my students grow in both their grades and their self-confidence.

In my time there, I've focused on a few key things:

*   I taught Maths and Science upto Class [mention grade] students.
*   My students have consistently shown great improvement in their board exam results.
*   I like to use simple tech tools and hands-on activities to make complex topics easier and more engaging for everyone.

I really enjoy guiding students through such an important year. My approach is based on clear explanations, consistent practice, and encouraging students to find their own answers. It's been wonderful to see them not only improve their scores but also become more curious and independent learners.

I've attached my resume and certificates for more detail. Thank you so much for your time and consideration. I'd be thrilled to have the chance to discuss this opportunity with you.
`,
        },
        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
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
      ],
    },
    {
      id: "math",
      title: {
        en: "Math Teacher Job Application",
        hi: "गणित शिक्षक नौकरी आवेदन",
      },
      content: `To,
The Principal
[schoolName]
[schoolAddress]
[schoolCity]

Subject: [subject]

[greeting],

[bodyText]

Yours sincerely,
[signatureName]

Enclosures:
1. Detailed Resume
2. Experience Certificates
3. Academic Qualifications
4. Letters of Recommendation`,
      fields: [
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
            en: "Application for Mathematics Teacher Position",
            hi: "गणित शिक्षक पद के लिए आवेदन",
          },
          defaultValue: "Application for Mathematics Teacher Position",
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
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          defaultValue: `I am writing to apply for the Mathematics Teacher position at your esteemed school. I hold a [Degree] in Mathematics from [University Name] and have [X] years of experience teaching mathematics to secondary and higher secondary students.

Subject Expertise:
• Strong command over Algebra, Geometry, Calculus, and Statistics
• Experience with CBSE/ICSE/State Board curriculum
• Ability to simplify complex mathematical concepts
• Proven track record of improving student results in board exams

Teaching Approach:
I believe mathematics should be taught through practical applications and problem-solving techniques. I use visual aids, real-world examples, and interactive teaching methods to make mathematics engaging and accessible to all students.

I have successfully prepared students for competitive exams like JEE and have consistently achieved 90%+ pass rates in board examinations. My students have shown marked improvement in both understanding and interest in mathematics.

I am excited about the opportunity to bring my passion for mathematics and proven teaching methods to your institution. I am confident I can contribute to your school's academic excellence.

I have attached my resume and relevant documents for your consideration. I look forward to discussing how I can add value to your mathematics department.

Thank you for your time and consideration.`,
        },
        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
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
      ],
    },
    {
      id: "english",
      title: {
        en: "English Teacher Job Application",
        hi: "अंग्रेजी शिक्षक नौकरी आवेदन",
      },
      content: `To,
The Principal
[schoolName]
[schoolAddress]
[schoolCity]

Subject: [subject]

[greeting],

[bodyText]

Yours sincerely,
[signatureName]

Enclosures:
1. Detailed Resume
2. Experience Certificates
3. Academic Qualifications
4. Letters of Recommendation`,
      fields: [
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
            en: "Application for English Teacher Position",
            hi: "अंग्रेजी शिक्षक पद के लिए आवेदन",
          },
          defaultValue: "Application for English Teacher Position",
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
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          defaultValue: `I am writing to express my keen interest in the English Teacher position at your school. With a [Degree] in English Literature from [University Name] and [X] years of teaching experience, I am passionate about fostering students' language skills and love for literature.

Areas of Expertise:
• English Grammar and Composition
• English Literature (Poetry, Prose, and Drama)
• Communication Skills Development
• Creative Writing and Public Speaking
• CBSE/ICSE English Curriculum

Teaching Methodology:
My teaching approach focuses on interactive learning, encouraging students to express themselves confidently in English. I incorporate various activities such as debates, group discussions, creative writing exercises, and dramatizations to make learning engaging.

I have successfully coached students for English Olympiads and public speaking competitions, with many achieving top positions. My students have consistently scored above 90% in board examinations.

Your school's emphasis on holistic education and communication skills aligns perfectly with my teaching philosophy. I am excited about the opportunity to contribute to your English department and help students develop strong language proficiency.

I have attached my resume and supporting documents. I would welcome the opportunity to discuss how my experience and teaching approach can benefit your students.

Thank you for considering my application.
`,
        },
        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
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
      ],
    },
    {
      id: "science",
      title: {
        en: "Science Teacher Job Application",
        hi: "विज्ञान शिक्षक नौकरी आवेदन",
      },
      content: `To,
The Principal
[schoolName]
[schoolAddress]
[schoolCity]

Subject: [subject]

[greeting],

[bodyText]

Yours sincerely,
[signatureName]

Enclosures:
1. Detailed Resume
2. Experience Certificates
3. Academic Qualifications
4. Letters of Recommendation`,
      fields: [
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
            en: "Application for Science Teacher Position",
            hi: "विज्ञान शिक्षक पद के लिए आवेदन",
          },
          defaultValue: "Application for Science Teacher Position",
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
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          defaultValue: `
I would like to apply for the Senior Science Teacher position. I hold a B.Sc. in Science along with a [qualification]., and I have more than five years of experience teaching Class [grade] at [previous school name].

I believe science is best learned through observation and curiosity. I use simple experiments, demonstrations, charts, and real-life examples to explain concepts. I encourage students to ask questions, think logically, and connect theory with practical situations. I also break down difficult topics into small steps, making them easier to understand and remember.


Subject Specialization:
• [Physics/Chemistry/Biology/General Science]
• Strong theoretical and practical knowledge
• Laboratory management and safety protocols
• CBSE/ICSE science curriculum expertise
• Project-based learning and scientific inquiry methods

Teaching Approach:
I believe science education should be hands-on and experimental. I emphasize practical demonstrations, laboratory work, and real-world applications to make scientific concepts come alive for students. I regularly conduct science projects and encourage students to think like scientists.

Achievements:
• Coached students for science competitions and Olympiads
• Organized science exhibitions and fairs
• Maintained 95%+ pass rates in board examinations
• Implemented innovative teaching aids and experiments

Your school's well-equipped laboratories and focus on scientific education make it an ideal environment for me to contribute effectively. I am eager to inspire the next generation of scientists and help students develop analytical thinking skills.

I have attached my resume and relevant certificates. I would appreciate the opportunity to discuss how I can contribute to your science department's excellence.

Thank you for your consideration.`,
        },
        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text" as const,
          placeholder: { en: "John Smith", hi: "जॉन स्मिथ" },
          defaultValue: "",
          required: true,
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
      ],
    },
  ],

  // Display variations (original format for the page)
  variations: [
    {
      id: "general",
      title: {
        en: "General Teacher Job Application",
        hi: "सामान्य शिक्षक नौकरी आवेदन",
      },
      description: {
        en: "A universal format suitable for all teaching positions. Use this when applying for any teacher role.",
        hi: "सभी शिक्षण पदों के लिए उपयुक्त एक सार्वभौमिक प्रारूप।",
      },
      bestFor: {
        en: "Any teaching position",
        hi: "कोई भी शिक्षण पद",
      },
      length: {
        en: "Medium",
        hi: "मध्यम",
      },
      difficulty: {
        en: "Easy",
        hi: "आसान",
      },
      content: {
        hi: `सेवा में,
प्रधानाचार्य महोदय/महोदया
[विद्यालय का नाम]
[विद्यालय का पता]
[नगर, राज्य – पिन कोड]

विषय: शिक्षक पद हेतु आवेदन

माननीय महोदय/महोदया,

सविनय निवेदन है कि मैं आपके विद्यालय में शिक्षक पद के लिए आवेदन करना चाहता/चाहती हूँ। मैंने [विश्वविद्यालय का नाम] से [डिग्री का नाम] पूर्ण की है और विद्यार्थियों को गुणवत्तापूर्ण शिक्षा प्रदान करने का उत्साह रखता/रखती हूँ।

अपनी पढ़ाई के दौरान मैंने कई शिक्षण कार्यशालाओं और प्रशिक्षण कार्यक्रमों में भाग लिया है, जिससे आधुनिक शिक्षण पद्धतियों और कक्षा प्रबंधन का अच्छा अनुभव प्राप्त हुआ है। मुझे विश्वास है कि मेरी मेहनत, विषय ज्ञान और स्पष्ट संप्रेषण कौशल आपके विद्यालय के लिए उपयोगी सिद्ध होंगे।

कृपया मेरे संलग्न बायोडाटा और प्रमाणपत्रों की समीक्षा करें। यदि मुझे अवसर दिया जाए, तो मैं अपना सर्वश्रेष्ठ कार्य करने का पूर्ण प्रयास करूँगा/करूँगी।

आपके समय और विचार के लिए धन्यवाद। उत्तर की प्रतीक्षा रहेगी।

भवदीय,
[आपका हस्ताक्षर]
[आपका नाम]

संलग्नक:

1. बायोडाटा
2. शैक्षणिक प्रमाणपत्र
3. अनुभव प्रमाणपत्र (यदि कोई हो)`,

        en: `To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for the Position of Teacher

Respected Sir/Madam,

I am writing to express my interest in the teaching position at your esteemed institution. I have recently completed my [Degree Name] from [University Name] and am eager to begin my teaching career.

I am passionate about education and have strong communication skills. During my academic years, I have participated in various teaching workshops and seminars which have equipped me with modern teaching methodologies.

I am confident that my dedication to teaching and my subject knowledge will make me a valuable addition to your school. I have attached my resume for your review and would welcome the opportunity to discuss my application in person.

Thank you for considering my application. I look forward to hearing from you.

Yours sincerely,
[Your Signature]
[Your Name]

Enclosures:
1. Resume
2. Educational Certificates
3. Experience Letters (if any)`,
      },
    },
    {
      id: "fresher",
      title: {
        en: "Fresher Teacher Job Application",
        hi: "फ्रेशर शिक्षक नौकरी आवेदन",
      },
      description: {
        en: "Perfect for new graduates with no prior teaching experience. Emphasizes education and enthusiasm.",
        hi: "बिना किसी पूर्व शिक्षण अनुभव के नए स्नातकों के लिए एकदम सही।",
      },
      bestFor: {
        en: "New teachers without experience",
        hi: "बिना अनुभव के नए शिक्षक",
      },
      length: {
        en: "Short",
        hi: "छोटा",
      },
      difficulty: {
        en: "Easy",
        hi: "आसान",
      },
      content: {
        hi: `सेवा में,
प्रधानाचार्य महोदय/महोदया
[विद्यालय का नाम]
[विद्यालय का पता]
[नगर, राज्य – पिन कोड]

विषय: प्राथमिक शिक्षक पद हेतु आवेदन (फ्रेशर)

माननीय महोदय/महोदया,

सविनय निवेदन है कि मैं आपके विद्यालय में प्राथमिक शिक्षक के पद के लिए आवेदन करना चाहता/चाहती हूँ। मुझे यह अवसर [Facebook/LinkedIn/अन्य माध्यम] के माध्यम से प्राप्त हुआ। मैंने हाल ही में [कॉलेज का नाम] से [शैक्षणिक योग्यता] पूर्ण की है। मुझे छोटे बच्चों के साथ काम करना पसंद है और मैं अपने शिक्षण करियर की शुरुआत सकारात्मक और प्रेरणादायक वातावरण में करना चाहता/चाहती हूँ।

स्नातक के दौरान मैंने एक स्थानीय एनजीओ में स्वयंसेवक के रूप में बच्चों को पढ़ाया। इसके अलावा मैंने होम ट्यूशन दिए और बच्चों की दैनिक पढ़ाई में सहायता की। बाद में, मैंने कोचिंग क्लास में भी पढ़ाया, जहाँ मुझे छोटे समूहों के साथ कार्य करने का अनुभव मिला। इन सभी अनुभवों ने मुझे धैर्य, सरल तरीके से समझाने की कला और बच्चों के लिए सीखने की प्रक्रिया को आनंददायक बनाने में मदद की है।

मुख्य कौशल एवं अनुभव:
• शिक्षण में बुनियादी तकनीक और डिजिटल टूल्स का उपयोग
• धैर्य और सहानुभूति के साथ कक्षा प्रबंधन
• सरल शैक्षणिक रिकॉर्ड बनाए रखना और दैनिक गतिविधियों में सहायता
• विद्यार्थियों, अभिभावकों और शिक्षकों के साथ अच्छा संवाद स्थापित करना

कृपया मेरे संलग्न बायोडाटा, शैक्षणिक प्रमाणपत्रों और अनुशंसा पत्रों पर विचार करने की कृपा करें। यदि मुझे अवसर दिया जाए, तो मैं आपके विद्यालय के लिए अपना सर्वोत्तम योगदान देने का प्रयास करूँगा/करूँगी।

आपके समय और विचार के लिए धन्यवाद। आपके विद्यालय का हिस्सा बनने की आशा है।

भवदीय,
नाम: [आपका नाम]
मोबाइल: [मोबाइल नंबर]
ईमेल: [xxx@gmail.com](mailto:xxx@gmail.com)

संलग्नक:

1. बायोडाटा
2. शैक्षणिक प्रमाणपत्र
3. अनुभव प्रमाणपत्र (यदि कोई हो)`,
        en: `To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for Teacher Position - Fresher

Respected Sir/Madam,

I am applying for the position of Primary School Teacher at [School Name], as advertised on [heard from like facebook linkedin]. I have recently completed my [Education] from the [College name]. I enjoy being around young children, and I’m excited to begin my teaching career where I can help them learn and grow in a positive way.

During my graduation, I taught children as a volunteer at a local NGO. I also gave home tuitions and helped students with their daily studies. Later, I taught at a coaching class, where I worked with small groups of kids. These experiences helped me learn how to stay patient, explain things clearly, and make learning enjoyable for children.

Key Skills & Experience
• Using basic technology and digital tools to support learning
• Managing classrooms with patience and empathy
• Keeping simple academic records and helping with basic tasks
• Building good relationships with students, parents, and teachers

My resume, educational certificates, and recommendation letters are attached for your kind consideration. I would be happy to talk further about my application. Please feel free to contact me by phone or email.

Thank you for your time. I look forward to the opportunity to be a part of your school.

Sincerely,
Name: [Your Name]
Phone: [Mobile Number]
Email: xxx@gmail.com

Enclosures:
1. Resume
2. Educational Certificates
3. Experience Letters (if any)
`,
      },
    },
    {
      id: "montessori",
      title: {
        en: "Montessori Teacher Job Application",
        hi: "मोंटेसरी शिक्षक नौकरी आवेदन",
      },
      description: {
        en: "A universal format suitable for all teaching positions. Use this when applying for any teacher role.",
        hi: "सभी शिक्षण पदों के लिए उपयुक्त एक सार्वभौमिक प्रारूप।",
      },
      bestFor: {
        en: "Pre school teaching position",
        hi: "कोई भी शिक्षण पद",
      },
      length: {
        en: "Medium",
        hi: "मध्यम",
      },
      difficulty: {
        en: "Easy",
        hi: "आसान",
      },
      content: {
        hi: `सेवा में,
प्रधानाचार्य महोदय/महोदया
[विद्यालय का नाम]
[विद्यालय का पता]
[नगर, राज्य – पिन कोड]

विषय: मॉन्टेसरी शिक्षक पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके विद्यालय में मॉन्टेसरी/किंडरगार्टन शिक्षक के पद के लिए अत्यंत उत्साह के साथ आवेदन प्रस्तुत कर रहा/रही हूँ। हाल ही में आपकी नौकरी की सूचना देखी और विद्यालय में *खेल आधारित शिक्षण* (play-based learning) पर दिए जाने वाले ध्यान ने मुझे विशेष रूप से आकर्षित किया।

मैंने [सालों की संख्या] वर्ष पहले अपना मॉन्टेसरी प्रशिक्षण पूरा किया था और तब से [विद्यालय का नाम] में नर्सरी शिक्षक के रूप में कार्य कर रहा/रही हूँ। छोटे बच्चों को पढ़ाने में मुझे सबसे अधिक आनंद तब मिलता है जब मैं उनकी बढ़ती आत्मविश्वास को देखती/देखता हूँ। पिछले महीने मैंने *बिल्डिंग ब्लॉक्स और चित्रों* से वर्णमाला की एक गतिविधि तैयार की, जिससे मेरे कुछ शर्मीले विद्यार्थियों ने भी खुलकर भाग लेना शुरू किया।

मैं आयु-अनुकूल पाठ योजनाएँ बनाने, मिश्रित क्षमता वाले बच्चों की कक्षाएँ संभालने, तथा विद्यार्थियों और अभिभावकों दोनों के साथ सकारात्मक संबंध बनाने में सहज हूँ। साथ ही, मैं [विद्यालय का नाम] की प्रारंभिक बाल शिक्षा की पद्धति के बारे में और सीखने तथा उसमें अपना योगदान देने के लिए भी उत्सुक हूँ।

यदि मुझे अवसर दिया जाए, तो मैं अपने अनुभव और समर्पण से आपके विद्यालय के लिए मूल्यवान योगदान देने का पूर्ण प्रयास करूँगा/करूँगी। मेरे आवेदन पर विचार करने के लिए आपका धन्यवाद। मैं आपसे आगे चर्चा करने के अवसर की प्रतीक्षा करूँगा/करूँगी।

भवदीय,
[आपका हस्ताक्षर]
[आपका नाम]

संलग्नक:

1. बायोडाटा
2. शैक्षणिक प्रमाणपत्र
3. अनुभव प्रमाणपत्र (यदि कोई हो)`,
        en: `To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for the Montessori Position Teacher

Respected Sir/Madam,

I'm excited to apply for the kindergarten teacher position at [School name]. I recently came across your job posting and was drawn to the school’s focus on play-based learning.

I completed my Montessori training [no.of years] years ago and have been working as a nursery teacher at [school name] since then. What I enjoy most about teaching young children is seeing their confidence grow. Last month, I created an alphabet activity using building blocks and pictures, and it helped some of my shy students open up and participate more actively.

I’m comfortable planning age-appropriate lessons, managing mixed-ability classrooms, and building positive relationships with students and parents. I’m also eager to learn more about [school name] approach to early childhood development and how I can contribute to the team.

I would welcome the opportunity to discuss my application further. Thank you for your time and consideration.


Yours sincerely,
[Your Signature]
[Your Name]

Enclosures:
1. Resume
2. Educational Certificates
3. Experience Letters (if any)`,
      },
    },
    {
      id: "experienced",
      title: {
        en: "Experienced Teacher Job Application",
        hi: "अनुभवी शिक्षक नौकरी आवेदन",
      },
      description: {
        en: "For teachers with 2+ years of experience. Highlights achievements and teaching philosophy.",
        hi: "2+ वर्षों के अनुभव वाले शिक्षकों के लिए।",
      },
      bestFor: {
        en: "Experienced teachers",
        hi: "अनुभवी शिक्षक",
      },
      length: {
        en: "Long",
        hi: "लंबा",
      },
      difficulty: {
        en: "Moderate",
        hi: "मध्यम",
      },
      content: {
        hi: `सेवा में,
प्रधानाचार्य महोदय/महोदया
[विद्यालय का नाम]
[विद्यालय का पता]
[नगर, राज्य – पिन कोड]

विषय: वरिष्ठ शिक्षक पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके विद्यालय में वरिष्ठ शिक्षक के पद के लिए आवेदन प्रस्तुत कर रहा/रही हूँ। पिछले [सालों की संख्या] वर्षों से मैं [विद्यालय का नाम] में शिक्षण कार्य कर रहा/रही हूँ, और इस दौरान अपने विद्यार्थियों के अंकों तथा आत्मविश्वास—दोनों में उत्कृष्ट वृद्धि देखने का अनुभव अत्यंत प्रेरणादायक रहा है।

अपने वर्तमान विद्यालय में, मैंने मुख्य रूप से निम्न कार्यों पर ध्यान केंद्रित किया है:

• कक्षा [कक्षा संख्या] तक के विद्यार्थियों को गणित और विज्ञान का प्रभावी शिक्षण।
• मेरे विद्यार्थियों ने बोर्ड परीक्षाओं में लगातार उल्लेखनीय सुधार और अच्छे परिणाम प्राप्त किए हैं।
• मैं सरल तकनीकी उपकरणों और व्यावहारिक गतिविधियों का उपयोग करके कठिन विषयों को आसानी से समझाने का प्रयास करता/करती हूँ, जिससे सीखना अधिक रोचक और प्रभावी बन सके।

वरिष्ठ कक्षाओं के विद्यार्थियों का मार्गदर्शन करना मुझे अत्यंत संतोष देता है। मेरी शिक्षण शैली स्पष्ट व्याख्या, नियमित अभ्यास, और विद्यार्थियों को स्वतंत्र रूप से सोचने के लिए प्रोत्साहित करने पर आधारित है। विद्यार्थियों में जिज्ञासा, समझ, और आत्मनिर्भरता का विकास होते देखना मेरे लिए सबसे बड़ी उपलब्धि रही है।

मैंने अपना विस्तृत बायोडाटा और प्रमाणपत्र संलग्न किए हैं। मेरे आवेदन पर विचार करने के लिए आपका हार्दिक धन्यवाद। मुझे इस अवसर पर आपसे चर्चा करने का सौभाग्य मिले तो मैं अत्यंत प्रसन्नता महसूस करूँगा/करूँगी।

भवदीय,
[आपका हस्ताक्षर]
[आपका नाम]

संलग्नक:

1. विस्तृत बायोडाटा
2. अनुभव प्रमाणपत्र
3. शैक्षणिक योग्यता
4. अनुशंसा पत्र
5. पुरस्कार एवं उपलब्धियाँ`,
        en: `To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for Senior Teacher Position

Respected Sir/Madam,

I'm writing to apply for the Senior Teacher position at your school. For the past [no. of years] years, I've been teaching at [school name], and I've loved helping my students grow in both their grades and their self-confidence.

In my time there, I've focused on a few key things:

*   I taught Maths and Science upto Class [mention grade] students.
*   My students have consistently shown great improvement in their board exam results.
*   I like to use simple tech tools and hands-on activities to make complex topics easier and more engaging for everyone.

I really enjoy guiding students through such an important year. My approach is based on clear explanations, consistent practice, and encouraging students to find their own answers. It's been wonderful to see them not only improve their scores but also become more curious and independent learners.

I've attached my resume and certificates for more detail. Thank you so much for your time and consideration. I'd be thrilled to have the chance to discuss this opportunity with you.

Yours sincerely,
[Your Signature]
[Your Name]

Enclosures:
1. Detailed Resume
2. Experience Certificates
3. Academic Qualifications
4. Letters of Recommendation
5. Awards and Achievements`,
      },
    },
    {
      id: "math",
      title: {
        en: "Math Teacher Job Application",
        hi: "गणित शिक्षक नौकरी आवेदन",
      },
      description: {
        en: "Specialized application for Mathematics teaching positions. Emphasizes subject expertise and analytical skills.",
        hi: "गणित शिक्षण पदों के लिए विशेष आवेदन।",
      },
      bestFor: {
        en: "Mathematics subject specialists",
        hi: "गणित विषय विशेषज्ञ",
      },
      length: {
        en: "Medium",
        hi: "मध्यम",
      },
      difficulty: {
        en: "Easy",
        hi: "आसान",
      },
      content: {
        hi: `सेवा में,
प्रधानाचार्य महोदय/महोदया
[विद्यालय का नाम]
[विद्यालय का पता]
[नगर, राज्य – पिन कोड]

विषय: गणित शिक्षक पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके प्रतिष्ठित विद्यालय में गणित शिक्षक के पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मैंने [विश्वविद्यालय का नाम] से गणित विषय में [डिग्री] प्राप्त की है और मुझे माध्यमिक एवं उच्च माध्यमिक छात्रों को गणित पढ़ाने का [X] वर्षों का अनुभव है।

विषय विशेषज्ञता:
• बीजगणित, ज्यामिति, कलन (Calculus) और सांख्यिकी पर मजबूत पकड़
• CBSE/ICSE/स्टेट बोर्ड पाठ्यक्रम का व्यापक अनुभव
• जटिल गणितीय अवधारणाओं को सरल और समझने योग्य तरीके से समझाना
• बोर्ड परीक्षाओं में छात्रों के परिणामों में निरंतर सुधार का सिद्ध रिकॉर्ड

शिक्षण शैली:
मेरा मानना है कि गणित को व्यवहारिक उदाहरणों, समस्या-समाधान तकनीकों और वास्तविक जीवन के उपयोग से सिखाया जाना चाहिए। मैं दृश्य सामग्री, गतिविधि-आधारित शिक्षण और इंटरैक्टिव तरीकों का प्रयोग करता/करती हूँ ताकि विद्यार्थी गणित को रुचिकर और सरलता से समझ सकें।

मैंने JEE जैसे प्रतियोगी परीक्षाओं की तैयारी में छात्रों का सफल मार्गदर्शन किया है और बोर्ड परीक्षाओं में लगातार 90%+ परिणाम प्राप्त करवाए हैं। मेरे विद्यार्थी गणित में समझ, आत्मविश्वास और रुचि—तीनों में उल्लेखनीय सुधार दिखाते आए हैं।

मैं आपके विद्यालय में अपनी गणितीय विशेषज्ञता और प्रभावी शिक्षण पद्धतियों के माध्यम से योगदान देने के लिए उत्साहित हूँ। मुझे विश्वास है कि मैं आपके गणित विभाग की शैक्षणिक गुणवत्ता को और भी मजबूत कर सकता/सकती हूँ।

कृपया संलग्न बायोडाटा और संबंधित दस्तावेजों पर विचार करने की कृपा करें। इस अवसर पर आगे चर्चा करने का अवसर प्राप्त हो तो मुझे प्रसन्नता होगी।

आपके समय और विचार के लिए धन्यवाद।

भवदीय,
[आपका हस्ताक्षर]
[आपका नाम]

संलग्नक:

1. बायोडाटा
2. शैक्षणिक प्रमाणपत्र (B.Sc./M.Sc. Mathematics)
3. B.Ed. प्रमाणपत्र
4. अनुभव पत्र
5. छात्र परिणाम रिकॉर्ड`,
        en: `To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for Mathematics Teacher Position

Respected Sir/Madam,

I am writing to apply for the Mathematics Teacher position at your esteemed school. I hold a [Degree] in Mathematics from [University Name] and have [X] years of experience teaching mathematics to secondary and higher secondary students.

Subject Expertise:
• Strong command over Algebra, Geometry, Calculus, and Statistics
• Experience with CBSE/ICSE/State Board curriculum
• Ability to simplify complex mathematical concepts
• Proven track record of improving student results in board exams

Teaching Approach:
I believe mathematics should be taught through practical applications and problem-solving techniques. I use visual aids, real-world examples, and interactive teaching methods to make mathematics engaging and accessible to all students.

I have successfully prepared students for competitive exams like JEE and have consistently achieved 90%+ pass rates in board examinations. My students have shown marked improvement in both understanding and interest in mathematics.

I am excited about the opportunity to bring my passion for mathematics and proven teaching methods to your institution. I am confident I can contribute to your school's academic excellence.

I have attached my resume and relevant documents for your consideration. I look forward to discussing how I can add value to your mathematics department.

Thank you for your time and consideration.

Yours sincerely,
[Your Signature]
[Your Name]

Enclosures:
1. Resume
2. Educational Certificates (B.Sc./M.Sc. Mathematics)
3. B.Ed. Certificate
4. Experience Letters
5. Student Result Records`,
      },
    },
    {
      id: "english",
      title: {
        en: "English Teacher Job Application",
        hi: "अंग्रेजी शिक्षक नौकरी आवेदन",
      },
      description: {
        en: "Tailored for English language and literature teaching positions. Showcases communication skills.",
        hi: "अंग्रेजी भाषा और साहित्य शिक्षण पदों के लिए तैयार।",
      },
      bestFor: {
        en: "English subject teachers",
        hi: "अंग्रेजी विषय शिक्षक",
      },
      length: {
        en: "Medium",
        hi: "मध्यम",
      },
      difficulty: {
        en: "Easy",
        hi: "आसान",
      },
      content: {
        hi: `सेवा में,
प्रधानाचार्य महोदय/महोदया
[विद्यालय का नाम]
[विद्यालय का पता]
[नगर, राज्य – पिन कोड]

विषय: अंग्रेज़ी शिक्षक पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके विद्यालय में अंग्रेज़ी शिक्षक के पद हेतु अत्यंत रुचि के साथ आवेदन प्रस्तुत कर रहा/रही हूँ। मैंने [विश्वविद्यालय का नाम] से अंग्रेज़ी साहित्य में [डिग्री] प्राप्त की है तथा अंग्रेज़ी शिक्षण का [X] वर्षों का अनुभव रखता/रखती हूँ। मुझे विद्यार्थियों में भाषा कौशल विकसित करने और साहित्य के प्रति रुचि जगाने में विशेष आनंद मिलता है।

विशेषज्ञता के क्षेत्र:
• अंग्रेज़ी व्याकरण एवं रचना
• अंग्रेज़ी साहित्य (कविता, गद्य और नाटक)
• संचार कौशल एवं व्यक्तित्व विकास
• रचनात्मक लेखन एवं सार्वजनिक भाषण
• CBSE/ICSE अंग्रेज़ी पाठ्यक्रम का अनुभव

शिक्षण पद्धति:
मेरी शिक्षण शैली संवादात्मक एवं सहभागितापूर्ण है। मैं कक्षा में ऐसा वातावरण बनाना पसंद करता/करती हूँ, जहाँ विद्यार्थी अंग्रेज़ी में निःसंकोच स्वयं को व्यक्त कर सकें। इसके लिए मैं बहस, समूह चर्चा, रचनात्मक लेखन गतिविधियाँ, भूमिका-नाटक (dramatization) आदि का उपयोग करता/करती हूँ, जिससे सीखना रोचक और प्रभावी बनता है।

मैंने अपने विद्यार्थियों को अंग्रेज़ी ओलंपियाड और सार्वजनिक भाषण प्रतियोगिताओं के लिए सफलतापूर्वक तैयार किया है, जिनमें से कई ने श्रेष्ठ स्थान प्राप्त किए हैं। बोर्ड परीक्षाओं में भी मेरे विद्यार्थियों ने लगातार 90% से अधिक अंक अर्जित किए हैं।

आपके विद्यालय का समग्र शिक्षा (holistic education) और संचार कौशल पर जोर मेरी शिक्षण विचारधारा से पूर्णतः मेल खाता है। मैं आपके अंग्रेज़ी विभाग में योगदान देने और विद्यार्थियों की भाषा क्षमता को और मजबूत करने के अवसर के लिए उत्साहित हूँ।

कृपया मेरा संलग्न बायोडाटा एवं अन्य आवश्यक दस्तावेजों पर विचार करने की कृपा करें। मैं आपके साथ इस विषय पर चर्चा करने का अवसर पाकर प्रसन्नता महसूस करूँगा/करूँगी।

आपके समय और विचार के लिए धन्यवाद।

भवदीय,
[आपका हस्ताक्षर]
[आपका नाम]

संलग्नक:

1. बायोडाटा
2. B.A./M.A. अंग्रेज़ी साहित्य प्रमाणपत्र
3. B.Ed. प्रमाणपत्र
4. अनुभव पत्र
5. पाठ योजना (Sample Lesson Plans)
6. छात्र उपलब्धि रिकॉर्ड`,
        en: `To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for English Teacher Position

Respected Sir/Madam,

I am writing to express my keen interest in the English Teacher position at your school. With a [Degree] in English Literature from [University Name] and [X] years of teaching experience, I am passionate about fostering students' language skills and love for literature.

Areas of Expertise:
• English Grammar and Composition
• English Literature (Poetry, Prose, and Drama)
• Communication Skills Development
• Creative Writing and Public Speaking
• CBSE/ICSE English Curriculum

Teaching Methodology:
My teaching approach focuses on interactive learning, encouraging students to express themselves confidently in English. I incorporate various activities such as debates, group discussions, creative writing exercises, and dramatizations to make learning engaging.

I have successfully coached students for English Olympiads and public speaking competitions, with many achieving top positions. My students have consistently scored above 90% in board examinations.

Your school's emphasis on holistic education and communication skills aligns perfectly with my teaching philosophy. I am excited about the opportunity to contribute to your English department and help students develop strong language proficiency.

I have attached my resume and supporting documents. I would welcome the opportunity to discuss how my experience and teaching approach can benefit your students.

Thank you for considering my application.

Yours sincerely,
[Your Signature]
[Your Name]

Enclosures:
1. Resume
2. B.A./M.A. English Literature Certificates
3. B.Ed. Certificate
4. Experience Letters
5. Sample Lesson Plans
6. Student Achievement Records`,
      },
    },
    {
      id: "science",
      title: {
        en: "Science Teacher Job Application",
        hi: "विज्ञान शिक्षक नौकरी आवेदन",
      },
      description: {
        en: "For Physics, Chemistry, or Biology teachers. Highlights practical and laboratory skills.",
        hi: "भौतिकी, रसायन विज्ञान या जीव विज्ञान शिक्षकों के लिए।",
      },
      bestFor: {
        en: "Science subject specialists",
        hi: "विज्ञान विषय विशेषज्ञ",
      },
      length: {
        en: "Medium",
        hi: "मध्यम",
      },
      difficulty: {
        en: "Moderate",
        hi: "मध्यम",
      },
      content: {
        hi: `सेवा में,
प्रधानाचार्य महोदय/महोदया
[विद्यालय का नाम]
[विद्यालय का पता]
[नगर, राज्य – पिन कोड]

विषय: विज्ञान शिक्षक पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके विद्यालय में वरिष्ठ विज्ञान शिक्षक के पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मैंने विज्ञान में B.Sc. तथा [अतिरिक्त योग्यता] प्राप्त की है, और मुझे [विद्यालय का नाम] में कक्षा [कक्षा] के विद्यार्थियों को पाँच से अधिक वर्षों तक विज्ञान पढ़ाने का अनुभव है।

मेरा विश्वास है कि विज्ञान को सबसे अच्छी तरह *पर्यवेक्षण, प्रयोग* और *जिज्ञासा* के माध्यम से सीखा जाता है। मैं सरल प्रयोगों, प्रदर्शनों, चार्ट्स और वास्तविक जीवन के उदाहरणों का उपयोग करके विषयों को समझाता/समझाती हूँ। मैं विद्यार्थियों को प्रश्न पूछने, तर्क के साथ सोचने और सिद्धांत को वास्तविक परिस्थितियों से जोड़ने के लिए प्रोत्साहित करता/करती हूँ। कठिन विषयों को मैं छोटे-छोटे हिस्सों में बाँटकर पढ़ाता/पढ़ाती हूँ ताकि विद्यार्थी आसानी से समझ सकें और याद रख सकें।

विषय विशेषज्ञता:
• [भौतिकी/रसायन विज्ञान/जीव विज्ञान/सामान्य विज्ञान]
• मजबूत सैद्धांतिक और प्रायोगिक ज्ञान
• प्रयोगशाला प्रबंधन और सुरक्षा प्रोटोकॉल
• CBSE/ICSE विज्ञान पाठ्यक्रम का अनुभव
• परियोजना-आधारित शिक्षण और वैज्ञानिक खोज पद्धतियाँ

शिक्षण शैली:
मेरी शिक्षण शैली प्रयोग-आधारित और सहभागितापूर्ण है। मैं प्रायोगिक कार्यों, लैब गतिविधियों और वास्तविक जीवन उदाहरणों के माध्यम से विज्ञान को जीवंत बनाने का प्रयास करता/करती हूँ। मैं नियमित रूप से विज्ञान परियोजनाएँ करवाता/करवाती हूँ और विद्यार्थियों को “वैज्ञानिक की तरह सोचने” के लिए प्रेरित करता/करती हूँ।

उपलब्धियाँ:
• विज्ञान प्रतियोगिताओं और ओलंपियाड के लिए विद्यार्थियों को प्रशिक्षण
• विज्ञान प्रदर्शनियों और मेले का सफल आयोजन
• बोर्ड परीक्षाओं में 95%+ परिणाम बनाए रखना
• नवीन शिक्षण सामग्री और प्रयोगों का उपयोग

आपके विद्यालय की सुसज्जित प्रयोगशालाएँ और वैज्ञानिक शिक्षा पर दिया गया विशेष ध्यान मेरे कार्यक्षेत्र और रुचि से पूर्णतः मेल खाता है। मैं विद्यार्थियों में वैज्ञानिक सोच, विश्लेषणात्मक क्षमता और जिज्ञासा को विकसित करने के लिए उत्सुक हूँ।

कृपया मेरे संलग्न बायोडाटा और आवश्यक प्रमाणपत्रों पर विचार करने की कृपा करें। मुझे आपके विज्ञान विभाग में योगदान देने के अवसर पर आपसे चर्चा कर प्रसन्नता होगी।

आपके समय और विचार के लिए धन्यवाद।

**भवदीय,**
[आपका हस्ताक्षर]
[आपका नाम]

**संलग्नक:**

1. बायोडाटा
2. B.Sc./M.Sc. प्रमाणपत्र
3. B.Ed. प्रमाणपत्र
4. अनुभव पत्र
5. प्रयोगशाला सुरक्षा प्रमाणपत्र
6. छात्र परियोजना दस्तावेज`,
        en: `To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for Science Teacher Position

Respected Sir/Madam,

Dear Madam,

I would like to apply for the Senior Science Teacher position. I hold a B.Sc. in Science along with a [qualification]., and I have more than five years of experience teaching Class [grade] at [previous school name].

I believe science is best learned through observation and curiosity. I use simple experiments, demonstrations, charts, and real-life examples to explain concepts. I encourage students to ask questions, think logically, and connect theory with practical situations. I also break down difficult topics into small steps, making them easier to understand and remember.


Subject Specialization:
• [Physics/Chemistry/Biology/General Science]
• Strong theoretical and practical knowledge
• Laboratory management and safety protocols
• CBSE/ICSE science curriculum expertise
• Project-based learning and scientific inquiry methods

Teaching Approach:
I believe science education should be hands-on and experimental. I emphasize practical demonstrations, laboratory work, and real-world applications to make scientific concepts come alive for students. I regularly conduct science projects and encourage students to think like scientists.

Achievements:
• Coached students for science competitions and Olympiads
• Organized science exhibitions and fairs
• Maintained 95%+ pass rates in board examinations
• Implemented innovative teaching aids and experiments

Your school's well-equipped laboratories and focus on scientific education make it an ideal environment for me to contribute effectively. I am eager to inspire the next generation of scientists and help students develop analytical thinking skills.

I have attached my resume and relevant certificates. I would appreciate the opportunity to discuss how I can contribute to your science department's excellence.

Thank you for your consideration.

Yours sincerely,
[Your Signature]
[Your Name]

Enclosures:
1. Resume
2. B.Sc./M.Sc. Certificate
3. B.Ed. Certificate
4. Experience Letters
5. Laboratory Safety Certification
6. Student Project Documentation`,
      },
    },
  ],

  howToWrite: {
    title: {
      en: "Tips to Write a Perfect Teacher Job Application",
      hi: "एक आदर्श शिक्षक नौकरी आवेदन लिखने के टिप्स",
    },
    tips: [
      {
        text: {
          en: "Highlight your teaching experience and mention specific subjects or grade levels you have taught",
          hi: "अपने शिक्षण अनुभव को उजागर करें और उन विशिष्ट विषयों या ग्रेड स्तरों का उल्लेख करें जो आपने पढ़ाए हैं",
        },
      },
      {
        text: {
          en: "Specify your educational qualifications including B.Ed., M.Ed., or subject specialization degrees",
          hi: "B.Ed., M.Ed., या विषय विशेषज्ञता डिग्री सहित अपनी शैक्षिक योग्यताओं को निर्दिष्ट करें",
        },
      },
      {
        text: {
          en: "Mention any teaching certifications, workshops, or training programs you have completed",
          hi: "किसी भी शिक्षण प्रमाणपत्र, कार्यशाला, या प्रशिक्षण कार्यक्रम का उल्लेख करें जो आपने पूरा किया है",
        },
      },
      {
        text: {
          en: "Keep the tone professional and formal throughout the application",
          hi: "आवेदन के दौरान लहजे को पेशेवर और औपचारिक रखें",
        },
      },
      {
        text: {
          en: "Include measurable achievements like student performance improvement or exam pass rates",
          hi: "छात्र प्रदर्शन में सुधार या परीक्षा पास दर जैसी मापने योग्य उपलब्धियां शामिल करें",
        },
      },
      {
        text: {
          en: "Attach all relevant documents including resume, certificates, and experience letters",
          hi: "रिज्यूमे, प्रमाणपत्र, और अनुभव पत्र सहित सभी प्रासंगिक दस्तावेज संलग्न करें",
        },
      },
      {
        text: {
          en: "Proofread carefully for grammar and spelling errors before submission",
          hi: "सबमिशन से पहले व्याकरण और वर्तनी की त्रुटियों के लिए सावधानीपूर्वक प्रूफरीड करें",
        },
      },
    ],
  },

  relatedTemplates: [
    {
      title: {
        en: "Application for Teaching Job in Private School",
        hi: "प्राइवेट स्कूल में शिक्षण नौकरी के लिए आवेदन",
      },
      description: {
        en: "Specialized format for private school teaching positions",
        hi: "प्राइवेट स्कूल शिक्षण पदों के लिए विशेष प्रारूप",
      },
      icon: Briefcase,
      link: "/templates/private-school-teacher",
    },
    {
      title: {
        en: "Application for Class Teacher Position",
        hi: "क्लास टीचर पद के लिए आवेदन",
      },
      description: {
        en: "Template for class teacher or homeroom teacher role",
        hi: "क्लास टीचर या होमरूम टीचर भूमिका के लिए टेम्पलेट",
      },
      icon: GraduationCap,
      link: "/templates/class-teacher",
    },
    {
      title: {
        en: "Application for Tuition Teacher",
        hi: "ट्यूशन टीचर के लिए आवेदन",
      },
      description: {
        en: "Format for private tuition or coaching teaching jobs",
        hi: "प्राइवेट ट्यूशन या कोचिंग शिक्षण नौकरियों के लिए प्रारूप",
      },
      icon: FileText,
      link: "/templates/tuition-teacher",
    },
  ],

  blogArticles: [
    {
      title: {
        en: "How to Write a Perfect Teacher Job Application",
        hi: "एक आदर्श शिक्षक नौकरी आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "Complete guide with examples and tips to create an impressive teacher job application that gets noticed.",
        hi: "प्रभावशाली शिक्षक नौकरी आवेदन बनाने के लिए उदाहरण और टिप्स के साथ पूर्ण गाइड।",
      },
      readTime: {
        en: "5 min read",
        hi: "5 मिनट पढ़ें",
      },
      link: "/blog/perfect-teacher-application",
    },
    {
      title: {
        en: "Important Skills to Mention as a Teacher",
        hi: "एक शिक्षक के रूप में उल्लेख करने के लिए महत्वपूर्ण कौशल",
      },
      excerpt: {
        en: "Essential teaching skills and qualities that schools look for in candidates. Boost your application.",
        hi: "आवश्यक शिक्षण कौशल और गुण जो स्कूल उम्मीदवारों में तलाशते हैं।",
      },
      readTime: {
        en: "4 min read",
        hi: "4 मिनट पढ़ें",
      },
      link: "/blog/teacher-skills",
    },
    {
      title: {
        en: "Common Mistakes in Teacher Job Applications",
        hi: "शिक्षक नौकरी आवेदनों में सामान्य गलतियाँ",
      },
      excerpt: {
        en: "Avoid these common errors that can cost you the teaching job. Learn what NOT to do in your application.",
        hi: "इन सामान्य त्रुटियों से बचें जो आपको शिक्षण नौकरी की कीमत चुका सकती हैं।",
      },
      readTime: {
        en: "6 min read",
        hi: "6 मिनट पढ़ें",
      },
      link: "/blog/teacher-application-mistakes",
    },
  ],

  faqs: [
    {
      question: {
        en: "Which format is best for fresher teachers?",
        hi: "फ्रेशर शिक्षकों के लिए कौन सा प्रारूप सबसे अच्छा है?",
      },
      answer: {
        en: "The 'Fresher Teacher Job Application' format is specifically designed for new graduates without prior experience. It emphasizes your education, training, and enthusiasm while acknowledging your fresher status. This format helps you present yourself confidently despite lacking work experience.",
        hi: "फ्रेशर टीचर जॉब एप्लिकेशन प्रारूप विशेष रूप से बिना पूर्व अनुभव के नए स्नातकों के लिए डिज़ाइन किया गया है।",
      },
    },
    {
      question: {
        en: "How to apply as a subject-specific teacher?",
        hi: "विषय-विशिष्ट शिक्षक के रूप में कैसे आवेदन करें?",
      },
      answer: {
        en: "Use the subject-specific templates (Math, English, or Science) that highlight your expertise in that particular subject. These formats emphasize your subject knowledge, teaching methodology specific to that subject, and relevant achievements. Make sure to mention your specialized degree and any subject-specific certifications.",
        hi: "विषय-विशिष्ट टेम्पलेट्स (गणित, अंग्रेजी, या विज्ञान) का उपयोग करें जो उस विशेष विषय में आपकी विशेषज्ञता को उजागर करते हैं।",
      },
    },
    {
      question: {
        en: "Can I modify these templates for private schools?",
        hi: "क्या मैं प्राइवेट स्कूलों के लिए इन टेम्पलेट्स को संशोधित कर सकता हूं?",
      },
      answer: {
        en: "Yes, absolutely! All these templates can be easily customized for private schools. Simply replace the school name, address, and adjust the content to match the private school environment. Private schools often appreciate seeing examples of innovative teaching methods and technology integration, so consider highlighting these aspects.",
        hi: "हां, बिल्कुल! ये सभी टेम्पलेट्स आसानी से प्राइवेट स्कूलों के लिए अनुकूलित किए जा सकते हैं।",
      },
    },
    {
      question: {
        en: "Should I mention my B.Ed. degree in the application?",
        hi: "क्या मुझे आवेदन में अपनी B.Ed. डिग्री का उल्लेख करना चाहिए?",
      },
      answer: {
        en: "Yes, definitely mention your B.Ed. (Bachelor of Education) degree as it's a mandatory qualification for teaching in most schools. List it in your educational qualifications section and also mention it in the body of your letter. If you have additional teaching certifications like M.Ed., D.El.Ed., or specialized training, include those as well.",
        hi: "हां, निश्चित रूप से अपनी B.Ed. डिग्री का उल्लेख करें क्योंकि यह अधिकांश स्कूलों में पढ़ाने के लिए अनिवार्य योग्यता है।",
      },
    },
    {
      question: {
        en: "What documents should I attach with my application?",
        hi: "मुझे अपने आवेदन के साथ कौन से दस्तावेज़ संलग्न करने चाहिए?",
      },
      answer: {
        en: "Essential documents include: 1) Updated resume/CV, 2) B.Ed. certificate, 3) Subject degree certificates (B.Sc., B.A., M.A., etc.), 4) Experience letters (if applicable), 5) Academic transcripts, 6) Photo ID proof, 7) Passport size photographs. If you have awards, certifications, or letters of recommendation, include those as well.",
        hi: "आवश्यक दस्तावेज़ों में शामिल हैं: 1) अपडेट किया गया रिज्यूमे/सीवी, 2) B.Ed. प्रमाणपत्र, 3) विषय डिग्री प्रमाणपत्र।",
      },
    },
    {
      question: {
        en: "How long should a teacher job application be?",
        hi: "एक शिक्षक नौकरी आवेदन कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "A teacher job application should typically be 1-2 pages long. Freshers can keep it shorter (1 page), while experienced teachers may extend to 1.5-2 pages to include achievements and experience. Focus on quality over quantity - include relevant information that showcases your teaching abilities and qualifications without being overly verbose.",
        hi: "एक शिक्षक नौकरी आवेदन आमतौर पर 1-2 पेज लंबा होना चाहिए। फ्रेशर इसे छोटा रख सकते हैं।",
      },
    },
  ],
};
