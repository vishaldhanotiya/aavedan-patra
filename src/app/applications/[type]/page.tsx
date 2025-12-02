
import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { jobCategory } from "@/data/category/jobCategory";
import { leaveCategory } from "@/data/category/leaveCategory";
import { admissionApplications } from "@/data/subcategories/admissionApplications";
import { certificateRequest } from "@/data/subcategories/certificateRequest";
import { loanApplications } from "@/data/subcategories/loanApplications";
import { scholarshipApplications } from "@/data/subcategories/scholarshipApplications";

export default async function Page({ params }: any) {
  const { type } =  await params; // ❗ No await needed
  if (type === "job") {
    return <UniversalSubcategoryPage data={jobCategory}  />;
  } else if (type === "leave") {
    return <UniversalSubcategoryPage data={leaveCategory} />;
  } else if (type === "certificate-request") {
    return <UniversalSubcategoryPage data={certificateRequest} />;
  } else if (type === "loan") {
    return <UniversalSubcategoryPage data={loanApplications} />;
  } else if (type === "admission") {
    return <UniversalSubcategoryPage data={admissionApplications} />;
  } else if (type === "scholarship") {
    return <UniversalSubcategoryPage data={scholarshipApplications} />;
  }

  return <UniversalSubcategoryPage data={jobCategory} />;
}
