import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { informationRequestTemplate } from "@/data/requestTemplate/informationRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "सूचना अनुरोध पत्र – आरटीआई या सामान्य जानकारी",
  description:
    "सरकारी या निजी संस्थान से किसी विशेष जानकारी (आरटीआई या सामान्य) के लिए अनुरोध पत्र प्रारूप।",
  path: "/letters/request/information-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={informationRequestTemplate}
      />
    </>
  );
}
