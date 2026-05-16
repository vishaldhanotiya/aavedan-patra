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
    title: "नौकरी आवेदन पत्र हिंदी में – Job Application Format - AavedanPatra",
    description:
      "सरकारी व प्राइवेट नौकरी के लिए तैयार हिंदी आवेदन पत्र। टीचर, बैंक, सॉफ्टवेयर, मैनेजर सहित 10+ पदों के प्रारूप और नमूने – अभी देखें।",
  },

  leave: {
    title:
      "छुट्टी आवेदन पत्र हिंदी में – Leave Application Format - AavedanPatra",
    description:
      "स्कूल, कॉलेज और ऑफिस के लिए बीमारी, यात्रा, पर्सनल और तत्काल छुट्टी आवेदन पत्र। सरल हिंदी फॉर्मेट, तैयार नमूने",
  },

  certificate: {
    title:
      "प्रमाणपत्र आवेदन – बोनाफाइड, कैरेक्टर, आय, एक्सपीरियंस - AavedanPatra",
    description:
      "बोनाफाइड, चरित्र, जाति, आय और ट्रांसफर सर्टिफिकेट के लिए हिंदी आवेदन पत्र। सही प्रारूप, तैयार नमूने – अभी डाउनलोड करें।",
  },

  loan: {
    title: "लोन आवेदन पत्र – होम, कार, पर्सनल, एजुकेशन, बिजनेस - AavedanPatra",
    description:
      "होम लोन, कार लोन, पर्सनल लोन, एजुकेशन लोन और बिजनेस लोन के लिए हिंदी में आवेदन प्रारूप। बैंक और एनबीएफसी के लिए तैयार टेम्पलेट।",
  },

  admission: {
    title:
      "प्रवेश आवेदन पत्र – स्कूल, कॉलेज, कोर्स में दाखिला - AavedanPatra",
    description:
      "स्कूल, कॉलेज और कोर्स प्रवेश के लिए तैयार हिंदी आवेदन पत्र। सही फॉर्मेट, नमूने और एडमिशन लेटर लिखने की पूरी गाइड।",
  },

  scholarship: {
    title:
      "छात्रवृत्ति आवेदन पत्र – मेरिट, सरकारी, खेल छात्रवृत्ति - AavedanPatra",
    description:
      "सरकारी, मेरिट, ज़रूरत-आधारित और खेल छात्रवृत्ति के लिए हिंदी आवेदन पत्र। तैयार नमूने, दस्तावेज़ सूची और लिखने के टिप्स।",
  },
};

// ---------------- DATA MAP ----------------

const dataMap: Record<string, any> = {
  job: jobCategory,
  leave: leaveCategory,
  certificate: certificateRequest,
  loan: loanApplications,
  admission: admissionApplications,
  scholarship: scholarshipApplications,
};

// ---------------- METADATA ----------------

export async function generateMetadata(props: PropsType): Promise<Metadata> {
  const { type } = await props.params;

  const meta = metaMap[type as string];
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
