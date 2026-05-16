import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { refundRequestTemplate } from "@/data/complaintTemplate/refundRequestTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "रिफंड अनुरोध पत्र – रिफंड मांगने का प्रारूप",
  description:
    "किसी प्रोडक्ट, सेवा, टिकट, या कोर्स फीस का रिफंड मांगने के लिए कंपनी या संस्थान को लिखें।",
  path: "/letters/request/refund-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={refundRequestTemplate} />
    </>
  );
}
