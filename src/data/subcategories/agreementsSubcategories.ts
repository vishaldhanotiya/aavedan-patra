/**
 * ALL AGREEMENTS SUBCATEGORIES (6 total)
 * Complete data for Agreements category subcategories
 */

import { SubcategoryData } from "../category/jobCategory";


// 1. RENTAL AGREEMENTS
export const rentalAgreementsData: SubcategoryData = {
  slug: "rental",
  categorySlug: "agreements",
  categoryName: { en: "Agreements", hi: "समझौते" },
  subcategoryName: { en: "Rental Agreements", hi: "किराया समझौते" },
  breadcrumb: [
    { en: "Agreements", hi: "समझौते" },
    { en: "Rental Agreements", hi: "किराया समझौते" },
  ],
  heroTitle: { en: "Rental Agreement Templates", hi: "किराया समझौता टेम्पलेट" },
  heroDescription: {
    en: "Professional house and property rental agreement formats - legally valid lease and tenancy templates.",
    hi: "पेशेवर घर और संपत्ति किराया समझौता प्रारूप - कानूनी रूप से वैध पट्टा और किरायेदारी टेम्पलेट।",
  },
  searchPlaceholder: { en: "Search rental agreement templates…", hi: "किराया समझौता टेम्पलेट खोजें..." },
  tags: ["Lease Agreement", "Rent Deed", "Property Rental", "Tenancy Agreement", "House Rent", "Commercial Lease"],
  templates: [
    {
      id: "rental-1",
      title: { en: "House Rent Agreement", hi: "घर किराया समझौता" },
      description: { en: "Standard residential house rental agreement format.", hi: "मानक आवासीय घर किराया समझौता प्रारूप।" },
      lastUpdated: "Nov 2025",
      views: "62.4k",
      badge: "Popular",
      templateSlug:'/'
    },
    {
      id: "rental-2",
      title: { en: "Flat Rental Agreement", hi: "फ्लैट किराया समझौता" },
      description: { en: "Apartment/flat lease agreement template.", hi: "अपार्टमेंट/फ्लैट पट्टा समझौता टेम्पलेट।" },
      lastUpdated: "Nov 2025",
      views: "57.8k",
      badge: "Trending",
      templateSlug:'/'
    },
    {
      id: "rental-3",
      title: { en: "Commercial Property Rent", hi: "वाणिज्यिक संपत्ति किराया" },
      description: { en: "Commercial property rental agreement for shops and offices.", hi: "दुकानों और कार्यालयों के लिए वाणिज्यिक संपत्ति किराया समझौता।" },
      lastUpdated: "Nov 2025",
      views: "52.3k",
      templateSlug:'/'
    },
    {
      id: "rental-4",
      title: { en: "Leave and License Agreement", hi: "लीव एंड लाइसेंस समझौता" },
      description: { en: "Maharashtra style leave and license format.", hi: "महाराष्ट्र शैली लीव और लाइसेंस प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "48.1k",
      templateSlug:'/'
    },
    {
      id: "rental-5",
      title: { en: "Room Rent Agreement", hi: "कमरा किराया समझौता" },
      description: { en: "Single room rental agreement template.", hi: "एकल कमरा किराया समझौता टेम्पलेट।" },
      lastUpdated: "Oct 2025",
      views: "44.6k",
      templateSlug:'/'
    },
    {
      id: "rental-6",
      title: { en: "Office Space Rental", hi: "कार्यालय स्थान किराया" },
      description: { en: "Office space lease agreement format.", hi: "कार्यालय स्थान पट्टा समझौता प्रारूप।" },
      lastUpdated: "Oct 2025",
      views: "41.2k",
      templateSlug:'/'
    },
  ],
  seoTitle: { en: "About Rental Agreement Templates", hi: "किराया समझौता टेम्पलेट के बारे में" },
  seoDescription: {
    en: "Rental agreements legally document property leasing arrangements between landlords and tenants. Our templates include house rent agreements for residential properties, flat rental agreements for apartments, commercial property rentals for business spaces, leave and license agreements for Maharashtra, room rent agreements for single occupancy, and office space rentals. Each template includes rent amount, duration, deposit, maintenance, and legal clauses for complete tenancy documentation.",
    hi: "किराया समझौते कानूनी रूप से मकान मालिकों और किरायेदारों के बीच संपत्ति पट्टे की व्यवस्था को दस्तावेज करते हैं।",
  },
  relatedTemplates: [
    { title: { en: "Personal Agreement", hi: "व्यक्तिगत समझौता" }, category: { en: "Agreements", hi: "समझौते" }, slug: "personal" },
    { title: { en: "Legal Forms", hi: "कानूनी फॉर्म" }, category: { en: "Agreements", hi: "समझौते" }, slug: "legal" },
    { title: { en: "Formal Letter", hi: "औपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
    { title: { en: "Office Notice", hi: "कार्यालय नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "office" },
  ],
  blogPosts: [
    { title: { en: "Rental Agreement Essentials", hi: "किराया समझौता आवश्यकताएं" }, excerpt: { en: "What every rental agreement must include", hi: "हर किराया समझौते में क्या शामिल होना चाहिए" }, readTime: "9 min read", slug: "rental-agreement-essentials" },
    { title: { en: "Landlord-Tenant Rights", hi: "मकान मालिक-किरायेदार अधिकार" }, excerpt: { en: "Understanding legal rights and responsibilities", hi: "कानूनी अधिकारों और जिम्मेदारियों को समझना" }, readTime: "10 min read", slug: "landlord-tenant-rights" },
    { title: { en: "Rental Agreement Registration", hi: "किराया समझौता पंजीकरण" }, excerpt: { en: "When and how to register rent agreements", hi: "किराया समझौते को कब और कैसे पंजीकृत करें" }, readTime: "8 min read", slug: "agreement-registration" },
  ],
  faqs: [
    { question: { en: "What should a rental agreement include?", hi: "किराया समझौते में क्या शामिल होना चाहिए?" }, answer: { en: "Essential clauses: Parties' details, property address, rent amount, payment date, security deposit, lease duration, maintenance responsibilities, termination notice period, renewal terms, utilities, and signatures. Attach ID proofs and property documents.", hi: "आवश्यक खंड: पार्टियों का विवरण, संपत्ति पता, किराया राशि, भुगतान तिथि, सुरक्षा जमा, पट्टा अवधि, रखरखाव जिम्मेदारियां।" } },
    { question: { en: "Is registration of rental agreement mandatory?", hi: "क्या किराया समझौते का पंजीकरण अनिवार्य है?" }, answer: { en: "Registration is mandatory if lease exceeds 11 months. For 11 months or less, notarization is sufficient but registration is recommended. Registration provides legal protection and is required for claiming HRA tax benefits. Stamp duty varies by state.", hi: "यदि पट्टा 11 महीने से अधिक है तो पंजीकरण अनिवार्य है। 11 महीने या उससे कम के लिए, नोटरीकरण पर्याप्त है लेकिन पंजीकरण की सिफारिश की जाती है।" } },
    { question: { en: "What is security deposit in rental agreement?", hi: "किराया समझौते में सुरक्षा जमा क्या है?" }, answer: { en: "Security deposit (typically 2-3 months' rent) is refundable amount paid upfront to cover damages or unpaid rent. Landlord must return it after lease ends, minus legitimate deductions. Get deposit return clause in writing with timeline.", hi: "सुरक्षा जमा (आमतौर पर 2-3 महीने का किराया) क्षति या अवैतनिक किराया को कवर करने के लिए अग्रिम भुगतान की गई वापसी योग्य राशि है।" } },
  ],
};

// 2. BUSINESS AGREEMENTS
export const businessAgreementsData: SubcategoryData = {
  slug: "business",
  categorySlug: "agreements",
  categoryName: { en: "Agreements", hi: "समझौते" },
  subcategoryName: { en: "Business Agreements", hi: "व्यापार समझौते" },
  breadcrumb: [{ en: "Agreements", hi: "समझौते" }, { en: "Business Agreements", hi: "व्यापार समझौते" }],
  heroTitle: { en: "Business Agreement Templates", hi: "व्यापार समझौता टेम्पलेट" },
  heroDescription: { en: "Professional business contract formats for partnerships and commercial deals - legally binding business templates.", hi: "साझेदारी और वाणिज्यिक सौदों के लिए पेशेवर व्यापार अनुबंध प्रारूप - कानूनी रूप से बाध्यकारी व्यापार टेम्पलेट।" },
  searchPlaceholder: { en: "Search business agreement templates…", hi: "व्यापार समझौता टेम्पलेट खोजें..." },
  tags: ["Partnership Deed", "Business Contract", "Vendor Agreement", "Service Agreement", "Commercial Deal", "Business Terms"],
  templates: [
    { id: "business-1", title: { en: "Partnership Agreement", hi: "साझेदारी समझौता" }, description: { en: "Partnership deed format for business partnerships.", hi: "व्यापार साझेदारी के लिए साझेदारी विलेख प्रारूप।" }, lastUpdated: "Nov 2025", views: "55.9k", badge: "Popular",templateSlug:'/' },
    { id: "business-2", title: { en: "Business Contract Template", hi: "व्यापार अनुबंध टेम्पलेट" }, description: { en: "General business contract for commercial transactions.", hi: "वाणिज्यिक लेनदेन के लिए सामान्य व्यापार अनुबंध।" }, lastUpdated: "Nov 2025", views: "51.4k", badge: "Trending",templateSlug:'/' },
    { id: "business-3", title: { en: "Vendor Agreement", hi: "विक्रेता समझौता" }, description: { en: "Agreement format for vendor and supplier relationships.", hi: "विक्रेता और आपूर्तिकर्ता संबंधों के लिए समझौता प्रारूप।" }, lastUpdated: "Nov 2025", views: "47.6k",templateSlug:'/' },
    { id: "business-4", title: { en: "Service Agreement", hi: "सेवा समझौता" }, description: { en: "Service contract for professional services.", hi: "पेशेवर सेवाओं के लिए सेवा अनुबंध।" }, lastUpdated: "Oct 2025", views: "43.8k" ,templateSlug:'/'},
    { id: "business-5", title: { en: "Supplier Agreement", hi: "आपूर्तिकर्ता समझौता" }, description: { en: "Agreement template for supplier relationships.", hi: "आपूर्तिकर्ता संबंधों के लिए समझौता टेम्पलेट।" }, lastUpdated: "Oct 2025", views: "40.2k" ,templateSlug:'/'},
    { id: "business-6", title: { en: "Distribution Agreement", hi: "वितरण समझौता" }, description: { en: "Distributor agreement for product distribution.", hi: "उत्पाद वितरण के लिए वितरक समझौता।" }, lastUpdated: "Oct 2025", views: "37.1k",templateSlug:'/' },
  ],
  seoTitle: { en: "About Business Agreement Templates", hi: "व्यापार समझौता टेम्पलेट के बारे में" },
  seoDescription: { en: "Business agreements formalize commercial relationships and transactions. Our templates include partnership agreements defining business partnerships, general business contracts for transactions, vendor agreements for supplier relationships, service agreements for professional services, supplier agreements for procurement, and distribution agreements for product distribution with clear terms, responsibilities, and dispute resolution clauses.", hi: "व्यापार समझौते वाणिज्यिक संबंधों और लेनदेन को औपचारिक बनाते हैं।" },
  relatedTemplates: [
    { title: { en: "Employment Contract", hi: "रोजगार अनुबंध" }, category: { en: "Agreements", hi: "समझौते" }, slug: "employment" },
    { title: { en: "Legal Forms", hi: "कानूनी फॉर्म" }, category: { en: "Agreements", hi: "समझौते" }, slug: "legal" },
    { title: { en: "Formal Letter", hi: "औपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
    { title: { en: "Meeting Report", hi: "बैठक रिपोर्ट" }, category: { en: "Notices", hi: "नोटिस" }, slug: "meeting" },
  ],
  blogPosts: [
    { title: { en: "Business Contract Essentials", hi: "व्यापार अनुबंध आवश्यकताएं" }, excerpt: { en: "Key clauses every business agreement needs", hi: "हर व्यापार समझौते को आवश्यक प्रमुख खंड" }, readTime: "10 min read", slug: "business-contract-essentials" },
    { title: { en: "Partnership Agreement Guide", hi: "साझेदारी समझौता गाइड" }, excerpt: { en: "Creating fair partnership agreements", hi: "निष्पक्ष साझेदारी समझौते बनाना" }, readTime: "11 min read", slug: "partnership-guide" },
    { title: { en: "Negotiating Business Contracts", hi: "व्यापार अनुबंधों पर बातचीत" }, excerpt: { en: "Tips for successful business negotiations", hi: "सफल व्यापार बातचीत के लिए सुझाव" }, readTime: "9 min read", slug: "contract-negotiation" },
  ],
  faqs: [
    { question: { en: "What is a business agreement?", hi: "व्यापार समझौता क्या है?" }, answer: { en: "A business agreement is a legally binding contract between two or more parties outlining business terms, responsibilities, payment, deliverables, and dispute resolution. It protects all parties' interests and provides legal recourse if terms are breached.", hi: "व्यापार समझौता दो या दो से अधिक पक्षों के बीच एक कानूनी रूप से बाध्यकारी अनुबंध है जो व्यापार शर्तों को रेखांकित करता है।" } },
    { question: { en: "Should I get business agreements in writing?", hi: "क्या मुझे लिखित रूप में व्यापार समझौते प्राप्त करने चाहिए?" }, answer: { en: "Always! Verbal agreements are hard to enforce. Written agreements clearly document terms, prevent misunderstandings, provide legal evidence, protect against disputes. Get them signed by all parties and notarized for added authenticity.", hi: "हमेशा! मौखिक समझौते लागू करना कठिन है। लिखित समझौते स्पष्ट रूप से शर्तों को दस्तावेज करते हैं, गलतफहमी को रोकते हैं।" } },
    { question: { en: "Do business agreements need to be notarized?", hi: "क्या व्यापार समझौतों को नोटरीकृत करने की आवश्यकता है?" }, answer: { en: "Not mandatory but highly recommended. Notarization adds legal validity and makes agreements more enforceable in court. For partnership deeds and major contracts, notarization or registration is advisable. Check specific requirements for your jurisdiction.", hi: "अनिवार्य नहीं लेकिन अत्यधिक अनुशंसित। नोटरीकरण कानून��� वैधता जोड़ता है। साझेदारी विलेख के लिए नोटरीकरण या पंजीकरण उचित है।" } },
  ],
};

// 3. EMPLOYMENT CONTRACTS
export const employmentContractsData: SubcategoryData = {
  slug: "employment",
  categorySlug: "agreements",
  categoryName: { en: "Agreements", hi: "समझौते" },
  subcategoryName: { en: "Employment Contracts", hi: "रोजगार अनुबंध" },
  breadcrumb: [{ en: "Agreements", hi: "समझौते" }, { en: "Employment Contracts", hi: "रोजगार अनुबंध" }],
  heroTitle: { en: "Employment Contract Templates", hi: "रोजगार अनुबंध टेम्पलेट" },
  heroDescription: { en: "Professional employment agreement formats for hiring - job offer letters and work contract templates.", hi: "भर्ती के लिए पेशेवर रोजगार समझौता प्रारूप - नौकरी प्रस्ताव पत्र और कार्य अनुबंध टेम्पलेट।" },
  searchPlaceholder: { en: "Search employment contract templates…", hi: "रोजगार अनुबंध टेम्पलेट खोजें..." },
  tags: ["Offer Letter", "Employment Agreement", "Job Contract", "Appointment Letter", "NDA", "Work Agreement"],
  templates: [
    { id: "employ-1", title: { en: "Employment Agreement", hi: "रोजगार समझौता" }, description: { en: "Standard employment contract with terms and conditions.", hi: "शर्तों और नियमों के साथ मानक रोजगार अनुबंध।" }, lastUpdated: "Nov 2025", views: "59.3k", badge: "Popular",templateSlug:'/' },
    { id: "employ-2", title: { en: "Offer Letter Format", hi: "ऑफर लेटर प्रारूप" }, description: { en: "Job offer letter template with salary and position details.", hi: "वेतन और पद विवरण के साथ नौकरी प्रस्ताव पत्र टेम्पलेट।" }, lastUpdated: "Nov 2025", views: "54.7k", badge: "Trending",templateSlug:'/' },
    { id: "employ-3", title: { en: "Appointment Letter", hi: "नियुक्ति पत्र" }, description: { en: "Formal appointment letter for employees.", hi: "कर्मचारियों के लिए औपचारिक नियुक्ति पत्र।" }, lastUpdated: "Nov 2025", views: "50.2k" ,templateSlug:'/'},
    { id: "employ-4", title: { en: "Service Contract", hi: "सेवा अनुबंध" }, description: { en: "Employment service contract for contractual positions.", hi: "अनुबंधित पदों के लिए रोजगार सेवा अनुबंध।" }, lastUpdated: "Oct 2025", views: "46.1k",templateSlug:'/' },
    { id: "employ-5", title: { en: "Consulting Agreement", hi: "परामर्श समझौता" }, description: { en: "Consultant agreement for freelance professionals.", hi: "फ्रीलांस पेशेवरों के लिए सलाहकार समझौता।" }, lastUpdated: "Oct 2025", views: "42.8k" ,templateSlug:'/'},
    { id: "employ-6", title: { en: "NDA Agreement", hi: "एनडीए समझौता" }, description: { en: "Non-Disclosure Agreement for confidential information.", hi: "गोपनीय जानकारी के लिए गैर-प्रकटीकरण समझौता।" }, lastUpdated: "Oct 2025", views: "39.4k",templateSlug:'/' },
  ],
  seoTitle: { en: "About Employment Contract Templates", hi: "रोजगार अनुबंध टेम्पलेट के बारे में" },
  seoDescription: { en: "Employment contracts formalize job relationships between employers and employees. Our templates include employment agreements with job terms, offer letters stating salary and position, appointment letters for new hires, service contracts for contractual roles, consulting agreements for freelancers, and NDA agreements protecting confidential information with clear employment terms and conditions.", hi: "रोजगार अनुबंध नियोक्ताओं और कर्मचारियों के बीच नौकरी संबंधों को औपचारिक बनाते हैं।" },
  relatedTemplates: [
    { title: { en: "Experience Certificate", hi: "अनुभव प्रमाणपत्र" }, category: { en: "Certificates", hi: "प्रमाणपत्र" }, slug: "experience" },
    { title: { en: "Resignation Letter", hi: "त्यागपत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "resignation" },
    { title: { en: "Professional Resume", hi: "पेशेवर रिज्यूमे" }, category: { en: "Resumes", hi: "रिज्यूमे" }, slug: "professional" },
    { title: { en: "Office Notice", hi: "कार्यालय नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "office" },
  ],
  blogPosts: [
    { title: { en: "Employment Contract Best Practices", hi: "रोजगार अनुबंध सर्वोत्तम प्रथाएं" }, excerpt: { en: "Creating fair employment agreements", hi: "निष्पक्ष रोजगार समझौते बनाना" }, readTime: "10 min read", slug: "employment-contract-practices" },
    { title: { en: "Understanding NDAs", hi: "एनडीए को समझना" }, excerpt: { en: "Non-Disclosure Agreements explained", hi: "गैर-प्रकटीकरण समझौते समझाए गए" }, readTime: "8 min read", slug: "understanding-ndas" },
    { title: { en: "Employee Rights and Contracts", hi: "कर्मचारी अधिकार और अनुबंध" }, excerpt: { en: "What employees should know about contracts", hi: "कर्मचारियों को अनुबंधों के बारे में क्या जानना चाहिए" }, readTime: "9 min read", slug: "employee-contract-rights" },
  ],
  faqs: [
    { question: { en: "What should an employment contract include?", hi: "रोजगार अनुबंध में क्या शामिल होना चाहिए?" }, answer: { en: "Essential elements: Job title, start date, salary, working hours, benefits, leave policy, notice period, probation period, duties, confidentiality clause, termination conditions, and signatures. Clear terms protect both employer and employee.", hi: "आवश्यक तत्व: नौकरी का शीर्षक, शुरुआत की तारीख, वेतन, काम के घंटे, लाभ, छुट्टी नीति, नोटिस अवधि।" } },
    { question: { en: "Is an employment contract legally binding?", hi: "क्या रोजगार अनुबंध कानूनी रूप से बाध्यकारी है?" }, answer: { en: "Yes, once signed by both parties, it becomes a legally binding document. Both employer and employee must honor the terms. Breach of contract can lead to legal consequences. Keep a signed copy for records.", hi: "हां, एक बार दोनों पक्षों द्वारा हस्ताक्षरित होने के बाद, यह कानूनी रूप से बाध्यकारी दस्तावेज बन जाता है।" } },
    { question: { en: "What's the difference between offer letter and employment contract?", hi: "ऑफर लेटर और रोजगार अनुबंध में क्या अंतर है?" }, answer: { en: "Offer letter: Initial job offer stating role, salary, start date (brief). Employment contract: Detailed legal document with comprehensive terms, policies, rights, obligations. Offer letter comes first, employment contract is signed on joining.", hi: "ऑफर लेटर: भूमिका, वेतन, शुरुआती तारीख बताते हुए प्रारंभिक नौकरी प्रस्ताव। रोजगार अनुबंध: व्यापक शर्तों के साथ विस्तृत कानूनी दस्तावेज।" } },
  ],
};

// 4. PERSONAL AGREEMENTS
export const personalAgreementsData: SubcategoryData = {
  slug: "personal",
  categorySlug: "agreements",
  categoryName: { en: "Agreements", hi: "समझौते" },
  subcategoryName: { en: "Personal Agreements", hi: "व्यक्तिगत समझौते" },
  breadcrumb: [{ en: "Agreements", hi: "समझौते" }, { en: "Personal Agreements", hi: "व्यक्तिगत समझौते" }],
  heroTitle: { en: "Personal Agreement Templates", hi: "व्यक्तिगत समझौता टेम्पलेट" },
  heroDescription: { en: "Personal agreement formats for loans, sales, and settlements - individual contract templates.", hi: "ऋण, बिक्री और निपटान के लिए व्यक्तिगत समझौता प्रारूप - व्यक्तिगत अनुबंध टेम्पलेट।" },
  searchPlaceholder: { en: "Search personal agreement templates…", hi: "व्यक्तिगत समझौता टेम्पलेट खोजें..." },
  tags: ["Personal Loan", "Sale Agreement", "Family Settlement", "Private Contract", "Money Lending", "Vehicle Sale"],
  templates: [
    { id: "personal-1", title: { en: "Personal Loan Agreement", hi: "व्यक्तिगत ऋण समझौता" }, description: { en: "Agreement format for personal loans between individuals.", hi: "व्यक्तियों के बीच व्यक्तिगत ऋण के लिए समझौता प्रारूप।" }, lastUpdated: "Nov 2025", views: "61.7k", badge: "Popular",templateSlug:'/' },
    { id: "personal-2", title: { en: "Money Lending Agreement", hi: "धन उधार समझौता" }, description: { en: "Private money lending contract with repayment terms.", hi: "पुनर्भुगतान शर्तों के साथ निजी धन उधार अनुबंध।" }, lastUpdated: "Nov 2025", views: "56.2k", badge: "Trending",templateSlug:'/' },
    { id: "personal-3", title: { en: "Vehicle Sale Agreement", hi: "वाहन बिक्री समझौता" }, description: { en: "Car/bike sale agreement between buyer and seller.", hi: "खरीदार और विक्रेता के बीच कार/बाइक बिक्री समझौता।" }, lastUpdated: "Nov 2025", views: "51.8k",templateSlug:'/' },
    { id: "personal-4", title: { en: "Property Sale Agreement", hi: "संपत्ति बिक्री समझौता" }, description: { en: "Agreement for property sale and transfer.", hi: "संपत्ति बिक्री और हस्तांतरण के लिए समझौता।" }, lastUpdated: "Oct 2025", views: "47.4k",templateSlug:'/' },
    { id: "personal-5", title: { en: "Family Settlement Deed", hi: "पारिवारिक निपटान विलेख" }, description: { en: "Family property settlement agreement format.", hi: "पारिवारिक संपत्ति निपटान समझौता प्रारूप।" }, lastUpdated: "Oct 2025", views: "43.1k" ,templateSlug:'/'},
    { id: "personal-6", title: { en: "Consent Letter", hi: "सहमति पत्र" }, description: { en: "Personal consent letter for various purposes.", hi: "विभिन्न उद्देश्यों के लिए व्यक्तिगत सहमति पत्र।" }, lastUpdated: "Oct 2025", views: "39.8k",templateSlug:'/' },
  ],
  seoTitle: { en: "About Personal Agreement Templates", hi: "व्यक्तिगत समझौता टेम्पलेट के बारे में" },
  seoDescription: { en: "Personal agreements document private transactions and arrangements between individuals. Our templates include personal loan agreements for borrowing, money lending agreements with repayment terms, vehicle sale agreements for car/bike transfers, property sale agreements, family settlement deeds for property division, and consent letters for permissions with clear terms protecting individual interests.", hi: "व्यक्तिगत समझौते व्यक्तियों के बीच निजी लेनदेन और व्यवस्था को दस्तावेज करते हैं।" },
  relatedTemplates: [
    { title: { en: "Rental Agreement", hi: "किराया समझौता" }, category: { en: "Agreements", hi: "समझौते" }, slug: "rental" },
    { title: { en: "Legal Forms", hi: "कानूनी फॉर्म" }, category: { en: "Agreements", hi: "समझौते" }, slug: "legal" },
    { title: { en: "Request Letter", hi: "अनुरोध पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "request" },
    { title: { en: "Informal Letter", hi: "अनौपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "informal" },
  ],
  blogPosts: [
    { title: { en: "Personal Loan Agreement Guide", hi: "व्यक्तिगत ऋण समझौता गाइड" }, excerpt: { en: "Protecting yourself when lending or borrowing money", hi: "पैसे उधार देते या लेते समय खुद को सुरक्षित रखना" }, readTime: "9 min read", slug: "personal-loan-guide" },
    { title: { en: "Vehicle Sale Documentation", hi: "वाहन बिक्री दस्तावेज" }, excerpt: { en: "Complete paperwork for car/bike sales", hi: "कार/बाइक बिक्री के लिए पूर्ण कागजी कार्रवाई" }, readTime: "8 min read", slug: "vehicle-sale-docs" },
    { title: { en: "Family Property Settlement", hi: "पारिवारिक संपत्ति निपटान" }, excerpt: { en: "Amicable property division among family members", hi: "परिवार के सदस्यों के बीच सौहार्दपूर्ण संपत्ति विभाजन" }, readTime: "10 min read", slug: "family-settlement" },
  ],
  faqs: [
    { question: { en: "Is a personal loan agreement legally binding?", hi: "क्या व्यक्तिगत ऋण समझौता कानूनी रूप से बाध्यकारी है?" }, answer: { en: "Yes, if properly documented with loan amount, interest rate, repayment schedule, and signatures of both parties. For amounts over Rs. 20,000, use stamp paper. Get it notarized for added legal protection. Keep proof of payment.", hi: "हां, यदि ऋण राशि, ब्याज दर, पुनर्भुगतान अनुसूची और दोनों पक्षों के हस्ताक्षर के साथ उचित रूप से दस्तावेज किया गया है।" } },
    { question: { en: "Do I need a lawyer for personal agreements?", hi: "क्या मुझे व्यक्तिगत समझौतों के लिए वकील की आवश्यकता है?" }, answer: { en: "Not mandatory for simple agreements, but advisable for complex transactions (property sale, large loans, family settlements). Lawyer ensures legal compliance, protects rights, drafts proper clauses. For basic agreements, templates with notarization suffice.", hi: "सरल समझौतों के लिए अनिवार्य नहीं, लेकिन जटिल लेनदेन के लिए उचित। वकील कानूनी अनुपालन सुनिश्चित करता है।" } },
    { question: { en: "What if the other party doesn't honor the agreement?", hi: "यदि दूसरा पक्ष समझौते का सम्मान नहीं करता है तो क्या होगा?" }, answer: { en: "First, communicate and try to resolve amicably. Send legal notice citing agreement terms. If unresolved, file case in civil court. Having properly documented and notarized agreement strengthens your legal position. Keep all transaction records.", hi: "पहले, संवाद करें और सौहार्दपूर्ण ढंग से हल करने का प्रयास करें। कानूनी नोटिस भेजें। यदि हल नहीं होता है, तो सिविल कोर्ट में मामला दर्ज करें।" } },
  ],
};

// 5. LEGAL FORMS
export const legalFormsData: SubcategoryData = {
  slug: "legal",
  categorySlug: "agreements",
  categoryName: { en: "Agreements", hi: "समझौते" },
  subcategoryName: { en: "Legal Forms", hi: "कानूनी फॉर्म" },
  breadcrumb: [{ en: "Agreements", hi: "समझौते" }, { en: "Legal Forms", hi: "कानूनी फॉर्म" }],
  heroTitle: { en: "Legal Form Templates", hi: "कानूनी फॉर्म टेम्पलेट" },
  heroDescription: { en: "Professional legal document formats - affidavits, declarations, and legal notice templates.", hi: "पेशेवर कानूनी दस्तावेज़ प्रारूप - शपथपत्र, घोषणाएं और कानूनी नोटिस टेम्पलेट।" },
  searchPlaceholder: { en: "Search legal form templates…", hi: "कानूनी फॉर्म टेम्पलेट खोजें..." },
  tags: ["Affidavit", "Declaration", "Undertaking", "Power of Attorney", "Legal Notice", "Notary Document"],
  templates: [
    { id: "legal-1", title: { en: "Affidavit Format", hi: "शपथपत्र प्रारूप" }, description: { en: "General affidavit template for sworn statements.", hi: "शपथ बयानों के लिए सामान्य शपथपत्र टेम्पलेट।" }, lastUpdated: "Nov 2025", views: "68.4k", badge: "Popular",templateSlug:'/' },
    { id: "legal-2", title: { en: "Declaration Form", hi: "घोषणा फॉर्म" }, description: { en: "Self-declaration format for various purposes.", hi: "विभिन्न उद्देश्यों के लिए स्व-घोषणा प्रारूप।" }, lastUpdated: "Nov 2025", views: "62.9k", badge: "Trending" ,templateSlug:'/'},
    { id: "legal-3", title: { en: "Undertaking Format", hi: "वचनबद्धता प्रारूप" }, description: { en: "Undertaking letter template for commitments.", hi: "प्रतिबद्धताओं के लिए वचनबद्धता पत्र टेम्पलेट।" }, lastUpdated: "Nov 2025", views: "57.6k" ,templateSlug:'/'},
    { id: "legal-4", title: { en: "Power of Attorney", hi: "पावर ऑफ अटॉर्नी" }, description: { en: "POA format for legal representation.", hi: "कानूनी प्रतिनिधित्व के लिए पीओए प्रारूप।" }, lastUpdated: "Oct 2025", views: "52.3k" ,templateSlug:'/'},
    { id: "legal-5", title: { en: "Legal Notice Format", hi: "कानूनी नोटिस प्रारूप" }, description: { en: "Legal notice template for disputes and claims.", hi: "विवादों और दावों के लिए कानूनी नोटिस टेम्पलेट।" }, lastUpdated: "Oct 2025", views: "48.1k",templateSlug:'/' },
    { id: "legal-6", title: { en: "Consent Form", hi: "सहमति फॉर्म" }, description: { en: "Legal consent form for permissions and approvals.", hi: "अनुमति और अनुमोदन के लिए कानूनी सहमति फॉर्म।" }, lastUpdated: "Oct 2025", views: "44.7k" ,templateSlug:'/'},
  ],
  seoTitle: { en: "About Legal Form Templates", hi: "कानूनी फॉर्म टेम्पलेट के बारे में" },
  seoDescription: { en: "Legal forms are official documents used for legal purposes and proceedings. Our templates include affidavit formats for sworn statements, declaration forms for official declarations, undertaking formats for commitments, power of attorney for legal representation, legal notice formats for disputes, and consent forms for permissions with proper legal language and formatting.", hi: "कानूनी फॉर्म कानूनी उद्देश्यों और कार्यवाही के लिए उपयोग किए जाने वाले आधिकारिक दस्तावेज हैं।" },
  relatedTemplates: [
    { title: { en: "Personal Agreement", hi: "व्यक्तिगत समझौता" }, category: { en: "Agreements", hi: "समझौते" }, slug: "personal" },
    { title: { en: "Application Forms", hi: "आवेदन फॉर्म" }, category: { en: "Agreements", hi: "समझौते" }, slug: "forms" },
    { title: { en: "Formal Letter", hi: "औपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
    { title: { en: "Complaint Letter", hi: "शिकायत पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "complaint" },
  ],
  blogPosts: [
    { title: { en: "How to Write an Affidavit", hi: "शपथपत्र कैसे लिखें" }, excerpt: { en: "Complete guide to affidavit preparation", hi: "शपथपत्र तैयारी के लिए पूर्ण गाइड" }, readTime: "10 min read", slug: "write-affidavit" },
    { title: { en: "Understanding Power of Attorney", hi: "पावर ऑफ अटॉर्नी को समझना" }, excerpt: { en: "Types and uses of POA documents", hi: "पीओए दस्तावेजों के प्रकार और उपयोग" }, readTime: "11 min read", slug: "understanding-poa" },
    { title: { en: "Legal Notice: When and How", hi: "कानूनी नोटिस: कब और कैसे" }, excerpt: { en: "Sending legal notices effectively", hi: "कानूनी नोटिस प्रभावी ढंग से भेजना" }, readTime: "9 min read", slug: "legal-notice-guide" },
  ],
  faqs: [
    { question: { en: "What is an affidavit?", hi: "शपथपत्र क्या है?" }, answer: { en: "An affidavit is a written sworn statement of facts verified by oath before a notary public or authorized officer. It's used as evidence in court or for official purposes. Must be signed in presence of oath commissioner.", hi: "शपथपत्र तथ्यों का एक लिखित शपथ बयान है जिसे नोटरी पब्लिक के समक्ष सत्यापित किया जाता है। अदालत में या आधिकारिक उद्देश्यों के लिए उपयोग किया जाता है।" } },
    { question: { en: "What is the validity of an affidavit?", hi: "शपथपत्र की वैधता क्या है?" }, answer: { en: "Affidavits don't expire unless stated otherwise. However, facts stated must be current and true at time of use. For court cases, recent affidavits (within 6 months) are preferred. Use appropriate stamp paper value for your state.", hi: "शपथपत्र समाप्त नहीं होते जब तक कि अन्यथा न कहा गया हो। हालांकि, बताए गए तथ्य उपयोग के समय वर्तमान और सत्य होने चाहिए।" } },
    { question: { en: "Can I create a power of attorney myself?", hi: "क्या मैं खुद पावर ऑफ अटॉर्नी बना सकता हूं?" }, answer: { en: "You can draft basic POA using templates, but for property transactions and financial matters, consult a lawyer. POA must be executed on stamp paper, notarized, and sometimes registered. Clearly specify powers granted and duration.", hi: "आप टेम्पलेट का उपयोग करके बुनियादी पीओए तैयार कर सकते हैं, लेकिन संपत्ति लेनदेन के लिए वकील से परामर्श करें। स्टाम्प पेपर पर निष्पादित होना चाहिए।" } },
  ],
};

// 6. APPLICATION FORMS
export const applicationFormsData: SubcategoryData = {
  slug: "forms",
  categorySlug: "agreements",
  categoryName: { en: "Agreements", hi: "समझौते" },
  subcategoryName: { en: "Application Forms", hi: "आवेदन फॉर्म" },
  breadcrumb: [{ en: "Agreements", hi: "समझौते" }, { en: "Application Forms", hi: "आवेदन फॉर्म" }],
  heroTitle: { en: "Application Form Templates", hi: "आवेदन फॉर्म टेम्पलेट" },
  heroDescription: { en: "Government and official application form formats - passport, PAN, Aadhaar, and other form templates.", hi: "सरकारी और आधिकारिक आवेदन फॉर्म प्रारूप - पासपोर्ट, पैन, आधार और अन्य फॉर्म टेम्पलेट।" },
  searchPlaceholder: { en: "Search application form templates…", hi: "आवेदन फॉर्म टेम्पलेट खोजें..." },
  tags: ["Government Form", "Official Application", "Registration Form", "Document Application", "ID Application", "Form Filling"],
  templates: [
    { id: "form-1", title: { en: "Passport Application", hi: "पासपोर्ट आवेदन" }, description: { en: "Passport application form filling guide.", hi: "पासपोर्ट आवेदन फॉर्म भरने की गाइड।" }, lastUpdated: "Nov 2025", views: "74.3k", badge: "Popular",templateSlug:'/' },
    { id: "form-2", title: { en: "PAN Card Application", hi: "पैन कार्ड आवेदन" }, description: { en: "PAN card form filling format and guidelines.", hi: "पैन कार्ड फॉर्म भरने का प्रारूप और दिशानिर्देश।" }, lastUpdated: "Nov 2025", views: "68.7k", badge: "Trending",templateSlug:'/' },
    { id: "form-3", title: { en: "Aadhaar Update Form", hi: "आधार अपडेट फॉर्म" }, description: { en: "Aadhaar correction and update form template.", hi: "आधार सुधार और अपडेट फॉर्म टेम्पलेट।" }, lastUpdated: "Nov 2025", views: "63.2k",templateSlug:'/' },
    { id: "form-4", title: { en: "Driving License Form", hi: "ड्राइविंग लाइसेंस फॉर्म" }, description: { en: "Driving license application form format.", hi: "ड्राइविंग लाइसेंस आवेदन फॉर्म प्रारूप।" }, lastUpdated: "Oct 2025", views: "58.1k",templateSlug:'/' },
    { id: "form-5", title: { en: "Voter ID Application", hi: "वोटर आईडी आवेदन" }, description: { en: "Voter ID card registration form template.", hi: "वोटर आईडी कार्ड पंजीकरण फॉर्म टेम्पलेट।" }, lastUpdated: "Oct 2025", views: "53.6k" ,templateSlug:'/'},
    { id: "form-6", title: { en: "Bank Account Form", hi: "बैंक खाता फॉर्म" }, description: { en: "Bank account opening form filling guide.", hi: "बैंक खाता खोलने का फॉर्म भरने की गाइड।" }, lastUpdated: "Oct 2025", views: "49.4k",templateSlug:'/' },
  ],
  seoTitle: { en: "About Application Form Templates", hi: "आवेदन फॉर्म टेम्पलेट के बारे में" },
  seoDescription: { en: "Application forms are official documents for government services and registrations. Our templates include passport application guides, PAN card forms, Aadhaar update procedures, driving license applications, voter ID registration forms, and bank account opening forms with step-by-step filling instructions and required document lists for hassle-free applications.", hi: "आवेदन फॉर्म सरकारी सेवाओं और पंजीकरण के लिए आधिकारिक दस्तावेज हैं।" },
  relatedTemplates: [
    { title: { en: "Legal Forms", hi: "कानूनी फॉर्म" }, category: { en: "Agreements", hi: "समझौते" }, slug: "legal" },
    { title: { en: "Formal Letter", hi: "औपचारिक पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "formal" },
    { title: { en: "Bonafide Certificate", hi: "प्रामाणिक प्रमाणपत्र" }, category: { en: "Certificates", hi: "प्रमाणपत्र" }, slug: "bonafide" },
    { title: { en: "School Admission", hi: "स्कूल प्रवेश" }, category: { en: "Applications", hi: "आवेदन" }, slug: "admission" },
  ],
  blogPosts: [
    { title: { en: "Passport Application Guide", hi: "पासपोर्ट आवेदन गाइड" }, excerpt: { en: "Step-by-step passport application process", hi: "चरण-दर-चरण पासपोर्ट आवेदन प्रक्रिया" }, readTime: "12 min read", slug: "passport-application-guide" },
    { title: { en: "Common Form Filling Mistakes", hi: "सामान्य फॉर्म भरने की गलतियां" }, excerpt: { en: "Avoiding errors in official applications", hi: "आधिकारिक आवेदनों में त्रुटियों से बचना" }, readTime: "8 min read", slug: "form-filling-mistakes" },
    { title: { en: "Documents Required for ID Applications", hi: "आईडी आवेदन के लिए आवश्यक दस्तावेज" }, excerpt: { en: "Complete document checklist for applications", hi: "आवेदनों के लिए पूर्ण दस्तावेज चेकलिस्ट" }, readTime: "10 min read", slug: "id-documents-required" },
  ],
  faqs: [
    { question: { en: "What documents are needed for passport application?", hi: "पासपोर्ट आवेदन के लिए कौन से दस्तावेज आवश्यक हैं?" }, answer: { en: "Required: Proof of address (Aadhaar/voter ID/utility bill), proof of DOB (birth certificate/school certificate), recent photographs (2), and annexure E if no ECR. For tatkal, additional fees apply. Apply online at passportindia.gov.in.", hi: "आवश्यक: पते का प्रमाण (आधार/वोटर आईडी/उपयोगिता बिल), जन्म तिथि का प्रमाण, हाल की तस्वीरें। passportindia.gov.in पर ऑनलाइन आवेदन करें।" } },
    { question: { en: "How to fill government forms correctly?", hi: "सरकारी फॉर्म सही तरीके से कैसे भरें?" }, answer: { en: "Use CAPITAL LETTERS in block format, fill all mandatory fields (marked *), double-check spellings (match ID proofs), use black/blue ink, don't overwrite, attach required documents, sign where indicated, keep photocopy for records.", hi: "ब्लॉक प्रारूप में बड़े अक्षरों का उपयोग करें, सभी अनिवार्य फ़ील्ड भरें, वर्तनी की दोबारा जांच करें, काली/नीली स्याही का उपयोग करें।" } },
    { question: { en: "Can I track my application status?", hi: "क्या मैं अपने आवेदन की स्थिति ट्रैक कर सकता हूं?" }, answer: { en: "Yes! Most government applications provide tracking. Use: Application reference number, registered mobile/email, official website portal. Passport: passportindia.gov.in/AppOnlineProject/statusTracker/trackStatusInpNew, PAN: tin.tin.nsdl.com/pantan/StatusTrack.html", hi: "हां! अधिकांश सरकारी आवेदन ट्रैकिंग प्रदान करते हैं। आवेदन संदर्भ संख्या, पंजीकृत मोबाइल/ईमेल, आधिकारिक वेबसाइट पोर्टल का उपयोग करें।" } },
  ],
};

// Export all Agreements subcategories
export const allAgreementsSubcategories = [
  rentalAgreementsData,
  businessAgreementsData,
  employmentContractsData,
  personalAgreementsData,
  legalFormsData,
  applicationFormsData,
];
