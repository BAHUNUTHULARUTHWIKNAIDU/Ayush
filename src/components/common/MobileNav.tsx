import React from 'react';
import { useApp } from '../../store';
import { LayoutDashboard, ClipboardCheck, Briefcase, Award, Bot } from 'lucide-react';

interface MobileNavProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeTab, onSelectTab }) => {
  const { isCopilotOpen, setIsCopilotOpen } = useApp();

  const tabs = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'assessment', label: 'Skills', icon: ClipboardCheck },
    { id: 'opportunities', label: 'Jobs', icon: Briefcase },
    { id: 'passport', label: 'Portfolio', icon: Award }
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-1.5 flex items-center justify-around shadow-elevation">
      {tabs.map(t => {
        const Icon = t.icon;
        const isActive = activeTab === t.id && !isCopilotOpen;
        return (
          <button
            key={t.id}
            onClick={() => {
              setIsCopilotOpen(false);
              onSelectTab(t.id);
            }}
            className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
              isActive ? 'text-ayush-teal-800 font-bold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Icon className={`w-5 h-5 ${isActive ? 'text-ayush-teal-700 stroke-[2.5]' : ''}`} />
            <span className="text-[10px] mt-0.5">{t.label}</span>
          </button>
        );
      })}

      {/* Copilot Tab */}
      <button
        onClick={() => setIsCopilotOpen(!isCopilotOpen)}
        className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
          isCopilotOpen ? 'text-ayush-green-700 font-bold' : 'text-slate-500 hover:text-slate-800'
        }`}
      >
        <div className="relative">
          <Bot className={`w-5 h-5 ${isCopilotOpen ? 'text-ayush-green-600 stroke-[2.5]' : ''}`} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-ayush-green-500 rounded-full animate-ping"></span>
        </div>
        <span className="text-[10px] mt-0.5">Copilot</span>
      </button>
    </nav>
  );
};
