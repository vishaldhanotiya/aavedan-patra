import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casteCertificateTemplate } from "@/data/certificateTemplate/casteCertificateTemplate";
export const metadata = {
  title: "Application for Casual Leave | Aavedan Patra",
  description: "Simple and polite casual leave application letter suitable for office, school, or personal use.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={casteCertificateTemplate}
      />
    </>
  );
}
