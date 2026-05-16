
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bankJobApplicationTemplate } from "@/data/jobTemplate/bankJobApplicationTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title: "बैंक नौकरी आवेदन पत्र – पीओ, क्लर्क, प्रोबेशनरी ऑफिस",
  description:
     "बैंक पीओ, क्लर्क, प्रोबेशनरी ऑफिसर और अन्य बैंकिंग पदों के लिए हिंदी आवेदन प्रारूप। शिक्षा, कंप्यूटर ज्ञान और बैंकिंग अनुभव दिखाएं।",
  path: "/applications/job/bank-job-application-formats",
});
export default function Page() {  
  return (
    <>
      <PillarTemplateDetailsPage
        data={bankJobApplicationTemplate}
      />
    </>
  );
}

