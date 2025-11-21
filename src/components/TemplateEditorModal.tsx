/**
 * TEMPLATE EDITOR MODAL - Sample Files
 * Real-time template editing with live preview
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Copy,
  Download,
  Printer,
  FileText,
  RotateCcw,
  Check,
  ChevronDown,
  Info
} from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { toast } from "sonner";

interface TemplateField {
  id: string;
  label: { en: string; hi: string };
  type: "text" | "textarea" | "date";
  placeholder: { en: string; hi: string };
  defaultValue?: string;
  tooltip?: { en: string; hi: string };
  required?: boolean;
}

interface TemplateVariation {
  id: string;
  title: { en: string; hi: string };
  content: string;
  fields: TemplateField[];
}

interface TemplateEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  variations: TemplateVariation[];
  defaultVariationId?: string;
  language?: "en" | "hi";
  templateTitle: { en: string; hi: string };
}

export function TemplateEditorModal({
  isOpen,
  onClose,
  variations,
  defaultVariationId,
  language = "en",
  templateTitle
}: TemplateEditorModalProps) {
  const [activeVariationId, setActiveVariationId] = useState<string>(
    defaultVariationId || variations[0]?.id || ""
  );
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [copiedState, setCopiedState] = useState(false);

  // Get active variation
  const activeVariation = variations.find(v => v.id === activeVariationId) || variations[0];

  // Initialize field values
  useEffect(() => {
    if (activeVariation) {
      const initialValues: Record<string, string> = {};
      activeVariation.fields.forEach(field => {
        if (field.type === "date" && !field.defaultValue) {
          // Auto-fill today's date
          const today = new Date().toISOString().split('T')[0];
          initialValues[field.id] = today;
        } else {
          initialValues[field.id] = field.defaultValue || "";
        }
      });
      setFieldValues(initialValues);
    }
  }, [activeVariation]);

  // Handle field change
  const handleFieldChange = (fieldId: string, value: string) => {
    setFieldValues(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  // Generate preview content
  const generatePreview = (): string => {
    if (!activeVariation) return "";
    
    let preview = activeVariation.content;
    
    // Replace placeholders with field values
    activeVariation.fields.forEach(field => {
      const value = fieldValues[field.id] || field.placeholder[language];
      const regex = new RegExp(`\\[${field.id}\\]`, 'gi');
      preview = preview.replace(regex, value);
    });
    
    return preview;
  };

  // Handle copy
  const handleCopy = () => {
    const preview = generatePreview();
    navigator.clipboard.writeText(preview);
    setCopiedState(true);
    toast.success(language === "en" ? "Copied to clipboard!" : "क्लिपबोर्ड पर कॉपी हो गया!");
    setTimeout(() => setCopiedState(false), 2000);
  };

  // Handle download as TXT
  const handleDownloadTxt = () => {
    const preview = generatePreview();
    const blob = new Blob([preview], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${templateTitle.en.replace(/\s+/g, "-").toLowerCase()}-edited.txt`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(language === "en" ? "Downloaded successfully!" : "सफलतापूर्वक डाउनलोड हो गया!");
  };

  // Handle download as PDF (mock - would need actual PDF library)
  const handleDownloadPdf = () => {
    toast.success(language === "en" ? "PDF generation coming soon!" : "PDF जनरेशन जल्द आ रहा है!");
  };

  // Handle print
  const handlePrint = () => {
    const preview = generatePreview();
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${templateTitle[language]}</title>
            <style>
              body {
                font-family: 'Georgia', 'Times New Roman', serif;
                padding: 40px;
                line-height: 1.8;
                max-width: 800px;
                margin: 0 auto;
              }
              pre {
                white-space: pre-wrap;
                word-wrap: break-word;
                font-family: 'Georgia', 'Times New Roman', serif;
              }
            </style>
          </head>
          <body>
            <pre>${preview}</pre>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  // Handle reset
  const handleReset = () => {
    const initialValues: Record<string, string> = {};
    activeVariation?.fields.forEach(field => {
      if (field.type === "date" && !field.defaultValue) {
        const today = new Date().toISOString().split('T')[0];
        initialValues[field.id] = today;
      } else {
        initialValues[field.id] = field.defaultValue || "";
      }
    });
    setFieldValues(initialValues);
    toast.success(language === "en" ? "Reset to default!" : "डिफ़ॉल्ट पर रीसेट हो गया!");
  };

  // Handle variation change
  const handleVariationChange = (variationId: string) => {
    setActiveVariationId(variationId);
  };

  if (!isOpen || !activeVariation) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-[1100px] max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h2 className="text-2xl font-medium text-slate-900 dark:text-white">
                      {language === "en" ? "Edit Template" : "टेम्पलेट संपादित करें"}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-white/70 mt-1">
                      {templateTitle[language]}
                    </p>
                  </div>

                  {/* Variation Selector */}
                  {variations.length > 1 && (
                    <div className="mx-4">
                      <Select value={activeVariationId} onValueChange={handleVariationChange}>
                        <SelectTrigger className="w-[250px]">
                          <SelectValue>
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4" />
                              <span className="truncate">{activeVariation.title[language]}</span>
                            </div>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          {variations.map((variation) => (
                            <SelectItem key={variation.id} value={variation.id}>
                              {variation.title[language]}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-xl transition-colors"
                  >
                    <X className="w-6 h-6 text-slate-600 dark:text-white/70" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row h-[calc(90vh-180px)]">
                {/* Left Panel - Form Fields */}
                <div className="flex-1 overflow-y-auto p-6 border-r border-slate-200 dark:border-white/10">
                  <div className="space-y-6 max-w-xl">
                    <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-4">
                      <FileText className="w-5 h-5" />
                      <h3 className="font-medium">
                        {language === "en" ? "Edit Template Details" : "टेम्पलेट विवरण संपादित करें"}
                      </h3>
                    </div>

                    {activeVariation.fields.map((field) => (
                      <div key={field.id} className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Label htmlFor={field.id} className="text-slate-700 dark:text-white/90">
                            {field.label[language]}
                            {field.required && <span className="text-red-500 ml-1">*</span>}
                          </Label>
                          {field.tooltip && (
                            <div className="group relative">
                              <Info className="w-4 h-4 text-slate-400 cursor-help" />
                              <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block z-10">
                                <div className="bg-slate-900 dark:bg-slate-700 text-white text-xs rounded-lg px-3 py-2 max-w-xs whitespace-normal">
                                  {field.tooltip[language]}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {field.type === "textarea" ? (
                          <Textarea
                            id={field.id}
                            value={fieldValues[field.id] || ""}
                            onChange={(e) => handleFieldChange(field.id, e.target.value)}
                            placeholder={field.placeholder[language]}
                            rows={6}
                            className="resize-none"
                          />
                        ) : field.type === "date" ? (
                          <Input
                            id={field.id}
                            type="date"
                            value={fieldValues[field.id] || ""}
                            onChange={(e) => handleFieldChange(field.id, e.target.value)}
                          />
                        ) : (
                          <Input
                            id={field.id}
                            type="text"
                            value={fieldValues[field.id] || ""}
                            onChange={(e) => handleFieldChange(field.id, e.target.value)}
                            placeholder={field.placeholder[language]}
                          />
                        )}
                      </div>
                    ))}

                    {/* Mobile Preview Button */}
                    <div className="lg:hidden mt-6">
                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                          document.getElementById('preview-panel')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        {language === "en" ? "View Preview ↓" : "पूर्वावलोकन देखें ↓"}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Right Panel - Live Preview */}
                <div id="preview-panel" className="flex-1 overflow-y-auto p-6 bg-slate-50 dark:bg-slate-950">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 mb-4">
                      <FileText className="w-5 h-5" />
                      <h3 className="font-medium">
                        {language === "en" ? "Live Preview" : "लाइव पूर्वावलोकन"}
                      </h3>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-white/10 shadow-sm">
                      <pre className="whitespace-pre-wrap font-serif text-slate-800 dark:text-white/90 leading-relaxed">
                        {generatePreview()}
                      </pre>
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="lg:hidden space-y-3 mt-6">
                      <Button
                        onClick={handleCopy}
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                      >
                        {copiedState ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            {language === "en" ? "Copied!" : "कॉपी हो गया!"}
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-2" />
                            {language === "en" ? "Copy" : "कॉपी करें"}
                          </>
                        )}
                      </Button>

                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="outline" onClick={handleDownloadTxt}>
                          <Download className="w-4 h-4 mr-2" />
                          {language === "en" ? "Download" : "डाउनलोड"}
                        </Button>
                        <Button variant="outline" onClick={handlePrint}>
                          <Printer className="w-4 h-4 mr-2" />
                          {language === "en" ? "Print" : "प्रिंट"}
                        </Button>
                      </div>

                      <Button variant="outline" onClick={handleReset} className="w-full">
                        <RotateCcw className="w-4 h-4 mr-2" />
                        {language === "en" ? "Reset" : "रीसेट"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sticky Action Bar (Desktop Only) */}
              <div className="hidden lg:block sticky bottom-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 px-6 py-4">
                <div className="flex items-center gap-3 justify-between">
                  <Button
                    variant="outline"
                    onClick={handleReset}
                    className="border-slate-300 dark:border-white/20"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    {language === "en" ? "Reset" : "रीसेट"}
                  </Button>

                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      onClick={handleDownloadTxt}
                      className="border-slate-300 dark:border-white/20"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {language === "en" ? "Download TXT" : "TXT डाउनलोड"}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={handleDownloadPdf}
                      className="border-slate-300 dark:border-white/20"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      {language === "en" ? "Download PDF" : "PDF डाउनलोड"}
                    </Button>

                    <Button
                      variant="outline"
                      onClick={handlePrint}
                      className="border-slate-300 dark:border-white/20"
                    >
                      <Printer className="w-4 h-4 mr-2" />
                      {language === "en" ? "Print" : "प्रिंट"}
                    </Button>

                    <Button
                      onClick={handleCopy}
                      className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-white"
                    >
                      {copiedState ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          {language === "en" ? "Copied!" : "कॉपी हो गया!"}
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-2" />
                          {language === "en" ? "Copy Edited Text" : "संपादित टेक्स्ट कॉपी करें"}
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
