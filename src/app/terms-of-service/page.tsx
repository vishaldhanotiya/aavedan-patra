import { TermsOfService } from "@/components/TermsOfService";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:"उपयोग की शर्तें – Terms of Service | AavedanPatra.in",
  description:
     "AavedanPatra.in की उपयोग शर्तें पढ़ें। वेबसाइट और आवेदन पत्र संसाधनों के उपयोग के नियम, शर्तें और दिशा-निर्देश जानें।",
  path: "/terms-of-service",
});
export default function Page() {
  return <TermsOfService />;
}
