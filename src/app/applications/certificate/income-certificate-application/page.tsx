import { PillarTemplatePage } from "@/components/PillarTemplatePage";
import { incomeCertificateTemplate } from "@/data/certificateTemplate/incomeCertificateTemplate";
import { createMetadata } from "@/metadata/metadata";
const path = "/applications/certificate/income-certificate-application";
export const metadata = createMetadata({
  title:
    "आय प्रमाण पत्र आवेदन – Income Certificate Application Hindi",
  description:
    "तहसीलदार / राजस्व अधिकारी से आय प्रमाणपत्र प्राप्त करने के लिए आवेदन प्रारूप। छात्रवृत्ति, सब्सिडी, गरीबी रेखा से नीचे (बीपीएल) योजनाओं के लिए।",
  path,
});
export default function Page() {
  return (
    <PillarTemplatePage
      path={path}
      data={incomeCertificateTemplate}
      singleTemplate
    />
  );
}
