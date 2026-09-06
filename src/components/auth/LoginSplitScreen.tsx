import React, { useState } from 'react';
import { useApp } from '../../store';
import { 
  GraduationCap, 
  UserCheck, 
  Briefcase, 
  Building2, 
  Landmark, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  Smartphone, 
  Lock, 
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  ChevronRight
} from 'lucide-react';

interface LoginSplitScreenProps {
  onLoginSuccess: () => void;
  onExploreLanding: () => void;
}

export const LoginSplitScreen: React.FC<LoginSplitScreenProps> = ({
  onLoginSuccess,
  onExploreLanding
}) => {
  const { loginAsRole, showToast } = useApp();

  // Role Selection
  const [selectedRole, setSelectedRole] = useState<'student' | 'faculty' | 'industry' | 'institution' | 'ministry'>('student');
  
  // Login Tab
  const [loginMethod, setLoginMethod] = useState<'username' | 'mobile'>('username');

  // Username form state
  const [username, setUsername] = useState('ananya.student');
  const [password, setPassword] = useState('Demo@123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  // Mobile OTP form state
  const [mobileNumber, setMobileNumber] = useState('9876543210');
  const [otpSent, setOtpSent] = useState(false);
  const [otpValue, setOtpValue] = useState('');
  const [otpError, setOtpError] = useState(false);

  // Humanized Post-Login Modal State
  const [showWelcomeBriefing, setShowWelcomeBriefing] = useState(false);
  const [briefingRole, setBriefingRole] = useState<'student' | 'faculty' | 'industry' | 'institution' | 'ministry'>('student');

  const roleConfigs = {
    student: {
      title: 'Student',
      icon: GraduationCap,
      description: 'Track skills, discover opportunities and build your career.',
      greeting: 'Welcome back, future AYUSH professional.',
      credentials: { user: 'ananya.student', pass: 'Demo@123' },
      person: 'Ananya Sharma (BAMS 3rd Year)',
      focus: 'Clinical Research'
    },
    faculty: {
      title: 'Faculty / Mentor',
      icon: UserCheck,
      description: 'Guide students, verify skills and monitor progress.',
      greeting: 'Welcome back, Dr. Priya. Ready to guide AYUSH scholars.',
      credentials: { user: 'faculty.demo', pass: 'Demo@123' },
      person: 'Dr. Priya Nair (Faculty Mentor)',
      focus: 'Research & Student Development'
    },
    industry: {
      title: 'Industry / Recruiter',
      icon: Briefcase,
      description: 'Discover verified AYUSH talent and collaborate with institutions.',
      greeting: 'Welcome back, Rahul. Top AYUSH talent is ready for review.',
      credentials: { user: 'industry.demo', pass: 'Demo@123' },
      person: 'Rahul Mehta (AYUSH Recruiter)',
      focus: 'Clinical Research Talent'
    },
    institution: {
      title: 'Institution Admin',
      icon: Building2,
      description: 'Understand student readiness and industry skill gaps.',
      greeting: 'Welcome, Dean. AYUSH cohort readiness insights are loaded.',
      credentials: { user: 'institution.demo', pass: 'Demo@123' },
      person: 'AYUSH Institute Admin (AIIA)',
      focus: 'Readiness & Industry MoUs'
    },
    ministry: {
      title: 'Ministry Admin',
      icon: Landmark,
      description: 'Monitor ecosystem insights and national-level skill trends.',
      greeting: 'Welcome, Director. National AYUSH skill trends ready.',
      credentials: { user: 'admin.demo', pass: 'Demo@123' },
      person: 'Ministry Administrator',
      focus: 'AYUSH Skill Intelligence'
    }
  };

  const handleRoleSelect = (roleKey: 'student' | 'faculty' | 'industry' | 'institution' | 'ministry') => {
    setSelectedRole(roleKey);
    setUsername(roleConfigs[roleKey].credentials.user);
    setPassword(roleConfigs[roleKey].credentials.pass);
  };

  const handleUsernameLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      showToast('Please enter your credentials', 'warning');
      return;
    }
    triggerHumanizedBriefing(selectedRole);
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length < 10) {
      showToast('Please enter a valid 10-digit mobile number', 'warning');
      return;
    }
    setOtpSent(true);
    setOtpValue('123456'); // Pre-fill mock OTP for smooth demo flow
    showToast('Mock OTP sent: 123456', 'info');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpValue === '123456') {
      showToast('Mobile verified successfully', 'success');
      triggerHumanizedBriefing(selectedRole);
    } else {
      setOtpError(true);
      showToast('Invalid OTP. Use demo code: 123456', 'warning');
    }
  };

  const triggerHumanizedBriefing = (roleKey: 'student' | 'faculty' | 'industry' | 'institution' | 'ministry') => {
    setBriefingRole(roleKey);
    setShowWelcomeBriefing(true);
  };

  const handleCompleteBriefingAndEnter = () => {
    setShowWelcomeBriefing(false);
    loginAsRole(briefingRole);
    onLoginSuccess();
  };

  return (
    <div className="min-h-screen bg-[#F4F9F7] flex flex-col justify-between">
      {/* Top Bar for Login */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-ayush-teal-800 flex items-center justify-center text-white text-base shadow-sm">
            🌿
          </div>
          <span className="font-extrabold text-slate-900 tracking-tight text-lg">
            AYUSH <span className="text-ayush-green-700">SkillConnect</span>
          </span>
          <span className="hidden sm:inline text-xs text-slate-400">| Smart India Hackathon 2026 PS26044</span>
        </div>

        <button
          onClick={onExploreLanding}
          className="text-xs font-semibold text-ayush-teal-800 hover:text-ayush-teal-950 flex items-center gap-1.5 px-3 py-1.5 rounded-xl hover:bg-ayush-teal-50 transition-colors border border-ayush-teal-200"
        >
          <span>Explore Public Landing Page</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Main Split Screen */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ============================================================ */}
        {/* LEFT SIDE — BRAND STORY & 4-ENTITY CONNECTED ECOSYSTEM */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 space-y-6 lg:pr-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ayush-teal-100/70 border border-ayush-teal-300 text-ayush-teal-950 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-ayush-teal-700" />
            <span>Ministry of AYUSH • All India Institute of Ayurveda</span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              AYUSH <span className="text-ayush-teal-800">SkillConnect</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-ayush-green-700 mt-2">
              "From AYUSH Skill Demand to Student Readiness"
            </p>
            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Helping AYUSH students understand their skills, discover career opportunities and become industry-ready through an intelligent, verified academia–industry ecosystem.
            </p>
          </div>

          {/* 4 Connected Entities Visual Journey */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-card relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-ayush-mint-100 rounded-full blur-2xl -z-10 opacity-70"></div>
            
            <p className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4">
              Connected Healthcare Ecosystem Journey
            </p>

            <div className="space-y-3 relative">
              {/* Vertical Connector Line */}
              <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gradient-to-b from-ayush-teal-500 via-ayush-green-500 to-ayush-amber-500 -z-0"></div>

              {/* Entity 1: Students */}
              <div className="flex items-start gap-3.5 bg-slate-50/80 hover:bg-ayush-mint-50/60 p-3 rounded-2xl border border-slate-200/70 transition-colors relative z-10">
                <div className="w-10 h-10 rounded-xl bg-ayush-teal-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900">1. AYUSH Students</h4>
                    <span className="text-[10px] bg-ayush-teal-100 text-ayush-teal-900 px-1.5 py-0.2 rounded font-semibold">Learners</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Assess clinical skills, view transparent gap analysis, build digital portfolio.
                  </p>
                </div>
              </div>

              {/* Entity 2: Faculty & Mentors */}
              <div className="flex items-start gap-3.5 bg-slate-50/80 hover:bg-ayush-mint-50/60 p-3 rounded-2xl border border-slate-200/70 transition-colors relative z-10">
                <div className="w-10 h-10 rounded-xl bg-ayush-green-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900">2. Faculty & Mentors</h4>
                    <span className="text-[10px] bg-ayush-green-100 text-ayush-green-900 px-1.5 py-0.2 rounded font-semibold">Verifiers</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Validate clinical trial evidence, endorse competencies into Verified Passport.
                  </p>
                </div>
              </div>

              {/* Entity 3: AYUSH Institutions */}
              <div className="flex items-start gap-3.5 bg-slate-50/80 hover:bg-ayush-mint-50/60 p-3 rounded-2xl border border-slate-200/70 transition-colors relative z-10">
                <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900">3. AYUSH Institutions</h4>
                    <span className="text-[10px] bg-purple-100 text-purple-900 px-1.5 py-0.2 rounded font-semibold">Academia</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Action curriculum intelligence, launch FDPs, monitor cohort readiness.
                  </p>
                </div>
              </div>

              {/* Entity 4: AYUSH Industry */}
              <div className="flex items-start gap-3.5 bg-slate-50/80 hover:bg-ayush-mint-50/60 p-3 rounded-2xl border border-slate-200/70 transition-colors relative z-10">
                <div className="w-10 h-10 rounded-xl bg-ayush-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900">4. AYUSH Industry & Labs</h4>
                    <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-semibold">Demand</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Publish skill demands, discover verified talent, sponsor research MoUs.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tagline */}
            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="font-bold text-ayush-teal-900">
                "One ecosystem. One skill journey. Better AYUSH careers."
              </span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Trustworthy
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* RIGHT SIDE — PREMIUM LOGIN CARD */}
        {/* ============================================================ */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-elevation">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Welcome to AYUSH SkillConnect
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Continue your journey towards becoming industry-ready.
              </p>
            </div>

            {/* STEP 1: SELECT YOUR ROLE */}
            <div className="mt-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Step 1 — Select Your Role
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {(Object.keys(roleConfigs) as Array<keyof typeof roleConfigs>).map((roleKey) => {
                  const cfg = roleConfigs[roleKey];
                  const Icon = cfg.icon;
                  const isSelected = selectedRole === roleKey;
                  return (
                    <button
                      key={roleKey}
                      type="button"
                      onClick={() => handleRoleSelect(roleKey)}
                      className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                        isSelected
                          ? 'border-ayush-teal-600 bg-ayush-teal-50/80 ring-2 ring-ayush-teal-600/30 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mb-1.5 ${isSelected ? 'text-ayush-teal-800' : 'text-slate-500'}`} />
                      <div>
                        <p className={`text-xs font-bold ${isSelected ? 'text-ayush-teal-950' : 'text-slate-800'}`}>
                          {cfg.title}
                        </p>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5 line-clamp-2">
                          {cfg.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Personalized Greeting */}
              <div className="mt-3.5 p-2.5 rounded-xl bg-ayush-mint-50/80 border border-ayush-teal-200 flex items-center gap-2 text-xs text-ayush-teal-950 font-medium">
                <Sparkles className="w-4 h-4 text-ayush-teal-700 shrink-0" />
                <span>{roleConfigs[selectedRole].greeting}</span>
              </div>
            </div>

            {/* STEP 2: LOGIN METHOD TABS */}
            <div className="mt-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Step 2 — Login Method
              </label>

              <div className="flex rounded-xl bg-slate-100 p-1 mb-4">
                <button
                  type="button"
                  onClick={() => setLoginMethod('username')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    loginMethod === 'username'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Username Login</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMethod('mobile')}
                  className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    loginMethod === 'mobile'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>Mobile OTP Login</span>
                </button>
              </div>

              {/* USERNAME LOGIN TAB */}
              {loginMethod === 'username' && (
                <form onSubmit={handleUsernameLogin} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Username or Email
                    </label>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="e.g. ananya.student"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-ayush-teal-600 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-semibold text-slate-700">
                        Password
                      </label>
                      <button
                        type="button"
                        onClick={() => showToast('Demo password is Demo@123', 'info')}
                        className="text-[11px] text-ayush-teal-700 hover:underline"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="••••••••"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-ayush-teal-600 focus:bg-white transition-all pr-10 font-medium"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                        title="Toggle password visibility"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-3.5 h-3.5 text-ayush-teal-700 rounded border-slate-300 focus:ring-ayush-teal-500"
                    />
                    <label htmlFor="rememberMe" className="ml-2 text-xs text-slate-600">
                      Remember this workstation
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <span>Login Securely</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* MOBILE LOGIN TAB */}
              {loginMethod === 'mobile' && (
                <div className="space-y-3.5">
                  {!otpSent ? (
                    <form onSubmit={handleSendOtp} className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Mobile Number
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-600 text-xs font-bold">
                            +91
                          </span>
                          <input
                            type="tel"
                            maxLength={10}
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                            placeholder="Enter 10-digit mobile number"
                            className="flex-1 bg-slate-50 border border-slate-200 rounded-r-xl px-3.5 py-2 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-ayush-teal-600 focus:bg-white font-medium"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2.5 px-4 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        <span>Send OTP</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleVerifyOtp} className="space-y-3.5">
                      <div className="p-3 bg-ayush-mint-50 border border-ayush-teal-200 rounded-xl text-xs">
                        <p className="font-bold text-ayush-teal-950">Verify Your Mobile Number</p>
                        <p className="text-slate-600 text-[11px] mt-0.5">
                          OTP Sent To: +91 {mobileNumber.slice(0, 5)} {mobileNumber.slice(5)}
                        </p>
                        <p className="text-emerald-700 font-bold text-[11px] mt-1">
                          Demo Mock OTP: 123456
                        </p>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Enter 6-Digit OTP
                        </label>
                        <input
                          type="text"
                          maxLength={6}
                          value={otpValue}
                          onChange={(e) => {
                            setOtpValue(e.target.value);
                            setOtpError(false);
                          }}
                          placeholder="_ _ _ _ _ _"
                          className={`w-full text-center tracking-[0.5em] font-mono text-base bg-slate-50 border rounded-xl py-2 focus:outline-none focus:ring-2 transition-all ${
                            otpError
                              ? 'border-rose-400 focus:ring-rose-500 bg-rose-50'
                              : 'border-slate-200 focus:ring-ayush-teal-600 focus:bg-white'
                          }`}
                        />
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setOtpSent(false)}
                          className="w-1/3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl border border-slate-200"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-2 px-4 rounded-xl bg-ayush-green-700 hover:bg-ayush-green-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Verify & Continue</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}
            </div>

            {/* ============================================================ */}
            {/* ⚡ QUICK DEMO ACCESS FOR SIH JUDGES */}
            {/* ============================================================ */}
            <div className="mt-6 pt-5 border-t border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-ayush-amber-500 fill-ayush-amber-500" />
                  Quick Demo Access for SIH Judges
                </span>
                <span className="text-[10px] text-slate-500 font-mono">1-Click Login</span>
              </div>
              <p className="text-[11px] text-slate-500 mb-3">
                Explore AYUSH SkillConnect instantly through different stakeholder perspectives:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* 1. Student Journey */}
                <button
                  type="button"
                  onClick={() => {
                    handleRoleSelect('student');
                    triggerHumanizedBriefing('student');
                  }}
                  className="p-2.5 rounded-xl border border-ayush-teal-200 bg-ayush-teal-50/50 hover:bg-ayush-teal-100/70 text-left transition-colors flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-bold text-ayush-teal-950">👩🎓 Ananya Sharma</p>
                    <p className="text-[10px] text-slate-600">BAMS 3rd Yr • Clinical Research</p>
                  </div>
                  <span className="text-[10px] font-bold text-ayush-teal-700 group-hover:translate-x-0.5 transition-transform flex items-center">
                    Explore <ChevronRight className="w-3 h-3" />
                  </span>
                </button>

                {/* 2. Faculty Journey */}
                <button
                  type="button"
                  onClick={() => {
                    handleRoleSelect('faculty');
                    triggerHumanizedBriefing('faculty');
                  }}
                  className="p-2.5 rounded-xl border border-blue-200 bg-blue-50/50 hover:bg-blue-100/70 text-left transition-colors flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-bold text-blue-950">👩🏫 Dr. Priya Nair</p>
                    <p className="text-[10px] text-slate-600">Faculty Mentor • Research Lead</p>
                  </div>
                  <span className="text-[10px] font-bold text-blue-700 group-hover:translate-x-0.5 transition-transform flex items-center">
                    Explore <ChevronRight className="w-3 h-3" />
                  </span>
                </button>

                {/* 3. Industry Recruiter */}
                <button
                  type="button"
                  onClick={() => {
                    handleRoleSelect('industry');
                    triggerHumanizedBriefing('industry');
                  }}
                  className="p-2.5 rounded-xl border border-amber-200 bg-amber-50/50 hover:bg-amber-100/70 text-left transition-colors flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-bold text-amber-950">🏢 Rahul Mehta</p>
                    <p className="text-[10px] text-slate-600">AYUSH Recruiter • Vaidya Analytics</p>
                  </div>
                  <span className="text-[10px] font-bold text-amber-700 group-hover:translate-x-0.5 transition-transform flex items-center">
                    Explore <ChevronRight className="w-3 h-3" />
                  </span>
                </button>

                {/* 4. Institution Admin */}
                <button
                  type="button"
                  onClick={() => {
                    handleRoleSelect('institution');
                    triggerHumanizedBriefing('institution');
                  }}
                  className="p-2.5 rounded-xl border border-purple-200 bg-purple-50/50 hover:bg-purple-100/70 text-left transition-colors flex items-center justify-between group"
                >
                  <div>
                    <p className="text-xs font-bold text-purple-950">🏫 AYUSH Institute Admin</p>
                    <p className="text-[10px] text-slate-600">Student Readiness & MoUs</p>
                  </div>
                  <span className="text-[10px] font-bold text-purple-700 group-hover:translate-x-0.5 transition-transform flex items-center">
                    Explore <ChevronRight className="w-3 h-3" />
                  </span>
                </button>
              </div>

              {/* Ministry Card Full Width */}
              <button
                type="button"
                onClick={() => {
                  handleRoleSelect('ministry');
                  triggerHumanizedBriefing('ministry');
                }}
                className="mt-2 w-full p-2.5 rounded-xl border border-teal-200 bg-teal-50/40 hover:bg-teal-100/60 text-left transition-colors flex items-center justify-between group"
              >
                <div>
                  <p className="text-xs font-bold text-teal-950">🏛 Ministry Administrator (Ministry of AYUSH)</p>
                  <p className="text-[10px] text-slate-600">National Skill Trends, Cohort Health & Policy Intelligence</p>
                </div>
                <span className="text-[10px] font-bold text-teal-700 group-hover:translate-x-0.5 transition-transform flex items-center">
                  Explore Insights <ChevronRight className="w-3 h-3" />
                </span>
              </button>
            </div>

            <div className="mt-4 text-center">
              <p className="text-[10px] text-slate-400">
                Notice: Prototype authentication enabled for Smart India Hackathon evaluation purposes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* HUMANIZED POST-LOGIN BRIEFING MODAL */}
      {/* ============================================================ */}
      {showWelcomeBriefing && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 animate-scale-up">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-ayush-teal-800 text-white flex items-center justify-center">
                  {briefingRole === 'student' && <GraduationCap className="w-5 h-5" />}
                  {briefingRole === 'faculty' && <UserCheck className="w-5 h-5" />}
                  {briefingRole === 'industry' && <Briefcase className="w-5 h-5" />}
                  {briefingRole === 'institution' && <Building2 className="w-5 h-5" />}
                  {briefingRole === 'ministry' && <Landmark className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-xs uppercase font-bold text-ayush-teal-800 tracking-wider">
                    Personalized Entry Experience
                  </p>
                  <h3 className="text-base font-extrabold text-slate-900">
                    Welcome back, {roleConfigs[briefingRole].person.split(' ')[0]} 👋
                  </h3>
                </div>
              </div>
              <span className="text-xs bg-ayush-green-100 text-ayush-green-800 font-bold px-2 py-0.5 rounded-full">
                {roleConfigs[briefingRole].title}
              </span>
            </div>

            {/* Specific Dynamic Briefing per Role */}
            {briefingRole === 'student' && (
              <div className="py-4 space-y-3.5">
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-ayush-teal-50 to-ayush-green-50 border border-ayush-teal-200">
                  <p className="text-xs font-semibold text-slate-700">
                    You are currently <span className="text-ayush-teal-900 font-extrabold text-sm">78% ready</span> for your <span className="font-bold">Clinical Research</span> career path.
                  </p>
                  <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-ayush-amber-400 to-ayush-green-500 h-full w-[78%]"></div>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-emerald-50/80 border border-emerald-200 text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>2 skills improved</strong> this month (Ayurvedic Pharmacology & Patient Communication)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span><strong>Data Analysis (42%)</strong> still needs attention to qualify for research fellowships</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-xl bg-teal-50/80 border border-teal-200 text-teal-900">
                    <Briefcase className="w-4 h-4 text-teal-600 shrink-0" />
                    <span><strong>3 new internship opportunities</strong> matched your profile today</span>
                  </div>
                </div>
              </div>
            )}

            {briefingRole === 'faculty' && (
              <div className="py-4 space-y-3 text-xs">
                <p className="text-slate-600">
                  You are mentoring <strong>24 BAMS Scholars</strong> across Dravyaguna & Clinical Research.
                </p>
                <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900">
                  <p className="font-bold">📋 3 Student Evidence Submissions Pending Review</p>
                  <p className="text-[11px] text-blue-700 mt-1">
                    Ananya Sharma submitted "Panchakarma Inpatient Registry Statistical Analysis" awaiting your verification badge.
                  </p>
                </div>
              </div>
            )}

            {briefingRole === 'industry' && (
              <div className="py-4 space-y-3 text-xs">
                <p className="text-slate-600">
                  Vaidya Analytics & Health Systems — Clinical Research Division.
                </p>
                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900">
                  <p className="font-bold">🎯 8 Verified Candidates Match Your Openings</p>
                  <p className="text-[11px] text-amber-800 mt-1">
                    Top applicant Ananya Sharma (92% AI Match) applied for Clinical Research Intern.
                  </p>
                </div>
              </div>
            )}

            {briefingRole === 'institution' && (
              <div className="py-4 space-y-3 text-xs">
                <p className="text-slate-600">
                  All India Institute of Ayurveda — Academic Analytics & MoUs.
                </p>
                <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200 text-purple-900">
                  <p className="font-bold">⚠ Institutional Skill Gap Alert</p>
                  <p className="text-[11px] text-purple-800 mt-1">
                    Industry demand for Clinical Data Analysis is 82%, whereas current student readiness is 31%. 5-step remediation proposed.
                  </p>
                </div>
              </div>
            )}

            {briefingRole === 'ministry' && (
              <div className="py-4 space-y-3 text-xs">
                <p className="text-slate-600">
                  Ministry of AYUSH — National Skill Intelligence Directorate.
                </p>
                <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 text-teal-900">
                  <p className="font-bold">📊 National AYUSH Skill Gap Index</p>
                  <p className="text-[11px] text-teal-800 mt-1">
                    Tracking 12,400+ active AYUSH students across 42 institutions and 180+ industry collaborators nationwide.
                  </p>
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                type="button"
                onClick={handleCompleteBriefingAndEnter}
                className="w-full py-2.5 px-4 rounded-xl bg-ayush-teal-800 hover:bg-ayush-teal-900 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2"
              >
                <span>Continue My Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
