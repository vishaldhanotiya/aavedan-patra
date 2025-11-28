/**
 * ALL ESSAYS SUBCATEGORIES (6 total)
 * Complete data for Essays category subcategories
 */

import type { SubcategoryData } from "../allSubcategoryData";

// 1. 100 WORDS ESSAYS
export const essays100WordsData: SubcategoryData = {
  slug: "100-words",
  categorySlug: "essays",
  categoryName: { en: "Essays", hi: "निबंध" },
  subcategoryName: { en: "100 Words Essays", hi: "100 शब्द निबंध" },
  breadcrumb: [
    { en: "Essays", hi: "निबंध", slug:"/letters"},
    { en: "100 Words Essays", hi: "100 शब्द निबंध", slug:"/letters" },
  ],
  heroTitle: { en: "100 Words Essay Templates", hi: "100 शब्द निबंध टेम्पलेट" },
  heroDescription: {
    en: "Short essay formats in 100 words for students - simple and easy essay templates on various topics.",
    hi: "छात्रों के लिए 100 शब्दों में लघु निबंध प्रारूप - विभिन्न विषयों पर सरल और आसान निबंध टेम्पलेट।",
  },
  searchPlaceholder: { en: "Search 100 word essay topics…", hi: "100 शब्द निबंध विषय खोजें..." },
  tags: ["Short Essay", "100 Words", "School Essay", "Kids Writing", "Simple Topics", "Class Assignment"],
  templates: [
    {
      id: "100w-1",
      title: { en: "Essay on My School", hi: "मेरे स्कूल पर निबंध" },
      description: { en: "100 words essay about my school and its importance.", hi: "मेरे स्कूल और इसके महत्व पर 100 शब्द निबंध।" },
      lastUpdated: "Nov 2025",
      views: "52.4k",
      badge: "Popular",
      templateSlug:'/'
    },
    {
      id: "100w-2",
      title: { en: "My Best Friend Essay", hi: "मेरा सबसे अच्छा दोस्त निबंध" },
      description: { en: "Short essay on my best friend in 100 words.", hi: "100 शब्दों में मेरे सबसे अच्छे दोस्त पर लघु निबंध।" },
      lastUpdated: "Nov 2025",
      views: "48.9k",
      badge: "Trending",
      templateSlug:'/'
    },
    {
      id: "100w-3",
      title: { en: "Importance of Education", hi: "शिक्षा का महत्व" },
      description: { en: "Essay on why education is important in 100 words.", hi: "100 शब्दों में शिक्षा क्यों महत्वपूर्ण है पर निबंध।" },
      lastUpdated: "Nov 2025",
      views: "45.2k",
      templateSlug:'/'
    },
    {
      id: "100w-4",
      title: { en: "My Favorite Teacher", hi: "मेरे पसंदीदा शिक्षक" },
      description: { en: "100 words essay describing my favorite teacher.", hi: "मेरे पसंदीदा शिक्षक का वर्णन करने वाला 100 शब्द निबंध।" },
      lastUpdated: "Oct 2025",
      views: "41.7k",
      templateSlug:'/'
    },
    {
      id: "100w-5",
      title: { en: "Summer Vacation Essay", hi: "गर्मी की छुट्टी निबंध" },
      description: { en: "Short essay on how I spent my summer vacation.", hi: "मैंने अपनी गर्मियों की छुट्टी कैसे बिताई पर लघु निबंध।" },
      lastUpdated: "Oct 2025",
      views: "38.3k",
      templateSlug:'/'
    },
    {
      id: "100w-6",
      title: { en: "Discipline Essay", hi: "अनुशासन निबंध" },
      description: { en: "Essay on importance of discipline in 100 words.", hi: "100 शब्दों में अनुशासन के महत्व पर निबंध।" },
      lastUpdated: "Oct 2025",
      views: "35.8k",
      templateSlug:'/'
    },
  ],
  seoTitle: { en: "About 100 Words Essay Templates", hi: "100 शब्द निबंध टेम्पलेट के बारे में" },
  seoDescription: {
    en: "100 words essays are short, concise compositions perfect for elementary and primary students. Our templates include essays on my school, my best friend, importance of education, my favorite teacher, summer vacation experiences, and discipline. Each essay is simple, easy to understand, and follows proper structure with introduction, body, and conclusion suitable for young learners and class assignments.",
    hi: "100 शब्द निबंध प्राथमिक छात्रों के लिए उपयुक्त लघु, संक्षिप्त रचनाएं हैं।",
  },
  relatedTemplates: [
    { title: { en: "200 Words Essays", hi: "200 शब्द निबंध" }, category: { en: "Essays", hi: "निबंध" }, slug: "200-words" },
    { title: { en: "Paragraphs", hi: "पैराग्राफ" }, category: { en: "Essays", hi: "निबंध" }, slug: "paragraphs" },
    { title: { en: "School Notice", hi: "स्कूल नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "school" },
    { title: { en: "Leave Application", hi: "छुट्टी आवेदन" }, category: { en: "Applications", hi: "आवेदन" }, slug: "leave" },
  ],
  blogPosts: [
    { title: { en: "How to Write a 100 Words Essay", hi: "100 शब्द निबंध कैसे लिखें" }, excerpt: { en: "Simple steps for writing short essays", hi: "लघु निबंध लिखने के लिए सरल कदम" }, readTime: "5 min read", slug: "write-100-word-essay" },
    { title: { en: "Essay Writing Tips for Kids", hi: "बच्चों के लिए निबंध लेखन सुझाव" }, excerpt: { en: "Making essay writing fun and easy", hi: "निबंध लेखन को मजेदार और आसान बनाना" }, readTime: "6 min read", slug: "essay-tips-kids" },
    { title: { en: "Common Essay Topics for Students", hi: "छात्रों के लिए सामान्य निबंध विषय" }, excerpt: { en: "Popular essay topics and how to approach them", hi: "लोकप्रिय निबंध विषय और उन्हें कैसे संपर्क करें" }, readTime: "7 min read", slug: "common-essay-topics" },
  ],
  faqs: [
    { question: { en: "How do I write a 100 words essay?", hi: "मैं 100 शब्द निबंध कैसे लिखूं?" }, answer: { en: "Structure: Introduction (20-25 words), Main body (60-65 words), Conclusion (15-20 words). Keep sentences simple and clear. Focus on one main idea. Use easy vocabulary. Count words to stay within limit. Practice writing on different topics.", hi: "संरचना: परिचय (20-25 शब्द), मुख्य भाग (60-65 शब्द), निष्कर्ष (15-20 शब्द)। वाक्यों को सरल और स्पष्ट रखें।" } },
    { question: { en: "What are good topics for 100 word essays?", hi: "100 शब्द निबंधों के लिए अच्छे विषय क्या हैं?" }, answer: { en: "Popular topics: My school, My family, My hobby, Importance of books, My favorite sport, Cleanliness, Honesty, Friendship, Nature, My pet, Festivals, Teachers, Parents. Choose familiar topics you can describe easily.", hi: "लोकप्रिय विषय: मेरा स्कूल, मेरा परिवार, मेरा शौक, किताबों का महत्व, खेल, स्वच्छता, ईमानदारी, दोस्ती, प्रकृति।" } },
    { question: { en: "Can I exceed 100 words in the essay?", hi: "क्या मैं निबंध ���ें 100 शब्दों से अधिक कर सकता हूं?" }, answer: { en: "Try to stay within 95-105 words. If assignment specifies exactly 100, stick to it. Being slightly over/under (±5 words) is usually acceptable. Focus on clarity rather than word count. Edit to remove unnecessary words.", hi: "95-105 शब्दों के भीतर रहने का प्रयास करें। यदि असाइनमेंट ठीक 100 निर्दिष्ट करता है, तो इसका पालन करें।" } },
  ],
};

// 2. 200 WORDS ESSAYS
export const essays200WordsData: SubcategoryData = {
  slug: "200-words",
  categorySlug: "essays",
  categoryName: { en: "Essays", hi: "निबंध" },
  subcategoryName: { en: "200 Words Essays", hi: "200 शब्द निबंध" },
  breadcrumb: [{ en: "Essays", hi: "निबंध", slug:"/letters" }, { en: "200 Words Essays", hi: "200 शब्द निबंध", slug:"/letters"}],
  heroTitle: { en: "200 Words Essay Templates", hi: "200 शब्द निबंध टेम्पलेट" },
  heroDescription: { en: "Medium-length essay formats in 200 words for students - comprehensive essay templates on popular topics.", hi: "छात्रों के लिए 200 शब्दों में मध्यम लंबाई निबंध प्रारूप - लोकप्रिय विषयों पर व्यापक निबंध टेम्पलेट।" },
  searchPlaceholder: { en: "Search 200 word essay topics…", hi: "200 शब्द निबंध विषय खोजें..." },
  tags: ["200 Words", "Medium Essay", "Student Essay", "Academic Writing", "Essay Topics", "School Assignment"],
  templates: [
    { id: "200w-1", title: { en: "Digital India Essay", hi: "डिजिटल इंडिया निबंध" }, description: { en: "200 words essay on Digital India initiative and technology.", hi: "डिजिटल इंडिया पहल और प्रौद्योगिकी पर 200 शब्द निबंध।" }, lastUpdated: "Nov 2025", views: "47.3k", badge: "Popular",templateSlug:'/' },
    { id: "200w-2", title: { en: "Cleanliness Essay", hi: "स्वच्छता निबंध" }, description: { en: "Essay on cleanliness and its importance in 200 words.", hi: "200 शब्दों में स्वच्छता और इसके महत्व पर निबंध।" }, lastUpdated: "Nov 2025", views: "43.8k", badge: "Trending",templateSlug:'/' },
    { id: "200w-3", title: { en: "Environment Protection", hi: "पर्यावरण संरक्षण" }, description: { en: "200 words essay on protecting our environment.", hi: "हमारे पर्यावरण की रक्षा पर 200 शब्द निबंध।" }, lastUpdated: "Nov 2025", views: "40.6k",templateSlug:'/' },
    { id: "200w-4", title: { en: "Women Empowerment", hi: "महिला सशक्तिकरण" }, description: { en: "Essay on women empowerment and equality.", hi: "महिला सशक्तिकरण और समानता पर निबंध।" }, lastUpdated: "Oct 2025", views: "37.2k",templateSlug:'/' },
    { id: "200w-5", title: { en: "Healthy Lifestyle", hi: "स्वस्थ जीवनशैली" }, description: { en: "200 words essay on maintaining a healthy lifestyle.", hi: "स्वस्थ जीवनशैली बनाए रखने पर 200 शब्द निबंध।" }, lastUpdated: "Oct 2025", views: "34.9k",templateSlug:'/' },
    { id: "200w-6", title: { en: "Time Management", hi: "समय प्रबंधन" }, description: { en: "Essay on importance of time management.", hi: "समय प्रबंधन के महत्व पर निबंध।" }, lastUpdated: "Oct 2025", views: "32.1k",templateSlug:'/' },
  ],
  seoTitle: { en: "About 200 Words Essay Templates", hi: "200 शब्द निबंध टेम्पलेट के बारे में" },
  seoDescription: { en: "200 words essays provide moderate detail on topics suitable for middle and high school students. Our templates cover Digital India, cleanliness drives, environment protection, women empowerment, healthy lifestyle habits, and time management. Each essay includes introduction, detailed body paragraphs, and strong conclusion with proper structure for academic assignments.", hi: "200 शब्द निबंध मध्यम और हाई स्कूल के छात्रों के लिए उपयुक्त विषयों पर मध्यम विवरण प्रदान करते हैं।" },
  relatedTemplates: [
    { title: { en: "100 Words Essays", hi: "100 शब्द निबंध" }, category: { en: "Essays", hi: "निबंध" }, slug: "100-words" },
    { title: { en: "500 Words Essays", hi: "500 शब्द निबंध" }, category: { en: "Essays", hi: "निबंध" }, slug: "500-words" },
    { title: { en: "School Notice", hi: "स्कूल नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "school" },
    { title: { en: "Speeches", hi: "भाषण" }, category: { en: "Essays", hi: "निबंध" }, slug: "speeches" },
  ],
  blogPosts: [
    { title: { en: "Writing 200 Words Essays Effectively", hi: "200 शब्द निबंध प्रभावी ढंग से लिखना" }, excerpt: { en: "Tips for medium-length essay writing", hi: "मध्यम लंबाई निबंध लेखन के लिए सुझाव" }, readTime: "7 min read", slug: "write-200-word-essay" },
    { title: { en: "Essay Structure and Organization", hi: "निबंध संरचना और संगठन" }, excerpt: { en: "Creating well-organized essays", hi: "अच्छी तरह से संगठित निबंध बनाना" }, readTime: "6 min read", slug: "essay-structure" },
    { title: { en: "Improving Essay Writing Skills", hi: "निबंध लेखन कौशल में सुधार" }, excerpt: { en: "Practice techniques for better essays", hi: "बेहतर निबंधों के लिए अभ्यास तकनीक" }, readTime: "8 min read", slug: "improve-essay-writing" },
  ],
  faqs: [
    { question: { en: "How to write a 200 words essay?", hi: "200 शब्द निबंध कैसे लिखें?" }, answer: { en: "Structure: Introduction (30-40 words), Body paragraphs (130-150 words with 2-3 main points), Conclusion (20-30 words). Use topic sentences, provide examples, maintain flow. Edit for conciseness and clarity.", hi: "संरचना: परिचय (30-40 शब्द), मुख्य पैराग्राफ (130-150 शब्द), निष्कर्ष (20-30 शब्द)। विषय वाक्यों का उपयोग करें।" } },
    { question: { en: "What's the difference between 100 and 200 word essays?", hi: "100 और 200 शब्द निबंधों में क्या अंतर है?" }, answer: { en: "200-word essays allow more detail, multiple examples, deeper analysis, and better development of ideas. They require more structured paragraphs and better transitions. Suitable for older students who can elaborate on topics.", hi: "200 शब्द निबंध अधिक विवरण, कई उदाहरण, गहरा विश्लेषण की अनुमति देते हैं। बड़े छात्रों के लिए उपयुक्त।" } },
    { question: { en: "Can I write 200 word essays for exams?", hi: "क्या मैं परीक्षाओं के लिए 200 शब्द निबंध लिख सकता हूं?" }, answer: { en: "Yes! Many school exams require 200-word essays. Practice timed writing, plan before writing, stick to word limit. Focus on clarity and organization rather than fancy vocabulary. Answer the question directly.", hi: "हां! कई स्कूल परीक्षाओं में 200 शब्द निबंध की आवश्यकता होती है। समयबद्ध लेखन का अभ्यास करें।" } },
  ],
};

// Continue with remaining 4 essay subcategories (500 words, speeches, moral stories, paragraphs)

// 3. 500 WORDS ESSAYS
export const essays500WordsData: SubcategoryData = {
  slug: "500-words",
  categorySlug: "essays",
  categoryName: { en: "Essays", hi: "निबंध" },
  subcategoryName: { en: "500 Words Essays", hi: "500 शब्द निबंध" },
  breadcrumb: [{ en: "Essays", hi: "निबंध", slug:"/letters" }, { en: "500 Words Essays", hi: "500 शब्द निबंध", slug:"/letters" }],
  heroTitle: { en: "500 Words Essay Templates", hi: "500 शब्द निबंध टेम्पलेट" },
  heroDescription: { en: "Detailed long-form essay formats in 500 words - comprehensive essay templates for high school and college students.", hi: "500 शब्दों में विस्तृत लंबे रूप निबंध प्रारूप - हाई स्कूल और कॉलेज के छात्रों के लिए व्यापक निबंध टेम्पलेट।" },
  searchPlaceholder: { en: "Search 500 word essay topics…", hi: "500 शब्द निबंध विषय खोजें..." },
  tags: ["Long Essay", "500 Words", "Detailed Essay", "Competitive Exam", "College Essay", "Research Essay"],
  templates: [
    { id: "500w-1", title: { en: "Climate Change Essay", hi: "जलवायु परिवर्तन निबंध" }, description: { en: "Comprehensive 500 words essay on climate change and global warming.", hi: "जलवायु परिवर्तन और ग्लोबल वार्मिंग पर व्यापक 500 शब्द निबंध।" }, lastUpdated: "Nov 2025", views: "44.6k", badge: "Popular",templateSlug:'/' },
    { id: "500w-2", title: { en: "Technology Impact Essay", hi: "प्रौद्योगिकी प्रभाव निबंध" }, description: { en: "Essay on impact of technology on society in 500 words.", hi: "समाज पर प्रौद्योगिकी के प्रभाव पर 500 शब्दों में निबंध।" }, lastUpdated: "Nov 2025", views: "41.2k", badge: "Trending",templateSlug:'/' },
    { id: "500w-3", title: { en: "Social Media Essay", hi: "सोशल मीडिया निबंध" }, description: { en: "500 words essay on social media advantages and disadvantages.", hi: "सोशल मीडिया के फायदे और नुकसान पर 500 शब्द निबंध।" }, lastUpdated: "Nov 2025", views: "38.7k",templateSlug:'/' },
    { id: "500w-4", title: { en: "Indian Culture Essay", hi: "भारतीय संस्कृति निबंध" }, description: { en: "Detailed essay on Indian culture and traditions.", hi: "भारतीय संस्कृति और परंपराओं पर विस्तृत निबंध।" }, lastUpdated: "Oct 2025", views: "35.4k",templateSlug:'/' },
    { id: "500w-5", title: { en: "Leadership Essay", hi: "नेतृत्व निबंध" }, description: { en: "Essay on leadership qualities and importance.", hi: "नेतृत्व गुणों और महत्व पर निबंध।" }, lastUpdated: "Oct 2025", views: "32.8k",templateSlug:'/' },
    { id: "500w-6", title: { en: "Career Goals Essay", hi: "करियर लक्ष्य निबंध" }, description: { en: "500 words essay on career aspirations and goals.", hi: "करियर आकांक्षाओं और लक्ष्यों पर 500 शब्द निबंध।" }, lastUpdated: "Oct 2025", views: "30.1k",templateSlug:'/' },
  ],
  seoTitle: { en: "About 500 Words Essay Templates", hi: "500 शब्द निबंध टेम्पलेट के बारे में" },
  seoDescription: { en: "500 words essays allow comprehensive exploration of complex topics for advanced students. Our templates include climate change analysis, technology's societal impact, social media effects, Indian cultural heritage, leadership principles, and career goal planning with detailed arguments, examples, and well-structured paragraphs for academic excellence.", hi: "500 शब्द निबंध उन्नत छात्रों के लिए जटिल विषयों की व्यापक खोज की अनुमति देते हैं।" },
  relatedTemplates: [
    { title: { en: "200 Words Essays", hi: "200 शब्द निबंध" }, category: { en: "Essays", hi: "निबंध" }, slug: "200-words" },
    { title: { en: "Speeches", hi: "भाषण" }, category: { en: "Essays", hi: "निबंध" }, slug: "speeches" },
    { title: { en: "Professional Resume", hi: "पेशेवर रिज्यूमे" }, category: { en: "Resumes", hi: "रिज्यूमे" }, slug: "professional" },
    { title: { en: "Project Report", hi: "परियोजना रिपोर्ट" }, category: { en: "Notices", hi: "नोटिस" }, slug: "project" },
  ],
  blogPosts: [
    { title: { en: "Writing Long-Form Essays", hi: "लंबे रूप निबंध लिखना" }, excerpt: { en: "Mastering 500-word essay writing", hi: "500 शब्द निबंध लेखन में महारत हासिल करना" }, readTime: "10 min read", slug: "long-form-essays" },
    { title: { en: "Research and Citation for Essays", hi: "निबंधों के लिए अनुसंधान और उद्धरण" }, excerpt: { en: "Using credible sources in essays", hi: "निबंधों में विश्वसनीय स्रोतों का उपयोग" }, readTime: "9 min read", slug: "essay-research" },
    { title: { en: "Essay Writing for Competitions", hi: "प्रतियोगिताओं के लिए निबंध लेखन" }, excerpt: { en: "Winning essay writing strategies", hi: "विजयी निबंध लेखन रणनीतियां" }, readTime: "8 min read", slug: "competitive-essay-writing" },
  ],
  faqs: [
    { question: { en: "How do I structure a 500-word essay?", hi: "मैं 500 शब्द निबंध की संरचना कैसे करूं?" }, answer: { en: "Introduction (75-100 words), 3-4 body paragraphs (300-350 words total, ~100 words each), Conclusion (50-75 words). Each paragraph: topic sentence, evidence, examples, analysis. Use transitions between paragraphs.", hi: "परिचय (75-100 शब्द), 3-4 मुख्य पैराग्राफ (300-350 शब्द), निष्कर्ष (50-75 शब्द)। पैराग्राफ के बीच संक्रमण का उपयोग करें।" } },
    { question: { en: "What topics are good for 500-word essays?", hi: "500 शब्द निबंधों के लिए कौन से विषय अच्छे हैं?" }, answer: { en: "Complex topics: Climate change, technology impact, social issues, cultural heritage, leadership, career planning, education system, health awareness, economic policies. Choose topics you can analyze in-depth with multiple viewpoints.", hi: "जटिल विषय: जलवायु परिवर्तन, प्रौद्योगिकी प्रभाव, सामाजिक मुद्दे, सांस्कृतिक विरासत, नेतृत्व, करियर योजना।" } },
    { question: { en: "How long does it take to write a 500-word essay?", hi: "500 शब्द निबंध लिखने में कितना समय लगता है?" }, answer: { en: "With preparation: 1.5-2.5 hours (planning: 20-30 min, writing: 45-60 min, editing: 30 min). With practice, you can reduce time. In exams, allow 40-50 minutes for 500-word essays.", hi: "तैयारी के साथ: 1.5-2.5 घंटे (योजना: 20-30 मिनट, लेखन: 45-60 मिनट, संपादन: 30 मिनट)। परीक्षाओं में 40-50 मिनट की अनुमति दें।" } },
  ],
};

// 4. SPEECHES
export const speechesData: SubcategoryData = {
  slug: "speeches",
  categorySlug: "essays",
  categoryName: { en: "Essays", hi: "निबंध" },
  subcategoryName: { en: "Speeches", hi: "भाषण" },
  breadcrumb: [{ en: "Essays", hi: "निबंध", slug:"/letters" }, { en: "Speeches", hi: "भाषण", slug:"/letters" }],
  heroTitle: { en: "Speech Writing Templates", hi: "भाषण लेखन टेम्पलेट" },
  heroDescription: { en: "Professional speech formats for various occasions - engaging public speaking templates for students and professionals.", hi: "विभिन्न अवसरों के लिए पेशेवर भाषण प्रारूप - छात्रों और पेशेवरों के लिए आकर्षक सार्वजनिक बोलने के टेम्पलेट।" },
  searchPlaceholder: { en: "Search speech templates…", hi: "भाषण टेम्पलेट खोजें..." },
  tags: ["Speech Writing", "Public Speaking", "School Speech", "Formal Speech", "Ceremonial Speech", "Motivational"],
  templates: [
    { id: "speech-1", title: { en: "Welcome Speech", hi: "स्वागत भाषण" }, description: { en: "Welcome speech format for events and programs.", hi: "कार्यक्रमों और समारोहों के लिए स्वागत भाषण प्रारूप।" }, lastUpdated: "Nov 2025", views: "49.7k", badge: "Popular",templateSlug:'/' },
    { id: "speech-2", title: { en: "Vote of Thanks Speech", hi: "धन्यवाद ज्ञापन भाषण" }, description: { en: "Thank you speech template for events and functions.", hi: "कार्यक्रमों और समारोहों के लिए धन्यवाद भाषण टेम्पलेट।" }, lastUpdated: "Nov 2025", views: "45.3k", badge: "Trending",templateSlug:'/' },
    { id: "speech-3", title: { en: "Farewell Speech", hi: "विदाई भाषण" }, description: { en: "Farewell speech for students, teachers, or colleagues.", hi: "छात्रों, शिक्षकों या सहयोगियों के लिए विदाई भाषण।" }, lastUpdated: "Nov 2025", views: "41.8k",templateSlug:'/' },
    { id: "speech-4", title: { en: "Republic Day Speech", hi: "गणतंत्र दिवस भाषण" }, description: { en: "Patriotic speech for Republic Day celebrations.", hi: "गणतंत्र दिवस समारोह के लिए देशभक्ति भाषण।" }, lastUpdated: "Oct 2025", views: "38.6k",templateSlug:'/' },
    { id: "speech-5", title: { en: "Independence Day Speech", hi: "स्वतंत्रता दिवस भाषण" }, description: { en: "Speech template for Independence Day program.", hi: "स्वतंत्रता दिवस कार्यक्रम के लिए भाषण टेम्पलेट।" }, lastUpdated: "Oct 2025", views: "35.2k",templateSlug:'/' },
    { id: "speech-6", title: { en: "Annual Day Speech", hi: "वार्षिक दिवस भाषण" }, description: { en: "Speech format for school annual day functions.", hi: "स्कूल वार्षिक दिवस समारोह के लिए भाषण प्रारूप।" }, lastUpdated: "Oct 2025", views: "32.4k",templateSlug:'/' },
  ],
  seoTitle: { en: "About Speech Writing Templates", hi: "भाषण लेखन टेम्पलेट के बारे में" },
  seoDescription: { en: "Speeches are formal or informal oral presentations for various occasions. Our templates include welcome speeches for events, vote of thanks for ceremonies, farewell speeches for departures, Republic Day speeches for patriotic occasions, Independence Day speeches for national celebrations, and annual day speeches for school functions with engaging openings, body content, and strong conclusions.", hi: "भाषण विभिन्न अवसरों के लिए औपचारिक या अनौपचारिक मौखिक प्रस्तुतियां हैं।" },
  relatedTemplates: [
    { title: { en: "500 Words Essays", hi: "500 शब्द निबंध" }, category: { en: "Essays", hi: "निबंध" }, slug: "500-words" },
    { title: { en: "Event Notice", hi: "कार्यक्रम नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "event" },
    { title: { en: "Invitation Letter", hi: "निमंत्रण पत्र" }, category: { en: "Letters", hi: "पत्र" }, slug: "invitation" },
    { title: { en: "Appreciation Certificate", hi: "प्रशंसा प्रमाणपत्र" }, category: { en: "Certificates", hi: "प्रमाणपत्र" }, slug: "appreciation" },
  ],
  blogPosts: [
    { title: { en: "Public Speaking Tips for Students", hi: "छात्रों के लिए सार्वजनिक बोलने के सुझाव" }, excerpt: { en: "Overcoming stage fear and speaking confidently", hi: "मंच भय पर काबू पाना और आत्मविश्वास से बोलना" }, readTime: "8 min read", slug: "public-speaking-tips" },
    { title: { en: "How to Write an Engaging Speech", hi: "आकर्षक भाषण कैसे लिखें" }, excerpt: { en: "Crafting speeches that captivate audiences", hi: "दर्शकों को मोहित करने वाले भाषण तैयार करना" }, readTime: "9 min read", slug: "write-engaging-speech" },
    { title: { en: "Speech Delivery Techniques", hi: "भाषण वितरण तकनीक" }, excerpt: { en: "Voice modulation and body language tips", hi: "आवाज मॉड्यूलेशन और बॉडी लैंग्वेज सुझाव" }, readTime: "7 min read", slug: "speech-delivery" },
  ],
  faqs: [
    { question: { en: "How do I start a speech?", hi: "मैं भाषण कैसे शुरू करूं?" }, answer: { en: "Start with: Greeting (Good morning/evening), Acknowledge dignitaries, Hook (quote/question/story), Introduce topic, State purpose. Example: 'Respected Principal, teachers, and dear friends. As Mahatma Gandhi said...' Make opening engaging.", hi: "शुरुआत करें: अभिवादन, गणमान्य व्यक्तियों को स्वीकार करना, हुक (उद्धरण/प्रश्न/कहानी), विषय परिचय, उद्देश्य बताना।" } },
    { question: { en: "How long should a speech be?", hi: "भाषण कितना लंबा होना चाहिए?" }, answer: { en: "School speeches: 3-5 minutes (300-600 words), Formal events: 5-7 minutes, Keynote: 10-15 minutes. Speak at moderate pace (100-120 words per minute). Practice with timer. Always end on time.", hi: "स्कूल भाषण: 3-5 मिनट (300-600 शब्द), औपचारिक कार्यक्रम: 5-7 मिनट। मध्यम गति से बोलें। टाइमर के साथ अभ्यास करें।" } },
    { question: { en: "How to overcome nervousness while speaking?", hi: "बोलते समय घबराहट पर कैसे काबू पाएं?" }, answer: { en: "Practice thoroughly, know content well, breathe deeply, make eye contact, start slowly, visualize success, focus on message not perfection. Remember: audience wants you to succeed. Nervousness reduces with practice.", hi: "अच्छी तरह से अभ्यास करें, सामग्री को अच्छी तरह से जानें, गहरी सांस लें, आंखों का संपर्क बनाएं। याद रखें: दर्शक चाहते हैं कि आप सफल हों।" } },
  ],
};

// 5. MORAL STORIES
export const moralStoriesData: SubcategoryData = {
  slug: "moral-stories",
  categorySlug: "essays",
  categoryName: { en: "Essays", hi: "निबंध" },
  subcategoryName: { en: "Moral Stories", hi: "नैतिक कहानियां" },
  breadcrumb: [{ en: "Essays", hi: "निबंध", slug:"/letters" }, { en: "Moral Stories", hi: "नैतिक कहानियां", slug:"/letters" }],
  heroTitle: { en: "Moral Story Templates", hi: "नैतिक कहानी टेम्पलेट" },
  heroDescription: { en: "Short moral stories with valuable life lessons for kids - inspiring tales teaching important values.", hi: "बच्चों के लिए मूल्यवान जीवन पाठ के साथ लघु नैतिक कहानियां - महत्वपूर्ण मूल्यों को सिखाने वाली प्रेरक कहानियां।" },
  searchPlaceholder: { en: "Search moral stories…", hi: "नैतिक कहानियां खोजें..." },
  tags: ["Short Stories", "Moral Values", "Kids Stories", "Life Lessons", "Character Building", "Inspirational"],
  templates: [
    { id: "moral-1", title: { en: "Honesty is the Best Policy", hi: "ईमानदारी सर्वश्रेष्ठ नीति है" }, description: { en: "Moral story teaching the importance of honesty.", hi: "ईमानदारी के महत्व को सिखाने वाली नैतिक कहानी।" }, lastUpdated: "Nov 2025", views: "51.8k", badge: "Popular",templateSlug:'/' },
    { id: "moral-2", title: { en: "Unity is Strength", hi: "एकता में बल है" }, description: { en: "Story showing power of teamwork and unity.", hi: "टीमवर्क और एकता की शक्ति दिखाने वाली कहानी।" }, lastUpdated: "Nov 2025", views: "47.4k", badge: "Trending",templateSlug:'/' },
    { id: "moral-3", title: { en: "Hard Work Pays Off", hi: "कड़ी मेहनत रंग लाती है" }, description: { en: "Inspirational story about perseverance and hard work.", hi: "दृढ़ता और कड़ी मेहनत के बारे में प्रेरक कहानी।" }, lastUpdated: "Nov 2025", views: "43.9k" ,templateSlug:'/'},
    { id: "moral-4", title: { en: "Kindness Matters", hi: "दयालुता मायने रखती है" }, description: { en: "Heartwarming story teaching compassion and kindness.", hi: "करुणा और दयालुता सिखाने वाली हार्दिक कहानी।" }, lastUpdated: "Oct 2025", views: "40.2k",templateSlug:'/' },
    { id: "moral-5", title: { en: "Patience and Perseverance", hi: "धैर्य और दृढ़ता" }, description: { en: "Story about importance of patience in achieving goals.", hi: "लक्ष्यों को प्राप्त करने में धैर्य के महत्व के बारे में कहानी।" }, lastUpdated: "Oct 2025", views: "37.6k" ,templateSlug:'/'},
    { id: "moral-6", title: { en: "Helping Others", hi: "दूसरों की मदद करना" }, description: { en: "Moral tale about joy of helping those in need.", hi: "जरूरतमंदों की मदद करने की खुशी के बारे में नैतिक कहानी।" }, lastUpdated: "Oct 2025", views: "34.8k",templateSlug:'/' },
  ],
  seoTitle: { en: "About Moral Story Templates", hi: "नैतिक कहानी टेम्पलेट के बारे में" },
  seoDescription: { en: "Moral stories teach important life lessons and values through engaging narratives. Our templates include stories about honesty, unity in teamwork, rewards of hard work, importance of kindness, patience in adversity, and helping others. Each story features relatable characters, clear moral lessons, and age-appropriate language for children's character development.", hi: "नैतिक कहानियां आकर्षक कथाओं के माध्यम से महत्वपूर्ण जीवन पाठ और मूल्यों को सिखाती हैं।" },
  relatedTemplates: [
    { title: { en: "100 Words Essays", hi: "100 शब्द निबंध" }, category: { en: "Essays", hi: "निबंध" }, slug: "100-words" },
    { title: { en: "Paragraphs", hi: "पैराग्राफ" }, category: { en: "Essays", hi: "निबंध" }, slug: "paragraphs" },
    { title: { en: "Speeches", hi: "भाषण" }, category: { en: "Essays", hi: "निबंध" }, slug: "speeches" },
    { title: { en: "School Notice", hi: "स्कूल नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "school" },
  ],
  blogPosts: [
    { title: { en: "Teaching Values Through Stories", hi: "कहानियों के माध्यम से मूल्यों को सिखाना" }, excerpt: { en: "Using moral stories for character education", hi: "चरित्र शिक्षा के लिए नैतिक कहानियों का उपयोग" }, readTime: "6 min read", slug: "teaching-values" },
    { title: { en: "Classic Moral Stories for Kids", hi: "बच्चों के लिए क्लासिक नैतिक कहानियां" }, excerpt: { en: "Timeless tales with important lessons", hi: "महत्वपूर्ण पाठों के साथ कालजयी कहानियां" }, readTime: "8 min read", slug: "classic-moral-stories" },
    { title: { en: "Storytelling Tips for Parents", hi: "माता-पिता के लिए कहानी सुनाने के सुझाव" }, excerpt: { en: "Making storytime engaging and educational", hi: "कहानी समय को आकर्षक और शैक्षिक बनाना" }, readTime: "7 min read", slug: "storytelling-tips" },
  ],
  faqs: [
    { question: { en: "What is a moral story?", hi: "नैतिक कहानी क्या है?" }, answer: { en: "A moral story is a short tale that teaches an important life lesson or value. It uses characters and situations to illustrate virtues like honesty, kindness, hard work, patience. The moral is the key message or lesson at the end.", hi: "नैतिक कहानी एक लघु कथा है जो एक महत्वपूर्ण जीवन पाठ या मूल्य सिखाती है। यह ईमानदारी, दयालुता जैसे गुणों को चित्रित करने के लिए पात्रों का उपयोग करती है।" } },
    { question: { en: "How do I write a moral story?", hi: "मैं नैतिक कहानी कैसे लिखूं?" }, answer: { en: "Choose moral/lesson, create relatable characters, set up situation/problem, show consequences of actions, conclude with moral. Keep language simple, story short (150-300 words), lesson clear. Use dialogue and emotions to engage readers.", hi: "नैतिक/पाठ चुनें, संबंधित पात्र बनाएं, स्थिति स्थापित करें, कार्यों के परिणाम दिखाएं, नैतिक के साथ समाप्त करें। भाषा सरल रखें।" } },
    { question: { en: "At what age should kids read moral stories?", hi: "बच्चों को किस उम्र में नैतिक कहानियां पढ़नी चाहिए?" }, answer: { en: "Start from age 3-4 with simple picture-based stories. Age 5-7: Short stories with clear morals. Age 8-12: Longer stories with complex lessons. Adjust story length and vocabulary to child's reading level. Discuss the moral after reading.", hi: "3-4 साल की उम्र से सरल चित्र-आधारित कहानियों से शुरू करें। 5-7 साल: स्पष्ट नैतिकता के साथ लघु कहानियां। 8-12 साल: जटिल पाठों के साथ लंबी कहानियां।" } },
  ],
};

// 6. PARAGRAPHS
export const paragraphsData: SubcategoryData = {
  slug: "paragraphs",
  categorySlug: "essays",
  categoryName: { en: "Essays", hi: "निबंध" },
  subcategoryName: { en: "Paragraphs", hi: "पैराग्राफ" },
  breadcrumb: [{ en: "Essays", hi: "निबंध", slug:"/letters" }, { en: "Paragraphs", hi: "पैराग्राफ", slug:"/letters" }],
  heroTitle: { en: "Paragraph Writing Templates", hi: "पैराग्राफ लेखन टेम्पलेट" },
  heroDescription: { en: "Short paragraph formats on various topics - simple paragraph writing templates for students.", hi: "विभिन्न विषयों पर लघु पैराग्राफ प्रारूप - छात्रों के लिए सरल पैराग्राफ लेखन टेम्पलेट।" },
  searchPlaceholder: { en: "Search paragraph topics…", hi: "पैराग्राफ विषय खोजें..." },
  tags: ["Paragraph Writing", "Short Paragraph", "10 Lines", "Class Assignment", "Writing Practice", "Topic Paragraph"],
  templates: [
    { id: "para-1", title: { en: "My Hobby Paragraph", hi: "मेरा शौक पैराग्राफ" }, description: { en: "Short paragraph about my hobby and interests.", hi: "मेरे शौक और रुचियों के बारे में लघु पैराग्राफ।" }, lastUpdated: "Nov 2025", views: "46.2k", badge: "Popular",templateSlug:'/' },
    { id: "para-2", title: { en: "My Family Paragraph", hi: "मेरा परिवार पैराग्राफ" }, description: { en: "Paragraph describing my family members.", hi: "मेरे परिवार के सदस्यों का वर्णन करने वाला पैराग्राफ।" }, lastUpdated: "Nov 2025", views: "42.7k", badge: "Trending",templateSlug:'/' },
    { id: "para-3", title: { en: "My Country Paragraph", hi: "मेरा देश पैराग्राफ" }, description: { en: "Short paragraph on my country and patriotism.", hi: "मेरे देश और देशभक्ति पर लघु पैराग्राफ।" }, lastUpdated: "Nov 2025", views: "39.4k",templateSlug:'/' },
    { id: "para-4", title: { en: "Festivals of India", hi: "भारत के त्योहार" }, description: { en: "Paragraph about Indian festivals and celebrations.", hi: "भारतीय त्योहारों और समारोहों के बारे में पैराग्राफ।" }, lastUpdated: "Oct 2025", views: "36.1k",templateSlug:'/' },
    { id: "para-5", title: { en: "Importance of Trees", hi: "पेड़ों का महत्व" }, description: { en: "Paragraph on why trees are important for environment.", hi: "पर्यावरण के लिए पेड़ क्यों महत्वपूर्ण हैं पर पैराग्राफ।" }, lastUpdated: "Oct 2025", views: "33.8k",templateSlug:'/' },
    { id: "para-6", title: { en: "Pollution Problem", hi: "प्रदूषण समस्या" }, description: { en: "Short paragraph on pollution and its effects.", hi: "प्रदूषण और इसके प्रभावों पर लघु पैराग्राफ।" }, lastUpdated: "Oct 2025", views: "30.9k",templateSlug:'/' },
  ],
  seoTitle: { en: "About Paragraph Writing Templates", hi: "पैराग्राफ लेखन टेम्पलेट के बारे में" },
  seoDescription: { en: "Paragraphs are short compositions on single topics perfect for beginner writers. Our templates include paragraphs on my hobby, my family, my country, festivals of India, importance of trees, and pollution problems. Each paragraph features topic sentence, supporting details, and concluding sentence with simple language for elementary students' writing practice.", hi: "पैराग्राफ शुरुआती लेखकों के लिए एकल विषयों पर लघु रचनाएं हैं।" },
  relatedTemplates: [
    { title: { en: "100 Words Essays", hi: "100 शब्द निबंध" }, category: { en: "Essays", hi: "निबंध" }, slug: "100-words" },
    { title: { en: "Moral Stories", hi: "नैतिक कहानियां" }, category: { en: "Essays", hi: "निबंध" }, slug: "moral-stories" },
    { title: { en: "School Notice", hi: "स्कूल नोटिस" }, category: { en: "Notices", hi: "नोटिस" }, slug: "school" },
    { title: { en: "Leave Application", hi: "छुट्टी आवेदन" }, category: { en: "Applications", hi: "आवेदन" }, slug: "leave" },
  ],
  blogPosts: [
    { title: { en: "Paragraph Writing for Beginners", hi: "शुरुआती के लिए पैराग्राफ लेखन" }, excerpt: { en: "Basic paragraph structure and tips", hi: "बुनियादी पैराग्राफ संरचना और सुझाव" }, readTime: "5 min read", slug: "paragraph-writing-beginners" },
    { title: { en: "10 Lines Writing Format", hi: "10 पंक्ति लेखन प्रारूप" }, excerpt: { en: "Quick paragraph writing for students", hi: "छात्रों के लिए त्वरित पैराग्राफ लेखन" }, readTime: "4 min read", slug: "10-lines-format" },
    { title: { en: "Improving Paragraph Coherence", hi: "पैराग्राफ सुसंगतता में सुधार" }, excerpt: { en: "Making paragraphs flow smoothly", hi: "पैराग्राफ को सुचारू रूप से प्रवाहित करना" }, readTime: "6 min read", slug: "paragraph-coherence" },
  ],
  faqs: [
    { question: { en: "How long should a paragraph be?", hi: "एक पैराग्राफ कितना लंबा होना चाहिए?" }, answer: { en: "For students: 5-10 sentences (50-100 words). Elementary: 5-7 sentences, Middle school: 7-10 sentences. Each paragraph should focus on one main idea with supporting details. Too short lacks detail, too long becomes confusing.", hi: "छात्रों के लिए: 5-10 वाक्य (50-100 शब्द)। प्राथमिक: 5-7 वाक्य, मिडिल स्कूल: 7-10 वाक्य। प्रत्येक पैराग्राफ एक मुख्य विचार पर ध्यान केंद्रित करना चाहिए।" } },
    { question: { en: "What is paragraph structure?", hi: "पैराग्राफ संरचना क्या है?" }, answer: { en: "Topic sentence (main idea), Supporting sentences (details, examples, explanations), Concluding sentence (summary or transition). Start with clear topic sentence, develop with evidence, end with strong conclusion. Maintain unity - all sentences relate to topic.", hi: "विषय वाक्य (मुख्य विचार), सहायक वाक्य (विवरण, उदाहरण), निष्कर्ष वाक्य (सारांश)। एकता बनाए रखें - सभी वाक्य विषय से संबंधित हों।" } },
    { question: { en: "How to write a good topic sentence?", hi: "एक अच्छा विषय वाक्य कैसे लिखें?" }, answer: { en: "Topic sentence states paragraph's main idea clearly. Make it specific but not too narrow, interesting but not too complex. Place it at beginning of paragraph. Example: 'My hobby of reading books helps me learn new things.' Then support with details.", hi: "विषय वाक्य पैराग्राफ के मुख्य विचार को स्पष्ट रूप से बताता है। इसे विशिष्ट लेकिन बहुत संकीर्ण नहीं बनाएं। पैराग्राफ की शुरुआत में रखें।" } },
  ],
};

// Export all Essays subcategories
export const allEssaysSubcategories = [
  essays100WordsData,
  essays200WordsData,
  essays500WordsData,
  speechesData,
  moralStoriesData,
  paragraphsData,
];
