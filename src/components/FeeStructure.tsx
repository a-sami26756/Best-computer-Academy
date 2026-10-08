import React, { useState } from 'react';
import { 
  Calculator, 
  Download, 
  Printer, 
  RotateCcw, 
  Check, 
  HelpCircle, 
  Sparkles, 
  SlidersHorizontal,
  ArrowRight,
  Bot,
  Laptop,
  BookOpen,
  Info
} from 'lucide-react';
import { Course } from '../types';
import { ALL_COURSES, ACADEMY_CONFIG } from '../data/academyConfig';

interface FeeStructureProps {
  onEnrollCourse: (course: Course) => void;
}

export const FeeStructure: React.FC<FeeStructureProps> = ({ onEnrollCourse }) => {
  // Local state for editable fees allowing live edits / testing
  const [editableCourses, setEditableCourses] = useState<Course[]>(ALL_COURSES);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(ACADEMY_CONFIG.currencySymbol);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [filterCategory, setFilterCategory] = useState<'all' | 'ai' | 'computer' | 'tuition'>('all');

  // Handle in-place fee edit
  const handleFeeChange = (courseId: string, field: 'monthlyFee' | 'totalFee', value: number) => {
    setEditableCourses((prev) =>
      prev.map((c) => (c.id === courseId ? { ...c, [field]: Math.max(0, value) } : c))
    );
  };

  // Reset to default configuration from academyConfig.ts
  const handleResetFees = () => {
    setEditableCourses(ALL_COURSES);
    setDiscountPercent(0);
    setSelectedCurrency(ACADEMY_CONFIG.currencySymbol);
  };

  // Filtered list
  const displayedCourses = editableCourses.filter((course) => {
    if (filterCategory === 'all') return true;
    return course.category === filterCategory;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="fees" className="py-20 bg-slate-100/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Course Pricing &amp; Durations
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            AI, Computer &amp; Tuition Fee Schedule
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            Flexible monthly installment options and sample durations for our Ai BASIC COURSE, certified computer diplomas, and board examination tuition subjects.
          </p>
        </div>

        {/* Sample Pricing Notice Disclaimer */}
        <div className="mt-8 max-w-4xl mx-auto p-3.5 bg-blue-50/80 border border-blue-200 rounded-xl text-blue-950 text-xs flex items-center gap-3">
          <Info className="w-4 h-4 text-blue-600 shrink-0" />
          <span>
            <strong>Sample Planning Rates:</strong> Durations and fees below represent sample estimations for budgeting. Final batch rates and seasonal sibling concessions are confirmed directly at the academy admission desk. Third-party software subscriptions are optional and not bundled unless specifically arranged.
          </span>
        </div>

        {/* Action & Configuration Toolbar */}
        <div className="mt-6 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center p-1 bg-slate-100 rounded-xl gap-1">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                filterCategory === 'all' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Courses ({editableCourses.length})
            </button>
            <button
              onClick={() => setFilterCategory('ai')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                filterCategory === 'ai' ? 'bg-blue-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bot className="w-3 h-3" />
              <span>AI Course</span>
            </button>
            <button
              onClick={() => setFilterCategory('computer')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                filterCategory === 'computer' ? 'bg-sky-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Laptop className="w-3 h-3" />
              <span>Computer Skills</span>
            </button>
            <button
              onClick={() => setFilterCategory('tuition')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1 ${
                filterCategory === 'tuition' ? 'bg-indigo-600 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              <span>Tuition Subjects</span>
            </button>
          </div>

          {/* Interactive Tools: Edit Mode Toggle & Currency Selector */}
          <div className="flex flex-wrap items-center gap-2.5">
            
            {/* Currency Selector */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-700">Currency:</span>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="bg-transparent font-bold text-slate-900 focus:outline-hidden cursor-pointer"
                aria-label="Select currency"
              >
                <option value="$">$ (USD)</option>
                <option value="Rs.">Rs. (PKR / INR)</option>
                <option value="₹">₹ (INR)</option>
                <option value="AED">AED (Dirhams)</option>
                <option value="£">£ (GBP)</option>
                <option value="€">€ (EUR)</option>
              </select>
            </div>

            {/* Sibling / Merit Discount Slider */}
            <div className="flex items-center gap-2 text-xs text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
              <span className="font-semibold text-slate-700">Discount:</span>
              <select
                value={discountPercent}
                onChange={(e) => setDiscountPercent(Number(e.target.value))}
                className="bg-transparent font-bold text-blue-600 focus:outline-hidden cursor-pointer"
                aria-label="Select discount percentage"
              >
                <option value={0}>0% (Standard)</option>
                <option value={10}>10% (Sibling Concession)</option>
                <option value={15}>15% (Early Bird / Merit)</option>
                <option value={20}>20% (Combined Package)</option>
                <option value={30}>30% (Need-Based)</option>
              </select>
            </div>

            {/* Toggle Editable Fees Button */}
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                isEditMode
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{isEditMode ? 'Finish Editing' : 'Live Edit Fees'}</span>
            </button>

            {/* Reset Button */}
            {(isEditMode || discountPercent > 0 || selectedCurrency !== ACADEMY_CONFIG.currencySymbol) && (
              <button
                onClick={handleResetFees}
                className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
                title="Reset to Config Defaults"
                aria-label="Reset fees"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            {/* Print / Save Fee Schedule */}
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Schedule</span>
            </button>

          </div>

        </div>

        {/* Live Edit Mode Hint Alert */}
        {isEditMode && (
          <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                <strong>Fee Edit Mode Enabled:</strong> You can adjust the sample monthly and total amounts in the fields below to customize fee estimates.
              </span>
            </div>
            <button
              onClick={() => setIsEditMode(false)}
              className="text-amber-800 font-bold hover:underline shrink-0 ml-2"
            >
              Save View
            </button>
          </div>
        )}

        {/* Course Fee Table */}
        <div className="mt-6 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm text-slate-700">
              <thead className="bg-slate-900 text-white font-semibold text-xs tracking-wider">
                <tr>
                  <th scope="col" className="py-3.5 px-4 sm:px-6">Course Name</th>
                  <th scope="col" className="py-3.5 px-4">Category &amp; Level</th>
                  <th scope="col" className="py-3.5 px-4">Duration &amp; Class Hours</th>
                  <th scope="col" className="py-3.5 px-4">Sample Monthly Fee</th>
                  <th scope="col" className="py-3.5 px-4">Sample Total Fee</th>
                  <th scope="col" className="py-3.5 px-4 sm:px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayedCourses.map((course) => {
                  const discountedMonthly = Math.round(
                    course.monthlyFee * (1 - discountPercent / 100)
                  );
                  const discountedTotal = Math.round(
                    course.totalFee * (1 - discountPercent / 100)
                  );

                  return (
                    <tr key={course.id} className="hover:bg-slate-50/80 transition-colors">
                      {/* Name */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-slate-900">{course.title}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{course.description}</div>
                      </td>

                      {/* Category & Level */}
                      <td className="py-4 px-4">
                        <div className="flex flex-col gap-1 items-start">
                          <span className={`inline-flex text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${
                            course.category === 'ai'
                              ? 'bg-blue-50 text-blue-700 border border-blue-200'
                              : course.category === 'computer'
                              ? 'bg-sky-50 text-sky-700 border border-sky-200'
                              : 'bg-indigo-50 text-indigo-700 border border-indigo-200'
                          }`}>
                            {course.category === 'ai' ? 'Artificial Intelligence' : course.category === 'computer' ? 'Computer Skills' : 'Tuition'}
                          </span>
                          <span className="text-[10px] font-semibold text-slate-500">
                            ● {course.levelTier}
                          </span>
                        </div>
                      </td>

                      {/* Duration */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-slate-800">{course.duration}</div>
                        <div className="text-[11px] text-slate-500">{course.schedule}</div>
                      </td>

                      {/* Monthly Fee */}
                      <td className="py-4 px-4 font-mono">
                        {isEditMode ? (
                          <div className="flex items-center gap-1">
                            <span className="text-slate-400">{selectedCurrency}</span>
                            <input
                              type="number"
                              min={0}
                              value={course.monthlyFee}
                              onChange={(e) =>
                                handleFeeChange(course.id, 'monthlyFee', Number(e.target.value))
                              }
                              className="w-20 px-2 py-1 bg-amber-50/50 border border-amber-300 rounded-md text-xs font-bold text-slate-900 focus:outline-hidden"
                            />
                          </div>
                        ) : (
                          <div>
                            <span className="font-bold text-slate-900 text-sm tabular-nums">
                              {selectedCurrency}{discountedMonthly}
                            </span>
                            {discountPercent > 0 && (
                              <span className="text-[11px] text-slate-400 line-through ml-1.5 tabular-nums">
                                {selectedCurrency}{course.monthlyFee}
                              </span>
                            )}
                            <span className="text-[11px] text-slate-500 block">per month (est.)</span>
                          </div>
                        )}
                      </td>

                      {/* Total Fee */}
                      <td className="py-4 px-4 font-mono">
                        {isEditMode ? (
                          <div className="flex items-center gap-1">
                            <span className="text-slate-400">{selectedCurrency}</span>
                            <input
                              type="number"
                              min={0}
                              value={course.totalFee}
                              onChange={(e) =>
                                handleFeeChange(course.id, 'totalFee', Number(e.target.value))
                              }
                              className="w-20 px-2 py-1 bg-amber-50/50 border border-amber-300 rounded-md text-xs font-bold text-slate-900 focus:outline-hidden"
                            />
                          </div>
                        ) : (
                          <div>
                            <span className="font-bold text-blue-700 text-sm tabular-nums">
                              {selectedCurrency}{discountedTotal}
                            </span>
                            {discountPercent > 0 && (
                              <span className="text-[11px] text-slate-400 line-through ml-1.5 tabular-nums">
                                {selectedCurrency}{course.totalFee}
                              </span>
                            )}
                            <span className="text-[10px] text-emerald-600 block font-sans font-medium">
                              Full Track (est.)
                            </span>
                          </div>
                        )}
                      </td>

                      {/* Action */}
                      <td className="py-4 px-4 sm:px-6 text-right">
                        <button
                          onClick={() => onEnrollCourse(course)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-2xs transition-colors"
                        >
                          <span>Apply</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Fee Policy & Inclusions Card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-sm text-slate-900 mb-2">What&apos;s Included in Fee?</h4>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li>• Dedicated personal workstation in computer lab</li>
              <li>• Course slides, sample prompts &amp; practical files</li>
              <li>• Hands-on guided workflow sessions</li>
              <li>• Official serialized Certificate upon completion</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-sm text-slate-900 mb-2">Concessions &amp; Discounts</h4>
            <ul className="text-xs text-slate-600 space-y-1.5">
              <li>• <strong>Sibling Discount:</strong> 10% off for 2nd enrolled student</li>
              <li>• <strong>Multi-Course Combo:</strong> 20% discount on 2nd AI/skills course</li>
              <li>• <strong>Merit Scholarship:</strong> Up to 30% for board exam toppers</li>
              <li>• Need-based assistance available on desk inquiry</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200">
            <h4 className="font-bold text-sm text-slate-900 mb-2">Customization Note</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              All courses, sample fees, and schedules are managed in <code className="bg-slate-100 text-blue-700 px-1 py-0.5 rounded text-[11px]">src/data/academyConfig.ts</code>. You can easily update them to reflect your branch&apos;s specific offerings.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
