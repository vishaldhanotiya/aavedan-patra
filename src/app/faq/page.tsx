import { FAQPage } from "@/components/FAQPage";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "अक्सर पूछे जाने वाले सवाल – FAQ | AavedanPatra.in",
  description:
    "आवेदन पत्र के प्रारूप, डाउनलोड, उपयोग और वेबसाइट से जुड़े अक्सर पूछे जाने वाले सवालों के जवाब यहाँ पाएँ – AavedanPatra.in FAQ।", 
  path: "/faq",
});
export default function Page() {
  return <FAQPage />;
}
