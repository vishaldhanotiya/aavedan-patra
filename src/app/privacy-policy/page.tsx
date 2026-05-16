import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "गोपनीयता नीति – Privacy Policy - AavedanPatra",
  description:
    "AavedanPatra.in की गोपनीयता नीति पढ़ें। जानें कि हम आपकी व्यक्तिगत जानकारी कैसे एकत्र, उपयोग और सुरक्षित करते हैं।",
  path: "/privacy-policy",
});
export default function Page() {
  return <PrivacyPolicy />;
}
