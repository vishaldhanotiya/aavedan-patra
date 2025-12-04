import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { researchGrantTemplate } from "@/data/scholarshipTemplate/researchGrantTemplate";
export const metadata = {
  title: "Application for Research Grant | Aavedan Patra",
  description: "Professional research grant application letter for academic or scientific projects.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={researchGrantTemplate}
      />
    </>
  );
}
