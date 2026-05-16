import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { shortNoticeResignationTemplate } from "@/data/resignationTemplate/shortNoticeResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "कम सूचना त्यागपत्र – 1 सप्ताह या उससे कम नोटिस",
  description:
    "कम समय (उदा. 3-5 दिन) में नौकरी छोड़ने पर माफी सहित त्यागपत्र प्रारूप। अप्रत्याशित स्थिति का स्पष्ट उल्लेख करें।",
  path: "/letters/resignation/short-notice-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={shortNoticeResignationTemplate}
      />
    </>
  );
}
