"use client";
import { DynamicTemplateDetailsPage } from "@/components/DynamicTemplateDetailsPage";
import { jobApplicationTeacherTemplate } from "@/data/sampleTemplateDetails";

export default function Page() {
  return (
    <>
      <DynamicTemplateDetailsPage
        data={jobApplicationTeacherTemplate}
        language="en"
      />
    </>
  );
}
