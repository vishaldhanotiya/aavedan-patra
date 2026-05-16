import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { informationRequestTemplate } from "@/data/requestTemplate/informationRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "जानकारी अनुरोध पत्र – Information Request Letter Hindi",
  description:
    "स्कूल, कार्यालय या सरकारी कार्यों के लिए Information Request Letter। तैयार हिंदी नमूना, सही फॉर्मेट और जानकारी माँगने की गाइड।",
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
