/**
 * SAMPLE PILLAR TEMPLATE DATA
 * Example data structure for Teacher Job Application pillar page
 */

import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const teacherJobApplicationPillar = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Job Applications", hi: "नौकरी आवेदन", slug:"/applications/job" },
    template: { en: "Teacher Job Application", hi: "शिक्षक नौकरी आवेदन", slug:"/" }
  },
  
  title: { 
    en: "Job Application for Teacher", 
    hi: "शिक्षक के लिए नौकरी आवेदन" 
  },
  
  subtitle: { 
    en: "Find multiple formats including fresher, experienced, Math teacher, English teacher, and school-specific versions. Choose the format that best suits your situation.",
    hi: "फ्रेशर, अनुभवी, गणित शिक्षक, अंग्रेजी शिक्षक और स्कूल-विशिष्ट संस्करणों सहित कई प्रारूप खोजें।"
  },
  
  category: { 
    en: "Job Applications", 
    hi: "नौकरी आवेदन" 
  },
  
  updatedDate: "November 2024",
  
  variations: [
    {
      id: "general",
      title: { 
        en: "General Teacher Job Application", 
        hi: "सामान्य शिक्षक नौकरी आवेदन" 
      },
      description: { 
        en: "A universal format suitable for all teaching positions. Use this when applying for any teacher role.",
        hi: "सभी शिक्षण पदों के लिए उपयुक्त एक सार्वभौमिक प्रारूप।"
      },
      bestFor: { 
        en: "Any teaching position", 
        hi: "कोई भी शिक्षण पद" 
      },
      length: { 
        en: "Medium", 
        hi: "मध्यम" 
      },
      difficulty: { 
        en: "Easy", 
        hi: "आसान" 
      },
      content: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,
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
3. Experience Letters (if any)`
    },
    {
      id: "fresher",
      title: { 
        en: "Fresher Teacher Job Application", 
        hi: "फ्रेशर शिक्षक नौकरी आवेदन" 
      },
      description: { 
        en: "Perfect for new graduates with no prior teaching experience. Emphasizes education and enthusiasm.",
        hi: "बिना किसी पूर्व शिक्षण अनुभव के नए स्नातकों के लिए एकदम सही।"
      },
      bestFor: { 
        en: "New teachers without experience", 
        hi: "बिना अनुभव के नए शिक्षक" 
      },
      length: { 
        en: "Short", 
        hi: "छोटा" 
      },
      difficulty: { 
        en: "Easy", 
        hi: "आसान" 
      },
      content: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for Teacher Position - Fresher

Respected Sir/Madam,

I am a fresh graduate from [University Name] with a [Degree Name] in [Subject], and I am writing to apply for a teaching position at your school.

Although I am at the beginning of my teaching career, I bring fresh perspectives, enthusiasm, and a strong command of my subject. During my B.Ed. training, I completed a teaching internship at [School Name] where I gained practical classroom experience.

I am eager to contribute to your institution's academic excellence and help students achieve their full potential. My strong communication skills and patience make me well-suited for this role.

I have attached my academic credentials and would be grateful for the opportunity to discuss how I can contribute to your school.

Thank you for your consideration.

Yours sincerely,
[Your Signature]
[Your Name]

Enclosures:
1. Resume
2. B.Ed. Certificate
3. Academic Transcripts
4. Internship Certificate`
    },
    {
      id: "experienced",
      title: { 
        en: "Experienced Teacher Job Application", 
        hi: "अनुभवी शिक्षक नौकरी आवेदन" 
      },
      description: { 
        en: "For teachers with 2+ years of experience. Highlights achievements and teaching philosophy.",
        hi: "2+ वर्षों के अनुभव वाले शिक्षकों के लिए।"
      },
      bestFor: { 
        en: "Experienced teachers", 
        hi: "अनुभवी शिक्षक" 
      },
      length: { 
        en: "Long", 
        hi: "लंबा" 
      },
      difficulty: { 
        en: "Moderate", 
        hi: "मध्यम" 
      },
      content: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for Senior Teacher Position

Respected Sir/Madam,

I am writing to express my strong interest in the teaching position at your prestigious institution. With over [X] years of teaching experience at [Previous School Name], I have developed a proven track record of helping students achieve academic excellence.

Professional Experience:
• Taught [Subject] to classes [Grade Levels] for [X] years
• Improved student performance by [X]% in board examinations
• Implemented innovative teaching methods and use of technology
• Served as [Any Additional Responsibility - e.g., Department Head]

My teaching philosophy centers on creating an engaging, inclusive learning environment where every student can thrive. I believe in combining traditional teaching methods with modern educational technology to make learning more effective and enjoyable.

I am particularly drawn to your school because of its reputation for academic excellence and holistic development. I am confident that my experience, dedication, and teaching skills would make me a valuable addition to your faculty.

I have attached my detailed resume and relevant certificates for your review. I would welcome the opportunity to discuss how my experience aligns with your school's vision.

Thank you for considering my application. I look forward to the possibility of contributing to your institution's continued success.

Yours sincerely,
[Your Signature]
[Your Name]

Enclosures:
1. Detailed Resume
2. Experience Certificates
3. Academic Qualifications
4. Letters of Recommendation
5. Awards and Achievements`
    },
    {
      id: "math",
      title: { 
        en: "Math Teacher Job Application", 
        hi: "गणित शिक्षण नौकरी आवेदन" 
      },
      description: { 
        en: "Specialized application for Mathematics teaching positions. Emphasizes subject expertise and analytical skills.",
        hi: "गणित शिक्षण पदों के लिए विशेष आवेदन।"
      },
      bestFor: { 
        en: "Mathematics subject specialists", 
        hi: "गणित विषय विशेषज्ञ" 
      },
      length: { 
        en: "Medium", 
        hi: "मध्यम" 
      },
      difficulty: { 
        en: "Easy", 
        hi: "आसान" 
      },
      content: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,
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
5. Student Result Records`
    },
    {
      id: "english",
      title: { 
        en: "English Teacher Job Application", 
        hi: "अंग्रेजी शिक्षक नौकरी आवेदन" 
      },
      description: { 
        en: "Tailored for English language and literature teaching positions. Showcases communication skills.",
        hi: "अंग्रेजी भाषा और साहित्य शिक्षण पदों के लिए तैयार।"
      },
      bestFor: { 
        en: "English subject teachers", 
        hi: "अंग्रेजी विषय शिक्षक" 
      },
      length: { 
        en: "Medium", 
        hi: "मध्यम" 
      },
      difficulty: { 
        en: "Easy", 
        hi: "आसान" 
      },
      content: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,
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
6. Student Achievement Records`
    },
    {
      id: "science",
      title: { 
        en: "Science Teacher Job Application", 
        hi: "विज्ञान शिक्षक नौकरी आवेदन" 
      },
      description: { 
        en: "For Physics, Chemistry, or Biology teachers. Highlights practical and laboratory skills.",
        hi: "भौतिकी, रसायन विज्ञान या जीव विज्ञान शिक्षकों के लिए।"
      },
      bestFor: { 
        en: "Science subject specialists", 
        hi: "विज्ञान विषय विशेषज्ञ" 
      },
      length: { 
        en: "Medium", 
        hi: "मध्यम" 
      },
      difficulty: { 
        en: "Moderate", 
        hi: "मध्यम" 
      },
      content: `[Your Name]
[Your Address]
[City, State - PIN Code]
[Your Email]
[Your Phone Number]

Date: [DD/MM/YYYY]

To,
The Principal
[School Name]
[School Address]
[City, State - PIN Code]

Subject: Application for Science Teacher Position

Respected Sir/Madam,

I am writing to apply for the Science Teacher position at your school. I hold a [Degree] in [Physics/Chemistry/Biology] from [University Name] and bring [X] years of experience teaching science to middle and high school students.

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
6. Student Project Documentation`
    }
  ],

  howToWrite: {
    title: { 
      en: "Tips to Write a Perfect Teacher Job Application", 
      hi: "एक आदर्श शिक्षक नौकरी आवेदन लिखने के टिप्स" 
    },
    tips: [
      {
        text: { 
          en: "Highlight your teaching experience and mention specific subjects or grade levels you have taught",
          hi: "अपने शिक्षण अनुभव को उजागर करें और उन विशिष्ट विषयों या ग्रेड स्तरों का उल्लेख करें जो आपने पढ़ाए हैं"
        }
      },
      {
        text: { 
          en: "Specify your educational qualifications including B.Ed., M.Ed., or subject specialization degrees",
          hi: "B.Ed., M.Ed., या विषय विशेषज्ञता डिग्री सहित अपनी शैक्षिक योग्यताओं को निर्दिष्ट करें"
        }
      },
      {
        text: { 
          en: "Mention any teaching certifications, workshops, or training programs you have completed",
          hi: "किसी भी शिक्षण प्रमाणपत्र, कार्यशाला, या प्रशिक्षण कार्यक्रम का उल्लेख करें जो आपने पूरा किया है"
        }
      },
      {
        text: { 
          en: "Keep the tone professional and formal throughout the application",
          hi: "आवेदन के दौरान लहजे को पेशेवर और औपचारिक रखें"
        }
      },
      {
        text: { 
          en: "Include measurable achievements like student performance improvement or exam pass rates",
          hi: "छात्र प्रदर्शन में सुधार या परीक्षा पास दर जैसी मापने योग्य उपलब्धियां शामिल करें"
        }
      },
      {
        text: { 
          en: "Attach all relevant documents including resume, certificates, and experience letters",
          hi: "रिज्यूमे, प्रमाणपत्र, और अनुभव पत्र सहित सभी प्रासंगिक दस्तावेज संलग्न करें"
        }
      },
      {
        text: { 
          en: "Proofread carefully for grammar and spelling errors before submission",
          hi: "सबमिशन से पहले व्याकरण और वर्तनी की त्रुटियों के लिए सावधानीपूर्वक प्रूफरीड करें"
        }
      }
    ]
  },

  relatedTemplates: [
    {
      title: { 
        en: "Application for Teaching Job in Private School", 
        hi: "प्राइवेट स्कूल में शिक्षण नौकरी के लिए आवेदन" 
      },
      description: { 
        en: "Specialized format for private school teaching positions",
        hi: "प्राइवेट स्कूल शिक्षण पदों के लिए विशेष प्रारूप"
      },
      icon: 'Briefcase',
      link: "/templates/private-school-teacher"
    },
    {
      title: { 
        en: "Application for Class Teacher Position", 
        hi: "क्लास टीचर पद के लिए आवेदन" 
      },
      description: { 
        en: "Template for class teacher or homeroom teacher role",
        hi: "क्लास टीचर या होमरूम टीचर भूमिका के लिए टेम्पलेट"
      },
      icon: 'GraduationCap',
      link: "/templates/class-teacher"
    },
    {
      title: { 
        en: "Application for Tuition Teacher", 
        hi: "ट्यूशन टीचर के लिए आवेदन" 
      },
      description: { 
        en: "Format for private tuition or coaching teaching jobs",
        hi: "प्राइवेट ट्यूशन या कोचिंग शिक्षण नौकरियों के लिए प्रारूप"
      },
      icon: 'FileText',
      link: "/templates/tuition-teacher"
    }
  ],

  blogArticles: [
    {
      title: { 
        en: "How to Write a Perfect Teacher Job Application", 
        hi: "एक आदर्श शिक्षक नौकरी आवेदन कैसे लिखें" 
      },
      excerpt: { 
        en: "Complete guide with examples and tips to create an impressive teacher job application that gets noticed.",
        hi: "प्रभावशाली शिक्षक नौकरी आवेदन बनाने के लिए उदाहरण और टिप्स के साथ पूर्ण गाइड।"
      },
      readTime: { 
        en: "5 min read", 
        hi: "5 मिनट पढ़ें" 
      },
      link: "/blog/perfect-teacher-application"
    },
    {
      title: { 
        en: "Important Skills to Mention as a Teacher", 
        hi: "एक शिक्षक के रूप में उल्लेख करने के लिए महत्वपूर्ण कौशल" 
      },
      excerpt: { 
        en: "Essential teaching skills and qualities that schools look for in candidates. Boost your application.",
        hi: "आवश्यक शिक्षण कौशल और गुण जो स्कूल उम्मीदवारों में तलाशते हैं।"
      },
      readTime: { 
        en: "4 min read", 
        hi: "4 मिनट पढ़ें" 
      },
      link: "/blog/teacher-skills"
    },
    {
      title: { 
        en: "Common Mistakes in Teacher Job Applications", 
        hi: "शिक्षक नौकरी आवेदनों में सामान्य गलतियाँ" 
      },
      excerpt: { 
        en: "Avoid these common errors that can cost you the teaching job. Learn what NOT to do in your application.",
        hi: "इन सामान्य त्रुटियों से बचें जो आपको शिक्षण नौकरी की कीमत चुका सकती हैं।"
      },
      readTime: { 
        en: "6 min read", 
        hi: "6 मिनट पढ़ें" 
      },
      link: "/blog/teacher-application-mistakes"
    }
  ],

  faqs: [
    {
      question: { 
        en: "Which format is best for fresher teachers?", 
        hi: "फ्रेशर शिक्षकों के लिए कौन सा प्रारूप सबसे अच्छा है?" 
      },
      answer: { 
        en: "The 'Fresher Teacher Job Application' format is specifically designed for new graduates without prior experience. It emphasizes your education, training, and enthusiasm while acknowledging your fresher status. This format helps you present yourself confidently despite lacking work experience.",
        hi: "फ्रेशर टीचर जॉब एप्लिकेशन प्रारूप विशेष रूप से बिना पूर्व अनुभव के नए स्नातकों के लिए डिज़ाइन किया गया है।"
      }
    },
    {
      question: { 
        en: "How to apply as a subject-specific teacher?", 
        hi: "विषय-विशिष्ट शिक्षक के रूप में कैसे आवेदन करें?" 
      },
      answer: { 
        en: "Use the subject-specific templates (Math, English, or Science) that highlight your expertise in that particular subject. These formats emphasize your subject knowledge, teaching methodology specific to that subject, and relevant achievements. Make sure to mention your specialized degree and any subject-specific certifications.",
        hi: "विषय-विशिष्ट टेम्पलेट्स (गणित, अंग्रेजी, या विज्ञान) का उपयोग करें जो उस विशेष विषय में आपकी विशेषज्ञता को उजागर करते हैं।"
      }
    },
    {
      question: { 
        en: "Can I modify these templates for private schools?", 
        hi: "क्या मैं प्राइवेट स्कूलों के लिए इन टेम्पलेट्स को संशोधित कर सकता हूं?" 
      },
      answer: { 
        en: "Yes, absolutely! All these templates can be easily customized for private schools. Simply replace the school name, address, and adjust the content to match the private school environment. Private schools often appreciate seeing examples of innovative teaching methods and technology integration, so consider highlighting these aspects.",
        hi: "हां, बिल्कुल! ये सभी टेम्पलेट्स आसानी से प्राइवेट स्कूलों के लिए अनुकूलित किए जा सकते हैं।"
      }
    },
    {
      question: { 
        en: "Should I mention my B.Ed. degree in the application?", 
        hi: "क्या मुझे आवेदन में अपनी B.Ed. डिग्री का उल्लेख करना चाहिए?" 
      },
      answer: { 
        en: "Yes, definitely mention your B.Ed. (Bachelor of Education) degree as it's a mandatory qualification for teaching in most schools. List it in your educational qualifications section and also mention it in the body of your letter. If you have additional teaching certifications like M.Ed., D.El.Ed., or specialized training, include those as well.",
        hi: "हां, निश्चित रूप से अपनी B.Ed. डिग्री का उल्लेख करें क्योंकि यह अधिकांश स्कूलों में पढ़ाने के लिए अनिवार्य योग्यता है।"
      }
    },
    {
      question: { 
        en: "What documents should I attach with my application?", 
        hi: "मुझे अपने आवेदन के साथ कौन से दस्तावेज़ संलग्न करने चाहिए?" 
      },
      answer: { 
        en: "Essential documents include: 1) Updated resume/CV, 2) B.Ed. certificate, 3) Subject degree certificates (B.Sc., B.A., M.A., etc.), 4) Experience letters (if applicable), 5) Academic transcripts, 6) Photo ID proof, 7) Passport size photographs. If you have awards, certifications, or letters of recommendation, include those as well.",
        hi: "आवश्यक दस्तावेज़ों में शामिल हैं: 1) अपडेट किया गया रिज्यूमे/सीवी, 2) B.Ed. प्रमाणपत्र, 3) विषय डिग्री प्रमाणपत्र।"
      }
    },
    {
      question: { 
        en: "How long should a teacher job application be?", 
        hi: "एक शिक्षक नौकरी आवेदन कितना लंबा होना चाहिए?" 
      },
      answer: { 
        en: "A teacher job application should typically be 1-2 pages long. Freshers can keep it shorter (1 page), while experienced teachers may extend to 1.5-2 pages to include achievements and experience. Focus on quality over quantity - include relevant information that showcases your teaching abilities and qualifications without being overly verbose.",
        hi: "एक शिक्षक नौकरी आवेदन आमतौर पर 1-2 पेज लंबा होना चाहिए। फ्रेशर इसे छोटा रख सकते हैं।"
      }
    }
  ]
};
