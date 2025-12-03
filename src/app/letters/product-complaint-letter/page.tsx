import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { productComplaintTemplate } from "@/data/complaintTemplate/productComplaintTemplate";

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={productComplaintTemplate}
      />
    </>
  );
}
