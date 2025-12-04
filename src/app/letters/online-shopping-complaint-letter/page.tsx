import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { onlineShoppingComplaintTemplate } from "@/data/complaintTemplate/onlineShoppingComplaintTemplate";
export const metadata = {
  title: "Online Shopping Complaint Letter | Aavedan Patra",
  description: "Complaint letter templates for damaged products, late delivery, or refund issues.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={onlineShoppingComplaintTemplate}
      />
    </>
  );
}
