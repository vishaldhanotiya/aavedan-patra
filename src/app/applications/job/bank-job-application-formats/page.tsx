import { PillarTemplatePage } from "@/components/PillarTemplatePage";
import { bankJobApplicationTemplate } from "@/data/jobTemplate/bankJobApplicationTemplate";
import { createMetadata } from "@/metadata/metadata";
const path = "/applications/job/bank-job-application-formats";
export const metadata = createMetadata ({
  title: "बैंक नौकरी आवेदन पत्र – पीओ, क्लर्क, प्रोबेशनरी ऑफिस",
  description:
     "बैंक पीओ, क्लर्क, प्रोबेशनरी ऑफिसर और अन्य बैंकिंग पदों के लिए हिंदी आवेदन प्रारूप। शिक्षा, कंप्यूटर ज्ञान और बैंकिंग अनुभव दिखाएं।",
  path,
});
export default function Page() {  
  return <PillarTemplatePage path={path} data={bankJobApplicationTemplate} />;
}
