/**
 * CONTACT PAGE - Aavedan Patra
 * Professional contact page with form and business information
 */

"use client"
import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  MessageSquare,
  Sparkles,
  ChevronRight,
  Home,
  ArrowRight,
} from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import Link from "next/link";

interface ContactUsProps {
  language?: "en" | "hi";
}

const contactInfo = {
  email: "aavedan.hub@gmail.com",
  // phone: "+91 (800) 123-4567",
  address: {
    en: "Aavedan Patra Headquarters, New Delhi, India",
    hi: "Aavedan Patra मुख्यालय, नई दिल्ली, भारत",
  },
  hours: {
    en: "Monday - Friday, 9:00 AM - 6:00 PM IST",
    hi: "सोमवार - शुक्रवार, सुबह 9:00 - शाम 6:00 IST",
  },
};

const faqs = [
  {
    question: {
      en: "How quickly do you respond?",
      hi: "आप कितनी जल्दी जवाब देते हैं?",
    },
    answer: {
      en: "We typically respond within 24-48 hours",
      hi: "हम आमतौर पर 24-48 घंटों के भीतर जवाब देते हैं",
    },
  },
  {
    question: {
      en: "Can I suggest a template?",
      hi: "क्या मैं टेम्पलेट सुझा सकता हूं?",
    },
    answer: {
      en: "Yes! We welcome template suggestions",
      hi: "हां! हम टेम्पलेट सुझावों का स्वागत करते हैं",
    },
  },
  {
    question: {
      en: "Do you offer custom templates?",
      hi: "क्या आप कस्टम टेम्पलेट्स प्रदान करते हैं?",
    },
    answer: {
      en: "Please contact us to discuss custom needs",
      hi: "कस्टम आवश्यकताओं पर चर्चा करने के लिए हमसे संपर्क करें",
    },
  },
];

export function ContactUs({language='en'}:ContactUsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success(
        language === "en"
          ? "Message sent successfully! We'll get back to you soon."
          : "संदेश सफलतापूर्वक भेजा गया! हम जल्द ही आपसे संपर्क करेंगे।"
      );

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset submitted state after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50 dark:from-slate-950 dark:via-blue-950 dark:to-violet-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-20">
        <div className=" mx-auto max-w-6xl">
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
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4" />
                <span className="text-slate-900 dark:text-white font-medium">
                  Contact Us
                </span>
              </li>
            </ol>
          </motion.nav>
        </div>

        <div className="container mx-auto px-4 max-w-6xl lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 dark:bg-cyan-400/10 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-sm text-cyan-700 dark:text-cyan-300">
                {language === "en" ? "Get in Touch" : "संपर्क में रहें"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-slate-900 via-cyan-700 to-violet-700 dark:from-white dark:via-cyan-200 dark:to-violet-200 bg-clip-text text-transparent">
              {language === "en" ? "Contact Us" : "हमसे संपर्क करें"}
            </h1>

            <p className="text-xl sm:text-2xl text-slate-600 dark:text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed">
              {language === "en"
                ? "We'd love to hear from you. Have a question, suggestion, or feedback? Send us a message and we'll respond as soon as possible."
                : "हम आपसे सुनना पसंद करेंगे। कोई प्रश्न, सुझाव या प्रतिक्रिया है? हमें एक संदेश भेजें और हम जल्द से जल्द जवाब देंगे।"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* LEFT COLUMN - Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl sm:text-3xl mb-6 text-slate-900 dark:text-white">
                {language === "en" ? "Contact Information" : "संपर्क जानकारी"}
              </h2>

              <p className="text-slate-600 dark:text-white/70 mb-8 leading-relaxed">
                {language === "en"
                  ? "Reach out to us through any of the following channels. We're here to help with your document needs."
                  : "निम्नलिखित किसी भी माध्यम से हमसे संपर्क करें। हम आपकी दस्तावेज़ आवश्यकताओं में मदद के लिए यहां हैं।"}
              </p>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* Email */}
                <motion.a
                  href={`mailto:${contactInfo.email}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-5 hover:shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-400/10 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                      {language === "en" ? "Email Us" : "हमें ईमेल करें"}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-white/70">
                      {contactInfo.email}
                    </p>
                  </div>
                </motion.a>

                {/* Phone */}
                {/* <motion.a
                  href={`tel:${contactInfo.phone}`}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-5 hover:shadow-lg hover:shadow-violet-500/10 dark:hover:shadow-violet-400/10 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500/10 to-violet-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                      {language === "en" ? "Call Us" : "हमें कॉल करें"}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-white/70">
                      {contactInfo.phone}
                    </p>
                  </div>
                </motion.a> */}

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4 bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-5"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                      {language === "en" ? "Visit Us" : "हमसे मिलें"}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-white/70">
                      {contactInfo.address[language]}
                    </p>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4 bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl p-5"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 dark:text-white mb-1">
                      {language === "en" ? "Business Hours" : "व्यावसायिक घंटे"}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-white/70">
                      {contactInfo.hours[language]}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-gradient-to-br from-cyan-50 to-violet-50 dark:from-cyan-950/20 dark:to-violet-950/20 border border-cyan-200/50 dark:border-cyan-500/30 rounded-2xl p-6">
                <h3 className="font-medium text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                  {language === "en" ? "Quick Answers" : "त्वरित उत्तर"}
                </h3>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="text-sm">
                      <p className="font-medium text-slate-900 dark:text-white mb-1">
                        {faq.question[language]}
                      </p>
                      <p className="text-slate-600 dark:text-white/70">
                        {faq.answer[language]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl mb-2 text-slate-900 dark:text-white">
                  {language === "en" ? "Send us a Message" : "हमें संदेश भेजें"}
                </h2>
                <p className="text-slate-600 dark:text-white/70 mb-8">
                  {language === "en"
                    ? "Fill out the form below and we'll get back to you within 24-48 hours."
                    : "नीचे फॉर्म भरें और हम 24-48 घंटों के भीतर आपसे संपर्क करेंगे।"}
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                    >
                      {language === "en" ? "Your Name" : "आपका नाम"} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 transition-all"
                      placeholder={language === "en" ? "John Doe" : "आपका नाम"}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                    >
                      {language === "en" ? "Email Address" : "ईमेल पता"} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 transition-all"
                      placeholder={
                        language === "en"
                          ? "john@example.com"
                          : "example@email.com"
                      }
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                    >
                      {language === "en" ? "Subject" : "विषय"} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 transition-all"
                      placeholder={
                        language === "en"
                          ? "How can we help?"
                          : "हम कैसे मदद कर सकते हैं?"
                      }
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-900 dark:text-white mb-2"
                    >
                      {language === "en" ? "Your Message" : "आपका संदेश"} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-cyan-400 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/40 transition-all resize-none"
                      placeholder={
                        language === "en"
                          ? "Tell us what's on your mind..."
                          : "हमें बताएं कि आपके मन में क्या है..."
                      }
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting || submitted}
                    className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/30 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        {language === "en" ? "Sending..." : "भेजा जा रहा है..."}
                      </>
                    ) : submitted ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        {language === "en" ? "Sent!" : "भेज दिया!"}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        {language === "en" ? "Send Message" : "संदेश भेजें"}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-500 dark:text-white/50 text-center">
                    {language === "en"
                      ? "We respect your privacy and will never share your information."
                      : "हम आपकी गोपनीयता का सम्मान करते हैं और कभी भी आपकी जानकारी साझा नहीं करेंगे।"}
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Placeholder) */}
      <section className="py-12 lg:py-20 bg-white/50 dark:bg-white/5 backdrop-blur-xl border-y border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl overflow-hidden h-96 flex items-center justify-center border border-slate-200 dark:border-white/10"
          >
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-slate-400 dark:text-white/40 mx-auto mb-4" />
              <p className="text-slate-600 dark:text-white/60">
                {language === "en" ? "Map Location" : "मानचित्र स्थान"}
              </p>
              <p className="text-sm text-slate-500 dark:text-white/50 mt-2">
                {language === "en"
                  ? "Interactive map will be displayed here"
                  : "इंटरैक्टिव मानचित्र यहां प्रदर्शित किया जाएगा"}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-500/10 via-violet-500/10 to-cyan-500/10 dark:from-cyan-400/10 dark:via-violet-400/10 dark:to-cyan-400/10 rounded-3xl p-12 text-center border border-cyan-200/50 dark:border-cyan-500/30"
          >
            <h2 className="text-3xl sm:text-4xl mb-4 text-slate-900 dark:text-white">
              {language === "en"
                ? "Need Templates Right Away?"
                : "तुरंत टेम्पलेट्स की आवश्यकता है?"}
            </h2>
            <p className="text-lg text-slate-600 dark:text-white/70 mb-8 max-w-2xl mx-auto">
              {language === "en"
                ? "Don't wait for a response. Explore our comprehensive collection and start using professional templates immediately."
                : "जवाब का इंतजार न करें। हमारे व्यापक संग्रह का अन्वेषण करें और तुरंत पेशेवर टेम्पलेट्स का उपयोग शुरू करें।"}
            </p>

            <Button
              asChild
              className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white shadow-lg shadow-violet-500/30 px-8 py-6 text-lg"
            >
              <a href="/category/applications">
                {language === "en"
                  ? "Browse Templates"
                  : "टेम्पलेट्स ब्राउज़ करें"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
