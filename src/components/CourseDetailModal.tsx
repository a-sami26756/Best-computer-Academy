import React from 'react';
import { X, Clock, Calendar, CheckCircle2, Award, BookOpen, ArrowRight, Laptop } from 'lucide-react';
import { Course } from '../types';
import { ACADEMY_CONFIG } from '../data/academyConfig';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnroll
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className={`p-6 border-b ${
          course.category === 'ai'
            ? 'bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 text-white'
            : course.category === 'computer' 
            ? 'bg-gradient-to-r from-blue-900 to-slate-900 text-white' 
            : 'bg-gradient-to-r from-slate-900 to-indigo-950 text-white'
        }`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                  course.category === 'ai'
                    ? 'bg-blue-500/30 text-blue-300 border border-blue-400/40'
                    : course.category === 'computer' 
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-400/30' 
                    : 'bg-indigo-500/20 text-indigo-300 border border-indigo-400/30'
                }`}>
                  {course.category === 'ai' ? 'Artificial Intelligence (AI)' : course.category === 'computer' ? 'Office & Computer Skills' : 'Academic Tuition'}
                </span>
                <span className="text-xs text-slate-300">· {course.levelTier} Level</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">{course.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <span className="text-slate-400 block">Duration</span>
              <span className="font-bold text-white">{course.duration}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Class Schedule</span>
              <span className="font-bold text-white">{course.schedule}</span>
            </div>
            <div>
              <span className="text-slate-400 block">Sample Monthly Fee</span>
              <span className="font-bold text-emerald-400 tabular-nums">
                {ACADEMY_CONFIG.currencySymbol}{course.monthlyFee} / month (est.)
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Course Overview</h4>
            <p className="text-sm text-slate-700 leading-relaxed">{course.description}</p>
          </div>

          {/* Skills Learned */}
          {course.skillsLearned && course.skillsLearned.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Core Practical Skills You Will Master
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.skillsLearned.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/60 border border-blue-100 text-xs text-blue-950 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Curriculum Modules */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Detailed Learning Modules
            </h4>
            <div className="space-y-2.5">
              {course.curriculum.map((module, i) => (
                <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="font-medium">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Prerequisites */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {course.softwareOrTools && (
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="text-xs font-bold text-slate-800 block mb-1.5">
                  {course.category === 'computer' ? 'Tools & Software Mastered' : 'Learning Resources'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {course.softwareOrTools.map((tool, idx) => (
                    <span key={idx} className="text-[11px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold text-slate-800 block mb-1.5">Prerequisites</span>
              <p className="text-xs text-slate-600 leading-relaxed">{course.prerequisites}</p>
            </div>
          </div>

          {/* Certification Note */}
          <div className="p-3 rounded-lg bg-blue-50/70 border border-blue-200/60 flex items-center gap-3">
            <Award className="w-5 h-5 text-blue-600 shrink-0" />
            <p className="text-xs text-blue-900">
              Includes hands-on weekly practical evaluation, final exam, and an official serialized Certificate of Completion upon graduation.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/80 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 transition-colors"
          >
            Close Details
          </button>
          
          <button
            onClick={() => {
              onClose();
              onEnroll(course);
            }}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs shadow-sm flex items-center gap-2 transition-colors"
          >
            <span>Proceed to Online Admission</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
