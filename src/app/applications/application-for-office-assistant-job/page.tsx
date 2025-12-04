import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { officeAssistantApplicationData } from "@/data/officeAssistantApplicationData";
export const metadata = {
  title: "Application for Office Assistant Job | Aavedan Patra",
  description: "Clean and simple application letter for office assistant job roles with professional wording.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={officeAssistantApplicationData}
      />
    </>
  );
}
