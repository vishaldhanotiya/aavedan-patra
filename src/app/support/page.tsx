import { SupportCenter } from "@/components/SupportCenter";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "Support | Aavedan Patra",
  description:
    "Get support from Aavedan Patra. Find help, contact information, and assistance related to application letter formats, content, and website usage.",
  path: "/support",
});
export default function Page() {
  return <SupportCenter />;
}
