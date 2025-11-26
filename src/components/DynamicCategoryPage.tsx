"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronRight,
  Home,
  Sparkles,
  Calendar,
  Eye,
  ArrowRight,
  SlidersHorizontal,
  Search,
  Languages,
  X,
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
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import type { CategoryData } from "../data/categoryData";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface DynamicCategoryPageProps {
  category: CategoryData;
}

export function DynamicCategoryPage({ category }: DynamicCategoryPageProps) {
  const { lang } = useLanguage();
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [language, setLanguage] = useState<"en" | "hi">(lang);
  const [selectedFormat, setSelectedFormat] = useState<string>("all");
  const [selectedDocLanguage, setSelectedDocLanguage] = useState<string>("all");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Helper function to get text in current language
  const getText = (content: { en: string; hi: string }) => {
    return content[language];
  };

  // Filter and sort templates
  const filteredTemplates = category.templates.filter((template) => {
    const title = getText(template.title).toLowerCase();
    const description = getText(template.description).toLowerCase();
    const query = searchQuery.toLowerCase();
    return title.includes(query) || description.includes(query);
  });

  // Sort templates
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return (
          parseFloat(b.views.replace("k", "")) -
          parseFloat(a.views.replace("k", ""))
        );
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "a-z":
        return getText(a.title).localeCompare(getText(b.title));
      case "z-a":
        return getText(b.title).localeCompare(getText(a.title));
      default:
        return 0;
    }
  });

  // Get dynamic type filters based on category
  const getTypeFilters = () => {
    return category.subcategories.slice(0, 4).map((sub) => getText(sub.title));
  };

  const typeFilters = getTypeFilters();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950">
      <div className="container mx-auto px-4 py-12">
        {/* Language Toggle - Top Right */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end mb-4"
        >
          <div className="flex items-center gap-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-full px-4 py-2 shadow-lg shadow-cyan-500/10">
            <Languages className="w-4 h-4 text-slate-600 dark:text-white/60" />
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                language === "en"
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg"
                  : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("hi")}
              className={`px-3 py-1 rounded-full text-sm transition-all ${
                language === "hi"
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg"
                  : "text-slate-600 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              हिंदी
            </button>
          </div>
        </motion.div>

        {/* Breadcrumb Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <ol className="flex items-center gap-2 text-sm text-slate-600 dark:text-white/60">
            <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              <Home className="w-4 h-4" />
              <Link href={"/"}> {language === "en" ? "Home" : "होम"}</Link>
            </li>
            {category.breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <a
                  href={`/${category.slug}`}
                  className={`hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors ${
                    index === category.breadcrumbs.length - 1
                      ? "text-slate-900 dark:text-white"
                      : ""
                  }`}
                >
                  {getText(crumb)}
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
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
                    {getText(category.name)}
                  </h1>
                  <p className="text-sm text-slate-500 dark:text-white/50 mt-1">
                    {category.templates.length}{" "}
                    {language === "en"
                      ? "templates available"
                      : "टेम्पलेट उपलब्ध"}
                  </p>
                </div>
              </div>
              <p className="text-lg text-slate-600 dark:text-white/70 max-w-3xl">
                {getText(category.description)}
              </p>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/30">
              <Sparkles className="w-4 h-4 mr-2" />
              {language === "en" ? "Generate with AI" : "AI से बनाएं"}
            </Button>
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
            {language === "en"
              ? "Browse by Type"
              : "प्रकार के अनुसार ब्राउज़ करें"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.subcategories.map((sub, index) => (
              <motion.a
                key={index}
                href={`/${category.slug}/${sub.slug}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20">
                  <sub.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {getText(sub.title)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-white/60 mb-3 line-clamp-2">
                  {getText(sub.description)}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-white/50">
                    {sub.count} {language === "en" ? "templates" : "टेम्पलेट"}
                  </span>
                  {/* <Link href={'/letters/formal'}> */}
                  <ArrowRight className="w-4 h-4 text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  {/* </Link> */}
                </div>
              </motion.a>
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
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-4 shadow-lg shadow-cyan-500/10">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-white/40" />
                <Input
                  type="text"
                  placeholder={
                    language === "en"
                      ? "Search templates..."
                      : "टेम्पलेट खोजें..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-white/40 hover:text-slate-600 dark:hover:text-white/60"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px] bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white">
                    <SelectValue
                      placeholder={
                        language === "en" ? "Sort by" : "क्रमबद्ध करें"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">
                      {language === "en" ? "Popular" : "लोकप्रिय"}
                    </SelectItem>
                    <SelectItem value="newest">
                      {language === "en" ? "Newest" : "नवीनतम"}
                    </SelectItem>
                    <SelectItem value="a-z">A-Z</SelectItem>
                    <SelectItem value="z-a">Z-A</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className={`border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-white/50 dark:hover:bg-white/10 ${
                    showFilters ? "bg-white/70 dark:bg-white/10" : ""
                  }`}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  {language === "en" ? "Filters" : "फ़िल्टर"}
                </Button>
              </div>
            </div>

            {/* Advanced Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Format Filter */}
                    <div>
                      <label className="text-sm text-slate-600 dark:text-white/60 mb-3 block">
                        {language === "en" ? "Format" : "प्रारूप"}
                      </label>
                      <Select
                        value={selectedFormat}
                        onValueChange={setSelectedFormat}
                      >
                        <SelectTrigger className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">
                            {language === "en" ? "All Formats" : "सभी प्रारूप"}
                          </SelectItem>
                          <SelectItem value="docx">DOCX</SelectItem>
                          <SelectItem value="pdf">PDF</SelectItem>
                          <SelectItem value="txt">TXT</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Document Language Filter */}
                    <div>
                      <label className="text-sm text-slate-600 dark:text-white/60 mb-3 block">
                        {language === "en"
                          ? "Document Language"
                          : "दस्तावेज़ भाषा"}
                      </label>
                      <Select
                        value={selectedDocLanguage}
                        onValueChange={setSelectedDocLanguage}
                      >
                        <SelectTrigger className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">
                            {language === "en" ? "All Languages" : "सभी भाषाएं"}
                          </SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="hi">हिंदी</SelectItem>
                          <SelectItem value="both">
                            {language === "en" ? "Both" : "दोनों"}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Dynamic Type Filter */}
                    <div>
                      <label className="text-sm text-slate-600 dark:text-white/60 mb-3 block">
                        {language === "en" ? "Type" : "प्रकार"}
                      </label>
                      <div className="space-y-2 max-h-32 overflow-y-auto custom-scrollbar">
                        {typeFilters.map((type, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id={`type-${index}`}
                              checked={selectedTypes.includes(type)}
                              onCheckedChange={(checked) => {
                                if (checked) {
                                  setSelectedTypes([...selectedTypes, type]);
                                } else {
                                  setSelectedTypes(
                                    selectedTypes.filter((t) => t !== type)
                                  );
                                }
                              }}
                            />
                            <Label
                              htmlFor={`type-${index}`}
                              className="text-sm text-slate-700 dark:text-white/70 cursor-pointer"
                            >
                              {type}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {(selectedFormat !== "all" ||
                    selectedDocLanguage !== "all" ||
                    selectedTypes.length > 0) && (
                    <div className="mt-4 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedFormat("all");
                          setSelectedDocLanguage("all");
                          setSelectedTypes([]);
                        }}
                        className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
                      >
                        {language === "en"
                          ? "Clear All Filters"
                          : "सभी फ़िल्टर साफ़ करें"}
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
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
              {language === "en" ? "All Templates" : "सभी टेम्पलेट"}
            </h2>
            <span className="text-sm text-slate-600 dark:text-white/60">
              {sortedTemplates.length}{" "}
              {language === "en" ? "results" : "परिणाम"}
            </span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTemplates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300"
              >
                {template.tag && (
                  <Badge className="mb-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0 shadow-lg">
                    {template.tag}
                  </Badge>
                )}
                <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {getText(template.title)}
                </h3>
                <p className="text-slate-600 dark:text-white/60 mb-4 line-clamp-2">
                  {getText(template.description)}
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

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/20">
                  {language === "en" ? "View Template" : "टेम्पलेट देखें"}
                </Button>
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
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-8 shadow-lg">
            <h2 className="text-2xl text-slate-900 dark:text-white mb-4">
              {language === "en"
                ? `About ${getText(category.name)}`
                : `${getText(category.name)} के बारे में`}
            </h2>
            <p className="text-slate-700 dark:text-white/70 leading-relaxed">
              {getText(category.aboutContent)}
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
            {language === "en" ? "Related Categories" : "संबंधित श्रेणियां"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.relatedCategories.map((related, index) => (
              <motion.a
                key={index}
                href={`/${related.slug}`}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-violet-300 dark:hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-pink-600 flex items-center justify-center mb-4 shadow-lg shadow-violet-500/20">
                  <related.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {getText(related.title)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-white/60 mb-3 line-clamp-2">
                  {getText(related.description)}
                </p>
                <span className="text-xs text-slate-500 dark:text-white/50">
                  {related.count} {language === "en" ? "templates" : "टेम्पलेट"}
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
            {language === "en"
              ? "Related Articles & Guides"
              : "संबंधित लेख और गाइड"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {category.blogs.map((blog, index) => (
              <motion.a
                key={index}
                href={`/blog/${blog.slug}`}
                whileHover={{ y: -8 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] overflow-hidden hover:border-pink-300 dark:hover:border-pink-500/50 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-pink-500/30 via-violet-500/30 to-cyan-500/30 flex items-center justify-center">
                  <blog.thumbnail className="w-12 h-12 text-white/40" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                    {getText(blog.title)}
                  </h3>
                  <p className="text-slate-600 dark:text-white/60 mb-4 line-clamp-2">
                    {getText(blog.excerpt)}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500 dark:text-white/50">
                      {blog.readTime}
                    </span>
                    <span className="text-pink-600 dark:text-pink-400">
                      {language === "en" ? "Read More →" : "और पढ़ें →"}
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
            {language === "en"
              ? "Frequently Asked Questions"
              : "अक्सर पूछे जाने वाले प्रश्न"}
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {category.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] px-6 data-[state=open]:bg-white/90 dark:data-[state=open]:bg-white/10 data-[state=open]:border-cyan-300 dark:data-[state=open]:border-cyan-500/50 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors py-4">
                  {getText(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-white/70 pb-4">
                  {getText(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>
      </div>
    </div>
  );
}
