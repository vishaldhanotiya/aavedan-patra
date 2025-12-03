import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { officeAssistantApplicationData } from "@/data/officeAssistantApplicationData";
export const metadata = {
  title: "Application for office assistant | Aavedan Patra",
  description: "Learn more about our aavedan patra",
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
