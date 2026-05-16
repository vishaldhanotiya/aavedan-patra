import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { shortNoticeResignationTemplate } from "@/data/resignationTemplate/shortNoticeResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title:
    "शॉर्ट नोटिस इस्तीफा पत्र – Short Notice Resignation Letter Hindi | AavedanPatra",
  description:
    "कम नोटिस अवधि में नौकरी छोड़ने का पत्र। Short Notice Resignation Letter – तैयार हिंदी नमूना, सही फॉर्मेट और लिखने की गाइड।",
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
