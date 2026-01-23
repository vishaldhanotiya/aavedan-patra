import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casualLeaveApplicationTemplate } from "@/data/leaveTemplate/casualLeaveApplicationTemplate";
export const metadata = {
  title: "कैजुअल लीव आवेदन पत्र फॉर्मेट | सही आवेदन पत्र",
  description:
    "कैजुअल लीव के लिए आवेदन कैसे लिखें? ऑफिस, स्कूल या व्यक्तिगत उपयोग के लिए सरल, विनम्र और सही कैजुअल लीव आवेदन पत्र फॉर्मेट यहाँ मिलेगा।",
};


export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={casualLeaveApplicationTemplate}
      />
    </>
  );
}
