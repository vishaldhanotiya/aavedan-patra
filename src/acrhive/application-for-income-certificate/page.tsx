import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { incomeCertificateTemplate } from "@/data/certificateTemplate/incomeCertificateTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "आय प्रमाण पत्र आवेदन – Income Certificate Application Hindi",
  description:
    "तहसील/पंचायत से Income Certificate के लिए हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ और आय प्रमाण पत्र आवेदन लिखने की पूरी गाइड।",
  path: "/applications/application-for-income-certificate",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={incomeCertificateTemplate} />
    </>
  );
}
