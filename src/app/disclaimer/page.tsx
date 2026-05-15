import { Disclaimer } from "@/components/Disclaimer";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "अस्वीकरण – Disclaimer | AavedanPatra.in",
  description:
    "AavedanPatra.in का अस्वीकरण पढ़ें। यहाँ दी गई जानकारी केवल सामान्य मार्गदर्शन हेतु है – यह कानूनी, आधिकारिक या पेशेवर सलाह नहीं है।",
  path: "/disclaimer",
});
export default function Page() {
  return <Disclaimer />;
}
