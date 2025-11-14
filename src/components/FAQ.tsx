"use client";
import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What's the difference between a letter and an application?",
    answer: "A letter is typically used for general communication, requests, or formal correspondence. An application is specifically used to formally request something like a job, leave, loan, or admission. Applications follow a more structured format with specific details about what you're requesting."
  },
  {
    question: "Can I download templates as Word or PDF?",
    answer: "Yes! All our templates are available in multiple formats including Microsoft Word (.docx) and PDF. You can choose the format that works best for your needs. Word documents are editable, while PDFs maintain consistent formatting across all devices."
  },
  {
    question: "How often are new templates added?",
    answer: "We add new templates weekly! Our team regularly updates the collection with fresh, modern templates based on user requests and current trends in professional communication. Subscribe to our newsletter to get notified about new additions."
  },
  {
    question: "Are the templates completely free to use?",
    answer: "Absolutely! All templates on Sample Files are 100% free to download and use for personal and professional purposes. There are no hidden fees or premium tiers. We believe everyone should have access to quality professional templates."
  },
  {
    question: "Can I customize the templates?",
    answer: "Yes, all templates are fully customizable. You can edit the content, change formatting, add your personal details, and modify them to suit your specific needs. We provide templates as starting points that you can personalize."
  }
];

export function FAQ() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-pink-600 dark:text-pink-500" />
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-slate-900 via-pink-700 to-violet-700 dark:from-white dark:via-pink-200 dark:to-violet-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-slate-600 dark:text-white/60 text-lg">Everything you need to know about Sample Files</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] px-6 data-[state=open]:bg-white/90 dark:data-[state=open]:bg-white/10 data-[state=open]:border-pink-300 dark:data-[state=open]:border-pink-500/50 transition-all duration-300"
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
        </motion.div>
      </div>
    </section>
  );
}