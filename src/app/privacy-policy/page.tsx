import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "गोपनीयता नीति – Privacy Policy | AavedanPatra.in",
  description:
    "AavedanPatra.in की गोपनीयता नीति पढ़ें। जानें कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।",
  path: "/privacy-policy",
});
export default function Page() {
  return <PrivacyPolicy />;
}
