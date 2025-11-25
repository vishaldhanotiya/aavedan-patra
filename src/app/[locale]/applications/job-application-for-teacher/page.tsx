"use client";
import { DynamicTemplateDetailsPage } from "@/components/DynamicTemplateDetailsPage";
import { PillarTemplateDetailsPage } from "@/components/PillarTemplateDetailsPage";
import { teacherJobApplicationPillarWithEditor } from "@/data/samplePillarTemplateWithEditor";
import { jobApplicationTeacherTemplate } from "@/data/sampleTemplateDetails";

export default function Page() {
  return (
    <>
    <PillarTemplateDetailsPage   data={teacherJobApplicationPillarWithEditor}
            language="en"/>
      {/* <DynamicTemplateDetailsPage
        data={jobApplicationTeacherTemplate}
        language="en"
      /> */}
    </>
  );
}
