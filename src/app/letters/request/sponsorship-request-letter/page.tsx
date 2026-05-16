import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sponsorshipRequestTemplate } from "@/data/requestTemplate/sponsorshipRequestTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "प्रायोजन अनुरोध पत्र – स्पोन्सरशिप के लिए",
  description:
    "अपने कार्यक्रम (खेल, सांस्कृतिक, सेमिनार) के लिए कंपनियों या संगठनों से आर्थिक प्रायोजन (स्पोन्सरशिप) मांगने का पत्र।",
  path: "/letters/request/sponsorship-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={sponsorshipRequestTemplate}
      />
    </>
  );
}
