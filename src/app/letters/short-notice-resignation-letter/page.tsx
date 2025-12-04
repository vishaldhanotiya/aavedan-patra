import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { shortNoticeResignationTemplate } from "@/data/resignationTemplate/shortNoticeResignationTemplate";
export const metadata = {
  title: "Short Notice Resignation Letter | Aavedan Patra",
  description: "Professional short notice resignation letter examples for urgent situations.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={shortNoticeResignationTemplate}
      />
    </>
  );
}
