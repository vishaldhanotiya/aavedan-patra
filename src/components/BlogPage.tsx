import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ChevronRight,
  Home,
  Calendar,
  User,
  Clock,
  Download,
  ThumbsUp,
  ThumbsDown,
  Menu,
  X,
  CheckCircle
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { toast } from "sonner";
import Link from "next/link";

interface BlogPageProps {
  article: {
    title: string;
    subtitle: string;
    breadcrumbs: string[];
    author: string;
    publishedDate: string;
    readTime: string;
    lastUpdated: string;
    coverImage?: string;
    sections: {
      id: string;
      title: string;
      content: React.ReactNode;
    }[];
    relatedTemplateCard?: {
      title: string;
      description: string;
      link: string;
    };
    faqs?: {
      question: string;
      answer: string;
    }[];
  };
  relatedPosts: {
    title: string;
    excerpt: string;
    readTime: string;
    link: string;
  }[];
}

export function BlogPage({ article, relatedPosts }: BlogPageProps) {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = article.sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(article.sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article.sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setTocOpen(false);
    }
  };

  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedback(type);
    toast.success(type === "helpful" ? "Thanks for your feedback! 🎉" : "We'll work on improving this content.");
  };

  const handleNewsletterSubscribe = () => {
    toast.success("Successfully subscribed to our newsletter!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
              <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <Home className="w-4 h-4" />
               <Link href={'/'}>Home</Link>
              </li>
              {article.breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                 
                  <a
                    href="/blog"
                    className={`hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors ${
                      index === article.breadcrumbs.length - 1
                        ? "text-slate-900 dark:text-white font-medium"
                        : ""
                    }`}
                  >
                    <Link href={'/blog'}>{crumb}</Link>  
                  </a>
                  
                </li>
              ))}
            </ol>
          </motion.nav>

          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              {/* Blog Header Section */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-12"
              >
                <h1 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent leading-tight">
                  {article.title}
                </h1>
                <p className="text-xl text-slate-600 dark:text-white/70 mb-6 leading-relaxed">
                  {article.subtitle}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-white/60 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-400 dark:bg-white/40" />
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.publishedDate}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-slate-400 dark:bg-white/40" />
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-500 dark:text-white/50">
                  Last updated: {article.lastUpdated}
                </div>

                {/* Cover Image Placeholder */}
                {article.coverImage && (
                  <div className="mt-8 rounded-[24px] overflow-hidden bg-gradient-to-br from-cyan-100 to-violet-100 dark:from-cyan-900/20 dark:to-violet-900/20 h-64 flex items-center justify-center">
                    <div className="text-slate-400 dark:text-white/40">Cover Image Placeholder</div>
                  </div>
                )}
              </motion.header>

              {/* Mobile TOC Toggle */}
              <div className="lg:hidden mb-6">
                <Button
                  onClick={() => setTocOpen(!tocOpen)}
                  variant="outline"
                  className="w-full border-slate-300 dark:border-white/30 text-slate-700 dark:text-white"
                >
                  {tocOpen ? <X className="w-4 h-4 mr-2" /> : <Menu className="w-4 h-4 mr-2" />}
                  Table of Contents
                </Button>

                {tocOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6"
                  >
                    <nav className="space-y-2">
                      {article.sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                            activeSection === section.id
                              ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400"
                              : "text-slate-600 dark:text-white/60 hover:bg-slate-100 dark:hover:bg-white/10"
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </nav>
                  </motion.div>
                )}
              </div>

              {/* Content Body */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-slate dark:prose-invert max-w-none"
              >
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-8 lg:p-12 mb-8">
                  {article.sections.map((section, index) => (
                    <section key={section.id} id={section.id} className="mb-12 last:mb-0 scroll-mt-24">
                      <h2 className="text-3xl text-slate-900 dark:text-white mb-6">
                        {section.title}
                      </h2>
                      <div className="text-slate-700 dark:text-white/80 leading-relaxed space-y-4">
                        {section.content}
                      </div>

                      {/* Inline Template Card */}
                      {index === 1 && article.relatedTemplateCard && (
                        <div className="mt-8 bg-gradient-to-br from-cyan-50 to-violet-50 dark:from-cyan-950/20 dark:to-violet-950/20 border border-cyan-200 dark:border-cyan-500/30 rounded-[20px] p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                              <Download className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg text-slate-900 dark:text-white mb-2">
                                💡 {article.relatedTemplateCard.title}
                              </h3>
                              <p className="text-slate-700 dark:text-white/70 mb-4">
                                {article.relatedTemplateCard.description}
                              </p>
                              <Button className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white">
                                Download Template
                              </Button>
                            </div>
                          </div>
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              </motion.article>

              {/* FAQ Section */}
              {article.faqs && article.faqs.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-12"
                >
                  <h2 className="text-3xl text-slate-900 dark:text-white mb-6">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {article.faqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] px-6 data-[state=open]:bg-white/90 dark:data-[state=open]:bg-white/10 data-[state=open]:border-cyan-300 dark:data-[state=open]:border-cyan-500/50 transition-all duration-300"
                      >
                        <AccordionTrigger className="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 dark:text-white/70">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.section>
              )}

              {/* Author Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-12"
              >
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg text-slate-900 dark:text-white mb-2">
                        Written by {article.author}
                      </h3>
                      <p className="text-slate-600 dark:text-white/70">
                        Developer and content creator passionate about simplifying formal writing with templates and AI tools.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Feedback Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-12"
              >
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-6 text-center">
                  <h3 className="text-lg text-slate-900 dark:text-white mb-4">
                    Did this article help you?
                  </h3>
                  {feedback ? (
                    <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle className="w-5 h-5" />
                      <span>Thank you for your feedback!</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-4">
                      <Button
                        onClick={() => handleFeedback("helpful")}
                        variant="outline"
                        className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-300 dark:hover:border-green-500/50"
                      >
                        <ThumbsUp className="w-4 h-4 mr-2" />
                        Yes, helpful!
                      </Button>
                      <Button
                        onClick={() => handleFeedback("not-helpful")}
                        variant="outline"
                        className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-500/50"
                      >
                        <ThumbsDown className="w-4 h-4 mr-2" />
                        Needs improvement
                      </Button>
                    </div>
                  )}
                </div>
              </motion.section>

              {/* Related Posts Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl text-slate-900 dark:text-white mb-6">
                  You May Also Like
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((post, index) => (
                    <motion.a
                      key={index}
                      href={post.link}
                      whileHover={{ y: -5 }}
                      className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mb-4">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 dark:text-white/60 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-500 dark:text-white/50 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        <span className="text-cyan-600 dark:text-cyan-400">Read More →</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.section>

              {/* Newsletter Section */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="bg-gradient-to-br from-violet-100 via-pink-50 to-cyan-100 dark:from-violet-600/20 dark:via-pink-600/20 dark:to-cyan-600/20 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-[24px] p-8 text-center">
                  <h3 className="text-2xl text-slate-900 dark:text-white mb-3">
                    Get writing tips and free templates weekly
                  </h3>
                  <p className="text-slate-600 dark:text-white/70 mb-6">
                    Join thousands of professionals improving their writing skills
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-white/50"
                    />
                    <Button
                      onClick={handleNewsletterSubscribe}
                      className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Sidebar - Table of Contents (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4">
              <div className="sticky top-8">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-6"
                >
                  <h3 className="text-lg text-slate-900 dark:text-white mb-4">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {article.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          activeSection === section.id
                            ? "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400"
                            : "text-slate-600 dark:text-white/60 hover:bg-slate-100 dark:hover:bg-white/10"
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </nav>
                </motion.div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
