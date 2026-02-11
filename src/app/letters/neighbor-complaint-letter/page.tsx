import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { neighborComplaintTemplate } from "@/data/complaintTemplate/neighborComplaintTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
title:
  "पड़ोसी शिकायत पत्र – शोर, गंदगी हेतु नमूना व प्रारूप",
description:
  "शोर, गंदगी या अन्य असुविधा के लिए पड़ोसी को विनम्र तरीके से शिकायत करने हेतु सही पत्र प्रारूप, तैयार नमूना और लिखने का तरीका यहाँ विस्तार से देखें।",
  path: "/letters/neighbor-complaint-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={neighborComplaintTemplate} />
    </>
  );
}
