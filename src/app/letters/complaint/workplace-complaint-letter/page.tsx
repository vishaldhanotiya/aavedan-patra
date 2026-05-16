import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { workplaceComplaintTemplate } from "@/data/complaintTemplate/workplaceComplaintTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "कार्यस्थल शिकायत पत्र – एचआर को सहकर्मी/बॉस से समस्या",
  description:
    "ऑफिस में सहकर्मी या बॉस के दुर्व्यवहार, उत्पीड़न, भेदभाव या उचित कार्य माहौल न होने पर एचआर/मैनेजमेंट को शिकायत।",
  path: "/letters/complaint/workplace-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={workplaceComplaintTemplate}
      />
    </>
  );
}
