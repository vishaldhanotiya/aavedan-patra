import { CategoryPage } from "./CategoryPage";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Home as HomeIcon,
  DollarSign,
  Mail,
  Award,
  FileUser,
  BookOpen,
  FileBarChart,
} from "lucide-react";

const applicationsCategory = {
  name: "Applications",
  description:
    "Professional application templates for jobs, leaves, loans, admissions, and more. Download free, customizable formats suitable for offices, schools, colleges, and government institutions.",
  breadcrumbs: ["Applications"],
  icon: FileText,
  subcategories: [
    {
      icon: Briefcase,
      title: "Job Applications",
      description: "Professional formats for job positions",
      count: 6,
      href: "/applications/job",
    },
    {
      icon: GraduationCap,
      title: "Leave Applications",
      description: "Templates for sick, casual, and emergency leaves",
      count: 32,
      href: "/applications/letters",

    },
    {
      icon: HomeIcon,
      title: "Admission Applications",
      description: "College and school admission formats",
      count: 28,
      href: "/application/admission-application",

    },
    {
      icon: DollarSign,
      title: "Loan Applications",
      description: "Bank loan and financial aid requests",
      count: 18,
      href: "/application/loan-application",

    },
  ],
  templates: [
    {
      key: 1,
      title: "Job Application for Teacher",
      description:
        "Professional job application format for teaching positions in schools and colleges",
      views: "12.5k",
      date: "Nov 2025",
      tag: "Popular",
      href: "/application/job-application-for-teacher",
    },
    {
      key: 2,
      title: "Leave Application for Office",
      description: "Formal leave application template for office employees",
      views: "10.2k",
      date: "Nov 2025",
      href: "/application/job-application-for-teacher",
    },
    {
      key: 3,
      title: "School Admission Application",
      description:
        "Complete application format for school admission with parent information",
      views: "8.9k",
      date: "Oct 2025",
      tag: "New",
      href: "/application/job-application-for-teacher",
    },
    {
      key: 4,
      title: "Sick Leave Application",
      description: "Medical leave application with doctor's note reference",
      views: "15.3k",
      date: "Nov 2025",
      href: "/application/job-application-for-teacher",
    },
    {
      key: 5,
      title: "Job Application for Fresher",
      description: "Entry-level job application template for fresh graduates",
      views: "11.1k",
      date: "Oct 2025",
      href: "/application/job-application-for-teacher",
    },
    {
      key: 6,
      title: "College Admission Application",
      description:
        "Comprehensive college admission application with course details",
      views: "9.7k",
      date: "Nov 2025",
      href: "/application/job-application-for-teacher",
    },
    {
      key: 7,
      title: "Casual Leave Application",
      description: "Simple format for requesting casual leave from work",
      views: "13.2k",
      date: "Oct 2025",
      href: "/application/job-application-for-teacher",
    },
    {
      key: 8,
      title: "Personal Loan Application",
      description:
        "Bank loan application format with income and collateral details",
      views: "7.8k",
      date: "Nov 2025",
      tag: "New",
      href: "/application/job-application-for-teacher",
    },
    {
      key: 9,
      title: "Transfer Application",
      description:
        "Job or school transfer application with proper justification",
      views: "6.5k",
      date: "Oct 2025",
      href: "/application/job-application-for-teacher",
    },
  ],
  aboutContent:
    "Applications are formal written requests submitted to authorities for specific purposes such as employment, education, financial assistance, or leave. A well-written application follows a structured format including sender details, date, recipient information, subject line, body content, and signature. Our collection includes professionally crafted application templates for various scenarios including job applications, leave requests, admission applications, loan applications, and transfer requests. Each template is designed to meet formal writing standards and can be easily customized with your personal information. Whether you're a student, professional, or business owner, our application templates will help you communicate your requests clearly and professionally.",
  relatedCategories: [
    {
      icon: Mail,
      title: "Letters",
      description: "Formal and informal letter templates",
      count: 67,
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Professional certificate formats",
      count: 42,
    },
    {
      icon: FileUser,
      title: "Resumes",
      description: "Modern resume templates",
      count: 38,
    },
    {
      icon: FileBarChart,
      title: "Reports",
      description: "Project and business reports",
      count: 29,
    },
  ],
  blogs: [
    {
      title: "How to Write a Perfect Job Application",
      excerpt:
        "Step-by-step guide to creating compelling job applications that get noticed by recruiters",
      readTime: "5 min read",
      thumbnail: BookOpen,
    },
    {
      title: "Leave Application Writing Tips",
      excerpt:
        "Best practices for writing professional leave applications for office and school",
      readTime: "4 min read",
      thumbnail: BookOpen,
    },
    {
      title: "Common Application Mistakes to Avoid",
      excerpt:
        "Learn about the most common errors people make when writing formal applications",
      readTime: "6 min read",
      thumbnail: BookOpen,
    },
  ],
  faqs: [
    {
      question: "What is the difference between an application and a letter?",
      answer:
        "An application is a formal request for something specific (like a job, leave, or admission), following a structured format with clear subject lines and formal language. A letter is more general and can be used for various purposes including requests, complaints, invitations, or general communication. Applications are typically more formal and follow stricter formatting guidelines.",
    },
    {
      question: "How long should a job application be?",
      answer:
        "A job application should ideally be one page long, concise and focused on relevant information. It should include your contact details, the employer's details, a clear subject line, 3-4 paragraphs explaining your qualifications and interest, and a professional closing. Keep it between 250-400 words for optimal readability.",
    },
    {
      question:
        "Can I use the same application template for different purposes?",
      answer:
        "While the basic structure remains similar, you should customize each application for its specific purpose. A job application will emphasize your qualifications and experience, while a leave application focuses on the reason for leave and duration. Always tailor the content to match the context and requirements of what you're applying for.",
    },
    {
      question: "Do I need to attach documents with my application?",
      answer:
        "Yes, in most cases you should attach supporting documents. For job applications, include your resume/CV, educational certificates, and experience letters. For leave applications, attach medical certificates if applicable. For admission applications, include mark sheets and previous school records. Always mention the list of enclosures at the end of your application.",
    },
  ],
};

export default function CategoryExample() {
  return (
    <div>
      <ThemeToggle />
      <CategoryPage category={applicationsCategory} />
      <Footer />
    </div>
  );
}
