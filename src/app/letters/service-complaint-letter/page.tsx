import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { serviceComplaintTemplate } from "@/data/complaintTemplate/serviceComplaintTemplate";
export const metadata = {
  title: "सेवा शिकायत पत्र | आवेदन पत्र",
  description:
    "खराब सेवा की शिकायत और कार्रवाई के अनुरोध हेतु प्रभावी शिकायत पत्र प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={serviceComplaintTemplate}
      />
    </>
  );
}
