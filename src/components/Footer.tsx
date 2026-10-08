import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Laptop, 
  BookOpen, 
  ArrowUp,
  MessageCircle,
  ExternalLink,
  Bot
} from 'lucide-react';
import { ACADEMY_CONFIG, AI_COURSES, COMPUTER_COURSES, TUITION_COURSES } from '../data/academyConfig';
import { BcaLogo } from './BcaLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs sm:text-sm">
      
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-4 space-y-4">
            <BcaLogo size="sm" variant="dark" showSubtitle={true} />

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm pt-2">
              Empowering students through certified Artificial Intelligence courses, Graphic Designing, CIT diplomas, and rigorous board examination academic tuition. Official motto: &quot;LEARN • SKILL • GROW | LEARN • PRACTICE • GROW • SUCCEED&quot;.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={ACADEMY_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp Channel"
                aria-label="WhatsApp Channel"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={ACADEMY_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Facebook Page"
                aria-label="Facebook Page"
              >
                <span className="font-bold text-xs">fb</span>
              </a>

              <a
                href={ACADEMY_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="YouTube Channel"
                aria-label="YouTube Channel"
              >
                <span className="font-bold text-xs">yt</span>
              </a>

              <a
                href={ACADEMY_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram Profile"
                aria-label="Instagram Profile"
              >
                <span className="font-bold text-xs">ig</span>
              </a>
            </div>
          </div>

          {/* AI Course Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5">
              <Bot className="w-4 h-4 text-blue-400" />
              <span>AI Course</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {AI_COURSES.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => onNavigate('courses')}
                    className="hover:text-blue-400 transition-colors text-left font-semibold text-blue-300"
                  >
                    {course.title} ({course.duration})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Computer & Tuition Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-sky-400" />
              <span>Computer &amp; Tuition</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {COMPUTER_COURSES.map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => onNavigate('courses')}
                    className="hover:text-sky-400 transition-colors text-left"
                  >
                    {course.title}
                  </button>
                </li>
              ))}
              {TUITION_COURSES.slice(0, 3).map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => onNavigate('courses')}
                    className="hover:text-indigo-400 transition-colors text-left"
                  >
                    {course.title} (Tuition)
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Campus Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{ACADEMY_CONFIG.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <a href={`tel:${ACADEMY_CONFIG.phone}`} className="hover:text-white transition-colors">
                  {ACADEMY_CONFIG.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="truncate">{ACADEMY_CONFIG.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('admission')}
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition-colors"
              >
                Apply Online Now
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-black/40 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {ACADEMY_CONFIG.name} (BCA). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Configured via: <code className="text-slate-400 font-mono">src/data/academyConfig.ts</code></span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
