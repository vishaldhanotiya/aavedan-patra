import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { refundRequestTemplate } from "@/data/complaintTemplate/refundRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "रिफंड अनुरोध पत्र – Refund Request Letter Hindi | AavedanPatra",
  description:
    "उत्पाद या सेवा का रिफंड माँगने के लिए Refund Request Letter। प्रभावी हिंदी प्रारूप, तैयार नमूना और रिफंड पाने की पूरी गाइड।",
  path: "/letters/refund-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={refundRequestTemplate} />
    </>
  );
}
