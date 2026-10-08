import React from 'react';
import { ArrowRight, BookOpen, Laptop, Bot, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACADEMY_CONFIG, AI_COURSES, COMPUTER_COURSES, TUITION_COURSES } from '../data/academyConfig';
import { BcaLogo } from './BcaLogo';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onSelectCategory?: (category: 'all' | 'ai' | 'computer' | 'tuition') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onSelectCategory }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      {/* Background Architectural Grid & Subtle Electric Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(to right, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Welcome Message, and Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Official Logo Banner & Kicker */}
            <div className="mb-6 p-2 sm:p-2.5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-blue-950/40 border border-amber-500/30 shadow-lg shadow-amber-500/10 inline-flex items-center gap-4">
              <BcaLogo size="md" variant="dark" showSubtitle={true} />
            </div>

            {/* Accreditation & AI Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-900/40 border border-blue-700/40 text-blue-200 text-xs font-medium mb-6">
              <Sparkles className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Ai BASIC COURSE · Graphic Designing · CIT Diploma · Academic Tuition · Est. {ACADEMY_CONFIG.establishedYear}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance">
              Master Practical AI &amp; Modern Computer Skills at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                BEST COMPUTER ACADEMY
              </span>
            </h1>

            {/* Welcome Message */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Welcome to <strong>{ACADEMY_CONFIG.shortName}</strong>, your premier education center for practical <strong>Ai BASIC COURSE</strong> (ChatGPT, Machine Learning, Python, Automation), certified computer diplomas (CIT, Graphic Designing), and high-scoring secondary/higher-secondary academic tuition.
            </p>

            {/* Key Value Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ai BASIC COURSE (4 Months Practical Labs)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Graphic Designing &amp; CIT Diplomas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Practical Labs (1 Student, 1 PC)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Class 9th &amp; 10th Board Exam Tuition</span>
              </div>
            </div>

            {/* Admission and Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('admission')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (onSelectCategory) onSelectCategory('ai');
                  onNavigate('courses');
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-blue-950/80 hover:bg-blue-900 text-blue-200 border border-blue-700/60 font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Bot className="w-4 h-4 text-blue-400" />
                <span>Explore AI Basic Course</span>
              </button>

              <button
                onClick={() => onNavigate('fees')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-lg text-slate-300 hover:text-white font-semibold text-sm transition-colors text-center"
              >
                <span>View Fee Schedule</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Academy Tracks Hub */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/90 border border-slate-800 p-6 shadow-2xl overflow-hidden">
              
              {/* Decorative Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                <span className="text-xs font-mono text-slate-400">BCA 3 Learning Streams</span>
              </div>

              {/* 3 Tracks Spotlight */}
              <div className="mt-5 space-y-3.5">
                
                {/* Track 1: AI Course */}
                <div 
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory('ai');
                    onNavigate('courses');
                  }}
                  className="p-3.5 rounded-xl bg-blue-950/40 hover:bg-blue-900/50 border border-blue-800/50 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300 shrink-0 group-hover:scale-105 transition-transform">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xs font-bold text-white group-hover:text-blue-300 transition-colors">
                          Ai BASIC COURSE
                        </h2>
                        <span className="text-[10px] font-bold text-blue-400 bg-blue-900/50 px-2 py-0.5 rounded-full">4 Months</span>
                      </div>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        ChatGPT, Machine Learning, Python &amp; AI Automation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 2: Computer Skills */}
                <div 
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory('computer');
                    onNavigate('courses');
                  }}
                  className="p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
                      <Laptop className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                          Computer &amp; Office Skills
                        </h2>
                        <span className="text-[10px] font-semibold text-sky-400">{COMPUTER_COURSES.length} Courses</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        MS Office Professional, Excel Formulas, Basic Computer Skills.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Track 3: Academic Tuition */}
                <div 
                  onClick={() => {
                    if (onSelectCategory) onSelectCategory('tuition');
                    onNavigate('courses');
                  }}
                  className="p-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all cursor-pointer group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h2 className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                          Academic Tuition Subjects
                        </h2>
                        <span className="text-[10px] font-semibold text-indigo-400">{TUITION_COURSES.length} Subjects</span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Math, Physics, Chemistry, English, Biology, Computer Science.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Quick Stats Row */}
              <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-950/40">
                  <div className="font-display font-bold text-base text-white tabular-nums">1,800+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Students Trained</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/40">
                  <div className="font-display font-bold text-base text-blue-400 tabular-nums">100%</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Lab Hands-On</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950/40">
                  <div className="font-display font-bold text-base text-emerald-400 tabular-nums">12+ Yrs</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Track Record</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
