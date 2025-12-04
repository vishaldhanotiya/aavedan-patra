import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { donationRequestTemplate } from "@/data/requestTemplate/donationRequestTemplate";
export const metadata = {
  title: "Donation Request Letter | Aavedan Patra",
  description: "Donation request letter samples for charity, NGO, and fundraising purposes.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={donationRequestTemplate}
      />
    </>
  );
}
