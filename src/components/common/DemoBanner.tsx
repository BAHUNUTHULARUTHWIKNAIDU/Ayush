import React from 'react';
import { useApp } from '../../store';
import { 
  Sparkles, 
  RotateCcw, 
  GraduationCap, 
  UserCheck, 
  Briefcase, 
  Building2, 
  Landmark,
  ArrowRightCircle
} from 'lucide-react';

interface DemoBannerProps {
  onOpenTour: () => void;
  onOpenFinalScreen: () => void;
}

export const DemoBanner: React.FC<DemoBannerProps> = ({ onOpenTour, onOpenFinalScreen }) => {
  const { currentUser, loginAsRole, resetDemoData } = useApp();

  return (
    <div className="bg-gradient-to-r from-ayush-teal-950 via-ayush-teal-900 to-ayush-teal-950 text-white text-xs py-2 px-3 sm:px-6 shadow-md border-b border-ayush-teal-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Hackathon Identity */}
        <div className="flex items-center gap-2">
          <span className="bg-ayush-amber-500 text-ayush-teal-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wider uppercase flex items-center gap-1 shadow-sm">
            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '4s' }} /> SIH 2026 PS26044
          </span>
          <span className="font-semibold text-ayush-teal-100 hidden md:inline">
            AYUSH SkillConnect Prototype
          </span>
          <span className="text-ayush-teal-400 hidden lg:inline">|</span>
          <span className="text-ayush-teal-300 hidden lg:inline">
            Ministry of AYUSH • AIIA New Delhi
          </span>
        </div>

        {/* Center: 1-Click Role Switcher */}
        <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
          <span className="text-ayush-teal-300 font-medium mr-1 text-[11px] hidden sm:inline">Role Switch:</span>
          
          <button
            onClick={() => loginAsRole('student')}
            className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
              currentUser?.role === 'STUDENT'
                ? 'bg-ayush-green-500 text-ayush-teal-950 font-bold shadow-sm ring-1 ring-white/50'
                : 'bg-white/10 hover:bg-white/20 text-ayush-teal-100'
            }`}
            title="Switch to Student (Ananya Sharma)"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Student</span>
          </button>

          <button
            onClick={() => loginAsRole('faculty')}
            className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
              currentUser?.role === 'FACULTY'
                ? 'bg-ayush-green-500 text-ayush-teal-950 font-bold shadow-sm ring-1 ring-white/50'
                : 'bg-white/10 hover:bg-white/20 text-ayush-teal-100'
            }`}
            title="Switch to Faculty (Dr. Priya Nair)"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Faculty</span>
          </button>

          <button
            onClick={() => loginAsRole('industry')}
            className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
              currentUser?.role === 'INDUSTRY'
                ? 'bg-ayush-green-500 text-ayush-teal-950 font-bold shadow-sm ring-1 ring-white/50'
                : 'bg-white/10 hover:bg-white/20 text-ayush-teal-100'
            }`}
            title="Switch to Recruiter (Rahul Mehta)"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Recruiter</span>
          </button>

          <button
            onClick={() => loginAsRole('institution')}
            className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
              currentUser?.role === 'INSTITUTION'
                ? 'bg-ayush-green-500 text-ayush-teal-950 font-bold shadow-sm ring-1 ring-white/50'
                : 'bg-white/10 hover:bg-white/20 text-ayush-teal-100'
            }`}
            title="Switch to Institution (Dean Prasad)"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Institution</span>
          </button>

          <button
            onClick={() => loginAsRole('ministry')}
            className={`px-2 py-1 rounded flex items-center gap-1 transition-all ${
              currentUser?.role === 'MINISTRY'
                ? 'bg-ayush-green-500 text-ayush-teal-950 font-bold shadow-sm ring-1 ring-white/50'
                : 'bg-white/10 hover:bg-white/20 text-ayush-teal-100'
            }`}
            title="Switch to Ministry Admin"
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Ministry</span>
          </button>
        </div>

        {/* Right: Tour & Reset Actions */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenTour}
            className="bg-ayush-teal-600 hover:bg-ayush-teal-500 text-white font-medium px-2 py-1 rounded flex items-center gap-1 transition-colors border border-ayush-teal-400/40"
          >
            <Sparkles className="w-3 h-3 text-ayush-amber-300" />
            <span className="hidden sm:inline">Guided</span> Demo Tour
          </button>

          <button
            onClick={onOpenFinalScreen}
            className="bg-ayush-green-700 hover:bg-ayush-green-600 text-white font-medium px-2 py-1 rounded flex items-center gap-1 transition-colors border border-ayush-green-400/40"
            title="View Full Closed-Loop Ecosystem Overview Screen"
          >
            <ArrowRightCircle className="w-3 h-3 text-ayush-green-200" />
            <span>Ecosystem View</span>
          </button>

          <button
            onClick={resetDemoData}
            className="text-ayush-teal-300 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
            title="Reset demo data to initial state"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
