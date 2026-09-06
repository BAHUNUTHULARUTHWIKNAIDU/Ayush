import React, { useState } from 'react';
import { useApp } from '../../store';
import { 
  Bell, 
  Bot, 
  Menu, 
  LogOut, 
  ChevronDown, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface NavbarProps {
  onToggleSidebar: () => void;
  onNavigateTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, onNavigateTab }) => {
  const { 
    currentUser, 
    logout, 
    notifications, 
    markAllNotificationsRead, 
    isCopilotOpen, 
    setIsCopilotOpen 
  } = useApp();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const roleColors: Record<string, string> = {
    STUDENT: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    FACULTY: 'bg-blue-50 text-blue-800 border-blue-300',
    INDUSTRY: 'bg-amber-50 text-amber-800 border-amber-300',
    INSTITUTION: 'bg-purple-50 text-purple-800 border-purple-300',
    MINISTRY: 'bg-teal-50 text-teal-800 border-teal-300'
  };

  return (
    <header className="bg-white border-b border-slate-200/80 sticky top-[37px] z-40 shadow-subtle">
      <div className="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left: Mobile Toggle & Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div 
            onClick={() => onNavigateTab('dashboard')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            {/* AYUSH Emblem Symbol */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ayush-teal-800 to-ayush-green-700 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
              <span className="text-xl">🌿</span>
            </div>
            
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl text-ayush-teal-950 tracking-tight">
                  AYUSH
                </span>
                <span className="font-bold text-lg sm:text-xl text-ayush-green-700 tracking-tight">
                  SkillConnect
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-ayush-teal-50 text-ayush-teal-800 border border-ayush-teal-200 rounded">
                  AIIA • MoA
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block -mt-0.5">
                From AYUSH Skill Demand to Student Readiness
              </p>
            </div>
          </div>
        </div>

        {/* Center: Search / Pill */}
        <div className="hidden md:flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-full bg-ayush-mint-50 border border-ayush-mint-200 text-xs text-ayush-teal-900 font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-ayush-green-500 animate-pulse"></span>
            <span>Academia–Industry Ecosystem Live</span>
            <span className="text-ayush-teal-400">•</span>
            <span className="text-slate-600">PS26044 Verified Model</span>
          </div>
        </div>

        {/* Right: Actions, Copilot, Notifications, Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* AYUSH Career Copilot Trigger */}
          <button
            onClick={() => setIsCopilotOpen(!isCopilotOpen)}
            className={`px-3 py-1.5 rounded-xl flex items-center gap-2 text-xs font-semibold transition-all border shadow-sm ${
              isCopilotOpen
                ? 'bg-gradient-to-r from-ayush-teal-800 to-ayush-green-700 text-white border-transparent ring-2 ring-ayush-green-400'
                : 'bg-white hover:bg-ayush-teal-50 text-ayush-teal-900 border-ayush-teal-300'
            }`}
          >
            <Bot className="w-4 h-4 text-ayush-green-600" />
            <span className="hidden sm:inline">AYUSH Copilot</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ayush-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ayush-green-500"></span>
            </span>
          </button>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfileMenu(false);
              }}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors relative"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white">
                  {unreadCount}
                </span>
              )}
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-elevation border border-slate-200 overflow-hidden z-50 animate-fade-in">
                <div className="p-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800 text-sm">Notifications</span>
                    <span className="text-xs bg-ayush-teal-100 text-ayush-teal-900 px-2 py-0.5 rounded-full font-medium">
                      {unreadCount} new
                    </span>
                  </div>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllNotificationsRead}
                      className="text-xs text-ayush-teal-700 hover:text-ayush-teal-900 font-medium"
                    >
                      Mark all read
                    </button>
                  )}
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                  {notifications.length === 0 ? (
                    <p className="p-4 text-center text-xs text-slate-500">No notifications yet</p>
                  ) : (
                    notifications.map(n => (
                      <div 
                        key={n.id} 
                        className={`p-3 hover:bg-slate-50 transition-colors ${!n.isRead ? 'bg-ayush-mint-50/50' : ''}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-xs font-semibold text-slate-900">{n.title}</p>
                          <span className="text-[10px] text-slate-400 whitespace-nowrap">{n.timestamp}</span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{n.message}</p>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-center">
                  <button 
                    onClick={() => {
                      setShowNotifications(false);
                      onNavigateTab('calendar');
                    }}
                    className="text-xs text-ayush-teal-700 hover:text-ayush-teal-900 font-semibold inline-flex items-center gap-1"
                  >
                    View Calendar & Deadlines <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Card & Dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowNotifications(false);
              }}
              className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200/80 bg-slate-50/50"
            >
              <img
                src={currentUser?.avatar || 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&auto=format&fit=crop&q=80'}
                alt={currentUser?.fullName || 'User'}
                className="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-300"
              />
              <div className="text-left hidden sm:block pr-1">
                <p className="text-xs font-bold text-slate-900 leading-tight">
                  {currentUser?.fullName || 'Guest User'}
                </p>
                <p className="text-[10px] text-slate-500 truncate max-w-[130px]">
                  {currentUser?.titleOrProgram || 'Visitor'}
                </p>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-elevation border border-slate-200 overflow-hidden z-50 animate-fade-in p-2">
                <div className="p-3 border-b border-slate-100 mb-1">
                  <p className="text-xs font-bold text-slate-900">{currentUser?.fullName}</p>
                  <p className="text-[11px] text-slate-500">{currentUser?.email}</p>
                  <div className="mt-2">
                    <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold border ${roleColors[currentUser?.role || 'STUDENT']}`}>
                      {currentUser?.role} MODE
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    onNavigateTab('passport');
                  }}
                  className="w-full text-left px-3 py-2 text-xs text-slate-700 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>My Verified Passport</span>
                  <Sparkles className="w-3.5 h-3.5 text-ayush-green-600" />
                </button>

                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    logout();
                  }}
                  className="w-full text-left px-3 py-2 text-xs text-rose-600 hover:bg-rose-50 rounded-lg transition-colors flex items-center justify-between mt-1 font-medium"
                >
                  <span>Log Out</span>
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
