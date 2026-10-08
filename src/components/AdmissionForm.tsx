import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  User, 
  Phone, 
  MapPin, 
  GraduationCap, 
  BookOpen, 
  Clock, 
  FileText,
  Printer,
  History,
  Trash2
} from 'lucide-react';
import { Course, AdmissionApplication } from '../types';
import { ALL_COURSES, ACADEMY_CONFIG } from '../data/academyConfig';
import { AdmissionSlipModal } from './AdmissionSlipModal';

interface AdmissionFormProps {
  preSelectedCourse?: Course | null;
  onClearPreSelectedCourse?: () => void;
}

export const AdmissionForm: React.FC<AdmissionFormProps> = ({
  preSelectedCourse,
  onClearPreSelectedCourse
}) => {
  // Form State
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [educationLevel, setEducationLevel] = useState('Matric / 10th Grade');
  const [selectedCourseId, setSelectedCourseId] = useState(
    preSelectedCourse ? preSelectedCourse.id : ALL_COURSES[0].id
  );
  const [shift, setShift] = useState<'Morning' | 'Afternoon' | 'Evening' | 'Weekend'>('Morning');
  const [notes, setNotes] = useState('');

  // Validation Errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Completed Application for Slip View
  const [generatedApplication, setGeneratedApplication] = useState<AdmissionApplication | null>(null);

  // Local storage history of submissions
  const [savedApplications, setSavedApplications] = useState<AdmissionApplication[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  // Update selected course if passed from outside
  useEffect(() => {
    if (preSelectedCourse) {
      setSelectedCourseId(preSelectedCourse.id);
    }
  }, [preSelectedCourse]);

  // Load applications from localStorage on mount
  useEffect(() => {
    try {
      const data = localStorage.getItem('bca_applications');
      if (data) {
        setSavedApplications(JSON.parse(data));
      }
    } catch {
      // ignore
    }
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!studentName.trim()) {
      newErrors.studentName = 'Student full name is required.';
    } else if (studentName.trim().length < 3) {
      newErrors.studentName = 'Name must be at least 3 characters long.';
    }

    if (!fatherName.trim()) {
      newErrors.fatherName = 'Father or guardian name is required.';
    }

    if (!phone.trim()) {
      newErrors.phone = 'Contact phone number is required.';
    } else if (phone.trim().replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number (min 7 digits).';
    }

    if (!address.trim()) {
      newErrors.address = 'Residential street address / city area is required.';
    }

    if (!selectedCourseId) {
      newErrors.selectedCourseId = 'Please select a course.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const chosenCourse = ALL_COURSES.find((c) => c.id === selectedCourseId) || ALL_COURSES[0];
    const tokenNumber = `BCA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newApplication: AdmissionApplication = {
      id: `app_${Date.now()}`,
      studentName: studentName.trim(),
      fatherName: fatherName.trim(),
      phone: phone.trim(),
      email: email.trim() || undefined,
      address: address.trim(),
      educationLevel,
      selectedCourseId,
      selectedCourseTitle: chosenCourse.title,
      shift,
      notes: notes.trim() || undefined,
      submittedAt: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      status: 'Pending Verification',
      tokenNumber
    };

    setTimeout(() => {
      // Save to local storage
      const updated = [newApplication, ...savedApplications];
      setSavedApplications(updated);
      try {
        localStorage.setItem('bca_applications', JSON.stringify(updated));
      } catch {
        // ignore
      }

      setGeneratedApplication(newApplication);
      setIsSubmitting(false);

      // Reset form fields
      setStudentName('');
      setFatherName('');
      setPhone('');
      setEmail('');
      setAddress('');
      setNotes('');
      if (onClearPreSelectedCourse) onClearPreSelectedCourse();
    }, 400);
  };

  const handleDeleteSaved = (id: string) => {
    const updated = savedApplications.filter((a) => a.id !== id);
    setSavedApplications(updated);
    try {
      localStorage.setItem('bca_applications', JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  return (
    <section id="admission" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Online Registration Desk
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Apply for Admission Online
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed text-balance">
            Fill in the applicant details below to generate your official Admission Verification Token. You can download your admission voucher or submit it directly to our admissions office via WhatsApp.
          </p>

          {/* Local Application History Toggle */}
          {savedApplications.length > 0 && (
            <div className="mt-4 inline-flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowHistory(!showHistory)}
                className="text-xs font-semibold text-blue-300 hover:text-blue-200 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <History className="w-3.5 h-3.5" />
                <span>
                  {showHistory ? 'Hide Saved Slips' : `View My Generated Slips (${savedApplications.length})`}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Saved Applications Drawer / Accordion */}
        {showHistory && savedApplications.length > 0 && (
          <div className="mt-8 max-w-4xl mx-auto bg-slate-800/90 rounded-2xl border border-slate-700 p-6 animate-in fade-in duration-200">
            <h3 className="font-bold text-sm text-white mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>Previously Generated Admission Tokens (Saved on Device)</span>
            </h3>
            <div className="space-y-3">
              {savedApplications.map((app) => (
                <div
                  key={app.id}
                  className="bg-slate-900/90 p-4 rounded-xl border border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs"
                >
                  <div>
                    <span className="font-mono font-bold text-blue-400 text-sm">{app.tokenNumber}</span>
                    <span className="text-slate-400 mx-2">·</span>
                    <span className="font-semibold text-white">{app.studentName}</span>
                    <span className="text-slate-400 mx-2">·</span>
                    <span className="text-slate-300">{app.selectedCourseTitle} ({app.shift} Shift)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setGeneratedApplication(app)}
                      className="px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
                    >
                      View / Print Slip
                    </button>
                    <button
                      onClick={() => handleDeleteSaved(app.id)}
                      className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Remove record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Admission Form Card */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-950/80 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-sm">
          
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Row 1: Student Name & Father Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Student Full Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => {
                      setStudentName(e.target.value);
                      if (errors.studentName) setErrors({ ...errors, studentName: '' });
                    }}
                    placeholder="e.g. Muhammad Hamza / Ayesha Khan"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-900 border ${
                      errors.studentName ? 'border-rose-500' : 'border-slate-700'
                    } rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                {errors.studentName && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.studentName}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Father / Guardian Name <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={fatherName}
                    onChange={(e) => {
                      setFatherName(e.target.value);
                      if (errors.fatherName) setErrors({ ...errors, fatherName: '' });
                    }}
                    placeholder="e.g. Tariq Mehmood"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-900 border ${
                      errors.fatherName ? 'border-rose-500' : 'border-slate-700'
                    } rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                {errors.fatherName && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fatherName}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Contact Phone / WhatsApp <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="e.g. 0300-1234567 or (555) 019-2834"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-900 border ${
                      errors.phone ? 'border-rose-500' : 'border-slate-700'
                    } rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Email Address <span className="text-slate-500">(Optional)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@example.com"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Row 3: Education Level & Course Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Current Education Level <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <select
                    value={educationLevel}
                    onChange={(e) => setEducationLevel(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer"
                  >
                    <option value="Middle School (Grade 6-8)">Middle School (Grade 6–8)</option>
                    <option value="Matric / 9th & 10th (SSC)">Matric / 9th &amp; 10th (SSC)</option>
                    <option value="Intermediate / FSc / ICS / I.Com">Intermediate / FSc / ICS / I.Com</option>
                    <option value="Cambridge O/A Levels">Cambridge O/A Levels</option>
                    <option value="Bachelor's / University Degree">Bachelor&apos;s / University Degree</option>
                    <option value="Working Professional / Other">Working Professional / Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Select Course / Subject <span className="text-rose-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <select
                    value={selectedCourseId}
                    onChange={(e) => {
                      setSelectedCourseId(e.target.value);
                      if (errors.selectedCourseId) setErrors({ ...errors, selectedCourseId: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-slate-900 border ${
                      errors.selectedCourseId ? 'border-rose-500' : 'border-slate-700'
                    } rounded-xl text-xs sm:text-sm text-white focus:outline-hidden focus:ring-2 focus:ring-blue-500 cursor-pointer`}
                  >
                    <optgroup label="Artificial Intelligence (AI)">
                      {ALL_COURSES.filter((c) => c.category === 'ai').map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title} ({c.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Computer &amp; Office Skills">
                      {ALL_COURSES.filter((c) => c.category === 'computer').map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title} ({c.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Academic Tuition Subjects">
                      {ALL_COURSES.filter((c) => c.category === 'tuition').map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.title} (Tuition Session)
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>

            {/* Row 4: Preferred Shift / Batch Timings */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Preferred Shift Timing <span className="text-rose-400">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { id: 'Morning', label: 'Morning', hours: '9:00 AM - 12:00 PM' },
                  { id: 'Afternoon', label: 'Afternoon', hours: '2:30 PM - 5:00 PM' },
                  { id: 'Evening', label: 'Evening', hours: '5:00 PM - 8:30 PM' },
                  { id: 'Weekend', label: 'Weekend', hours: 'Sat & Sun Batches' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setShift(s.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      shift === s.id
                        ? 'bg-blue-600/30 border-blue-500 text-white shadow-xs'
                        : 'bg-slate-900 border-slate-700/80 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span className="font-bold text-xs block text-white">{s.label}</span>
                    <span className="text-[10px] text-slate-400 block mt-0.5">{s.hours}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Row 5: Residential Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Residential Street Address &amp; Area <span className="text-rose-400">*</span>
              </label>
              <div className="relative">
                <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <textarea
                  rows={2}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    if (errors.address) setErrors({ ...errors, address: '' });
                  }}
                  placeholder="House/Apartment #, Street, Near landmark, City area..."
                  className={`w-full pl-10 pr-4 py-2.5 bg-slate-900 border ${
                    errors.address ? 'border-rose-500' : 'border-slate-700'
                  } rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              {errors.address && (
                <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.address}</span>
                </p>
              )}
            </div>

            {/* Row 6: Remarks or Prior Experience */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Special Remarks or Previous Experience <span className="text-slate-500">(Optional)</span>
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Preparing for Federal Board exams, beginner in computers, sibling enrolled, etc."
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Transparent Backend Disclaimer (Mandatory Requirement) */}
            <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Client-Side Verification &amp; Instant Token Generation</p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Submitting generates an official serialized admission token slip saved locally in your browser. You can print the token or forward it directly to our admissions office on WhatsApp.
                </p>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                <span>Direct inquiries: </span>
                <a href={`tel:${ACADEMY_CONFIG.phone}`} className="text-blue-400 font-bold hover:underline">
                  {ACADEMY_CONFIG.displayPhone}
                </a>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Generating Slip...</span>
                ) : (
                  <>
                    <span>Submit &amp; Generate Admission Slip</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>

      {/* Generated Token Slip Modal */}
      {generatedApplication && (
        <AdmissionSlipModal
          application={generatedApplication}
          onClose={() => setGeneratedApplication(null)}
        />
      )}
    </section>
  );
};
