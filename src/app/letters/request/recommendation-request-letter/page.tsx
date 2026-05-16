import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { recommendationRequestTemplate } from "@/data/requestTemplate/recommendationRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "सिफारिश पत्र अनुरोध – Recommendation Request Letter Hindi | AavedanPatra",
  description:
    "शिक्षक, मैनेजर या वरिष्ठ से Recommendation Letter माँगने का पत्र। विनम्र हिंदी प्रारूप, तैयार नमूना और लिखने की पूरी गाइड।",
  path: "/letters/request/recommendation-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={recommendationRequestTemplate}
      />
    </>
  );
}
