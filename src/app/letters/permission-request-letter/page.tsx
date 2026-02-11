import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { permissionRequestTemplate } from "@/data/requestTemplate/permissionRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
title:
  "अनुमति पत्र – स्कूल व ऑफिस हेतु प्रारूप व नमूना",
description:
  "स्कूल, कॉलेज, ऑफिस या अन्य कार्यों के लिए अनुमति माँगने का सही अनुमति पत्र प्रारूप, तैयार नमूना और विनम्र लिखने का तरीका यहाँ विस्तार से देखें।",
path: "/letters/permission-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={permissionRequestTemplate} />
    </>
  );
}
