import React, { useState } from 'react';
import { useApp } from '../../store';
import { calculateWhatIfReadiness } from '../../services/aiService';
import { 
  Compass, 
  Sparkles, 
  TrendingUp, 
  Unlock, 
  CheckCircle2, 
  ArrowRight, 
  Briefcase, 
  Zap,
  FolderPlus
} from 'lucide-react';

interface WhatIfSimulatorViewProps {
  onNavigateTab: (tab: string) => void;
}

export const WhatIfSimulatorView: React.FC<WhatIfSimulatorViewProps> = ({ onNavigateTab }) => {
  const { careerReadiness, updateSkillScore, showToast } = useApp();

  const [targetCareer, setTargetCareer] = useState('Clinical Researcher (AYUSH)');
  
  // Toggles
  const [addDataAnalysis, setAddDataAnalysis] = useState(false);
  const [addResearchMethodology, setAddResearchMethodology] = useState(false);
  const [addProjectEvidence, setAddProjectEvidence] = useState(false);

  const { projectedReadiness, unlockedOpportunities } = calculateWhatIfReadiness(
    careerReadiness,
    {
      dataAnalysis: addDataAnalysis,
      researchMethodology: addResearchMethodology,
      projectCompleted: addProjectEvidence
    }
  );

  const deltaGain = projectedReadiness - careerReadiness;

  const handleApplySimulation = () => {
    if (addDataAnalysis) {
      updateSkillScore('Data Analysis', 70, 'Assessed');
    }
    if (addResearchMethodology) {
      updateSkillScore('Research Methodology', 75, 'Assessed');
    }
    if (addProjectEvidence) {
      updateSkillScore('Clinical Documentation', 76, 'Faculty Verified');
    }
    showToast(`Simulation Applied! Career readiness elevated to ${projectedReadiness}%!`, 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-amber-100 text-ayush-amber-800">
              <Compass className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              AYUSH Career What-If Simulator
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Sandbox engine: project your employability score and unlock prospective fellowships before completing coursework.
          </p>
        </div>

        {/* Target Career Picker */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-bold hidden sm:inline">Target Career:</span>
          <select
            value={targetCareer}
            onChange={(e) => setTargetCareer(e.target.value)}
            className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ayush-teal-700"
          >
            <option value="Clinical Researcher (AYUSH)">Clinical Researcher (AYUSH)</option>
            <option value="AYUSH Product Formulation Scientist">AYUSH Product Formulation Scientist</option>
            <option value="Holistic Wellness Specialist">Holistic Wellness Specialist</option>
          </select>
        </div>
      </div>

      {/* Main Simulation Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left: Interactive Lever Toggles */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Select Competencies & Milestones to Simulate
              </h3>
              <p className="text-xs text-slate-500">
                Toggle prospective credentials to observe real-time readiness shifts
              </p>
            </div>
            <span className="text-xs font-mono bg-ayush-teal-50 text-ayush-teal-900 px-2 py-0.5 rounded font-bold">
              Base: {careerReadiness}%
            </span>
          </div>

          <div className="space-y-3">
            {/* Lever 1: Data Analysis */}
            <div 
              onClick={() => setAddDataAnalysis(!addDataAnalysis)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                addDataAnalysis 
                  ? 'border-ayush-teal-600 bg-ayush-teal-50/70 shadow-sm' 
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={addDataAnalysis}
                  onChange={() => {}}
                  className="mt-0.5 w-4 h-4 text-ayush-teal-800 rounded border-slate-300 focus:ring-ayush-teal-600 cursor-pointer"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900">
                      Complete "AYUSH Clinical Data Analysis & Biostatistics" (12 hrs)
                    </h4>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded">
                      +8% Readiness
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Closes the 28% Data Analysis gap. Demonstrates mastery of paired t-tests & observational registries.
                  </p>
                </div>
              </div>
              <Sparkles className={`w-4 h-4 shrink-0 ${addDataAnalysis ? 'text-ayush-teal-700' : 'text-slate-300'}`} />
            </div>

            {/* Lever 2: Research Methodology */}
            <div 
              onClick={() => setAddResearchMethodology(!addResearchMethodology)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                addResearchMethodology 
                  ? 'border-ayush-teal-600 bg-ayush-teal-50/70 shadow-sm' 
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={addResearchMethodology}
                  onChange={() => {}}
                  className="mt-0.5 w-4 h-4 text-ayush-teal-800 rounded border-slate-300 focus:ring-ayush-teal-600 cursor-pointer"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900">
                      Advance "Research Methodology & GCP Protocols" (Score ➔ 75%)
                    </h4>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded">
                      +7% Readiness
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Qualifies ethical clearance protocols and randomized controlled study designs.
                  </p>
                </div>
              </div>
              <Sparkles className={`w-4 h-4 shrink-0 ${addResearchMethodology ? 'text-ayush-teal-700' : 'text-slate-300'}`} />
            </div>

            {/* Lever 3: Real-World Research Project */}
            <div 
              onClick={() => setAddProjectEvidence(!addProjectEvidence)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                addProjectEvidence 
                  ? 'border-ayush-teal-600 bg-ayush-teal-50/70 shadow-sm' 
                  : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
              }`}
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={addProjectEvidence}
                  onChange={() => {}}
                  className="mt-0.5 w-4 h-4 text-ayush-teal-800 rounded border-slate-300 focus:ring-ayush-teal-600 cursor-pointer"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900">
                      Publish & Verify Real-World Research Project Evidence
                    </h4>
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded">
                      +6% Readiness
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    Receives Dr. Priya Nair's endorsement badge for Panchakarma registry trial dataset.
                  </p>
                </div>
              </div>
              <Sparkles className={`w-4 h-4 shrink-0 ${addProjectEvidence ? 'text-ayush-teal-700' : 'text-slate-300'}`} />
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between">
            <button
              onClick={() => {
                setAddDataAnalysis(true);
                setAddResearchMethodology(true);
                setAddProjectEvidence(true);
              }}
              className="text-xs text-ayush-teal-800 font-bold hover:underline"
            >
              Select All Levers
            </button>
            <button
              onClick={() => {
                setAddDataAnalysis(false);
                setAddResearchMethodology(false);
                setAddProjectEvidence(false);
              }}
              className="text-xs text-slate-400 font-medium hover:underline"
            >
              Reset Simulation
            </button>
          </div>
        </div>

        {/* Right: Projected Outcome Display */}
        <div className="lg:col-span-5 bg-gradient-to-br from-ayush-teal-950 via-ayush-teal-900 to-ayush-green-950 rounded-3xl p-6 sm:p-7 text-white shadow-elevation space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase font-bold text-ayush-green-400 tracking-wider flex items-center gap-1.5">
              <Zap className="w-4 h-4" /> Real-Time Simulation Result
            </span>
            {deltaGain > 0 && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-ayush-green-500 text-ayush-teal-950">
                +{deltaGain}% Projected Gain
              </span>
            )}
          </div>

          {/* Big Score Display */}
          <div className="bg-white/10 rounded-2xl p-4 border border-white/10 text-center space-y-1">
            <p className="text-xs text-ayush-teal-200 font-medium">Projected Career Readiness</p>
            <p className="text-5xl font-extrabold text-white tracking-tight">{projectedReadiness}%</p>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-3">
              <div
                className="bg-gradient-to-r from-ayush-amber-400 to-ayush-green-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${projectedReadiness}%` }}
              />
            </div>
            <p className="text-[11px] text-ayush-teal-200 pt-1">
              Current: {careerReadiness}% ➔ Projected: {projectedReadiness}%
            </p>
          </div>

          {/* Unlocked Opportunities Alert */}
          <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-ayush-amber-300">
              <Unlock className="w-4 h-4 shrink-0" />
              <span>
                {unlockedOpportunities > 0 
                  ? `${unlockedOpportunities} Additional High-Stipend Opportunities Unlocked!` 
                  : 'Toggle levers above to unlock matching fellowships'}
              </span>
            </div>
            <p className="text-ayush-teal-100 text-[11px] leading-relaxed">
              Achieving {projectedReadiness}% readiness qualifies you for the <strong>Clinical Research Fellow (₹32,000/mo)</strong> and <strong>Tele-AYUSH Informatics Analyst (₹28,000/mo)</strong> roles.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button
              disabled={deltaGain === 0}
              onClick={handleApplySimulation}
              className="w-full py-3 rounded-xl bg-ayush-green-500 hover:bg-ayush-green-400 text-ayush-teal-950 font-bold text-xs shadow-md disabled:opacity-40 transition-all flex items-center justify-center gap-2"
            >
              <span>Apply Simulated Gains to Profile</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateTab('roadmap')}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/10 transition-colors text-center"
            >
              <span>View 4-Week Execution Roadmap</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
