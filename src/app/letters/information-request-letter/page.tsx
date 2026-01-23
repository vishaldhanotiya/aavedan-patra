import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { informationRequestTemplate } from "@/data/requestTemplate/informationRequestTemplate";
export const metadata = {
  title: "जानकारी हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "स्कूल, कार्यालय और आधिकारिक उपयोग के लिए विनम्र जानकारी अनुरोध पत्र के नमूने।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={informationRequestTemplate}
      />
    </>
  );
}
