import React, { useState, useEffect } from 'react';
import { Course } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OfficialPostersSection } from './components/OfficialPostersSection';
import { AboutSection } from './components/AboutSection';
import { CourseCatalog } from './components/CourseCatalog';
import { FeeStructure } from './components/FeeStructure';
import { AdmissionForm } from './components/AdmissionForm';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { ContactMap } from './components/ContactMap';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'computer' | 'tuition'>('all');
  const [preSelectedCourse, setPreSelectedCourse] = useState<Course | null>(null);

  // Smooth navigation handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // When a user clicks "Enroll" on a course card or syllabus modal
  const handleEnrollInCourse = (course: Course) => {
    setPreSelectedCourse(course);
    handleNavigate('admission');
  };

  // Scroll spy to update active section in navbar
  useEffect(() => {
    const sectionIds = ['hero', 'featured-posters', 'courses', 'fees', 'about', 'admission', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAdmissionModal={() => handleNavigate('admission')}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section with BCA logo, banner, welcome message & buttons */}
        <Hero
          onNavigate={handleNavigate}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* 2. Official Academy Posters Section (From Uploaded Photos: AI Basic, Graphic Design, CIT, Class 9th & 10th) */}
        <div id="featured-posters">
          <OfficialPostersSection
            onEnrollInCourse={handleEnrollInCourse}
          />
        </div>

        {/* 3. Course Catalog with Search & Category Filters (AI, Computer & Tuition) */}
        <CourseCatalog
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onEnrollInCourse={handleEnrollInCourse}
        />

        {/* 4. Course Fees & Durations (with live editable fee mode & printer) */}
        <FeeStructure
          onEnrollCourse={handleEnrollInCourse}
        />

        {/* 5. About Us & Facilities Section */}
        <AboutSection
          onNavigate={handleNavigate}
        />

        {/* 6. Online Admission Form with Verification Slip */}
        <AdmissionForm
          preSelectedCourse={preSelectedCourse}
          onClearPreSelectedCourse={() => setPreSelectedCourse(null)}
        />

        {/* 7. Student Testimonials & FAQ Accordion */}
        <TestimonialsFAQ />

        {/* 8. Campus Address, Google Maps & Contact Desk */}
        <ContactMap />
      </main>

      {/* Floating WhatsApp Chat & Clickable Phone */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
      />
    </div>
  );
}
