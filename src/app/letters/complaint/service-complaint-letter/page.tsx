import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { serviceComplaintTemplate } from "@/data/complaintTemplate/serviceComplaintTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "सेवा शिकायत पत्र – इंटरनेट, बिजली, पानी, बैंक",
  description:
    "खराब या असंतोषजनक सेवा की शिकायत के लिए Service Complaint Letter। प्रभावी हिंदी प्रारूप, तैयार नमूना और शिकायत लिखने की गाइड।",
  path: "/letters/complaint/service-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={serviceComplaintTemplate}
      />
    </>
  );
}
