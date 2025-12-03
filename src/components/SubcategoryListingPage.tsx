import { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  ChevronDown,
  Home,
  ChevronRight,
  Calendar,
  FileText,
  Download,
  Eye,
  ArrowRight,
  SlidersHorizontal,
  BookOpen,
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
import Link from "next/link";

interface Template {
  id: string;
  title: string;
  description: string;
  lastUpdated: string;
  icon?: React.ReactNode;
  views?: string;
}

interface RelatedTemplate {
  title: string;
  category: string;
  link: string;
}

interface BlogPost {
  title: string;
  link: string;
}

interface SubcategoryData {
  categoryName: string;
  breadcrumb: string[];
  heroTitle: string;
  heroDescription: string;
  searchPlaceholder: string;
  tags: string[];
  templates: Template[];
  seoTitle: string;
  seoDescription: string;
  relatedTemplates: RelatedTemplate[];
  blogPosts?: BlogPost[];
}

interface SubcategoryListingPageProps {
  data: SubcategoryData;
  language?:'hi' | 'en'
}

export function SubcategoryListingPage({ data, language='en' }: SubcategoryListingPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("popular");
  const [showFilters, setShowFilters] = useState(false);


  // Filter templates based on search and tag
  const filteredTemplates = data.templates.filter((template) => {
    const matchesSearch =
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag =
      !selectedTag ||
      template.title.toLowerCase().includes(selectedTag.toLowerCase());
    return matchesSearch && matchesTag;
  });

  // Sort templates
  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    if (sortBy === "newest") {
      return (
        new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
      );
    } else if (sortBy === "a-z") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "z-a") {
      return b.title.localeCompare(a.title);
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
            <li className="flex items-center gap-2 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              <Home className="w-4 h-4" />
              <Link href={"/"}> {language === "en" ? "Home" : "होम"}</Link>
            </li>
            {data.breadcrumb.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <a
                  href="#"
                  className={`hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors ${
                    index === data.breadcrumb.length - 1
                      ? "text-slate-900 dark:text-white font-medium"
                      : ""
                  }`}
                >
                  <Link href={"/applications"}>{crumb}</Link>
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
              <h1 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent mb-4">
                {data.heroTitle}
              </h1>
              <p className="text-lg text-slate-600 dark:text-white/70 max-w-3xl">
                {data.heroDescription}
              </p>
            </div>
          </div>
        </motion.header>

        {/* Tag Filters */}
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
              All Templates
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
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-white/40" />
                <Input
                  type="text"
                  placeholder={data.searchPlaceholder}
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
              {sortedTemplates.length} results
            </span>
          </div>

          {sortedTemplates.length === 0 ? (
            <div className="text-center py-20 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px]">
              <FileText className="w-16 h-16 text-slate-300 dark:text-white/20 mx-auto mb-4" />
              <h3 className="text-slate-900 dark:text-white mb-2">
                No templates found
              </h3>
              <p className="text-slate-600 dark:text-white/60">
                Try adjusting your search or filters
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
                  <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-slate-600 dark:text-white/60 mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-white/50 mb-4">
                    <div className="flex items-center gap-4">
                      {template.views && (
                        <span className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {template.views}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {template.lastUpdated}
                      </span>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white">
                    View Template
                  </Button>
                </motion.div>
              ))}
            </div>
          )}
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
              {data.seoTitle}
            </h2>
            <p className="text-slate-700 dark:text-white/70 leading-relaxed">
              {data.seoDescription}
            </p>
          </div>
        </motion.section>

        {/* Related Templates Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-2xl text-slate-900 dark:text-white mb-6">
            Related Templates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.relatedTemplates.map((template, index) => (
              <motion.a
                key={index}
                href={template.link}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] p-6 hover:border-violet-300 dark:hover:border-violet-500/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-pink-600 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {template.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-white/60 mb-3">
                  {template.category}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Optional Blog Suggestions */}
        {data.blogPosts && data.blogPosts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl text-slate-900 dark:text-white mb-6">
              Helpful Guides & Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.blogPosts.map((post, index) => (
                <motion.a
                  key={index}
                  href={post.link}
                  whileHover={{ y: -8 }}
                  className="group bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] overflow-hidden hover:border-pink-300 dark:hover:border-pink-500/50 hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-pink-500/30 via-violet-500/30 to-cyan-500/30 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white/40" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg text-slate-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-pink-600 dark:text-pink-400">
                        Read More →
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
}
