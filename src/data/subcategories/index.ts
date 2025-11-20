/**
 * MASTER INDEX FOR ALL SUBCATEGORY DATA
 * Central export point for all 42 subcategories across 7 categories
 */

import type { SubcategoryData } from "../allSubcategoryData";

// Import from allSubcategoryData (original 2)
import { 
  jobApplicationsData, 
  leaveApplicationsData 
} from "../allSubcategoryData";

// Import Applications subcategories (4 more)
import {
  loanApplicationsData,
  admissionApplicationsData,
  scholarshipApplicationsData,
  certificateRequestData,
} from "./applicationsSubcategories";

// Import Letters subcategories (3 created, 3 to add)
import {
  formalLettersData,
  informalLettersData,
  requestLettersData,
} from "./lettersSubcategories";

// Import additional Letters subcategories from ALL_REMAINING
import {
  complaintLettersData,
  resignationLettersData,
  invitationLettersData,
} from "./ALL_REMAINING_SUBCATEGORIES";

// Import Certificates subcategories (3 created)
import {
  experienceCertificatesData,
  bonafideCertificatesData,
  characterCertificatesData,
  internshipCertificatesData,
  courseCertificatesData,
  appreciationCertificatesData,
} from "./certificatesSubcategories";

// Import Resumes subcategories (all 6 created)
import {
  professionalResumesData,
  fresherResumesData,
  coverLettersData,
  executiveResumesData,
  industryResumesData,
  atsFriendlyResumesData,
} from "./resumesSubcategories";

// Import Notices subcategories (all 6 created)
import {
  schoolNoticesData,
  officeNoticesData,
  meetingReportsData,
  projectReportsData,
  eventNoticesData,
  policyNoticesData,
} from "./noticesSubcategories";

// Import Essays subcategories (all 6 created)
import {
  essays100WordsData,
  essays200WordsData,
  essays500WordsData,
  speechesData,
  moralStoriesData,
  paragraphsData,
} from "./essaysSubcategories";

// Import Agreements subcategories (all 6 created)
import {
  rentalAgreementsData,
  businessAgreementsData,
  employmentContractsData,
  personalAgreementsData,
  legalFormsData,
  applicationFormsData,
} from "./agreementsSubcategories";

// ============================================
// COMPLETE SUBCATEGORY REGISTRY
// ============================================

export const allSubcategoriesRegistry: Record<string, SubcategoryData[]> = {
  applications: [
    jobApplicationsData,
    leaveApplicationsData,
    loanApplicationsData,
    admissionApplicationsData,
    scholarshipApplicationsData,
    certificateRequestData,
  ],
  letters: [
    formalLettersData,
    informalLettersData,
    requestLettersData,
    // Add: complaint, resignation, invitation
    complaintLettersData,
    resignationLettersData,
    invitationLettersData,
  ],
  certificates: [
    // Add all 6: experience, bonafide, character, internship, course, appreciation
    experienceCertificatesData,
    bonafideCertificatesData,
    characterCertificatesData,
    internshipCertificatesData,
    courseCertificatesData,
    appreciationCertificatesData,
  ],
  resumes: [
    // Add all 6: professional, fresher, cover-letters, executive, industry, ats
    professionalResumesData,
    fresherResumesData,
    coverLettersData,
    executiveResumesData,
    industryResumesData,
    atsFriendlyResumesData,
  ],
  notices: [
    // Add all 6: school, office, meetings, projects, events, policy
    schoolNoticesData,
    officeNoticesData,
    meetingReportsData,
    projectReportsData,
    eventNoticesData,
    policyNoticesData,
  ],
  essays: [
    // Add all 6: 100-words, 200-words, 500-words, speeches, stories, paragraphs
    essays100WordsData,
    essays200WordsData,
    essays500WordsData,
    speechesData,
    moralStoriesData,
    paragraphsData,
  ],
  agreements: [
    // Add all 6: rental, business, employment, personal, legal, forms
    rentalAgreementsData,
    businessAgreementsData,
    employmentContractsData,
    personalAgreementsData,
    legalFormsData,
    applicationFormsData,
  ],
};

// Flatten all subcategories into a single array
export const allSubcategories: SubcategoryData[] = Object.values(
  allSubcategoriesRegistry
).flat();

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all subcategories for a specific category
 */
export function getSubcategoriesByCategory(
  categorySlug: string
): SubcategoryData[] {
  return allSubcategoriesRegistry[categorySlug] || [];
}

/**
 * Get a specific subcategory by category and subcategory slug
 */
export function getSubcategory(
  categorySlug: string,
  subcategorySlug: string
): SubcategoryData | undefined {
  const categorySubcategories = allSubcategoriesRegistry[categorySlug];
  if (!categorySubcategories) return undefined;
  
  return categorySubcategories.find((sub) => sub.slug === subcategorySlug);
}

/**
 * Get subcategory count by category
 */
export function getSubcategoryCount(categorySlug: string): number {
  return allSubcategoriesRegistry[categorySlug]?.length || 0;
}

/**
 * Get total number of subcategories across all categories
 */
export function getTotalSubcategoryCount(): number {
  return allSubcategories.length;
}

/**
 * Get all subcategory slugs for a category (useful for routing)
 */
export function getSubcategorySlugs(categorySlug: string): string[] {
  return (
    allSubcategoriesRegistry[categorySlug]?.map((sub) => sub.slug) || []
  );
}

// ============================================
// INDIVIDUAL EXPORTS (for direct import)
// ============================================

// Applications
export {
  jobApplicationsData,
  leaveApplicationsData,
  loanApplicationsData,
  admissionApplicationsData,
  scholarshipApplicationsData,
  certificateRequestData,
};

// Letters
export {
  formalLettersData,
  informalLettersData,
  requestLettersData,
  // Add: complaint, resignation, invitation
  complaintLettersData,
  resignationLettersData,
  invitationLettersData,
};

// Certificates
export {
  experienceCertificatesData,
  bonafideCertificatesData,
  characterCertificatesData,
  internshipCertificatesData,
  courseCertificatesData,
  appreciationCertificatesData,
};

// Resumes
export {
  professionalResumesData,
  fresherResumesData,
  coverLettersData,
  executiveResumesData,
  industryResumesData,
  atsFriendlyResumesData,
};

// Notices
export {
  schoolNoticesData,
  officeNoticesData,
  meetingReportsData,
  projectReportsData,
  eventNoticesData,
  policyNoticesData,
};

// Essays
export {
  essays100WordsData,
  essays200WordsData,
  essays500WordsData,
  speechesData,
  moralStoriesData,
  paragraphsData,
};

// Agreements
export {
  rentalAgreementsData,
  businessAgreementsData,
  employmentContractsData,
  personalAgreementsData,
  legalFormsData,
  applicationFormsData,
};

// ============================================
// STATISTICS
// ============================================

export const subcategoryStats = {
  totalSubcategories: getTotalSubcategoryCount(),
  totalTemplates: allSubcategories.reduce(
    (sum, sub) => sum + sub.templates.length,
    0
  ),
  totalBlogs: allSubcategories.reduce(
    (sum, sub) => sum + (sub.blogPosts?.length || 0),
    0
  ),
  totalFAQs: allSubcategories.reduce(
    (sum, sub) => sum + sub.faqs.length,
    0
  ),
  byCategory: Object.fromEntries(
    Object.entries(allSubcategoriesRegistry).map(([category, subs]) => [
      category,
      {
        count: subs.length,
        templates: subs.reduce((sum, sub) => sum + sub.templates.length, 0),
      },
    ])
  ),
};

// Log stats in development
if (process.env.NODE_ENV === "development") {
  console.log("📊 Subcategory Statistics:", subcategoryStats);
}