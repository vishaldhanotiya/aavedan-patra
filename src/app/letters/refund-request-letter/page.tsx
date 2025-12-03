import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { refundRequestTemplate } from "@/data/complaintTemplate/refundRequestTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={refundRequestTemplate}
      />
    </>
  );
}
