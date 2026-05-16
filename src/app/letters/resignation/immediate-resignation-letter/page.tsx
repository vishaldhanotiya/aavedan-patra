import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { immediateResignationTemplate } from "@/data/resignationTemplate/immediateResignationTemplate";
import { createMetadata } from "@/metadata/metadata";
export const metadata = createMetadata({
  title: "तुरंत प्रभाव त्यागपत्र – सूचना अवधि के बिना छोड़ना",
  description:
    "बिना नोटिस पीरियड (तुरंत) नौकरी छोड़ने के लिए त्यागपत्र प्रारूप। व्यक्तिगत या मेडिकल आपात स्थिति में उपयोगी।",
  path: "/letters/resignation/immediate-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={immediateResignationTemplate}
      />
    </>
  );
}
