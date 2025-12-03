import { useState } from "react";
import { motion } from "motion/react";
import { Search, Calendar, Clock, BookOpen, TrendingUp, Home, ChevronRight } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ThemeToggle } from "./ThemeToggle";
import { Footer } from "./Footer";
import Link from "next/link";
import { Language } from "./Hero";

const categories = [
  "All",
  "Applications",
  "Letters",
  "Certificates",
  "Resumes",
  "Emails",
  "Notices",
  "Essays",
  "Agreements"
];

const blogPosts = [
  {
    title: "How to Write a Job Application (Step-by-Step Guide)",
    excerpt: "Learn how to structure and write a professional job application with format examples and expert tips.",
    category: "Applications",
    date: "Nov 14, 2025",
    readTime: "5 min read",
    thumbnail: BookOpen,
    featured: true
  },
  {
    title: "Professional Resignation Letter Format",
    excerpt: "Complete guide to writing respectful resignation letters with notice period and samples.",
    category: "Letters",
    date: "Nov 13, 2025",
    readTime: "6 min read",
    thumbnail: BookOpen,
    featured: true
  },
  {
    title: "Resume Writing Guide for 2025",
    excerpt: "Create a standout resume with modern formats, ATS optimization, and design tips.",
    category: "Resumes",
    date: "Nov 12, 2025",
    readTime: "8 min read",
    thumbnail: BookOpen,
    featured: false
  },
  {
    title: "Understanding Experience Certificates",
    excerpt: "Everything you need to know about requesting and obtaining work experience certificates.",
    category: "Certificates",
    date: "Nov 11, 2025",
    readTime: "5 min read",
    thumbnail: BookOpen,
    featured: false
  },
  {
    title: "Email Etiquette: Professional Communication Tips",
    excerpt: "Master the art of professional email writing with dos and don'ts for workplace communication.",
    category: "Emails",
    date: "Nov 10, 2025",
    readTime: "5 min read",
    thumbnail: BookOpen,
    featured: false
  },
  {
    title: "How to Write Effective Office Notices",
    excerpt: "Best practices for creating clear, professional workplace notices that get attention.",
    category: "Notices",
    date: "Nov 9, 2025",
    readTime: "5 min read",
    thumbnail: BookOpen,
    featured: false
  },
  {
    title: "Essay Writing Tips for Students",
    excerpt: "Complete guide to essay structure, planning, and writing techniques for academic success.",
    category: "Essays",
    date: "Nov 8, 2025",
    readTime: "7 min read",
    thumbnail: BookOpen,
    featured: false
  },
  {
    title: "Understanding Rent Agreements in India",
    excerpt: "Complete guide to rental agreements, clauses, registration, and tenant-landlord rights.",
    category: "Agreements",
    date: "Nov 7, 2025",
    readTime: "8 min read",
    thumbnail: BookOpen,
    featured: false
  },
  {
    title: "Leave Application Writing Guide",
    excerpt: "Learn the proper format and etiquette for requesting leave from workplace or school.",
    category: "Applications",
    date: "Nov 6, 2025",
    readTime: "4 min read",
    thumbnail: BookOpen,
    featured: false
  },
  {
    title: "Character Certificate: When and How to Get One",
    excerpt: "Learn about character certificates, their importance, and the application process.",
    category: "Certificates",
    date: "Nov 5, 2025",
    readTime: "6 min read",
    thumbnail: BookOpen,
    featured: false
  },
  {
    title: "10 Tips to Write Professional Letters",
    excerpt: "Master formal letter writing with these essential tips and best practices.",
    category: "Letters",
    date: "Nov 4, 2025",
    readTime: "4 min read",
    thumbnail: BookOpen,
    featured: false
  },
  {
    title: "Project Report Writing Guide",
    excerpt: "Complete guide to structuring and writing comprehensive project reports for school and business.",
    category: "Notices",
    date: "Nov 3, 2025",
    readTime: "8 min read",
    thumbnail: BookOpen,
    featured: false
  }
];

const popularReads = [
  "How to write a job application",
  "Format of a resignation letter",
  "Difference between CV & Resume",
  "Writing professional emails",
  "Leave application for office"
];

const topics = [
  "Job Forms",
  "School Writing",
  "Business Writing",
  "Legal Documents",
  "Academic Essays"
];

const tags = [
  "job", "resume", "leave", "office", "student", "holiday", 
  "report", "pdf", "word", "email", "letter", "certificate"
];

export function BlogListing({language='hi'}:{language:Language}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visiblePosts, setVisiblePosts] = useState(9);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950">
      <ThemeToggle />
      
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
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
            <li className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4" />
              <span className="text-slate-900 dark:text-white font-medium">Blog</span>
            </li>
          </ol>
        </motion.nav>

        {/* Header / Hero Area */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl mb-4 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
            Blog & Writing Guides
          </h1>
          <p className="text-lg text-slate-600 dark:text-white/70 max-w-3xl mx-auto mb-8">
            Explore helpful tutorials, writing tips, formatting guides, and expert advice for applications, letters, resumes, reports, certificates, and more.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 dark:text-white/40" />
              <Input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white text-lg rounded-full"
              />
            </div>
          </div>

          {/* Topic Suggestions */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-sm text-slate-500 dark:text-white/50">Popular topics:</span>
            {["Job", "Leave", "Resume", "Certificate"].map((topic, index) => (
              <Badge
                key={index}
                variant="outline"
                className="cursor-pointer border-slate-300 dark:border-white/30 text-slate-700 dark:text-white/70 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 hover:border-cyan-300 dark:hover:border-cyan-500/50"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </motion.header>

        {/* Category Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg"
                    : "bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:border-cyan-300 dark:hover:border-cyan-500/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content - Blog Cards */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {filteredPosts.slice(0, visiblePosts).map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className={`group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] overflow-hidden hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 ${
                    post.featured ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Thumbnail */}
                  <div className={`relative bg-gradient-to-br from-cyan-500/30 via-violet-500/30 to-pink-500/30 flex items-center justify-center overflow-hidden ${
                    post.featured ? 'h-64' : 'h-48'
                  }`}>
                    <post.thumbnail className="w-16 h-16 text-white/40 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-gradient-to-r from-cyan-500 to-violet-600 text-white border-0">
                        {post.category}
                      </Badge>
                      {post.featured && (
                        <Badge className="bg-gradient-to-r from-orange-500 to-rose-500 text-white border-0">
                          Featured
                        </Badge>
                      )}
                    </div>

                    <h2 className={`text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2 ${
                      post.featured ? 'text-2xl' : 'text-lg'
                    }`}>
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-600 dark:text-white/60 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-white/50">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="text-cyan-600 dark:text-cyan-400">Read More →</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < filteredPosts.length && (
              <div className="text-center">
                <Button
                  onClick={loadMore}
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white"
                >
                  Load More Posts
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-8 space-y-6">
              {/* Popular Reads */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  <h3 className="text-lg text-slate-900 dark:text-white">Popular Reads</h3>
                </div>
                <ul className="space-y-3">
                  {popularReads.map((read, index) => (
                    <li key={index}>
                      <a href="#" className="text-slate-600 dark:text-white/70 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                        → {read}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Browse by Topic */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-6"
              >
                <h3 className="text-lg text-slate-900 dark:text-white mb-4">Browse by Topic</h3>
                <ul className="space-y-3">
                  {topics.map((topic, index) => (
                    <li key={index}>
                      <a href="#" className="text-slate-600 dark:text-white/70 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                        • {topic}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Tags Cloud */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-6"
              >
                <h3 className="text-lg text-slate-900 dark:text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer border-slate-300 dark:border-white/30 text-slate-700 dark:text-white/70 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:border-violet-300 dark:hover:border-violet-500/50"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </div>
          </aside>
        </div>

        {/* SEO Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-8"
        >
          <h2 className="text-2xl text-slate-900 dark:text-white mb-4">Why Our Blog Helps</h2>
          <p className="text-slate-700 dark:text-white/70 leading-relaxed">
            Our writing guides and templates help you master professional communication in all formats. Whether you're learning how to write a job application, crafting the perfect resignation letter, creating a standout resume, or understanding formal document formats, our comprehensive tutorials provide step-by-step guidance. We cover everything from basic letter writing to advanced business communication, offering practical tips, real-world examples, and downloadable samples. Students, professionals, and job seekers trust our guides to improve their writing skills and create polished, professional documents that make the right impression.
          </p>
        </motion.section>

        {/* Newsletter Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-br from-violet-100 via-pink-50 to-cyan-100 dark:from-violet-600/20 dark:via-pink-600/20 dark:to-cyan-600/20 backdrop-blur-xl border border-slate-200 dark:border-white/20 rounded-[24px] p-8 text-center">
            <h3 className="text-2xl text-slate-900 dark:text-white mb-3">
              Get New Writing Tips in Your Inbox
            </h3>
            <p className="text-slate-600 dark:text-white/70 mb-6">
              Subscribe to receive weekly writing tips, new templates, and expert advice
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white"
              />
              <Button className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
}
