import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { universityAdmissionTemplate } from "@/data/admissionTemplate/universityAdmissionTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={universityAdmissionTemplate}
      />
    </>
  );
}
