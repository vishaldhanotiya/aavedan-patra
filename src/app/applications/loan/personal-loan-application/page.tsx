import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLoanTemplate1 } from "@/data/loanTemplate/personalLoanTemplate1";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "पर्सनल लोन के लिए आवेदन पत्र – हिंदी प्रारूप व नमूना",
  description:
    "पर्सनल लोन के लिए आवेदन पत्र का सही हिंदी प्रारूप यहाँ देखें। बैंक या फाइनेंस कंपनी हेतु तैयार नमूना आवेदन पत्र, लिखने का तरीका, उदाहरण और आसान टिप्स के साथ अपना आवेदन प्रभावी बनाएं।",
  path: "/applications/loan/personal-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={personalLoanTemplate1} />
    </>
  );
}
