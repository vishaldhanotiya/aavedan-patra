import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { workplaceComplaintTemplate } from "@/data/complaintTemplate/workplaceComplaintTemplate";
export const metadata = {
  title: "कार्यस्थल शिकायत पत्र | आवेदन पत्र",
  description:
    "कार्यस्थल से जुड़ी समस्याओं के लिए शिकायत पत्र के प्रारूप और जानकारी।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={workplaceComplaintTemplate}
      />
    </>
  );
}
