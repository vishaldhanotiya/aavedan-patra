import { UniversalSubcategoryPage } from "@/components/UniversalSubcategoryPage";
import {
  complaintLetters,
  formalLetters,
  informalLetters,
  invitationLetters,
  requestLetters,
  resignationLetters,
} from "@/data/subcategories";
import { PropsType } from "@/data/type/type";
import { Metadata } from "next";
import { generateMetadata as createMetadata } from "@/metadata/metadata";

// ---------------- META CONTENT ----------------

const metaMap: Record<string, { title: string; description: string }> = {
  formal: {
    title: "औपचारिक पत्र – शिकायत, अनुरोध और ऑफिस प्रारूप",
    description: "शिकायत, अनुरोध, नोटिस और ऑफिस पत्रों के हिंदी प्रारूप, नमूने व उदाहरण। औपचारिक पत्र कैसे लिखें पूरी जानकारी।",
  },

  informal: {
    title: "अनौपचारिक पत्र – मित्र, परिवार के लिए नमूने",
    description: "मित्रों, भाई-बहन, रिश्तेदारों को व्यक्तिगत पत्र लिखने के आसान हिंदी प्रारूप और तैयार नमूने यहाँ देखें।",
  },

  request: {
    title: "अनुरोध पत्र – स्कूल, ऑफिस, सरकारी कार्य प्रारूप",
    description: "छुट्टी, प्रमाणपत्र, स्थानांतरण के लिए अनुरोध पत्र के प्रोफेशनल हिंदी प्रारूप। स्कूल-ऑफिस सभी नमूने।",
  },

  complaint: {
    title: "शिकायत पत्र – बैंक, ऑनलाइन शॉपिंग, सेवा प्रारूप",
    description: "बैंक, बिजली, ऑनलाइन शॉपिंग, पड़ोसी शिकायत पत्र के प्रभावी हिंदी प्रारूप व उदाहरण। तैयार नमूने डाउनलोड करें।",
  },

  resignation: {
    title: "त्यागपत्र – नौकरी, स्कूल छोड़ने के हिंदी प्रारूप",
    description: "टीचर, क्लर्क, मैनेजर त्यागपत्र के सही हिंदी प्रारूप। 2 सप्ताह नोटिस, तत्काल रिजाइनेशन सभी नमूने।",
  },

  invitation: {
    title: "निमंत्रण पत्र – शादी, जन्मदिन, कार्यक्रम प्रारूप",
    description: "विवाह, जन्मदिन, सेमिनार, वार्षिकोत्सव के लिए सुंदर हिंदी निमंत्रण पत्र प्रारूप व डिज़ाइन नमूने।",
  },
};


// ---------------- DATA MAP ----------------

const dataMap: Record<string, any> = {
  formal: formalLetters,
  informal: informalLetters,
  request: requestLetters,
  complaint: complaintLetters,
  resignation: resignationLetters,
  invitation: invitationLetters,
};

// ---------------- DYNAMIC METADATA ----------------

export async function generateMetadata(props: PropsType): Promise<Metadata> {
  const { type } = await props.params;

  const meta =
    metaMap[type as string] ||
    ({
      title: "पत्र | आवेदन पत्र",
      description: "सभी प्रकार के पत्रों के प्रारूप हिंदी में।",
    } as const);

  return createMetadata({
    title: meta.title,
    description: meta.description,
    path: `/letters/${type}`,
  });
}

// ---------------- PAGE ----------------

export default async function Page(props: PropsType) {
  const { type } = await props.params;
  return <UniversalSubcategoryPage data={dataMap[type] || formalLetters} />;
}
