import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { productComplaintTemplate } from "@/data/complaintTemplate/productComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "उत्पाद शिकायत पत्र – खराब/डैमेज सामान रिफंड प्रारूप",
  description: "Amazon, Flipkart खराब उत्पाद के लिए रिफंड/रिप्लेसमेंट शिकायत पत्र। हिंदी में सही प्रारूप, तैयार नमूने व उदाहरण – 100% प्रभावी।",
  path: "/letters/product-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={productComplaintTemplate} />
    </>
  );
}
