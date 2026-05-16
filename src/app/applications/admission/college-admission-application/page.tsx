import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { collegeAdmission } from "@/data/admissionTemplate/collegeAdmission/collegeAdmission";
import {  } from "@/metadata/metadata";
export const metadata = ({
  title: "कॉलेज एडमिशन आवेदन पत्र – College Admission Hindi",
  description:
    "स्नातक/पोस्टग्रेजुएशन कॉर्स में कॉलेज प्रवेश हेतु हिंदी आवेदन। मार्कशीट, TC सूची, तैयार नमूना और औपचारिक एडमिशन लेटर फॉर्मेट।",
  path: "/applications/admission/college-admission-application",
});
export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage singleTemplate data={collegeAdmission} />
    </>
  );
}
