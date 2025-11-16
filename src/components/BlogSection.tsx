"use client";
import { motion } from "motion/react";
import { BookOpen, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";

const blogs = [
  { 
    key:1,
    title: "How to Write a Professional Job Application",
    excerpt: "Master the art of writing compelling job applications that get noticed by recruiters",
    author: "Vishal Dhanotiya",
    readTime: "5 min read",
    category: "Writing Tips",
    href:'/blog/how-to-write-a-job-application'

  },
  { 
    key:2,
    title: "Resume Format Guide 2025",
    excerpt: "Latest trends and best practices for creating standout resumes in the modern job market",
    author: "Vishal Dhanotiya",
    readTime: "8 min read",
    category: "Career Guides",
    href:'/blog'
  },
  {
    key:3,
    title: "Email Etiquette for Business Communication",
    excerpt: "Essential tips for professional email writing that leaves a lasting impression",
    author: "Vishal Dhanotiya",
    readTime: "6 min read",
    category: "Communication",
    href:'/blog'
  }
];

export function BlogSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-violet-600 dark:text-violet-500" />
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 via-violet-700 to-pink-700 dark:from-white dark:via-violet-200 dark:to-pink-200 bg-clip-text text-transparent">
              Writing Tips & Guides
            </h2>
          </div>
          <p className="text-slate-600 dark:text-white/60 text-lg">Expert insights to help you write better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] overflow-hidden transition-all duration-300 group-hover:bg-white/90 dark:group-hover:bg-white/10 group-hover:border-violet-300 dark:group-hover:border-violet-500/50 group-hover:shadow-2xl group-hover:shadow-violet-500/20">
                {/* Gradient overlay on top */}
                <div className="h-2 bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-500 animate-gradient" />
                
                {/* Image placeholder with gradient */}
                <div className="relative h-48 bg-gradient-to-br from-violet-500/30 via-pink-500/30 to-cyan-500/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white/30" />
                  </div>
                  {/* Zoom effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-pink-500/10 group-hover:scale-110 transition-transform duration-500" />
                </div>

                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-500/20 text-violet-700 dark:text-violet-300 mb-3">
                    {blog.category}
                  </div>
                  
                  <h3 className="text-xl text-slate-900 dark:text-white mb-3 line-clamp-2">{blog.title}</h3>
                  <p className="text-slate-600 dark:text-white/60 mb-6 line-clamp-2">{blog.excerpt}</p>

                  <div className="flex items-center justify-between text-slate-500 dark:text-white/50 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>

                  <Link key={blog.key} href={blog.href}>

                  <Button 
                    variant="ghost" 
                    className="w-full text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-cyan-50 dark:hover:bg-cyan-500/10 group/btn"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}