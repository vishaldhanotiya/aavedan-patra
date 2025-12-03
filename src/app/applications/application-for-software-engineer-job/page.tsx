import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { softwareJobApplicationTemplate } from "@/data/subcategories/softwareJobApplicationTemplate";
export const metadata = {
  title: "Application for software engineer | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={softwareJobApplicationTemplate}
      />
    </>
  );
}
