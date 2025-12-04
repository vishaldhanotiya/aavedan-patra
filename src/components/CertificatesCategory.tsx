import { CategoryPage } from "./CategoryPage";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Trophy,
  Heart,
  ShieldCheck,
  Mail,
  FileText,
  BookOpen,
  FileUser
} from "lucide-react";

const certificatesCategory = {
  name: "Certificate Templates",
  description: "Download ready-made certificate samples for school, office, and personal use — including experience, character, bonafide, internship, and appreciation certificates.",
  breadcrumbs: ["Certificates"],
  icon: Award,
  subcategories: [
    {
      icon: Briefcase,
      title: "Experience Certificates",
      description: "Employment experience certificate formats",
      count: 28
    },
    {
      icon: GraduationCap,
      title: "Bonafide Certificates",
      description: "Student bonafide certificate templates",
      count: 22
    },
    {
      icon: Briefcase,
      title: "Internship Certificates",
      description: "Internship completion certificate formats",
      count: 19
    },
    {
      icon: Trophy,
      title: "Participation Certificates",
      description: "Event participation certificate templates",
      count: 25
    },
    {
      icon: Heart,
      title: "Appreciation Certificates",
      description: "Recognition and appreciation formats",
      count: 21
    },
    {
      icon: ShieldCheck,
      title: "Character Certificates",
      description: "Character and conduct certificate templates",
      count: 16
    }
  ],
  templates: [
    {
      title: "Experience Certificate for Employee",
      description: "Professional work experience certificate with job details and tenure",
      views: "22.3k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Bonafide Certificate for Student",
      description: "School/college bonafide certificate confirming student enrollment",
      views: "19.8k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Internship Completion Certificate",
      description: "Certificate confirming successful completion of internship program",
      views: "17.5k",
      date: "Nov 2025",
    },
    {
      title: "Character Certificate from School",
      description: "Student character and conduct certificate from principal",
      views: "15.2k",
      date: "Oct 2025",
    },
    {
      title: "Appreciation Certificate for Employee",
      description: "Recognition certificate for outstanding work performance",
      views: "13.9k",
      date: "Nov 2025",
    },
    {
      title: "Course Completion Certificate",
      description: "Certificate for completing training or educational course",
      views: "16.4k",
      date: "Oct 2025",
      tag: "New"
    },
    {
      title: "Participation Certificate for Event",
      description: "Certificate acknowledging participation in competition or event",
      views: "14.7k",
      date: "Nov 2025",
    },
    {
      title: "No Objection Certificate (NOC)",
      description: "Official NOC for various purposes from organization",
      views: "12.1k",
      date: "Oct 2025",
    },
    {
      title: "Medical Fitness Certificate",
      description: "Health and medical fitness certificate from doctor",
      views: "11.3k",
      date: "Nov 2025",
    }
  ],
  aboutContent: "Certificates are official documents issued by authorized persons or institutions to verify facts, recognize achievements, or confirm completion of requirements. They serve as proof of employment, education, character, participation, or appreciation. Our collection includes experience certificates for documenting work history, bonafide certificates for confirming student status, internship certificates for validating practical training, character certificates for attesting to good conduct, appreciation certificates for recognizing contributions, and participation certificates for acknowledging event involvement. Each certificate template follows professional formatting standards with proper headers, official language, and signature sections. Whether you need a certificate for job applications, educational purposes, visa applications, or recognition ceremonies, our templates provide the official structure and credibility required for formal documentation.",
  relatedCategories: [
    {
      icon: FileText,
      title: "Applications",
      description: "Job and admission application formats",
      count: 67
    },
    {
      icon: Mail,
      title: "Letters",
      description: "Professional letter templates",
      count: 58
    },
    {
      icon: FileUser,
      title: "Resumes",
      description: "CV and resume formats",
      count: 38
    },
    {
      icon: BookOpen,
      title: "Reports",
      description: "Business and project reports",
      count: 29
    }
  ],
  blogs: [
    {
      title: "How to Request an Experience Certificate",
      excerpt: "Complete guide on requesting and obtaining work experience certificates from employers",
      readTime: "5 min read",
      thumbnail: BookOpen
    },
    {
      title: "Understanding Bonafide Certificates",
      excerpt: "Everything you need to know about bonafide certificates, their uses and requirements",
      readTime: "4 min read",
      thumbnail: BookOpen
    },
    {
      title: "Character Certificate: When and How to Get One",
      excerpt: "Learn about character certificates, their importance, and the application process",
      readTime: "6 min read",
      thumbnail: BookOpen
    }
  ],
  faqs: [
    {
      question: "What is an experience certificate and why is it important?",
      answer: "An experience certificate is an official document issued by an employer confirming an employee's work tenure, job role, and sometimes performance. It's crucial for job applications as it serves as proof of your work history and professional experience. Most companies require experience certificates from all previous employers when hiring. The certificate should include: employee name, designation, employment period, job responsibilities, and company letterhead with authorized signature."
    },
    {
      question: "What is the difference between a bonafide certificate and a transfer certificate?",
      answer: "A bonafide certificate confirms that a student is currently enrolled and studying at an institution, often needed for travel concessions, bank accounts, or visa applications. A transfer certificate (TC) is issued when a student leaves an institution, confirming they have completed their studies or are transferring to another school. The bonafide is for current students, while TC is for those who have left or completed their education."
    },
    {
      question: "Can I create my own certificate or does it need official authorization?",
      answer: "Certificates must be issued by authorized persons or institutions - you cannot create official certificates for yourself. Experience certificates must come from your employer (HR or manager), educational certificates from your school/college principal or registrar, and medical certificates from licensed doctors. However, you can request a certificate using our templates and the authorized person will issue it on official letterhead. Self-created certificates have no legal validity."
    },
    {
      question: "How long does it take to get a certificate from an organization?",
      answer: "The timeline varies by organization and certificate type. Experience certificates typically take 7-15 working days after submitting a written request to HR. Educational certificates (bonafide, character) usually take 3-7 days from school/college offices. Internship certificates are often provided on the last day or within a week of completion. For faster processing, submit a formal written request well in advance and follow up politely if there are delays."
    }
  ]
};

export function CertificatesCategory() {
  return (
    <div>
      <CategoryPage category={certificatesCategory} />
      <Footer />
    </div>
  );
}
