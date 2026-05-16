import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { personalLoanTemplate1 } from "@/data/loanTemplate/personalLoanTemplate1";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "पर्सनल लोन आवेदन – व्यक्तिगत जरूरतों के लिए",
  description:
    "शादी, यात्रा, डेबट कंसोलिडेशन या अन्य व्यक्तिगत जरूरतों के लिए पर्सनल लोन आवेदन प्रारूप। आय और क्रेडिट स्कोर का उल्लेख करें।",
  path: "/applications/loan/personal-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={personalLoanTemplate1} />
    </>
  );
}
