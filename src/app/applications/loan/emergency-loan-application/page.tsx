import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { emergencyLoanTemplate } from "@/data/loanTemplate/emergencyLoanTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title:  "इमरजेंसी लोन आवेदन – मेडिकल/अन्य आपात ऋण",
  description:
"मेडिकल इमरजेंसी, एक्सीडेंट या अन्य अप्रत्याशित खर्चों के लिए तत्काल ऋण मांगने का आवेदन प्रारूप। कारण स्पष्ट रूप से लिखें।",
  path: "/applications/loan/emergency-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={emergencyLoanTemplate} />
    </>
  );
}
