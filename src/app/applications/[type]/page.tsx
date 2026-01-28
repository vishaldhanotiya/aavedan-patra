import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import { jobCategory } from "@/data/category/jobCategory";
import { leaveCategory } from "@/data/category/leaveCategory";
import { admissionApplications } from "@/data/subcategories/admissionApplications";
import { certificateRequest } from "@/data/subcategories/certificateRequest";
import { loanApplications } from "@/data/subcategories/loanApplications";
import { scholarshipApplications } from "@/data/subcategories/scholarshipApplications";
import { PropsType } from "@/data/type/type";
import { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/metadata/metadata";

// ---------------- META CONTENT ----------------

const metaMap: Record<string, { title: string; description: string }> = {
  job: {
    title: "नौकरी के लिए आवेदन पत्र | Job Application Format in Hindi",
    description:
      "सरकारी और प्राइवेट नौकरी के लिए आवेदन पत्र के हिंदी प्रारूप, तैयार नमूने और लिखने के आसान तरीके यहाँ उपलब्ध हैं। अभी देखें।",
  },

  leave: {
    title: "छुट्टी के लिए आवेदन पत्र | Leave Application in Hindi",
    description:
      "स्कूल, कॉलेज और ऑफिस हेतु छुट्टी आवेदन पत्र के सरल हिंदी फॉर्मेट, उदाहरण और सही लिखने का तरीका यहाँ पाएँ।",
  },

  "certificate-request": {
    title: "प्रमाण पत्र अनुरोध आवेदन | Certificate Request Letter",
    description:
      "बोनाफाइड, कैरेक्टर और अन्य प्रमाण पत्रों हेतु अनुरोध आवेदन पत्र के हिंदी प्रारूप और नमूने यहाँ उपलब्ध हैं।",
  },

  loan: {
    title: "लोन आवेदन पत्र | Loan Application Format in Hindi",
    description:
      "होम लोन, एजुकेशन लोन और पर्सनल लोन हेतु आवेदन पत्र के हिंदी फॉर्मेट, उदाहरण और टिप्स यहाँ पढ़ें।",
  },

  admission: {
    title: "एडमिशन आवेदन पत्र | Admission Application in Hindi",
    description:
      "स्कूल और कॉलेज एडमिशन के लिए आवेदन पत्र के प्रोफेशनल हिंदी प्रारूप और तैयार नमूने यहाँ देखें।",
  },

  scholarship: {
    title: "छात्रवृत्ति आवेदन पत्र | Scholarship Application in Hindi",
    description:
      "छात्रवृत्ति हेतु आवेदन पत्र के आसान हिंदी फॉर्मेट, उदाहरण और लिखने के सही तरीके यहाँ उपलब्ध हैं।",
  },
};

// ---------------- DATA MAP ----------------

const dataMap: Record<string, any> = {
  job: jobCategory,
  leave: leaveCategory,
  "certificate-request": certificateRequest,
  loan: loanApplications,
  admission: admissionApplications,
  scholarship: scholarshipApplications,
};

// ---------------- METADATA ----------------

export async function generateMetadata(props: PropsType): Promise<Metadata> {
  const { type } = await props.params;

  const meta =
    metaMap[type as string] ||
    ({
      title: "आवेदन पत्र | Application Letter in Hindi",
      description:
        "सभी प्रकार के आवेदन पत्र जैसे नौकरी, छुट्टी, लोन, एडमिशन और छात्रवृत्ति के हिंदी प्रारूप यहाँ उपलब्ध हैं।",
    } as const);

  return createMetadata({
    title: meta.title,
    description: meta.description,
    path: `/applications/${type}`, // ✅ correct canonical for applications hub children
  });
}

// ---------------- PAGE ----------------

export default async function Page(props: PropsType) {
  const { type } = await props.params;
  return <UniversalSubcategoryPage data={dataMap[type] || jobCategory} />;
}
