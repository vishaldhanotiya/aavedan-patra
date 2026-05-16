import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { permissionRequestTemplate } from "@/data/requestTemplate/permissionRequestTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "अनुमति अनुरोध पत्र – इवेंट, कार्यक्रम, प्रोजेक्ट",
  description:
    "स्कूल, कॉलेज, ऑफिस या अन्य कार्यों के लिए अनुमति माँगने का सही अनुमति पत्र प्रारूप, तैयार नमूना और विनम्र लिखने का तरीका यहाँ विस्तार से देखें।",
  path: "/letters/request/permission-request-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={permissionRequestTemplate}
      />
    </>
  );
}
