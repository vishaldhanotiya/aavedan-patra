import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { loanApplications } from "@/data/subcategories/loanApplications";
import { createMetadata} from "@/metadata/metadata";

export const metadata = createMetadata({
    title: "लोन आवेदन पत्र – होम, कार, पर्सनल, एजुकेशन, बिजनेस - AavedanPatra",
    description:
      "होम लोन, कार लोन, पर्सनल लोन, एजुकेशन लोन और बिजनेस लोन के लिए हिंदी में आवेदन प्रारूप। बैंक और एनबीएफसी के लिए तैयार टेम्पलेट।",
  path: "/applications/job",
  type: "website",
});

export default async function Page() {
  return <UniversalSubcategoryPage data={loanApplications} />;
}
