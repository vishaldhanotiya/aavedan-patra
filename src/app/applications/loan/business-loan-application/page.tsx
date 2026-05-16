import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { businessLoanTemplate } from "@/data/loanTemplate/businessLoanTemplate";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title: "बिजनेस लोन आवेदन – व्यवसाय हेतु ऋण का प्रारूप",
  description:
    "नया व्यवसाय शुरू करने या मौजूदा व्यवसाय बढ़ाने के लिए बैंक/एनबीएफसी को लिखें बिजनेस लोन आवेदन पत्र। प्रोजेक्ट रिपोर्ट संलग्न करने के निर्देश।",
  path: "/applications/loan/business-loan-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={businessLoanTemplate} />
    </>
  );
}
