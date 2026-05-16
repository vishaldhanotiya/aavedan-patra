import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { needBasedScholarshipTemplate } from "@/data/scholarshipTemplate/needBasedScholarshipTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "ज़रूरत-आधारित छात्रवृत्ति आवेदन – Need Based Scholarship Hindi",
  description:
    "आर्थिक ज़रूरत के आधार पर Need Based Scholarship Application। हिंदी प्रारूप – तैयार नमूना, दस्तावेज़ सूची और आवश्यकता-आधारित छात्रवृत्ति गाइड।",
  path: "/applications/application-for-need-based-scholarship",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={needBasedScholarshipTemplate} />
    </>
  );
}
