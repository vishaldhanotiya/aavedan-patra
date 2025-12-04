import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import {
  bonafideCertificatesData,
  characterCertificatesData,
  experienceCertificatesData,
  informalLetters,
  requestLetters,
} from "@/data/subcategories";
import { PropsType } from "@/data/type/type";

export default async function Page(props: PropsType) {
  const { type } = await props.params;

  if (type === "experience") {
    return <UniversalSubcategoryPage data={experienceCertificatesData} />;
  } else if (type === "bonafide") {
    return <UniversalSubcategoryPage data={bonafideCertificatesData} />;
  } else if (type === "character") {
    return <UniversalSubcategoryPage data={characterCertificatesData} />;
  } else if (type === "internship") {
    return <UniversalSubcategoryPage data={informalLetters} />;
  } else if (type === "course") {
    return <UniversalSubcategoryPage data={requestLetters} />;
  } else if (type === "appreciation") {
    return <UniversalSubcategoryPage data={requestLetters} />;
  }
    return <UniversalSubcategoryPage data={experienceCertificatesData} />;
}
