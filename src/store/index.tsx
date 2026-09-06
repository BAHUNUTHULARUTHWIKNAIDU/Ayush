import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserSession, 
  UserRole, 
  SkillScore, 
  SkillGapDetail, 
  RoadmapStep, 
  Opportunity, 
  ProjectItem, 
  VerificationQueueItem, 
  NotificationItem, 
  CurriculumInsightItem 
} from '../types';
import { 
  DEMO_USERS, 
  INITIAL_SKILLS, 
  INITIAL_SKILL_GAPS, 
  FOUR_WEEK_ROADMAP, 
  MOCK_OPPORTUNITIES, 
  INITIAL_PROJECTS, 
  INITIAL_VERIFICATION_QUEUE, 
  INITIAL_NOTIFICATIONS, 
  CURRICULUM_INSIGHTS 
} from '../data/seedData';

interface AppContextType {
  currentUser: UserSession | null;
  activeRole: UserRole;
  setCurrentUser: (user: UserSession | null) => void;
  loginAsRole: (roleKey: 'student' | 'faculty' | 'industry' | 'institution' | 'ministry') => void;
  logout: () => void;
  
  // Student State
  skills: SkillScore[];
  skillGaps: SkillGapDetail[];
  roadmap: RoadmapStep[];
  opportunities: Opportunity[];
  projects: ProjectItem[];
  careerReadiness: number;
  
  // Actions
  updateSkillScore: (skillName: string, newScore: number, verificationTier?: string) => void;
  toggleRoadmapItem: (stepId: string) => void;
  applyOpportunity: (oppId: string) => void;
  submitProjectForVerification: (project: Omit<ProjectItem, 'id' | 'facultyVerification'>) => void;
  
  // Faculty State & Actions
  verificationQueue: VerificationQueueItem[];
  approveVerification: (queueId: string, remarks?: string) => void;
  rejectVerification: (queueId: string, remarks?: string) => void;
  
  // Notifications
  notifications: NotificationItem[];
  addNotification: (title: string, message: string, type?: NotificationItem['type']) => void;
  markAllNotificationsRead: () => void;
  
  // Curriculum Insights
  curriculumInsights: CurriculumInsightItem[];
  advanceCurriculumStatus: (insightId: string) => void;
  
  // SIH Judge Demo Guided Tour
  demoStep: number;
  setDemoStep: (step: number) => void;
  resetDemoData: () => void;

  // Copilot Drawer
  isCopilotOpen: boolean;
  setIsCopilotOpen: (open: boolean) => void;

  // Toast System
  toast: { message: string; type: 'success' | 'info' | 'warning' } | null;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
  hideToast: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const STORAGE_KEY = 'ayush_skillconnect_state_v1';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try loading from localStorage
  const savedState = (() => {
    try {
      const item = localStorage.getItem(STORAGE_KEY);
      return item ? JSON.parse(item) : null;
    } catch {
      return null;
    }
  })();

  const [currentUser, setCurrentUser] = useState<UserSession | null>(
    savedState?.currentUser !== undefined ? savedState.currentUser : DEMO_USERS.student
  );
  const [skills, setSkills] = useState<SkillScore[]>(savedState?.skills || INITIAL_SKILLS);
  const [skillGaps, setSkillGaps] = useState<SkillGapDetail[]>(savedState?.skillGaps || INITIAL_SKILL_GAPS);
  const [roadmap, setRoadmap] = useState<RoadmapStep[]>(savedState?.roadmap || FOUR_WEEK_ROADMAP);
  const [opportunities, setOpportunities] = useState<Opportunity[]>(savedState?.opportunities || MOCK_OPPORTUNITIES);
  const [projects, setProjects] = useState<ProjectItem[]>(savedState?.projects || INITIAL_PROJECTS);
  const [verificationQueue, setVerificationQueue] = useState<VerificationQueueItem[]>(
    savedState?.verificationQueue || INITIAL_VERIFICATION_QUEUE
  );
  const [notifications, setNotifications] = useState<NotificationItem[]>(
    savedState?.notifications || INITIAL_NOTIFICATIONS
  );
  const [curriculumInsights, setCurriculumInsights] = useState<CurriculumInsightItem[]>(
    savedState?.curriculumInsights || CURRICULUM_INSIGHTS
  );
  const [demoStep, setDemoStep] = useState<number>(savedState?.demoStep || 1);
  const [isCopilotOpen, setIsCopilotOpen] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'warning' } | null>(null);

  // Compute live career readiness based on core skills
  const careerReadiness = Math.round(
    skills.reduce((acc, s) => acc + s.score, 0) / (skills.length || 1)
  );

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        currentUser,
        skills,
        skillGaps,
        roadmap,
        opportunities,
        projects,
        verificationQueue,
        notifications,
        curriculumInsights,
        demoStep
      }));
    } catch (e) {
      console.warn('Unable to persist to localStorage', e);
    }
  }, [currentUser, skills, skillGaps, roadmap, opportunities, projects, verificationQueue, notifications, curriculumInsights, demoStep]);

  const activeRole: UserRole = currentUser?.role || 'STUDENT';

  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const hideToast = () => setToast(null);

  const loginAsRole = (roleKey: 'student' | 'faculty' | 'industry' | 'institution' | 'ministry') => {
    const user = DEMO_USERS[roleKey];
    setCurrentUser(user);
    
    // Trigger customized welcome message
    const roleTitles: Record<string, string> = {
      student: "Welcome back, Ananya! Let's continue building your AYUSH career.",
      faculty: "Welcome, Dr. Priya! 3 students need your attention today.",
      industry: "Welcome back, Rahul! 8 new verified candidates match your requirements.",
      institution: "Welcome, Dean Prasad! A new high-priority skill gap has been detected.",
      ministry: "Welcome, Director Kumar! National AYUSH Skill Intelligence loaded."
    };
    showToast(roleTitles[roleKey], 'success');
  };

  const logout = () => {
    setCurrentUser(null);
    showToast('Logged out successfully', 'info');
  };

  const addNotification = (title: string, message: string, type: NotificationItem['type'] = 'skill') => {
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title,
      message,
      type,
      timestamp: 'Just now',
      isRead: false
    };
    setNotifications(prev => [newNotif, ...prev]);
  };

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const updateSkillScore = (skillName: string, newScore: number, verificationTier = 'Faculty Verified') => {
    setSkills(prev => prev.map(s => {
      if (s.name.toLowerCase().includes(skillName.toLowerCase())) {
        return {
          ...s,
          score: newScore,
          verifiedLevel: verificationTier as any,
          lastUpdated: 'Today'
        };
      }
      return s;
    }));

    // Update skill gaps dynamically
    setSkillGaps(prev => prev.map(gap => {
      if (gap.skillName.toLowerCase().includes(skillName.toLowerCase())) {
        const newGap = Math.max(0, gap.requiredScore - newScore);
        return {
          ...gap,
          currentScore: newScore,
          gapPercentage: newGap,
          priority: newGap > 20 ? 'HIGH' : newGap > 10 ? 'MEDIUM' : 'LOW'
        };
      }
      return gap;
    }));

    // Boost opportunity matching
    setOpportunities(prev => prev.map(opp => {
      const hasSkill = opp.requiredSkills.some(rs => rs.name.toLowerCase().includes(skillName.toLowerCase()));
      if (hasSkill) {
        const newMatch = Math.min(99, opp.matchScore + 6);
        return {
          ...opp,
          matchScore: newMatch,
          matchBreakdown: {
            ...opp.matchBreakdown,
            verifiedEvidence: Math.min(20, opp.matchBreakdown.verifiedEvidence + 4)
          }
        };
      }
      return opp;
    }));

    addNotification('Skill Profile Updated', `${skillName} is now at ${newScore}% (${verificationTier})`, 'skill');
    showToast(`${skillName} updated to ${newScore}% (${verificationTier})`, 'success');
  };

  const toggleRoadmapItem = (stepId: string) => {
    setRoadmap(prev => prev.map(step => {
      if (step.id === stepId) {
        const updated = !step.isCompleted;
        if (updated) {
          showToast(`Completed: ${step.title}`, 'success');
        }
        return { ...step, isCompleted: updated };
      }
      return step;
    }));
  };

  const applyOpportunity = (oppId: string) => {
    setOpportunities(prev => prev.map(opp => {
      if (opp.id === oppId) {
        return { ...opp, status: 'APPLIED' };
      }
      return opp;
    }));
    const opp = opportunities.find(o => o.id === oppId);
    showToast(`Application submitted to ${opp?.company || 'Industry Partner'}!`, 'success');
    addNotification('Application Submitted', `Your application for ${opp?.title} is now under review.`, 'match');
  };

  const submitProjectForVerification = (project: Omit<ProjectItem, 'id' | 'facultyVerification'>) => {
    const newProjId = `proj-${Date.now()}`;
    const newProject: ProjectItem = {
      ...project,
      id: newProjId,
      facultyVerification: {
        status: 'Pending Review',
        facultyName: 'Dr. Priya Nair',
        remarks: 'Submitted for faculty evaluation.'
      }
    };
    setProjects(prev => [newProject, ...prev]);

    // Add to Faculty verification queue
    const newQueueItem: VerificationQueueItem = {
      id: `vq-${Date.now()}`,
      studentName: currentUser?.fullName || 'Ananya Sharma',
      studentProgram: currentUser?.titleOrProgram || 'BAMS — 3rd Year',
      studentId: currentUser?.id || 'usr-student-01',
      skillName: project.skillsDemonstrated[0] || 'Clinical Data Analysis',
      projectTitle: project.title,
      evidenceSummary: project.description.slice(0, 120) + '...',
      submittedDate: 'Today',
      currentLevel: 'Self Declared',
      targetLevel: 'Faculty Verified',
      status: 'PENDING'
    };
    setVerificationQueue(prev => [newQueueItem, ...prev]);
    showToast('Project submitted! Queued for faculty verification by Dr. Priya Nair.', 'success');
    addNotification('Project Submitted', `"${project.title}" queued for faculty review.`, 'verification');
  };

  const approveVerification = (queueId: string, remarks = 'Demonstrated rigorous methodology.') => {
    const item = verificationQueue.find(q => q.id === queueId);
    if (!item) return;

    setVerificationQueue(prev => prev.map(q => q.id === queueId ? { ...q, status: 'APPROVED' } : q));

    // Update the skill score
    updateSkillScore(item.skillName, 74, 'Faculty Verified');

    // Update project status if matching
    setProjects(prev => prev.map(p => {
      if (p.title.toLowerCase().includes(item.projectTitle.toLowerCase()) || item.projectTitle.toLowerCase().includes(p.title.toLowerCase())) {
        return {
          ...p,
          facultyVerification: {
            status: 'Verified',
            facultyName: currentUser?.fullName || 'Dr. Priya Nair',
            verifiedDate: 'Today',
            remarks
          }
        };
      }
      return p;
    }));

    showToast(`Approved evidence for ${item.studentName}! Skill verified.`, 'success');
    addNotification('Evidence Verified', `Dr. Priya Nair verified ${item.studentName}'s competency in ${item.skillName}.`, 'verification');
  };

  const rejectVerification = (queueId: string, remarks = 'Additional data points requested.') => {
    setVerificationQueue(prev => prev.map(q => q.id === queueId ? { ...q, status: 'REJECTED' } : q));
    showToast('Revision requested from student with comments.', 'info');
  };

  const advanceCurriculumStatus = (insightId: string) => {
    setCurriculumInsights(prev => prev.map(item => {
      if (item.id === insightId) {
        const nextStatus = item.status === 'Action Required' 
          ? 'FDP in Progress' 
          : item.status === 'FDP in Progress' 
          ? 'Curriculum Updated' 
          : 'Action Required';
        return { ...item, status: nextStatus as any };
      }
      return item;
    }));
    showToast('Curriculum remediation progress updated!', 'success');
  };

  const resetDemoData = () => {
    setSkills(INITIAL_SKILLS);
    setSkillGaps(INITIAL_SKILL_GAPS);
    setRoadmap(FOUR_WEEK_ROADMAP);
    setOpportunities(MOCK_OPPORTUNITIES);
    setProjects(INITIAL_PROJECTS);
    setVerificationQueue(INITIAL_VERIFICATION_QUEUE);
    setNotifications(INITIAL_NOTIFICATIONS);
    setCurriculumInsights(CURRICULUM_INSIGHTS);
    setDemoStep(1);
    setCurrentUser(DEMO_USERS.student);
    localStorage.removeItem(STORAGE_KEY);
    showToast('Demo data reset to default benchmark.', 'info');
  };

  return (
    <AppContext.Provider value={{
      currentUser,
      activeRole,
      setCurrentUser,
      loginAsRole,
      logout,
      skills,
      skillGaps,
      roadmap,
      opportunities,
      projects,
      careerReadiness,
      updateSkillScore,
      toggleRoadmapItem,
      applyOpportunity,
      submitProjectForVerification,
      verificationQueue,
      approveVerification,
      rejectVerification,
      notifications,
      addNotification,
      markAllNotificationsRead,
      curriculumInsights,
      advanceCurriculumStatus,
      demoStep,
      setDemoStep,
      resetDemoData,
      isCopilotOpen,
      setIsCopilotOpen,
      toast,
      showToast,
      hideToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
