import React, { useState } from 'react';
import { useApp } from '../../store';
import { CALENDAR_EVENTS } from '../../data/seedData';
import { 
  CalendarDays, 
  Briefcase, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Calendar as CalendarIcon, 
  ExternalLink,
  Plus
} from 'lucide-react';

export const ApplicationsCalendarView: React.FC = () => {
  const { opportunities, showToast } = useApp();
  const [events, setEvents] = useState(CALENDAR_EVENTS);

  const appliedOpps = opportunities.filter(o => o.status === 'APPLIED');

  const handleAddEvent = () => {
    const newEvent = {
      id: `cal-${Date.now()}`,
      title: 'Phase-II Trial Case Presentation',
      category: 'Milestone' as const,
      date: 'Sep 18, 2026',
      time: '02:00 PM — 03:00 PM',
      locationOrLink: 'Seminar Hall 3, AIIA Campus'
    };
    setEvents(prev => [...prev, newEvent]);
    showToast('Event added to your calendar!', 'success');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-teal-100 text-ayush-teal-800">
              <CalendarDays className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Applications Tracker & Academic Calendar
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track real-time candidate review stages, scheduled interviews, mentor syncs, and project deadlines.
          </p>
        </div>

        <button
          onClick={handleAddEvent}
          className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" />
          <span>Add Calendar Event</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Applications Tracker */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">
              Active Internship Applications ({appliedOpps.length})
            </h3>
            <span className="text-xs text-emerald-700 font-semibold">Live Tracking</span>
          </div>

          {appliedOpps.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500">
              No active applications yet. Browse the Opportunities tab to apply!
            </div>
          ) : (
            <div className="space-y-3">
              {appliedOpps.map((opp) => (
                <div
                  key={opp.id}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900">{opp.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      Under Review
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{opp.company} • {opp.location}</p>

                  <div className="flex items-center justify-between text-[11px] pt-1 text-slate-400">
                    <span>Applied: Today</span>
                    <span className="text-ayush-teal-800 font-bold font-mono">Match: {opp.matchScore}%</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Calendar Schedule */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">
              Scheduled Calendar Milestones
            </h3>
            <span className="text-xs text-ayush-teal-800 font-mono">Sep 2026</span>
          </div>

          <div className="space-y-3">
            {events.map((ev) => (
              <div
                key={ev.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-ayush-teal-300 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    ev.category === 'Interview'
                      ? 'bg-purple-100 text-purple-800'
                      : ev.category === 'Mentor Session'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {ev.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{ev.date}</span>
                </div>

                <h4 className="text-xs font-bold text-slate-900">{ev.title}</h4>

                <div className="flex items-center gap-3 text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {ev.time}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-ayush-teal-700">
                    <MapPin className="w-3.5 h-3.5" />
                    {ev.locationOrLink}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
