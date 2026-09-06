import React from 'react';
import { useApp } from '../../store';
import { 
  Building2, 
  Users, 
  Briefcase, 
  Award, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  Lightbulb, 
  Handshake, 
  BarChart3
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

interface InstitutionDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const InstitutionDashboard: React.FC<InstitutionDashboardProps> = ({ onNavigateTab }) => {
  const { curriculumInsights } = useApp();

  const cohortData = [
    { department: 'Dravyaguna', students: 340, readiness: 84 },
    { department: 'Panchakarma', students: 420, readiness: 78 },
    { department: 'Rasashastra', students: 280, readiness: 72 },
    { department: 'Kayachikitsa', students: 510, readiness: 68 },
    { department: 'Shalya Tantra', students: 310, readiness: 74 },
    { department: 'Clinical Research & Data', students: 180, readiness: 54 }
  ];

  return (
    <div className="space-y-6">
      {/* Institution Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center text-2xl font-bold shadow-sm ring-2 ring-purple-400/30">
            🏫
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                All India Institute of Ayurveda (AIIA)
              </h1>
              <span className="text-xs bg-purple-50 text-purple-900 border border-purple-200 px-2.5 py-0.5 rounded-full font-bold">
                Apex Autonomous Institute
              </span>
              <span className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-semibold">
                NAAC A++ • NABH
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              New Delhi • Office of Academic & Industry Collaborations (Dean Prof. B. S. Prasad)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigateTab('curriculum')}
            className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Lightbulb className="w-4 h-4 text-ayush-amber-300" />
            <span>Curriculum Intelligence</span>
          </button>
        </div>
      </div>

      {/* Top Cards per Section 20 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Students</span>
          <p className="text-3xl font-extrabold text-slate-900 mt-1">2,846</p>
          <p className="text-[11px] text-slate-500 mt-0.5">BAMS, MD/MS & PhD Scholars</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Internship & Placement Rate</span>
          <p className="text-3xl font-extrabold text-emerald-700 mt-1">78%</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">+6% from previous academic year</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Research Readiness</span>
          <p className="text-3xl font-extrabold text-ayush-teal-900 mt-1">61%</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Target: 75% for Phase-II trials</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Industry MoUs</span>
          <p className="text-3xl font-extrabold text-purple-900 mt-1">4 Active</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Kerala Ayurveda, Vaidya Analytics, etc.</p>
        </div>
      </div>

      {/* Curriculum Alert Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-ayush-teal-950 to-slate-950 rounded-3xl p-6 text-white shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-extrabold bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded border border-purple-400/30">
              Institutional Action Required
            </span>
            <span className="text-xs text-slate-300">High-Priority Skill Gap Detected</span>
          </div>
          <h3 className="text-lg font-bold">
            Data Analysis & Digital Health Gap Detected in 3rd-Year Cohort
          </h3>
          <p className="text-xs text-slate-300">
            Industry demand stands at <strong>82%</strong> while average cohort readiness is <strong>31%</strong>. 5-step curriculum intervention proposed.
          </p>
        </div>

        <button
          onClick={() => onNavigateTab('curriculum')}
          className="px-5 py-2.5 rounded-xl bg-ayush-green-500 hover:bg-ayush-green-400 text-ayush-teal-950 font-extrabold text-xs shadow-md transition-all shrink-0 flex items-center gap-1.5"
        >
          <span>View 5-Step Action Plan</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Cohort Departmental Breakdown Chart */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Departmental Student Readiness Index
            </h3>
            <p className="text-xs text-slate-500">
              Clinical, pharmacological, and trial readiness across departments
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">AIIA Cohort 2026</span>
        </div>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={cohortData} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="department" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} />
              <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: '1px solid #cbd5e1' }}
                formatter={(val: any) => [`${val}%`, 'Readiness']}
              />
              <Bar dataKey="readiness" name="Readiness Index" fill="#0d5c5b" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
