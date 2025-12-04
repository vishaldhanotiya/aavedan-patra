import { useState } from "react";
import { motion } from "motion/react";
import { 
  ChevronRight, 
  Copy, 
  Download, 
  Share2, 
  Printer, 
  Check,
  Calendar,
  User,
  FolderOpen,
  Home,
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import Link from "next/link";

interface TemplateDetailsPageProps {
  template: {
    title: string;
    subtitle: string;
    category: string;
    breadcrumbs: string[];
    updatedDate: string;
    author: string;
    content: {
      senderInfo?: string[];
      date?: string;
      receiverInfo?: string[];
      subject?: string;
      body: string[];
      signature?: string[];
    };
  };
  language?:'hi' | 'en'
}

const relatedTemplates = [
  { title: "Leave Application for Teacher", category: "Applications" },
  { title: "Resignation Letter for Teacher", category: "Letters" },
  { title: "Experience Certificate for Teacher", category: "Certificates" },
  { title: "School Teacher Resume", category: "Resumes" }
];

export function TemplateDetailsPage({ template, language='hi' }: TemplateDetailsPageProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const fullText = [
      ...(template.content.senderInfo || []),
      template.content.date || '',
      ...(template.content.receiverInfo || []),
      template.content.subject || '',
      ...template.content.body,
      ...(template.content.signature || [])
    ].join('\n\n');

    navigator.clipboard.writeText(fullText);
    setCopied(true);
    toast.success("Template copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    toast.success("PDF download started!");
    // Placeholder for PDF download functionality
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: template.title,
        text: template.subtitle,
        url: window.location.href
      });
    } else {
      toast.success("Link copied to clipboard!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
            <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Home className="w-4 h-4" />
              <Link href={"/"}> {language === "en" ? "Home" : "होम"}</Link>
            </li>
            {template.breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
               
                 <Link href={'/applications'}> <div 
                  className={`hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors ${
                    index === template.breadcrumbs.length - 1 
                      ? 'text-slate-900 dark:text-white font-medium' 
                      : ''
                  }`}
                > {crumb}    </div> </Link>
            
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Title & Meta Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
            {template.title}
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/70 mb-6">
            {template.subtitle}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-white/60">
            <div className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              <span>Category: <span className="text-slate-900 dark:text-white font-medium">{template.category}</span></span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-400 dark:bg-white/40" />
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Updated: {template.updatedDate}</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-slate-400 dark:bg-white/40" />
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Author: {template.author}</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleCopy}
              className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/30"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Text
                </>
              )}
            </Button>

            <Button
              onClick={handleDownload}
              variant="outline"
              className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>

            <Button
              onClick={handleShare}
              variant="outline"
              className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>

            <Button
              onClick={handlePrint}
              variant="outline"
              className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
            >
              <Printer className="w-4 h-4 mr-2" />
              Print
            </Button>
          </div>
        </motion.div>

        {/* Template Preview Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-8 lg:p-12 shadow-2xl mb-8 print:shadow-none print:border-slate-300"
        >
          <div className="template-content space-y-6 text-slate-900 dark:text-white/90">
            {/* Sender Info */}
            {template.content.senderInfo && (
              <div className="space-y-1">
                {template.content.senderInfo.map((line, index) => (
                  <p key={index} className="text-slate-700 dark:text-white/80">
                    {line}
                  </p>
                ))}
              </div>
            )}

            {/* Date */}
            {template.content.date && (
              <div>
                <p className="text-slate-700 dark:text-white/80">{template.content.date}</p>
              </div>
            )}

            {/* Receiver Info */}
            {template.content.receiverInfo && (
              <div className="space-y-1">
                {template.content.receiverInfo.map((line, index) => (
                  <p key={index} className="text-slate-700 dark:text-white/80">
                    {line}
                  </p>
                ))}
              </div>
            )}

            {/* Subject */}
            {template.content.subject && (
              <div>
                <p className="text-slate-900 dark:text-white">
                  <strong>Subject:</strong> {template.content.subject}
                </p>
              </div>
            )}

            {/* Body */}
            <div className="space-y-4 leading-relaxed">
              {template.content.body.map((paragraph, index) => (
                <p key={index} className="text-slate-700 dark:text-white/80">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Signature */}
            {template.content.signature && (
              <div className="space-y-1 mt-8">
                {template.content.signature.map((line, index) => (
                  <p key={index} className="text-slate-700 dark:text-white/80">
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-cyan-50 to-violet-50 dark:from-cyan-950/20 dark:to-violet-950/20 border border-cyan-200 dark:border-cyan-500/30 rounded-[20px] p-6 mb-8"
        >
          <h3 className="text-lg text-slate-900 dark:text-white mb-3">💡 Tips for Using This Template</h3>
          <ul className="space-y-2 text-slate-700 dark:text-white/70">
            <li>• Replace placeholder text with your actual information</li>
            <li>• Ensure all dates are current and formatted correctly</li>
            <li>• Proofread carefully before sending or submitting</li>
            <li>• Customize the content to match your specific situation</li>
            <li>• Keep the tone professional and concise</li>
          </ul>
        </motion.div>

        {/* Related Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-2xl mb-6 text-slate-900 dark:text-white">Related Templates</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {relatedTemplates.map((related, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.02, x: 5 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[16px] p-5 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-slate-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {related.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-white/60">{related.category}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 dark:text-white/40 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}