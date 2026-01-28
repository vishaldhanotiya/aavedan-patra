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

// ---------------- META CONTENT ----------------

const metaMap: Record<string, { title: string; description: string }> = {
  formal: {
    title: "औपचारिक पत्र प्रारूप हिंदी में | Formal Letter Format & Examples",
    description:
      "यहाँ सभी प्रकार के औपचारिक पत्र जैसे शिकायत पत्र, अनुरोध पत्र, इस्तीफा पत्र और ऑफिस लेटर के हिंदी प्रारूप व उदाहरण उपलब्ध हैं। अभी देखें।",
  },

  informal: {
    title: "अनौपचारिक पत्र प्रारूप हिंदी में | Informal Letter Examples",
    description:
      "मित्रों, रिश्तेदारों और परिवार के लिए अनौपचारिक पत्रों के आसान हिंदी प्रारूप और उदाहरण यहाँ पाएँ। व्यक्तिगत पत्र लिखना अब सरल।",
  },

  request: {
    title: "अनुरोध पत्र प्रारूप हिंदी में | Request Letter Format & Samples",
    description:
      "स्कूल, कॉलेज, ऑफिस और सरकारी कार्यों हेतु अनुरोध पत्र के प्रोफेशनल हिंदी प्रारूप और नमूने यहाँ उपलब्ध हैं। अभी पढ़ें।",
  },

  complaint: {
    title: "शिकायत पत्र प्रारूप हिंदी में | Complaint Letter Format & Samples",
    description:
      "ऑनलाइन शॉपिंग, पड़ोसी, ऑफिस या सेवा संबंधी शिकायत पत्रों के हिंदी प्रारूप और उदाहरण प्राप्त करें। प्रभावी शिकायत पत्र लिखें।",
  },

  resignation: {
    title: "इस्तीफा पत्र प्रारूप हिंदी में | Resignation Letter Examples",
    description:
      "नौकरी छोड़ने हेतु प्रोफेशनल इस्तीफा पत्र के हिंदी प्रारूप, नमूने और उदाहरण यहाँ उपलब्ध हैं। सही तरीके से रिज़ाइन लिखें।",
  },

  invitation: {
    title: "निमंत्रण पत्र प्रारूप हिंदी में | Invitation Letter Format",
    description:
      "शादी, जन्मदिन, कार्यक्रम और अन्य आयोजनों के लिए निमंत्रण पत्र के सुंदर हिंदी प्रारूप और उदाहरण यहाँ देखें।",
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

export async function generateMetadata(
  props: PropsType
): Promise<Metadata> {
  const { type } = await props.params;

  const baseUrl = "https://aavedanpatra.in";

  const meta = metaMap[type] || {
    title: "पत्र | आवेदन पत्र",
    description: "सभी प्रकार के पत्रों के प्रारूप हिंदी में।",
  };

  const canonical = `${baseUrl}/letters/${type}`;

  return {
    title: meta.title,
    description: meta.description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      siteName: "Aavedan Patra",
      locale: "hi_IN",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

// ---------------- PAGE ----------------

export default async function Page(props: PropsType) {
  const { type } = await props.params;

  return (
    <UniversalSubcategoryPage
      data={dataMap[type] || formalLetters}
    />
  );
}
