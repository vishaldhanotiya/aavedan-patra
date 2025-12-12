
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { teacherJobApplicationTemplate } from "@/data/jobTemplate/teacherJobApplicationTemplate";

export const metadata = {
  title: "Application for Teacher Job | Aavedan Patra",
  description: "Formal job application format for school teacher positions with sample examples.",
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
