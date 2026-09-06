import React, { useState } from 'react';
import { useApp } from '../../store';
import { 
  Briefcase, 
  Users, 
  Search, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Award, 
  Sparkles, 
  Filter, 
  Building2, 
  Mail, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { AYUSHDiscipline } from '../../types';

interface RecruiterDashboardProps {
  onNavigateTab: (tab: string) => void;
}

export const RecruiterDashboard: React.FC<RecruiterDashboardProps> = ({ onNavigateTab }) => {
  const { opportunities, showToast } = useApp();
  
  const [showPostModal, setShowPostModal] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [postType, setPostType] = useState('Internship');
  const [postDiscipline, setPostDiscipline] = useState<AYUSHDiscipline>('Ayurveda');
  const [postStipend, setPostStipend] = useState('₹25,000 / month');
  const [postSkills, setPostSkills] = useState('Clinical Data Analysis, GCP Guidelines');

  // Candidate pool
  const [selectedDisciplineFilter, setSelectedDisciplineFilter] = useState<string>('All');
  const [verifiedFilter, setVerifiedFilter] = useState<boolean>(true);

  const candidates = [
    {
      id: 'cand-1',
      name: 'Ananya Sharma',
      discipline: 'BAMS (Ayurveda)',
      year: '3rd Year',
      institution: 'All India Institute of Ayurveda, New Delhi',
      matchScore: 92,
      verifiedSkillsCount: 24,
      targetCareer: 'Clinical Research',
      topSkills: ['Ayurvedic Pharmacology (88%)', 'Panchakarma (76%)', 'Clinical Documentation (64%)'],
      status: 'Applied (Under Review)'
    },
    {
      id: 'cand-2',
      name: 'Rohan Deshmukh',
      discipline: 'BAMS (Ayurveda)',
      year: '4th Year',
      institution: 'National Institute of Ayurveda, Jaipur',
      matchScore: 78,
      verifiedSkillsCount: 18,
      targetCareer: 'Product Formulation',
      topSkills: ['Dravyaguna (84%)', 'Phytochemistry (72%)'],
      status: 'Shortlisted'
    },
    {
      id: 'cand-3',
      name: 'Kavita Verma',
      discipline: 'BNYS (Yoga & Naturopathy)',
      year: '3rd Year',
      institution: 'SDM College of Naturopathy & Yogic Sciences',
      matchScore: 74,
      verifiedSkillsCount: 16,
      targetCareer: 'Wellness Management',
      topSkills: ['Therapeutic Yoga (88%)', 'Hydrotherapy (79%)'],
      status: 'Active Profile'
    }
  ];

  const handleCreatePosting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postTitle.trim()) return;
    showToast(`Opportunity "${postTitle}" posted successfully to AYUSH network!`, 'success');
    setShowPostModal(false);
    setPostTitle('');
  };

  return (
    <div className="space-y-6">
      {/* Recruiter Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center text-2xl font-bold shadow-sm ring-2 ring-amber-400/30">
            🏢
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Rahul Mehta
              </h1>
              <span className="text-xs bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded-full font-bold">
                Industry Recruiter
              </span>
              <span className="text-xs bg-ayush-mint-50 text-ayush-teal-900 border border-ayush-teal-200 px-2 py-0.5 rounded-full font-semibold">
                Vaidya Analytics & Health Systems
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Bengaluru, Karnataka • Sponsoring Phase-II Clinical Trials & ASU Fellowships
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigateTab('demand-intelligence')}
            className="px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <span>Demand Heatmap</span>
          </button>

          <button
            onClick={() => setShowPostModal(true)}
            className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Post New Opportunity</span>
          </button>
        </div>
      </div>

      {/* Overview Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Postings</span>
          <p className="text-3xl font-extrabold text-slate-900 mt-1">{opportunities.length}</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Clinical & Formulation Fellowships</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Candidate Applicants</span>
          <p className="text-3xl font-extrabold text-ayush-teal-900 mt-1">
            {opportunities.filter(o => o.status === 'APPLIED').length + 8}
          </p>
          <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">Top match: 92% (Ananya Sharma)</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Verified Talent Pool</span>
          <p className="text-3xl font-extrabold text-slate-900 mt-1">342</p>
          <p className="text-[11px] text-slate-500 mt-0.5">AIIA, NIA & BHU Scholars</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-card">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Research MoUs</span>
          <p className="text-3xl font-extrabold text-amber-700 mt-1">4</p>
          <p className="text-[11px] text-slate-500 mt-0.5">With All India Institute of Ayurveda</p>
        </div>
      </div>

      {/* Talent Search & Verification Filter */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Verified AYUSH Talent Search
            </h3>
            <p className="text-xs text-slate-500">
              Filtered by National Commission for Indian System of Medicine (NCISM) verified competencies
            </p>
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedDisciplineFilter}
              onChange={(e) => setSelectedDisciplineFilter(e.target.value)}
              className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 rounded-xl px-3 py-1.5 focus:outline-none"
            >
              <option value="All">All Disciplines (BAMS, BNYS, BHMS, etc.)</option>
              <option value="BAMS">BAMS (Ayurveda)</option>
              <option value="BNYS">BNYS (Yoga & Naturopathy)</option>
              <option value="BHMS">BHMS (Homoeopathy)</option>
            </select>
          </div>
        </div>

        {/* Candidates Table / Cards */}
        <div className="space-y-3">
          {candidates.map((cand) => (
            <div
              key={cand.id}
              className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200 hover:border-ayush-teal-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-sm font-bold text-slate-900">{cand.name}</h4>
                  <span className="text-[10px] bg-ayush-teal-100 text-ayush-teal-900 font-semibold px-2 py-0.5 rounded">
                    {cand.discipline} • {cand.year}
                  </span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {cand.verifiedSkillsCount} Verified Skills
                  </span>
                </div>

                <p className="text-xs text-slate-500">{cand.institution}</p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {cand.topSkills.map((sk, idx) => (
                    <span key={idx} className="text-[10px] font-semibold bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 sm:self-center">
                <div className="text-right">
                  <span className="text-xl font-extrabold text-ayush-teal-950 font-mono">{cand.matchScore}%</span>
                  <p className="text-[10px] text-slate-400">Match Index</p>
                </div>

                <button
                  onClick={() => showToast(`Consent requested to view full clinical monograph of ${cand.name}`, 'info')}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-white text-slate-700 font-semibold text-xs transition-colors"
                >
                  Consent Profile
                </button>

                <button
                  onClick={() => showToast(`Shortlist confirmation sent to ${cand.name} & Dr. Priya Nair`, 'success')}
                  className="px-4 py-1.5 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-sm"
                >
                  Shortlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POST OPPORTUNITY MODAL */}
      {showPostModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-4 animate-scale-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-900">
                Post Opportunity for AYUSH Scholars
              </h3>
              <button onClick={() => setShowPostModal(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            <form onSubmit={handleCreatePosting} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Position Title</label>
                <input
                  type="text"
                  required
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  placeholder="e.g. Clinical Research Fellow — Observational ASU Trials"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-ayush-teal-700"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Opportunity Type</label>
                  <select
                    value={postType}
                    onChange={(e) => setPostType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-slate-900 focus:outline-none"
                  >
                    <option value="Internship">Internship</option>
                    <option value="Research Fellow">Research Fellow</option>
                    <option value="Full-Time Placement">Full-Time Placement</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Monthly Stipend / CTC</label>
                  <input
                    type="text"
                    value={postStipend}
                    onChange={(e) => setPostStipend(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-900 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Mandatory Competencies (comma-separated)</label>
                <input
                  type="text"
                  value={postSkills}
                  onChange={(e) => setPostSkills(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPostModal(false)}
                  className="w-1/3 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold shadow-sm"
                >
                  Publish to AIIA & AYUSH Network
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
