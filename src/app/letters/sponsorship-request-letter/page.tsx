import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sponsorshipRequestTemplate } from "@/data/requestTemplate/sponsorshipRequestTemplate";
export const metadata = {
  title: "Sponsorship Request Letter | Aavedan Patra",
  description: "A complete guide to writing an effective sponsorship request letter with format, samples, and helpful tips.",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={sponsorshipRequestTemplate}
      />
    </>
  );
}
