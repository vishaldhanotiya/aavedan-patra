import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { researchGrantTemplate } from "@/data/scholarshipTemplate/researchGrantTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title:
    "रिसर्च ग्रांट आवेदन – PhD, पोस्ट-डॉक्टोरल शोध हेतु",
  description:
    "विश्वविद्यालय या शोध संस्थान से शोध अनुदान (ग्रांट) के लिए आवेदन प्रारूप। शोध प्रस्ताव, मार्गदर्शक हस्ताक्षर और बजट विवरण शामिल करें।",
  path: "/applications/scholarship/research-grant-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={researchGrantTemplate} />
    </>
  );
}
