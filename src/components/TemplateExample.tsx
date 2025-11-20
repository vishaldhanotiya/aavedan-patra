import { TemplateDetailsPage } from "./TemplateDetailsPage";
import { ThemeToggle } from "./ThemeToggle";
import { Toaster } from "./ui/toaster";
import { Footer } from "./Footer";

// Sample template data
const sampleTemplate = {
  title: "Job Application for Teacher",
  subtitle: "A formal job application template suitable for teachers applying to schools or colleges.",
  category: "Applications",
  breadcrumbs: ["Applications", "Job Applications", "Job Application for Teacher"],
  updatedDate: "November 2025",
  author: "Sample Files Team",
  content: {
    senderInfo: [
      "Your Name",
      "Your Address",
      "City, State ZIP Code",
      "Email Address",
      "Phone Number"
    ],
    date: "Date: [Current Date]",
    receiverInfo: [
      "The Principal",
      "[School/College Name]",
      "[School Address]",
      "City, State ZIP Code"
    ],
    subject: "Application for the Position of Teacher",
    body: [
      "Respected Sir/Madam,",
      "I am writing to express my strong interest in the teaching position at your esteemed institution. I recently came across the vacancy advertisement and believe that my educational background and teaching experience make me an ideal candidate for this role.",
      "I hold a [Your Degree] in [Your Subject] from [University Name] and have [X years] of teaching experience in [Subject/Grade Level]. During my tenure at [Previous School Name], I successfully developed engaging lesson plans, implemented innovative teaching methodologies, and contributed to improving student performance by [specific achievement].",
      "My teaching philosophy centers around creating an inclusive and stimulating learning environment where every student can thrive. I am proficient in using modern educational technology and digital tools to enhance the learning experience. I am also committed to continuous professional development and staying updated with the latest pedagogical approaches.",
      "I am particularly drawn to your institution because of its excellent reputation for academic excellence and commitment to holistic student development. I am confident that my passion for teaching, combined with my skills and experience, would enable me to make a meaningful contribution to your school.",
      "I have enclosed my resume, educational certificates, and experience letters for your kind consideration. I would be grateful for the opportunity to discuss my application in detail at your convenience.",
      "Thank you for considering my application. I look forward to hearing from you soon."
    ],
    signature: [
      "Yours sincerely,",
      "[Your Signature]",
      "[Your Name]",
      "",
      "Enclosures:",
      "1. Resume/CV",
      "2. Educational Certificates",
      "3. Experience Letters",
      "4. Reference Letters"
    ]
  }
};

export function TemplateExample() {
  return (
    <div>
      <ThemeToggle />
      <TemplateDetailsPage template={sampleTemplate} />
      <Footer />
      <Toaster />
    </div>
  );
}