import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { researchGrantTemplate } from "@/data/scholarshipTemplate/researchGrantTemplate";
export const metadata = {
  title: "Application for research grant | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
