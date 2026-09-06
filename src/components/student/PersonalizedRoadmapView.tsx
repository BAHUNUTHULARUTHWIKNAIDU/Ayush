import React from 'react';
import { useApp } from '../../store';
import { 
  GraduationCap, 
  CheckCircle2, 
  Circle, 
  Clock, 
  BookOpen, 
  ArrowRight, 
  Sparkles, 
  Award,
  Zap
} from 'lucide-react';

interface PersonalizedRoadmapViewProps {
  onNavigateTab: (tab: string) => void;
}

export const PersonalizedRoadmapView: React.FC<PersonalizedRoadmapViewProps> = ({ onNavigateTab }) => {
  const { roadmap, toggleRoadmapItem, careerReadiness } = useApp();

  const completedSteps = roadmap.filter(s => s.isCompleted).length;
  const progressPercent = Math.round((completedSteps / roadmap.length) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-teal-100 text-ayush-teal-800">
              <GraduationCap className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Personalized 4-Week Career Roadmap
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tailored AI milestones to close clinical research skill gaps and reach <strong>90% Target Readiness</strong>.
          </p>
        </div>

        {/* Target Indicator */}
        <div className="flex items-center gap-3 bg-ayush-mint-50/80 border border-ayush-teal-200 px-4 py-2.5 rounded-2xl">
          <div>
            <p className="text-[10px] uppercase font-bold text-ayush-teal-800">Milestone Progress</p>
            <p className="text-xs text-slate-600">
              Current: <strong className="text-slate-900">{careerReadiness}%</strong> ➔ Target:{' '}
              <strong className="text-emerald-700 font-bold">90%</strong>
            </p>
          </div>
          <div className="text-right">
            <span className="text-base font-extrabold text-ayush-teal-950 font-mono">
              {completedSteps}/{roadmap.length}
            </span>
          </div>
        </div>
      </div>

      {/* Timeline Steps Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-ayush-teal-700 h-full rounded-full transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="space-y-4">
          {roadmap.map((step) => {
            return (
              <div
                key={step.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  step.isCompleted
                    ? 'border-emerald-200 bg-emerald-50/30'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleRoadmapItem(step.id)}
                    className={`p-1.5 rounded-xl border mt-0.5 transition-colors ${
                      step.isCompleted
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : 'border-slate-300 hover:border-ayush-teal-600 text-slate-400'
                    }`}
                    title={step.isCompleted ? 'Mark incomplete' : 'Mark completed'}
                  >
                    {step.isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                  </button>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-extrabold text-ayush-teal-900 bg-ayush-mint-100 px-2 py-0.5 rounded">
                        WEEK {step.week}
                      </span>
                      <h4 className={`text-sm font-bold ${step.isCompleted ? 'text-slate-500 line-through' : 'text-slate-900'}`}>
                        {step.title}
                      </h4>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.2 rounded font-semibold">
                        {step.difficulty}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.2 rounded">
                        {step.skillTarget}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        {step.durationHours} Hours estimated
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-ayush-teal-700 font-medium">
                        <BookOpen className="w-3.5 h-3.5" />
                        {step.resourceTitle}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 sm:self-center">
                  <button
                    onClick={() => {
                      if (step.actionType === 'course') onNavigateTab('learning');
                      else if (step.actionType === 'project') onNavigateTab('passport');
                      else onNavigateTab('assessment');
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1 transition-colors"
                  >
                    <span>Launch Activity</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <button
                    onClick={() => toggleRoadmapItem(step.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      step.isCompleted
                        ? 'bg-slate-200 text-slate-700'
                        : 'bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white'
                    }`}
                  >
                    {step.isCompleted ? 'Done ✓' : 'Mark Done'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
