import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: "/applications/application-for-teacher-job",
        destination: "/applications/job/teacher-job-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-bank-job",
        destination: "/applications/job/bank-job-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-bonafide-certificate-request",
        destination:
          "/applications/certificate/bonafide-certificate-request-application",
        permanent: true, // 301
      },

      {
        source: "/applications/application-for-college-admission",
        destination: "/applications/admission/college-admission-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-university-admission",
        destination: "/applications/admission/university-admission-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-readmission",
        destination: "/applications/admission/readmission-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-school-admission",
        destination: "/applications/admission/school-admission-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-course-admission",
        destination: "/applications/admission/course-admission-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-merit-scholarship",
        destination:
          "/applications/scholarship/merit-based-scholarship-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-need-based-scholarship",
        destination:
          "/applications/scholarship/financial-aid-scholarship-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-government-scholarship",
        destination:
          "/applications/scholarship/government-scholarship-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-research-grant",
        destination: "/applications/scholarship/research-grant-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-car-loan",
        destination: "/applications/loan/car-loan-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-caste-certificate-request",
        destination:
          "/applications/certificate/caste-certificate-request-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-casual-leave",
        destination: "/applications/leave/casual-leave-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-sick-leave",
        destination: "/applications/leave/sick-leave-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-school-leave",
        destination: "/applications/leave/school-leave-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-urgent-leave",
        destination: "/applications/leave/urgent-leave-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-vacation-leave",
        destination: "/applications/leave/vacation-leave-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-home-loan",
        destination: "/applications/loan/home-loan-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-personal-loan",
        destination: "/applications/loan/personal-loan-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-business-loan",
        destination: "/applications/loan/business-loan-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-emergency-loan",
        destination: "/applications/loan/emergency-loan-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-education-loan",
        destination: "/applications/loan/education-loan-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-school-transfer",
        destination: "/applications/admission/school-transfer-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-experience-certificate-request",
        destination:
          "/applications/certificate/experience-certificate-request-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-transfer-certificate-request",
        destination:
          "/applications/certificate/transfer-certificate-request-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-income-certificate",
        destination:
          "/applications/certificate/income-certificate-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-sports-scholarship",
        destination: "/applications/scholarship/sports-scholarship-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-private-scholarship",
        destination:
          "/applications/scholarship/private-scholarship-application",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-manager-position-job",
        destination: "/applications/job/manager-job-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-office-assistant-job",
        destination: "/applications/job/office-assistant-job-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-software-engineer-job",
        destination: "/applications/job/software-engineer-job-application-formats",
        permanent: true, // 301
      },
      {
        source: "/applications/application-for-personal-leave",
        destination: "/applications/leave/personal-leave-application-formats",
        permanent: true, // 301
      },

      {
        source: "/letters/birthday-party-invitation-letter",
        destination: "/letters/invitation/birthday-party-invitation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/business-meeting-invitation-letter",
        destination: "/letters/invitation/business-meeting-invitation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/event-invitation-letter",
        destination: "/letters/invitation/event-invitation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/seminar-invitation-letter",
        destination: "/letters/invitation/seminar-invitation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/guest-speaker-invitation-letter",
        destination: "/letters/invitation/guest-speaker-invitation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/meeting-request-letter",
        destination: "/letters/request/meeting-request-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/information-request-letter",
        destination: "/letters/request/information-request-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/permission-request-letter",
        destination: "/letters/request/permission-request-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/refund-request-letter",
        destination: "/letters/request/refund-request-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/recommendation-request-letter",
        destination: "/letters/request/recommendation-request-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/donation-request-letter",
        destination: "/letters/request/donation-request-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/sponsorship-request-letter",
        destination: "/letters/request/sponsorship-request-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/career-change-resignation-letter",
        destination: "/letters/resignation/career-change-resignation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/immediate-resignation-letter",
        destination: "/letters/resignation/immediate-resignation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/retirement-resignation-letter",
        destination: "/letters/resignation/retirement-resignation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/relocation-resignation-letter",
        destination: "/letters/resignation/relocation-resignation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/professional-resignation-letter",
        destination: "/letters/resignation/professional-resignation-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/short-notice-resignation-letter",
        destination: "/letters/resignation/short-notice-resignation-letter",
        permanent: true, // 301
      },

      {
        source: "/letters/neighbor-complaint-letter",
        destination: "/letters/complaint/neighbor-complaint-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/online-shopping-complaint-letter",
        destination: "/letters/complaint/online-shopping-complaint-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/product-complaint-letter",
        destination: "/letters/complaint/product-complaint-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/service-complaint-letter",
        destination: "/letters/complaint/service-complaint-letter",
        permanent: true, // 301
      },
      {
        source: "/letters/workplace-complaint-letter",
        destination: "/letters/complaint/workplace-complaint-letter",
        permanent: true, // 301
      },
    ];
  },
};

export default nextConfig;
