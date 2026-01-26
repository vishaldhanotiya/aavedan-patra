import { About } from "@/components/About";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "About Us | Aavedan Patra",
  description:
    "Learn more about Aavedan Patra. We provide easy formats, ready-made examples, and helpful tips for all types of application letters including job, leave, certificate, loan, admission, and scholarship applications.",
 path: "/about",
});
export default function Page() {
  return <About />;
}
