import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meetingRequestTemplate } from "@/data/requestTemplate/meetingRequestTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={meetingRequestTemplate}
      />
    </>
  );
}
