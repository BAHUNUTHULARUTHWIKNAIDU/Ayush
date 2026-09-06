import React from 'react';
import { useApp } from '../../store';
import { 
  Award, 
  Briefcase, 
  FolderGit2, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ExternalLink,
  Target,
  Compass,
  FileCheck,
  Zap,
  GraduationCap
} from 'lucide-react';

interface StudentDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({ onNavigateTab }) => {
  const { currentUser, skills, careerReadiness, opportunities, projects } = useApp();

  const topCards = [
    {
      title: 'Career Readiness',
      value: `${careerReadiness}%`,
      subtitle: 'Target: Clinical Research',
      icon: Target,
      color: 'from-ayush-teal-800 to-ayush-green-700',
      textColor: 'text-ayush-green-300',
      actionTab: 'twin'
    },
    {
      title: 'Verified Skills',
      value: '24',
      subtitle: 'Faculty & Industry Verified',
      icon: Award,
      color: 'from-emerald-700 to-teal-800',
      textColor: 'text-emerald-300',
      actionTab: 'passport'
    },
    {
      title: 'Applications Active',
      value: `${opportunities.filter(o => o.status === 'APPLIED').length + 12}`,
      subtitle: '3 Shortlisted for Interview',
      icon: Briefcase,
      color: 'from-blue-700 to-indigo-800',
      textColor: 'text-blue-300',
      actionTab: 'applications'
    },
    {
      title: 'Projects & Evidence',
      value: `${projects.length + 3}`,
      subtitle: 'Clinical & Lab Monograms',
      icon: FolderGit2,
      color: 'from-purple-700 to-slate-800',
      textColor: 'text-purple-300',
      actionTab: 'passport'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Student Welcome Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80'}
            alt="Ananya Sharma"
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-ayush-teal-600/30 shadow-sm"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Ananya Sharma
              </h1>
              <span className="text-xs bg-ayush-teal-50 text-ayush-teal-900 border border-ayush-teal-200 px-2.5 py-0.5 rounded-full font-bold">
                BAMS — 3rd Year
              </span>
              <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                AIIA New Delhi
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1.5">
              <span>Career Trajectory:</span>
              <strong className="text-ayush-teal-900 font-bold">AYUSH Clinical Research & Trials</strong>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onNavigateTab('assessment')}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <GraduationCap className="w-4 h-4 text-ayush-teal-700" />
            <span>Take Skill Assessment</span>
          </button>

          <button
            onClick={() => onNavigateTab('simulator')}
            className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Compass className="w-4 h-4 text-ayush-amber-300" />
            <span>What-If Simulator</span>
          </button>
        </div>
      </div>

      {/* Top 4 Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {topCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              onClick={() => onNavigateTab(card.actionTab)}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-card hover:shadow-elevation transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {card.title}
                </span>
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-ayush-teal-800 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-2">
                <p className="text-3xl font-extrabold text-slate-900">{card.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{card.subtitle}</p>
              </div>

              <div className="mt-3 flex items-center text-[11px] font-bold text-ayush-teal-700 group-hover:translate-x-0.5 transition-transform">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 ml-1" />
              </div>
            </div>
          );
        })}
      </div>

      {/* AI Insight Highlight Card */}
      <div className="bg-gradient-to-r from-ayush-teal-950 via-ayush-teal-900 to-ayush-green-950 rounded-3xl p-6 text-white shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-white/10 text-ayush-amber-300">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="text-xs uppercase font-bold text-ayush-green-300 tracking-wider">
              AYUSH Career Copilot Insight
            </span>
          </div>
          <p className="text-sm sm:text-base font-bold text-white">
            "Your strongest area is Ayurvedic Pharmacology (88%). Your biggest employability gap is Data Analysis (42%)."
          </p>
          <p className="text-xs text-ayush-teal-200">
            Completing the Data Analysis pathway will elevate your overall readiness to <strong>86%</strong> and unlock high-stipend fellowships at Vaidya Analytics.
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('roadmap')}
          className="px-4 py-2.5 rounded-xl bg-ayush-green-500 hover:bg-ayush-green-400 text-ayush-teal-950 font-bold text-xs shadow-md transition-all shrink-0 flex items-center gap-2"
        >
          <span>Complete Pathway</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Core Section: Your AYUSH Career Journey */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Skill Readiness Breakdown */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-subtle space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">Your AYUSH Career Journey</h3>
              <p className="text-xs text-slate-500">
                Core domain competencies required for Clinical Research certification
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('gaps')}
              className="text-xs font-bold text-ayush-teal-700 hover:text-ayush-teal-900 flex items-center gap-1"
            >
              <span>Full Gap Analysis</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            {skills.map((skill) => {
              const isGap = skill.score < skill.benchmark;
              const gapAmount = skill.benchmark - skill.score;

              return (
                <div key={skill.id} className="space-y-1.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">{skill.name}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                        {skill.category}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        skill.verifiedLevel === 'Faculty Verified'
                          ? 'bg-emerald-100 text-emerald-800'
                          : skill.verifiedLevel === 'Assessed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {skill.verifiedLevel}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono">
                      <span className="font-extrabold text-slate-900">{skill.score}%</span>
                      <span className="text-slate-400">/ Req {skill.benchmark}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        skill.score >= 80 
                          ? 'bg-emerald-500' 
                          : skill.score >= 60 
                          ? 'bg-ayush-teal-600' 
                          : 'bg-amber-500'
                      }`}
                      style={{ width: `${skill.score}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-0.5">
                    <span>
                      {skill.verifiedBy ? `Verified by ${skill.verifiedBy}` : 'Self-declared / Simulation'}
                    </span>
                    {isGap ? (
                      <span className="text-rose-600 font-bold flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" /> Gap: {gapAmount}%
                      </span>
                    ) : (
                      <span className="text-emerald-700 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Benchmark Met (+{skill.score - skill.benchmark}%)
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Quick Action & Recommended Pathway */}
        <div className="lg:col-span-4 space-y-6">
          {/* Action Card */}
          <div className="bg-ayush-mint-50/70 rounded-3xl p-6 border border-ayush-teal-200 shadow-subtle space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-ayush-teal-700" />
              <h4 className="font-bold text-sm text-ayush-teal-950">Recommended Next Step</h4>
            </div>

            <p className="text-xs text-slate-700 leading-relaxed">
              Based on your clinical research gap in <strong>Data Analysis (42%)</strong>, start this curated AYUSH module:
            </p>

            <div className="p-3.5 bg-white rounded-2xl border border-ayush-teal-200/80 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">AYUSH Clinical Data Analysis</span>
                <span className="text-[10px] bg-ayush-teal-100 text-ayush-teal-900 font-semibold px-2 py-0.5 rounded">
                  12 Hours
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                P-values, paired t-tests, and registry tabulation for ASU clinical trials.
              </p>
              <button
                onClick={() => onNavigateTab('learning')}
                className="w-full py-2 bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Start Learning Module</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Top Internship Match Preview */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-subtle space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">Top Match Today</h4>
              <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                92% AI Match
              </span>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-bold text-slate-900">Clinical Research Intern</p>
              <p className="text-xs text-slate-500">AYUSH Research Org & Vaidya Analytics</p>
              <p className="text-xs text-ayush-teal-800 font-semibold">Bengaluru • Hybrid • ₹25,000/mo</p>
            </div>

            <button
              onClick={() => onNavigateTab('opportunities')}
              className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1"
            >
              <span>View Transparent Score & Apply</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
