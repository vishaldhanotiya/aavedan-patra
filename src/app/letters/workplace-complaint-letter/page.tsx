import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { workplaceComplaintTemplate } from "@/data/complaintTemplate/workplaceComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "कार्यस्थल शिकायत पत्र – Workplace Complaint Letter Hindi | AavedanPatra",
  description:
   "ऑफिस में काम, व्यवहार या सुविधा संबंधी शिकायत के लिए Workplace Complaint Letter। तैयार हिंदी नमूना और HR को शिकायत लिखने की गाइड।",    
  path: "/letters/workplace-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={workplaceComplaintTemplate} />
    </>
  );
}
