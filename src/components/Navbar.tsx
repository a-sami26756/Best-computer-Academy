import React, { useState } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyConfig';
import { BcaLogo } from './BcaLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdmissionModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenAdmissionModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'featured-posters', label: 'Official Posters' },
    { id: 'courses', label: 'All Courses' },
    { id: 'fees', label: 'Course Fees' },
    { id: 'about', label: 'About Us' },
    { id: 'admission', label: 'Admission' },
    { id: 'contact', label: 'Contact & Map' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      {/* Top Notification / Quick Contact Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Admissions Open for New Batches (Academic &amp; IT Diploma)</span>
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-400">Hours: {ACADEMY_CONFIG.officeHours.weekdays}</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${ACADEMY_CONFIG.phone}`}
              className="hover:text-blue-400 transition-colors flex items-center gap-1.5 text-slate-200"
              title="Call Academy Office"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{ACADEMY_CONFIG.displayPhone}</span>
            </a>
            <span className="text-slate-600">·</span>
            <a
              href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Hello%20Best%20Computer%20Academy,%20I%20want%20to%20inquire%20about%20admissions.`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span>WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - Strictly 3 Zones */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* ZONE 1: Brand Wordmark (Official BCA Logo with Golden Monitor & Crown) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('hero')}
              className="flex items-center gap-2.5 text-left group focus:outline-hidden"
              aria-label="Best Computer Academy Home"
            >
              <BcaLogo size="sm" variant="light" showSubtitle={true} />
            </button>
          </div>

          {/* ZONE 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-colors py-1 relative whitespace-nowrap focus:outline-hidden ${
                    isActive
                      ? 'text-blue-700 font-bold'
                      : 'hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* ZONE 3: Primary Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (onOpenAdmissionModal) {
                  onOpenAdmissionModal();
                } else {
                  handleLinkClick('admission');
                }
              }}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-sm hover:shadow-md transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-50 text-blue-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => handleLinkClick('admission')}
                className="w-full py-3 text-center text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                Apply Online for Admission
              </button>
              <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
                <span>Call Us:</span>
                <a href={`tel:${ACADEMY_CONFIG.phone}`} className="font-semibold text-blue-600 hover:underline">
                  {ACADEMY_CONFIG.displayPhone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
