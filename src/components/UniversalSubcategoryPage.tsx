"use client";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  Home,
  ChevronRight,
  Calendar,
  FileText,
  Eye,
  SlidersHorizontal,
  BookOpen,
  Sparkles,
  ChevronDown,
  X,
} from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
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
import type { SubcategoryData } from "../data/allSubcategoryData";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

interface UniversalSubcategoryPageProps {
  data: SubcategoryData;
  language?: "en" | "hi";
}

export function UniversalSubcategoryPage({
  data,
  language = "en",
}: UniversalSubcategoryPageProps) {
    const {lang}=useLanguage()

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  console.log("======>>>>>>>>>",language)

  // Get localized content
  const t = (content: { en: string; hi: string }) => content[lang];

  // Filter templates based on search, tag, and filters
  const filteredTemplates = data.templates.filter((template) => {
    const title = t(template.title).toLowerCase();
    const description = t(template.description).toLowerCase();
    const search = searchQuery.toLowerCase();

    const matchesSearch =
      title.includes(search) || description.includes(search);
    const matchesTag =
      !selectedTag || title.includes(selectedTag.toLowerCase());

    return matchesSearch && matchesTag;
  });

  // Sort templates
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (sortBy === "newest") {
      return (
        new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      );
    } else if (sortBy === "a-z") {
      return t(a.title).localeCompare(t(b.title));
    } else if (sortBy === "z-a") {
      return t(b.title).localeCompare(t(a.title));
    }
    return 0; // popular - keep original order
  });

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
            <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer">
              <Home className="w-4 h-4" />
              <Link href={"/"}>
                <span>{language === "en" ? "Home" : "होम"}</span>
              </Link>
            </li>
            {data.breadcrumb.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span
                  className={`hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer ${
                    index === data.breadcrumb.length - 1
                      ? "text-slate-900 dark:text-white"
                      : ""
                  }`}
                >
                  <Link href={`/${crumb.en}`.toLowerCase()}>{t(crumb)}</Link>
                </span>
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Header Section with Generate AI Button */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent mb-4">
                {t(data.heroTitle)}
              </h1>
              <p className="text-lg text-slate-600 dark:text-white/70 max-w-3xl">
                {t(data.heroDescription)}
              </p>
            </div>

            {/* Generate with AI Button */}
            <Button className="bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-700 hover:to-pink-700 text-white shadow-lg shadow-violet-500/30 h-12 px-6">
              <Sparkles className="w-4 h-4 mr-2" />
              {language === "en"
                ? "Generate with AI"
                : "AI के साथ उत्पन्न करें"}
            </Button>
          </div>
        </motion.header>

        {/* Dynamic Tag Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                selectedTag === null
                  ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-violet-500/30"
                  : "bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:border-cyan-300 dark:hover:border-cyan-500/50"
              }`}
            >
              {language === "en" ? "All Templates" : "सभी टेम्पलेट"}
            </button>
            {data.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-lg shadow-violet-500/30"
                    : "bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-white/70 hover:border-cyan-300 dark:hover:border-cyan-500/50"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Search and Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-white/40" />
                <Input
                  type="text"
                  placeholder={t(data.searchPlaceholder)}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white/60"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sort and Filter Controls */}
              <div className="flex gap-3">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[140px] bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white">
                    <SelectValue
                      placeholder={language === "en" ? "Sort by" : "छांटें"}
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
                  className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  {language === "en" ? "Filters" : "फ़िल्टर"}
                </Button>
              </div>
            </div>

            {/* Advanced Filters Panel */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10"
              >
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-slate-600 dark:text-white/60 mb-2 block">
                      {language === "en" ? "Type" : "प्रकार"}
                    </label>
                    <Select
                      value={selectedType}
                      onValueChange={setSelectedType}
                    >
                      <SelectTrigger className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white">
                        <SelectValue
                          placeholder={
                            language === "en" ? "All Types" : "सभी प्रकार"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          {language === "en" ? "All Types" : "सभी प्रकार"}
                        </SelectItem>
                        <SelectItem value="formal">
                          {language === "en" ? "Formal" : "औपचारिक"}
                        </SelectItem>
                        <SelectItem value="casual">
                          {language === "en" ? "Casual" : "अनौपचारिक"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm text-slate-600 dark:text-white/60 mb-2 block">
                      {language === "en" ? "Format" : "प्रारूप"}
                    </label>
                    <Select
                      value={selectedFormat}
                      onValueChange={setSelectedFormat}
                    >
                      <SelectTrigger className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white">
                        <SelectValue
                          placeholder={
                            language === "en" ? "All Formats" : "सभी प्रारूप"
                          }
                        />
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
                  <div>
                    <label className="text-sm text-slate-600 dark:text-white/60 mb-2 block">
                      {language === "en" ? "Language" : "भाषा"}
                    </label>
                    <Select
                      value={selectedLanguage}
                      onValueChange={setSelectedLanguage}
                    >
                      <SelectTrigger className="bg-white dark:bg-white/10 border-slate-300 dark:border-white/20 text-slate-900 dark:text-white">
                        <SelectValue
                          placeholder={
                            language === "en" ? "All Languages" : "सभी भाषाएं"
                          }
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">
                          {language === "en" ? "All Languages" : "सभी भाषाएं"}
                        </SelectItem>
                        <SelectItem value="en">
                          {language === "en" ? "English" : "अंग्रेज़ी"}
                        </SelectItem>
                        <SelectItem value="hi">
                          {language === "en" ? "Hindi" : "हिंदी"}
                        </SelectItem>
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
              {language === "en" ? "All Templates" : "सभी टेम्पलेट"}
            </h2>
            <span className="text-sm text-slate-600 dark:text-white/60">
              {sortedTemplates.length}{" "}
              {language === "en" ? "results" : "परिणाम"}
            </span>
          </div>

          {sortedTemplates.length === 0 ? (
            <div className="text-center py-20 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px]">
              <FileText className="w-16 h-16 text-slate-300 dark:text-white/20 mx-auto mb-4" />
              <h3 className="text-slate-900 dark:text-white mb-2">
                {language === "en"
                  ? "No templates found"
                  : "कोई टेम्पलेट नहीं मिला"}
              </h3>
              <p className="text-slate-600 dark:text-white/60">
                {language === "en"
                  ? "Try adjusting your search or filters"
                  : "अपनी खोज या फ़िल्टर समायोजित करने का प्रयास करें"}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedTemplates.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-cyan-300 dark:hover:border-cyan-500/50 hover:shadow-xl transition-all duration-300"
                >
                  {/* Badge */}
                  {template.badge && (
                    <Badge
                      className={`mb-3 ${
                        template.badge === "Popular"
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                          : template.badge === "Trending"
                          ? "bg-gradient-to-r from-pink-500 to-rose-600"
                          : "bg-gradient-to-r from-green-500 to-emerald-600"
                      }`}
                    >
                      {template.badge}
                    </Badge>
                  )}

                  <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {t(template.title)}
                  </h3>
                  <p className="text-slate-600 dark:text-white/60 mb-4 line-clamp-2">
                    {t(template.description)}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-white/50 mb-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {template.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {template.lastUpdated}
                      </span>
                    </div>
                  </div>

                  <Link href={template.templateSlug}>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white">
                      {language === "en" ? "View Template" : "टेम्पलेट देखें"}
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

        {/* SEO About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-8">
            <h2 className="text-2xl text-slate-900 dark:text-white mb-4">
              {t(data.seoTitle)}
            </h2>
            <p className="text-slate-700 dark:text-white/70 leading-relaxed">
              {t(data.seoDescription)}
            </p>
          </div>
        </motion.section>

        {/* Related Templates Section (Cross-linking) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl text-slate-900 dark:text-white mb-6">
            {language === "en" ? "Related Templates" : "संबंधित टेम्पलेट"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.relatedTemplates.map((template, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-violet-300 dark:hover:border-violet-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-pink-600 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {t(template.title)}
                </h3>
                <p className="text-sm text-slate-600 dark:text-white/60">
                  {t(template.category)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Blog Posts Section */}
        {data.blogPosts && data.blogPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl text-slate-900 dark:text-white mb-6">
              {language === "en"
                ? "Helpful Guides & Resources"
                : "उपयोगी गाइड और संसाधन"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] overflow-hidden hover:border-pink-300 dark:hover:border-pink-500/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="h-40 bg-gradient-to-br from-pink-500/30 via-violet-500/30 to-cyan-500/30 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white/40" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                      {t(post.title)}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-white/60 mb-3 line-clamp-2">
                      {t(post.excerpt)}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 dark:text-white/50">
                        {post.readTime}
                      </span>
                      <span className="text-pink-600 dark:text-pink-400">
                        {language === "en" ? "Read More →" : "और पढ़ें →"}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* FAQ Section */}
        {data.faqs && data.faqs.length > 0 && (
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
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {data.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-b border-slate-200 dark:border-white/10 last:border-0"
                  >
                    <AccordionTrigger className="text-left text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      {t(faq.question)}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 dark:text-white/70">
                      {t(faq.answer)}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
