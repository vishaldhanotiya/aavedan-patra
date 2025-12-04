"use client";
import { motion } from "motion/react";
import {
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { heroString } from "@/data/hero";
import { iconMap } from "./icon";
import { useLanguage } from "@/contexts/LanguageContext";

export function CategoryGrid() {

  const {language} =useLanguage()
  const categories = [
    {
      icon: "FileText",
      title: heroString.applications[language],
      description: heroString.applicationType[language],
      gradient: "from-sky-400 to-cyan-500",
      href: "/applications",
      slug: "applications",
    },
    {
      icon: "Mail",
      title: heroString.letters[language],
      description: heroString.letterType[language],
      gradient: "from-violet-400 to-purple-500",
      href: "/letters",
      slug: "letters",
    },
    // {
    //   icon: Award,
    //   title: t.categories.certificates,
    //   description:  t.categories.certificateType,
    //   gradient: "from-pink-400 to-rose-500",
    //   href: "/certificates",
    //   slug: "certificates",
    // },
    // {
    //   icon: FileUser,
    //   title: "Resumes",
    //   description: "Resume Format, Cover Letter, CV Template",
    //   gradient: "from-amber-400 to-orange-500",
    //   href: "/resumes",
    //   slug: "resumes",
    // },
    // {
    //   icon: FileUser,
    //   title: "Essays & Paragraphs",
    //   description: "Essay, Paragraphs, Speech Writing",
    //   gradient: "from-amber-400 to-orange-500",
    //   href: "/essays",
    //   slug: "essays",
    // },
    // {
    //   icon: FileBarChart,
    //   title: "Notices & Reports",
    //   description: "Office Notice, Project Report, Meeting Minutes",
    //   gradient: "from-emerald-400 to-teal-500",
    //   href: "/notices",
    //   slug: "notices",
    // },
    //   {
    //     icon: AtSign,
    //     title: "Emails",
    //     description: "Job Email, Follow-up, Welcome Speech",
    //     gradient: "from-blue-400 to-indigo-500",
    //     href: "/emails",
    //     slug:"emails"

    //   },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
            {heroString.exploreBy[language]}
          </h2>
          <p className="text-slate-600 dark:text-white/60 text-lg">
            {heroString.browseBy[language]}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icons = iconMap[category.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                {/* Glass Card */}
                <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-8 transition-all duration-300 group-hover:bg-white/90 dark:group-hover:bg-white/10 group-hover:border-slate-300 dark:group-hover:border-white/30 overflow-hidden group-hover:shadow-2xl">
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <Icons className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl text-slate-900 dark:text-white mb-3">
                      {category.title}
                    </h3>
                    <p className="text-slate-600 dark:text-white/60 mb-6">
                      {category.description}
                    </p>

                    {/* Arrow */}
                    {/* <Link
                    key={category.title}
                    href={category?.href +"/"+ category.slug || "/application"}
                  > */}
                    <Link href={`${category.href}`}>
                      <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 group-hover:gap-3 transition-all duration-300">
                        <span>{heroString.explore[language]}</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
