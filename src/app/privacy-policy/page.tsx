import { PrivacyPolicy } from "@/components/PrivacyPolicy";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "Privacy Policy | Aavedan Patra",
  description:
    "Read the Privacy Policy of Aavedan Patra to understand how we collect, use, and protect your personal information while you use our website and services.",
  path: "/privacy-policy",
});
export default function Page() {
  return <PrivacyPolicy />;
}
