import React from 'react';
import { useApp } from '../../store';
import { 
  Lightbulb, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  Clock, 
  Building2, 
  Users,
  CheckCircle,
  FileSpreadsheet
} from 'lucide-react';

export const CurriculumIntelligenceView: React.FC = () => {
  const { curriculumInsights, advanceCurriculumStatus } = useApp();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-amber-100 text-ayush-amber-800">
              <Lightbulb className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Industry ➔ Curriculum Intelligence Engine
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Detecting macro employability gaps and converting industry feedback into actionable institutional syllabi revisions.
          </p>
        </div>

        <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-100 text-purple-900 border border-purple-200">
          AIIA Academic Council Mode
        </span>
      </div>

      {/* Curriculum Insights Cards */}
      <div className="space-y-6">
        {curriculumInsights.map((insight) => {
          const gap = insight.industryDemand - insight.studentProficiency;

          return (
            <div
              key={insight.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6"
            >
              {/* Header inside card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{insight.skillArea}</h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 flex items-center gap-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                      Critical Institutional Gap: {gap}%
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Affected Cohorts: <strong>{insight.affectedPrograms.join(', ')}</strong>
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Current Status</p>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg inline-block mt-0.5 ${
                      insight.status === 'Curriculum Updated'
                        ? 'bg-emerald-100 text-emerald-800'
                        : insight.status === 'FDP in Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}>
                      {insight.status}
                    </span>
                  </div>

                  <button
                    onClick={() => advanceCurriculumStatus(insight.id)}
                    className="px-3.5 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-sm transition-all"
                  >
                    Advance Status ➔
                  </button>
                </div>
              </div>

              {/* Demand vs Proficiency Comparison Bar */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-700">Industry Demand: <strong>{insight.industryDemand}%</strong></span>
                  <span className="font-bold text-slate-700">Cohort Proficiency: <strong className="text-rose-600">{insight.studentProficiency}%</strong></span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 w-24 font-mono">Industry Signal</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-ayush-teal-800 h-full rounded-full" style={{ width: `${insight.industryDemand}%` }} />
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-400 w-24 font-mono">Student Cohort</span>
                    <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-rose-500 h-full rounded-full" style={{ width: `${insight.studentProficiency}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* 5-Step Action Plan */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-ayush-green-600" />
                  Mandated 5-Step Remediation Roadmap:
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {insight.fiveStepActionPlan.map((stepText, idx) => {
                    const stepNumber = idx + 1;
                    const isPassed = (insight.status === 'FDP in Progress' && stepNumber <= 2) || (insight.status === 'Curriculum Updated');

                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                          isPassed 
                            ? 'bg-emerald-50/70 border-emerald-200' 
                            : 'bg-white border-slate-200'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-[10px] font-bold font-mono text-slate-400">
                              STEP {stepNumber}
                            </span>
                            {isPassed && <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />}
                          </div>
                          <p className="text-xs font-semibold text-slate-800 leading-snug">
                            {stepText}
                          </p>
                        </div>

                        <div className="mt-3 pt-2 border-t border-slate-100 text-[10px] font-bold text-ayush-teal-800">
                          {stepNumber === 1 ? 'Faculty Dev' : stepNumber === 2 ? 'Industry Expert' : stepNumber === 3 ? 'Practical Syllabi' : stepNumber === 4 ? 'Cohort Challenge' : 'Reassessment'}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
