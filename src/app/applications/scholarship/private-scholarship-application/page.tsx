import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { privateScholarshipTemplate } from "@/data/scholarshipTemplate/privateScholarshipTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "प्राइवेट छात्रवृत्ति आवेदन – Private Scholarship Application Hindi",
  description:
   "निजी संस्थाओं या फाउंडेशन से Private Scholarship Application। हिंदी प्रारूप – तैयार नमूना और प्राइवेट स्कॉलरशिप आवेदन लिखने की गाइड।",
  path: "/applications/scholarship/private-scholarship-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={privateScholarshipTemplate} />
    </>
  );
}
