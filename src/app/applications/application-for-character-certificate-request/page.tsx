import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { characterCertificateTemplate } from "@/data/certificateTemplate/characterCertificateTemplate";
export const metadata = {
   title: "Application for Character Certificate | Aavedan Patra",
  description: "Easy format to request a character certificate from school, college, or employer with sample letter.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={characterCertificateTemplate}
      />
    </>
  );
}
