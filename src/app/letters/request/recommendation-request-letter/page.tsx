import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { recommendationRequestTemplate } from "@/data/requestTemplate/recommendationRequestTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "सिफारिश पत्र अनुरोध – प्रोफेसर, बॉस से सिफारिश",
  description:
    "कॉलेज एडमिशन, नौकरी या वीज़ा के लिए अपने प्रोफेसर या पूर्व बॉस से सिफारिश (रेकमेंडेशन) पत्र लिखने का अनुरोध।",
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
