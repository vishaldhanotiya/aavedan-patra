
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { bankJobApplicationTemplate } from "@/data/jobTemplate/bankJobApplicationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "बैंक नौकरी आवेदन पत्र – Bank Job Application Hindi",
  description:
     "सरकारी/प्राइवेट बैंक में नौकरी के लिए हिंदी आवेदन पत्र। फ्रेशर और अनुभवी दोनों के लिए तैयार नमूना, सही फॉर्मेट और Bank Job Application गाइड।",
  path: "/applications/application-for-bank-job",
});
export default function Page() {  
  return (
    <>
      <PillarTemplateDetailsPage
        data={bankJobApplicationTemplate}
      />
    </>
  );
}

