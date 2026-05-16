import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { retirementResignationTemplate } from "@/data/resignationTemplate/retirementResignationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "सेवानिवृत्ति त्यागपत्र – उम्र पूरी होने पर",
  description:
    "आयु सीमा या स्वैच्छिक सेवानिवृत्ति पर कंपनी/सरकारी विभाग को सौंपने के लिए त्यागपत्र प्रारूप।",
  path: "/letters/resignation/retirement-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={retirementResignationTemplate}
      />
    </>
  );
}
