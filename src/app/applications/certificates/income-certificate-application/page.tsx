import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { incomeCertificateTemplate } from "@/data/certificateTemplate/incomeCertificateTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "आय प्रमाण पत्र आवेदन – Income Certificate Application Hindi | AavedanPatra",
  description:
    "तहसील/पंचायत से Income Certificate के लिए हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ और आय प्रमाण पत्र आवेदन लिखने की पूरी गाइड।",  
  path: "/applications/certificates/income-certificate-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={incomeCertificateTemplate} />
    </>
  );
}
