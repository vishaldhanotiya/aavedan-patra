import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { experienceCertificateTemplate } from "@/data/certificateTemplate/experienceCertificateTemplate";
export const metadata = {
  title: "Application for experience certificate | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
