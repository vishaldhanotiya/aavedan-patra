import { TermsOfService } from "@/components/TermsOfService";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "Terms of Service | Aavedan Patra",
  description:
    "Read the Terms of Service of Aavedan Patra to understand the rules, conditions, and guidelines for using our website and application letter resources.",
  path: "/terms-of-service",
});
export default function Page() {
  return <TermsOfService />;
}
