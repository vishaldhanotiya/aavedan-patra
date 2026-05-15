import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { serviceComplaintTemplate } from "@/data/complaintTemplate/serviceComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "सेवा शिकायत पत्र – Service Complaint Letter Hindi | AavedanPatra",   
  description:
"खराब या असंतोषजनक सेवा की शिकायत के लिए Service Complaint Letter। प्रभावी हिंदी प्रारूप, तैयार नमूना और शिकायत लिखने की गाइड।",
  path: "/letters/service-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={serviceComplaintTemplate} />
    </>
  );
}
