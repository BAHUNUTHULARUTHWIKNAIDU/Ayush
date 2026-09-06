import React from 'react';
import { 
  Network, 
  ArrowDown, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Briefcase, 
  UserCheck, 
  Building2, 
  GraduationCap, 
  ClipboardCheck, 
  GitCompare, 
  Award,
  RefreshCw
} from 'lucide-react';

interface ClosedLoopOverviewScreenProps {
  onNavigateTab: (tab: string) => void;
}

export const ClosedLoopOverviewScreen: React.FC<ClosedLoopOverviewScreenProps> = ({ onNavigateTab }) => {
  const lifecycleStages = [
    {
      step: 1,
      title: 'Industry Skill Demand',
      description: 'ASU manufacturers & clinical trial CROs publish real-time competency needs (e.g. Clinical Data Analysis 63% demand).',
      icon: TrendingUp,
      badge: 'Demand Signal',
      color: 'border-ayush-teal-400 bg-ayush-teal-50/80 text-ayush-teal-950',
      actionTab: 'demand-intelligence'
    },
    {
      step: 2,
      title: 'AYUSH Skill Taxonomy',
      description: 'Standardized mapping of classical pharmacology, Panchakarma, and modern clinical research protocols across 6 streams.',
      icon: Network,
      badge: 'Taxonomy',
      color: 'border-slate-300 bg-slate-50 text-slate-900',
      actionTab: 'dashboard'
    },
    {
      step: 3,
      title: 'Student Skill Assessment',
      description: 'Students take proctored MCQ & scenario-based clinical case tests aligned with AIIA and NCISM standards.',
      icon: ClipboardCheck,
      badge: 'Assessment',
      color: 'border-blue-400 bg-blue-50/80 text-blue-950',
      actionTab: 'assessment'
    },
    {
      step: 4,
      title: 'Skill Gap Analysis',
      description: 'Transparent comparison: Industry Benchmark vs Student Capability with RAG priority diagnosis (e.g. 28% Data Analysis gap).',
      icon: GitCompare,
      badge: 'Gap Intelligence',
      color: 'border-rose-400 bg-rose-50/80 text-rose-950',
      actionTab: 'gaps'
    },
    {
      step: 5,
      title: 'AI Career Roadmap & What-If',
      description: 'Automated 4-week tailored pathway with simulation sandbox projecting readiness gains (+8% with biostatistics).',
      icon: Sparkles,
      badge: 'AI Roadmap',
      color: 'border-ayush-amber-400 bg-amber-50/80 text-amber-950',
      actionTab: 'roadmap'
    },
    {
      step: 6,
      title: 'Projects & Hands-on Modules',
      description: 'Students complete observational registry analyses and submit laboratory monographs linked to DigiLocker.',
      icon: GraduationCap,
      badge: 'Experiential',
      color: 'border-purple-400 bg-purple-50/80 text-purple-950',
      actionTab: 'learning'
    },
    {
      step: 7,
      title: 'Evidence-Based Verification',
      description: 'Faculty mentors (Dr. Priya Nair) review project evidence and issue "Faculty Verified" badges in student passport.',
      icon: UserCheck,
      badge: 'Trust & Badges',
      color: 'border-emerald-400 bg-emerald-50/80 text-emerald-950',
      actionTab: 'passport'
    },
    {
      step: 8,
      title: 'Explainable AI Internship Matching',
      description: '5-vector transparent match score (92% for Vaidya Analytics) eliminating black-box bias and driving applications.',
      icon: Briefcase,
      badge: 'Placement',
      color: 'border-ayush-green-400 bg-ayush-mint-50/80 text-ayush-teal-950',
      actionTab: 'opportunities'
    },
    {
      step: 9,
      title: 'Employer Feedback & Rating',
      description: 'Recruiter Rahul Mehta evaluates student clinical performance during internship, feeding back empirical data.',
      icon: Award,
      badge: 'Evaluation',
      color: 'border-amber-400 bg-amber-50/80 text-amber-950',
      actionTab: 'recruiter-dashboard'
    },
    {
      step: 10,
      title: 'Institutional Curriculum Action',
      description: 'AIIA detects cohort-wide shortfalls, launches Faculty Development Programs (FDPs), and updates practical syllabi.',
      icon: Building2,
      badge: 'Closed Loop',
      color: 'border-ayush-teal-600 bg-ayush-teal-900 text-white',
      actionTab: 'curriculum'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-ayush-teal-950 via-ayush-teal-900 to-ayush-green-950 rounded-3xl p-8 sm:p-10 text-white shadow-elevation">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ayush-amber-400 text-ayush-teal-950 text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> SIH 2026 PS26044 Final Evaluator Screen
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            AYUSH Skill Intelligence Closed-Loop Ecosystem
          </h1>
          <p className="text-sm sm:text-base text-ayush-teal-100 leading-relaxed">
            "We don't just match AYUSH students with opportunities; we continuously make them industry-ready."
          </p>
        </div>
      </div>

      {/* Visual Closed Loop Architecture */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-card space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            The Living AYUSH Academia–Industry Lifecycle
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            A continuous feedback loop linking student competency, faculty verification, industry demand, and institutional curriculum reform.
          </p>
        </div>

        {/* 10-Stage Visual Journey with Animated Flow Indicators */}
        <div className="relative max-w-4xl mx-auto py-6">
          <div className="space-y-4">
            {lifecycleStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div key={stage.step} className="flex flex-col items-center">
                  <div
                    onClick={() => onNavigateTab(stage.actionTab)}
                    className={`w-full max-w-2xl p-5 rounded-2xl border-2 transition-all cursor-pointer hover:scale-[1.01] hover:shadow-elevation flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${stage.color}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.2 rounded-full bg-white/30">
                            Stage {stage.step}: {stage.badge}
                          </span>
                        </div>
                        <h3 className="text-sm font-extrabold mt-1">{stage.title}</h3>
                        <p className="text-xs opacity-90 mt-0.5 leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold shrink-0 self-end sm:self-center">
                      <span>Explore Feature</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Animated Down Flow Arrow */}
                  {idx < lifecycleStages.length - 1 && (
                    <div className="py-2 flex flex-col items-center text-ayush-teal-700 animate-bounce">
                      <ArrowDown className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Return Loop Back to Step 1 */}
          <div className="mt-6 p-4 rounded-2xl bg-ayush-mint-50 border border-ayush-teal-300 text-center max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs font-bold text-ayush-teal-950">
            <RefreshCw className="w-4 h-4 text-ayush-teal-700 animate-spin" style={{ animationDuration: '8s' }} />
            <span>Loop Completes: Institutional Action Feeds Back into Next-Gen Industry Demand</span>
          </div>
        </div>
      </div>
    </div>
  );
};
