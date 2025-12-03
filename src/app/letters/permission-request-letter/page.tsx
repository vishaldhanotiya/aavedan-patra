import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { permissionRequestTemplate } from "@/data/requestTemplate/permissionRequestTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={permissionRequestTemplate}
      />
    </>
  );
}
