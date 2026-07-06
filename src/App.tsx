import React, { useState, useEffect, useRef } from 'react';
import { 
  Printer, 
  Download, 
  Lock, 
  BookOpen, 
  FileText, 
  ChevronRight, 
  User, 
  Layers, 
  CheckCircle2, 
  Award,
  Search,
  Filter
} from 'lucide-react';

// Academic Worksheet Data Structure
const GRADES = ['Kindergarten', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4'];

const SUBJECTS = [
  { id: 'math', name: 'Mathematics', count: '142 Sheets', color: '#2563eb', bg: '#eff6ff', desc: 'Single-digit addition, shape matching, counting grids, and trace patterns.' },
  { id: 'english', name: 'English & Phonics', count: '98 Sheets', color: '#16a34a', bg: '#f0fdf4', desc: 'Sight words tracing, initial consonant blends, short vowel recognition.' },
  { id: 'science', name: 'Science & Nature', count: '64 Sheets', color: '#ea580c', bg: '#fff7ed', desc: 'Living vs non-living things, weather tracking logs, five senses matching.' },
  { id: 'history', name: 'History & Logic', count: '45 Sheets', color: '#7c3aed', bg: '#f5f3ff', desc: 'Historical figures timelines, community helpers, simple sequence logic maps.' }
];

export default function AcademicHubHero() {
  const [activeGrade, setActiveGrade] = useState<string>('Grade 1');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);
  const [authEmail, setAuthEmail] = useState<string>('');
  const [authPassword, setAuthPassword] = useState<string>('');
  
  // Simulated stats
  const totalDownloads = "14,820+ Downloads This Week";

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (authEmail && authPassword) {
      setIsAuthenticated(true);
      setShowAuthModal(false);
    }
  };

  return (
    <div 
      className="relative w-full min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-blue-100"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Subtle Engineering/Grid Paper Background Texture Layer */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='black' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* ================= HEADER & PORTAL GATEWAY ================= */}
      <header className="relative z-20 w-full bg-white border-b border-slate-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
            <BookOpen className="w-5 h-5" strokeWidth={2.25} />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-slate-900 block leading-tight">ACADEMIC<span className="text-blue-600">HUB</span></span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 block">Printable Curriculum</span>
          </div>
        </div>

        {/* Auth Interface Controller */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            Verified Curriculum Standards
          </div>

          {isAuthenticated ? (
            <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-semibold text-blue-800 hidden sm:inline">Parent Workspace</span>
              <button 
                onClick={() => setIsAuthenticated(false)}
                className="text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors ml-2 pl-2 border-l border-blue-200"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button 
              onClick={() => setShowAuthModal(true)}
              className="flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-sm active:scale-98"
            >
              <Lock className="w-3.5 h-3.5 text-blue-400" strokeWidth={2.5} />
              Parent Login / Registration
            </button>
          )}
        </div>
      </header>

      {/* ================= GRADE CURRICULUM BANNER CONTROL ================= */}
      <nav className="relative z-10 w-full bg-slate-900 text-white px-4 sm:px-8 border-b border-slate-800 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center overflow-x-auto scrollbar-none py-1.5 gap-1.5 sm:gap-2">
          <div className="flex items-center gap-2 text-slate-400 text-xs font-bold tracking-wider uppercase border-r border-slate-800 pr-4 mr-2 shrink-0">
            <Layers className="w-3.5 h-3.5 text-blue-500" />
            Curriculum Levels:
          </div>
          
          {GRADES.map((grade) => {
            const isSelected = activeGrade === grade;
            return (
              <button
                key={grade}
                onClick={() => setActiveGrade(grade)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-md uppercase tracking-wide transition-all shrink-0 ${
                  isSelected 
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20 scale-102' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {grade}
              </button>
            );
          })}
        </div>
      </nav>

      {/* ================= MAIN ACADEMIC DASHBOARD HERO ================= */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
        
        {/* Left Segment: Explanatory Core Info */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-bold text-xs px-3 py-1.5 rounded-md border border-blue-100 mb-6 w-fit uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> High-Resolution PDF Printables
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.1] mb-4">
            Structured Learning Sheets For Your Child.
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
            Empower your student with precise academic reinforcement. Choose your targeted subject, select certified lesson worksheets, print instantly at home, and provide structured tactical practice.
          </p>

          {/* Quick Academic Trust Framework Indicators */}
          <div className="space-y-3 bg-white p-5 border border-slate-200 rounded-xl shadow-sm mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs font-semibold text-slate-700 leading-normal">
                Standardized benchmarks matched for <span className="text-blue-600 font-bold">{activeGrade}</span> core parameters.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Printer className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-xs font-semibold text-slate-700 leading-normal">
                Perfect ink-saver monochromes with structural sizing guidelines.
              </p>
            </div>
          </div>

          <div className="text-xs font-bold text-slate-400 flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-300" />
            {totalDownloads}
          </div>
        </div>

        {/* Right Segment: Active Worksheet Explorer Interface */}
        <div className="lg:col-span-7 w-full space-y-4">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            
            {/* Subject Panel Context Header */}
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5" /> Core Curriculum Catalog
                </h3>
                <p className="text-xs text-slate-400 mt-0.5 font-medium">Showing target modules for {activeGrade}</p>
              </div>
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search worksheet code..." 
                  className="bg-white border border-slate-200 pl-8 pr-3 py-1 text-xs rounded-md w-full sm:w-44 focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>
            </div>

            {/* Subject Cards Mapping Workspace */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SUBJECTS.map((sub) => (
                <div 
                  key={sub.id}
                  className="border border-slate-200 rounded-xl p-5 hover:border-slate-300 transition-all hover:shadow-md flex flex-col justify-between relative group"
                  style={{ backgroundColor: sub.bg }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span 
                        style={{ color: sub.color }}
                        className="text-sm font-bold uppercase tracking-wide block"
                      >
                        {sub.name}
                      </span>
                      <span className="text-[10px] font-bold bg-white text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full shadow-2xs">
                        {sub.count}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4">
                      {sub.desc}
                    </p>
                  </div>

                  <button 
                    onClick={() => {
                      if(!isAuthenticated) {
                        setShowAuthModal(true);
                      } else {
                        alert(`Preparing safe download stream for ${activeGrade} ${sub.name} master package.`);
                      }
                    }}
                    style={{ borderColor: sub.color, color: sub.color }}
                    className="w-full bg-white border border-dashed text-xs font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white group-hover:border-solid transition-all active:scale-98"
                  >
                    {isAuthenticated ? (
                      <>
                        <Download className="w-3.5 h-3.5" strokeWidth={2.5} />
                        Get Print Pack
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5 opacity-60" strokeWidth={2.5} />
                        Unlock via Parent Account
                      </>
                    )}
                    <ChevronRight className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </div>

      </main>

      {/* ================= INLINE PORTAL AUTHENTICATION MODAL ================= */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-sm w-full p-6 shadow-xl relative animate-in fade-in zoom-in-95 duration-150">
            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-3">
                <Lock className="w-5 h-5" strokeWidth={2.25} />
              </div>
              <h3 className="text-base font-bold text-slate-900">Parent Access Dashboard</h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">Verify your registration to access download matrices.</p>
            </div>

            <form onSubmit={handleAuthSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Parent Email Address</label>
                <input 
                  type="email" 
                  required
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Security Password</label>
                <input 
                  type="password" 
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 font-medium"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowAuthModal(false)}
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold py-2.5 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-sm shadow-blue-500/10"
                >
                  Verify Access
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
