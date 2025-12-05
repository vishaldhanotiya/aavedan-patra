/**
 * SOFTWARE & IT JOB APPLICATION — PILLAR TEMPLATE (BILINGUAL)
 * PART 1 OF 5
 */


export const softwareJobApplicationTemplate = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug: "/applications" },
    subcategory: {
      en: "Job Applications",
      hi: "नौकरी आवेदन",
      slug: "/applications/job",
    },
    template: {
      en: "Software & IT Job Application",
      hi: "सॉफ्टवेयर और आईटी नौकरी आवेदन",
      slug: "",
    },
  },

  title: {
    en: "Job Application for Software/IT Jobs",
    hi: "सॉफ्टवेयर/आईटी नौकरियों के लिए नौकरी आवेदन",
  },

  subtitle: {
    en: "Find multiple formats including Fresher, Experienced, Full Stack, Backend, Frontend, Mobile Developer, DevOps, QA, IT Support, Cloud Engineer, and Data Analyst job applications.",
    hi: "फ्रेशर, अनुभवी, फुल स्टैक, बैकएंड, फ्रंटएंड, मोबाइल डेवलपर, देवऑप्स, क्यूए, आईटी सपोर्ट, क्लाउड इंजीनियर और डेटा एनालिस्ट नौकरी आवेदनों सहित कई प्रारूप देखें।",
  },

  category: {
    en: "Job Applications",
    hi: "नौकरी आवेदन",
  },

  updatedDate: "November 2024",

  // ---------------------------------------------------------------
  // EDITOR VARIATIONS — PART 1
  // ---------------------------------------------------------------
  editorVariations: [
    // -------------------------------------------------------------------
    // 1. GENERAL SOFTWARE DEVELOPER JOB APPLICATION
    // -------------------------------------------------------------------
    //     {
    //       id: "general",
    //       title: {
    //         en: "General Software Developer Job Application",
    //         hi: "सामान्य सॉफ्टवेयर डेवलपर नौकरी आवेदन",
    //       },
    //       content: `To,
    // The Hiring Manager
    // [companyName]
    // [companyAddress]
    // [companyCity]

    // Subject: [subject]

    // [greeting],

    // [bodyText]

    // Skills:
    // [yourSkills]

    // Yours sincerely,
    // [signatureName]
    // [yourEmail]
    // [yourPhone]
    // [githubLink]
    // [portfolioLink]
    // [linkedinProfile]

    // Enclosures:
    // 1. Resume
    // 2. Certificates
    // 3. Experience Letters`,
    //       fields: [
    //         { id: "companyName", label: { en: "Company Name", hi: "कंपनी का नाम" }, type: "text", placeholder: { en: "TechSoft Pvt Ltd", hi: "TechSoft Pvt Ltd" }, required: true },
    //         { id: "companyAddress", label: { en: "Company Address", hi: "कंपनी का पता" }, type: "text", placeholder: { en: "45 Tech Park Road", hi: "45 टेक पार्क रोड" } },
    //         { id: "companyCity", label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" }, type: "text", placeholder: { en: "Bangalore - 560001", hi: "बेंगलुरु - 560001" } },

    //         { id: "subject", label: { en: "Subject Line", hi: "विषय पंक्ति" }, type: "text", defaultValue: "Application for Software Developer Position",placeholder: {
    //             en: "",
    //             hi: "",
    //           } },
    //         { id: "greeting", label: { en: "Greeting", hi: "अभिवादन" }, type: "text", defaultValue: "Respected Sir/Madam",placeholder: {
    //             en: "",
    //             hi: "",
    //           } },

    //         {
    //           id: "bodyText",
    //           label: { en: "Main Body Text", hi: "मुख्य सामग्री" },

    //           type: "textarea",
    //               placeholder: {
    //             en: "I am writing to express my interest in the teaching position...",
    //             hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
    //           },
    //           defaultValue: `I am writing to express my interest in the Software Developer position at your esteemed organization. I have strong experience in software development, problem-solving, and working with modern technologies.

    // I possess solid command in programming languages such as JavaScript, Java, Python, and experience in building scalable applications. I am confident that I can contribute effectively to your engineering team.`,
    //         },

    //         // IT-specific added fields
    //         { id: "yourSkills", label: { en: "Your Skills", hi: "आपके कौशल" }, type: "textarea", placeholder: { en: "JavaScript, React, Node.js, SQL", hi: "JavaScript, React, Node.js, SQL" } },
    //         { id: "totalExperience", label: { en: "Total Experience (Years)", hi: "कुल अनुभव (वर्ष)" }, type: "text", placeholder: { en: "3 Years", hi: "3 वर्ष" } },
    //         { id: "relevantExperience", label: { en: "Relevant Experience", hi: "संबंधित अनुभव" }, type: "text", placeholder: { en: "2 Years", hi: "2 वर्ष" } },

    //         { id: "githubLink", label: { en: "GitHub Profile", hi: "GitHub प्रोफ़ाइल" }, type: "text", placeholder: { en: "https://github.com/username", hi: "https://github.com/username" } },
    //         { id: "portfolioLink", label: { en: "Portfolio Website", hi: "पोर्टफोलियो वेबसाइट" }, type: "text", placeholder: { en: "https://portfolio.com", hi: "https://portfolio.com" } },
    //         { id: "linkedinProfile", label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" }, type: "text", placeholder: { en: "https://linkedin.com/in/username", hi: "https://linkedin.com/in/username" } },

    //         { id: "techStack", label: { en: "Tech Stack Worked On", hi: "कौन सी तकनीकों पर काम किया" }, type: "textarea", placeholder: { en: "React, Node.js, AWS, MySQL", hi: "React, Node.js, AWS, MySQL" } },
    //         { id: "currentCTC", label: { en: "Current CTC", hi: "वर्तमान CTC" }, type: "text", placeholder: { en: "₹6 LPA", hi: "₹6 LPA" } },
    //         { id: "expectedCTC", label: { en: "Expected CTC", hi: "अपेक्षित CTC" }, type: "text", placeholder: { en: "₹8 LPA", hi: "₹8 LPA" } },
    //         { id: "noticePeriod", label: { en: "Notice Period", hi: "नोटिस अवधि" }, type: "text", placeholder: { en: "30 Days", hi: "30 दिन" } },

    //         { id: "signatureName", label: { en: "Signature Name", hi: "हस्ताक्षर नाम" }, type: "text", required: true,placeholder: {
    //             en: "",
    //             hi: "",
    //           } },
    //         { id: "yourEmail", label: { en: "Your Email", hi: "आपका ईमेल" }, type: "text",placeholder: {
    //             en: "",
    //             hi: "",
    //           } },
    //         { id: "yourPhone", label: { en: "Your Phone", hi: "आपका फोन" }, type: "text", placeholder: {
    //             en: "",
    //             hi: "",
    //           }, },
    //       ],
    //     },

    // -------------------------------------------------------------------
    // 2. FRESHER SOFTWARE ENGINEER JOB APPLICATION
    // -------------------------------------------------------------------
    {
      id: "fresher",
      title: {
        en: "Fresher Software Engineer Application",
        hi: "फ्रेशर सॉफ्टवेयर इंजीनियर नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

Technical Skills:
[yourSkills]

Sincerely,  
[signatureName]  
[yourEmail]  
[yourPhone]  
[githubLink]  
[portfolioLink]  
[linkedinProfile]

Enclosures:
1. Resume
2. Certificates`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue: "Application for Software Engineer - Fresher",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am writing to apply for the role of Software Engineer as a fresher. I have recently graduated with a degree in Computer Science/Engineering and have strong foundational knowledge in programming.

I have completed multiple projects during my academics and internships, which helped me build real-world problem-solving skills. I am eager to start my career with your company.`,
        },

        // Fresher-specific
        {
          id: "yourSkills",
          label: { en: "Technical Skills", hi: "तकनीकी कौशल" },
          type: "textarea",
        },
        {
          id: "githubLink",
          label: { en: "GitHub Profile", hi: "GitHub प्रोफ़ाइल" },
          type: "text",
        },
        {
          id: "portfolioLink",
          label: { en: "Portfolio Website", hi: "पोर्टफोलियो वेबसाइट" },
          type: "text",
        },
        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        // Optional CTC for Fresher
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
          required: true,
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
      ],
    },

    // -------------------------------------------------------------------
    // 3. FULL STACK DEVELOPER JOB APPLICATION
    // -------------------------------------------------------------------
    {
      id: "fullstack",
      title: {
        en: "Full Stack Developer Job Application",
        hi: "फुल स्टैक डेवलपर नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

Tech Stack:
[techStack]

Skills:
[yourSkills]

Regards,
[signatureName]
[yourEmail]
[yourPhone]
[githubLink]
[portfolioLink]
[linkedinProfile]

Enclosures:
1. Resume
2. Experience Certificates
3. Project Portfolio`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue: "Application for Full Stack Developer Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am applying for the Full Stack Developer position at your organization. With hands-on experience in both frontend and backend development, I have developed scalable applications using modern frameworks.

I have solid knowledge of JavaScript, React, Node.js, Express, MongoDB, SQL, APIs, version control systems, and deployment tools.`,
        },

        // IT fields
        {
          id: "techStack",
          label: { en: "Tech Stack", hi: "टेक स्टैक" },
          type: "textarea",
          placeholder: {
            en: "React, Node.js, Express, MySQL",
            hi: "React, Node.js, Express, MySQL",
          },
        },
        {
          id: "yourSkills",
          label: { en: "Technical Skills", hi: "तकनीकी कौशल" },
          type: "textarea",
        },
        {
          id: "totalExperience",
          label: { en: "Total Experience", hi: "कुल अनुभव" },
          type: "text",
        },
        {
          id: "relevantExperience",
          label: { en: "Relevant Experience", hi: "संबंधित अनुभव" },
          type: "text",
        },

        {
          id: "githubLink",
          label: { en: "GitHub Profile", hi: "GitHub प्रोफ़ाइल" },
          type: "text",
        },
        {
          id: "portfolioLink",
          label: { en: "Portfolio Website", hi: "पोर्टफोलियो वेबसाइट" },
          type: "text",
        },
        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        {
          id: "currentCTC",
          label: { en: "Current CTC", hi: "वर्तमान CTC" },
          type: "text",
        },
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },
        {
          id: "noticePeriod",
          label: { en: "Notice Period", hi: "नोटिस अवधि" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
        },
      ],
    },
    // -------------------------------------------------------------------
    // 4. BACKEND DEVELOPER JOB APPLICATION (Java / Node / Python)
    // -------------------------------------------------------------------
    {
      id: "backend",
      title: {
        en: "Backend Developer Job Application",
        hi: "बैकएंड डेवलपर नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

Core Skills:
[yourSkills]

Backend Tech Stack:
[techStack]

Regards,
[signatureName]
[yourEmail]
[yourPhone]
[githubLink]
[portfolioLink]
[linkedinProfile]

Enclosures:
1. Resume
2. Experience Certificates
3. Project Portfolio`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue: "Application for Backend Developer Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am applying for the Backend Developer position at your company. I have extensive experience in backend development using technologies such as Java, Node.js, Python, SQL/NoSQL Databases, REST APIs, Microservices, and cloud deployments.

I have worked on building scalable APIs, optimizing performance, and implementing secure backend services.`,
        },

        {
          id: "techStack",
          label: { en: "Backend Tech Stack", hi: "बैकएंड टेक स्टैक" },
          type: "textarea",
        },
        {
          id: "yourSkills",
          label: { en: "Technical Skills", hi: "तकनीकी कौशल" },
          type: "textarea",
        },
        {
          id: "totalExperience",
          label: { en: "Total Experience", hi: "कुल अनुभव" },
          type: "text",
        },
        {
          id: "relevantExperience",
          label: { en: "Relevant Experience", hi: "संबंधित अनुभव" },
          type: "text",
        },

        {
          id: "githubLink",
          label: { en: "GitHub Profile", hi: "GitHub प्रोफ़ाइल" },
          type: "text",
        },
        {
          id: "portfolioLink",
          label: { en: "Portfolio Website", hi: "पोर्टफोलियो वेबसाइट" },
          type: "text",
        },
        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        {
          id: "currentCTC",
          label: { en: "Current CTC", hi: "वर्तमान CTC" },
          type: "text",
        },
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },
        {
          id: "noticePeriod",
          label: { en: "Notice Period", hi: "नोटिस अवधि" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
          required: true,
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
      ],
    },

    // -------------------------------------------------------------------
    // 5. FRONTEND DEVELOPER JOB APPLICATION (React / Angular / Vue)
    // -------------------------------------------------------------------
    {
      id: "frontend",
      title: {
        en: "Frontend Developer Job Application",
        hi: "फ्रंटएंड डेवलपर नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

Frontend Skills:
[yourSkills]

Tech Stack:
[techStack]

Regards,
[signatureName]
[yourEmail]
[yourPhone]
[githubLink]
[portfolioLink]
[linkedinProfile]

Enclosures:
1. Resume
2. Experience Certificates`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue: "Application for Frontend Developer Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am applying for the Frontend Developer role in your organization. I have strong expertise in HTML, CSS, JavaScript, React, Angular, Vue.js, UI frameworks, REST APIs, and responsive web development.

I specialize in building clean, user-friendly, and performance-optimized interfaces.`,
        },

        {
          id: "yourSkills",
          label: { en: "Frontend Skills", hi: "फ्रंटएंड कौशल" },
          type: "textarea",
        },
        {
          id: "techStack",
          label: { en: "Frontend Tech Stack", hi: "फ्रंटएंड टेक स्टैक" },
          type: "textarea",
        },

        {
          id: "githubLink",
          label: { en: "GitHub Profile", hi: "GitHub प्रोफ़ाइल" },
          type: "text",
        },
        {
          id: "portfolioLink",
          label: { en: "Portfolio Website", hi: "पोर्टफोलियो वेबसाइट" },
          type: "text",
        },
        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        {
          id: "currentCTC",
          label: { en: "Current CTC", hi: "वर्तमान CTC" },
          type: "text",
        },
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },
        {
          id: "noticePeriod",
          label: { en: "Notice Period", hi: "नोटिस अवधि" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
          required: true,
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
      ],
    },

    // -------------------------------------------------------------------
    // 6. MOBILE DEVELOPER JOB APPLICATION (React Native / Android / iOS)
    // -------------------------------------------------------------------
    {
      id: "mobile",
      title: {
        en: "Mobile App Developer Job Application",
        hi: "मोबाइल ऐप डेवलपर नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

Mobile Skills:
[yourSkills]

Tech Stack:
[techStack]

Regards,
[signatureName]
[yourEmail]
[yourPhone]
[githubLink]
[portfolioLink]
[linkedinProfile]

Enclosures:
1. Resume
2. Experience Certificates`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue: "Application for Mobile App Developer Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am applying for the Mobile App Developer position. I have experience in React Native, Android (Java/Kotlin), iOS (Swift), API integration, UI development, debugging, and mobile performance optimization.`,
        },

        {
          id: "yourSkills",
          label: { en: "Mobile Skills", hi: "मोबाइल कौशल" },
          type: "textarea",
        },
        {
          id: "techStack",
          label: { en: "Mobile Tech Stack", hi: "मोबाइल टेक स्टैक" },
          type: "textarea",
        },

        {
          id: "githubLink",
          label: { en: "GitHub Profile", hi: "GitHub प्रोफ़ाइल" },
          type: "text",
        },
        {
          id: "portfolioLink",
          label: { en: "Portfolio Website", hi: "पोर्टफोलियो वेबसाइट" },
          type: "text",
        },
        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        {
          id: "currentCTC",
          label: { en: "Current CTC", hi: "वर्तमान CTC" },
          type: "text",
        },
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },
        {
          id: "noticePeriod",
          label: { en: "Notice Period", hi: "नोटिस अवधि" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
          required: true,
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
      ],
    },

    // -------------------------------------------------------------------
    // 7. DEVOPS ENGINEER JOB APPLICATION
    // -------------------------------------------------------------------
    {
      id: "devops",
      title: {
        en: "DevOps Engineer Job Application",
        hi: "देवऑप्स इंजीनियर नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

DevOps Skills:
[yourSkills]

Tech Stack:
[techStack]

Regards,
[signatureName]
[yourEmail]
[yourPhone]
[githubLink]
[portfolioLink]
[linkedinProfile]

Enclosures:
1. Resume
2. Experience Letters`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue: "Application for DevOps Engineer Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am applying for the DevOps Engineer position. I have hands-on experience with CI/CD pipelines, Docker, Kubernetes, Jenkins, Terraform, Linux servers, cloud deployments, automation scripting, and production monitoring tools.`,
        },

        {
          id: "yourSkills",
          label: { en: "DevOps Skills", hi: "देवऑप्स कौशल" },
          type: "textarea",
        },
        {
          id: "techStack",
          label: { en: "DevOps Tech Stack", hi: "देवऑप्स टेक स्टैक" },
          type: "textarea",
        },

        {
          id: "githubLink",
          label: { en: "GitGitHub Profile", hi: "GitHub प्रोफ़ाइल" },
          type: "text",
        },
        {
          id: "portfolioLink",
          label: { en: "Portfolio Website", hi: "पोर्टफोलियो वेबसाइट" },
          type: "text",
        },
        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        {
          id: "currentCTC",
          label: { en: "Current CTC", hi: "वर्तमान CTC" },
          type: "text",
        },
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },
        {
          id: "noticePeriod",
          label: { en: "Notice Period", hi: "नोटिस अवधि" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
          required: true,
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
          placeholder: {
            en: "",
            hi: "",
          },
        },
      ],
    },

    // -------------------------------------------------------------------
    // 8. QA / SOFTWARE TESTER JOB APPLICATION
    // -------------------------------------------------------------------
    {
      id: "qa",
      title: {
        en: "QA Engineer / Software Tester Job Application",
        hi: "क्यूए इंजीनियर / सॉफ्टवेयर टेस्टर नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

Testing Skills:
[yourSkills]

Tools Used:
[techStack]

Regards,
[signatureName]
[yourEmail]
[yourPhone]
[githubLink]
[portfolioLink]
[linkedinProfile]

Enclosures:
1. Resume
2. Experience Letters`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue:
            "Application for QA Engineer / Software Tester Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am applying for the QA Engineer / Software Tester position. I have experience in manual testing, automation testing (Selenium, Playwright, Cypress), test case creation, API testing, bug reporting, and regression testing.`,
        },

        {
          id: "yourSkills",
          label: { en: "Testing Skills", hi: "टेस्टिंग कौशल" },
          type: "textarea",
        },
        {
          id: "techStack",
          label: { en: "Tools Used", hi: "उपयोग किए गए उपकरण" },
          type: "textarea",
        },

        {
          id: "githubLink",
          label: {
            en: "Automation Repo / GitHub",
            hi: "ऑटोमेशन रिपो / GitHub",
          },
          type: "text",
        },
        {
          id: "portfolioLink",
          label: { en: "Portfolio Website", hi: "पोर्टफोलियो वेबसाइट" },
          type: "text",
        },
        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        {
          id: "currentCTC",
          label: { en: "Current CTC", hi: "वर्तमान CTC" },
          type: "text",
        },
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },
        {
          id: "noticePeriod",
          label: { en: "Notice Period", hi: "नोटिस अवधि" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
          required: true,
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
        },
      ],
    },

    // -------------------------------------------------------------------
    // 9. IT SUPPORT / SYSTEM ADMIN JOB APPLICATION
    // -------------------------------------------------------------------
    {
      id: "itsupport",
      title: {
        en: "IT Support / System Administrator Job Application",
        hi: "आईटी सपोर्ट / सिस्टम एडमिन नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

Technical Skills:
[yourSkills]

Tools/Systems:
[techStack]

Regards,
[signatureName]
[yourEmail]
[yourPhone]
[linkedinProfile]

Enclosures:
1. Resume
2. Experience Letters`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue: "Application for IT Support / System Admin Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am applying for the IT Support / System Administrator role. I have strong command in system management, troubleshooting, network handling, hardware/software setup, Windows/Linux administration and user support.`,
        },

        {
          id: "yourSkills",
          label: { en: "Technical Skills", hi: "तकनीकी कौशल" },
          type: "textarea",
        },
        {
          id: "techStack",
          label: { en: "Tools / Systems", hi: "उपकरण / सिस्टम" },
          type: "textarea",
        },

        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        {
          id: "currentCTC",
          label: { en: "Current CTC", hi: "वर्तमान CTC" },
          type: "text",
        },
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },
        {
          id: "noticePeriod",
          label: { en: "Notice Period", hi: "नोटिस अवधि" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
          required: true,
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
        },
      ],
    },

    // -------------------------------------------------------------------
    // 10. CLOUD ENGINEER JOB APPLICATION
    // -------------------------------------------------------------------
    {
      id: "cloud",
      title: {
        en: "Cloud Engineer Job Application",
        hi: "क्लाउड इंजीनियर नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

Cloud Skills:
[yourSkills]

Cloud Tech Stack:
[techStack]

Regards,
[signatureName]
[yourEmail]
[yourPhone]
[githubLink]
[linkedinProfile]

Enclosures:
1. Resume
2. Cloud Certifications`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue: "Application for Cloud Engineer Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am applying for the Cloud Engineer position. I have expertise in AWS, Azure, GCP, cloud architecture, VPC, IAM, EC2, S3, serverless functions, Kubernetes, Docker, load balancing, and cloud security.`,
        },

        {
          id: "yourSkills",
          label: { en: "Cloud Skills", hi: "क्लाउड कौशल" },
          type: "textarea",
        },
        {
          id: "techStack",
          label: { en: "Cloud Tech Stack", hi: "क्लाउड टेक स्टैक" },
          type: "textarea",
        },

        {
          id: "githubLink",
          label: { en: "GitHub Profile", hi: "GitHub प्रोफ़ाइल" },
          type: "text",
        },
        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        {
          id: "currentCTC",
          label: { en: "Current CTC", hi: "वर्तमान CTC" },
          type: "text",
        },
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },
        {
          id: "noticePeriod",
          label: { en: "Notice Period", hi: "नोटिस अवधि" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
          required: true,
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
        },
      ],
    },

    // -------------------------------------------------------------------
    // 11. DATA ANALYST / DATA ENGINEER JOB APPLICATION
    // -------------------------------------------------------------------
    {
      id: "data",
      title: {
        en: "Data Analyst / Data Engineer Job Application",
        hi: "डेटा एनालिस्ट / डेटा इंजीनियर नौकरी आवेदन",
      },
      content: `To,
The Hiring Manager
[companyName]
[companyAddress]
[companyCity]

Subject: [subject]

[greeting],

[bodyText]

Data Skills:
[yourSkills]

Tools/Tech Stack:
[techStack]

Regards,
[signatureName]
[yourEmail]
[yourPhone]
[githubLink]
[portfolioLink]
[linkedinProfile]

Enclosures:
1. Resume
2. Project Portfolio`,
      fields: [
        {
          id: "companyName",
          label: { en: "Company Name", hi: "कंपनी का नाम" },
          type: "text",
          required: true,
        },
        {
          id: "companyAddress",
          label: { en: "Company Address", hi: "कंपनी का पता" },
          type: "text",
        },
        {
          id: "companyCity",
          label: { en: "Company City & PIN", hi: "कंपनी शहर और पिन" },
          type: "text",
        },

        {
          id: "subject",
          label: { en: "Subject Line", hi: "विषय पंक्ति" },
          type: "text",
          defaultValue: "Application for Data Analyst / Data Engineer Position",
        },
        {
          id: "greeting",
          label: { en: "Greeting", hi: "अभिवादन" },
          type: "text",
          defaultValue: "Respected Sir/Madam",
        },

        {
          id: "bodyText",
          type: "textarea",
          placeholder: {
            en: "I am writing to express my interest in the teaching position...",
            hi: "मैं शिक्षण पद में अपनी रुचि व्यक्त करने के लिए लिख रहा हूं...",
          },
          label: { en: "Main Body Text", hi: "मुख्य सामग्री" },
          defaultValue: `I am applying for the Data Analyst / Data Engineer role. I have experience with SQL, Python, Power BI, Tableau, ETL pipelines, Big Data, AWS/GCP data tools, data cleaning, visualization, and model building.`,
        },

        {
          id: "yourSkills",
          label: { en: "Data Skills", hi: "डेटा कौशल" },
          type: "textarea",
        },
        {
          id: "techStack",
          label: { en: "Tech Stack", hi: "टेक स्टैक" },
          type: "textarea",
        },

        {
          id: "githubLink",
          label: { en: "GitHub Profile", hi: "GitHub प्रोफ़ाइल" },
          type: "text",
        },
        {
          id: "portfolioLink",
          label: { en: "Portfolio Website", hi: "पोर्टफोलियो वेबसाइट" },
          type: "text",
        },
        {
          id: "linkedinProfile",
          label: { en: "LinkedIn Profile", hi: "LinkedIn प्रोफ़ाइल" },
          type: "text",
        },

        {
          id: "currentCTC",
          label: { en: "Current CTC", hi: "वर्तमान CTC" },
          type: "text",
        },
        {
          id: "expectedCTC",
          label: { en: "Expected CTC", hi: "अपेक्षित CTC" },
          type: "text",
        },
        {
          id: "noticePeriod",
          label: { en: "Notice Period", hi: "नोटिस अवधि" },
          type: "text",
        },

        {
          id: "signatureName",
          label: { en: "Signature Name", hi: "हस्ताक्षर नाम" },
          type: "text",
          required: true,
          placeholder: {
            en: "",
            hi: "",
          },
        },
        {
          id: "yourEmail",
          label: { en: "Your Email", hi: "आपका ईमेल" },
          type: "text",
        },
        {
          id: "yourPhone",
          label: { en: "Your Phone", hi: "आपका फोन" },
          type: "text",
        },
      ],
    },
  ],
  variations: [
    // ------------------------------------------------------
    // 1. FRESHER SOFTWARE ENGINEER
    // ------------------------------------------------------
    {
      id: "fresher",
      title: {
        en: "Fresher Software Engineer Application",
        hi: "फ्रेशर सॉफ्टवेयर इंजीनियर आवेदन",
      },
      description: {
        en: "Suitable for fresh graduates applying to entry-level software roles.",
        hi: "प्रवेश-स्तर सॉफ्टवेयर भूमिकाओं के लिए आवेदन करने वाले नए स्नातकों के लिए उपयुक्त।",
      },
      bestFor: {
        en: "Freshers without experience",
        hi: "बिना अनुभव वाले फ्रेशर्स",
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
        en: `Dear Hiring Manager,

I am writing to apply for the Software Developer position at [Company Name], as advertised on [Job Portal]. I recently completed my [Degree] in [Branch] from [College Name], where I gained a solid understanding of programming fundamentals and software development concepts.

During my industrial training at [Training Name], I worked with technologies such as [React / Node.js / Java / SQL – add yours]. This experience helped me develop my college project. For my major project, I developed [Project Name], where I built [explain in simple words—e.g., “a basic e-commerce website with product listing, cart, and user login features”]. This project strengthened my practical skills and gave me a clearer understanding of how real-world applications are built.

I am a quick learner, self-motivated, and always open to learning new technologies. I would welcome the opportunity to contribute to [Company Name] and grow my skills further.

My resume is attached for your review. I look forward to the opportunity to discuss how I can contribute to your team.

Thank you for considering my application.

Sincerely,
[Your Name]
[Your Email]
[Your Phone]

Enclosures:  
1. Resume  
2. Certificates`,
        hi: `आदरणीय हायरिंग मैनेजर,

मैं [Company Name] में सॉफ़्टवेयर डेवलपर पद के लिए आवेदन करना चाहता/चाहती हूँ। यह अवसर मुझे [Job Portal] पर मिला। मैंने हाल ही में [College Name] से [Degree] in [Branch] पूरा किया है, जहाँ मैंने प्रोग्रामिंग और सॉफ़्टवेयर डेवलपमेंट की बुनियादी जानकारी सीखी।

अपनी इंडस्ट्रियल ट्रेनिंग [Training Name] में, मैंने [React / Node.js / Java / SQL – अपनी तकनीकें लिखें] जैसी तकनीकों पर काम किया। इसी अनुभव से मैंने अपना कॉलेज प्रोजेक्ट तैयार किया। अपने मेजर प्रोजेक्ट [Project Name] में, मैंने [सरल शब्दों में बताएं — जैसे: “एक साधारण ई-कॉमर्स वेबसाइट जिसमें प्रोडक्ट लिस्टिंग, कार्ट और लॉगिन”] बनाया। इससे मुझे प्रैक्टिकल काम समझने में बहुत मदद मिली।

मैं तेज़ सीखने वाला/वाली हूँ, मेहनत करता/करती हूँ और नई तकनीक सीखने में हमेशा रुचि रखता/रखती हूँ। मुझे उम्मीद है कि मैं [Company Name] में अच्छा योगदान दे पाऊँगा/पाऊँगी।

मेरे रेज़्यूमे को देखने के लिए धन्यवाद। आपसे बात करने का अवसर मिलने की आशा है।

सधन्यवाद,
[Your Name]
[Your Email]
[Your Phone]

`,
      },
    },

    // ------------------------------------------------------
    // 2. FULL STACK DEVELOPER
    // ------------------------------------------------------
    {
      id: "fullstack",
      title: {
        en: "Full Stack Developer Job Application",
        hi: "फुल स्टैक डेवलपर नौकरी आवेदन",
      },
      description: {
        en: "Best suited for candidates skilled in both frontend and backend technologies.",
        hi: "फ्रंटएंड और बैकएंड तकनीकों में निपुण उम्मीदवारों के लिए उपयुक्त।",
      },
      bestFor: {
        en: "Full stack development roles",
        hi: "फुल स्टैक डेवलपमेंट भूमिकाओं के लिए",
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
        en: `Dear Hiring Manager,

I am writing to express my interest in the Full Stack Developer position at [Company Name]. I have [X years] of experience in full-stack development. I have worked on both front-end and back-end systems across multiple projects.

On the front end, I have built responsive and user-friendly interfaces using technologies such as [front-end skill name, e.g., React, Angular, JavaScript, TypeScript, HTML, CSS] and modern UI libraries.

On the back end, I have worked with [back-end skill name, e.g., Node.js, Express, Java/Spring Boot, Python/Django]and databases like [database name, e.g., MySQL, PostgreSQL, MongoDB], creating secure APIs and scalable server-side logic.

I hold a [degree name] in [branch name] and enjoy building clean, efficient, and reliable systems. I am confident I can contribute effectively to your team.

My resume is attached for your review. I look forward to the opportunity to discuss how I can support [Company Name].

Thank you for your time and consideration.

Sincerely,
[Your Name]`,
        hi: `प्रिय हायरिंग मैनेजर,

मैं [Company Name] में फुल स्टैक डेवलपर पद के लिए आवेदन करने में अपनी रुचि व्यक्त करना चाहता/चाहती हूँ। फुल स्टैक डेवलपमेंट में मेरे [X साल] के अनुभव के दौरान, मैंने कई प्रोजेक्ट्स में फ्रंट-एंड और बैक-एंड दोनों पर काम किया है।

फ्रंट एंड पर, मैंने [front-end skill name] और आधुनिक UI लाइब्रेरीज़ का उपयोग करके responsive और उपयोगकर्ता-अनुकूल इंटरफेस बनाए हैं। बैक एंड पर, मैंने [back-end skill name] के साथ काम किया है और [Database name] जैसी डेटाबेस का उपयोग करके सुरक्षित API और स्केलेबल सर्वर-साइड लॉजिक तैयार किया है।

मेरे पास [degree name] की डिग्री है, जिसमें मैंने [branch name] की पढ़ाई की है। मुझे साफ़, प्रभावी और विश्वसनीय एप्लीकेशन बनाने में आनंद आता है। मुझे विश्वास है कि मेरे कौशल और अनुभव आपकी डेवलपमेंट टीम के लिए उपयोगी साबित होंगे।

आपके समय और विचार के लिए धन्यवाद। मैं इस अवसर पर आगे चर्चा करने की प्रतीक्षा कर रहा/रही हूँ कि मैं [Company Name] में कैसे योगदान दे सकता/सकती हूँ।

सादर,
[Your Name]`,
      },
    },

    // ------------------------------------------------------
    // 3. BACKEND DEVELOPER
    // ------------------------------------------------------
    {
      id: "backend",
      title: {
        en: "Backend Developer Job Application",
        hi: "बैकएंड डेवलपर नौकरी आवेदन",
      },
      description: {
        en: "Specialized application for Java, Node.js, or Python backend development jobs.",
        hi: "Java, Node.js या Python बैकएंड डेवलपमेंट नौकरियों के लिए विशेष प्रारूप।",
      },
      bestFor: {
        en: "API & backend engineering roles",
        hi: "एपीआई और बैकएंड इंजीनियरिंग भूमिकाओं के लिए",
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
        en: `  
Dear Hiring Manager

I am writing to apply for the Backend Developer position at [Company Name]. With [X years] of experience in backend development, I have worked on building secure APIs, scalable server-side systems, and efficient database structures.

I have hands-on experience with [backend skills, e.g., Node.js, Express, Java/Spring Boot, Python/Django] and databases such as [e.g., MySQL, PostgreSQL, MongoDB].
My work also includes implementing important backend functionalities such as user authentication & authorization, API integration, error handling & logging, caching, background jobs/queues, and performance optimization to ensure reliable and scalable applications.

I hold a [degree name] in [branch name], and I am confident that my technical skills and problem-solving abilities will allow me to contribute effectively to your team.

My resume is attached for your review. I look forward to discussing how I can support [Company Name].

Thank you for your time and consideration.

Sincerely,
[Your Name]`,
        hi: `प्रिय हायरिंग मैनेजर,

मैं [Company Name] में बैकएंड डेवलपर पद के लिए आवेदन करना चाहता/चाहती हूँ। बैकएंड डेवलपमेंट में मेरे [X साल] के अनुभव में, मैंने सुरक्षित APIs, स्केलेबल सर्वर-साइड सिस्टम और अच्छी डेटाबेस संरचना पर काम किया है।

मैंने [backend skills, जैसे Node.js, Express, Java/Spring Boot, Python/Django] और [database name, जैसे MySQL, PostgreSQL, MongoDB] के साथ कई प्रोजेक्ट्स में काम किया है। मैंने उपयोगकर्ता लॉगिन/ऑथेंटिकेशन, API इंटीग्रेशन, एरर हैंडलिंग, कैशिंग, बैकग्राउंड जॉब और परफॉर्मेंस सुधार जैसे ज़रूरी बैकएंड काम भी किए हैं।

मेरे पास [degree name] की डिग्री है और मेरा विषय [branch name] है। मुझे विश्वास है कि मैं आपकी टीम में अच्छा योगदान दे सकता/सकती हूँ।

मेरी रेज़्यूमे संलग्न है। धन्यवाद। मैं [Company Name] के साथ काम करने के अवसर पर बात करने की आशा करता/करती हूँ।

सादर,
[Your Name]`,
      },
    },

    // ------------------------------------------------------
    // 4. FRONTEND DEVELOPER
    // ------------------------------------------------------
    {
      id: "frontend",
      title: {
        en: "Frontend Developer Job Application",
        hi: "फ्रंटएंड डेवलपर नौकरी आवेदन",
      },
      description: {
        en: "Tailored for UI-focused frontend development roles.",
        hi: "यूआई-केंद्रित फ्रंटएंड डेवलपमेंट भूमिकाओं के लिए तैयार।",
      },
      bestFor: {
        en: "React/Angular/Vue Developer roles",
        hi: "React/Angular/Vue डेवलपर भूमिकाओं के लिए",
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
        en: `Dear Hiring Manager,

I am writing to apply for the Frontend Developer position at [Company Name]. With [X years] of experience in frontend development, I have worked on creating responsive, user-friendly, and visually appealing interfaces.

I have hands-on experience with [frontend skills, e.g., React, Angular, Vue, JavaScript, TypeScript, HTML, CSS] and modern UI frameworks/libraries. My work also includes key frontend responsibilities such as state management, API integration, component-based UI development, performance optimization, and cross-browser compatibility.

I hold a [degree name] in [branch name], and I am confident that my UI/UX understanding and technical skills will help me contribute effectively to your team.

My resume is attached for your review. I look forward to discussing how I can support [Company Name].

Thank you for your time and consideration.

Sincerely,
[Your Name]`,
        hi: `प्रिय हायरिंग मैनेजर,

मैं [Company Name] में फ्रंटएंड डेवलपर पद के लिए आवेदन करना चाहता/चाहती हूँ। फ्रंटएंड डेवलपमेंट में मेरे [X साल] के अनुभव में, मैंने responsive, user-friendly और आकर्षक इंटरफेस बनाए हैं।

मैंने [frontend skills, जैसे React, Angular, Vue, JavaScript, TypeScript, HTML, CSS] और आधुनिक UI लाइब्रेरी/फ्रेमवर्क के साथ काम किया है। मेरा काम मुख्य रूप से स्टेट मैनेजमेंट, API इंटीग्रेशन, कंपोनेंट-बेस्ड UI, परफॉर्मेंस ऑप्टिमाइज़ेशन और क्रॉस-ब्राउज़र कंपैटिबिलिटी जैसे ज़रूरी फ्रंटएंड क्षेत्रों पर केंद्रित रहा है।

मेरे पास [degree name] की डिग्री है और मैंने [branch name] में पढ़ाई की है। मुझे विश्वास है कि मेरे UI/UX और तकनीकी कौशल आपकी टीम के लिए उपयोगी होंगे।

मेरी रेज़्यूमे संलग्न है। धन्यवाद। मैं [Company Name] में काम करने के अवसर पर आगे बात करने की आशा करता/करती हूँ।

सादर,
[Your Name]`,
      },
    },

    // ------------------------------------------------------
    // 5. MOBILE DEVELOPER
    // ------------------------------------------------------
    {
      id: "mobile",
      title: {
        en: "Mobile App Developer Job Application",
        hi: "मोबाइल ऐप डेवलपर नौकरी आवेदन",
      },
      description: {
        en: "Designed for React Native, Android, and iOS developers.",
        hi: "React Native, Android और iOS डेवलपर्स के लिए डिज़ाइन किया गया।",
      },
      bestFor: {
        en: "Mobile development roles",
        hi: "मोबाइल डेवलपमेंट भूमिकाओं के लिए",
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
        en: `Dear Hiring Manager,

I am writing to express my interest in the Mobile App Developer position at [Company Name]. With [X years] of experience in mobile application development, I have worked on building high-quality, user-friendly, and performance-focused applications for both Android and iOS platforms.

My technical expertise includes [skills, e.g., React Native, Flutter, Swift, Kotlin, Java], along with experience in API integration, state management, offline storage, push notifications, authentication, app optimization, and third-party SDK integration. I have successfully developed and deployed mobile applications that follow best practices in UI/UX, security, performance, and scalability.

I hold a [degree name] in [branch name], and I am confident that my technical skills, problem-solving ability, and commitment to clean code will allow me to contribute effectively to your mobile development team.

My resume is attached for your review. I look forward to discussing how my experience aligns with the goals of [Company Name].

Thank you for your time and consideration.

Sincerely,
[Your Name]`,
        hi: `प्रिय हायरिंग मैनेजर,
        
मैं [Company Name] में मोबाइल ऐप डेवलपर पद के लिए अपनी औपचारिक रुचि व्यक्त करना चाहता/चाहती हूँ। मोबाइल एप्लिकेशन डेवलपमेंट में मेरे [X वर्षों] के अनुभव में, मैंने Android और iOS दोनों प्लेटफ़ॉर्म के लिए उच्च-गुणवत्ता, उपयोगकर्ता-अनुकूल और प्रदर्शन-केंद्रित एप्लिकेशन विकसित किए हैं।

मेरी तकनीकी विशेषज्ञता में [skills, जैसे React Native, Flutter, Swift, Kotlin, Java] शामिल हैं, साथ ही API इंटीग्रेशन, स्टेट मैनेजमेंट, ऑफलाइन स्टोरेज, पुश नोटिफिकेशन्स, ऑथेंटिकेशन, ऐप ऑप्टिमाइज़ेशन और थर्ड-पार्टी SDK इंटीग्रेशन जैसे महत्वपूर्ण क्षेत्रों पर भी कार्य किया है। मैंने UI/UX, सुरक्षा, परफॉर्मेंस और स्केलेबिलिटी के सर्वोत्तम मानकों के अनुरूप मोबाइल ऐप विकसित और डिप्लॉय किए हैं।

मेरे पास [degree name] की डिग्री है और मैंने [branch name] में अध्ययन किया है। मुझे विश्वास है कि मेरी तकनीकी क्षमताएँ, समस्या-समाधान कौशल और स्वच्छ कोड लिखने की प्रतिबद्धता आपकी मोबाइल डेवलपमेंट टीम के लिए उपयोगी सिद्ध होगी।

मेरी रेज़्यूमे संलग्न है। आपके समय और विचार के लिए धन्यवाद। मैं [Company Name] की आवश्यकताओं के अनुरूप अपने अनुभव पर आगे चर्चा करने की आशा करता/करती हूँ।

सधन्यवाद,
[Your Name]`,
      },
    },

    // ------------------------------------------------------
    // 6. QA / SOFTWARE TESTER
    // ------------------------------------------------------
    {
      id: "qa",
      title: {
        en: "QA Engineer / Software Tester Job Application",
        hi: "क्यूए इंजीनियर / सॉफ्टवेयर टेस्टर नौकरी आवेदन",
      },
      description: {
        en: "Suitable for manual and automation testing roles.",
        hi: "मैनुअल और ऑटोमेशन टेस्टिंग भूमिकाओं के लिए उपयुक्त।",
      },
      bestFor: {
        en: "Software Testing roles",
        hi: "सॉफ्टवेयर टेस्टिंग भूमिका",
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
        en: `To,  
The Hiring Manager  
[Company Name]

Subject: Application for QA Engineer / Tester Position

Respected Sir/Madam,

I am applying for the QA Engineer / Tester role. I have experience in manual testing, automation testing (Selenium/Cypress), API testing, test case creation, bug reporting, and regression testing.

I am detail-oriented and committed to delivering bug-free applications.

Sincerely,  
[Your Name]`,
        hi: `सेवा में,  
भर्ती प्रबंधक  
[कंपनी का नाम]

विषय: क्यूए इंजीनियर / सॉफ्टवेयर टेस्टर पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं क्यूए इंजीनियर / सॉफ्टवेयर टेस्टर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे मैनुअल टेस्टिंग, ऑटोमेशन टेस्टिंग (Selenium/Cypress), API टेस्टिंग, टेस्ट केस निर्माण, बग रिपोर्टिंग और रिग्रेशन टेस्टिंग का अनुभव है।

मैं विस्तार-उन्मुख हूँ और गुणवत्ता-पूर्ण सॉफ़्टवेयर प्रदान करने के लिए प्रतिबद्ध हूँ।

भवदीय,  
[आपका नाम]`,
      },
    },
  ],
  // --------------------------------------------------------------
  // HOW TO WRITE SECTION
  // --------------------------------------------------------------
  howToWrite: {
    title: {
      en: "Tips to Write a Perfect Software/IT Job Application",
      hi: "एक आदर्श सॉफ्टवेयर/आईटी नौकरी आवेदन लिखने के टिप्स",
    },
    tips: [
      {
        text: {
          en: "Highlight your technical skills clearly such as programming languages, frameworks, databases, and tools.",
          hi: "अपने तकनीकी कौशल जैसे प्रोग्रामिंग भाषाएं, फ्रेमवर्क, डेटाबेस और टूल्स को स्पष्ट रूप से लिखें।",
        },
      },
      {
        text: {
          en: "Mention real projects, internships, or contributions to demonstrate practical experience.",
          hi: "व्यावहारिक अनुभव दिखाने के लिए वास्तविक प्रोजेक्ट्स, इंटर्नशिप या योगदानों का उल्लेख करें।",
        },
      },
      {
        text: {
          en: "Add GitHub, LinkedIn, portfolio or any tech profiles for recruiters to verify your work.",
          hi: "GitHub, LinkedIn, पोर्टफोलियो या किसी भी तकनीकी प्रोफ़ाइल को शामिल करें ताकि रिक्रूटर आपका कार्य देख सकें।",
        },
      },
      {
        text: {
          en: "Showcase measurable achievements such as performance improvements, optimization results, or productivity gains.",
          hi: "प्रदर्शन सुधार, अनुकूलन परिणाम, या उत्पादकता वृद्धि जैसी मापी जा सकने वाली उपलब्धियों को शामिल करें।",
        },
      },
      {
        text: {
          en: "Keep the tone professional, concise, and relevant to the job role.",
          hi: "लहजे को पेशेवर, संक्षिप्त और नौकरी की भूमिका के अनुसार रखें।",
        },
      },
      {
        text: {
          en: "Proofread for grammar, spelling, clarity, and technical correctness before submitting.",
          hi: "सबमिशन से पहले व्याकरण, वर्तनी, स्पष्टता और तकनीकी सटीकता की जांच ज़रूर करें।",
        },
      },
      {
        text: {
          en: "Attach resume, certificates, experience letters, and relevant project documents.",
          hi: "रिज्यूमे, प्रमाणपत्र, अनुभव पत्र और संबंधित प्रोजेक्ट दस्तावेज़ संलग्न करें।",
        },
      },
    ],
  },

  // --------------------------------------------------------------
  // RELATED TEMPLATES
  // --------------------------------------------------------------
  relatedTemplates: [
    {
      title: {
        en: "Application for Internship in Software Company",
        hi: "सॉफ्टवेयर कंपनी में इंटर्नशिप आवेदन",
      },
      description: {
        en: "Perfect for students applying for software internships.",
        hi: "सॉफ्टवेयर इंटर्नशिप के लिए आवेदन करने वाले छात्रों के लिए उपयुक्त।",
      },
      icon: 'Briefcase',
      link: "/templates/software-internship",
    },
    {
      title: {
        en: "Application for Work From Home IT Job",
        hi: "वर्क फ्रॉम होम आईटी नौकरी के लिए आवेदन",
      },
      description: {
        en: "Special format for remote IT job applications.",
        hi: "रिमोट आईटी नौकरी के लिए विशेष प्रारूप।",
      },
      icon: 'GraduationCap',
      link: "/templates/remote-it-job",
    },
    {
      title: {
        en: "Application for IT Job Without Experience",
        hi: "बिना अनुभव के आईटी नौकरी के लिए आवेदन",
      },
      description: {
        en: "Suitable for beginners transitioning to IT.",
        hi: "आईटी में करियर की शुरुआत करने वालों के लिए उपयुक्त।",
      },
      icon: "FileText",
      link: "/templates/it-without-experience",
    },
  ],

  // --------------------------------------------------------------
  // BLOG ARTICLES SECTION
  // --------------------------------------------------------------
  blogArticles: [
    {
      title: {
        en: "How to Write a Job Application for Software Developer",
        hi: "सॉफ्टवेयर डेवलपर के लिए नौकरी आवेदन कैसे लिखें",
      },
      excerpt: {
        en: "A complete guide to drafting a strong and professional software developer job application.",
        hi: "एक मजबूत और पेशेवर सॉफ्टवेयर डेवलपर नौकरी आवेदन लिखने के लिए संपूर्ण गाइड।",
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/software-developer-job-application",
    },
    {
      title: {
        en: "Top Technical Skills to Mention in IT Job Applications",
        hi: "आईटी नौकरी आवेदनों में उल्लेख करने के लिए शीर्ष तकनीकी कौशल",
      },
      excerpt: {
        en: "Learn the must-have skills that IT recruiters look for in top candidates.",
        hi: "उन आवश्यक कौशलों को जानें जिनकी आईटी रिक्रूटर्स मांग करते हैं।",
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/it-skills",
    },
    {
      title: {
        en: "Common Mistakes in Software Job Applications",
        hi: "सॉफ्टवेयर नौकरी आवेदनों में आम गलतियाँ",
      },
      excerpt: {
        en: "Avoid these mistakes that can cost you your dream IT job.",
        hi: "इन गलतियों से बचें जो आपकी आईटी नौकरी के अवसरों को कम कर सकती हैं।",
      },
      readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
      link: "/blog/software-job-application-mistakes",
    },
  ],

  // --------------------------------------------------------------
  // FAQ SECTION
  // --------------------------------------------------------------
  faqs: [
    {
      question: {
        en: "Which format is best for freshers applying for IT jobs?",
        hi: "आईटी नौकरी के लिए आवेदन करने वाले फ्रेशर्स के लिए कौन सा प्रारूप सबसे अच्छा है?",
      },
      answer: {
        en: "The 'Fresher Software Engineer' format is ideal because it highlights academic projects, technical skills, and internships, which matter most for beginner-level roles.",
        hi: "‘फ्रेशर सॉफ्टवेयर इंजीनियर’ प्रारूप सबसे अच्छा है क्योंकि यह शैक्षणिक प्रोजेक्ट, तकनीकी कौशल और इंटर्नशिप को उजागर करता है।",
      },
    },
    {
      question: {
        en: "Should I include GitHub or portfolio links?",
        hi: "क्या मुझे GitHub या पोर्टफोलियो लिंक शामिल करना चाहिए?",
      },
      answer: {
        en: "Yes. IT recruiters highly prefer GitHub, portfolio, and LinkedIn links as proof of your skills and real work.",
        hi: "हाँ, आईटी रिक्रूटर GitHub, पोर्टफोलियो और LinkedIn लिंक को बहुत महत्व देते हैं क्योंकि यह आपके कौशल का प्रमाण होता है।",
      },
    },
    {
      question: {
        en: "Is it necessary to mention programming languages?",
        hi: "क्या प्रोग्रामिंग भाषाओं का उल्लेख करना जरूरी है?",
      },
      answer: {
        en: "Yes. Clearly mention programming languages, frameworks, tools, and databases you have worked with.",
        hi: "हाँ, आपने किन प्रोग्रामिंग भाषाओं, फ्रेमवर्क, टूल्स और डेटाबेस पर काम किया है, यह स्पष्ट रूप से लिखें।",
      },
    },
    {
      question: {
        en: "How long should an IT job application be?",
        hi: "आईटी नौकरी आवेदन कितना लंबा होना चाहिए?",
      },
      answer: {
        en: "Typically 1 page for freshers and 1–1.5 pages for experienced professionals.",
        hi: "फ्रेशर्स के लिए आमतौर पर 1 पेज और अनुभवी उम्मीदवारों के लिए 1–1.5 पेज।",
      },
    },
    {
      question: {
        en: "Can I use the same application for multiple companies?",
        hi: "क्या मैं एक ही आवेदन कई कंपनियों के लिए उपयोग कर सकता हूँ?",
      },
      answer: {
        en: "Yes, but update the company name, skills, and job role details to match each company.",
        hi: "हाँ, लेकिन कंपनी का नाम, कौशल और नौकरी भूमिका के अनुसार सामग्री अपडेट करें।",
      },
    },
    {
      question: {
        en: "What documents should I attach with an IT job application?",
        hi: "आईटी नौकरी आवेदन के साथ कौन से दस्तावेज़ संलग्न करने चाहिए?",
      },
      answer: {
        en: "Attach your resume, degree certificate, internship/experience letters, GitHub/portfolio links, and certifications (AWS, Java, Python, etc.).",
        hi: "रिज्यूमे, डिग्री प्रमाणपत्र, इंटर्नशिप/अनुभव पत्र, GitHub/पोर्टफोलियो लिंक और प्रमाणपत्र (AWS, Java, Python आदि) संलग्न करें।",
      },
    },
  ],
};


//    // ------------------------------------------------------
//     // 7. DEVOPS ENGINEER
//     // ------------------------------------------------------
//     {
//       id: "devops",
//       title: {
//         en: "DevOps Engineer Job Application",
//         hi: "देवऑप्स इंजीनियर नौकरी आवेदन",
//       },
//       description: {
//         en: "A specialized template for cloud, CI/CD, and automation roles.",
//         hi: "क्लाउड, CI/CD और ऑटोमेशन भूमिकाओं के लिए विशेष टेम्पलेट।",
//       },
//       bestFor: {
//         en: "DevOps & Site Reliability roles",
//         hi: "देवऑप्स और विश्वसनीयता इंजीनियरिंग भूमिकाओं के लिए",
//       },
//       length: {
//         en: "Medium",
//         hi: "मध्यम",
//       },
//       difficulty: {
//         en: "Moderate",
//         hi: "मध्यम",
//       },
//       content: {
//         en: `To,  
// The Hiring Manager  
// [Company Name]

// Subject: Application for DevOps Engineer Position

// Respected Sir/Madam,

// I am applying for the DevOps Engineer role. I have hands-on experience with CI/CD pipelines, Docker, Kubernetes, Jenkins, Linux servers, cloud infrastructure, monitoring systems, and automation scripting.

// I am confident that my expertise can streamline deployment processes and improve system reliability.

// Thank you for considering my application.

// Regards,  
// [Your Name]`,
//         hi: `सेवा में,  
// भर्ती प्रबंधक  
// [कंपनी का नाम]

// विषय: देवऑप्स इंजीनियर पद हेतु आवेदन

// माननीय महोदय/महोदया,

// मैं देवऑप्स इंजीनियर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे CI/CD पाइपलाइंस, Docker, Kubernetes, Jenkins, Linux सर्वर, क्लाउड इंफ्रास्ट्रक्चर, मॉनिटरिंग सिस्टम और ऑटोमेशन स्क्रिप्टिंग का अनुभव है।

// मुझे विश्वास है कि मेरी विशेषज्ञता आपके डिप्लॉयमेंट प्रक्रियाओं और सिस्टम विश्वसनीयता में सुधार लाएगी।

// मेरे आवेदन पर विचार करने के लिए धन्यवाद।

// भवदीय,  
// [आपका नाम]`,
//       },
//     },



 // ------------------------------------------------------
    // 1. GENERAL SOFTWARE DEVELOPER APPLICATION
    // ------------------------------------------------------
    //   {
    //     id: "general",
    //     title: {
    //       en: "General Software Developer Job Application",
    //       hi: "सामान्य सॉफ्टवेयर डेवलपर नौकरी आवेदन",
    //     },
    //     description: {
    //       en: "A universal format suitable for applying to most software developer roles.",
    //       hi: "अधिकांश सॉफ़्टवेयर डेवलपर भूमिकाओं के लिए उपयुक्त एक सार्वभौमिक प्रारूप।",
    //     },
    //     bestFor: {
    //       en: "Any software development position",
    //       hi: "किसी भी सॉफ़्टवेयर डेवलपमेंट पद के लिए",
    //     },
    //     length: {
    //       en: "Medium",
    //       hi: "मध्यम",
    //     },
    //     difficulty: {
    //       en: "Easy",
    //       hi: "आसान",
    //     },
    //     content: {
    //       en: `To,
    // The Hiring Manager
    // [Company Name]
    // [Company Address]
    // [City, State - PIN Code]

    // Subject: Application for the Position of Software Developer

    // Respected Sir/Madam,

    // I am writing to express my interest in the Software Developer position at your esteemed organization. I hold experience in modern technologies such as JavaScript, Java, Python, SQL/NoSQL databases, APIs, and cloud platforms.

    // Throughout my professional journey, I have developed scalable applications, participated in code reviews, maintained clean architecture, and collaborated with cross-functional teams.

    // I am confident that my analytical mindset, problem-solving ability, and hands-on experience would make me a valuable asset to your engineering team.

    // Thank you for considering my application. I look forward to the opportunity to discuss this further.

    // Yours sincerely,
    // [Your Name]
    // [Your Email]
    // [Your Phone]

    // Enclosures:
    // 1. Resume
    // 2. Experience Letters
    // 3. Certificates`,
    //       hi: `सेवा में,
    // भर्ती प्रबंधक
    // [कंपनी का नाम]
    // [कंपनी का पता]
    // [नगर, राज्य – पिन कोड]

    // विषय: सॉफ्टवेयर डेवलपर पद हेतु आवेदन

    // माननीय महोदय/महोदया,

    // मैं आपके प्रतिष्ठित संगठन में सॉफ्टवेयर डेवलपर पद के लिए आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे JavaScript, Java, Python, SQL/NoSQL डेटाबेस, API विकास और क्लाउड प्लेटफ़ॉर्म जैसी आधुनिक तकनीकों का अनुभव है।

    // अपने कार्य अनुभव के दौरान मैंने स्केलेबल एप्लिकेशन विकसित किए हैं, कोड रिव्यू में भाग लिया है, स्वच्छ आर्किटेक्चर का पालन किया है और विभिन्न टीमों के साथ सहयोगात्मक रूप से काम किया है।

    // मुझे विश्वास है कि मेरी विश्लेषणात्मक सोच, समस्या-समाधान क्षमता और व्यावहारिक अनुभव आपकी इंजीनियरिंग टीम के लिए उपयोगी सिद्ध होंगे।

    // मेरे आवेदन पर विचार करने के लिए धन्यवाद। चर्चा का अवसर मिलने की प्रतीक्षा रहेगी।

    // भवदीय,
    // [आपका नाम]
    // [आपका ईमेल]
    // [आपका फोन]

    // संलग्नक:
    // 1. रिज्यूमे
    // 2. अनुभव पत्र
    // 3. प्रमाणपत्र`,
    //     },
    //   },

   

        // ------------------------------------------------------
    // 9. IT SUPPORT / SYSTEM ADMIN
    // ------------------------------------------------------
//     {
//       id: "itsupport",
//       title: {
//         en: "IT Support / System Admin Job Application",
//         hi: "आईटी सपोर्ट / सिस्टम एडमिन नौकरी आवेदन",
//       },
//       description: {
//         en: "Best for candidates applying to support and administration roles.",
//         hi: "सपोर्ट और प्रशासनिक आईटी भूमिकाओं के लिए उपयुक्त।",
//       },
//       bestFor: {
//         en: "System Admin / IT Support roles",
//         hi: "सिस्टम एडमिन / आईटी सपोर्ट भूमिकाओं के लिए",
//       },
//       length: {
//         en: "Medium",
//         hi: "मध्यम",
//       },
//       difficulty: {
//         en: "Easy",
//         hi: "आसान",
//       },
//       content: {
//         en: `To,  
// The Hiring Manager  
// [Company Name]

// Subject: Application for IT Support / System Admin Position

// Respected Sir/Madam,

// I am writing to apply for the IT Support / System Admin role. I have strong skills in troubleshooting, system management, network configuration, hardware/software support, Linux/Windows administration, and user support.

// I am confident that I can ensure smooth daily operations and technical support for your organization.

// Regards,  
// [Your Name]`,
//         hi: `सेवा में,  
// भर्ती प्रबंधक  
// [कंपनी का नाम]

// विषय: आईटी सपोर्ट / सिस्टम एडमिन पद हेतु आवेदन

// माननीय महोदय/महोदया,

// मैं आईटी सपोर्ट / सिस्टम एडमिन पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे सिस्टम प्रबंधन, नेटवर्क कॉन्फ़िगरेशन, हार्डवेयर/सॉफ़्टवेयर सपोर्ट, Linux/Windows प्रशासन और उपयोगकर्ता सहायता का अनुभव है।

// मुझे विश्वास है कि मैं आपके संगठन के दैनिक संचालन और तकनीकी सहायता को सुचारू रूप से सुनिश्चित कर सकता/सकती हूँ।

// भवदीय,  
// [आपका नाम]`,
//       },
//     },

    // ------------------------------------------------------
    // 10. CLOUD ENGINEER
    // ------------------------------------------------------
//     {
//       id: "cloud",
//       title: {
//         en: "Cloud Engineer Job Application",
//         hi: "क्लाउड इंजीनियर नौकरी आवेदन",
//       },
//       description: {
//         en: "For roles requiring expertise in AWS, Azure, or Google Cloud.",
//         hi: "AWS, Azure या Google Cloud विशेषज्ञता वाली भूमिकाओं के लिए।",
//       },
//       bestFor: {
//         en: "Cloud & Infrastructure roles",
//         hi: "क्लाउड व इंफ्रास्ट्रक्चर भूमिकाओं के लिए",
//       },
//       length: {
//         en: "Medium",
//         hi: "मध्यम",
//       },
//       difficulty: {
//         en: "Moderate",
//         hi: "मध्यम",
//       },
//       content: {
//         en: `To,  
// The Hiring Manager  
// [Company Name]

// Subject: Application for Cloud Engineer Position

// Respected Sir/Madam,

// I am applying for the Cloud Engineer position. I have expertise in AWS/Azure/GCP cloud architecture, VPC, IAM, compute services, storage, Kubernetes, Docker, serverless solutions, and cloud security.

// Thank you for considering my application.

// Sincerely,  
// [Your Name]`,
//         hi: `सेवा में,  
// भर्ती प्रबंधक  
// [कंपनी का नाम]

// विषय: क्लाउड इंजीनियर पद हेतु आवेदन

// माननीय महोदय/महोदया,

// मैं क्लाउड इंजीनियर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे AWS/Azure/GCP क्लाउड आर्किटेक्चर, VPC, IAM, कंप्यूट सर्विसेज, स्टोरेज, Kubernetes, Docker, सर्वरलेस समाधान और क्लाउड सुरक्षा में विशेषज्ञता है।

// मेरे आवेदन पर विचार करने के लिए धन्यवाद।

// भवदीय,  
// [आपका नाम]`,
//       },
//     },

//     // ------------------------------------------------------
//     // 11. DATA ANALYST / DATA ENGINEER
//     // ------------------------------------------------------
//     {
//       id: "data",
//       title: {
//         en: "Data Analyst / Data Engineer Job Application",
//         hi: "डेटा एनालिस्ट / डेटा इंजीनियर नौकरी आवेदन",
//       },
//       description: {
//         en: "For roles in analytics, data pipelines, SQL, Python, and BI tools.",
//         hi: "एनालिटिक्स, डेटा पाइपलाइन, SQL, Python और BI टूल्स वाली भूमिकाओं के लिए।",
//       },
//       bestFor: {
//         en: "Data-centric roles",
//         hi: "डेटा-केंद्रित भूमिकाओं के लिए",
//       },
//       length: {
//         en: "Medium",
//         hi: "मध्यम",
//       },
//       difficulty: {
//         en: "Moderate",
//         hi: "मध्यम",
//       },
//       content: {
//         en: `To,  
// The Hiring Manager  
// [Company Name]

// Subject: Application for Data Analyst / Data Engineer Position

// Respected Sir/Madam,

// I am applying for the Data Analyst / Data Engineer role. I have strong experience in SQL, Python, ETL pipelines, Power BI/Tableau, data visualization, cloud data tools, and big data processing.

// I am confident that my analytical approach and data-driven mindset make me a strong fit for the role.

// Regards,  
// [Your Name]`,
//         hi: `सेवा में,  
// भर्ती प्रबंधक  
// [कंपनी का नाम]

// विषय: डेटा एनालिस्ट / डेटा इंजीनियर पद हेतु आवेदन

// माननीय महोदय/महोदया,

// मैं डेटा एनालिस्ट / डेटा इंजीनियर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे SQL, Python, ETL पाइपलाइन, Power BI/Tableau, डेटा विज़ुअलाइज़ेशन, क्लाउड डेटा टूल्स और बिग डेटा प्रोसेसिंग का अनुभव है।

// मुझे विश्वास है कि मेरी विश्लेषणात्मक सोच और डेटा-आधारित दृष्टिकोण इस भूमिका के लिए उपयुक्त हैं।

// भवदीय,  
// [आपका नाम]`,
//       },
//     },