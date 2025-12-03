import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { shortNoticeResignationTemplate } from "@/data/resignationTemplate/shortNoticeResignationTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={shortNoticeResignationTemplate}
      />
    </>
  );
}
