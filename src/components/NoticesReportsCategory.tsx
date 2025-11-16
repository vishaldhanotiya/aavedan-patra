import { CategoryPage } from "./CategoryPage";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { 
  FileBarChart, 
  Bell, 
  Building, 
  GraduationCap,
  Users,
  TrendingUp,
  Mail,
  Award,
  FileText,
  BookOpen,
  FileUser
} from "lucide-react";

const noticesReportsCategory = {
  name: "Notices & Report Templates",
  description: "Browse official notice formats and academic or business report templates — including meeting notices, school circulars, project reports, and minutes of meetings.",
  breadcrumbs: ["Notices & Reports"],
  icon: FileBarChart,
  subcategories: [
    {
      icon: Building,
      title: "Office Notices",
      description: "Professional workplace notice formats",
      count: 26
    },
    {
      icon: GraduationCap,
      title: "School Notices",
      description: "Educational institution circular templates",
      count: 31
    },
    {
      icon: Users,
      title: "Meeting Reports",
      description: "Minutes of meeting documentation",
      count: 18
    },
    {
      icon: TrendingUp,
      title: "Project Reports",
      description: "Academic and business project templates",
      count: 22
    },
    {
      icon: FileBarChart,
      title: "Business Reports",
      description: "Professional business report formats",
      count: 19
    }
  ],
  templates: [
    {
      title: "Office Notice for Holiday",
      description: "Official notice template announcing workplace holiday schedule",
      views: "16.8k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "School Circular Format",
      description: "General circular template for school announcements and updates",
      views: "18.2k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Project Report Sample",
      description: "Comprehensive project report format with all sections",
      views: "21.5k",
      date: "Nov 2025",
    },
    {
      title: "Minutes of Meeting Template",
      description: "Professional MOM format with agenda and action items",
      views: "14.9k",
      date: "Oct 2025",
    },
    {
      title: "Internship Report Format",
      description: "Detailed internship report template for students",
      views: "17.3k",
      date: "Nov 2025",
    },
    {
      title: "Office Memo Format",
      description: "Internal office memorandum template for announcements",
      views: "12.7k",
      date: "Oct 2025",
      tag: "New"
    },
    {
      title: "Event Notice Template",
      description: "Notice format for announcing office or school events",
      views: "11.4k",
      date: "Nov 2025",
    },
    {
      title: "Annual Report Format",
      description: "Business annual report with financial and operational summary",
      views: "13.8k",
      date: "Oct 2025",
    },
    {
      title: "Lab Report Template",
      description: "Scientific lab report format for experiments and research",
      views: "15.6k",
      date: "Nov 2025",
    }
  ],
  aboutContent: "Notices and reports are essential business and academic documents used for formal communication and documentation. Notices are official announcements issued by organizations to inform employees, students, or stakeholders about important information, events, policy changes, or directives. Reports are detailed documents presenting information, analysis, findings, or progress on specific topics, projects, or activities. Our collection includes office notices for workplace announcements, school circulars for educational communications, meeting minutes for documenting discussions and decisions, project reports for academic and business documentation, and business reports for organizational analysis. Each template follows professional formatting standards with proper headers, clear sections, and formal language. Whether you need to announce a policy change, document a project, record meeting proceedings, or present research findings, our notice and report templates provide the structure and professionalism required for effective organizational communication.",
  relatedCategories: [
    {
      icon: FileText,
      title: "Applications",
      description: "Professional application templates",
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
      description: "Official certificate formats",
      count: 42
    },
    {
      icon: FileUser,
      title: "Emails",
      description: "Professional email templates",
      count: 33
    }
  ],
  blogs: [
    {
      title: "How to Write Effective Office Notices",
      excerpt: "Best practices for creating clear, professional workplace notices that get attention",
      readTime: "5 min read",
      thumbnail: BookOpen
    },
    {
      title: "Project Report Writing Guide",
      excerpt: "Complete guide to structuring and writing comprehensive project reports",
      readTime: "8 min read",
      thumbnail: BookOpen
    },
    {
      title: "Minutes of Meeting: Format and Tips",
      excerpt: "Learn how to document meetings effectively with proper MOM format and structure",
      readTime: "6 min read",
      thumbnail: BookOpen
    }
  ],
  faqs: [
    {
      question: "What is the difference between a notice and a circular?",
      answer: "A notice is a formal announcement about a specific event, policy, or information directed at a particular group, usually with urgency or time-sensitivity. A circular is a more general communication document distributed to a wide audience for information purposes, such as policy updates or routine announcements. Notices often require immediate attention or action, while circulars are more informational. Both follow formal formats with official letterheads and authorized signatures."
    },
    {
      question: "What should be included in meeting minutes?",
      answer: "Meeting minutes should include: meeting title and date/time/location, list of attendees and absentees, agenda items discussed, key points and decisions made, action items with responsible persons and deadlines, voting results if applicable, next meeting date, and signature of the minute-taker. Keep minutes concise, objective, and focused on decisions and action items rather than detailed discussions. Use a consistent format and distribute minutes within 24-48 hours of the meeting."
    },
    {
      question: "How long should a project report be?",
      answer: "Project report length varies by purpose and requirements. Academic project reports typically range from 10-50 pages, business project reports from 5-25 pages, and internship reports from 15-40 pages. Focus on quality over quantity - include all essential sections (introduction, objectives, methodology, findings, analysis, conclusions, recommendations) but avoid unnecessary filler. Always check if there are specific page requirements from your institution or organization."
    },
    {
      question: "Who can issue an official notice in an organization?",
      answer: "Official notices can only be issued by authorized personnel such as HR managers, department heads, principals, directors, or administrators depending on the organization's hierarchy and the notice's subject matter. For legal or policy matters, higher management approval may be required. All notices should be on official letterhead, properly dated, clearly worded, and signed by the authorized person. Unauthorized notices have no official validity."
    }
  ]
};

export function NoticesReportsCategory() {
  return (
    <div>
      <ThemeToggle />
      <CategoryPage category={noticesReportsCategory} />
      <Footer />
    </div>
  );
}
