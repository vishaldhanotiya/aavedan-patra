import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { researchGrantTemplate } from "@/data/scholarshipTemplate/researchGrantTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "रिसर्च ग्रांट आवेदन पत्र – Research Grant Application Hindi | AavedanPatra",
  description:
    "शैक्षणिक/वैज्ञानिक परियोजना के लिए Research Grant Application। प्रोफेशनल हिंदी प्रारूप – तैयार नमूना और शोधकर्ताओं के लिए लिखने की गाइड।",
  path: "/applications/application-for-research-grant",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={researchGrantTemplate} />
    </>
  );
}
