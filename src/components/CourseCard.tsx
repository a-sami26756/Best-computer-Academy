import React from 'react';
import { 
  Bot,
  Sparkles,
  MessageSquare,
  Wand2,
  GraduationCap,
  Briefcase,
  FileText,
  Image,
  Video,
  Workflow,
  TrendingUp,
  Brain,
  Calculator, 
  Atom, 
  FlaskConical, 
  BookOpen, 
  Dna, 
  Binary, 
  FileSpreadsheet, 
  Palette, 
  Laptop, 
  Clock, 
  Calendar, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Course } from '../types';
import { ACADEMY_CONFIG } from '../data/academyConfig';

interface CourseCardProps {
  course: Course;
  onViewDetails: (course: Course) => void;
  onEnroll: (course: Course) => void;
}

const ICON_MAP: Record<string, React.ElementType> = {
  Bot,
  Sparkles,
  MessageSquare,
  Wand2,
  GraduationCap,
  Briefcase,
  FileText,
  Image,
  Video,
  Workflow,
  TrendingUp,
  Brain,
  Calculator,
  Atom,
  FlaskConical,
  BookOpen,
  Dna,
  Binary,
  FileSpreadsheet,
  Palette,
  Laptop
};

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onViewDetails,
  onEnroll
}) => {
  const IconComponent = ICON_MAP[course.iconName] || Laptop;
  const isAi = course.category === 'ai';
  const isComputer = course.category === 'computer';

  // Level Badge Color Scheme
  const levelTier = course.levelTier || 'Beginner';
  const levelStyles: Record<string, string> = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    Intermediate: 'bg-blue-50 text-blue-700 border-blue-200/80',
    Advanced: 'bg-purple-50 text-purple-700 border-purple-200/80'
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-blue-400/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Card Header & Badges */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
            isAi 
              ? 'bg-blue-600/10 text-blue-600 border border-blue-200/80'
              : isComputer
              ? 'bg-sky-50 text-sky-600 border border-sky-100'
              : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
          }`}>
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex flex-col items-end gap-1">
            {/* Level Badge (Clearly labeled Beginner, Intermediate, Advanced) */}
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${levelStyles[levelTier] || levelStyles.Beginner}`}>
              ● {levelTier}
            </span>

            {/* Category Marker */}
            <span className="text-[11px] font-semibold text-slate-500">
              {isAi ? 'Artificial Intelligence' : isComputer ? 'Computer Skills' : 'Academic Tuition'}
            </span>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="font-display font-bold text-xl text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
          {course.title}
        </h3>

        {/* Target Audience / Subtitle */}
        <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-1">
          {course.level}
        </p>

        {/* Beginner-friendly Description */}
        <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
          {course.description}
        </p>

        {/* Skills Students Will Learn Preview */}
        {course.skillsLearned && course.skillsLearned.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1.5">
              Key Skills You Learn:
            </span>
            <div className="space-y-1">
              {course.skillsLearned.slice(0, 2).map((skill, i) => (
                <div key={i} className="flex items-center gap-1.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Middle Specs & Pricing */}
      <div className="px-6 py-3 bg-slate-50/70 border-y border-slate-100 space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span className="flex items-center gap-1.5 text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span>Duration:</span>
          </span>
          <span className="font-semibold text-slate-800">{course.duration}</span>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-600">
          <span className="flex items-center gap-1.5 text-slate-500">
            <Calendar className="w-3.5 h-3.5" />
            <span>Sample Fee:</span>
          </span>
          <span className="font-bold text-slate-900 tabular-nums">
            {ACADEMY_CONFIG.currencySymbol}{course.monthlyFee} <span className="font-normal text-slate-500 text-[11px]">/ mo (est.)</span>
          </span>
        </div>

        {/* Mini Tool Chips */}
        {course.softwareOrTools && (
          <div className="pt-1 flex flex-wrap gap-1">
            {course.softwareOrTools.slice(0, 3).map((tool, idx) => (
              <span key={idx} className="text-[10px] bg-white border border-slate-200/80 text-slate-600 px-1.5 py-0.5 rounded-sm">
                {tool}
              </span>
            ))}
            {course.softwareOrTools.length > 3 && (
              <span className="text-[10px] text-slate-400 self-center">
                +{course.softwareOrTools.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer Card Actions */}
      <div className="p-4 sm:p-6 pt-3 sm:pt-4 flex items-center justify-between gap-2">
        <button
          onClick={() => onViewDetails(course)}
          className="text-xs font-bold text-slate-700 hover:text-blue-700 transition-colors py-2 px-1 focus:outline-hidden"
        >
          View Syllabus
        </button>

        <button
          onClick={() => onEnroll(course)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-2xs hover:shadow-xs transition-all focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <span>Enroll Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
