import { PillarTemplatePage } from "@/components/PillarTemplatePage";
import { personalLoanTemplate1 } from "@/data/loanTemplate/personalLoanTemplate1";
import { createMetadata } from "@/metadata/metadata";
const path = "/applications/loan/personal-loan-application";
export const metadata = createMetadata({
  title: "पर्सनल लोन आवेदन – व्यक्तिगत जरूरतों के लिए",
  description:
    "शादी, यात्रा, डेबट कंसोलिडेशन या अन्य व्यक्तिगत जरूरतों के लिए पर्सनल लोन आवेदन प्रारूप। आय और क्रेडिट स्कोर का उल्लेख करें।",
  path,
});
export default function Page() {
  return (
    <PillarTemplatePage path={path} data={personalLoanTemplate1} singleTemplate />
  );
}
