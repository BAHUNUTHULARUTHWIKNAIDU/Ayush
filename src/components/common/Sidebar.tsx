import React from 'react';
import { useApp } from '../../store';
import { 
  LayoutDashboard, 
  ClipboardCheck, 
  GitCompare, 
  Sparkles, 
  Compass, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Award, 
  CalendarDays,
  Handshake, 
  Users, 
  Lightbulb, 
  Building2, 
  BarChart3, 
  TrendingUp, 
  UserPlus, 
  Search, 
  Flame, 
  Network,
  X
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  onSelectTab,
  isOpenMobile,
  onCloseMobile
}) => {
  const { currentUser, careerReadiness } = useApp();

  const handleSelect = (tab: string) => {
    onSelectTab(tab);
    onCloseMobile();
  };

  const navGroups = [
    {
      label: 'Student Workspace',
      badge: currentUser?.role === 'STUDENT' ? 'Active' : undefined,
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'assessment', label: 'Skill Assessment', icon: ClipboardCheck },
        { id: 'gaps', label: 'Skill Gap Analysis', icon: GitCompare, highlight: true },
        { id: 'twin', label: 'AI Career Twin', icon: Sparkles },
        { id: 'simulator', label: 'What-If Simulator', icon: Compass },
        { id: 'roadmap', label: 'Career Roadmap', icon: GraduationCap },
        { id: 'opportunities', label: 'Internships & Jobs', icon: Briefcase },
        { id: 'learning', label: 'Learning Hub', icon: BookOpen },
        { id: 'passport', label: 'Verified Skill Passport', icon: Award },
        { id: 'applications', label: 'Applications & Calendar', icon: CalendarDays }
      ]
    },
    {
      label: 'Academia–Industry Collaboration',
      items: [
        { id: 'industry-projects', label: 'Industry Projects', icon: Flame },
        { id: 'mentorship', label: 'Mentorship Hub', icon: Users },
        { id: 'fdps', label: 'Training & FDPs', icon: Lightbulb },
        { id: 'mous', label: 'Active MoUs & Partnerships', icon: Handshake }
      ]
    },
    {
      label: 'Institution Intelligence',
      badge: currentUser?.role === 'INSTITUTION' ? 'Active' : undefined,
      items: [
        { id: 'inst-intelligence', label: 'Skill Intelligence', icon: BarChart3 },
        { id: 'curriculum', label: 'Curriculum Insights', icon: Lightbulb, highlight: true },
        { id: 'faculty-portal', label: 'Faculty & Mentors Portal', icon: Users }
      ]
    },
    {
      label: 'Industry Recruiter',
      badge: currentUser?.role === 'INDUSTRY' ? 'Active' : undefined,
      items: [
        { id: 'recruiter-dashboard', label: 'Recruiter Dashboard', icon: Briefcase },
        { id: 'talent-search', label: 'Verified Talent Search', icon: Search },
        { id: 'demand-intelligence', label: 'Skill Demand Heatmap', icon: TrendingUp, highlight: true }
      ]
    },
    {
      label: 'SIH Evaluator Hub',
      items: [
        { id: 'ecosystem-overview', label: 'Ecosystem Closed Loop', icon: Network, highlight: true },
        { id: 'demo-tour', label: 'Guided Demo Walkthrough', icon: Sparkles }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-[37px] bottom-0 left-0 z-50 w-72 bg-white border-r border-slate-200/90 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile Header with Close Button */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            <span className="text-lg">🌿</span>
            <span className="font-bold text-ayush-teal-950">AYUSH SkillConnect</span>
          </div>
          <button onClick={onCloseMobile} className="p-1 rounded-lg text-slate-500 hover:bg-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Readiness Pill for Student */}
        {currentUser?.role === 'STUDENT' && (
          <div className="p-4 mx-3 mt-3 rounded-2xl bg-gradient-to-br from-ayush-teal-900 to-ayush-green-800 text-white shadow-card">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-ayush-teal-200 font-medium">Career Readiness</span>
              <span className="font-extrabold text-ayush-green-300 text-sm">{careerReadiness}%</span>
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-ayush-amber-400 to-ayush-green-400 h-full rounded-full transition-all duration-700" 
                style={{ width: `${careerReadiness}%` }}
              />
            </div>
            <p className="text-[11px] text-ayush-teal-100 mt-2 flex items-center justify-between">
              <span>Goal: Clinical Research</span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-mono">BAMS 3Y</span>
            </p>
          </div>
        )}

        {/* Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
          {navGroups.map((group, gIdx) => (
            <div key={gIdx} className="space-y-1">
              <div className="px-3 py-1 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {group.label}
                </span>
                {group.badge && (
                  <span className="text-[9px] font-bold uppercase px-1.5 py-0.2 bg-ayush-green-100 text-ayush-green-800 rounded">
                    {group.badge}
                  </span>
                )}
              </div>

              {group.items.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className={`
                      w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all group
                      ${isActive 
                        ? 'bg-ayush-teal-800 text-white shadow-sm' 
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}
                    `}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 transition-colors ${
                        isActive ? 'text-ayush-green-300' : 'text-slate-500 group-hover:text-ayush-teal-700'
                      }`} />
                      <span>{item.label}</span>
                    </div>

                    {item.highlight && !isActive && (
                      <span className="w-2 h-2 rounded-full bg-ayush-amber-500"></span>
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Footer info */}
        <div className="p-3 border-t border-slate-100 bg-slate-50/70 text-[11px] text-slate-500 flex items-center justify-between">
          <span>AIIA / Ministry of AYUSH</span>
          <span className="font-mono text-[10px]">v1.0 PS26044</span>
        </div>
      </aside>
    </>
  );
};
