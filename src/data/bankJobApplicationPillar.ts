/**
 * JOB APPLICATION FOR BANK JOB — PILLAR TEMPLATE
 */

import { FileText, Briefcase,GraduationCap } from "lucide-react";

export const bankJobApplicationPillar = {
  breadcrumb: {
    category: { en: "Applications", hi: "आवेदन", slug:"/applications" },
    subcategory: { en: "Job Applications", hi: "नौकरी आवेदन", slug:"/applications/job" },
    template: { en: "Bank Job Application", hi: "बैंक नौकरी आवेदन", slug:"" }
  },

  title: {
    en: "Job Application for Bank Job",
    hi: "बैंक नौकरी के लिए आवेदन"
  },

  subtitle: {
    en: "Multiple formats including Bank Clerk, PO, SO, Cashier, Manager, Loan Officer, Relationship Manager, Back Office Staff, and more.",
    hi: "बैंक क्लर्क, पीओ, एसओ, कैशियर, मैनेजर, लोन अधिकारी, रिलेशनशिप मैनेजर, बैक ऑफिस स्टाफ और अन्य के लिए कई प्रारूप उपलब्ध।"
  },

  category: { en: "Job Applications", hi: "नौकरी आवेदन" },

  updatedDate: "January 2025",

  variations: [
    /* ----------------------------------------------------------
     * 1. GENERAL BANK JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "generalBankJob",
      title: {
        en: "General Bank Job Application",
        hi: "सामान्य बैंक नौकरी आवेदन"
      },
      description: {
        en: "Suitable for applying to any general banking role in public or private sector banks.",
        hi: "किसी भी सामान्य बैंकिंग भूमिका (सरकारी या निजी बैंक) के लिए उपयुक्त।"
      },
      bestFor: {
        en: "All-round banking roles",
        hi: "सभी प्रकार की बैंकिंग भूमिकाएँ"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Hiring Manager  
[Bank Name]  
[Branch / Office Address]

Subject: Application for Bank Job Position

Respected Sir/Madam,

I am writing to apply for a suitable banking position at your esteemed bank. I hold a degree in [Qualification] and possess strong knowledge of banking operations, customer service, cash handling, and documentation.

I am a disciplined, detail-oriented professional with strong communication skills. I have experience with MS Office, financial documentation, and customer handling. I can quickly adapt to banking systems and follow compliance protocols.

I believe my skills and dedication make me a suitable candidate for this role. I request you to kindly consider my application.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
हायरिंग मैनेजर  
[बैंक का नाम]

विषय: बैंक नौकरी हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके प्रतिष्ठित बैंक में किसी उपयुक्त बैंकिंग पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मैंने [योग्यता] की डिग्री प्राप्त की है और मुझे बैंकिंग संचालन, ग्राहक सेवा, नकद प्रबंधन और दस्तावेज़ीकरण का ज्ञान है।

मैं अनुशासित और विवरण-उन्मुख हूँ। मुझे MS Office, वित्तीय दस्तावेज़ और ग्राहक प्रबंधन का अनुभव है। मैं बैंकिंग सिस्टम एवं नियमों को जल्दी अपनाने में सक्षम हूँ।

कृपया मेरे आवेदन पर विचार करें।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 2. BANK CLERK JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "bankClerk",
      title: {
        en: "Bank Clerk Job Application",
        hi: "बैंक क्लर्क नौकरी आवेदन"
      },
      description: {
        en: "Perfect for candidates applying for clerk-level roles in banks.",
        hi: "बैंक क्लर्क पद के लिए उपयुक्त एक मानक प्रारूप।"
      },
      bestFor: {
        en: "Bank Clerk, Office Clerk, Data Processing",
        hi: "बैंक क्लर्क, ऑफिस क्लर्क, डेटा प्रसंस्करण"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Branch Manager  
[Bank Name]

Subject: Application for Bank Clerk Position

Respected Sir/Madam,

I am applying for the Bank Clerk position at your branch. I have strong skills in documentation, data entry, cash handling, record maintenance, and customer support.

In my previous job, I managed clerical tasks, updated financial records, assisted customers, processed forms, and worked with banking software. I have strong typing skills and attention to detail.

I request you to kindly consider my application.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]

विषय: बैंक क्लर्क पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके बैंक में बैंक क्लर्क पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे दस्तावेज़ीकरण, डेटा एंट्री, नकद प्रबंधन, रिकॉर्ड रखरखाव और ग्राहक सहायता में अनुभव है।

अपने पिछले कार्य में, मैंने क्लेरिकल कार्य, वित्तीय रिकॉर्ड अपडेट, ग्राहक सहायता, फॉर्म प्रसंस्करण और बैंकिंग सॉफ्टवेयर का उपयोग किया। मेरी टाइपिंग स्पीड और सटीकता अच्छी है।

कृपया मेरे आवेदन पर विचार करें।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 3. BANK PO (PROBATIONARY OFFICER) JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "bankPO",
      title: {
        en: "Bank PO Job Application",
        hi: "बैंक पीओ नौकरी आवेदन"
      },
      description: {
        en: "Designed for candidates applying for Probationary Officer roles.",
        hi: "पीओ (प्रोबेशनरी ऑफिसर) पद के लिए बनाया गया प्रारूप।"
      },
      bestFor: {
        en: "PO, Assistant Manager, Officer Cadre",
        hi: "पीओ, असिस्टेंट मैनेजर, अधिकारी कैडर"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The HR Manager  
[Bank Name]

Subject: Application for Probationary Officer Position

Respected Sir/Madam,

I am writing to express my interest in the Probationary Officer position. I hold a degree in [Qualification] and possess strong communication, leadership, analytical, and decision-making skills essential for banking operations.

I have knowledge of compliance rules, KYC norms, loan processing, customer service, and financial documentation. I am confident that my skills and positive attitude will make me a strong asset to your bank.

I request you to kindly consider my application.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
एचआर मैनेजर  
[बैंक का नाम]

विषय: बैंक पीओ पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके बैंक में प्रोबेशनरी ऑफिसर (पीओ) पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मेरे पास [योग्यता] की डिग्री है और मुझे बैंकिंग संचालन, नेतृत्व क्षमता, संवाद कौशल, विश्लेषणात्मक क्षमता और निर्णय लेने के कौशल का अनुभव है।

मुझे केवाईसी नियम, अनुपालन, ऋण प्रसंस्करण, ग्राहक सेवा और वित्तीय दस्तावेज़ीकरण का ज्ञान है। मुझे विश्वास है कि मैं आपके बैंक के लिए एक मूल्यवान सदस्य सिद्ध होऊंगा/हूँगी।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।  
भवदीय,  
[आपका नाम]`
      }
    },    /* ----------------------------------------------------------
     * 4. BANK SO (SPECIALIST OFFICER) JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "bankSO",
      title: {
        en: "Bank SO (Specialist Officer) Job Application",
        hi: "बैंक एसओ (स्पेशलिस्ट ऑफिसर) नौकरी आवेदन"
      },
      description: {
        en: "For candidates applying to technical or specialized banking roles such as IT, HR, Marketing, Finance, Risk, or Agriculture.",
        hi: "आईटी, एचआर, मार्केटिंग, फाइनेंस, रिस्क या कृषि जैसे विशेष बैंकिंग पदों के लिए उपयुक्त।"
      },
      bestFor: {
        en: "IT Officer, HR Officer, Marketing Officer, Finance Officer",
        hi: "आईटी ऑफिसर, एचआर ऑफिसर, मार्केटिंग ऑफिसर, फाइनेंस ऑफिसर"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The HR Manager  
[Bank Name]

Subject: Application for Specialist Officer Position

Respected Sir/Madam,

I am writing to apply for the Specialist Officer position in your esteemed bank. With expertise in [IT/HR/Marketing/Finance], I bring strong technical knowledge, analytical ability, and practical experience relevant to banking operations.

I have experience working with banking systems, compliance standards, audits, customer management, and documentation. I am confident that my background aligns well with the responsibilities of a Specialist Officer.

Thank you for considering my application.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
एचआर मैनेजर  
[बैंक का नाम]

विषय: स्पेशलिस्ट ऑफिसर पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके बैंक में स्पेशलिस्ट ऑफिसर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे [आईटी/एचआर/मार्केटिंग/फाइनेंस] क्षेत्र में विशेषज्ञता है और बैंकिंग संचालन से संबंधित तकनीकी ज्ञान और अनुभव भी प्राप्त है।

मुझे बैंकिंग सिस्टम, अनुपालन मानक, ऑडिट, ग्राहक प्रबंधन और दस्तावेज़ीकरण का अनुभव है। मुझे विश्वास है कि मेरी योग्यता इस पद की जिम्मेदारियों के अनुरूप है।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 5. BANK MANAGER JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "bankManager",
      title: {
        en: "Bank Manager Job Application",
        hi: "बैंक मैनेजर नौकरी आवेदन"
      },
      description: {
        en: "For senior-level applicants applying for branch manager or operational manager roles.",
        hi: "सीनियर स्तर पर ब्रांच मैनेजर या ऑपरेशन मैनेजर पद हेतु उपयुक्त।"
      },
      bestFor: {
        en: "Branch Manager, Operations Manager, Senior Officer",
        hi: "ब्रांच मैनेजर, ऑपरेशन मैनेजर, वरिष्ठ अधिकारी"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The Regional Manager  
[Bank Name]

Subject: Application for Bank Manager Position

Respected Sir/Madam,

I am writing to apply for the Bank Manager position at your branch. With [X] years of experience in banking operations, team leadership, customer service, loan processing, and business development, I believe I am highly suitable for this role.

I have managed branch operations, supervised staff, ensured compliance, increased customer satisfaction, and achieved business targets consistently. I am confident that my leadership and experience will contribute to your bank's growth.

Thank you for your time and consideration.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
रीजनल मैनेजर  
[बैंक का नाम]

विषय: बैंक मैनेजर पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके बैंक में बैंक मैनेजर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे बैंकिंग संचालन, स्टाफ प्रबंधन, ग्राहक सेवा, लोन प्रोसेसिंग और बिजनेस डेवलपमेंट में [X] वर्षों का अनुभव है।

मैंने अपनी पिछली भूमिका में शाखा संचालन संभाला, कर्मचारियों की निगरानी की, अनुपालन सुनिश्चित किया, ग्राहक संतुष्टि बढ़ाई और बैंक के लक्ष्य लगातार प्राप्त किए।

मेरे अनुभव और नेतृत्व क्षमता से आपके बैंक को लाभ मिलेगा, इसका मुझे विश्वास है।

भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 6. BANK CASHIER / TELLER JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "bankCashier",
      title: {
        en: "Bank Cashier / Teller Job Application",
        hi: "बैंक कैशियर / टेलर नौकरी आवेदन"
      },
      description: {
        en: "Ideal for candidates who want to work as cashiers or tellers at bank branches.",
        hi: "बैंक शाखाओं में कैशियर या टेलर पद के लिए आदर्श।"
      },
      bestFor: {
        en: "Cashier, Teller, Counter Staff",
        hi: "कैशियर, टेलर, काउंटर स्टाफ"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Branch Manager  
[Bank Name]

Subject: Application for Bank Cashier/Teller Position

Respected Sir/Madam,

I am writing to apply for the Cashier/Teller position. I have strong numerical skills, cash handling experience, and knowledge of banking counters and customer servicing tasks.

I have previously managed cash counters, verified transactions, processed deposits/withdrawals, handled customer queries, and maintained accurate records. I am honest, responsible, and capable of handling cash with full accuracy.

Thank you for your consideration.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]

विषय: बैंक कैशियर/टेलर पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके बैंक में कैशियर/टेलर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मेरे पास मजबूत गणनात्मक कौशल, नकद प्रबंधन का अनुभव और बैंक काउंटर संचालन का ज्ञान है।

मेरी पिछली नौकरी में, मैंने नकद काउंटर संभाला, लेनदेन सत्यापित किए, जमा/निकासी प्रसंस्कृत की, ग्राहक प्रश्न हल किए और सटीक रिकॉर्ड बनाए रखा। मैं ईमानदार, जिम्मेदार और सटीकता के साथ नकदी संभालने में सक्षम हूँ।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 7. LOAN OFFICER JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "loanOfficer",
      title: {
        en: "Loan Officer Job Application",
        hi: "लोन ऑफिसर नौकरी आवेदन"
      },
      description: {
        en: "For candidates applying for loan verification, approval, and customer evaluation roles.",
        hi: "ऋण जांच, अनुमोदन और ग्राहक मूल्यांकन भूमिकाओं के लिए उपयुक्त।"
      },
      bestFor: {
        en: "Loan Officer, Credit Officer, Field Verification",
        hi: "लोन ऑफिसर, क्रेडिट ऑफिसर, फील्ड वेरिफिकेशन"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The Loan Department Manager  
[Bank Name]

Subject: Application for Loan Officer Position

Respected Sir/Madam,

I am applying for the Loan Officer position. I have experience in loan documentation, customer eligibility verification, credit evaluation, field verification, and loan processing steps.

I am familiar with bank loan policies, EMI calculations, interest structures, and customer counselling. I am confident that I can contribute strongly to your loan department.

Thank you for your time.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
लोन विभाग मैनेजर  
[बैंक का नाम]

विषय: लोन ऑफिसर पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं लोन ऑफिसर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे ऋण दस्तावेज़ीकरण, ग्राहक योग्यता जांच, क्रेडिट मूल्यांकन, फील्ड वेरिफिकेशन और लोन प्रोसेसिंग में अनुभव है।

मुझे बैंक लोन नीतियाँ, ईएमआई गणना, ब्याज संरचना और ग्राहक मार्गदर्शन का ज्ञान है। मुझे विश्वास है कि मैं आपके लोन विभाग में प्रभावी योगदान दे सकूँगा/सकूँगी।

भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 8. CUSTOMER SERVICE OFFICER (CSO)
     * ---------------------------------------------------------- */
    {
      id: "customerServiceOfficer",
      title: {
        en: "Customer Service Officer Job Application",
        hi: "कस्टमर सर्विस ऑफिसर नौकरी आवेदन"
      },
      description: {
        en: "For roles focused on customer interaction, support, and query resolution.",
        hi: "ग्राहक संपर्क, सहायता और समस्या समाधान पर केंद्रित भूमिकाओं के लिए।"
      },
      bestFor: {
        en: "CSO, Teller, Helpdesk Officer",
        hi: "सीएसओ, टेलर, हेल्पडेस्क ऑफिसर"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Branch Manager  
[Bank Name]

Subject: Application for Customer Service Officer Position

Respected Sir/Madam,

I am writing to apply for the Customer Service Officer position at your branch. I have excellent communication skills and experience assisting customers with account queries, transactions, and documentation.

I have previously worked in customer-facing roles where I handled complaints, provided solutions, processed requests, and maintained service quality.

Kindly consider my application.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]

विषय: कस्टमर सर्विस ऑफिसर पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं आपके बैंक में कस्टमर सर्विस ऑफिसर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे ग्राहक प्रश्नों, खातों से संबंधित समस्याओं, लेनदेन और दस्तावेज़ीकरण में सहायता प्रदान करने का अनुभव है।

पिछले कार्यों में, मैंने शिकायतें संभालीं, समाधान दिए, अनुरोध प्रसंस्कृत किए और सेवा गुणवत्ता बनाए रखी।

कृपया मेरे आवेदन पर विचार करें।  
भवदीय,  
[आपका नाम]`
      }
    },
    /* ----------------------------------------------------------
     * 9. BACK OFFICE STAFF JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "backOfficeStaff",
      title: {
        en: "Back Office Staff Job Application",
        hi: "बैक ऑफिस स्टाफ नौकरी आवेदन"
      },
      description: {
        en: "Ideal for candidates handling documentation, data processing, and internal banking operations.",
        hi: "दस्तावेज़ीकरण, डेटा प्रोसेसिंग और आंतरिक बैंकिंग कार्यों के लिए उपयुक्त।"
      },
      bestFor: {
        en: "Back Office, Data Processing, Internal Operations",
        hi: "बैक ऑफिस, डेटा प्रोसेसिंग, आंतरिक संचालन"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The HR Department  
[Bank Name]

Subject: Application for Back Office Staff Position

Respected Sir/Madam,

I wish to apply for the Back Office Staff position. I have experience in documentation, data entry, record management, and supporting internal banking operations.

My previous responsibilities included maintaining databases, verifying documents, generating reports, and coordinating with other departments. I possess strong accuracy and organizational skills.

Thank you for your time.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
एचआर विभाग  
[बैंक का नाम]

विषय: बैक ऑफिस स्टाफ पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं बैक ऑफिस स्टाफ पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे दस्तावेज़ीकरण, डेटा एंट्री, रिकॉर्ड प्रबंधन और बैंक के आंतरिक संचालन में सहायता करने का अनुभव है।

अपने पिछले कार्य में, मैंने डेटाबेस अपडेट किए, दस्तावेज़ सत्यापित किए, रिपोर्ट तैयार कीं और विभिन्न विभागों के साथ समन्वय किया।

कृपया मेरे आवेदन पर विचार करें।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 10. BRANCH OPERATIONS EXECUTIVE JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "branchOperationsExecutive",
      title: {
        en: "Branch Operations Executive Job Application",
        hi: "ब्रांच ऑपरेशंस एक्जीक्यूटिव नौकरी आवेदन"
      },
      description: {
        en: "Ideal for branch-level operations, coordination, and workflow management roles.",
        hi: "शाखा स्तर के संचालन, समन्वय और वर्कफ़्लो प्रबंधन के लिए उपयुक्त।"
      },
      bestFor: {
        en: "Operations Executive, Branch Coordinator",
        hi: "ऑपरेशंस एक्जीक्यूटिव, ब्रांच कोऑर्डिनेटर"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The Branch Manager  
[Bank Name]

Subject: Application for Branch Operations Executive Position

Respected Sir/Madam,

I am applying for the Branch Operations Executive position. I have experience in managing branch workflow, monitoring daily banking activities, assisting customers, and ensuring compliance.

My responsibilities included coordinating with staff, maintaining reports, handling operational issues, and supporting branch targets.

I look forward to contributing effectively to your branch.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ब्रांच मैनेजर  
[बैंक का नाम]

विषय: ब्रांच ऑपरेशंस एक्जीक्यूटिव पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं ब्रांच ऑपरेशंस एक्जीक्यूटिव पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे शाखा संचालन, दैनिक गतिविधियों की निगरानी, ग्राहक सहायता और अनुपालन सुनिश्चित करने का अनुभव है।

अपने पिछले कार्य में, मैंने स्टाफ के साथ समन्वय किया, रिपोर्ट बनाए रखी, संचालन संबंधी समस्याएं हल कीं और शाखा उद्देश्यों को पूरा करने में सहायता की।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 11. RELATIONSHIP MANAGER JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "relationshipManager",
      title: {
        en: "Relationship Manager Job Application",
        hi: "रिलेशनशिप मैनेजर नौकरी आवेदन"
      },
      description: {
        en: "For roles involving customer relationship building, account management, and sales responsibilities.",
        hi: "ग्राहक संबंध प्रबंधन, खाता प्रबंधन और बिक्री से संबंधित भूमिकाओं के लिए।"
      },
      bestFor: {
        en: "RM, Sales Officer, Customer Relationship Executive",
        hi: "आरएम, सेल्स ऑफिसर, ग्राहक संबंध अधिकारी"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The Relationship Manager Head  
[Bank Name]

Subject: Application for Relationship Manager Position

Respected Sir/Madam,

I am writing to express my interest in the Relationship Manager position. I have a strong background in customer relationship building, cross-selling banking products, and managing customer portfolios.

I have experience in achieving sales targets, resolving customer queries, maintaining long-term relationships, and promoting financial services.

Please consider my application.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
रिलेशनशिप मैनेजर प्रमुख  
[बैंक का नाम]

विषय: रिलेशनशिप मैनेजर पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं रिलेशनशिप मैनेजर पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे ग्राहक संबंध निर्माण, बैंक उत्पादों की बिक्री और ग्राहक पोर्टफोलियो प्रबंधन का अनुभव है।

मैंने बिक्री लक्ष्य प्राप्त किए, ग्राहकों की समस्याएँ हल कीं, दीर्घकालिक संबंध बनाए और बैंक की सेवाओं को बढ़ावा दिया।

कृपया मेरे आवेदन पर विचार करें।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 12. CREDIT ANALYST JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "creditAnalyst",
      title: {
        en: "Credit Analyst Job Application",
        hi: "क्रेडिट विश्लेषक नौकरी आवेदन"
      },
      description: {
        en: "Suitable for candidates evaluating customer creditworthiness and loan risk.",
        hi: "ग्राहक की क्रेडिट योग्यता और ऋण जोखिम का विश्लेषण करने वाले उम्मीदवारों के लिए।"
      },
      bestFor: {
        en: "Credit Officer, Credit Analyst, Loan Evaluation",
        hi: "क्रेडिट ऑफिसर, क्रेडिट विश्लेषक, लोन मूल्यांकन"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The Credit Department  
[Bank Name]

Subject: Application for Credit Analyst Position

Respected Sir/Madam,

I am applying for the Credit Analyst role. I have experience in analyzing financial statements, evaluating credit scores, assessing loan eligibility, and preparing credit reports.

I am familiar with risk assessment tools, financial ratios, and loan policy guidelines. I can ensure precise and responsible evaluation of loan applications.

Thank you for considering my application.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
क्रेडिट विभाग  
[बैंक का नाम]

विषय: क्रेडिट विश्लेषक पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं क्रेडिट विश्लेषक पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे वित्तीय विवरणों का विश्लेषण, क्रेडिट स्कोर मूल्यांकन, ऋण पात्रता जांच और क्रेडिट रिपोर्ट तैयार करने का अनुभव है।

मैं जोखिम मूल्यांकन, वित्तीय अनुपात और लोन नीतियों से परिचित हूँ। मैं ऋण आवेदनों का सटीक और जिम्मेदार मूल्यांकन कर सकता/सकती हूँ।

कृपया मेरे आवेदन पर विचार करें।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 13. COMPLIANCE OFFICER JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "complianceOfficer",
      title: {
        en: "Compliance Officer Job Application",
        hi: "अनुपालन अधिकारी नौकरी आवेदन"
      },
      description: {
        en: "For candidates applying for regulatory compliance, audit, and risk management roles.",
        hi: "नियमित अनुपालन, ऑडिट और जोखिम प्रबंधन पदों के लिए उपयुक्त।"
      },
      bestFor: {
        en: "Compliance Officer, Audit Officer, Risk Analyst",
        hi: "अनुपालन अधिकारी, ऑडिट अधिकारी, जोखिम विश्लेषक"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The Compliance Department  
[Bank Name]

Subject: Application for Compliance Officer Position

Respected Sir/Madam,

I am applying for the Compliance Officer position. I have experience in monitoring regulatory requirements, conducting audits, maintaining compliance documentation, and ensuring adherence to RBI guidelines.

I am detail-oriented, responsible, and skilled in identifying operational risks and compliance gaps.

Thank you for your time.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
अनुपालन विभाग  
[बैंक का नाम]

विषय: अनुपालन अधिकारी पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं अनुपालन अधिकारी पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे नियामक आवश्यकताओं की निगरानी, ऑडिट संचालित करने, अनुपालन दस्तावेज़ तैयार करने और आरबीआई दिशानिर्देशों का पालन सुनिश्चित करने का अनुभव है।

मैं विवरण-उन्मुख, जिम्मेदार और जोखिम पहचान में कुशल हूँ।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 14. FINANCIAL ADVISOR JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "financialAdvisor",
      title: {
        en: "Financial Advisor Job Application",
        hi: "फाइनेंशियल एडवाइज़र नौकरी आवेदन"
      },
      description: {
        en: "For roles involving financial planning, investment advisory, and customer portfolio assistance.",
        hi: "वित्तीय योजना, निवेश सलाह और ग्राहक पोर्टफोलियो सहायता से संबंधित भूमिकाओं के लिए।"
      },
      bestFor: {
        en: "Financial Advisor, Wealth Manager, Investment Officer",
        hi: "फाइनेंशियल एडवाइज़र, वेल्थ मैनेजर, निवेश अधिकारी"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Moderate", hi: "मध्यम" },

      content: {
        en: `To,  
The Wealth Management Department  
[Bank Name]

Subject: Application for Financial Advisor Position

Respected Sir/Madam,

I am applying for the Financial Advisor position. I have experience advising customers on savings, investments, insurance, and long-term financial planning.

I am familiar with mutual funds, term plans, fixed deposits, and portfolio management. I can help customers make informed financial decisions.

Looking forward to your response.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
वेल्थ मैनेजमेंट विभाग  
[बैंक का नाम]

विषय: फाइनेंशियल एडवाइज़र पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं फाइनेंशियल एडवाइज़र पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे ग्राहकों को बचत योजनाओं, निवेश, बीमा और दीर्घकालिक वित्तीय योजना पर सलाह देने का अनुभव है।

मैं म्यूचुअल फंड, टर्म प्लान, फिक्स्ड डिपॉजिट और पोर्टफोलियो मैनेजमेंट से परिचित हूँ। मैं ग्राहकों को सही वित्तीय निर्णय लेने में मदद कर सकता/सकती हूँ।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।  
भवदीय,  
[आपका नाम]`
      }
    },

    /* ----------------------------------------------------------
     * 15. ATM SUPPORT STAFF JOB APPLICATION
     * ---------------------------------------------------------- */
    {
      id: "atmSupportStaff",
      title: {
        en: "ATM Support Staff Job Application",
        hi: "एटीएम सपोर्ट स्टाफ नौकरी आवेदन"
      },
      description: {
        en: "Suitable for ATM support, machine maintenance, cash replenishment, and troubleshooting tasks.",
        hi: "एटीएम सपोर्ट, मशीन रखरखाव, कैश रिफिल और समस्या समाधान के लिए उपयुक्त।"
      },
      bestFor: {
        en: "ATM Support, Technical Assistant, Field Staff",
        hi: "एटीएम सपोर्ट, तकनीकी सहायक, फील्ड स्टाफ"
      },
      length: { en: "Medium", hi: "मध्यम" },
      difficulty: { en: "Easy", hi: "आसान" },

      content: {
        en: `To,  
The Operations Manager  
[Bank Name]

Subject: Application for ATM Support Staff Position

Respected Sir/Madam,

I am applying for the ATM Support Staff position. I have experience in ATM monitoring, minor technical troubleshooting, coordinating cash replenishment, and maintaining service logs.

I can ensure smooth functioning of ATM machines and provide timely support during breakdowns.

Thank you for considering my application.

Sincerely,  
[Your Name]`,

        hi: `सेवा में,  
ऑपरेशंस मैनेजर  
[बैंक का नाम]

विषय: एटीएम सपोर्ट स्टाफ पद हेतु आवेदन

माननीय महोदय/महोदया,

मैं एटीएम सपोर्ट स्टाफ पद हेतु आवेदन प्रस्तुत कर रहा/रही हूँ। मुझे एटीएम निगरानी, तकनीकी समस्या समाधान, कैश रिफिल समन्वय और सर्विस लॉग बनाए रखने का अनुभव है।

मैं एटीएम मशीनों के सुचारू संचालन को सुनिश्चित कर सकता/सकती हूँ और खराबी की स्थिति में तुरंत सहायता प्रदान कर सकता/सकती हूँ।

मेरे आवेदन पर विचार करने के लिए धन्यवाद।  
भवदीय,  
[आपका नाम]`
      }
    },

  ],
  /* ----------------------------------------------------------
   * HOW TO WRITE (TIPS SECTION)
   * ---------------------------------------------------------- */
  howToWrite: {
    title: {
      en: "Tips to Write a Professional Bank Job Application",
      hi: "बैंक नौकरी आवेदन लिखने के लिए महत्वपूर्ण टिप्स"
    },
    tips: [
      {
        text: {
          en: "Mention your banking knowledge, finance skills, and experience with customer handling or operations.",
          hi: "अपना बैंकिंग ज्ञान, वित्तीय कौशल और ग्राहक प्रबंधन/ऑपरेशन अनुभव का उल्लेख करें।"
        }
      },
      {
        text: {
          en: "Highlight certifications like banking, finance, tally, computer skills, or customer service training.",
          hi: "बैंकिंग, वित्त, टैली, कंप्यूटर कौशल या ग्राहक सेवा प्रशिक्षण जैसे प्रमाणपत्रों को हाईलाइट करें।"
        }
      },
      {
        text: {
          en: "Keep your letter formal and short with clear purpose and confidence.",
          hi: "अपना पत्र औपचारिक, छोटा और स्पष्ट उद्देश्य के साथ लिखें।"
        }
      },
      {
        text: {
          en: "Show achievements like cash handling accuracy, sales targets achieved, customer satisfaction, etc.",
          hi: "उपलब्धियाँ जोड़ें जैसे कैश हैंडलिंग सटीकता, सेल्स टार्गेट, ग्राहक संतुष्टि आदि।"
        }
      },
      {
        text: {
          en: "Customize the application according to role (Clerk, PO, Cashier, Manager, RM, etc.).",
          hi: "क्लर्क, पीओ, कैशियर, मैनेजर, आरएम आदि के अनुसार आवेदन को कस्टमाइज़ करें।"
        }
      },
      {
        text: {
          en: "Attach essential documents like resume, ID proof, certificate copies, and experience letters.",
          hi: "रिज़्यूमे, आईडी प्रूफ, प्रमाणपत्र और अनुभव पत्र जैसे दस्तावेज़ अवश्य संलग्न करें।"
        }
      },
      {
        text: {
          en: "Proofread before submitting to avoid spelling/grammar mistakes.",
          hi: "जमा करने से पहले व्याकरण और वर्तनी त्रुटियों की जांच करें।"
        }
      }
    ]
  },

  /* ----------------------------------------------------------
   * RELATED TEMPLATES (with icons)
   * ---------------------------------------------------------- */
  relatedTemplates: [
    {
      title: {
        en: "Application for Bank Clerk Position",
        hi: "बैंक क्लर्क पद के लिए आवेदन"
      },
      description: {
        en: "A simple and effective format for applying to Bank Clerk roles.",
        hi: "बैंक क्लर्क पद के लिए सरल और प्रभावी प्रारूप।"
      },
      icon: 'FileText',
      link: "/templates/bank-clerk"
    },
    {
      title: {
        en: "Application for Bank Manager Job",
        hi: "बैंक मैनेजर नौकरी के लिए आवेदन"
      },
      description: {
        en: "Professional format for Manager, Senior Manager, and Assistant Manager posts.",
        hi: "मैनेजर, सीनियर मैनेजर और असिस्टेंट मैनेजर पदों के लिए पेशेवर प्रारूप।"
      },
      icon: 'Briefcase',
      link: "/templates/bank-manager"
    },
    {
      title: {
        en: "Application for Cashier / Teller Job",
        hi: "कैशियर / टेलर नौकरी के लिए आवेदन"
      },
      description: {
        en: "Best format for bank cashier and teller positions.",
        hi: "बैंक कैशियर और टेलर पदों के लिए सर्वोत्तम प्रारूप।"
      },
      icon: 'GraduationCap',
      link: "/templates/bank-cashier"
    }
  ],

  /* ----------------------------------------------------------
   * BLOG ARTICLES
   * ---------------------------------------------------------- */
  blogArticles: [
    {
      title: {
        en: "How to Write a Perfect Bank Job Application",
        hi: "एक आदर्श बैंक नौकरी आवेदन कैसे लिखें"
      },
      excerpt: {
        en: "A complete guide with tips and sample formats for clerks, PO, cashier, and operations roles.",
        hi: "क्लर्क, पीओ, कैशियर और ऑपरेशन पदों के लिए नमूनों और टिप्स के साथ संपूर्ण गाइड।"
      },
      readTime: { en: "5 min read", hi: "5 मिनट पढ़ें" },
      link: "/blog/perfect-bank-job-application"
    },
    {
      title: {
        en: "Skills Required for Bank Jobs",
        hi: "बैंक नौकरियों के लिए आवश्यक कौशल"
      },
      excerpt: {
        en: "Top banking, customer service, finance, and computer skills you should mention.",
        hi: "बैंकिंग, ग्राहक सेवा, वित्त और कंप्यूटर कौशल जो आपको अवश्य उल्लेख करने चाहिए।"
      },
      readTime: { en: "4 min read", hi: "4 मिनट पढ़ें" },
      link: "/blog/bank-job-skills"
    },
    {
      title: {
        en: "Common Mistakes in Bank Job Applications",
        hi: "बैंक नौकरी आवेदनों में आम गलतियाँ"
      },
      excerpt: {
        en: "Avoid these mistakes to increase your chance of selection.",
        hi: "इन गलतियों से बचें और चयन होने की संभावना बढ़ाएँ।"
      },
      readTime: { en: "6 min read", hi: "6 मिनट पढ़ें" },
      link: "/blog/bank-job-application-mistakes"
    }
  ],

  /* ----------------------------------------------------------
   * FAQS
   * ---------------------------------------------------------- */
  faqs: [
    {
      question: {
        en: "Which format should I use for bank fresher roles?",
        hi: "बैंक फ्रेशर भूमिकाओं के लिए कौन सा प्रारूप उपयोग करें?"
      },
      answer: {
        en: "Use the Fresher Bank Job Application format. It highlights qualifications, basic banking knowledge, and communication skills—perfect for candidates without experience.",
        hi: "फ्रेशर बैंक जॉब एप्लिकेशन फॉर्मेट उपयोग करें। यह योग्यता, बेसिक बैंकिंग ज्ञान और कम्युनिकेशन स्किल्स को हाईलाइट करता है।"
      }
    },
    {
      question: {
        en: "Should I mention computer or tally skills?",
        hi: "क्या मुझे कंप्यूटर या टैली कौशल का उल्लेख करना चाहिए?"
      },
      answer: {
        en: "Yes. Banking jobs prefer candidates with MS Office, Tally, Excel, and basic computer operations knowledge.",
        hi: "हाँ। बैंक नौकरियों में MS Office, Tally, Excel और कंप्यूटर ज्ञान वाले उम्मीदवारों को प्राथमिकता दी जाती है।"
      }
    },
    {
      question: {
        en: "What documents should be attached with a bank job application?",
        hi: "बैंक नौकरी आवेदन के साथ कौन से दस्तावेज़ संलग्न करें?"
      },
      answer: {
        en: "Attach your resume, ID proof, qualification documents, experience letters (if any), and passport-size photos.",
        hi: "रिज़्यूमे, आईडी प्रूफ, योग्यता दस्तावेज़, अनुभव पत्र (यदि कोई हो) और पासपोर्ट साइज़ फोटो संलग्न करें।"
      }
    },
    {
      question: {
        en: "How long should a bank job application be?",
        hi: "बैंक नौकरी आवेदन कितना लंबा होना चाहिए?"
      },
      answer: {
        en: "Ideally 1 page for freshers and 1–1.5 pages for experienced candidates. Stay concise and professional.",
        hi: "फ्रेशर के लिए 1 पेज और अनुभवी उम्मीदवार के लिए 1–1.5 पेज पर्याप्त हैं। संक्षिप्त और औपचारिक रहें।"
      }
    }
  ]
 }
