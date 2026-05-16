import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { migraineSickLeave } from "@/data/leaveTemplate/migraineSickLeave";
import { generateMetadata } from "@/metadata/metadata";
export const metadata = generateMetadata({
  title: "माइग्रेन सिक लीव आवेदन – सिरदर्द के लिए छुट्टी",
  description:
    "गंभीर माइग्रेन या तेज सिरदर्द के कारण कार्यालय/स्कूल से छुट्टी के लिए आवेदन प्रारूप। डॉक्टर सलाह शामिल करें।",
  path: "/applications/leave/migraine-sick-leave-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={migraineSickLeave} />
    </>
  );
}
