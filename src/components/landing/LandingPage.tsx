import React from 'react';
import { 
  GraduationCap, 
  UserCheck, 
  Building2, 
  Briefcase, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Award, 
  Network, 
  Compass, 
  FileCheck, 
  BarChart3,
  Bot
} from 'lucide-react';

interface LandingPageProps {
  onEnterPlatform: () => void;
  onOpenFinalScreen: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onEnterPlatform,
  onOpenFinalScreen
}) => {
  return (
    <div className="min-h-screen bg-[#F4F9F7] text-slate-900 selection:bg-ayush-teal-700 selection:text-white">
      {/* Disclaimer Top Banner */}
      <div className="bg-ayush-teal-950 text-ayush-teal-100 text-xs py-2 px-4 text-center border-b border-ayush-teal-800 flex items-center justify-center gap-2">
        <span className="bg-ayush-amber-500 text-ayush-teal-950 font-extrabold px-1.5 py-0.5 rounded text-[10px] uppercase">
          SIH 2026 PS26044
        </span>
        <span>
          Academic-Industry Prototype for the Ministry of AYUSH & All India Institute of Ayurveda.
        </span>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 z-40 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-ayush-teal-800 flex items-center justify-center text-white text-lg shadow-sm">
            🌿
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-slate-900 text-lg sm:text-xl">AYUSH</span>
              <span className="font-bold text-ayush-green-700 text-lg sm:text-xl">SkillConnect</span>
            </div>
            <p className="text-[10px] text-slate-500 -mt-0.5 hidden sm:block">
              From AYUSH Skill Demand to Student Readiness
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenFinalScreen}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-ayush-teal-800 hover:text-ayush-teal-950 px-3 py-1.5 rounded-xl hover:bg-ayush-teal-50 transition-colors"
          >
            <Network className="w-3.5 h-3.5 text-ayush-green-600" />
            <span>Closed-Loop Overview</span>
          </button>

          <button
            onClick={onEnterPlatform}
            className="px-4 py-2 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <span>Launch Platform</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ayush-teal-100 border border-ayush-teal-300 text-ayush-teal-950 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-ayush-teal-700" />
            <span>Smart India Hackathon 2026 Problem Statement PS26044</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Connecting AYUSH Academia with Industry through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ayush-teal-800 via-ayush-green-700 to-ayush-teal-900">
              Skills, Innovation and Opportunity
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed">
            An intelligent platform for skill mapping, personalized development, verified clinical experiences, internships, placements and academia–industry collaboration.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onEnterPlatform}
              className="px-6 py-3 rounded-2xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-sm shadow-elevation hover:shadow-glow transition-all flex items-center gap-2"
            >
              <span>Explore Platform Experience</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenFinalScreen}
              className="px-5 py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-subtle transition-all flex items-center gap-2"
            >
              <Network className="w-4 h-4 text-ayush-green-600" />
              <span>View Closed-Loop Ecosystem</span>
            </button>
          </div>
        </div>

        {/* 4 Connected Entities Visual Ecosystem */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-elevation">
            <div className="text-center mb-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-ayush-teal-800 bg-ayush-mint-100 px-3 py-1 rounded-full border border-ayush-teal-200">
                Four Pillars of the AYUSH Ecosystem
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-2">
                A Unified Skill Intelligence Architecture
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Student */}
              <div className="p-4 rounded-2xl bg-ayush-teal-50/70 border border-ayush-teal-200/80 hover:bg-ayush-teal-100/70 transition-all">
                <div className="w-10 h-10 rounded-xl bg-ayush-teal-800 text-white flex items-center justify-center mb-3">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">👩🎓 AYUSH Students</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Assesses clinical competencies, simulates career what-ifs, tracks 4-week learning roadmap.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-ayush-teal-800">
                  <span>Explore BAMS Journey</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Faculty */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 hover:bg-blue-100/70 transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center mb-3">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">👩🏫 Faculty & Mentors</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Reviews research trial evidence, grants verified badges, guides students needing intervention.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-blue-800">
                  <span>Verification Queue</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Institutions */}
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/80 hover:bg-purple-100/70 transition-all">
                <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">🏫 AYUSH Institutions</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Detects cohort skill gaps (e.g. Data Analysis 31% gap), initiates FDPs, monitors MoUs.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-purple-800">
                  <span>Curriculum Insights</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Industry */}
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 hover:bg-amber-100/70 transition-all">
                <div className="w-10 h-10 rounded-xl bg-ayush-amber-600 text-white flex items-center justify-center mb-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">🏢 AYUSH Industry</h4>
                <p className="text-xs text-slate-600 mt-1">
                  Publishes skill demand signals, accesses verified candidate passports with 92% match accuracy.
                </p>
                <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-amber-800">
                  <span>Talent Discovery</span> <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7 THEMATIC SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: Why AYUSH SkillConnect? */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-subtle">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-ayush-green-700 uppercase tracking-wider">
              1. Why AYUSH SkillConnect?
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Solving the AYUSH Academia–Industry Disconnect
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Traditional job portals treat AYUSH graduates as generic applicants. AYUSH SkillConnect bridges classical Ayurvedic knowledge with modern clinical trial methodology, regulatory documentation, and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-sm mb-1">Traditional Job Portals ❌</div>
              <p className="text-xs text-slate-500">
                Resumes with unverified self-claims; no domain taxonomy; zero connection to university curriculum.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-ayush-mint-50 border border-ayush-teal-300">
              <div className="font-bold text-ayush-teal-950 text-sm mb-1">AYUSH SkillConnect ✅</div>
              <p className="text-xs text-slate-700">
                Evidence-verified skill passport; closed-loop feedback; AI-guided 4-week skill roadmaps.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-sm mb-1">National Impact 🇮🇳</div>
              <p className="text-xs text-slate-500">
                Institutional curriculum intelligence feeds back to NCISM & Ministry to keep programs industry-aligned.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Skill Intelligence */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <span className="text-xs font-bold text-ayush-green-700 uppercase tracking-wider">
              2. Skill Intelligence Engine
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Transparent AYUSH Skill Gap Analysis
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We benchmark student clinical capabilities against live industry requirements from clinical research sponsors and manufacturers. Students see exactly what is missing, why it is a gap, and how to close it.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ayush-green-600 shrink-0" />
                <span>Standardized AYUSH taxonomy across all 6 disciplines</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ayush-green-600 shrink-0" />
                <span>RAG status indicators for High, Medium and Low priority gaps</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-ayush-green-600 shrink-0" />
                <span>Real-time What-If sandbox to simulate readiness gains</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="font-bold text-xs text-slate-900">Clinical Research Intern Benchmark</span>
              <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">Gap Detected</span>
            </div>
            
            <div className="space-y-3 text-xs">
              <div>
                <div className="flex justify-between font-semibold text-slate-700 mb-1">
                  <span>Ayurvedic Pharmacology (Req: 80%)</span>
                  <span className="text-emerald-700 font-bold">88% (Exceeds)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[88%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold text-slate-700 mb-1">
                  <span>Data Analysis (Req: 70%)</span>
                  <span className="text-rose-600 font-bold">42% (28% Gap)</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full w-[42%]"></div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-ayush-mint-50 border border-ayush-teal-200 text-xs text-ayush-teal-950">
              💡 <strong>Remediation Action:</strong> Complete the 12-hour "AYUSH Clinical Data Analysis" course in the Learning Hub.
            </div>
          </div>
        </section>

        {/* Section 3 to 7: Impact & Ecosystem Badges */}
        <section className="bg-gradient-to-br from-ayush-teal-950 via-ayush-teal-900 to-ayush-green-950 rounded-3xl p-8 sm:p-12 text-white shadow-elevation">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-ayush-green-400">
              Ecosystem Metrics (Prototype Scale)
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Empowering the Future of AYUSH Healthcare
            </h2>
            <p className="text-xs sm:text-sm text-ayush-teal-200">
              Demonstrating full readiness for national rollout under Smart India Hackathon 2026.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-ayush-green-400">2,846+</p>
              <p className="text-xs text-ayush-teal-200 mt-1">Active AYUSH Scholars</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-ayush-amber-300">50+</p>
              <p className="text-xs text-ayush-teal-200 mt-1">AYUSH Skill Taxonomies</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-ayush-green-400">78%</p>
              <p className="text-xs text-ayush-teal-200 mt-1">Internship Placement Rate</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/10 border border-white/10 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-ayush-amber-300">4 MoUs</p>
              <p className="text-xs text-ayush-teal-200 mt-1">Active Industry Collaborations</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={onEnterPlatform}
              className="px-6 py-3 rounded-2xl bg-ayush-green-500 hover:bg-ayush-green-400 text-ayush-teal-950 font-extrabold text-sm shadow-lg transition-all inline-flex items-center gap-2"
            >
              <span>Launch Live Hackathon Prototype</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700">
          AYUSH SkillConnect — Smart India Hackathon 2026 (PS26044)
        </p>
        <p className="text-[11px] mt-1">
          Ministry of AYUSH • All India Institute of Ayurveda (AIIA) New Delhi
        </p>
        <p className="text-[10px] text-slate-400 mt-1">
          Demonstration prototype built for academic-industry collaboration validation.
        </p>
      </footer>
    </div>
  );
};
