import React, { useState, useMemo } from 'react';
import { Search, Laptop, BookOpen, Bot, Sparkles, Filter, X } from 'lucide-react';
import { Course, CourseCategory, CourseLevelTier } from '../types';
import { ALL_COURSES, AI_COURSES, COMPUTER_COURSES, TUITION_COURSES } from '../data/academyConfig';
import { CourseCard } from './CourseCard';
import { CourseDetailModal } from './CourseDetailModal';

interface CourseCatalogProps {
  selectedCategory: 'all' | 'ai' | 'computer' | 'tuition';
  onCategoryChange: (category: 'all' | 'ai' | 'computer' | 'tuition') => void;
  onEnrollInCourse: (course: Course) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  selectedCategory,
  onCategoryChange,
  onEnrollInCourse
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);

  // Filter courses based on Category, Level, and Search Query
  const filteredCourses = useMemo(() => {
    return ALL_COURSES.filter((course) => {
      // Category Match
      const matchesCategory =
        selectedCategory === 'all' || course.category === selectedCategory;

      // Level Tier Match
      const matchesLevel =
        selectedLevel === 'all' || course.levelTier === selectedLevel;

      // Search Query Match (Title, description, tools, curriculum, skills)
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory && matchesLevel;

      const matchesSearch =
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.level.toLowerCase().includes(query) ||
        (course.skillsLearned &&
          course.skillsLearned.some((s) => s.toLowerCase().includes(query))) ||
        (course.softwareOrTools &&
          course.softwareOrTools.some((t) => t.toLowerCase().includes(query))) ||
        course.curriculum.some((m) => m.toLowerCase().includes(query));

      return matchesCategory && matchesLevel && matchesSearch;
    });
  }, [selectedCategory, selectedLevel, searchQuery]);

  return (
    <section id="courses" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Modern Practical Curriculum</span>
            </span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Computer &amp; Artificial Intelligence Courses
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              From practical Ai BASIC COURSE (ChatGPT, Python, ML, Automation) and certified IT diplomas (CIT, Graphic Designing) to board examination tuition subjects.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              <span>{AI_COURSES.length} AI Course</span>
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
              <span>{COMPUTER_COURSES.length} Computer Courses</span>
            </span>
            <span className="text-slate-300">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              <span>{TUITION_COURSES.length} Tuition Subjects</span>
            </span>
          </div>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Functional Category Tabs */}
          <div className="flex flex-wrap items-center p-1.5 bg-slate-200/80 rounded-xl gap-1">
            <button
              onClick={() => onCategoryChange('all')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap focus:outline-hidden ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Courses ({ALL_COURSES.length})
            </button>

            <button
              onClick={() => onCategoryChange('ai')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap focus:outline-hidden ${
                selectedCategory === 'ai'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>AI Course ({AI_COURSES.length})</span>
            </button>

            <button
              onClick={() => onCategoryChange('computer')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap focus:outline-hidden ${
                selectedCategory === 'computer'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span>Computer &amp; Office ({COMPUTER_COURSES.length})</span>
            </button>

            <button
              onClick={() => onCategoryChange('tuition')}
              className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap focus:outline-hidden ${
                selectedCategory === 'tuition'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Tuition Subjects ({TUITION_COURSES.length})</span>
            </button>
          </div>

          {/* Level Filter & Search Bar Cluster */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Level Tier Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-600 shadow-2xs w-full sm:w-auto">
              <span className="font-semibold text-slate-500">Level:</span>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="bg-transparent font-bold text-slate-900 focus:outline-hidden cursor-pointer"
                aria-label="Filter by course level"
              >
                <option value="all">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
              </select>
            </div>

            {/* Search Input Box */}
            <div className="relative w-full sm:w-72">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search AI tools, prompt, office..."
                className="w-full pl-10 pr-9 py-2 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>

        </div>

        {/* Results Count Banner */}
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filteredCourses.length} of {ALL_COURSES.length} courses</span>
          {(searchQuery || selectedLevel !== 'all' || selectedCategory !== 'all') && (
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('all');
                onCategoryChange('all');
              }}
              className="text-blue-600 font-semibold hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewDetails={(c) => setSelectedCourseForModal(c)}
                onEnroll={(c) => onEnrollInCourse(c)}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 p-12 bg-white rounded-2xl border border-slate-200 text-center max-w-lg mx-auto shadow-xs">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-slate-900">No matching courses found</h3>
            <p className="mt-2 text-xs text-slate-500">
              We couldn&apos;t find any course matching your current search or filter. Try searching for &ldquo;ChatGPT&rdquo;, &ldquo;Prompt&rdquo;, &ldquo;Excel&rdquo;, or &ldquo;Math&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLevel('all');
                onCategoryChange('all');
              }}
              className="mt-5 px-4 py-2 rounded-lg bg-blue-600 text-white font-bold text-xs"
            >
              Show All Courses
            </button>
          </div>
        )}

      </div>

      {/* Course Details Syllabus Modal */}
      {selectedCourseForModal && (
        <CourseDetailModal
          course={selectedCourseForModal}
          onClose={() => setSelectedCourseForModal(null)}
          onEnroll={(c) => {
            setSelectedCourseForModal(null);
            onEnrollInCourse(c);
          }}
        />
      )}
    </section>
  );
};
