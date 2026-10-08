import React from 'react';
import { Monitor, Award, Cpu, Clock, CheckCircle, GraduationCap, ShieldCheck } from 'lucide-react';
import { ACADEMY_CONFIG, ACADEMY_FACILITIES } from '../data/academyConfig';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-20 bg-slate-100/70 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            About Our Institution
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bridging Theoretical Concepts with Practical Digital Skills
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed text-balance">
            Established in {ACADEMY_CONFIG.establishedYear}, <strong>{ACADEMY_CONFIG.name} (BCA)</strong> was founded with a singular purpose: to deliver an authentic, hands-on learning environment where students master cutting-edge computer tools while building an invincible academic foundation in mathematics and sciences.
          </p>
        </div>

        {/* Two-Column Story & Director's Desk */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Column 1: Director's Message & Core Values */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="w-12 h-12 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg">
                  BCA
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">Message from Academy Leadership</h3>
                  <p className="text-xs text-slate-500">Board of Directors &amp; Academic Dean</p>
                </div>
              </div>

              <blockquote className="mt-6 text-slate-700 text-sm sm:text-base leading-relaxed italic">
                &ldquo;Too many educational institutes teach computer concepts only on blackboards and rush through science curriculums without solving practical questions. At BCA, our promise is simple: every computer student works on their own dedicated PC, writes real code, designs real projects, and every tuition student receives step-by-step clarity with weekly diagnostic testing.&rdquo;
              </blockquote>

              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Crowding:</strong> Limited seats per batch to guarantee individual attention.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Standardized Evaluation:</strong> Serialized exams with verified completion credentials.</span>
                </div>
                <div className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Career &amp; College Ready:</strong> Guidance for university entrance and freelance portals.</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-slate-500">Academic Inquiries:</p>
                <a href={`tel:${ACADEMY_CONFIG.phone}`} className="text-sm font-bold text-blue-700 hover:underline">
                  {ACADEMY_CONFIG.displayPhone}
                </a>
              </div>
              <button
                onClick={() => onNavigate('admission')}
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
              >
                Enroll Your Child / Self
              </button>
            </div>
          </div>

          {/* Column 2: Infrastructure & Facilities */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            
            {/* Facility Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACADEMY_FACILITIES.map((facility, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs mb-3">
                    0{idx + 1}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1.5">{facility.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{facility.description}</p>
                </div>
              ))}
            </div>

            {/* Quality Commitment Banner */}
            <div className="bg-gradient-to-r from-blue-900 to-slate-900 rounded-xl p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-blue-300 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold">100% Satisfaction &amp; Free Trial Class</h4>
                  <p className="text-xs text-slate-300">Attend a trial lecture before submitting your course admission.</p>
                </div>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold whitespace-nowrap transition-colors border border-white/20"
              >
                Visit Campus
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
