import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { needBasedScholarshipTemplate } from "@/data/scholarshipTemplate/needBasedScholarshipTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:  "ज़रूरत-आधारित छात्रवृत्ति आवेदन – Financial Aid Scholarship Hindi | AavedanPatra",
  description:
    "आर्थिक ज़रूरत के आधार पर Financial Aid / Need Based Scholarship Application। हिंदी प्रारूप – तैयार नमूना और छात्रवृत्ति आवेदन गाइड।",   
  path: "/applications/scholarship/financial-aid-scholarship-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={needBasedScholarshipTemplate} />
    </>
  );
}
