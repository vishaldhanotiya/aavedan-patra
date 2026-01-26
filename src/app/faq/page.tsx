import { FAQPage } from "@/components/FAQPage";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "FAQ | Aavedan Patra",
  description:
    "Find answers to frequently asked questions about Aavedan Patra, including application letter formats, usage, downloads, and general website support.",
  path: "/faq",
});
export default function Page() {
  return <FAQPage />;
}
