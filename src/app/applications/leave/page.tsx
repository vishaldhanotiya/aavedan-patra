import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { leaveCategory } from "@/data/category/leaveCategory";
import { createMetadata } from "@/metadata/metadata";

export const metadata = createMetadata({
  title:
    "छुट्टी आवेदन पत्र हिंदी में – Leave Application Format - AavedanPatra",
  description:
    "स्कूल, कॉलेज और ऑफिस के लिए बीमारी, यात्रा, पर्सनल और तत्काल छुट्टी आवेदन पत्र। सरल हिंदी फॉर्मेट, तैयार नमूने",
  path: "/applications/leave",
  type: "website",
});

export default async function Page() {
  return <UniversalSubcategoryPage data={leaveCategory} />;
}
