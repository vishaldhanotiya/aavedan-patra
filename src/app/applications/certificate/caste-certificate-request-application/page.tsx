import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casteCertificateTemplate } from "@/data/certificateTemplate/casteCertificateTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "जाति प्रमाण पत्र आवेदन – Caste Certificate Application Hindi | AavedanPatra",
  description:
    "तहसील/SDM कार्यालय से Caste Certificate के लिए हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ और जाति प्रमाण पत्र आवेदन लिखने की गाइड।",
  path: "/applications/certificate/caste-certificate-request-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={casteCertificateTemplate}
      />
    </>
  );
}
