import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { onlineShoppingComplaintTemplate } from "@/data/complaintTemplate/onlineShoppingComplaintTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={onlineShoppingComplaintTemplate}
      />
    </>
  );
}
