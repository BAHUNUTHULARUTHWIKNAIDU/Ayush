import { 
  UserSession, 
  SkillScore, 
  SkillGapDetail, 
  CareerPathOption, 
  RoadmapStep, 
  Opportunity, 
  ProjectItem, 
  AssessmentQuestion, 
  VerificationQueueItem, 
  CurriculumInsightItem, 
  MoUItem, 
  IndustryProject, 
  MentorProfile, 
  NotificationItem, 
  CalendarEventItem 
} from '../types';

export const DEMO_USERS: Record<string, UserSession> = {
  student: {
    id: 'usr-student-01',
    fullName: 'Ananya Sharma',
    email: 'ananya.student@aiia.gov.in',
    phone: '+91 98765 43210',
    role: 'STUDENT',
    titleOrProgram: 'BAMS — 3rd Year',
    organizationOrInst: 'All India Institute of Ayurveda (AIIA), New Delhi',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    targetCareer: 'Clinical Research',
    currentReadiness: 78
  },
  faculty: {
    id: 'usr-faculty-01',
    fullName: 'Dr. Priya Nair',
    email: 'faculty.demo@aiia.gov.in',
    phone: '+91 98765 11223',
    role: 'FACULTY',
    titleOrProgram: 'Faculty Mentor & Associate Professor',
    organizationOrInst: 'Department of Dravyaguna & Research, AIIA New Delhi',
    avatar: 'https://images.unsplash.com/photo-1594824813591-9c60e340a6b7?w=150&auto=format&fit=crop&q=80',
    targetCareer: 'Research & Student Development'
  },
  industry: {
    id: 'usr-industry-01',
    fullName: 'Rahul Mehta',
    email: 'industry.demo@vaidyaanalytics.com',
    phone: '+91 98765 99887',
    role: 'INDUSTRY',
    titleOrProgram: 'Head of Clinical Talent Acquisition',
    organizationOrInst: 'Vaidya Analytics & Health Systems',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    targetCareer: 'Clinical Research Talent'
  },
  institution: {
    id: 'usr-inst-01',
    fullName: 'Prof. B. S. Prasad',
    email: 'institution.demo@aiia.gov.in',
    phone: '+91 98765 55443',
    role: 'INSTITUTION',
    titleOrProgram: 'Dean of Academic & Industry Collaborations',
    organizationOrInst: 'All India Institute of Ayurveda (AIIA)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    targetCareer: 'Student Readiness & Industry Collaboration'
  },
  ministry: {
    id: 'usr-ministry-01',
    fullName: 'Dr. Manoj Kumar',
    email: 'admin.demo@ayush.gov.in',
    phone: '+91 98765 00001',
    role: 'MINISTRY',
    titleOrProgram: 'Director of AYUSH Skill Intelligence & Capacity Building',
    organizationOrInst: 'Ministry of AYUSH, Government of India',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    targetCareer: 'AYUSH Skill Intelligence'
  }
};

export const INITIAL_SKILLS: SkillScore[] = [
  {
    id: 'sk-1',
    name: 'Ayurvedic Pharmacology',
    category: 'AYUSH Core Knowledge',
    score: 88,
    benchmark: 80,
    verifiedLevel: 'Faculty Verified',
    verifiedBy: 'Dr. Priya Nair',
    lastUpdated: '12 Aug 2026',
    evidenceCount: 4
  },
  {
    id: 'sk-2',
    name: 'Panchakarma Therapy',
    category: 'Clinical Practice',
    score: 76,
    benchmark: 75,
    verifiedLevel: 'Faculty Verified',
    verifiedBy: 'Dr. S. K. Joshi',
    lastUpdated: '20 Aug 2026',
    evidenceCount: 3
  },
  {
    id: 'sk-3',
    name: 'Clinical Documentation',
    category: 'Documentation',
    score: 64,
    benchmark: 75,
    verifiedLevel: 'Assessed',
    lastUpdated: '15 Aug 2026',
    evidenceCount: 2
  },
  {
    id: 'sk-4',
    name: 'Research Methodology',
    category: 'Research Methodology',
    score: 58,
    benchmark: 80,
    verifiedLevel: 'Assessed',
    lastUpdated: '28 Jul 2026',
    evidenceCount: 1
  },
  {
    id: 'sk-5',
    name: 'Data Analysis',
    category: 'Data Analysis',
    score: 42,
    benchmark: 70,
    verifiedLevel: 'Self Declared',
    lastUpdated: '05 Jul 2026',
    evidenceCount: 0
  },
  {
    id: 'sk-6',
    name: 'Digital Health & Tele-AYUSH',
    category: 'Digital Health',
    score: 52,
    benchmark: 70,
    verifiedLevel: 'Self Declared',
    lastUpdated: '14 Jun 2026',
    evidenceCount: 1
  },
  {
    id: 'sk-7',
    name: 'Clinical Patient Communication',
    category: 'Communication',
    score: 82,
    benchmark: 75,
    verifiedLevel: 'Faculty Verified',
    verifiedBy: 'Dr. Priya Nair',
    lastUpdated: '10 Aug 2026',
    evidenceCount: 3
  }
];

export const INITIAL_SKILL_GAPS: SkillGapDetail[] = [
  {
    id: 'gap-1',
    skillName: 'Data Analysis',
    category: 'Data Analysis',
    requiredScore: 70,
    currentScore: 42,
    gapPercentage: 28,
    priority: 'HIGH',
    whyGap: 'Clinical trial protocols in modern AYUSH research mandate biostatistical testing (R/SPSS/Python) and observational patient registry aggregation.',
    howToClose: 'Complete the 12-hour "AYUSH Clinical Data Analysis" certification pathway and analyze sample Panchakarma observational trial datasets.',
    recommendedCourseId: 'crs-101',
    recommendedProjectId: 'proj-01'
  },
  {
    id: 'gap-2',
    skillName: 'Research Methodology',
    category: 'Research Methodology',
    requiredScore: 80,
    currentScore: 58,
    gapPercentage: 22,
    priority: 'HIGH',
    whyGap: 'GCP (Good Clinical Practice) standards require validated ethical review protocols and systematized AYUSH case-control study design.',
    howToClose: 'Complete the "Clinical Research Ethics & Study Design for AYUSH" module and submit a faculty-reviewed synopsis.',
    recommendedCourseId: 'crs-102'
  },
  {
    id: 'gap-3',
    skillName: 'Clinical Documentation',
    category: 'Documentation',
    requiredScore: 75,
    currentScore: 64,
    gapPercentage: 11,
    priority: 'MEDIUM',
    whyGap: 'Standardized NAMASTE portal terminology and electronic AYUSH health records compliance requires rigorous electronic case-sheet entry.',
    howToClose: 'Undertake 2 weekly clinical case log simulations under faculty mentor supervision.',
    recommendedCourseId: 'crs-103'
  }
];

export const CAREER_PATHS: CareerPathOption[] = [
  {
    id: 'cp-1',
    title: 'Clinical Researcher (AYUSH)',
    currentMatch: 82,
    keySkills: ['Ayurvedic Pharmacology', 'Research Methodology', 'Data Analysis', 'Clinical Documentation'],
    averageStipendOrLPA: '₹4.8 — 7.5 LPA',
    demandTrend: 'High Growth',
    openingsCount: 34
  },
  {
    id: 'cp-2',
    title: 'AYUSH Product Formulation Scientist',
    currentMatch: 74,
    keySkills: ['Dravyaguna', 'Quality Control', 'Standardization', 'Phytochemistry'],
    averageStipendOrLPA: '₹5.0 — 8.2 LPA',
    demandTrend: 'High Growth',
    openingsCount: 21
  },
  {
    id: 'cp-3',
    title: 'Holistic Wellness Specialist',
    currentMatch: 71,
    keySkills: ['Panchakarma', 'Dietetics & Pathya', 'Patient Communication', 'Lifestyle Protocols'],
    averageStipendOrLPA: '₹4.0 — 6.5 LPA',
    demandTrend: 'Stable',
    openingsCount: 48
  },
  {
    id: 'cp-4',
    title: 'AYUSH Health Informatics Analyst',
    currentMatch: 61,
    keySkills: ['Digital Health', 'Data Analysis', 'NAMASTE Terminology', 'EHR Systems'],
    averageStipendOrLPA: '₹5.5 — 9.0 LPA',
    demandTrend: 'Emerging',
    openingsCount: 16
  }
];

export const FOUR_WEEK_ROADMAP: RoadmapStep[] = [
  {
    id: 'rm-w1',
    week: 1,
    title: 'Research Methodology & GCP Protocols',
    description: 'Master ethical guidelines, ICMR-AYUSH trial protocols, and controlled trial formulation.',
    skillTarget: 'Research Methodology (+10%)',
    difficulty: 'Intermediate',
    durationHours: 10,
    isCompleted: true,
    resourceTitle: 'ICMR-AYUSH Clinical Trial Guidelines Module',
    actionType: 'course'
  },
  {
    id: 'rm-w2',
    week: 2,
    title: 'AYUSH Clinical Data Analysis & Biostatistics',
    description: 'Practical analysis of clinical trial outcomes, p-values, paired t-tests, and registry datasets.',
    skillTarget: 'Data Analysis (+18%)',
    difficulty: 'Intermediate',
    durationHours: 12,
    isCompleted: false,
    resourceTitle: 'Hands-on Clinical Data Analysis in Healthcare',
    actionType: 'course'
  },
  {
    id: 'rm-w3',
    week: 3,
    title: 'Real-World AYUSH Research Micro-Project',
    description: 'Compile and analyze observational data on Panchakarma stress markers with mentor guidance.',
    skillTarget: 'Clinical Documentation & Project (+12%)',
    difficulty: 'Advanced',
    durationHours: 16,
    isCompleted: false,
    resourceTitle: 'Project: AYUSH Interventions for Stress Markers',
    actionType: 'project'
  },
  {
    id: 'rm-w4',
    week: 4,
    title: 'Standardized Assessment & Faculty Verification',
    description: 'Demonstrate competency through proctored simulation and submit evidence to Dr. Priya Nair.',
    skillTarget: 'Verified Skill Passport Badge',
    difficulty: 'Intermediate',
    durationHours: 4,
    isCompleted: false,
    resourceTitle: 'Comprehensive Clinical Researcher Readiness Exam',
    actionType: 'assessment'
  }
];

export const MOCK_OPPORTUNITIES: Opportunity[] = [
  {
    id: 'opp-1',
    title: 'Clinical Research Intern',
    company: 'AYUSH Research Organization & Vaidya Analytics',
    companyLogo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=80&auto=format&fit=crop&q=80',
    location: 'Bengaluru, Karnataka (Hybrid)',
    mode: 'Hybrid',
    type: 'Internship',
    duration: '3 Months',
    stipend: '₹25,000 / month',
    disciplines: ['Ayurveda', 'Homoeopathy'],
    openings: 4,
    matchScore: 92,
    matchBreakdown: {
      skillCompatibility: 46,
      verifiedEvidence: 18,
      experience: 9,
      careerInterest: 10,
      preferences: 9,
      explanation: [
        'Ayurvedic Pharmacology (88%) strongly exceeds the 80% requirement (+25 pts)',
        'Panchakarma (76%) meets clinical exposure threshold (+12 pts)',
        'Faculty-verified evidence on record from AIIA (+18 pts)',
        'Data Analysis (42%) is currently developing — bridge course advised (-4 pts)'
      ]
    },
    requiredSkills: [
      { name: 'Ayurvedic Pharmacology', required: 80, studentScore: 88 },
      { name: 'Research Methodology', required: 75, studentScore: 58 },
      { name: 'Clinical Documentation', required: 70, studentScore: 64 },
      { name: 'Data Analysis', required: 65, studentScore: 42 }
    ],
    description: 'Collaborate with senior clinical scientists on phase-II Ayurvedic observational studies. Responsibilities include patient registry data validation, protocol compliance monitoring, and statistical tabulation.',
    status: 'NOT_APPLIED'
  },
  {
    id: 'opp-2',
    title: 'Ayurvedic Product Research Fellow',
    company: 'Himalayan Botanicals R&D Labs',
    companyLogo: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=80&auto=format&fit=crop&q=80',
    location: 'Dehradun / Hybrid',
    mode: 'Hybrid',
    type: 'Research Fellow',
    duration: '6 Months',
    stipend: '₹32,000 / month',
    disciplines: ['Ayurveda'],
    openings: 2,
    matchScore: 84,
    matchBreakdown: {
      skillCompatibility: 42,
      verifiedEvidence: 16,
      experience: 8,
      careerInterest: 9,
      preferences: 9,
      explanation: [
        'Excellent score in Dravyaguna & Ayurvedic Pharmacology',
        'Standardization lab experience meets entry criteria',
        'Directly aligns with student curriculum at AIIA'
      ]
    },
    requiredSkills: [
      { name: 'Ayurvedic Pharmacology', required: 85, studentScore: 88 },
      { name: 'Phytochemical Standardization', required: 70, studentScore: 65 },
      { name: 'Documentation', required: 70, studentScore: 64 }
    ],
    description: 'Work on active formulation stabilization and botanical fingerprinting of classical Rasashastra preparations following Pharmacopoeial standards.',
    status: 'NOT_APPLIED'
  },
  {
    id: 'opp-3',
    title: 'Yoga Therapy & Clinical Associate',
    company: 'Prana Health Network & Integrative Clinics',
    companyLogo: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=80&auto=format&fit=crop&q=80',
    location: 'Pune, Maharashtra',
    mode: 'On-site',
    type: 'Internship',
    duration: '3 Months',
    stipend: '₹20,000 / month',
    disciplines: ['Yoga & Naturopathy', 'Ayurveda'],
    openings: 5,
    matchScore: 71,
    matchBreakdown: {
      skillCompatibility: 35,
      verifiedEvidence: 14,
      experience: 7,
      careerInterest: 7,
      preferences: 8,
      explanation: [
        'Strong clinical patient communication skills verified',
        'Requires additional hours in integrative Yoga therapy protocols'
      ]
    },
    requiredSkills: [
      { name: 'Clinical Patient Communication', required: 75, studentScore: 82 },
      { name: 'Panchakarma Therapy', required: 70, studentScore: 76 },
      { name: 'Yoga Bio-mechanics', required: 65, studentScore: 50 }
    ],
    description: 'Assist leading integrative physicians in designing personalized lifestyle, dietary (Ahara-Vihara), and therapeutic Yoga regimens for metabolic disorder patients.',
    status: 'NOT_APPLIED'
  },
  {
    id: 'opp-4',
    title: 'Tele-AYUSH Health Informatics Analyst',
    company: 'National AYUSH Mission Innovation Cell',
    companyLogo: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=80&auto=format&fit=crop&q=80',
    location: 'New Delhi (Remote/Hybrid)',
    mode: 'Remote',
    type: 'Fellowship',
    duration: '6 Months',
    stipend: '₹28,000 / month',
    disciplines: ['Ayurveda', 'Unani', 'Siddha', 'Homoeopathy'],
    openings: 3,
    matchScore: 65,
    matchBreakdown: {
      skillCompatibility: 30,
      verifiedEvidence: 12,
      experience: 8,
      careerInterest: 7,
      preferences: 8,
      explanation: [
        'Data Analysis proficiency (42%) is below target threshold of 70%',
        'Strong medical terminology comprehension'
      ]
    },
    requiredSkills: [
      { name: 'Digital Health & Tele-AYUSH', required: 75, studentScore: 52 },
      { name: 'Data Analysis', required: 70, studentScore: 42 },
      { name: 'Clinical Documentation', required: 70, studentScore: 64 }
    ],
    description: 'Map diagnostic codes into international AYUSH terminology (NAMASTE portal and ICD-11 AYUSH module), analyzing tele-consultation data trends across 12 states.',
    status: 'NOT_APPLIED'
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'AYUSH Interventions for Stress Management & Cortisol Markers',
    description: 'Prospective observational study tracking clinical response to Ashwagandha & Shirodhara regimens in 30 working adults over 6 weeks. Documented subjective stress scales and salivary cortisol levels.',
    skillsDemonstrated: ['Ayurvedic Pharmacology', 'Clinical Documentation', 'Research Methodology', 'Patient Assessment'],
    evidenceUrl: 'https://digilocker.gov.in/mock-doc-verify/aiia-proj-2026-08',
    facultyVerification: {
      status: 'Verified',
      facultyName: 'Dr. Priya Nair',
      verifiedDate: '18 Aug 2026',
      remarks: 'Rigorous methodology followed. Standardized case reporting format aligned with AYUSH clinical trial criteria.'
    },
    industryFeedback: {
      company: 'Vaidya Analytics',
      reviewer: 'Rahul Mehta, Head of Talent',
      rating: 4.8,
      comment: 'Impressive experimental design and attention to bio-marker tracking. Outstanding student-led work.'
    }
  },
  {
    id: 'proj-02',
    title: 'Standardization and Fingerprinting of Triphala Formulations',
    description: 'Laboratory assessment of three commercial Triphala churna samples using TLC and tannin quantification methods according to Ayurvedic Pharmacopoeia of India (API).',
    skillsDemonstrated: ['Dravyaguna', 'Quality Control', 'Standardization', 'Laboratory Protocols'],
    facultyVerification: {
      status: 'Verified',
      facultyName: 'Dr. S. K. Joshi',
      verifiedDate: '02 Jul 2026',
      remarks: 'Excellent lab hygiene and reproducibility of spectrophotometric readings.'
    }
  },
  {
    id: 'proj-03',
    title: 'Clinical Data Analysis of Panchakarma Inpatient Registry',
    description: 'Digitization and statistical correlation analysis of 120 Vamana & Virechana inpatient discharge records to evaluate recovery latency in chronic osteoarthritis.',
    skillsDemonstrated: ['Data Analysis', 'Clinical Documentation', 'Biostatistics'],
    facultyVerification: {
      status: 'Pending Review',
      facultyName: 'Dr. Priya Nair',
      remarks: 'Submitted for faculty evaluation. Statistical correlation matrix under review.'
    }
  }
];

export const ASSESSMENT_QUESTIONS: Record<string, AssessmentQuestion[]> = {
  Ayurveda: [
    {
      id: 'q-1',
      type: 'scenario',
      question: 'A 45-year-old patient presents with chronic Sandhigata Vata (Osteoarthritis). In designing a clinical trial to assess Janu Basti with Sahacharadi Taila versus standard NSAID therapy, which primary outcome measure best adheres to both AYUSH clinical endpoints and GCP guidelines?',
      scenarioContext: 'Phase-II comparative clinical research setting at AIIA OPD.',
      options: [
        'Visual Analogue Scale (VAS) pain score paired with Western Ontario and McMaster Universities (WOMAC) Index at weeks 0, 4, and 8',
        'Subjective patient verbal report without standardized pain scale',
        'Single post-treatment X-ray without baseline comparison',
        'Blood sedimentation rate alone without functional mobility evaluation'
      ],
      correctIndex: 0,
      skillTag: 'Research Methodology',
      explanation: 'WOMAC Index combined with validated VAS pain scoring provides a standardized, objective quantitative metric acknowledged by global clinical bodies and AYUSH research guidelines.'
    },
    {
      id: 'q-2',
      type: 'mcq',
      question: 'Under classical Dravyaguna principles, what is the primary Vipaka (post-digestive metabolic transformation) of Pippali (Piper longum)?',
      options: [
        'Katu (Pungent)',
        'Madhura (Sweet)',
        'Amla (Sour)',
        'Tikta (Bitter)'
      ],
      correctIndex: 1,
      skillTag: 'Ayurvedic Pharmacology',
      explanation: 'Pippali possesses Katu Rasa and Ushna Virya, but uniquely undergoes Madhura Vipaka, making it an exceptional Rasayana that does not aggravate Pitta when used correctly.'
    },
    {
      id: 'q-3',
      type: 'scenario',
      question: 'When evaluating adverse drug reactions (ADR) in a multi-center AYUSH trial, which international documentation portal terminology is mandatory under the Pharmacovigilance Program for ASU & H Drugs?',
      options: [
        'WHO-UMC Causality Assessment criteria and NAMASTE portal diagnostic coding',
        'Generic social media sentiment survey',
        'Internal handwritten register without causality grading',
        'Standard commercial warranty claim log'
      ],
      correctIndex: 0,
      skillTag: 'Clinical Documentation',
      explanation: 'The National Pharmacovigilance Program for ASU & H drugs mandates WHO-UMC causality classification integrated with standardized NAMASTE terminology.'
    },
    {
      id: 'q-4',
      type: 'mcq',
      question: 'In statistical analysis of an AYUSH trial with 25 patients tested pre- and post-panchakarma on serum lipid profile (continuous normally distributed variables), which statistical test is most appropriate?',
      options: [
        'Paired Student t-test',
        'Chi-square test of independence',
        'Kaplan-Meier survival estimate',
        'Log-rank test'
      ],
      correctIndex: 0,
      skillTag: 'Data Analysis',
      explanation: 'For comparing continuous, normally distributed repeated measures on the same patient cohort before and after treatment, the Paired Student t-test is the standard statistical method.'
    }
  ]
};

export const INITIAL_VERIFICATION_QUEUE: VerificationQueueItem[] = [
  {
    id: 'vq-1',
    studentName: 'Ananya Sharma',
    studentProgram: 'BAMS — 3rd Year',
    studentId: 'usr-student-01',
    skillName: 'Clinical Data Analysis',
    projectTitle: 'Panchakarma Inpatient Registry Statistical Analysis',
    evidenceSummary: 'Analyzed 120 inpatient records; applied paired t-test on knee flexion ROM and WOMAC score; submitted R script & data sheet.',
    submittedDate: '02 Sep 2026',
    currentLevel: 'Self Declared',
    targetLevel: 'Faculty Verified',
    status: 'PENDING'
  },
  {
    id: 'vq-2',
    studentName: 'Rohan Deshmukh',
    studentProgram: 'BAMS — 4th Year',
    studentId: 'usr-student-02',
    skillName: 'Research Methodology',
    projectTitle: 'Ethical Review Protocol for Medhya Rasayana Trial',
    evidenceSummary: 'IEC clearance draft, patient consent forms in bilingual format, randomized allocation concealment schema.',
    submittedDate: '01 Sep 2026',
    currentLevel: 'Assessed',
    targetLevel: 'Faculty Verified',
    status: 'PENDING'
  },
  {
    id: 'vq-3',
    studentName: 'Kavita Verma',
    studentProgram: 'BNYS — 3rd Year',
    studentId: 'usr-student-03',
    skillName: 'Digital Health & Tele-AYUSH',
    projectTitle: 'Tele-Yoga Consultation Documentation Framework',
    evidenceSummary: 'Standardized case recording for 45 remote patients using NAMASTE diagnostic coding structure.',
    submittedDate: '30 Aug 2026',
    currentLevel: 'Assessed',
    targetLevel: 'Faculty Verified',
    status: 'PENDING'
  }
];

export const INDUSTRY_SKILL_DEMAND = [
  { skill: 'Clinical Research & GCP', demand: 86, studentReadiness: 58, gap: 28 },
  { skill: 'Quality Control & API Testing', demand: 78, studentReadiness: 65, gap: 13 },
  { skill: 'Ayurvedic Pharmacology', demand: 72, studentReadiness: 88, gap: -16 },
  { skill: 'Digital Health & EHR', demand: 70, studentReadiness: 52, gap: 18 },
  { skill: 'Clinical Data Analysis', demand: 63, studentReadiness: 32, gap: 31 },
  { skill: 'Standard Documentation', demand: 55, studentReadiness: 64, gap: -9 }
];

export const CURRICULUM_INSIGHTS: CurriculumInsightItem[] = [
  {
    id: 'ci-1',
    skillArea: 'AYUSH Clinical Data Analysis & Biostatistics',
    industryDemand: 82,
    studentProficiency: 31,
    gapSeverity: 'Critical',
    affectedPrograms: ['BAMS 3rd Year', 'BAMS 4th Year', 'BHMS 3rd Year'],
    fiveStepActionPlan: [
      'Faculty Development Program (FDP): 3-day workshop on Health Data Analytics in AYUSH',
      'Industry Expert Masterclass: Vaidya Analytics biostatisticians conduct 4 hands-on weekend sessions',
      'Curriculum Addendum: Integrate mandatory 15-hour practical module on statistical tools in R/Excel',
      'Industry Micro-Projects: Assign cohort-wide observational case dataset challenges',
      'Post-Module Reassessment: Standardized institutional competency test before clinical internship'
    ],
    status: 'Action Required'
  },
  {
    id: 'ci-2',
    skillArea: 'Digital Health, Tele-AYUSH & NAMASTE Coding',
    industryDemand: 74,
    studentProficiency: 44,
    gapSeverity: 'Moderate',
    affectedPrograms: ['BAMS', 'BNYS', 'BSMS'],
    fiveStepActionPlan: [
      'National Health Stack integration simulation sandbox for interns',
      'Hands-on training on NAMASTE ICD-11 AYUSH dual coding case recording',
      'Faculty certification in digital healthcare records management',
      'Industry live clinics demo by Tele-AYUSH partner platforms',
      'Student portfolio verification for electronic case sheet management'
    ],
    status: 'Workshop Scheduled'
  }
];

export const ACTIVE_MOUS: MoUItem[] = [
  {
    id: 'mou-1',
    partnerName: 'Kerala Ayurveda Ltd.',
    type: 'Clinical Training',
    validUntil: 'Nov 2027',
    studentsBenefited: 24,
    activeProjects: 3,
    status: 'Active'
  },
  {
    id: 'mou-2',
    partnerName: 'Vaidya Analytics & Health Systems',
    type: 'Digital AYUSH Analytics',
    validUntil: 'Mar 2028',
    studentsBenefited: 18,
    activeProjects: 4,
    status: 'Active'
  },
  {
    id: 'mou-3',
    partnerName: 'Prana Health Network',
    type: 'R&D Collaboration',
    validUntil: 'Dec 2026',
    studentsBenefited: 15,
    activeProjects: 2,
    status: 'Under Renewal'
  },
  {
    id: 'mou-4',
    partnerName: 'Himalayan Botanicals R&D Labs',
    type: 'Product Formulation',
    validUntil: 'Aug 2027',
    studentsBenefited: 12,
    activeProjects: 2,
    status: 'Active'
  }
];

export const INDUSTRY_PROJECTS: IndustryProject[] = [
  {
    id: 'ip-1',
    title: 'AI-Based Ayurvedic Literature & Shloka Clinical Extraction',
    industryPartner: 'Vaidya Analytics',
    description: 'Constructing standardized NLP knowledge graphs mapping Charaka Samhita formulation guidelines to modern clinical disease phenotypes.',
    duration: '8 Weeks',
    teamSize: 4,
    mentorName: 'Dr. Priya Nair & Rahul Mehta',
    requiredSkills: ['Ayurvedic Pharmacology', 'Digital Health', 'Documentation'],
    disciplines: ['Ayurveda'],
    openSlots: 2
  },
  {
    id: 'ip-2',
    title: 'Clinical Outcome Mapping for Panchakarma Procedures',
    industryPartner: 'Kerala Ayurveda Ltd.',
    description: 'Longitudinal observation and digital documentation of biomarker response in Panchakarma metabolic rehab patients.',
    duration: '12 Weeks',
    teamSize: 5,
    mentorName: 'Dr. S. K. Joshi',
    requiredSkills: ['Panchakarma Therapy', 'Clinical Documentation', 'Data Analysis'],
    disciplines: ['Ayurveda'],
    openSlots: 1
  },
  {
    id: 'ip-3',
    title: 'Digital Documentation for Integrative AYUSH Clinics',
    industryPartner: 'Prana Health Network',
    description: 'Creating structured electronic clinical templates conforming with NABH AYUSH hospital standards.',
    duration: '6 Weeks',
    teamSize: 3,
    mentorName: 'Dr. Anand Raman',
    requiredSkills: ['Clinical Documentation', 'Digital Health'],
    disciplines: ['Ayurveda', 'Yoga & Naturopathy', 'Homoeopathy'],
    openSlots: 3
  }
];

export const MENTORS_LIST: MentorProfile[] = [
  {
    id: 'men-1',
    name: 'Dr. Priya Nair',
    title: 'Associate Professor & Research Lead',
    organization: 'All India Institute of Ayurveda',
    expertise: ['Clinical Trials', 'Pharmacovigilance', 'Dravyaguna'],
    experienceYears: 14,
    availableSlots: 4,
    rating: 4.9
  },
  {
    id: 'men-2',
    name: 'Dr. Rajeshwar V.',
    title: 'Chief Scientist, Formulations',
    organization: 'Himalayan Botanicals R&D',
    expertise: ['Herbal Drug Standardization', 'Phytochemistry', 'Regulatory AYUSH'],
    experienceYears: 18,
    availableSlots: 2,
    rating: 4.8
  },
  {
    id: 'men-3',
    name: 'Dr. Aruna Shastri',
    title: 'Director, Clinical Services',
    organization: 'Kerala Ayurveda Health Systems',
    expertise: ['Panchakarma Protocols', 'Integrative Medicine', 'OPD Management'],
    experienceYears: 16,
    availableSlots: 5,
    rating: 5.0
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Skill Evidence Verified',
    message: 'Dr. Priya Nair approved your Panchakarma Inpatient Registry project with Distinction.',
    type: 'verification',
    timestamp: '10 min ago',
    isRead: false
  },
  {
    id: 'notif-2',
    title: 'High AI Internship Match',
    message: '92% Match with "Clinical Research Intern" at Vaidya Analytics based on your updated skills.',
    type: 'match',
    timestamp: '2 hours ago',
    isRead: false
  },
  {
    id: 'notif-3',
    title: 'New Institutional Skill Gap Detected',
    message: 'Data Analysis has been identified as a 31% institutional gap across 3rd-year BAMS cohorts.',
    type: 'gap',
    timestamp: '1 day ago',
    isRead: true
  }
];

export const CALENDAR_EVENTS: CalendarEventItem[] = [
  {
    id: 'cal-1',
    title: 'Clinical Research Protocol Interview',
    category: 'Interview',
    date: 'Sep 06, 2026',
    time: '11:00 AM — 11:45 AM',
    locationOrLink: 'Google Meet / Vaidya Analytics Room 4'
  },
  {
    id: 'cal-2',
    title: 'Mentorship Session with Dr. Priya Nair',
    category: 'Mentor Session',
    date: 'Sep 08, 2026',
    time: '03:30 PM — 04:15 PM',
    locationOrLink: 'Faculty Cabin 204, AIIA Complex'
  },
  {
    id: 'cal-3',
    title: 'AYUSH Biostatistics Workshop (FDP & Students)',
    category: 'Workshop',
    date: 'Sep 12, 2026',
    time: '10:00 AM — 01:00 PM',
    locationOrLink: 'AIIA Auditorium & Live Stream'
  }
];
