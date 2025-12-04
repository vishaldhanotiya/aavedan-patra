import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { permissionRequestTemplate } from "@/data/requestTemplate/permissionRequestTemplate";
export const metadata = {
  title: "Permission Request Letter | Aavedan Patra",
  description: "Write a clear and polite permission request letter with easy templates and examples.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={permissionRequestTemplate}
      />
    </>
  );
}
