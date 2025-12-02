import { SubcategoryExample } from "@/components/SubcategoryExample";
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import {
  atsFriendlyResumesData,
  coverLettersData,
  executiveResumesData,
  fresherResumesData,
  industryResumesData,
  professionalResumesData,
} from "@/data/subcategories";
import { PropsType } from "@/data/type/type";

export default async function Page(props: PropsType) {
  const { type } = await props.params;
  if (type === "professional") {
    return <UniversalSubcategoryPage data={professionalResumesData} />;
  } else if (type === "fresher") {
    return <UniversalSubcategoryPage data={fresherResumesData} />;
  } else if (type === "cover-letters") {
    return <UniversalSubcategoryPage data={coverLettersData} />;
  } else if (type === "ats") {
    return <UniversalSubcategoryPage data={atsFriendlyResumesData} />;
  } else if (type === "executive") {
    return <UniversalSubcategoryPage data={executiveResumesData} />;
  } else if (type === "industry") {
    return <UniversalSubcategoryPage data={industryResumesData} />;
  }
  return <SubcategoryExample />;
}
