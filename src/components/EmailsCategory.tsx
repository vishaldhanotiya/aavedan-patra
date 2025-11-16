import { CategoryPage } from "./CategoryPage";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { 
  Mail, 
  Briefcase, 
  LogOut, 
  RefreshCw,
  AlertCircle,
  Heart,
  FileText,
  Award,
  BookOpen,
  MessageSquare
} from "lucide-react";

const emailsCategory = {
  name: "Email Templates",
  description: "Use smart pre-written email templates for job applications, follow-ups, resignation, appreciation, complaint, and more. Copy and send with confidence.",
  breadcrumbs: ["Emails"],
  icon: Mail,
  subcategories: [
    {
      icon: Briefcase,
      title: "Job Emails",
      description: "Professional job application email formats",
      count: 29
    },
    {
      icon: LogOut,
      title: "Resignation Emails",
      description: "Professional resignation email templates",
      count: 18
    },
    {
      icon: RefreshCw,
      title: "Follow-up Emails",
      description: "Follow-up email formats for various situations",
      count: 24
    },
    {
      icon: AlertCircle,
      title: "Complaint Emails",
      description: "Professional complaint email templates",
      count: 16
    },
    {
      icon: Heart,
      title: "Thank You Emails",
      description: "Appreciation and gratitude email formats",
      count: 22
    }
  ],
  templates: [
    {
      title: "Job Application Email Format",
      description: "Professional email template for applying to job positions with resume",
      views: "24.7k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Resignation Email Sample",
      description: "Concise and professional resignation email with notice period",
      views: "19.3k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Follow-up Email After Interview",
      description: "Polite follow-up email to check on job application status",
      views: "21.8k",
      date: "Nov 2025",
    },
    {
      title: "Thank You Email After Interview",
      description: "Professional gratitude email to send after job interview",
      views: "18.5k",
      date: "Oct 2025",
    },
    {
      title: "Complaint Email to Manager",
      description: "Professional email format for workplace complaints and issues",
      views: "14.2k",
      date: "Nov 2025",
    },
    {
      title: "Leave Request Email",
      description: "Email template for requesting time off from work",
      views: "16.9k",
      date: "Oct 2025",
      tag: "New"
    },
    {
      title: "Meeting Request Email",
      description: "Professional email for scheduling business meetings",
      views: "15.3k",
      date: "Nov 2025",
    },
    {
      title: "Cold Email for Business",
      description: "Effective cold outreach email template for business opportunities",
      views: "12.7k",
      date: "Oct 2025",
    },
    {
      title: "Apology Email to Client",
      description: "Professional apology email for business mistakes or delays",
      views: "13.4k",
      date: "Nov 2025",
    }
  ],
  aboutContent: "Email is the primary mode of professional communication in today's digital workplace. Unlike formal letters, emails are more immediate and conversational while still maintaining professionalism. Our comprehensive email template collection helps you communicate effectively in various professional scenarios. We provide job application emails for career opportunities, resignation emails for professional transitions, follow-up emails for staying in touch, complaint emails for addressing issues, and thank you emails for expressing gratitude. Each template is crafted with the right subject line, appropriate greeting, clear body content, and professional closing. Email etiquette is crucial - keep messages concise, use proper grammar, respond promptly, and maintain a professional tone. Whether you're applying for jobs, managing workplace relationships, conducting business, or handling customer communications, our email templates help you write with clarity, confidence, and professionalism in the fast-paced digital environment.",
  relatedCategories: [
    {
      icon: FileText,
      title: "Applications",
      description: "Job and leave application formats",
      count: 67
    },
    {
      icon: MessageSquare,
      title: "Letters",
      description: "Professional letter templates",
      count: 58
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Official certificate formats",
      count: 42
    },
    {
      icon: Briefcase,
      title: "Resumes",
      description: "CV and resume templates",
      count: 38
    }
  ],
  blogs: [
    {
      title: "Email Etiquette: Professional Communication Tips",
      excerpt: "Master the art of professional email writing with dos and don'ts for workplace communication",
      readTime: "5 min read",
      thumbnail: BookOpen
    },
    {
      title: "How to Write Effective Follow-up Emails",
      excerpt: "Learn the timing and technique for writing follow-up emails that get responses",
      readTime: "4 min read",
      thumbnail: BookOpen
    },
    {
      title: "Job Application Email Best Practices",
      excerpt: "Complete guide to writing compelling job application emails that stand out to recruiters",
      readTime: "6 min read",
      thumbnail: BookOpen
    }
  ],
  faqs: [
    {
      question: "What's the difference between an email and a formal letter?",
      answer: "Emails are more immediate, conversational, and less formal than traditional letters. Emails don't require full addresses and can be shorter and more direct. However, professional emails still need proper structure: clear subject line, appropriate greeting, concise message, and professional signature. Use emails for quick communication, updates, and routine correspondence. Use formal letters (printed or PDF) for official documents, legal matters, or when formality is essential. Many formal letters are now sent as email attachments."
    },
    {
      question: "How long should a professional email be?",
      answer: "Professional emails should be concise - ideally 3-5 short paragraphs or 150-300 words. Get to the point quickly: state your purpose in the first paragraph, provide necessary details in the body, and end with a clear call-to-action or closing. If your message requires more detail, consider attaching a document rather than writing a lengthy email. Remember: busy professionals often scan emails quickly, so use bullet points, short sentences, and clear formatting."
    },
    {
      question: "When should I send a follow-up email after a job application?",
      answer: "Wait 7-10 business days after submitting your application before sending a follow-up email. If the job posting specified a timeline (e.g., 'decisions by month-end'), wait until that period passes. For post-interview follow-ups, send a thank-you email within 24 hours, then wait 1-2 weeks before checking on status. Keep follow-ups brief, polite, and professional - express continued interest without appearing pushy or impatient."
    },
    {
      question: "Should I use CC or BCC in professional emails?",
      answer: "Use CC (Carbon Copy) when you want recipients to know who else is receiving the email - useful for keeping stakeholders informed. Use BCC (Blind Carbon Copy) when sending to multiple people who don't need to see each other's addresses, such as newsletters or mass announcements. Never use 'Reply All' unless your response is relevant to everyone. For sensitive or confidential matters, avoid CC/BCC and send individual emails instead."
    }
  ]
};

export function EmailsCategory() {
  return (
    <div>
      <ThemeToggle />
      <CategoryPage category={emailsCategory} />
      <Footer />
    </div>
  );
}
