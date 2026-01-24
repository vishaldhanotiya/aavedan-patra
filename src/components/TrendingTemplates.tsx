"use client";
import { motion } from "motion/react";
import { Flame, Eye, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { heroString } from "@/data/hero";
import { useLanguage } from "@/contexts/LanguageContext";
import { trendingTemplate } from "@/data/trendingTemplate/trendingTemplate";

export function TrendingTemplates() {
  const { language } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Flame className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl pt-1 lg:text-5xl bg-gradient-to-r from-slate-900 via-orange-600 to-rose-600 dark:from-white dark:via-orange-200 dark:to-rose-200 bg-clip-text text-transparent">
              {heroString.trendingHeading[language]}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-white/60 text-lg">
            {heroString.trendingSubHeading[language]}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTemplate.templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                rotateX: 2,
                rotateY: 2,
              }}
              style={{ perspective: 1000 }}
              className="group relative"
            >
              {" "}
              <Link href={template.href}>
                <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-6 transition-all duration-300 group-hover:bg-white/90 dark:group-hover:bg-white/10 group-hover:border-cyan-300 dark:group-hover:border-cyan-500/50 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                  {/* Floating tag */}
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`${template.tagColor} text-white border-0`}
                    >
                      {template.tag}
                    </Badge>
                  </div>

                  <div className="mt-8 mb-4">
                    <h3 className="text-xl text-slate-900 dark:text-white mb-2">
                      {template.title[language]}
                    </h3>
                    <p className="text-slate-600 dark:text-white/50 mb-4">
                      {template.category[language]}
                    </p>

                    <div className="flex items-center gap-2 text-slate-600 dark:text-white/60 mb-6">
                      <Eye className="w-4 h-4" />
                      <span>{template.views} views</span>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white border-0"
                    size="sm"
                  >
                    {language === "en" ? "View Template" : "टेम्पलेट देखें"}
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-slate-300 dark:border-white/30 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 backdrop-blur-md"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            View All Trending
          </Button>
        </motion.div> */}
      </div>
    </section>
  );
}
