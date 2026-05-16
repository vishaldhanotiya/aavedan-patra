import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { homeLoanTemplate } from "@/data/loanTemplate/homeLoanTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "होम लोन आवेदन – घर खरीदने या बनाने के लिए",
  description:
    "मकान खरीदने, निर्माण करने या रिनोवेशन के लिए बैंक से होम लोन मांगने का आवेदन प्रारूप। प्रॉपर्टी विवरण और आय प्रमाण शामिल करें।",
  path: "/applications/loan/home-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={homeLoanTemplate} />
    </>
  );
}
