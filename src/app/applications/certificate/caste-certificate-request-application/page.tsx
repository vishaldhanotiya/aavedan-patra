import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casteCertificateTemplate } from "@/data/certificateTemplate/casteCertificateTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "जाति प्रमाणपत्र आवेदन – राजस्व अधिकारी को पत्र",
  description:
    "तहसीलदार / एसडीएम से जाति प्रमाणपत्र प्राप्त करने के लिए आवेदन प्रारूप। सरकारी योजनाओं, छात्रवृत्ति, नौकरी के लिए।",
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
