import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meritScholarshipTemplate } from "@/data/scholarshipTemplate/meritScholarshipTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:"मेरिट छात्रवृत्ति आवेदन – Merit Based Scholarship Application Hindi | AavedanPatra",
  description:
    "शैक्षणिक उत्कृष्टता पर आधारित Merit Based Scholarship Application। हिंदी प्रारूप – तैयार नमूना, दस्तावेज़ सूची और मेरिट स्कॉलरशिप गाइड।", 
  path: "/applications/scholarship/merit-based-scholarship-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={meritScholarshipTemplate} />
    </>
  );
}
