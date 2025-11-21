"use client";
import { motion } from "motion/react";
import { Heart, Github, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Contact"],
    linkSlug: ["about", "contact-us"],
    // links: ["About", "Blog", "Careers", "Contact"]
  },
  {
    title: "Resources",
    links: ["FAQ", "Support"],
    linkSlug: ["faq", "support"],
    //links: ["Templates", "Guides", "FAQ", "Support"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Disclaimer"],
    linkSlug: ["privacy-policy", "terms-of-service", "disclaimer"],
    // links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Sitemap"]
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-violet-100 to-slate-100 dark:from-slate-950 dark:via-violet-950 dark:to-slate-950" />

      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-300/20 dark:bg-violet-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300/20 dark:bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-cyan-600 to-violet-600 dark:from-cyan-400 dark:to-violet-400 bg-clip-text text-transparent">
              Aavedan Patra
            </h3>
            <p className="text-slate-600 dark:text-white/60 mb-6 max-w-sm">
              Your go-to platform for professional templates. Crafted with care
              for job seekers, students, and professionals.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-500 hover:to-violet-600 hover:border-transparent transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-600 dark:text-white/60 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-slate-900 dark:text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <div className="text-slate-600 dark:text-white/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
                      <Link href={`${section.linkSlug[linkIndex]}`}>
                        {" "}
                        {link}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider with glow */}
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/20 to-transparent mb-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-white/50">
            © 2025 Aavedan Patra. All rights reserved.
          </p>

          <motion.p
            className="text-slate-500 dark:text-white/50 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Made with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />{" "}
            by Vishal Dhanotiya
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
