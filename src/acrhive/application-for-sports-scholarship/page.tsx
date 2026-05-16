import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { sportsScholarshipTemplate } from "@/data/scholarshipTemplate/sportsScholarshipTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "खेल छात्रवृत्ति आवेदन पत्र – Sports Scholarship Application Hindi",  
  description:
    "खेल प्रतिभा के आधार पर Sports Scholarship Application। हिंदी प्रारूप – तैयार नमूना, दस्तावेज़ सूची और स्पोर्ट्स स्कॉलरशिप आवेदन गाइड।",
  path: "/applications/application-for-sports-scholarship",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={sportsScholarshipTemplate} />
    </>
  );
}
