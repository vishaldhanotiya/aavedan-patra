import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { refundRequestTemplate } from "@/data/complaintTemplate/refundRequestTemplate";
export const metadata = {
  title: "रिफंड हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "उत्पाद या सेवा के रिफंड के लिए सरल आवेदन पत्र प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={refundRequestTemplate}
      />
    </>
  );
}
