import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { permissionRequestTemplate } from "@/data/requestTemplate/permissionRequestTemplate";
export const metadata = {
  title: "अनुमति हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "अनुमति हेतु अनुरोध पत्र कैसे लिखें, इसकी पूरी जानकारी यहाँ मिलेगी। इस पेज पर स्कूल, कॉलेज, ऑफिस या अन्य कार्यों के लिए अनुमति माँगने का सही आवेदन पत्र प्रारूप, तैयार नमूने और लिखने के आसान व विनम्र तरीके दिए गए हैं, जिससे आपका अनुरोध स्पष्ट और आसानी से स्वीकार हो सके।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={permissionRequestTemplate}
      />
    </>
  );
}
