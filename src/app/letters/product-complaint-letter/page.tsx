import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { productComplaintTemplate } from "@/data/complaintTemplate/productComplaintTemplate";
export const metadata = {
  title: "Product Complaint Letter | Aavedan Patra",
  description: "Learn how to write an effective product complaint letter for refunds or replacements.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={productComplaintTemplate}
      />
    </>
  );
}
