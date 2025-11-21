import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import {
  jobApplicationsData,
  leaveApplicationsData,
} from "@/data/allSubcategoryData";
import {
  certificateRequestData,
  loanApplicationsData,
  admissionApplicationsData,
  scholarshipApplicationsData,
} from "@/data/subcategories";

export default async function Page({ params }: any) {
  const { type } = await params; // ❗ No await needed
  if (type === "job") {
    return <UniversalSubcategoryPage data={jobApplicationsData} />;
  } else if (type === "leave") {
    return <UniversalSubcategoryPage data={leaveApplicationsData} />;
  } else if (type === "certificate") {
    return <UniversalSubcategoryPage data={certificateRequestData} />;
  } else if (type === "loan") {
    return <UniversalSubcategoryPage data={loanApplicationsData} />;
  } else if (type === "admission") {
    return <UniversalSubcategoryPage data={admissionApplicationsData} />;
  } else if (type === "scholarship") {
    return <UniversalSubcategoryPage data={scholarshipApplicationsData} />;
  }

  return <UniversalSubcategoryPage data={jobApplicationsData} />;
}
