import React from 'react';
import { useApp } from '../../store';
import { CAREER_PATHS } from '../../data/seedData';
import { 
  Sparkles, 
  TrendingUp, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Award,
  Zap
} from 'lucide-react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer 
} from 'recharts';

interface CareerTwinViewProps {
  onNavigateTab: (tab: string) => void;
}

export const CareerTwinView: React.FC<CareerTwinViewProps> = ({ onNavigateTab }) => {
  const { skills, careerReadiness } = useApp();

  // Radar Data
  const radarData = [
    { subject: 'Clinical Practice', student: 82, fullMark: 100 },
    { subject: 'Core Pharmacology', student: 88, fullMark: 100 },
    { subject: 'Research & GCP', student: 58, fullMark: 100 },
    { subject: 'Digital Health', student: 52, fullMark: 100 },
    { subject: 'Data Analysis', student: 42, fullMark: 100 },
    { subject: 'Communication', student: 82, fullMark: 100 }
  ];

  const timelineSteps = [
    {
      stage: 'Year 1',
      title: 'Foundational Ayurveda',
      focus: 'Sanskrit, Padartha Vijnana, Kriya Sharira',
      readiness: 34,
      status: 'Completed',
      year: '2024'
    },
    {
      stage: 'Year 2',
      title: 'Pharmacology & Pathology',
      focus: 'Dravyaguna, Rasashastra, Roga Nidana',
      readiness: 55,
      status: 'Completed',
      year: '2025'
    },
    {
      stage: 'Year 3 (Current)',
      title: 'Clinical & Clinical Trials',
      focus: 'Panchakarma, Kayachikitsa, Biostatistics & GCP',
      readiness: careerReadiness,
      status: 'Active',
      year: '2026'
    },
    {
      stage: 'Internship',
      title: 'Rotational Hospital Postings',
      focus: 'NABH OPD management & Phase-II Trial Assistant',
      readiness: 88,
      status: 'Projected',
      year: '2027'
    },
    {
      stage: 'Final Year / Post-Grad',
      title: 'Independent Clinical Scientist',
      focus: 'Autonomous trial investigator, formulation R&D',
      readiness: 96,
      status: 'Future',
      year: '2028'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-teal-100 text-ayush-teal-800">
              <Sparkles className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              AYUSH Career Twin — Digital Skill Persona
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Continuously evolving AI model tracking your academic competencies from Year 1 to professional practice.
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('simulator')}
          className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
        >
          <Compass className="w-4 h-4 text-ayush-amber-300" />
          <span>Launch What-If Simulator</span>
        </button>
      </div>

      {/* Top Grid: Radar Chart + Core Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Radar Chart */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-card flex flex-col items-center justify-center">
          <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900">Multilateral Competency Radar</span>
            <span className="text-[10px] bg-ayush-mint-100 text-ayush-teal-900 font-bold px-2 py-0.5 rounded-full">
              6 Core Vectors
            </span>
          </div>

          <div className="w-full h-64 sm:h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Radar
                  name="Student Proficiency"
                  dataKey="student"
                  stroke="#0d5c5b"
                  fill="#189b98"
                  fillOpacity={0.45}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-[11px] text-slate-500 text-center -mt-2">
            High proficiency in Core Pharmacology (88%) & Clinical Practice (82%). Low vector in Data Analysis (42%).
          </p>
        </div>

        {/* Career Path Options Fit */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">Career Trajectory Alignment</h3>
              <p className="text-xs text-slate-500">Live AI match index across 4 verified AYUSH career paths</p>
            </div>
            <span className="text-xs font-bold text-ayush-teal-800">4 Opportunities</span>
          </div>

          <div className="space-y-3">
            {CAREER_PATHS.map((cp) => (
              <div key={cp.id} className="p-3.5 rounded-2xl bg-slate-50 hover:bg-ayush-mint-50/50 border border-slate-200/80 transition-colors space-y-1.5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-slate-900">{cp.title}</h4>
                    <p className="text-[11px] text-slate-500">{cp.averageStipendOrLPA} • {cp.demandTrend}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-extrabold text-ayush-teal-900">{cp.currentMatch}%</span>
                    <p className="text-[10px] text-slate-400">Match</p>
                  </div>
                </div>

                <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      cp.currentMatch >= 80 ? 'bg-emerald-500' : cp.currentMatch >= 70 ? 'bg-ayush-teal-600' : 'bg-amber-500'
                    }`}
                    style={{ width: `${cp.currentMatch}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 5-Stage Academic & Career Timeline Progression */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div>
          <h3 className="text-base font-bold text-slate-900">
            5-Year Evolving Skill Timeline
          </h3>
          <p className="text-xs text-slate-500">
            Historical competence accumulation and projected readiness upon graduation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {timelineSteps.map((step, sIdx) => {
            const isActive = step.status === 'Active';
            return (
              <div
                key={sIdx}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'border-ayush-teal-600 bg-ayush-teal-50/70 shadow-sm ring-1 ring-ayush-teal-500/30'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-slate-400 font-mono text-[10px]">{step.stage}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                      step.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-800'
                        : step.status === 'Active'
                        ? 'bg-ayush-teal-800 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {step.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-xs text-slate-900 mt-1">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">{step.focus}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100/80">
                  <div className="flex justify-between text-[11px] font-bold text-slate-700">
                    <span>Readiness</span>
                    <span className="text-ayush-teal-900">{step.readiness}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                    <div
                      className="bg-ayush-teal-700 h-full rounded-full"
                      style={{ width: `${step.readiness}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
