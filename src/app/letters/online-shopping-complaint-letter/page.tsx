import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { onlineShoppingComplaintTemplate } from "@/data/complaintTemplate/onlineShoppingComplaintTemplate";
export const metadata = {
  title: "ऑनलाइन शॉपिंग शिकायत पत्र | आवेदन पत्र",
  description:
    "खराब उत्पाद, देर से डिलीवरी या रिफंड से जुड़ी समस्याओं के लिए शिकायत पत्र के नमूने।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={onlineShoppingComplaintTemplate}
      />
    </>
  );
}
