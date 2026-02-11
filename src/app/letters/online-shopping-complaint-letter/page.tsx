import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { onlineShoppingComplaintTemplate } from "@/data/complaintTemplate/onlineShoppingComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
title:
  "ऑनलाइन शॉपिंग शिकायत पत्र – रिफंड हेतु प्रारूप व नमूना",
description:
  "खराब, डैमेज या गलत सामान, लेट डिलीवरी और रिफंड समस्याओं के लिए ऑनलाइन शॉपिंग शिकायत पत्र का सही प्रारूप, तैयार नमूना और लिखने का तरीका यहाँ विस्तार से देखें।",
  path: "/letters/online-shopping-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={onlineShoppingComplaintTemplate} />
    </>
  );
}
