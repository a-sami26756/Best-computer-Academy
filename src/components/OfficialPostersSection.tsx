import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Award, 
  CheckCircle2, 
  Bot, 
  Palette, 
  Laptop, 
  BookOpen,
  Calendar,
  Zap
} from 'lucide-react';
import { Course } from '../types';
import { ALL_COURSES } from '../data/academyConfig';

interface OfficialPostersSectionProps {
  onEnrollInCourse: (course: Course) => void;
}

export const OfficialPostersSection: React.FC<OfficialPostersSectionProps> = ({
  onEnrollInCourse
}) => {
  const posters = [
    {
      id: 'poster-ai',
      category: 'ARTIFICIAL INTELLIGENCE',
      title: 'Ai BASIC COURSE',
      duration: '4 Months',
      tagline: 'LEARN • SKILL • GROW',
      badge: 'ADMISSION OPEN',
      courseId: 'ai-basic',
      accentColor: 'border-blue-500/80 shadow-blue-500/20',
      tagBg: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      description: 'Master practical AI tools, ChatGPT prompt engineering, Machine Learning intuition, and Python automation to build real projects.',
      highlights: [
        'ChatGPT & AI Prompt Tools',
        'Machine Learning Fundamentals',
        'Python for AI & Data Logic',
        'Data Science & Analytics',
        'No-Code Workflow Automation'
      ],
      features: [
        'Learn AI Tools',
        'Build Real Projects',
        'Get Future Ready',
        'Expert Guidance'
      ],
      tools: ['ChatGPT', 'Machine Learning', 'Python', 'Data Science', 'Automation']
    },
    {
      id: 'poster-graphic',
      category: 'CREATIVE DESIGN DIPLOMA',
      title: 'Graphic Designing',
      duration: '4 Months',
      tagline: 'Design Your Future',
      badge: 'ADMISSION OPEN',
      courseId: 'cmp-graphic',
      accentColor: 'border-amber-500/80 shadow-amber-500/20',
      tagBg: 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black',
      description: 'Professional commercial visual design course covering photo editing, vector branding, magazine layouts, and print banners.',
      highlights: [
        'Photoshop (Ps) Retouching & Compositing',
        'Illustrator (Ai) Vector Logo & Pen Tool',
        'InDesign (Id) Magazine & Page Layouts',
        'CorelDRAW Printing, Signage & Banners',
        'Canva Pro Social Media Ad Production'
      ],
      features: [
        '100% Practical Labs',
        'Commercial Portfolio',
        'Freelancing Guidance',
        'Print & Digital Media'
      ],
      tools: ['Photoshop (Ps)', 'Illustrator (Ai)', 'InDesign (Id)', 'CorelDRAW', 'Canva']
    },
    {
      id: 'poster-cit',
      category: 'INFORMATION TECHNOLOGY DIPLOMA',
      title: 'CIT Course',
      duration: '6 Months',
      tagline: 'Better Skills · Brighter Future',
      badge: 'ADMISSION OPEN',
      courseId: 'cit-diploma',
      accentColor: 'border-sky-500/80 shadow-sky-500/20',
      tagBg: 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-black',
      description: 'Certificate in Information Technology: Comprehensive 6-month certified computer diploma for beginners, job seekers, and office workers.',
      highlights: [
        'MS Office (Word, Excel, PowerPoint)',
        'Professional Touch Typing Speed Mastery',
        'Internet Research & Cyber Safety',
        'Computer Basics & Windows 11 Operating System',
        'Official Verified Certificate Provided'
      ],
      features: [
        'Practical Training',
        'Experienced Instructors',
        'Certificate Provided',
        'Better Skills Brighter Future'
      ],
      tools: ['MS Office', 'Internet', 'Typing', 'Computer Basics']
    },
    {
      id: 'poster-matric',
      category: 'BOARD EXAMINATION TUITION',
      title: 'Class: 9th & 10th',
      duration: 'Academic Session',
      tagline: 'LEARN • PRACTICE • GROW • SUCCEED',
      badge: 'ADMISSION OPEN',
      courseId: 'tui-matric',
      accentColor: 'border-amber-400/80 shadow-amber-400/20',
      tagBg: 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-slate-950 font-black',
      description: 'Comprehensive Matric (SSC) science coaching designed for top board grades with daily worksheets, weekly mock exams, and past papers.',
      highlights: [
        'Mathematics: Algebra, Geometry & Calculus',
        'Physics: Mechanics, Electromagnetism & Numericals',
        'Chemistry: Equations, Stoichiometry & Organic',
        'Biology: Diagrams & Human Physiology',
        'Computer Science Theory & English Grammar'
      ],
      features: [
        'LEARN Concepts',
        'PRACTICE Daily Worksheets',
        'GROW with Test Series',
        'SUCCEED with A-1 Grade'
      ],
      tools: ['Class 9th', 'Class 10th', 'Past Papers', 'Weekly Tests', 'A+ Prep']
    }
  ];

  const handleApply = (courseId: string) => {
    const course = ALL_COURSES.find((c) => c.id === courseId) || ALL_COURSES[0];
    onEnrollInCourse(course);
  };

  return (
    <section className="py-20 bg-slate-950 text-white relative border-b border-slate-800">
      {/* Background Gold & Slate Radial Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-bold mb-4 tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Featured Admission Programs</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Official Academy Featured Courses
          </h2>
          
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Directly from our official admission posters: Enroll now in our 4 marquee programs featuring dedicated computer workstations, expert instructors, and verified certificates.
          </p>
        </div>

        {/* 4 Poster Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {posters.map((poster) => (
            <div
              key={poster.id}
              className={`rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border-2 ${poster.accentColor} shadow-xl flex flex-col justify-between overflow-hidden relative group hover:scale-[1.02] transition-all duration-300`}
            >
              {/* Top Banner Ribbon ("ADMISSION OPEN") */}
              <div className="p-4 pb-2">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[10px] uppercase px-3 py-1 rounded-md tracking-wider shadow-sm ${poster.tagBg}`}>
                    {poster.badge}
                  </span>

                  <span className="text-[11px] font-bold text-amber-400 flex items-center gap-1 bg-amber-950/60 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                    <Calendar className="w-3 h-3 text-amber-400" />
                    <span>{poster.duration}</span>
                  </span>
                </div>

                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                  {poster.category}
                </span>

                {/* Poster Title */}
                <h3 className="font-display text-2xl font-black text-white mt-1 group-hover:text-amber-300 transition-colors tracking-tight">
                  {poster.title}
                </h3>

                {/* Slogan */}
                <p className="text-xs font-semibold text-amber-400 italic mt-1">
                  &ldquo;{poster.tagline}&rdquo;
                </p>

                {/* Description */}
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed line-clamp-3">
                  {poster.description}
                </p>
              </div>

              {/* Middle Section: Poster Highlights & Software Badges */}
              <div className="p-4 bg-slate-950/60 border-y border-slate-800/80 space-y-3">
                {/* 4 Poster Bullet Points */}
                <div className="space-y-1.5">
                  {poster.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="font-medium text-[11px]">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Software / Focus Badges */}
                <div className="pt-2 border-t border-slate-800 flex flex-wrap gap-1">
                  {poster.tools.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] bg-slate-900 border border-slate-700/80 text-amber-200/90 font-mono px-2 py-0.5 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-4 bg-slate-900/90">
                <button
                  onClick={() => handleApply(poster.courseId)}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <span>Apply for Admission</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Footer Banner from Poster 3 & 4 */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950/80 to-slate-900 border border-amber-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              The Best Computer Academy Standard
            </span>
            <h4 className="font-display font-extrabold text-xl sm:text-2xl text-white">
              LEARN • PRACTICE • GROW • SUCCEED
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              100% Practical Labs · 1 Student per PC · Certified Mentors · Online Admission Desk Available 24/7
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => {
                const el = document.getElementById('admission');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Fill Online Admission Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
