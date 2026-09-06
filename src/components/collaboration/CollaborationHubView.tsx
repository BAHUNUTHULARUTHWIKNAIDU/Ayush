import React, { useState } from 'react';
import { useApp } from '../../store';
import { 
  ACTIVE_MOUS, 
  INDUSTRY_PROJECTS, 
  MENTORS_LIST 
} from '../../data/seedData';
import { 
  Handshake, 
  Flame, 
  Users, 
  Lightbulb, 
  Plus, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Building2, 
  ExternalLink,
  Award,
  Calendar
} from 'lucide-react';

interface CollaborationHubViewProps {
  initialSubTab?: 'mous' | 'projects' | 'mentors' | 'fdps';
}

export const CollaborationHubView: React.FC<CollaborationHubViewProps> = ({ initialSubTab = 'mous' }) => {
  const { showToast } = useApp();
  const [subTab, setSubTab] = useState<'mous' | 'projects' | 'mentors' | 'fdps'>(initialSubTab);

  const fdpsList = [
    {
      id: 'fdp-1',
      title: 'Evidence-Based Ayurveda Clinical Trial Design (ICMR Aligned)',
      duration: '5 Days (Residential / Hybrid)',
      dates: 'Oct 12 — Oct 16, 2026',
      organizer: 'AIIA New Delhi & ICMR-CARB',
      capacity: '40 Faculty Seats',
      status: 'Registrations Open'
    },
    {
      id: 'fdp-2',
      title: 'Health Informatics & NAMASTE Diagnostic Portal Integration',
      duration: '3 Days (Virtual Hands-On)',
      dates: 'Nov 04 — Nov 06, 2026',
      organizer: 'National AYUSH Mission & CDAC',
      capacity: '60 Faculty Seats',
      status: 'Registrations Open'
    },
    {
      id: 'fdp-3',
      title: 'Standardization and High-Throughput Screening in Rasashastra',
      duration: '4 Days (Laboratory Hands-On)',
      dates: 'Nov 20 — Nov 23, 2026',
      organizer: 'Department of Rasashastra & Bhasma Lab',
      capacity: '25 Faculty Seats',
      status: 'Fast Filling'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-ayush-teal-100 text-ayush-teal-800">
              <Handshake className="w-5 h-5" />
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
              Academia–Industry Collaboration Hub
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Institutional MoUs, joint research micro-projects, faculty development, and dedicated mentorship.
          </p>
        </div>

        {/* Sub-tab switcher */}
        <div className="flex items-center rounded-2xl bg-slate-100 p-1">
          <button
            onClick={() => setSubTab('mous')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subTab === 'mous' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            Active MoUs (4)
          </button>
          <button
            onClick={() => setSubTab('projects')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subTab === 'projects' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            Industry Projects (3)
          </button>
          <button
            onClick={() => setSubTab('mentors')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subTab === 'mentors' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            Mentorship
          </button>
          <button
            onClick={() => setSubTab('fdps')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              subTab === 'fdps' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500'
            }`}
          >
            FDPs
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: ACTIVE MOUS */}
      {subTab === 'mous' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Active Institutional MoUs & Strategic Partnerships
            </h3>
            <button
              onClick={() => showToast('MoU draft proposal wizard opened for AIIA', 'info')}
              className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-sm flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Propose New MoU</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACTIVE_MOUS.map((mou) => (
              <div
                key={mou.id}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card hover:shadow-elevation transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-ayush-teal-900 bg-ayush-mint-100 px-2.5 py-0.5 rounded-full border border-ayush-teal-200">
                    {mou.type}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    mou.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {mou.status}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900">{mou.partnerName}</h4>
                <p className="text-xs text-slate-500">
                  Valid until: <strong className="text-slate-700">{mou.validUntil}</strong>
                </p>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-bold">Students Benefited</span>
                    <strong className="text-slate-900">{mou.studentsBenefited} Scholars</strong>
                  </div>
                  <div className="p-2 bg-slate-50 rounded-xl">
                    <span className="text-slate-400 block text-[10px] font-bold">Joint Projects</span>
                    <strong className="text-slate-900">{mou.activeProjects} Research Tracks</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: INDUSTRY PROJECTS */}
      {subTab === 'projects' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Co-Created Industry Research Projects
              </h3>
              <p className="text-xs text-slate-500">
                Applied problem statements sponsored by partner labs with direct faculty co-mentors
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {INDUSTRY_PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-card hover:border-ayush-teal-300 transition-all space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-bold text-ayush-teal-800 uppercase tracking-wider">
                      Partner: {proj.industryPartner}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 mt-0.5">{proj.title}</h4>
                  </div>
                  <span className="text-xs font-bold bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-xl">
                    {proj.openSlots} Open Team Slots
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {proj.requiredSkills.map((sk, idx) => (
                    <span key={idx} className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {sk}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Duration: <strong>{proj.duration}</strong> • Co-Mentor: <strong>{proj.mentorName}</strong></span>
                  <button
                    onClick={() => showToast(`Application submitted for ${proj.title}!`, 'success')}
                    className="px-4 py-1.5 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-sm"
                  >
                    Apply for Team Slot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: MENTORSHIP */}
      {subTab === 'mentors' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900">
              Verified AYUSH Faculty & Industry Mentors
            </h3>
            <span className="text-xs text-slate-500">Book dedicated 1-on-1 guidance</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {MENTORS_LIST.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white p-5 rounded-3xl border border-slate-200 shadow-card hover:shadow-elevation transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-ayush-teal-800 text-white flex items-center justify-center font-bold text-sm">
                      {mentor.name.split(' ')[1]?.[0] || 'D'}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{mentor.name}</h4>
                      <p className="text-[11px] text-slate-500 leading-tight">{mentor.title}</p>
                      <p className="text-[10px] text-ayush-teal-800 font-semibold">{mentor.organization}</p>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {mentor.expertise.map((exp, idx) => (
                      <span key={idx} className="text-[10px] bg-slate-50 border border-slate-200 text-slate-600 px-1.5 py-0.2 rounded">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px] font-medium">
                    {mentor.availableSlots} Slots Open
                  </span>
                  <button
                    onClick={() => showToast(`Mentorship session booked with ${mentor.name}!`, 'success')}
                    className="px-3 py-1.5 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs"
                  >
                    Book Slot
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: FDPS */}
      {subTab === 'fdps' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Faculty Development Programs (FDPs)
              </h3>
              <p className="text-xs text-slate-500">
                Institutional capacity building for NCISM educators and research scholars
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {fdpsList.map((fdp) => (
              <div
                key={fdp.id}
                className="bg-white p-5 rounded-3xl border border-slate-200 shadow-card hover:shadow-elevation transition-all flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-900">
                    {fdp.status}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{fdp.title}</h4>
                  <p className="text-[11px] text-slate-500">{fdp.organizer}</p>
                  
                  <div className="text-[11px] text-slate-600 space-y-0.5 pt-1">
                    <p className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" /> {fdp.duration}
                    </p>
                    <p className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-slate-400" /> {fdp.dates}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => showToast(`Registered for ${fdp.title}! Confirmation sent.`, 'success')}
                  className="w-full py-2 bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold rounded-xl text-xs shadow-sm transition-colors"
                >
                  Register Faculty Seat
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
