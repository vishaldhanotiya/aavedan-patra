import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { donationRequestTemplate } from "@/data/requestTemplate/donationRequestTemplate";
export const metadata = {
  title: "दान हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "चैरिटी, एनजीओ और फंडरेज़िंग के लिए दान अनुरोध पत्र के नमूने और प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={donationRequestTemplate}
      />
    </>
  );
}
