
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { teacherJobApplicationTemplate } from "@/data/teacherJobApplicationTemplate";

export const metadata = {
  title: "Application for teacher job | Aavedan Patra",
  description: "Learn more about our aavedan patra",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={teacherJobApplicationTemplate}
      />
    </>
  );
}
