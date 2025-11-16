import { CategoryPage } from "./CategoryPage";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { 
  Mail, 
  FileText, 
  MessageSquare, 
  AlertCircle,
  LogOut,
  PartyPopper,
  Award,
  FileUser,
  BookOpen,
  FileBarChart
} from "lucide-react";

const lettersCategory = {
  name: "Letter Templates",
  description: "Find professional and personal letter formats for all situations, including resignation, request, complaint, apology, and invitation letters. Copy, edit, or download instantly.",
  breadcrumbs: ["Letters"],
  icon: Mail,
  subcategories: [
    {
      icon: FileText,
      title: "Formal Letters",
      description: "Official and business letter formats",
      count: 38
    },
    {
      icon: MessageSquare,
      title: "Informal Letters",
      description: "Personal and casual letter templates",
      count: 24
    },
    {
      icon: FileText,
      title: "Request Letters",
      description: "Letters for making formal requests",
      count: 31
    },
    {
      icon: AlertCircle,
      title: "Complaint Letters",
      description: "Complaint and grievance letter formats",
      count: 22
    },
    {
      icon: LogOut,
      title: "Resignation Letters",
      description: "Professional resignation templates",
      count: 19
    },
    {
      icon: PartyPopper,
      title: "Invitation Letters",
      description: "Event and occasion invitation formats",
      count: 27
    }
  ],
  templates: [
    {
      title: "Resignation Letter for Employee",
      description: "Professional resignation letter format with notice period and gratitude",
      views: "18.5k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Complaint Letter to Bank",
      description: "Formal complaint letter format for banking issues and grievances",
      views: "14.2k",
      date: "Nov 2025",
    },
    {
      title: "Request Letter to Principal",
      description: "Student request letter for various school-related matters",
      views: "16.8k",
      date: "Nov 2025",
    },
    {
      title: "Invitation Letter for Birthday",
      description: "Friendly invitation letter format for birthday celebrations",
      views: "12.3k",
      date: "Oct 2025",
    },
    {
      title: "Apology Letter to Teacher",
      description: "Sincere apology letter format for students",
      views: "9.7k",
      date: "Nov 2025",
      tag: "New"
    },
    {
      title: "Request Letter for Leave Extension",
      description: "Formal letter requesting extension of approved leave",
      views: "11.5k",
      date: "Oct 2025",
    },
    {
      title: "Thank You Letter After Interview",
      description: "Professional thank you letter to send after job interview",
      views: "13.9k",
      date: "Nov 2025",
    },
    {
      title: "Complaint Letter to Landlord",
      description: "Tenant complaint letter for property maintenance issues",
      views: "8.4k",
      date: "Oct 2025",
    },
    {
      title: "Recommendation Letter for Employee",
      description: "Professional recommendation letter with character reference",
      views: "15.1k",
      date: "Nov 2025",
      tag: "Popular"
    }
  ],
  aboutContent: "Letters are a fundamental form of written communication used for both personal and professional purposes. A well-crafted letter follows proper formatting conventions including sender and recipient addresses, date, salutation, body paragraphs, and closing signature. Our comprehensive collection includes formal letters for business and official communication, informal letters for personal correspondence, resignation letters for job transitions, complaint letters for addressing grievances, request letters for making formal appeals, and invitation letters for events and occasions. Each template is professionally written, properly formatted, and easily customizable to suit your specific needs. Whether you're writing to an employer, government official, friend, or family member, our letter templates help you communicate effectively with the appropriate tone and structure.",
  relatedCategories: [
    {
      icon: FileText,
      title: "Applications",
      description: "Job and leave application formats",
      count: 67
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Professional certificate templates",
      count: 42
    },
    {
      icon: FileUser,
      title: "Resumes",
      description: "Modern CV and resume formats",
      count: 38
    },
    {
      icon: FileBarChart,
      title: "Emails",
      description: "Professional email templates",
      count: 33
    }
  ],
  blogs: [
    {
      title: "How to Write a Professional Resignation Letter",
      excerpt: "Step-by-step guide to writing a respectful and professional resignation letter with samples",
      readTime: "6 min read",
      thumbnail: BookOpen
    },
    {
      title: "Formal Letter Writing: Format and Best Practices",
      excerpt: "Master the art of formal letter writing with proper structure, tone, and etiquette",
      readTime: "5 min read",
      thumbnail: BookOpen
    },
    {
      title: "Effective Complaint Letter Writing Tips",
      excerpt: "Learn how to write compelling complaint letters that get results and resolutions",
      readTime: "4 min read",
      thumbnail: BookOpen
    }
  ],
  faqs: [
    {
      question: "What is the difference between formal and informal letters?",
      answer: "Formal letters are used for official, business, or professional communication and follow strict formatting rules with formal language. Informal letters are personal correspondence to friends or family, written in a casual, friendly tone without rigid structure. Formal letters include business correspondence, job applications, and official requests, while informal letters include personal updates, thank you notes to friends, and casual invitations."
    },
    {
      question: "How do I format a resignation letter properly?",
      answer: "A resignation letter should include: your contact information and date at the top, the recipient's details, a clear subject line, a formal salutation, a statement of resignation with your last working day (typically 2-4 weeks notice), a brief reason (optional), expression of gratitude, offer to help with transition, and a professional closing. Keep it concise, positive, and professional - it's part of your employment record."
    },
    {
      question: "Can I send a formal letter via email?",
      answer: "Yes, formal letters can be sent via email in today's digital age. When sending a formal letter by email, maintain the same professional structure and tone. Include a clear subject line, use proper formatting in the email body, and attach a PDF version if required. For very formal situations (legal matters, official government correspondence), a printed and mailed letter may still be preferred."
    },
    {
      question: "How long should a formal letter be?",
      answer: "Most formal letters should be one page or approximately 200-400 words. Be concise and focus on the essential information. Business letters should get to the point quickly while maintaining professionalism. Only use multiple pages if absolutely necessary, such as for detailed proposals or extensive documentation. Remember: brevity and clarity are valued in professional correspondence."
    }
  ]
};

export function LettersCategory() {
  return (
    <div>
      <ThemeToggle />
      <CategoryPage category={lettersCategory} />
      <Footer />
    </div>
  );
}
