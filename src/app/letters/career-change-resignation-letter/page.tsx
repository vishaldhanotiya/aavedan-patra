import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { careerChangeResignationTemplate } from "@/data/resignationTemplate/careerChangeResignationTemplate";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "करियर परिवर्तन इस्तीफा पत्र हिंदी में | प्रोफेशनल रिजाइनेशन लेटर प्रारूप",
  description:
    "करियर परिवर्तन या नई नौकरी के लिए इस्तीफा पत्र कैसे लिखें? इस पेज पर विनम्र, सकारात्मक और प्रोफेशनल इस्तीफा पत्र का पूरा हिंदी प्रारूप, कई तैयार नमूने और आसान टिप्स दिए गए हैं। अच्छे संबंध बनाए रखते हुए सही तरीके से रिजाइन करें।",
  path: "/letters/career-change-resignation-letter",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage data={careerChangeResignationTemplate} />
    </>
  );
}
