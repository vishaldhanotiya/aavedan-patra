import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casteCertificateTemplate } from "@/data/certificateTemplate/casteCertificateTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "जाति प्रमाण पत्र आवेदन पत्र – Caste Certificate Application Hindi",
  description:
    "सरकारी कार्यालय से Caste Certificate के लिए हिंदी आवेदन पत्र। तैयार नमूना, ज़रूरी दस्तावेज़ और जाति प्रमाण पत्र आवेदन लिखने की गाइड।",
  path: "/applications/application-for-caste-certificate-request",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={casteCertificateTemplate} />
    </>
  );
}
