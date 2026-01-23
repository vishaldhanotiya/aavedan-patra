import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sponsorshipRequestTemplate } from "@/data/requestTemplate/sponsorshipRequestTemplate";
export const metadata = {
  title: "स्पॉन्सरशिप हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "प्रारूप, नमूने और उपयोगी सुझावों के साथ प्रभावी स्पॉन्सरशिप अनुरोध पत्र लिखने की पूरी जानकारी।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={sponsorshipRequestTemplate}
      />
    </>
  );
}
