"use client";
import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const faqData = {
  title: {
    en: "Frequently Asked Questions",
    hi: "अक्सर पूछे जाने वाले प्रश्न",
  },
  description: {
    en: "Find quick answers to common questions about templates, formats, and usage.",
    hi: "टेम्पलेट्स, प्रारूपों और उपयोग के बारे में सामान्य प्रश्नों के त्वरित उत्तर खोजें।",
  },
  faq: [
    {
      question: {
        en: "What's the difference between a letter and an application?",
        hi: "पत्र और आवेदन में क्या अंतर है?",
      },
      answer: {
        en: "A letter is typically used for general communication, requests, or formal correspondence. An application is specifically used to formally request something like a job, leave, loan, or admission. Applications follow a more structured format with specific details about what you're requesting.",
        hi: "पत्र का उपयोग आमतौर पर सामान्य संवाद, अनुरोध या औपचारिक पत्राचार के लिए किया जाता है। आवेदन का उपयोग किसी नौकरी, अवकाश, ऋण या प्रवेश जैसी चीज़ के लिए औपचारिक रूप से अनुरोध करने हेतु किया जाता है। आवेदन एक निश्चित प्रारूप का पालन करता है जिसमें आपके अनुरोध से जुड़ी सभी आवश्यक जानकारियाँ होती हैं।",
      },
    },
    {
      question: {
        en: "Can I download templates as Word or PDF?",
        hi: "क्या मैं टेम्पलेट्स को Word या PDF में डाउनलोड कर सकता हूँ?",
      },
      answer: {
        en: "Yes! All our templates are available in multiple formats including Microsoft Word (.docx) and PDF. You can choose the format that works best for your needs. Word documents are editable, while PDFs maintain consistent formatting across all devices.",
        hi: "हाँ! हमारे सभी टेम्पलेट्स Microsoft Word (.docx) और PDF सहित कई फ़ॉर्मेट्स में उपलब्ध हैं। आप अपनी ज़रूरत के अनुसार फ़ॉर्मेट चुन सकते हैं। Word डॉक्यूमेंट्स को संपादित किया जा सकता है, जबकि PDF सभी डिवाइस पर एक समान फ़ॉर्मेट बनाए रखता है।",
      },
    },
    {
      question: {
        en: "How often are new templates added?",
        hi: "नए टेम्पलेट्स कितनी बार जोड़े जाते हैं?",
      },
      answer: {
        en: "We add new templates weekly! Our team regularly updates the collection with fresh, modern templates based on user requests and current trends in professional communication. Subscribe to our newsletter to get notified about new additions.",
        hi: "हम हर सप्ताह नए टेम्पलेट्स जोड़ते हैं। हमारी टीम उपयोगकर्ताओं के अनुरोध और पेशेवर संचार के मौजूदा रुझानों के आधार पर नियमित रूप से नए और आधुनिक टेम्पलेट्स जोड़ती रहती है। नए टेम्पलेट्स की जानकारी पाने के लिए हमारे न्यूज़लेटर को सब्सक्राइब करें।",
      },
    },
    {
      question: {
        en: "Are the templates completely free to use?",
        hi: "क्या टेम्पलेट्स पूरी तरह से मुफ्त हैं?",
      },
      answer: {
        en: "Absolutely! All templates on Aavedan Patra are 100% free to download and use for personal and professional purposes. There are no hidden fees or premium tiers. We believe everyone should have access to quality professional templates.",
        hi: "बिल्कुल! आवेदन पत्र पर उपलब्ध सभी टेम्पलेट्स 100% मुफ्त हैं और इन्हें व्यक्तिगत व पेशेवर उपयोग के लिए डाउनलोड किया जा सकता है। इसमें कोई छुपा हुआ शुल्क या प्रीमियम प्लान नहीं है। हमारा मानना है कि हर किसी को गुणवत्ता वाले पेशेवर टेम्पलेट्स तक पहुँच मिलनी चाहिए।",
      },
    },
    {
      question: {
        en: "Can I customize the templates?",
        hi: "क्या मैं टेम्पलेट्स को अपनी ज़रूरत के अनुसार बदल सकता हूँ?",
      },
      answer: {
        en: "Yes, all templates are fully customizable. You can edit the content, change formatting, add your personal details, and modify them to suit your specific needs. We provide templates as starting points that you can personalize.",
        hi: "हाँ, सभी टेम्पलेट्स पूरी तरह से कस्टमाइज़ किए जा सकते हैं। आप सामग्री में बदलाव कर सकते हैं, फ़ॉर्मेट बदल सकते हैं, अपनी व्यक्तिगत जानकारी जोड़ सकते हैं और अपनी आवश्यकता के अनुसार इन्हें संशोधित कर सकते हैं। ये टेम्पलेट्स आपको एक आधार प्रदान करते हैं जिन्हें आप आसानी से व्यक्तिगत बना सकते हैं।",
      },
    },
  ],
};

export function FAQ() {
  const { language } = useLanguage();
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
            <h2 className="text-4xl p-2 lg:text-5xl bg-gradient-to-r from-slate-900 via-pink-700 to-violet-700 dark:from-white dark:via-pink-200 dark:to-violet-200 bg-clip-text text-transparent">
              {faqData.title[language]}
            </h2>
          </div>
          <p className="text-slate-600 dark:text-white/60 text-lg">
            {faqData.description[language]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.faq.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[20px] px-6 data-[state=open]:bg-white/90 dark:data-[state=open]:bg-white/10 data-[state=open]:border-pink-300 dark:data-[state=open]:border-pink-500/50 transition-all duration-300"
              >
                <AccordionTrigger className="text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                  {faq.question[language]}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-white/70">
                  {faq.answer[language]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
