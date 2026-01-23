import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { productComplaintTemplate } from "@/data/complaintTemplate/productComplaintTemplate";
export const metadata = {
  title: "उत्पाद शिकायत पत्र | आवेदन पत्र",
  description:
    "रिफंड या रिप्लेसमेंट के लिए प्रभावी उत्पाद शिकायत पत्र कैसे लिखें, यहाँ जानें।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={productComplaintTemplate}
      />
    </>
  );
}
