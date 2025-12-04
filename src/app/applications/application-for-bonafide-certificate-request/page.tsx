import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bonafideCertificateTemplate } from "@/data/certificateTemplate/bonafideCertificateTemplate";
export const metadata = {
  title: "Application for Bonafide Certificate | Aavedan Patra",
  description: "A clear and simple application format for requesting a bonafide certificate from school, college, or office.",
};
export default function Page() {

  return (
    <>
      <PillarTemplateDetailsPage
        data={bonafideCertificateTemplate}
      />
    </>
  );
}
