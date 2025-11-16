import { CategoryPage } from "./CategoryPage";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import { 
  FileSignature, 
  Home, 
  Briefcase, 
  FileCheck,
  ScrollText,
  Scale,
  Mail,
  Award,
  FileText,
  BookOpen
} from "lucide-react";

const agreementsCategory = {
  name: "Agreement Templates",
  description: "Download ready-to-use agreement formats and legal forms suitable for personal, rental, freelance, and business use.",
  breadcrumbs: ["Agreements & Forms"],
  icon: FileSignature,
  subcategories: [
    {
      icon: Home,
      title: "Rent Agreement",
      description: "Residential and commercial lease formats",
      count: 24
    },
    {
      icon: Briefcase,
      title: "Freelance Contract",
      description: "Service agreements for freelancers",
      count: 18
    },
    {
      icon: FileCheck,
      title: "Affidavit Forms",
      description: "Legal affidavit declaration templates",
      count: 22
    },
    {
      icon: ScrollText,
      title: "Declaration Forms",
      description: "Various declaration statement formats",
      count: 19
    },
    {
      icon: Scale,
      title: "Legal Agreements",
      description: "Business and partnership agreements",
      count: 16
    }
  ],
  templates: [
    {
      title: "Rent Agreement Format",
      description: "Complete rental agreement for house or flat with all legal clauses",
      views: "34.8k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Freelance Service Agreement",
      description: "Professional contract between freelancer and client",
      views: "28.2k",
      date: "Nov 2025",
      tag: "Popular"
    },
    {
      title: "Affidavit for Name Change",
      description: "Legal affidavit format for changing name in official documents",
      views: "25.6k",
      date: "Oct 2025",
    },
    {
      title: "Self Declaration Form",
      description: "General self-declaration format for various purposes",
      views: "22.9k",
      date: "Nov 2025",
    },
    {
      title: "Non-Disclosure Agreement (NDA)",
      description: "Confidentiality agreement for business information protection",
      views: "19.4k",
      date: "Nov 2025",
      tag: "New"
    },
    {
      title: "Partnership Agreement",
      description: "Business partnership deed with profit sharing terms",
      views: "21.7k",
      date: "Oct 2025",
    },
    {
      title: "Loan Agreement Format",
      description: "Personal loan agreement between lender and borrower",
      views: "23.3k",
      date: "Nov 2025",
    },
    {
      title: "Work From Home Agreement",
      description: "Remote work policy agreement for employees",
      views: "18.5k",
      date: "Oct 2025",
    },
    {
      title: "Affidavit of Residence",
      description: "Address proof affidavit for legal purposes",
      views: "20.1k",
      date: "Nov 2025",
    }
  ],
  aboutContent: "Agreements and legal forms are formal documents that establish terms, conditions, and obligations between parties. They provide legal protection and clarity for various personal, professional, and business transactions. Our comprehensive collection includes rent agreements for property leasing with landlord-tenant terms, freelance contracts for service providers defining scope of work and payment, affidavit forms for legal declarations under oath, declaration forms for making formal statements, and various business agreements including NDAs, partnerships, and employment contracts. Each template is drafted with standard legal language and includes essential clauses for protection of all parties involved. While our templates provide a solid foundation, we recommend having important agreements reviewed by a legal professional before execution. Understanding and using proper legal documentation helps prevent disputes, ensures clarity of expectations, and provides enforceable protection in case of disagreements. Whether you're renting property, hiring freelancers, starting a business, or making legal declarations, our agreement templates help you create professional, legally sound documents.",
  relatedCategories: [
    {
      icon: FileText,
      title: "Applications",
      description: "Formal application templates",
      count: 67
    },
    {
      icon: Mail,
      title: "Letters",
      description: "Business letter formats",
      count: 58
    },
    {
      icon: Award,
      title: "Certificates",
      description: "Official certificate templates",
      count: 42
    },
    {
      icon: Briefcase,
      title: "Notices",
      description: "Legal notice formats",
      count: 29
    }
  ],
  blogs: [
    {
      title: "Understanding Rent Agreements in India",
      excerpt: "Complete guide to rental agreements, clauses, registration, and tenant-landlord rights",
      readTime: "8 min read",
      thumbnail: BookOpen
    },
    {
      title: "Freelance Contract Essentials",
      excerpt: "What every freelancer should include in their service agreements and contracts",
      readTime: "6 min read",
      thumbnail: BookOpen
    },
    {
      title: "How to Write an Affidavit",
      excerpt: "Step-by-step guide to drafting affidavits for legal purposes with proper format",
      readTime: "5 min read",
      thumbnail: BookOpen
    }
  ],
  faqs: [
    {
      question: "Is a rent agreement mandatory in India?",
      answer: "While not legally mandatory for all rental arrangements, a written rent agreement is highly recommended and required for agreements exceeding 11 months or for registration purposes. Registered rent agreements (mandatory for leases over 11 months) provide legal protection to both landlord and tenant, serve as address proof, and are enforceable in court. Even for shorter durations, a written agreement prevents disputes and clarifies terms. Many landlords now require police verification which needs a rent agreement."
    },
    {
      question: "What is the difference between an agreement and a contract?",
      answer: "An agreement is a mutual understanding between parties about their rights and obligations. A contract is a legally enforceable agreement - it includes all elements of an agreement plus legal enforceability. For a contract to be valid, it must have: offer, acceptance, consideration (exchange of value), legal purpose, competent parties, and mutual consent. All contracts are agreements, but not all agreements are legally binding contracts. Written contracts are easier to enforce than verbal agreements."
    },
    {
      question: "Do I need to notarize my agreement?",
      answer: "Notarization requirements vary by document type and jurisdiction. Affidavits always require notarization by a notary public or judicial magistrate. Rent agreements under 11 months don't require registration but should be notarized for authenticity. Agreements over 11 months must be registered with the sub-registrar. Business contracts don't always need notarization but it adds credibility and makes them harder to dispute. Consult local laws or a lawyer for specific requirements in your area."
    },
    {
      question: "Can I use a template agreement without a lawyer?",
      answer: "You can use template agreements for simple, straightforward arrangements, but they should be customized to your specific situation. Templates provide a good starting point and ensure you don't miss important clauses. However, for complex agreements, high-value transactions, or situations involving significant legal implications (property purchases, business partnerships, employment contracts), it's advisable to have a lawyer review or draft the agreement. Legal consultation ensures compliance with local laws and protects your interests."
    }
  ]
};

export function AgreementsCategory() {
  return (
    <div>
      <ThemeToggle />
      <CategoryPage category={agreementsCategory} />
      <Footer />
    </div>
  );
}
