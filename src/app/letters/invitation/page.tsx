import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { invitationLetters } from "@/data/subcategories";
import { createMetadata } from "@/metadata/metadata";

export const metadata = createMetadata({
  title: "निमंत्रण पत्र – शादी, जन्मदिन, कार्यक्रम प्रारूप",
  description:
    "विवाह, जन्मदिन, सेमिनार, वार्षिकोत्सव के लिए सुंदर हिंदी निमंत्रण पत्र प्रारूप व डिज़ाइन नमूने।",
  path: "/letters/invitation",
  type: "website",
});

export default async function Page() {
  return <UniversalSubcategoryPage data={invitationLetters} />;
}
