import React, { useState } from 'react';
import { useApp } from '../../store';
import { 
  UserCheck, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Users, 
  Award, 
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  TrendingDown
} from 'lucide-react';

interface FacultyDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const FacultyDashboard: React.FC<FacultyDashboardProps> = ({ onNavigateTab }) => {
  const { 
    currentUser, 
    verificationQueue, 
    approveVerification, 
    rejectVerification, 
    showToast 
  } = useApp();

  const [filterStatus, setFilterStatus] = useState<'PENDING' | 'APPROVED' | 'ALL'>('PENDING');

  const pendingItems = verificationQueue.filter(q => q.status === 'PENDING');
  const filteredQueue = filterStatus === 'ALL' 
    ? verificationQueue 
    : verificationQueue.filter(q => q.status === filterStatus);

  const studentsNeedingIntervention = [
    {
      name: 'Rohan Deshmukh',
      program: 'BAMS — 4th Year',
      laggingSkill: 'Research Methodology (38%)',
      readiness: 48,
      risk: 'High Risk'
    },
    {
      name: 'Kavita Verma',
      program: 'BNYS — 3rd Year',
      laggingSkill: 'Digital Health & Tele-AYUSH (32%)',
      readiness: 52,
      risk: 'Moderate'
    },
    {
      name: 'Tanvi Joshi',
      program: 'BAMS — 3rd Year',
      laggingSkill: 'Biostatistics & Data Analysis (30%)',
      readiness: 56,
      risk: 'Moderate'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Faculty Profile Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={currentUser?.avatar || 'https://images.unsplash.com/photo-1594824813591-9c60e340a6b7?w=120&auto=format&fit=crop&q=80'}
            alt="Dr. Priya Nair"
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-blue-500/30 shadow-sm"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {currentUser?.fullName || 'Dr. Priya Nair'}
              </h1>
              <span className="text-xs bg-blue-50 text-blue-900 border border-blue-200 px-2.5 py-0.5 rounded-full font-bold">
                Faculty Mentor
              </span>
              <span className="text-xs bg-ayush-mint-50 text-ayush-teal-900 border border-ayush-teal-200 px-2 py-0.5 rounded-full font-semibold">
                Dravyaguna & Research Lead
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              All India Institute of Ayurveda (AIIA) • Mentoring <strong>24 Active BAMS Scholars</strong>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigateTab('mentorship')}
            className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Users className="w-4 h-4 text-ayush-green-300" />
            <span>Manage Mentorship Slots</span>
          </button>
        </div>
      </div>

      {/* Class Skill Health Overview */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">BAMS Cohort Skill Health</h3>
            <p className="text-xs text-slate-500">Aggregate readiness index across 128 registered 3rd & 4th-year students</p>
          </div>
          <span className="text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg">
            Batch of 2026
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
            <span className="text-xs font-bold text-emerald-900">Clinical Skills</span>
            <p className="text-2xl font-extrabold text-emerald-950 mt-1">82%</p>
            <p className="text-[11px] text-emerald-700 mt-0.5">Satisfies NABH benchmark</p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
            <span className="text-xs font-bold text-blue-900">Research & GCP</span>
            <p className="text-2xl font-extrabold text-blue-950 mt-1">57%</p>
            <p className="text-[11px] text-blue-700 mt-0.5">Needs 23% uplift for trials</p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
            <span className="text-xs font-bold text-rose-900">Digital Health & Data</span>
            <p className="text-2xl font-extrabold text-rose-950 mt-1">38%</p>
            <p className="text-[11px] text-rose-700 mt-0.5">Critical cohort barrier</p>
          </div>

          <div className="p-4 rounded-2xl bg-ayush-mint-50/70 border border-ayush-teal-200">
            <span className="text-xs font-bold text-ayush-teal-900">Industry Readiness</span>
            <p className="text-2xl font-extrabold text-ayush-teal-950 mt-1">61%</p>
            <p className="text-[11px] text-ayush-teal-700 mt-0.5">Average placement potential</p>
          </div>
        </div>
      </div>

      {/* Two Column Section: Verification Queue + Students Needing Intervention */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Interactive Evidence Verification Queue */}
        <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-slate-900">
                  Evidence Verification Queue
                </h3>
                {pendingItems.length > 0 && (
                  <span className="text-xs font-extrabold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                    {pendingItems.length} Action Required
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Review submitted clinical datasets and grant "Faculty Verified" badges
              </p>
            </div>

            <div className="flex items-center rounded-xl bg-slate-100 p-1 text-xs font-bold">
              <button
                onClick={() => setFilterStatus('PENDING')}
                className={`px-3 py-1 rounded-lg transition-colors ${filterStatus === 'PENDING' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              >
                Pending
              </button>
              <button
                onClick={() => setFilterStatus('ALL')}
                className={`px-3 py-1 rounded-lg transition-colors ${filterStatus === 'ALL' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'}`}
              >
                All Submissions
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredQueue.length === 0 ? (
              <p className="p-8 text-center text-xs text-slate-500">
                All evidence items reviewed! Great job keeping student passports updated.
              </p>
            ) : (
              filteredQueue.map((item) => {
                const isApproved = item.status === 'APPROVED';
                const isRejected = item.status === 'REJECTED';

                return (
                  <div
                    key={item.id}
                    className={`p-5 rounded-2xl border transition-all space-y-3 ${
                      isApproved 
                        ? 'bg-emerald-50/40 border-emerald-200' 
                        : isRejected 
                        ? 'bg-slate-50 border-slate-200 opacity-60' 
                        : 'bg-white border-amber-300 shadow-sm'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-slate-900">{item.studentName}</h4>
                          <span className="text-xs text-slate-500 font-mono">({item.studentProgram})</span>
                        </div>
                        <p className="text-xs font-semibold text-ayush-teal-800 mt-0.5">
                          Target Skill: <strong>{item.skillName}</strong>
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-slate-400">
                          {item.currentLevel} ➔ <strong>{item.targetLevel}</strong>
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          isApproved 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : isRejected 
                            ? 'bg-rose-100 text-rose-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                      <p className="font-bold text-slate-800">Project / Artifact: {item.projectTitle}</p>
                      <p className="text-slate-600">{item.evidenceSummary}</p>
                    </div>

                    {/* Faculty Decision Buttons */}
                    {!isApproved && !isRejected && (
                      <div className="flex items-center justify-end gap-2 pt-2">
                        <button
                          onClick={() => rejectVerification(item.id)}
                          className="px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-600 font-semibold text-xs"
                        >
                          Request Revision
                        </button>

                        <button
                          onClick={() => approveVerification(item.id)}
                          className="px-4 py-1.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-sm flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Approve & Grant Verified Badge</span>
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right: Students Needing Academic Intervention */}
        <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-slate-200 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">
              Scholars Needing Intervention
            </h3>
            <span className="text-xs text-rose-600 font-bold flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" /> 3 Flagged
            </span>
          </div>

          <div className="space-y-3">
            {studentsNeedingIntervention.map((student, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-xs text-slate-900">{student.name}</h4>
                  <span className={`text-[10px] font-bold px-2 py-0.2 rounded-full ${
                    student.risk === 'High Risk' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {student.risk}
                  </span>
                </div>
                <p className="text-[11px] text-slate-500">{student.program}</p>
                <p className="text-[11px] text-rose-700 font-medium">
                  Lagging: {student.laggingSkill}
                </p>

                <button
                  onClick={() => showToast(`1-on-1 mentor sync requested for ${student.name}`, 'info')}
                  className="w-full py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-bold text-[11px] transition-colors flex items-center justify-center gap-1"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Assign Remedial Mentorship</span>
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
