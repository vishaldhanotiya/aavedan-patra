import { SubcategoryExample } from "@/components/SubcategoryExample";
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import {
  bonafideCertificatesData,
  characterCertificatesData,
  experienceCertificatesData,
  informalLettersData,
  requestLettersData,
} from "@/data/subcategories";

export default async function Page(props: any) {
  const { type } = await props.params;

  if (type === "experience") {
    return <UniversalSubcategoryPage data={experienceCertificatesData} />;
  } else if (type === "bonafide") {
    return <UniversalSubcategoryPage data={bonafideCertificatesData} />;
  } else if (type === "character") {
    return <UniversalSubcategoryPage data={characterCertificatesData} />;
  } else if (type === "internship") {
    return <UniversalSubcategoryPage data={informalLettersData} />;
  } else if (type === "course") {
    return <UniversalSubcategoryPage data={requestLettersData} />;
  } else if (type === "appreciation") {
    return <UniversalSubcategoryPage data={requestLettersData} />;
  }
  return <SubcategoryExample />;
}
