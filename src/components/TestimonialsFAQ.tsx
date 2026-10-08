import React, { useState } from 'react';
import { Star, ChevronDown, MessageSquare, Quote, HelpCircle, CheckCircle2 } from 'lucide-react';
import { STUDENT_TESTIMONIALS, FAQS } from '../data/academyConfig';

export const TestimonialsFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* PART 1: STUDENT TESTIMONIALS */}
        {/* ========================================================= */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Student Success Stories
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Hear from Our High-Achieving Students
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            Real feedback from graduates who transformed their digital skills and scored top grades in board examinations.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDENT_TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-blue-300 transition-colors"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  &ldquo;{t.feedback}&rdquo;
                </p>
              </div>

              {/* Student info */}
              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <div className="font-bold text-sm text-slate-900">{t.studentName}</div>
                <div className="text-[11px] text-blue-600 font-medium">{t.courseTaken}</div>
                <div className="text-[10px] text-emerald-700 font-semibold mt-1">
                  ✓ {t.achievement}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* PART 2: FREQUENTLY ASKED QUESTIONS (FAQ) */}
        {/* ========================================================= */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Clear Answers
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-500">
              Common questions regarding our admissions, class timings, and certificate validity.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-xl border transition-colors ${
                    isOpen ? 'border-blue-500/80 bg-blue-50/20' : 'border-slate-200 bg-slate-50/50'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-xs sm:text-sm text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
