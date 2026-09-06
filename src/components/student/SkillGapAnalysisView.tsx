import React, { useState } from 'react';
import { useApp } from '../../store';
import { 
  GitCompare, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Sparkles, 
  Compass, 
  BookOpen, 
  ChevronDown, 
  ChevronUp,
  Target,
  BarChart3
} from 'lucide-react';

interface SkillGapAnalysisViewProps {
  onNavigateTab: (tab: string) => void;
}

export const SkillGapAnalysisView: React.FC<SkillGapAnalysisViewProps> = ({ onNavigateTab }) => {
  const { skillGaps, skills } = useApp();
  const [expandedGapId, setExpandedGapId] = useState<string | null>('gap-1');
  const [targetRole, setTargetRole] = useState<'Clinical Research Intern' | 'AYUSH Product Developer' | 'Holistic Wellness Specialist'>('Clinical Research Intern');

  const benchmarkComparisons = [
    {
      skill: 'AYUSH Core Knowledge & Pharmacology',
      required: 80,
      current: skills.find(s => s.name.includes('Pharmacology'))?.score || 88,
      status: 'Benchmark Met'
    },
    {
      skill: 'Panchakarma & Clinical Protocols',
      required: 75,
      current: skills.find(s => s.name.includes('Panchakarma'))?.score || 76,
      status: 'Benchmark Met'
    },
    {
      skill: 'Clinical Documentation & NAMASTE Coding',
      required: 75,
      current: skills.find(s => s.name.includes('Documentation'))?.score || 64,
      status: 'Moderate Gap (11%)'
    },
    {
      skill: 'Research Methodology & GCP Protocols',
      required: 80,
      current: skills.find(s => s.name.includes('Research Methodology'))?.score || 58,
      status: 'Priority Gap (22%)'
    },
    {
      skill: 'Data Analysis & Clinical Biostatistics',
      required: 70,
      current: skills.find(s => s.name.includes('Data Analysis'))?.score || 42,
      status: 'Critical Gap (28%)'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-teal-100 text-ayush-teal-800">
              <GitCompare className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              AYUSH Skill Gap Intelligence
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Comparative analysis: <strong>Industry Benchmark Requirement</strong> vs <strong>Student Real Capability</strong>
          </p>
        </div>

        {/* Target Benchmark Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 font-bold hidden sm:inline">Benchmark:</span>
          <select
            value={targetRole}
            onChange={(e) => setTargetRole(e.target.value as any)}
            className="bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ayush-teal-700"
          >
            <option value="Clinical Research Intern">Clinical Research Intern</option>
            <option value="AYUSH Product Developer">AYUSH Product Developer</option>
            <option value="Holistic Wellness Specialist">Holistic Wellness Specialist</option>
          </select>
        </div>
      </div>

      {/* Visual Comparison Grid */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Comparative Skill Matrix — {targetRole}
            </h3>
            <p className="text-xs text-slate-500">
              Live delta comparison against 14 active industry job postings
            </p>
          </div>

          <button
            onClick={() => onNavigateTab('simulator')}
            className="px-3.5 py-1.5 rounded-xl bg-ayush-mint-50 hover:bg-ayush-mint-100 text-ayush-teal-900 border border-ayush-teal-300 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Compass className="w-3.5 h-3.5 text-ayush-teal-700" />
            <span>Simulate Skill Gains</span>
          </button>
        </div>

        {/* Benchmark Visual Bars */}
        <div className="space-y-4">
          {benchmarkComparisons.map((item, idx) => {
            const gap = item.required - item.current;
            const isCritical = gap > 20;
            const isModerate = gap > 0 && gap <= 20;
            const isMet = gap <= 0;

            return (
              <div key={idx} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/80 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  <span className="font-bold text-slate-900 text-sm">{item.skill}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-slate-500">
                      Required: <strong className="text-slate-800">{item.required}%</strong> | Current:{' '}
                      <strong className={isMet ? 'text-emerald-700' : 'text-rose-600'}>{item.current}%</strong>
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isMet 
                        ? 'bg-emerald-100 text-emerald-800' 
                        : isCritical 
                        ? 'bg-rose-100 text-rose-800' 
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Dual Bar Comparison */}
                <div className="space-y-1">
                  {/* Required Benchmark Bar */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 w-16 font-mono">Industry</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-slate-600 h-full rounded-full" style={{ width: `${item.required}%` }}></div>
                    </div>
                  </div>

                  {/* Student Capability Bar */}
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 w-16 font-mono">Student</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          isMet ? 'bg-emerald-500' : isCritical ? 'bg-rose-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${item.current}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Gap Explanations: "Why is this a gap?" and "How can I close it?" */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900">
            Actionable Remediation Pathways
          </h3>
          <span className="text-xs text-slate-500">Click to expand diagnosis</span>
        </div>

        {skillGaps.map((gap) => {
          const isExpanded = expandedGapId === gap.id;
          return (
            <div
              key={gap.id}
              className={`bg-white rounded-2xl border transition-all overflow-hidden ${
                gap.priority === 'HIGH' ? 'border-rose-300 shadow-sm' : 'border-slate-200'
              }`}
            >
              {/* Gap Item Bar */}
              <div
                onClick={() => setExpandedGapId(isExpanded ? null : gap.id)}
                className="p-4 sm:p-5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                    gap.priority === 'HIGH' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {gap.priority === 'HIGH' ? <AlertTriangle className="w-5 h-5" /> : <HelpCircle className="w-5 h-5" />}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-slate-900 text-sm">{gap.skillName}</h4>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        gap.priority === 'HIGH' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {gap.priority} PRIORITY GAP: {gap.gapPercentage}%
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Required Score: {gap.requiredScore}% • Current Score: {gap.currentScore}%
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </div>

              {/* Expandable Explanation Body */}
              {isExpanded && (
                <div className="p-4 sm:p-6 bg-slate-50/70 border-t border-slate-100 space-y-4 animate-fade-in text-xs">
                  {/* Why is this a gap? */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
                    <p className="font-bold text-slate-900 flex items-center gap-1.5 text-xs text-rose-800">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      Why is this a gap for Clinical Research?
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      {gap.whyGap}
                    </p>
                  </div>

                  {/* How can I close it? */}
                  <div className="p-3.5 rounded-xl bg-ayush-mint-50 border border-ayush-teal-200 space-y-1">
                    <p className="font-bold text-ayush-teal-950 flex items-center gap-1.5 text-xs">
                      <Sparkles className="w-3.5 h-3.5 text-ayush-teal-700" />
                      How can I close this gap?
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      {gap.howToClose}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-end gap-2 pt-1">
                    <button
                      onClick={() => onNavigateTab('simulator')}
                      className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold flex items-center gap-1.5"
                    >
                      <Compass className="w-3.5 h-3.5 text-slate-600" />
                      <span>Simulate +{gap.gapPercentage}% Gain</span>
                    </button>

                    <button
                      onClick={() => onNavigateTab('learning')}
                      className="px-4 py-1.5 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold flex items-center gap-1.5 shadow-sm"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Start Learning Pathway</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
