import React, { useState, useEffect } from 'react';
import { useApp } from '../../store';
import { ASSESSMENT_QUESTIONS } from '../../data/seedData';
import { 
  ClipboardCheck, 
  Timer, 
  CheckCircle2, 
  XCircle, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  AlertCircle,
  HelpCircle,
  Award
} from 'lucide-react';
import { AYUSHDiscipline } from '../../types';

interface SkillAssessmentViewProps {
  onNavigateTab: (tab: string) => void;
}

export const SkillAssessmentView: React.FC<SkillAssessmentViewProps> = ({ onNavigateTab }) => {
  const { updateSkillScore, showToast } = useApp();

  const [selectedDiscipline, setSelectedDiscipline] = useState<AYUSHDiscipline>('Ayurveda');
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [isCompleted, setIsCompleted] = useState(false);
  const [scoreResult, setScoreResult] = useState<{
    score: number;
    correctCount: number;
    strengths: string[];
    weaknesses: string[];
    recommendedCourse: string;
  } | null>(null);

  const questions = ASSESSMENT_QUESTIONS[selectedDiscipline] || ASSESSMENT_QUESTIONS['Ayurveda'];

  useEffect(() => {
    let timer: any;
    if (assessmentStarted && !isCompleted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(t => t - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [assessmentStarted, isCompleted, timeLeft]);

  const handleStart = () => {
    setAssessmentStarted(true);
    setCurrentIndex(0);
    setSelectedOptions({});
    setTimeLeft(600);
    setIsCompleted(false);
    setScoreResult(null);
  };

  const handleSelectOption = (optionIdx: number) => {
    setSelectedOptions(prev => ({
      ...prev,
      [currentIndex]: optionIdx
    }));
  };

  const handleSubmit = () => {
    let correct = 0;
    const strengths: string[] = [];
    const weaknesses: string[] = [];

    questions.forEach((q, idx) => {
      const chosen = selectedOptions[idx];
      if (chosen === q.correctIndex) {
        correct++;
        strengths.push(q.skillTag);
      } else {
        weaknesses.push(q.skillTag);
      }
    });

    const calculatedScore = Math.round((correct / questions.length) * 100);

    const result = {
      score: calculatedScore,
      correctCount: correct,
      strengths: Array.from(new Set(strengths)),
      weaknesses: Array.from(new Set(weaknesses)),
      recommendedCourse: 'AYUSH Clinical Data Analysis & Biostatistics (12 hrs)'
    };

    setScoreResult(result);
    setIsCompleted(true);

    // Update the student store! If they got Research Methodology or Data Analysis right, boost score
    if (strengths.includes('Research Methodology')) {
      updateSkillScore('Research Methodology', 72, 'Assessed');
    }
    if (strengths.includes('Data Analysis')) {
      updateSkillScore('Data Analysis', 65, 'Assessed');
    } else {
      updateSkillScore('Data Analysis', 45, 'Assessed');
    }

    showToast(`Assessment Complete! Score: ${calculatedScore}%. Profile updated.`, 'success');
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const disciplines: AYUSHDiscipline[] = [
    'Ayurveda',
    'Yoga & Naturopathy',
    'Unani',
    'Siddha',
    'Sowa-Rigpa',
    'Homoeopathy'
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded-lg bg-ayush-teal-100 text-ayush-teal-800">
              <ClipboardCheck className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              AYUSH Standardized Skill Assessment
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Standardized clinical case evaluations calibrated with AIIA & ICMR research protocols.
          </p>
        </div>

        {/* Discipline Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {disciplines.map(d => (
            <button
              key={d}
              onClick={() => {
                setSelectedDiscipline(d);
                if (assessmentStarted) handleStart();
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedDiscipline === d
                  ? 'bg-ayush-teal-800 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Main Assessment Container */}
      {!assessmentStarted ? (
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card text-center max-w-2xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-ayush-mint-100 text-ayush-teal-800 flex items-center justify-center mx-auto text-2xl shadow-sm">
            🌿
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold text-slate-900">
              {selectedDiscipline} Clinical Competency & Research Benchmark
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              This interactive test covers <strong>AYUSH Pharmacology, GCP Protocol Design, ADR Pharmacovigilance, and Statistical Data Analysis</strong>. Scores directly update your Verified Skill Passport.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 text-left">
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Questions</span>
              <strong className="text-slate-800 text-sm">{questions.length} Proctored</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Time Limit</span>
              <strong className="text-slate-800 text-sm">10 Minutes</strong>
            </div>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Type</span>
              <strong className="text-slate-800 text-sm">MCQ + Scenario</strong>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full py-3 px-6 rounded-2xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-elevation transition-all flex items-center justify-center gap-2"
          >
            <span>Begin Standardized Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      ) : !isCompleted ? (
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-elevation max-w-3xl mx-auto space-y-6">
          {/* Quiz Top Status */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-bold text-ayush-teal-900 bg-ayush-mint-50 border border-ayush-teal-200 px-2.5 py-1 rounded-lg">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span className="text-slate-500 font-medium">
                Category: <strong>{questions[currentIndex].skillTag}</strong>
              </span>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg">
              <Timer className="w-3.5 h-3.5 text-amber-600" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-ayush-teal-700 h-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            />
          </div>

          {/* Scenario Context (if any) */}
          {questions[currentIndex].scenarioContext && (
            <div className="p-3 bg-ayush-mint-50/70 border border-ayush-teal-200 rounded-2xl text-xs text-ayush-teal-950 font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-ayush-teal-700 shrink-0" />
              <span><strong>Scenario Context:</strong> {questions[currentIndex].scenarioContext}</span>
            </div>
          )}

          {/* Question Text */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
              {questions[currentIndex].question}
            </h4>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {questions[currentIndex].options.map((opt, optIdx) => {
              const isSelected = selectedOptions[currentIndex] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  className={`w-full p-3.5 rounded-2xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-ayush-teal-700 bg-ayush-teal-50 text-ayush-teal-950 ring-2 ring-ayush-teal-600/30'
                      : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                      isSelected ? 'bg-ayush-teal-800 text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isSelected && <CheckCircle2 className="w-4 h-4 text-ayush-teal-700 shrink-0 ml-2" />}
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              disabled={currentIndex === 0}
              onClick={() => setCurrentIndex(i => i - 1)}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 disabled:opacity-40"
            >
              Previous
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                disabled={selectedOptions[currentIndex] === undefined}
                onClick={() => setCurrentIndex(i => i + 1)}
                className="px-5 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-sm disabled:opacity-40 flex items-center gap-1.5"
              >
                <span>Next Question</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                disabled={selectedOptions[currentIndex] === undefined}
                onClick={handleSubmit}
                className="px-6 py-2 rounded-xl bg-ayush-green-700 hover:bg-ayush-green-800 text-white font-bold text-xs shadow-md disabled:opacity-40 flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit & Generate Diagnostic</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results Section */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-elevation max-w-3xl mx-auto space-y-6 animate-scale-up">
          <div className="text-center space-y-2 pb-4 border-b border-slate-100">
            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-2xl shadow-sm">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Assessment Diagnostic Report
            </h3>
            <p className="text-xs text-slate-500">
              Calibrated under AIIA Academic Research Protocols • Discipline: {selectedDiscipline}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 bg-ayush-mint-50 rounded-2xl border border-ayush-teal-200 text-center">
              <p className="text-[10px] font-bold uppercase text-ayush-teal-800">Overall Score</p>
              <p className="text-3xl font-extrabold text-ayush-teal-950 mt-1">{scoreResult?.score}%</p>
              <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">
                {scoreResult?.correctCount} of {questions.length} Correct
              </p>
            </div>

            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
              <p className="text-[10px] font-bold uppercase text-emerald-800">Verified Strengths</p>
              <p className="text-xs font-bold text-emerald-950 mt-2">
                {scoreResult?.strengths.join(', ') || 'AYUSH Core Pharmacology'}
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-center">
              <p className="text-[10px] font-bold uppercase text-amber-800">Gap Areas Identified</p>
              <p className="text-xs font-bold text-amber-950 mt-2">
                {scoreResult?.weaknesses.join(', ') || 'Data Analysis & Biostatistics'}
              </p>
            </div>
          </div>

          {/* Recommended Learning Action */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800">Recommended Learning Pathway:</span>
              <span className="text-[10px] bg-ayush-teal-100 text-ayush-teal-900 font-bold px-2 py-0.5 rounded">
                Bridge Module
              </span>
            </div>
            <p className="text-xs text-slate-600">
              {scoreResult?.recommendedCourse}
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              onClick={handleStart}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 border border-slate-200 flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retake Assessment</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={() => onNavigateTab('gaps')}
                className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
              >
                <span>View Updated Skill Gaps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
