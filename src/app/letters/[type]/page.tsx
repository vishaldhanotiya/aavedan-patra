import { SubcategoryExample } from "@/components/SubcategoryExample";
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";

import {
  complaintLettersData,
  formalLettersData,
  informalLettersData,
  invitationLettersData,
  requestLettersData,
  resignationLettersData,
} from "@/data/subcategories";

export default async function Page(props: any) {
  const { type } = await props.params;
  if (type === "formal") {
    return <UniversalSubcategoryPage data={formalLettersData} />;
  } else if (type === "informal") {
    return <UniversalSubcategoryPage data={informalLettersData} />;
  } else if (type === "request") {
    return <UniversalSubcategoryPage data={requestLettersData} />;
  } else if (type === "complaint") {
    return <UniversalSubcategoryPage data={complaintLettersData} />;
  } else if (type === "resignation") {
    return <UniversalSubcategoryPage data={resignationLettersData} />;
  } else if (type === "invitation") {
    return <UniversalSubcategoryPage data={invitationLettersData} />;
  }
  return <SubcategoryExample />;
}
