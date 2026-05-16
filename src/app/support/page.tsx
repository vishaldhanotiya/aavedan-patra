import { SupportCenter } from "@/components/SupportCenter";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:  "सहायता केंद्र – Support - AavedanPatra",
  description:
    "AavedanPatra.in पर किसी भी समस्या के लिए सहायता पाएँ। आवेदन पत्र प्रारूप, डाउनलोड या वेबसाइट से जुड़ी मदद के लिए यहाँ आएँ।", 
  path: "/support",
});
export default function Page() {
  return <SupportCenter />;
}
