import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meetingRequestTemplate } from "@/data/requestTemplate/meetingRequestTemplate";
export const metadata = {
  title: "Meeting Request Letter | Aavedan Patra",
  description: "Professional meeting request letter templates for appointments and discussions.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={meetingRequestTemplate}
      />
    </>
  );
}
