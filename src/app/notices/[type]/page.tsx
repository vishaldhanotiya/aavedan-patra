import { SubcategoryExample } from "@/components/SubcategoryExample";
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import {
  eventNoticesData,
  meetingReportsData,
  officeNoticesData,
  policyNoticesData,
  projectReportsData,
  schoolNoticesData,
} from "@/data/subcategories";
export const runtime = "edge";

export default async function Page(props: any) {
  const { type } = await props.params;
  if (type === "school") {
    return <UniversalSubcategoryPage data={schoolNoticesData} />;
  } else if (type === "office") {
    return <UniversalSubcategoryPage data={officeNoticesData} />;
  } else if (type === "projects") {
    return <UniversalSubcategoryPage data={projectReportsData} />;
  } else if (type === "meetings") {
    return <UniversalSubcategoryPage data={meetingReportsData} />;
  } else if (type === "policy") {
    return <UniversalSubcategoryPage data={policyNoticesData} />;
  } else if (type === "events") {
    return <UniversalSubcategoryPage data={eventNoticesData} />;
  }
  return <SubcategoryExample />;
}
