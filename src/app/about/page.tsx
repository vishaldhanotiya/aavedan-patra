import { About } from "@/components/About";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "हमारे बारे में – AavedanPatra.in | हिंदी आवेदन पत्र",
  description:
    "AavedanPatra.in के बारे में जानें। हम 200+ हिंदी आवेदन पत्र प्रारूप, नमूने और लिखने की गाइड मुफ्त में प्रदान करते हैं – नौकरी, छुट्टी, लोन, एडमिशन और सर्टिफिकेट के लिए।",
  path: "/about",
});
export default function Page() {
  return <About />;
}
