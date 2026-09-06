import React from 'react';
import { useApp } from '../../store';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  X, 
  Play, 
  UserCheck, 
  Briefcase, 
  Building2, 
  GraduationCap
} from 'lucide-react';

interface GuidedDemoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: string) => void;
}

export const GuidedDemoTourModal: React.FC<GuidedDemoTourModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab
}) => {
  const { 
    demoStep, 
    setDemoStep, 
    loginAsRole, 
    updateSkillScore, 
    approveVerification, 
    applyOpportunity,
    verificationQueue,
    opportunities,
    showToast 
  } = useApp();

  if (!isOpen) return null;

  const tourSteps = [
    {
      step: 1,
      title: '1. Welcoming Split-Screen Entry',
      role: 'STUDENT',
      tab: 'dashboard',
      description: 'Ananya Sharma logs in with role-personalized welcome card showing 78% readiness for Clinical Research.',
      actionLabel: 'View Student Dashboard',
      action: () => {
        loginAsRole('student');
        onNavigateTab('dashboard');
      }
    },
    {
      step: 2,
      title: '2. Proctored Clinical Skill Assessment',
      role: 'STUDENT',
      tab: 'assessment',
      description: 'Ananya takes an interactive Ayurveda MCQ and clinical trial scenario test calibrated with AIIA protocols.',
      actionLabel: 'Open Skill Assessment',
      action: () => {
        loginAsRole('student');
        onNavigateTab('assessment');
      }
    },
    {
      step: 3,
      title: '3. Skill Gap Diagnosis Appears',
      role: 'STUDENT',
      tab: 'gaps',
      description: 'System benchmarks student against Clinical Research Intern job: Critical 28% gap detected in Data Analysis!',
      actionLabel: 'Inspect Skill Gap Matrix',
      action: () => {
        onNavigateTab('gaps');
      }
    },
    {
      step: 4,
      title: '4. AI Career Roadmap & What-If Simulation',
      role: 'STUDENT',
      tab: 'simulator',
      description: 'Ananya simulates adding Data Analysis & Research Project: readiness jumps from 78% to 91%, unlocking 3 fellowships.',
      actionLabel: 'Launch What-If Sandbox',
      action: () => {
        onNavigateTab('simulator');
      }
    },
    {
      step: 5,
      title: '5. Student Submits Research Evidence',
      role: 'STUDENT',
      tab: 'passport',
      description: 'Ananya submits "Panchakarma Inpatient Registry Statistical Analysis" with DigiLocker reference for faculty evaluation.',
      actionLabel: 'View Verified Passport & Portfolio',
      action: () => {
        onNavigateTab('passport');
      }
    },
    {
      step: 6,
      title: '6. Faculty Endorsement & Verification Badge',
      role: 'FACULTY',
      tab: 'faculty-portal',
      description: 'Dr. Priya Nair opens her verification queue, reviews Ananya\'s trial dataset, and grants the "Faculty Verified" badge.',
      actionLabel: 'Switch to Faculty Verification Queue',
      action: () => {
        loginAsRole('faculty');
        onNavigateTab('faculty-portal');
        if (verificationQueue.length > 0) {
          approveVerification(verificationQueue[0].id);
        }
      }
    },
    {
      step: 7,
      title: '7. Verified Readiness Elevates to 86%',
      role: 'STUDENT',
      tab: 'dashboard',
      description: 'With Dr. Priya\'s verified badge, Ananya\'s career readiness score immediately elevates across the platform.',
      actionLabel: 'Verify Readiness Increase on Dashboard',
      action: () => {
        loginAsRole('student');
        updateSkillScore('Data Analysis', 72, 'Faculty Verified');
        onNavigateTab('dashboard');
      }
    },
    {
      step: 8,
      title: '8. Explainable AI Match Triggers (92%)',
      role: 'STUDENT',
      tab: 'opportunities',
      description: 'Transparent matching engine pairs Ananya with Clinical Research Intern at Vaidya Analytics (92% Match Score).',
      actionLabel: 'Review AI Match Breakdown & Apply',
      action: () => {
        onNavigateTab('opportunities');
        if (opportunities.length > 0) {
          applyOpportunity(opportunities[0].id);
        }
      }
    },
    {
      step: 9,
      title: '9. Industry Recruiter Discovers Top Candidate',
      role: 'INDUSTRY',
      tab: 'recruiter-dashboard',
      description: 'Rahul Mehta (Vaidya Analytics) reviews Ananya\'s application, verified skill badges, and shortlists her for interview.',
      actionLabel: 'Switch to Recruiter Dashboard',
      action: () => {
        loginAsRole('industry');
        onNavigateTab('recruiter-dashboard');
      }
    },
    {
      step: 10,
      title: '10. Industry Skill Demand Heatmap',
      role: 'INDUSTRY',
      tab: 'demand-intelligence',
      description: 'Recruiter views macro industry demand vs student supply heatmap identifying the national 31% Data Analysis gap.',
      actionLabel: 'View Industry Demand Heatmap',
      action: () => {
        onNavigateTab('demand-intelligence');
      }
    },
    {
      step: 11,
      title: '11. Institution Curriculum Intelligence Action',
      role: 'INSTITUTION',
      tab: 'curriculum',
      description: 'AIIA Academic Council actions a 5-step remediation plan (Faculty Development Program + practical statistical module).',
      actionLabel: 'Open Curriculum Intelligence Action',
      action: () => {
        loginAsRole('institution');
        onNavigateTab('curriculum');
      }
    },
    {
      step: 12,
      title: '12. Complete Ecosystem Closed Loop Screen',
      role: 'MINISTRY',
      tab: 'ecosystem-overview',
      description: 'The final screen demonstrates the closed-loop cycle connecting demand, assessment, verification, placement, and institutional reform.',
      actionLabel: 'View Full Closed-Loop Overview',
      action: () => {
        loginAsRole('ministry');
        onNavigateTab('ecosystem-overview');
      }
    }
  ];

  const current = tourSteps[demoStep - 1] || tourSteps[0];

  const handleNext = () => {
    current.action();
    if (demoStep < tourSteps.length) {
      setDemoStep(demoStep + 1);
    }
  };

  const handlePrev = () => {
    if (demoStep > 1) {
      const prevStep = tourSteps[demoStep - 2];
      prevStep.action();
      setDemoStep(demoStep - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-6 animate-scale-up">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-ayush-amber-100 text-ayush-amber-800">
              <Sparkles className="w-4 h-4" />
            </span>
            <h3 className="font-extrabold text-sm sm:text-base text-slate-900">
              SIH 2026 PS26044 Interactive Guided Demo
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-600">
            <span>Step {current.step} of {tourSteps.length}</span>
            <span className="text-ayush-teal-800 uppercase font-mono">{current.role} PERSPECTIVE</span>
          </div>
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-ayush-teal-700 to-ayush-green-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${(current.step / tourSteps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Details Card */}
        <div className="p-5 rounded-2xl bg-ayush-mint-50/70 border border-ayush-teal-200 space-y-3">
          <h4 className="font-extrabold text-base text-ayush-teal-950">
            {current.title}
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Quick Jump Buttons */}
        <div className="space-y-1.5">
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            Quick Jump to Any Stage:
          </p>
          <div className="grid grid-cols-6 gap-1.5">
            {tourSteps.map((s) => (
              <button
                key={s.step}
                onClick={() => {
                  s.action();
                  setDemoStep(s.step);
                }}
                className={`py-1 text-xs font-mono font-bold rounded-lg border transition-all ${
                  demoStep === s.step
                    ? 'bg-ayush-teal-800 text-white border-ayush-teal-800 shadow-sm'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                #{s.step}
              </button>
            ))}
          </div>
        </div>

        {/* Stepper Navigation */}
        <div className="pt-2 flex items-center justify-between gap-3 border-t border-slate-100">
          <button
            disabled={demoStep === 1}
            onClick={handlePrev}
            className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs disabled:opacity-40 flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            className="px-5 py-2.5 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <span>{current.actionLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
