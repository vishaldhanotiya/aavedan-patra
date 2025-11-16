"use client";
import { motion } from "motion/react";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const recentTemplates = [
  // {
  //   title: "Internship Completion Certificate",
  //   excerpt: "Professional certificate format for internship completion with modern design",
  //   date: "Nov 12, 2025",
  //   category: "Certificates"
  // },
  // {
  //   title: "Project Report Format",
  //   excerpt: "Comprehensive project report template for academic and professional use",
  //   date: "Nov 10, 2025",
  //   category: "Reports"
  // },
  {
    title: "Follow-up Email Template",
    excerpt: "Effective follow-up email formats for job applications and business communication",
    date: "Nov 8, 2025",
    category: "Emails"
  },
  {
    title: "Character Certificate Request",
    excerpt: "Formal application template for requesting character certificate",
    date: "Nov 5, 2025",
    category: "Applications"
  }
];

export function RecentlyAdded() {
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
            <Clock className="w-8 h-8 text-cyan-600 dark:text-cyan-500" />
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 via-cyan-700 to-emerald-700 dark:from-white dark:via-cyan-200 dark:to-emerald-200 bg-clip-text text-transparent">
              Latest Templates
            </h2>
          </div>
          <p className="text-slate-600 dark:text-white/60 text-lg">Fresh templates added this week</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentTemplates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-6 h-full transition-all duration-300 group-hover:bg-white/90 dark:group-hover:bg-white/10 group-hover:border-emerald-300 dark:group-hover:border-emerald-500/50 group-hover:shadow-xl group-hover:shadow-emerald-500/20">
                {/* New Badge */}
                <div className="absolute -top-3 -right-3">
                  <Badge className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0 shadow-lg">
                    New
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white/70 mb-3">
                    {template.category}
                  </div>
                  <h3 className="text-lg text-slate-900 dark:text-white mb-2">{template.title}</h3>
                  <p className="text-slate-600 dark:text-white/60 mb-4 line-clamp-2">{template.excerpt}</p>
                </div>

                <div className="flex items-center gap-2 text-slate-500 dark:text-white/50 mt-auto">
                  <Calendar className="w-4 h-4" />
                  <span>{template.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}