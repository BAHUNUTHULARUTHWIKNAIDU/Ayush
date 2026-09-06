import React, { useState } from 'react';
import { useApp } from '../../store';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ExternalLink, 
  Plus, 
  FileText, 
  Star, 
  UserCheck, 
  Building2, 
  Share2, 
  Sparkles,
  Download
} from 'lucide-react';

interface VerifiedPassportViewProps {
  onNavigateTab: (tab: string) => void;
}

export const VerifiedPassportView: React.FC<VerifiedPassportViewProps> = ({ onNavigateTab }) => {
  const { skills, projects, submitProjectForVerification, showToast } = useApp();
  
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newSkills, setNewSkills] = useState('Data Analysis, Clinical Documentation');
  const [evidenceUrl, setEvidenceUrl] = useState('https://digilocker.gov.in/doc-ref/aiia-2026-eval');

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDesc.trim()) {
      showToast('Please fill in the project title and description', 'warning');
      return;
    }

    submitProjectForVerification({
      title: newTitle,
      description: newDesc,
      skillsDemonstrated: newSkills.split(',').map(s => s.trim()),
      evidenceUrl
    });

    setShowSubmitModal(false);
    setNewTitle('');
    setNewDesc('');
  };

  const verificationTierBadges: Record<string, { bg: string; text: string; border: string }> = {
    'Industry Verified': { bg: 'bg-amber-100', text: 'text-amber-900', border: 'border-amber-300' },
    'Faculty Verified': { bg: 'bg-emerald-100', text: 'text-emerald-900', border: 'border-emerald-300' },
    'Assessed': { bg: 'bg-blue-100', text: 'text-blue-900', border: 'border-blue-300' },
    'Self Declared': { bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-teal-100 text-ayush-teal-800">
              <Award className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              AYUSH Verified Skill Passport & Portfolio
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tamper-proof clinical credentials verified by All India Institute of Ayurveda faculty and industry evaluators.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => showToast('Shareable link generated: https://skillconnect.ayush.gov.in/passport/ananya-sharma-aiia', 'info')}
            className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Passport</span>
          </button>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Submit Evidence for Review</span>
          </button>
        </div>
      </div>

      {/* 4-Tier Verification Level Banner */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-card">
        <p className="text-xs font-extrabold text-slate-900 uppercase tracking-wider mb-2.5">
          AYUSH 4-Tier Verification Hierarchy
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
            <span className="font-bold text-slate-700 block">1. Self Declared</span>
            <span className="text-[10px] text-slate-500">Declared by student profile</span>
          </div>
          <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200">
            <span className="font-bold text-blue-900 block">2. Assessed</span>
            <span className="text-[10px] text-blue-700">Calibrated standardized test</span>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200">
            <span className="font-bold text-emerald-900 block">3. Faculty Verified</span>
            <span className="text-[10px] text-emerald-700">Endorsed by AIIA faculty</span>
          </div>
          <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200">
            <span className="font-bold text-amber-900 block">4. Industry Verified</span>
            <span className="text-[10px] text-amber-700">Approved by partner industry</span>
          </div>
        </div>
      </div>

      {/* Skill Passport Cards Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-900">
            Current Skill Passport Registry (Ananya Sharma)
          </h3>
          <span className="text-xs font-mono text-slate-400">ID: AIIA-BAMS-2024-0428</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => {
            const tierStyle = verificationTierBadges[s.verifiedLevel] || verificationTierBadges['Self Declared'];
            return (
              <div
                key={s.id}
                className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-ayush-teal-400 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-mono text-slate-500">{s.category}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tierStyle.bg} ${tierStyle.text} ${tierStyle.border}`}>
                      {s.verifiedLevel}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 leading-snug">{s.name}</h4>
                  
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-extrabold text-slate-900">{s.score}%</span>
                    <span className="text-xs text-slate-400 font-medium">Competency Index</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200/80 text-[11px] text-slate-500 space-y-1">
                  <div className="flex items-center justify-between">
                    <span>Evidence Proofs:</span>
                    <strong className="text-slate-700">{s.evidenceCount} Linked Documents</strong>
                  </div>
                  {s.verifiedBy && (
                    <div className="flex items-center gap-1 text-emerald-800 font-medium">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{s.verifiedBy}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Digital Portfolio Projects Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Verified Projects & Laboratory Evidence
            </h3>
            <p className="text-xs text-slate-500">
              Evidence artifacts linking clinical protocols, trial analyses, and research monographs
            </p>
          </div>

          <button
            onClick={() => setShowSubmitModal(true)}
            className="px-3.5 py-1.5 rounded-xl bg-ayush-mint-50 hover:bg-ayush-mint-100 text-ayush-teal-900 border border-ayush-teal-300 font-bold text-xs flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add New Evidence</span>
          </button>
        </div>

        <div className="space-y-4">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200 hover:border-slate-300 transition-all space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-slate-900">{proj.title}</h4>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    proj.facultyVerification.status === 'Verified'
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-100 text-amber-800 border border-amber-200'
                  }`}>
                    {proj.facultyVerification.status === 'Verified' ? '✓ Faculty Verified' : '⏳ Pending Review'}
                  </span>
                  {proj.evidenceUrl && (
                    <a
                      href={proj.evidenceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-ayush-teal-700 hover:underline flex items-center gap-1 font-semibold"
                    >
                      <span>DigiLocker Evidence</span> <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-1">
                {proj.skillsDemonstrated.map((sk, idx) => (
                  <span key={idx} className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                    {sk}
                  </span>
                ))}
              </div>

              {/* Faculty / Industry Endorsement Notes */}
              <div className="pt-2 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {proj.facultyVerification.remarks && (
                  <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-emerald-950">
                    <p className="font-bold flex items-center gap-1 text-[11px]">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-700" />
                      Faculty Endorsement ({proj.facultyVerification.facultyName})
                    </p>
                    <p className="text-[11px] text-emerald-800 mt-0.5">
                      "{proj.facultyVerification.remarks}"
                    </p>
                  </div>
                )}

                {proj.industryFeedback && (
                  <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200 text-amber-950">
                    <div className="flex items-center justify-between">
                      <p className="font-bold flex items-center gap-1 text-[11px]">
                        <Building2 className="w-3.5 h-3.5 text-amber-700" />
                        Industry Review ({proj.industryFeedback.company})
                      </p>
                      <div className="flex items-center gap-0.5 text-amber-700 font-bold text-[11px]">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        <span>{proj.industryFeedback.rating}</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-amber-900 mt-0.5">
                      "{proj.industryFeedback.comment}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUBMIT NEW EVIDENCE MODAL */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-4 animate-scale-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900">
                Submit Research Evidence for Faculty Review
              </h3>
              <button onClick={() => setShowSubmitModal(false)} className="text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Project / Clinical Study Title</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="e.g. Statistical Analysis of Medhya Rasayana Trial Registry"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-ayush-teal-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Methodology & Summary</label>
                <textarea
                  rows={3}
                  required
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Describe patient cohort size, statistical tests conducted (e.g. paired t-test), and outcome parameters..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-ayush-teal-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Skills Demonstrated (comma-separated)</label>
                <input
                  type="text"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-ayush-teal-700"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Evidence URL / Repository / DigiLocker Ref</label>
                <input
                  type="url"
                  value={evidenceUrl}
                  onChange={(e) => setEvidenceUrl(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-ayush-teal-700 font-mono text-[11px]"
                />
              </div>

              <div className="p-3 bg-ayush-mint-50 rounded-xl border border-ayush-teal-200 text-ayush-teal-950 space-y-1">
                <p className="font-bold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-ayush-teal-700" />
                  Sent directly to Dr. Priya Nair's Verification Queue
                </p>
                <p className="text-[11px] text-slate-600">
                  Faculty endorsement upgrades your credential from "Self Declared" to "Faculty Verified" and notifies recruiter partners.
                </p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowSubmitModal(false)}
                  className="w-1/3 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold shadow-sm"
                >
                  Submit for Faculty Verification
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
