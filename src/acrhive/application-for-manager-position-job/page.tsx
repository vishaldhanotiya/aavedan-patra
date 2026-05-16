import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { managerHrOperationsSalesTemplate } from "@/data/jobTemplate/managerHrOperationsSalesTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "मैनेजर पद आवेदन पत्र – Manager Job Application Hindi",
  description:
    "Manager पद के लिए हिंदी आवेदन पत्र। लीडरशिप स्किल्स हाइलाइट करें – तैयार नमूना, सही फॉर्मेट और Manager Job Application लिखने की गाइड।",
  path: "/applications/application-for-manager-position-job",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={managerHrOperationsSalesTemplate} />
    </>
  );
}
