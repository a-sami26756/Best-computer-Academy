import React from 'react';
import { X, Printer, CheckCircle, Download, Share2, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import { AdmissionApplication } from '../types';
import { ACADEMY_CONFIG } from '../data/academyConfig';

interface AdmissionSlipModalProps {
  application: AdmissionApplication | null;
  onClose: () => void;
}

export const AdmissionSlipModal: React.FC<AdmissionSlipModalProps> = ({
  application,
  onClose
}) => {
  if (!application) return null;

  const handlePrint = () => {
    window.print();
  };

  const getWhatsAppSubmissionUrl = () => {
    const text = encodeURIComponent(
      `*ONLINE ADMISSION APPLICATION - BEST COMPUTER ACADEMY (BCA)*\n\n` +
      `*Token #:* ${application.tokenNumber}\n` +
      `*Student Name:* ${application.studentName}\n` +
      `*Father's Name:* ${application.fatherName}\n` +
      `*Phone:* ${application.phone}\n` +
      `*Course:* ${application.selectedCourseTitle}\n` +
      `*Education Level:* ${application.educationLevel}\n` +
      `*Shift:* ${application.shift}\n` +
      `*Address:* ${application.address}\n` +
      `*Submission Date:* ${application.submittedAt}\n\n` +
      `Please confirm my batch schedule and admission verification.`
    );
    return `https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="bg-slate-900 text-white p-6 pb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-display font-black text-lg">
              BCA
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Official Admission Verification Slip
              </h3>
              <p className="text-xs text-blue-300">
                Token #{application.tokenNumber} · Best Computer Academy
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
            aria-label="Close slip"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Slip Content */}
        <div className="p-6 space-y-5 text-slate-800 text-xs sm:text-sm">
          
          {/* Success Banner */}
          <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-900">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="font-bold">Application Registered Successfully!</p>
              <p className="text-[11px] text-emerald-700">
                Please present this token slip or send it to our WhatsApp desk to confirm your seat.
              </p>
            </div>
          </div>

          {/* Key Student Details Grid */}
          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/90 grid grid-cols-2 gap-3">
            <div>
              <span className="text-[11px] text-slate-500 block">Student Name</span>
              <span className="font-bold text-slate-900">{application.studentName}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">Father&apos;s Name</span>
              <span className="font-bold text-slate-900">{application.fatherName}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">Phone Contact</span>
              <span className="font-bold text-slate-900">{application.phone}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">Education Level</span>
              <span className="font-bold text-slate-900">{application.educationLevel}</span>
            </div>
            <div className="col-span-2 pt-2 border-t border-slate-200">
              <span className="text-[11px] text-slate-500 block">Selected Course</span>
              <span className="font-bold text-blue-700 text-sm">{application.selectedCourseTitle}</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">Preferred Shift</span>
              <span className="font-semibold text-slate-800">{application.shift} Shift</span>
            </div>
            <div>
              <span className="text-[11px] text-slate-500 block">Registration Date</span>
              <span className="font-semibold text-slate-800">{application.submittedAt}</span>
            </div>
            <div className="col-span-2">
              <span className="text-[11px] text-slate-500 block">Residential Address</span>
              <span className="font-medium text-slate-700">{application.address}</span>
            </div>
          </div>

          {/* Academy Next Steps Instructions */}
          <div className="border border-slate-200 rounded-xl p-3.5 space-y-1.5 text-xs text-slate-600 bg-white">
            <p className="font-bold text-slate-900">Next Steps to Finalize Admission:</p>
            <p>1. Bring 2 passport-sized photographs and a copy of your recent educational marksheet/ID.</p>
            <p>2. Visit the campus during office hours ({ACADEMY_CONFIG.officeHours.weekdays}) or WhatsApp this slip to our desk.</p>
            <p>3. Attend your complimentary orientation class on your scheduled batch start date.</p>
          </div>

          {/* Campus Location Footnote */}
          <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{ACADEMY_CONFIG.address.fullAddress}</span>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2.5">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Admission Slip</span>
          </button>

          <a
            href={getWhatsAppSubmissionUrl()}
            target="_blank"
            rel="noreferrer noopener"
            className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-xs"
          >
            <span>Send to Academy WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
