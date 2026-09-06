import React, { useState } from 'react';
import { useApp } from '../../store';
import { 
  BookOpen, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Award,
  Video,
  FileText
} from 'lucide-react';

interface LearningHubViewProps {
  onNavigateTab: (tab: string) => void;
}

export const LearningHubView: React.FC<LearningHubViewProps> = ({ onNavigateTab }) => {
  const { updateSkillScore, showToast } = useApp();
  const [activeFilter, setActiveFilter] = useState<'All' | 'Gap Recommendations' | 'Research' | 'Clinical'>('Gap Recommendations');

  const courses = [
    {
      id: 'crs-1',
      title: 'AYUSH Clinical Data Analysis & Biostatistics',
      category: 'Gap Recommendations',
      duration: '12 Hours',
      level: 'Intermediate',
      modulesCount: 6,
      provider: 'All India Institute of Ayurveda & Vaidya Analytics',
      description: 'Master clinical trial metrics, p-values, paired t-tests, and registry statistical aggregation in Ayurveda clinical research.',
      skillsGained: ['Data Analysis (+18%)', 'Biostatistics'],
      isHighPriorityGap: true,
      progress: 25
    },
    {
      id: 'crs-2',
      title: 'Good Clinical Practice (GCP) & Ethical AYUSH Trials',
      category: 'Research',
      duration: '8 Hours',
      level: 'Intermediate',
      modulesCount: 4,
      provider: 'Ministry of AYUSH Central Council',
      description: 'Systematic study design, ICMR-AYUSH guidelines, ethics committee submissions, and trial synopsis creation.',
      skillsGained: ['Research Methodology (+12%)', 'Trial Ethics'],
      isHighPriorityGap: true,
      progress: 60
    },
    {
      id: 'crs-3',
      title: 'Standardized Clinical Documentation & NAMASTE Portal',
      category: 'Clinical',
      duration: '6 Hours',
      level: 'Beginner',
      modulesCount: 3,
      provider: 'National AYUSH Mission E-Learning Cell',
      description: 'Structured electronic case-sheet entry, WHO-UMC pharmacovigilance causality assessment, and ICD-11 AYUSH terminology.',
      skillsGained: ['Clinical Documentation (+10%)'],
      isHighPriorityGap: false,
      progress: 0
    },
    {
      id: 'crs-4',
      title: 'Panchakarma Protocol Standardization & Safety',
      category: 'Clinical',
      duration: '10 Hours',
      level: 'Advanced',
      modulesCount: 5,
      provider: 'Department of Panchakarma, AIIA',
      description: 'Standard operating procedures (SOPs) for Vamana, Virechana, Basti, and clinical vital monitoring.',
      skillsGained: ['Panchakarma Therapy'],
      isHighPriorityGap: false,
      progress: 100
    }
  ];

  const filteredCourses = activeFilter === 'All' 
    ? courses 
    : courses.filter(c => c.category === activeFilter || (activeFilter === 'Gap Recommendations' && c.isHighPriorityGap));

  const handleStartModule = (courseTitle: string, skillToBoost: string) => {
    showToast(`Enrolled in "${courseTitle}"! Accessing AIIA Digital Academy.`, 'success');
    if (skillToBoost.includes('Data Analysis')) {
      setTimeout(() => {
        updateSkillScore('Data Analysis', 60, 'Assessed');
        showToast('Course module 1 completed! Data Analysis updated to 60%.', 'info');
      }, 1500);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-teal-100 text-ayush-teal-800">
              <BookOpen className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              AYUSH Learning & Skill Hub
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Curated bridge courses calibrated to close your verified skill gaps and meet industry employer standards.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {['All', 'Gap Recommendations', 'Research', 'Clinical'].map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                activeFilter === f
                  ? 'bg-ayush-teal-800 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className={`bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between shadow-card hover:shadow-elevation ${
              course.isHighPriorityGap ? 'border-ayush-teal-300 ring-1 ring-ayush-teal-100' : 'border-slate-200'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-ayush-mint-100 text-ayush-teal-900 border border-ayush-teal-200">
                  {course.provider.split('&')[0]}
                </span>
                {course.isHighPriorityGap && (
                  <span className="text-[10px] font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-rose-600" /> Closes High Gap
                  </span>
                )}
              </div>

              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {course.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {course.description}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {course.skillsGained.map((sk, sIdx) => (
                  <span key={sIdx} className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg">
                    {sk}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Video className="w-3.5 h-3.5" /> {course.modulesCount} Modules
                </span>
                <span>{course.level}</span>
              </div>
            </div>

            {/* Bottom Progress & Action */}
            <div className="mt-5 pt-3 border-t border-slate-100 space-y-2">
              {course.progress > 0 && (
                <div>
                  <div className="flex justify-between text-[11px] text-slate-500 font-medium mb-1">
                    <span>Progress</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-ayush-teal-700 h-full rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between gap-2 pt-1">
                <button
                  onClick={() => onNavigateTab('assessment')}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
                >
                  Take Assessment
                </button>

                <button
                  onClick={() => handleStartModule(course.title, course.skillsGained[0])}
                  className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{course.progress > 0 ? 'Resume Module' : 'Start Learning'}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
