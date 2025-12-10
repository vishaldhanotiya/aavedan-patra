"use client"
import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronRight,
  Home,
  Sparkles,
  Calendar,
  Eye,
  ArrowRight,
  SlidersHorizontal,
  Search,
  FileText,
  BookOpen,
} from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface CategoryPageProps {
  category: {
    name: string;
    description: string;
    breadcrumbs: string[];
    icon: React.ElementType;
    subcategories: {
      icon: React.ElementType;
      title: string;
      description: string;
      count: number;
      href?: string;
    }[];
    templates: {
      title: string;
      description: string;
      views: string;
      date: string;
      tag?: string;
      href?: string;
    }[];
    aboutContent: string;
    relatedCategories: {
      icon: React.ElementType;
      title: string;
      description: string;
      count: number;
    }[];
    blogs: {
      title: string;
      excerpt: string;
      readTime: string;
      thumbnail: React.ElementType;
    }[];
    faqs: {
      question: string;
      answer: string;
    }[];
  };
}

export function CategoryPage({ category }: CategoryPageProps) {
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const {language}=useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950">
      <div className="container mx-auto px-4 py-12">
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
            {category.breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <a
                  href="#"
                  className={`hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors ${
                    index === category.breadcrumbs.length - 1
                      ? "text-slate-900 dark:text-white font-medium"
                      : ""
                  }`}
                >
                  {crumb}
                </a>
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Header Section */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
                  {category.name}
                </h1>
              </div>
              <p className="text-lg text-slate-600 dark:text-white/70 max-w-3xl">
                {category.description}
              </p>
            </div>
            {/* <Button className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/30 hidden md:flex">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate with AI
            </Button> */}
          </div>
        </motion.header>

        {/* Subcategory Cards */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl text-slate-900 dark:text-white mb-6">
            Browse by Type
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.subcategories.map((sub, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <sub.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-slate-900 dark:text-white mb-2">
                  {sub.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-white/60 mb-3">
                  {sub.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-white/50">
                    {sub.count} templates
                  </span>
                  <Link href={sub.href ?? "/"}>
                    <ArrowRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Search and Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-white/40" />
                <Input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white"
                />
              </div>
              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px] bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="a-z">A-Z</SelectItem>
                    <SelectItem value="z-a">Z-A</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-slate-600 dark:text-white/60 mb-2 block">
                      Type
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20">
                        <SelectValue placeholder="All Types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="formal">Formal</SelectItem>
                        <SelectItem value="casual">Casual</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600 dark:text-white/60 mb-2 block">
                      Format
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20">
                        <SelectValue placeholder="All Formats" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Formats</SelectItem>
                        <SelectItem value="docx">DOCX</SelectItem>
                        <SelectItem value="pdf">PDF</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600 dark:text-white/60 mb-2 block">
                      Language
                    </label>
                    <Select>
                      <SelectTrigger className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20">
                        <SelectValue placeholder="All Languages" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Languages</SelectItem>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="hi">Hindi</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Template Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl text-slate-900 dark:text-white">
              All Templates
            </h2>
            <span className="text-sm text-slate-600 dark:text-white/60">
              {category.templates.length} results
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300"
              >
                {template.tag && (
                  <Badge className="mb-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0">
                    {template.tag}
                  </Badge>
                )}
                <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {template.title}
                </h3>
                <p className="text-slate-600 dark:text-white/60 mb-4 line-clamp-2">
                  {template.description}
                </p>

                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-white/50 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {template.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {template.date}
                    </span>
                  </div>
                </div>
                <Link href={template.href || ""}>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white">
                    View Template
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-8">
            <h2 className="text-2xl text-slate-900 dark:text-white mb-4">
              About {category.name}
            </h2>
            <p className="text-slate-700 dark:text-white/70 leading-relaxed">
              {category.aboutContent}
            </p>
          </div>
        </motion.section>

        {/* Related Categories */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl text-slate-900 dark:text-white mb-6">
            Related Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.relatedCategories.map((related, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-violet-300 dark:hover:border-violet-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-pink-600 flex items-center justify-center mb-4">
                  <related.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {related.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-white/60 mb-3">
                  {related.description}
                </p>
                <span className="text-xs text-slate-500 dark:text-white/50">
                  {related.count} templates
                </span>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl text-slate-900 dark:text-white mb-6">
            Related Articles & Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {category.blogs.map((blog, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ y: -8 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] overflow-hidden hover:border-pink-300 dark:hover:border-pink-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-pink-500/30 via-violet-500/30 to-cyan-500/30 flex items-center justify-center">
                  <blog.thumbnail className="w-12 h-12 text-white/40" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 dark:text-white/60 mb-4 line-clamp-2">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 dark:text-white/50">
                      {blog.readTime}
                    </span>
                    <span className="text-pink-600 dark:text-pink-400">
                      Read More →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl text-slate-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {category.faqs.map((faq, index) => (
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
      </div>
    </div>
  );
}
