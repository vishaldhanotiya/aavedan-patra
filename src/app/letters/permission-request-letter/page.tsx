import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { permissionRequestTemplate } from "@/data/requestTemplate/permissionRequestTemplate";
export const metadata = {
  title: "अनुमति हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "सरल प्रारूप और उदाहरणों के साथ स्पष्ट व विनम्र अनुमति अनुरोध पत्र लिखें।",
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
