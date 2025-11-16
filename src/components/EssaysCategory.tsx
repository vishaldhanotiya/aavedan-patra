import { CategoryPage } from "./CategoryPage";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { 
  BookOpen, 
  FileText, 
  AlignLeft,
  Mic,
  PenTool,
  GraduationCap,
  Mail,
  Award,
  FileUser,
  MessageSquare
} from "lucide-react";

const essaysCategory = {
  name: "Essays & Paragraphs",
  description: "Read and download essays and short paragraphs on trending educational topics — ideal for students and learners.",
  breadcrumbs: ["Essays & Paragraphs"],
  icon: BookOpen,
  subcategories: [
    {
      icon: FileText,
      title: "Essays (100 Words)",
      description: "Short essays for students and learners",
      count: 42
    },
    {
      icon: FileText,
      title: "Essays (200 Words)",
      description: "Medium-length essay formats",
      count: 38
    },
    {
      icon: FileText,
      title: "Essays (500 Words)",
      description: "Detailed long-form essay templates",
      count: 31
    },
    {
      icon: AlignLeft,
      title: "Paragraphs",
      description: "Short paragraph writing samples",
      count: 45
    },
    {
      icon: Mic,
      title: "Speech Writing",
      description: "Speeches for various occasions",
      count: 27
    }
  ],
  templates: [
    {
      title: "Essay on Education",
      description: "Comprehensive essay on importance of education in society",
      views: "28.5k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Paragraph on Discipline",
      description: "Short paragraph on importance of discipline in student life",
      views: "22.3k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Speech on Independence Day",
      description: "Patriotic speech for 15th August celebration",
      views: "31.8k",
      date: "Aug 2025",
    },
    {
      title: "Essay on Technology",
      description: "Essay discussing impact of technology on modern life",
      views: "19.7k",
      date: "Nov 2025",
    },
    {
      title: "Paragraph on Pollution",
      description: "Environmental awareness paragraph on pollution control",
      views: "24.2k",
      date: "Oct 2025",
    },
    {
      title: "Essay on My School",
      description: "Descriptive essay about school life and experiences",
      views: "26.9k",
      date: "Nov 2025",
      tag: "New"
    },
    {
      title: "Speech on Teacher's Day",
      description: "Appreciation speech for teachers on 5th September",
      views: "21.4k",
      date: "Sep 2025",
    },
    {
      title: "Paragraph on Friendship",
      description: "Short paragraph on value of true friendship",
      views: "18.6k",
      date: "Nov 2025",
    },
    {
      title: "Essay on Climate Change",
      description: "Detailed essay on global warming and climate issues",
      views: "23.1k",
      date: "Nov 2025",
    }
  ],
  aboutContent: "Essays and paragraphs are essential forms of academic and creative writing that help students develop their language skills, critical thinking, and expression abilities. An essay is a structured piece of writing that presents arguments, information, or narratives on a specific topic, typically ranging from 100 to 500 words or more. A paragraph is a shorter composition focusing on a single idea or theme. Our collection includes essays on diverse topics such as education, technology, environment, social issues, and cultural events, available in multiple word counts to suit different academic requirements. We also provide speech writing templates for occasions like Independence Day, Republic Day, Teacher's Day, and school functions. Each template demonstrates proper structure, vocabulary usage, and coherent flow of ideas. Whether you're a student preparing for exams, participating in competitions, or completing assignments, our essay and paragraph samples serve as excellent learning resources and inspiration for your own writing.",
  relatedCategories: [
    {
      icon: FileText,
      title: "Applications",
      description: "Academic application formats",
      count: 67
    },
    {
      icon: Mail,
      title: "Letters",
      description: "Formal and informal letters",
      count: 58
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Academic certificate templates",
      count: 42
    },
    {
      icon: MessageSquare,
      title: "Reports",
      description: "School project reports",
      count: 29
    }
  ],
  blogs: [
    {
      title: "How to Write a Perfect Essay",
      excerpt: "Complete guide to essay structure, planning, and writing techniques for students",
      readTime: "7 min read",
      thumbnail: BookOpen
    },
    {
      title: "Paragraph Writing Tips for Students",
      excerpt: "Master the art of concise paragraph writing with topic sentences and supporting details",
      readTime: "5 min read",
      thumbnail: BookOpen
    },
    {
      title: "Speech Writing Guide for School Events",
      excerpt: "Learn how to write engaging speeches for competitions and school functions",
      readTime: "6 min read",
      thumbnail: BookOpen
    }
  ],
  faqs: [
    {
      question: "What is the difference between an essay and a paragraph?",
      answer: "An essay is a multi-paragraph composition (typically 3-5 paragraphs) that explores a topic in depth with introduction, body paragraphs, and conclusion. A paragraph is a single unit of writing focusing on one main idea, usually 5-10 sentences. Essays allow for detailed analysis and multiple perspectives, while paragraphs are concise and focused on a single point. For school assignments, essays are used for comprehensive topics, while paragraphs are for brief responses."
    },
    {
      question: "How many words should a school essay be?",
      answer: "It depends on the assignment requirements and grade level. Elementary students typically write 100-200 word essays, middle school students write 200-400 words, and high school students write 400-800 words or more. Common lengths are: Short essay (100-200 words), Medium essay (250-500 words), Long essay (500-1000 words). Always check your teacher's specific word count requirements and use them as guidelines."
    },
    {
      question: "What is the proper structure for an essay?",
      answer: "A standard essay has three main parts: Introduction (opening paragraph with thesis statement), Body (2-3 paragraphs developing main points with examples and evidence), and Conclusion (closing paragraph summarizing key points). Each paragraph should start with a topic sentence, include supporting details, and transition smoothly to the next. Use clear language, proper grammar, and organize ideas logically. For longer essays, you may include multiple body paragraphs for different aspects of your topic."
    },
    {
      question: "Can I use the same essay for different assignments?",
      answer: "No, this is considered academic plagiarism or self-plagiarism. Each assignment should have original work tailored to the specific prompt or question. While you can use similar research or ideas, the writing must be fresh and address the particular requirements. Our templates are meant as learning guides and inspiration - always write your own original content. Teachers often use plagiarism detection software, so submit only your own work."
    }
  ]
};

export function EssaysCategory() {
  return (
    <div>
      <ThemeToggle />
      <CategoryPage category={essaysCategory} />
      <Footer />
    </div>
  );
}
