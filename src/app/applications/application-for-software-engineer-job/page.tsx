import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { softwareJobApplicationTemplate } from "@/data/jobTemplate/softwareJobApplicationTemplate";
export const metadata = {
  title: "Application for Software Engineer Job | Aavedan Patra",
  description: "Professional job application letter format for software engineer roles.",
}
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={softwareJobApplicationTemplate}
      />
    </>
  );
}
