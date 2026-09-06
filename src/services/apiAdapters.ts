// External API Integration Adapters
// Standardized interfaces prepared for production deployment
// All adapters are marked "Prototype / Integration Ready" with mock responses

export interface ApiAdapterStatus {
  name: string;
  category: string;
  status: 'Prototype / Integration Ready' | 'Active Mock' | 'Production Connected';
  authType: string;
  description: string;
}

export const INTEGRATION_ADAPTERS: ApiAdapterStatus[] = [
  {
    name: 'DigiLocker / API Setu Credential Verification',
    category: 'Government Identity & Certificates',
    status: 'Prototype / Integration Ready',
    authType: 'OAuth 2.0 / JWT Client Assertion',
    description: 'Direct verification of BAMS/BHMS university marksheets, degree certificates, and National Commission for Indian System of Medicine (NCISM) registrations.'
  },
  {
    name: 'GitHub REST API (Technical Evidence)',
    category: 'Project Verification',
    status: 'Prototype / Integration Ready',
    authType: 'Personal Access Token / OAuth App',
    description: 'Automated verification of student healthcare repositories, biostatistical R scripts, and clinical trial analysis code commits.'
  },
  {
    name: 'Google Calendar API',
    category: 'Interviews & Mentorship',
    status: 'Prototype / Integration Ready',
    authType: 'Google Workspace Service Account',
    description: 'Bi-directional synchronization of recruiter interview rounds, faculty mentorship slots, and FDP workshop agendas.'
  },
  {
    name: 'Google Maps / Geocoding API',
    category: 'Logistics & Commute',
    status: 'Prototype / Integration Ready',
    authType: 'API Key with IP restriction',
    description: 'Distance calculation, travel accessibility matrix, and state-wise AYUSH healthcare cluster mapping.'
  },
  {
    name: 'YouTube Data v3 API',
    category: 'Learning Recommendations',
    status: 'Prototype / Integration Ready',
    authType: 'Google Cloud API Key',
    description: 'Dynamic fetching of verified Ministry of AYUSH, AIIA, and WHO-IR clinical lecture video modules tailored to student skill gaps.'
  },
  {
    name: 'SMS & Email Gateway (Gov Notification)',
    category: 'Alerting',
    status: 'Prototype / Integration Ready',
    authType: 'NIC SMS Gateway / SMTP',
    description: 'Dispatching OTP verifications, shortlist alerts, and urgent faculty review notices.'
  }
];

export const mockDigiLockerVerify = async (credentialId: string): Promise<{ verified: boolean; issuer: string; docDate: string }> => {
  await new Promise(r => setTimeout(r, 400));
  return {
    verified: true,
    issuer: 'All India Institute of Ayurveda & NCISM Registry',
    docDate: 'Verified via National Academic Depository (NAD)'
  };
};
