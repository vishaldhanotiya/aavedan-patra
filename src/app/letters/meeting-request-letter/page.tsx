import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { meetingRequestTemplate } from "@/data/requestTemplate/meetingRequestTemplate";
export const metadata = {
  title: "बैठक हेतु अनुरोध पत्र | आवेदन पत्र",
  description:
    "अपॉइंटमेंट और चर्चा के लिए प्रोफेशनल बैठक अनुरोध पत्र के प्रारूप।",
};
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={meetingRequestTemplate}
      />
    </>
  );
}
