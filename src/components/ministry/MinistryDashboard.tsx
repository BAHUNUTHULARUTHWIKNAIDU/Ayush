import React from 'react';
import { 
  Landmark, 
  TrendingUp, 
  MapPin, 
  Building2, 
  Users, 
  Award, 
  Sparkles, 
  FileText,
  ShieldCheck
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts';

export const MinistryDashboard: React.FC = () => {
  const stateReadiness = [
    { state: 'Delhi NCR', students: 4200, readiness: 81 },
    { state: 'Kerala', students: 5800, readiness: 84 },
    { state: 'Maharashtra', students: 5100, readiness: 76 },
    { state: 'Karnataka', students: 3900, readiness: 74 },
    { state: 'Gujarat', students: 3200, readiness: 71 },
    { state: 'Uttar Pradesh', students: 6400, readiness: 65 }
  ];

  const disciplineBreakdown = [
    { discipline: 'Ayurveda (BAMS)', count: '28,400', avgReadiness: '76%' },
    { discipline: 'Yoga & Naturopathy (BNYS)', count: '8,200', avgReadiness: '72%' },
    { discipline: 'Homoeopathy (BHMS)', count: '14,600', avgReadiness: '69%' },
    { discipline: 'Unani (BUMS)', count: '5,300', avgReadiness: '68%' },
    { discipline: 'Siddha (BSMS)', count: '3,100', avgReadiness: '74%' },
    { discipline: 'Sowa-Rigpa', count: '900', avgReadiness: '71%' }
  ];

  return (
    <div className="space-y-6">
      {/* Ministry Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-900 flex items-center justify-center text-2xl font-bold shadow-sm ring-2 ring-teal-400/30">
            🏛
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Ministry of AYUSH — National Skill Intelligence
              </h1>
              <span className="text-xs bg-teal-50 text-teal-900 border border-teal-200 px-2.5 py-0.5 rounded-full font-bold">
                Government of India
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              National Commission for Indian System of Medicine (NCISM) & All India Institute of Ayurveda Integration
            </p>
          </div>
        </div>

        <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-ayush-mint-100 text-ayush-teal-950 border border-ayush-teal-200">
          Macro Policy View
        </span>
      </div>

      {/* Top National Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total AYUSH Scholars</span>
          <p className="text-3xl font-extrabold text-slate-900 mt-1">60,500+</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Across 420+ Accredited Colleges</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Passports</span>
          <p className="text-3xl font-extrabold text-emerald-700 mt-1">18,420</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">Linked to DigiLocker credentials</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Industry Partners</span>
          <p className="text-3xl font-extrabold text-ayush-teal-900 mt-1">180+</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Pharma, Clinical CROs & Wellness</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">National Skill Gap Index</span>
          <p className="text-3xl font-extrabold text-amber-700 mt-1">21.4%</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Down 4.2% since FDP rollout</p>
        </div>
      </div>

      {/* State-Wise Readiness Chart */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              State-Wise Student Cohort Readiness vs Industry Benchmarks
            </h3>
            <p className="text-xs text-slate-500">
              Assessing clinical competency standards across leading AYUSH educational hubs
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">National Survey 2026</span>
        </div>

        <div className="w-full h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={stateReadiness} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="state" tick={{ fill: '#475569', fontSize: 11, fontWeight: 600 }} />
              <YAxis domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 11 }} />
              <Tooltip
                contentStyle={{ borderRadius: 12, border: '1px solid #cbd5e1' }}
                formatter={(val: any) => [`${val}%`, 'Readiness']}
              />
              <Bar dataKey="readiness" name="Average Readiness" fill="#0d5c5b" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Discipline Breakdown Table */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
        <h3 className="text-base font-bold text-slate-900">
          AYUSH Stream Distribution & Verified Readiness
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-400 uppercase font-bold text-[10px] tracking-wider">
              <tr>
                <th className="p-3.5 rounded-l-xl">Discipline Stream</th>
                <th className="p-3.5">Enrolled Scholars</th>
                <th className="p-3.5">Average Industry Readiness</th>
                <th className="p-3.5 rounded-r-xl">Curricular Priority Focus</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {disciplineBreakdown.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-900">{row.discipline}</td>
                  <td className="p-3.5 font-mono text-slate-700">{row.count}</td>
                  <td className="p-3.5 font-mono font-bold text-emerald-700">{row.avgReadiness}</td>
                  <td className="p-3.5 text-slate-600">
                    {idx === 0 ? 'Clinical Trial Biostatistics & GCP' : idx === 1 ? 'Lifestyle Biomarker Quantification' : 'Digital NAMASTE E-Health Registry'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
