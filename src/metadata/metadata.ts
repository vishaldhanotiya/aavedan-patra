// src/utils/metadata.ts
export function generateMetadata({
  title,
  description,
  path,
  locale = "hi-IN",
}: {
  title: string;
  description: string;
  path: string;
  locale?: string;
}) {
  const baseUrl = "https://aavedanpatra.in";
  const canonicalUrl = `${baseUrl}${path}`;
  
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "hi-IN": canonicalUrl,
        "en-US": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Aavedan Patra",
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

// --- Sponsorship Request Letter ---
export const metadataSponsorshipRequest = {
  title: "Sponsorship Request Letter | Aavedan Patra",
  description: "A complete guide to writing an effective sponsorship request letter with format, samples, and helpful tips.",
};

// --- Different Types of Letters ---
export const metadataTypesOfLetters = {
  title: "Different Types of Letters | Aavedan Patra",
  description: "Explore various formal and informal letter types with simple examples and easy-to-follow formats.",
};

// --- Permission Request Letter ---
export const metadataPermissionRequest = {
  title: "Permission Request Letter | Aavedan Patra",
  description: "Write a clear and polite permission request letter with easy templates and examples.",
};

// --- Product Complaint Letter ---
export const metadataProductComplaint = {
  title: "Product Complaint Letter | Aavedan Patra",
  description: "Learn how to write an effective product complaint letter for refunds or replacements.",
};

// --- Professional Resignation Letter ---
export const metadataProfessionalResignation = {
  title: "Professional Resignation Letter | Aavedan Patra",
  description: "Formal resignation letter templates with clean and professional wording.",
};

// --- Recommendation Request Letter ---
export const metadataRecommendationRequest = {
  title: "Recommendation Request Letter | Aavedan Patra",
  description: "Request a recommendation politely with ready-to-use templates and examples.",
};

// --- Refund Request Letter ---
export const metadataRefundRequest = {
  title: "Refund Request Letter | Aavedan Patra",
  description: "Simple refund request letter formats for product or service refunds.",
};

// --- Relocation Request Letter ---
export const metadataRelocationRequest = {
  title: "Relocation Request Letter | Aavedan Patra",
  description: "Professional relocation request letter templates for transfer requests.",
};

// --- Retirement Resignation Letter ---
export const metadataRetirementResignation = {
  title: "Retirement Resignation Letter | Aavedan Patra",
  description: "A polite retirement resignation letter format with helpful examples.",
};

// --- Seminar Invitation Letter ---
export const metadataSeminarInvitation = {
  title: "Seminar Invitation Letter | Aavedan Patra",
  description: "Formal seminar invitation letter templates with clear wording.",
};

// --- Service Complaint Letter ---
export const metadataServiceComplaint = {
  title: "Service Complaint Letter | Aavedan Patra",
  description: "Effective complaint letter formats to report poor service and request action.",
};

// --- Short Notice Resignation Letter ---
export const metadataShortNoticeResignation = {
  title: "Short Notice Resignation Letter | Aavedan Patra",
  description: "Professional short notice resignation letter examples for urgent situations.",
};

// --- All Letters (Main Page) ---
export const metadataAllLetters = {
  title: "Letters | Aavedan Patra",
  description: "Find all types of formal and informal letter formats and samples.",
};

// --- Birthday Invitation Letter ---
export const metadataBirthdayInvitation = {
  title: "Birthday Party Invitation Letter | Aavedan Patra",
  description: "Simple and friendly birthday party invitation templates for friends and family.",
};

// --- Business Meeting Invitation ---
export const metadataBusinessMeetingInvitation = {
  title: "Business Meeting Invitation Letter | Aavedan Patra",
  description: "Formal meeting invitation letter samples for clients and colleagues.",
};

// --- Career Change Resignation ---
export const metadataCareerChangeResignation = {
  title: "Career Change Resignation Letter | Aavedan Patra",
  description: "A polite resignation letter format for career change with clean examples.",
};

// --- Donation Request Letter ---
export const metadataDonationRequest = {
  title: "Donation Request Letter | Aavedan Patra",
  description: "Donation request letter samples for charity, NGO, and fundraising purposes.",
};

// --- Event Invitation Letter ---
export const metadataEventInvitation = {
  title: "Event Invitation Letter | Aavedan Patra",
  description: "Formal and informal event invitation letter formats for personal or professional use.",
};

// --- Guest Speaker Invitation Letter ---
export const metadataGuestSpeakerInvitation = {
  title: "Guest Speaker Invitation Letter | Aavedan Patra",
  description: "Professional invitation letter templates for guest speakers and experts.",
};

// --- Immediate Resignation Letter ---
export const metadataImmediateResignation = {
  title: "Immediate Resignation Letter | Aavedan Patra",
  description: "Simple immediate resignation letter format for urgent resignations.",
};

// --- Information Request Letter ---
export const metadataInformationRequest = {
  title: "Information Request Letter | Aavedan Patra",
  description: "Polite information request letter samples for school, office, and official use.",
};

// --- Meeting Request Letter ---
export const metadataMeetingRequest = {
  title: "Meeting Request Letter | Aavedan Patra",
  description: "Professional meeting request letter templates for appointments and discussions.",
};

// --- Neighbor Complaint Letter ---
export const metadataNeighborComplaint = {
  title: "Neighbor Complaint Letter | Aavedan Patra",
  description: "Polite and clear neighbor complaint letter formats for noise or disturbance issues.",
};

// --- Online Shopping Complaint Letter ---
export const metadataOnlineShoppingComplaint = {
  title: "Online Shopping Complaint Letter | Aavedan Patra",
  description: "Complaint letter templates for damaged products, late delivery, or refund issues.",
};
