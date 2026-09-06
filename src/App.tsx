import React, { useState } from 'react';
import { useApp } from './store';
import { DemoBanner } from './components/common/DemoBanner';
import { Navbar } from './components/common/Navbar';
import { Sidebar } from './components/common/Sidebar';
import { MobileNav } from './components/common/MobileNav';
import { Toast } from './components/common/Toast';
import { CareerCopilotDrawer } from './components/copilot/CareerCopilotDrawer';

// Auth & Landing
import { LoginSplitScreen } from './components/auth/LoginSplitScreen';
import { LandingPage } from './components/landing/LandingPage';

// Student Workspace
import { StudentDashboard } from './components/student/StudentDashboard';
import { SkillAssessmentView } from './components/student/SkillAssessmentView';
import { SkillGapAnalysisView } from './components/student/SkillGapAnalysisView';
import { CareerTwinView } from './components/student/CareerTwinView';
import { WhatIfSimulatorView } from './components/student/WhatIfSimulatorView';
import { PersonalizedRoadmapView } from './components/student/PersonalizedRoadmapView';
import { LearningHubView } from './components/student/LearningHubView';
import { VerifiedPassportView } from './components/student/VerifiedPassportView';
import { OpportunitiesView } from './components/student/OpportunitiesView';
import { ApplicationsCalendarView } from './components/student/ApplicationsCalendarView';

// Faculty Portal
import { FacultyDashboard } from './components/faculty/FacultyDashboard';

// Recruiter Portal
import { RecruiterDashboard } from './components/recruiter/RecruiterDashboard';
import { DemandIntelligenceView } from './components/recruiter/DemandIntelligenceView';

// Institution Portal
import { InstitutionDashboard } from './components/institution/InstitutionDashboard';
import { CurriculumIntelligenceView } from './components/institution/CurriculumIntelligenceView';

// Ministry Portal
import { MinistryDashboard } from './components/ministry/MinistryDashboard';

// Collaboration Hub
import { CollaborationHubView } from './components/collaboration/CollaborationHubView';

// Demo & Overview
import { ClosedLoopOverviewScreen } from './components/demo/ClosedLoopOverviewScreen';
import { GuidedDemoTourModal } from './components/demo/GuidedDemoTourModal';

export const App: React.FC = () => {
  const { currentUser } = useApp();

  const [viewMode, setViewMode] = useState<'app' | 'login' | 'landing'>('app');
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isSidebarOpenMobile, setIsSidebarOpenMobile] = useState<boolean>(false);
  const [isTourOpen, setIsTourOpen] = useState<boolean>(false);

  // If logged out, render the Login experience
  if (!currentUser && viewMode !== 'landing') {
    return (
      <>
        <LoginSplitScreen
          onLoginSuccess={() => setViewMode('app')}
          onExploreLanding={() => setViewMode('landing')}
        />
        <Toast />
      </>
    );
  }

  // If user requested public Landing Page
  if (viewMode === 'landing') {
    return (
      <>
        <LandingPage
          onEnterPlatform={() => setViewMode(currentUser ? 'app' : 'login')}
          onOpenFinalScreen={() => {
            setViewMode('app');
            setActiveTab('ecosystem-overview');
          }}
        />
        <Toast />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F9F7] flex flex-col">
      {/* Top SIH Hackathon Demo Banner */}
      <DemoBanner
        onOpenTour={() => setIsTourOpen(true)}
        onOpenFinalScreen={() => setActiveTab('ecosystem-overview')}
      />

      {/* Main Navbar */}
      <Navbar
        onToggleSidebar={() => setIsSidebarOpenMobile(!isSidebarOpenMobile)}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />

      {/* Body Layout: Sidebar + Dynamic Main Content */}
      <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
        {/* Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={(tab) => {
            if (tab === 'demo-tour') {
              setIsTourOpen(true);
            } else {
              setActiveTab(tab);
            }
          }}
          isOpenMobile={isSidebarOpenMobile}
          onCloseMobile={() => setIsSidebarOpenMobile(false)}
        />

        {/* Main Content Pane */}
        <main className="flex-1 lg:pl-72 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-12 max-w-full overflow-x-hidden">
          {/* Dynamic Route Switching */}
          {activeTab === 'dashboard' && <StudentDashboard onNavigateTab={setActiveTab} />}
          {activeTab === 'assessment' && <SkillAssessmentView onNavigateTab={setActiveTab} />}
          {activeTab === 'gaps' && <SkillGapAnalysisView onNavigateTab={setActiveTab} />}
          {activeTab === 'twin' && <CareerTwinView onNavigateTab={setActiveTab} />}
          {activeTab === 'simulator' && <WhatIfSimulatorView onNavigateTab={setActiveTab} />}
          {activeTab === 'roadmap' && <PersonalizedRoadmapView onNavigateTab={setActiveTab} />}
          {activeTab === 'learning' && <LearningHubView onNavigateTab={setActiveTab} />}
          {activeTab === 'passport' && <VerifiedPassportView onNavigateTab={setActiveTab} />}
          {activeTab === 'opportunities' && <OpportunitiesView onNavigateTab={setActiveTab} />}
          {activeTab === 'applications' && <ApplicationsCalendarView />}
          {activeTab === 'calendar' && <ApplicationsCalendarView />}

          {/* Collaboration Hub */}
          {activeTab === 'industry-projects' && <CollaborationHubView initialSubTab="projects" />}
          {activeTab === 'mentorship' && <CollaborationHubView initialSubTab="mentors" />}
          {activeTab === 'fdps' && <CollaborationHubView initialSubTab="fdps" />}
          {activeTab === 'mous' && <CollaborationHubView initialSubTab="mous" />}

          {/* Institution */}
          {activeTab === 'inst-intelligence' && <InstitutionDashboard onNavigateTab={setActiveTab} />}
          {activeTab === 'curriculum' && <CurriculumIntelligenceView />}
          {activeTab === 'faculty-portal' && <FacultyDashboard onNavigateTab={setActiveTab} />}

          {/* Industry */}
          {activeTab === 'recruiter-dashboard' && <RecruiterDashboard onNavigateTab={setActiveTab} />}
          {activeTab === 'talent-search' && <RecruiterDashboard onNavigateTab={setActiveTab} />}
          {activeTab === 'demand-intelligence' && <DemandIntelligenceView />}

          {/* Ministry */}
          {currentUser?.role === 'MINISTRY' && activeTab === 'dashboard' && <MinistryDashboard />}

          {/* Final Closed-Loop Overview Screen */}
          {activeTab === 'ecosystem-overview' && <ClosedLoopOverviewScreen onNavigateTab={setActiveTab} />}
        </main>
      </div>

      {/* Floating AYUSH Career Copilot Drawer */}
      <CareerCopilotDrawer onNavigateTab={setActiveTab} />

      {/* Guided SIH Demo Tour Modal */}
      <GuidedDemoTourModal
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onNavigateTab={setActiveTab}
      />

      {/* Mobile Bottom Navigation */}
      <MobileNav
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
      />

      {/* Global Toast */}
      <Toast />
    </div>
  );
};

export default App;
