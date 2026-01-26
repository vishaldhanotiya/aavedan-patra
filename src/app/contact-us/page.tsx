import { ContactUs } from "@/components/ContactUs";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "Contact Us | Aavedan Patra",
  description:
    "Contact Aavedan Patra for questions, feedback, or support. Get in touch with us for help related to application letter formats, content, or website services.",
  path: "/contact-us",
});
export default function Page() {
  return <ContactUs />;
}
