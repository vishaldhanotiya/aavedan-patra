// Multilingual content interface
interface MultilingualContent {
  en: string;
  hi: string;
  slug?: string;
}

interface CategoryTemplate {
  title: MultilingualContent;
  category: MultilingualContent;
  views: string;
  href: string;
  tag?: string;
  tagColor?: string;
  slug?: string;
}

export interface CategoryData {
  slug: string;
  name: MultilingualContent;
  description: MultilingualContent;
  templates: CategoryTemplate[];
  seoKeywords: string[];
}
export const trendingTemplate: CategoryData = {
  slug: "applications",
  name: {
    en: "Application Templates",
    hi: "आवेदन टेम्पलेट",
  },
  description: {
    en: "Browse professional application templates for jobs, leaves, loans, admissions, and scholarships. Download free, editable formats in English and Hindi.",
    hi: "नौकरी, छुट्टी, ऋण, प्रवेश और छात्रवृत्ति के लिए पेशेवर आवेदन टेम्पलेट देखें। अंग्रेजी और हिंदी में मुफ्त, संपादन योग्य प्रारूप डाउनलोड करें।",
  },
  templates: [
    {
      title: {
        en: "Professional Job Application",
        hi: "शिक्षक पद के लिए नौकरी आवेदन",
      },
      category: {
        en: "Applications",
        hi: "आवेदन पत्र",
      },
      views: "12.5k",
      tag: "Popular",
      tagColor: "bg-rose-500",
      href: "/applications/job",
    },
    {
      title: { en: "Resignation Letter", hi: "त्यागपत्र" },
      category: { en: "Letters", hi: "पत्र" },
      views: "15.3k",
      tag: "Popular",
      tagColor: "bg-rose-500",
      href: "/letters/resignation",
    },
    {
      title: { en: "Leave Application Format", hi: "छुट्टी आवेदन प्रारूप" },
      category: {
        en: "Applications",
        hi: "आवेदन पत्र",
      },
      views: "11.1k",
      tag: "Trending",
      tagColor: "bg-violet-500",
      href: "/applications/leave",
    },
    // {
    //   title: "Modern Resume Template",
    //   category: "Resumes",
    //   views: "10.2k",
    //   tag: "Trending",
    //   tagColor: "bg-violet-500"
    // },
    // {
    //   title: "Experience Certificate",
    //   category: "Certificates",
    //   views: "8.9k",
    //   tag: "New",
    //   tagColor: "bg-cyan-500"
    // },
  ],
  seoKeywords: [
    "job application format",
    "leave application",
    "loan application to bank",
    "college admission application",
    "scholarship application letter",
    "application templates",
    "formal application format",
  ],
};
