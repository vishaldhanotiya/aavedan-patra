import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { managerHrOperationsSalesTemplate } from "@/data/jobTemplate/managerHrOperationsSalesTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title: "मैनेजर आवेदन पत्र – टीम लीड, ऑपरेशंस, प्रोजेक्ट मैनेजर",
  description:
    "टीम लीड, ऑपरेशंस मैनेजर, प्रोजेक्ट मैनेजर और एचआर मैनेजर पदों के लिए प्रबंधकीय आवेदन प्रारूप। नेतृत्व और उपलब्धियां दिखाएं।",
  path: "/applications/job/manager-job-application-formats",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={managerHrOperationsSalesTemplate} />
    </>
  );
}
