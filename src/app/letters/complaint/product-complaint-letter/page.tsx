import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { productComplaintTemplate } from "@/data/complaintTemplate/productComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "उत्पाद शिकायत पत्र – खराब/डैमेज सामान रिफंड प्रारूप",
  description:
    "कंपनी को लिखें जब खरीदा हुआ उत्पाद (मोबाइल, एसी, फर्नीचर) खराब हो या उसमें कोई दोष हो। बिल और वारंटी नंबर संलग्न करें।",
  path: "/letters/complaint/product-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        singleTemplate
        data={productComplaintTemplate}
      />
    </>
  );
}
