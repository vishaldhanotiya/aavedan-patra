import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { experienceCertificateTemplate } from "@/data/certificateTemplate/experienceCertificateTemplate";
export const metadata = {
  title: "Application for Experience Certificate | Aavedan Patra",
  description: "Proper format to request an experience certificate from employer with sample letter.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={experienceCertificateTemplate}
      />
    </>
  );
}
