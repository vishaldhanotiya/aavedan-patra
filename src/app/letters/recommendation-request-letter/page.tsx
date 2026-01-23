import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { recommendationRequestTemplate } from "@/data/requestTemplate/recommendationRequestTemplate";
export const metadata = {
  title: "सिफारिश पत्र हेतु अनुरोध | आवेदन पत्र",
  description:
    "विनम्र तरीके से सिफारिश पत्र मांगने के लिए तैयार टेम्पलेट और उदाहरण।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={recommendationRequestTemplate}
      />
    </>
  );
}
