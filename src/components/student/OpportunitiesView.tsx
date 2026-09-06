import React, { useState } from 'react';
import { useApp } from '../../store';
import { Opportunity } from '../../types';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Bookmark, 
  MessageSquare, 
  Building2, 
  Percent, 
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface OpportunitiesViewProps {
  onNavigateTab: (tab: string) => void;
}

export const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({ onNavigateTab }) => {
  const { opportunities, applyOpportunity, setIsCopilotOpen, showToast } = useApp();
  const [selectedOpp, setSelectedOpp] = useState<Opportunity | null>(null);
  const [filterMode, setFilterMode] = useState<'All' | 'Hybrid' | 'Remote' | 'On-site'>('All');
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const filteredOpps = filterMode === 'All' 
    ? opportunities 
    : opportunities.filter(o => o.mode === filterMode);

  const toggleSave = (id: string) => {
    setSavedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
    showToast('Saved to your bookmarks!', 'info');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-teal-100 text-ayush-teal-800">
              <Briefcase className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              AYUSH Internships & Research Fellowships
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Curated opportunities from verified AYUSH manufacturers, clinical trial sponsors, and NABH hospitals.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {['All', 'Hybrid', 'Remote', 'On-site'].map((mode) => (
            <button
              key={mode}
              onClick={() => setFilterMode(mode as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                filterMode === mode
                  ? 'bg-ayush-teal-800 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Transparent Match Logic Banner */}
      <div className="bg-ayush-mint-50 rounded-2xl p-4 border border-ayush-teal-200 text-xs text-ayush-teal-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-subtle">
        <div className="flex items-center gap-2.5">
          <Sparkles className="w-5 h-5 text-ayush-teal-700 shrink-0" />
          <div>
            <p className="font-bold text-sm">Transparent AI Matching Engine (Explainable Scoring)</p>
            <p className="text-slate-600 text-[11px]">
              No black-box algorithms: 50% Skill Compatibility + 20% Verified Evidence + 10% Coursework + 10% Career Synergy + 10% Availability.
            </p>
          </div>
        </div>
        <button
          onClick={() => setIsCopilotOpen(true)}
          className="px-3 py-1.5 rounded-xl bg-white border border-ayush-teal-300 text-ayush-teal-900 font-bold hover:bg-ayush-mint-100 transition-colors shrink-0 text-center"
        >
          Ask Copilot About Matches
        </button>
      </div>

      {/* Opportunities List */}
      <div className="space-y-4">
        {filteredOpps.map((opp) => {
          const isApplied = opp.status === 'APPLIED';
          const isSaved = savedIds.includes(opp.id);

          return (
            <div
              key={opp.id}
              className={`bg-white rounded-3xl p-6 border transition-all shadow-card hover:shadow-elevation space-y-4 ${
                opp.matchScore >= 90 ? 'border-ayush-green-300 ring-1 ring-ayush-green-100' : 'border-slate-200'
              }`}
            >
              {/* Top Row: Title, Company, Match Score Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-start gap-3.5">
                  <img
                    src={opp.companyLogo || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=80&auto=format&fit=crop&q=80'}
                    alt={opp.company}
                    className="w-12 h-12 rounded-2xl object-cover ring-1 ring-slate-200 shrink-0 shadow-sm"
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-slate-900">{opp.title}</h3>
                      <span className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded">
                        {opp.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">{opp.company}</p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" /> {opp.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> {opp.duration}
                      </span>
                      <span>•</span>
                      <strong className="text-emerald-700 font-bold">{opp.stipend}</strong>
                    </div>
                  </div>
                </div>

                {/* Match Score Badge */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1 bg-slate-50 sm:bg-transparent p-2 sm:p-0 rounded-xl">
                  <div className="flex items-center gap-1.5">
                    <span className="text-2xl font-extrabold text-slate-900">{opp.matchScore}%</span>
                    <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      AI Match
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedOpp(opp)}
                    className="text-[11px] font-bold text-ayush-teal-700 hover:underline flex items-center gap-0.5"
                  >
                    <span>Why you match?</span>
                    <ChevronDown className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {opp.description}
              </p>

              {/* Required Skills breakdown pills */}
              <div className="pt-1">
                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  Required Competency Profile:
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {opp.requiredSkills.map((sk, sIdx) => {
                    const isMet = sk.studentScore >= sk.required;
                    return (
                      <span
                        key={sIdx}
                        className={`text-xs px-2.5 py-1 rounded-xl flex items-center gap-1.5 font-medium border ${
                          isMet 
                            ? 'bg-emerald-50 text-emerald-900 border-emerald-200' 
                            : 'bg-amber-50 text-amber-900 border-amber-200'
                        }`}
                      >
                        {isMet ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        )}
                        <span>{sk.name}</span>
                        <span className="text-[10px] font-mono opacity-80">
                          ({sk.studentScore}% / {sk.required}%)
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleSave(opp.id)}
                    className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                      isSaved
                        ? 'bg-amber-50 border-amber-300 text-amber-900'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
                    <span>{isSaved ? 'Saved' : 'Save'}</span>
                  </button>

                  <button
                    onClick={() => {
                      showToast('Inquiry drafted for Dr. Priya Nair', 'info');
                      onNavigateTab('mentorship');
                    }}
                    className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Ask Mentor</span>
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedOpp(opp)}
                    className="px-4 py-2 rounded-xl border border-ayush-teal-300 hover:bg-ayush-mint-50 text-ayush-teal-900 font-bold text-xs transition-colors"
                  >
                    View Score Breakdown
                  </button>

                  <button
                    disabled={isApplied}
                    onClick={() => applyOpportunity(opp.id)}
                    className={`px-5 py-2 rounded-xl font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 ${
                      isApplied
                        ? 'bg-emerald-600 text-white cursor-default'
                        : 'bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white hover:shadow-md'
                    }`}
                  >
                    {isApplied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Applied Successfully</span>
                      </>
                    ) : (
                      <>
                        <span>Apply Directly</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* TRANSPARENT MATCH BREAKDOWN MODAL */}
      {selectedOpp && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-7 shadow-2xl border border-slate-200 space-y-5 animate-scale-up">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-ayush-teal-800">
                  Transparent AI Score Explainability
                </span>
                <h3 className="font-bold text-base text-slate-900 mt-0.5">
                  Match Breakdown: {selectedOpp.title}
                </h3>
              </div>
              <button onClick={() => setSelectedOpp(null)} className="text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-ayush-mint-50 rounded-2xl border border-ayush-teal-200">
              <div>
                <p className="text-xs text-slate-600">Calculated Compatibility Index</p>
                <p className="text-3xl font-extrabold text-ayush-teal-950 mt-0.5">{selectedOpp.matchScore}%</p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-full">
                High Synergistic Fit
              </span>
            </div>

            {/* Criteria weight distribution */}
            <div className="space-y-3 text-xs">
              <p className="font-bold text-slate-900 uppercase text-[11px] tracking-wider">
                5-Vector Scoring Weights:
              </p>

              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <span>1. Skill Compatibility (Max 50 pts)</span>
                  <strong className="font-mono text-slate-900">{selectedOpp.matchBreakdown.skillCompatibility} pts</strong>
                </div>
                <div className="flex justify-between items-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <span>2. Verified Evidence in Passport (Max 20 pts)</span>
                  <strong className="font-mono text-slate-900">{selectedOpp.matchBreakdown.verifiedEvidence} pts</strong>
                </div>
                <div className="flex justify-between items-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <span>3. Academic Track & Projects (Max 10 pts)</span>
                  <strong className="font-mono text-slate-900">{selectedOpp.matchBreakdown.experience} pts</strong>
                </div>
                <div className="flex justify-between items-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <span>4. Career Goal Alignment (Max 10 pts)</span>
                  <strong className="font-mono text-slate-900">{selectedOpp.matchBreakdown.careerInterest} pts</strong>
                </div>
                <div className="flex justify-between items-center p-2 rounded-xl bg-slate-50 border border-slate-200">
                  <span>5. Logistics & Work Mode (Max 10 pts)</span>
                  <strong className="font-mono text-slate-900">{selectedOpp.matchBreakdown.preferences} pts</strong>
                </div>
              </div>

              {/* Natural Language Explanation */}
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1.5">
                <p className="font-bold text-slate-800">Key AI Matching Determinants:</p>
                <ul className="space-y-1 text-slate-600">
                  {selectedOpp.matchBreakdown.explanation.map((exp, eIdx) => (
                    <li key={eIdx} className="flex items-start gap-2">
                      <span className="text-ayush-teal-700 font-bold">•</span>
                      <span>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                onClick={() => setSelectedOpp(null)}
                className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs"
              >
                Close
              </button>
              <button
                onClick={() => {
                  applyOpportunity(selectedOpp.id);
                  setSelectedOpp(null);
                }}
                className="px-5 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-sm"
              >
                Apply for {selectedOpp.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
