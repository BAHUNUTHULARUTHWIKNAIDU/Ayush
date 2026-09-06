import React from 'react';
import { INDUSTRY_SKILL_DEMAND } from '../../data/seedData';
import { 
  TrendingUp, 
  AlertTriangle, 
  BarChart3, 
  Sparkles, 
  Building2, 
  GraduationCap,
  ArrowRight,
  Flame
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

export const DemandIntelligenceView: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-amber-100 text-ayush-amber-800">
              <TrendingUp className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              AYUSH Industry Skill Demand Intelligence
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Macro analysis of national AYUSH clinical and manufacturing requirements vs aggregate student readiness.
          </p>
        </div>

        <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-ayush-mint-100 text-ayush-teal-950 border border-ayush-teal-200">
          Q3 2026 Industry Survey Data
        </span>
      </div>

      {/* Comparative Bar Chart */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Industry Demand (Sponsors/Labs) vs Student Readiness (Cohorts)
            </h3>
            <p className="text-xs text-slate-500">
              Visualizing the critical gaps that institutional curriculum must address
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">6 Benchmark Competencies</span>
        </div>

        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={INDUSTRY_SKILL_DEMAND} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="skill" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} angle={-10} textAnchor="end" />
              <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: '1px solid #cbd5e1', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}
                formatter={(value: any) => [`${value}%`, 'Proficiency Index']}
              />
              <Legend wrapperStyle={{ paddingTop: 10 }} />
              <Bar dataKey="demand" name="Industry Demand" fill="#0d5c5b" radius={[6, 6, 0, 0]} />
              <Bar dataKey="studentReadiness" name="Student Cohort Readiness" fill="#16a34a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Heatmap Matrix Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-900">
            Competency Gap Heatmap & Prioritization Index
          </h3>
          <span className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2.5 py-1 rounded-lg">
            Highest Gap: Data Analysis (31%)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
              <tr>
                <th className="p-3.5 rounded-l-xl">Skill Competency</th>
                <th className="p-3.5">Industry Demand</th>
                <th className="p-3.5">Student Readiness</th>
                <th className="p-3.5">Net Delta Gap</th>
                <th className="p-3.5 rounded-r-xl">Strategic Institutional Remediation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {INDUSTRY_SKILL_DEMAND.map((row, idx) => {
                const isPositiveGap = row.gap > 0;
                const isCritical = row.gap > 20;

                return (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-900">{row.skill}</td>
                    <td className="p-3.5 font-mono font-extrabold text-ayush-teal-900">{row.demand}%</td>
                    <td className="p-3.5 font-mono font-bold text-slate-700">{row.studentReadiness}%</td>
                    <td className="p-3.5">
                      <span className={`inline-block font-mono font-extrabold px-2 py-0.5 rounded-full text-[11px] ${
                        !isPositiveGap 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : isCritical 
                          ? 'bg-rose-100 text-rose-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {isPositiveGap ? `-${row.gap}% Shortfall` : `+${Math.abs(row.gap)}% Surplus`}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-600">
                      {isCritical ? (
                        <span className="text-rose-700 font-bold flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5" /> High-priority FDP & practical modules mandated
                        </span>
                      ) : isPositiveGap ? (
                        <span className="text-amber-700 font-medium">
                          Industry workshop & micro-project integration
                        </span>
                      ) : (
                        <span className="text-emerald-700 font-medium">
                          Strong curricular foundation; maintain quality
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
