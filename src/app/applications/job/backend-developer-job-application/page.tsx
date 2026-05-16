import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { backendDeveloperJobTemplate } from "@/data/jobTemplate/backendDeveloperJobTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title: "बैकएंड डेवलपर आवेदन पत्र – Backend Developer Job Application",
  description:
    "बैकएंड डेवलपर नौकरी के लिए आवेदन पत्र का सही हिंदी प्रारूप यहाँ देखें। Backend Developer पद हेतु तैयार नमूना आवेदन पत्र, लिखने का तरीका",
  path: "/applications/job/backend-developer-job-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage  singleTemplate data={backendDeveloperJobTemplate} />
    </>
  );
}
