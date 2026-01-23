import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { homeLoanTemplate } from "@/data/loanTemplate/homeLoanTemplate";
export const metadata = {
  title: "होम लोन के लिए आवेदन पत्र | आवेदन पत्र",
  description:
    "बैंक या ऋणदाता से होम लोन के लिए आवेदन करने का सही प्रारूप और उदाहरण यहाँ देखें।",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={homeLoanTemplate}
      />
    </>
  );
}
