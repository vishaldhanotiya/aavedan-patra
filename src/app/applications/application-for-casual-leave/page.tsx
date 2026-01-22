import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { casualLeaveApplicationTemplate } from "@/data/leaveTemplate/casualLeaveApplicationTemplate";
export const metadata = {
  title: "Casual Leave Application Format | सही आवेदन पत्र फॉर्मेट",
  description:
    "Casual leave ke liye application kaise likhein? Office, school ya personal use ke liye simple, polite aur sahi casual leave application format yahan milega.",
};

export default function Page() {
  return (
    <>
      <PillarTemplateDetailsPage
        data={casualLeaveApplicationTemplate}
      />
    </>
  );
}
