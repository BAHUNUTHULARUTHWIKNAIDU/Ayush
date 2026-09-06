// AYUSH SkillConnect Core TypeScript Interfaces

export type UserRole = 'STUDENT' | 'FACULTY' | 'INDUSTRY' | 'INSTITUTION' | 'MINISTRY';

export type AYUSHDiscipline = 
  | 'Ayurveda'
  | 'Yoga & Naturopathy'
  | 'Unani'
  | 'Siddha'
  | 'Sowa-Rigpa'
  | 'Homoeopathy';

export type VerificationTier = 
  | 'Self Declared'
  | 'Assessed'
  | 'Faculty Verified'
  | 'Industry Verified';

export interface UserSession {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  role: UserRole;
  titleOrProgram: string;
  organizationOrInst: string;
  avatar: string;
  targetCareer?: string;
  currentReadiness?: number;
}

export interface SkillScore {
  id: string;
  name: string;
  category: 'AYUSH Core Knowledge' | 'Clinical Practice' | 'Research Methodology' | 'Documentation' | 'Digital Health' | 'Data Analysis' | 'Communication';
  score: number; // 0 to 100
  benchmark: number; // Industry requirement
  verifiedLevel: VerificationTier;
  verifiedBy?: string;
  lastUpdated: string;
  evidenceCount: number;
}

export interface SkillGapDetail {
  id: string;
  skillName: string;
  category: string;
  requiredScore: number;
  currentScore: number;
  gapPercentage: number;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  whyGap: string;
  howToClose: string;
  recommendedCourseId?: string;
  recommendedProjectId?: string;
}

export interface CareerPathOption {
  id: string;
  title: string;
  currentMatch: number;
  keySkills: string[];
  averageStipendOrLPA: string;
  demandTrend: 'High Growth' | 'Stable' | 'Emerging';
  openingsCount: number;
}

export interface RoadmapStep {
  id: string;
  week: number;
  title: string;
  description: string;
  skillTarget: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  durationHours: number;
  isCompleted: boolean;
  resourceTitle: string;
  actionType: 'course' | 'project' | 'assessment';
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  mode: 'On-site' | 'Hybrid' | 'Remote';
  type: 'Internship' | 'Fellowship' | 'Full-time' | 'Research Fellow';
  duration: string;
  stipend: string;
  disciplines: AYUSHDiscipline[];
  openings: number;
  matchScore: number; // 0 to 100
  matchBreakdown: {
    skillCompatibility: number; // out of 50
    verifiedEvidence: number;    // out of 20
    experience: number;          // out of 10
    careerInterest: number;      // out of 10
    preferences: number;         // out of 10
    explanation: string[];
  };
  requiredSkills: { name: string; required: number; studentScore: number }[];
  description: string;
  status?: 'APPLIED' | 'SHORTLISTED' | 'INTERVIEW' | 'NOT_APPLIED';
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  skillsDemonstrated: string[];
  evidenceUrl?: string;
  facultyVerification: {
    status: 'Verified' | 'Pending Review' | 'Revision Requested';
    facultyName: string;
    verifiedDate?: string;
    remarks?: string;
  };
  industryFeedback?: {
    company: string;
    reviewer: string;
    rating: number; // out of 5
    comment: string;
  };
}

export interface AssessmentQuestion {
  id: string;
  type: 'mcq' | 'scenario';
  question: string;
  scenarioContext?: string;
  options: string[];
  correctIndex: number;
  skillTag: string;
  explanation: string;
}

export interface VerificationQueueItem {
  id: string;
  studentName: string;
  studentProgram: string;
  studentId: string;
  skillName: string;
  projectTitle: string;
  evidenceSummary: string;
  submittedDate: string;
  currentLevel: VerificationTier;
  targetLevel: VerificationTier;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

export interface CurriculumInsightItem {
  id: string;
  skillArea: string;
  industryDemand: number;
  studentProficiency: number;
  gapSeverity: 'Critical' | 'Moderate' | 'Low';
  affectedPrograms: string[];
  fiveStepActionPlan: string[];
  status: 'Action Required' | 'Workshop Scheduled' | 'FDP in Progress' | 'Curriculum Updated';
}

export interface MoUItem {
  id: string;
  partnerName: string;
  type: 'Clinical Training' | 'R&D Collaboration' | 'Product Formulation' | 'Digital AYUSH Analytics';
  validUntil: string;
  studentsBenefited: number;
  activeProjects: number;
  status: 'Active' | 'Under Renewal';
}

export interface IndustryProject {
  id: string;
  title: string;
  industryPartner: string;
  description: string;
  duration: string;
  teamSize: number;
  mentorName: string;
  requiredSkills: string[];
  disciplines: AYUSHDiscipline[];
  openSlots: number;
}

export interface MentorProfile {
  id: string;
  name: string;
  title: string;
  organization: string;
  expertise: string[];
  experienceYears: number;
  availableSlots: number;
  rating: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'skill' | 'match' | 'verification' | 'gap' | 'curriculum';
  timestamp: string;
  isRead: boolean;
  actionUrl?: string;
}

export interface CalendarEventItem {
  id: string;
  title: string;
  category: 'Interview' | 'Mentor Session' | 'FDP' | 'Workshop' | 'Milestone';
  date: string;
  time: string;
  locationOrLink: string;
}
