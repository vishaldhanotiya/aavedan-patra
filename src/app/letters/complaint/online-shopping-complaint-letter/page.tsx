import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { onlineShoppingComplaintTemplate } from "@/data/complaintTemplate/onlineShoppingComplaintTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "ऑनलाइन शॉपिंग शिकायत पत्र – रिफंड हेतु प्रारूप व नमूना",
  description:
    "फ्लिपकार्ट, अमेजॉन, मिंत्रा आदि से गलत, क्षतिग्रस्त या दोषपूर्ण प्रोडक्ट मिलने पर शिकायत पत्र प्रारूप।",
  path: "/letters/complaint/online-shopping-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={onlineShoppingComplaintTemplate}
      />
    </>
  );
}
