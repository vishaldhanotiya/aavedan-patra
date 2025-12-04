import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { refundRequestTemplate } from "@/data/complaintTemplate/refundRequestTemplate";
export const metadata = {
  title: "Refund Request Letter | Aavedan Patra",
  description: "Simple refund request letter formats for product or service refunds.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={refundRequestTemplate}
      />
    </>
  );
}
