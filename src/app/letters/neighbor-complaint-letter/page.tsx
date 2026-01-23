import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { neighborComplaintTemplate } from "@/data/complaintTemplate/neighborComplaintTemplate";
export const metadata = {
  title: "पड़ोसी शिकायत पत्र | आवेदन पत्र",
  description:
    "शोर या असुविधा संबंधी समस्याओं के लिए विनम्र और स्पष्ट पड़ोसी शिकायत पत्र के प्रारूप।",
};

export default function Page() {
  
  return (
    <>
      <PillarTemplateDetailsPage
        data={neighborComplaintTemplate}
      />
    </>
  );
}
