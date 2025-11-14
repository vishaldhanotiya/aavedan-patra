"use client";
import { motion } from "motion/react";
import { 
  FileText, 
  Mail, 
  Award, 
  FileUser, 
  FileBarChart, 
  AtSign,
  Briefcase,
  GraduationCap,
  Heart,
  Building,
  FileCheck,
  Send
} from "lucide-react";

const linkGroups = [
  {
    title: "Popular Categories",
    links: [
      { icon: FileText, label: "Job Applications", href: "#" },
      { icon: Mail, label: "Resignation Letters", href: "#" },
      { icon: Award, label: "Experience Certificates", href: "#" },
      { icon: FileUser, label: "Resume Templates", href: "#" }
    ]
  },
  {
    title: "Quick Access",
    links: [
      { icon: Briefcase, label: "Professional Letters", href: "#" },
      { icon: GraduationCap, label: "Academic Templates", href: "#" },
      { icon: Building, label: "Business Documents", href: "#" },
      { icon: FileCheck, label: "Official Formats", href: "#" }
    ]
  }
];

export function QuickLinks() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/50 dark:via-white/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
            Browse by Category
          </h2>
          <p className="text-slate-600 dark:text-white/60 text-lg">Quick navigation to popular template categories</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {linkGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[24px] p-8"
            >
              <h3 className="text-2xl text-slate-900 dark:text-white mb-6">{group.title}</h3>
              
              <div className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <motion.a
                    key={linkIndex}
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <link.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 dark:text-white/80 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}