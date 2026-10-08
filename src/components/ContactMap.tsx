import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  ExternalLink, 
  MessageSquare, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyConfig';

export const ContactMap: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim()) return;

    // Direct WhatsApp bridge or client acknowledgement
    const text = encodeURIComponent(
      `*GENERAL ACADEMY INQUIRY*\nName: ${inquiryName}\nPhone: ${inquiryPhone}\nMessage: ${inquiryMessage || 'Inquiring about courses & admission'}`
    );
    window.open(`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Visit Our Campus &amp; Connect
          </span>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Academy Address &amp; Contact Desk
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-balance">
            Our campus is conveniently located with dedicated modern computer labs, air-conditioned tuition classrooms, and an active admissions counter.
          </p>
        </div>

        {/* 3-Column Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Phone & WhatsApp */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Phone &amp; WhatsApp</h3>
              <p className="text-xs text-slate-500 mt-1">Direct admission hotline and instant chat desk</p>

              <div className="mt-4 space-y-2.5">
                <div>
                  <span className="text-[11px] text-slate-400 block">Telephone Hotline:</span>
                  <a
                    href={`tel:${ACADEMY_CONFIG.phone}`}
                    className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors"
                  >
                    {ACADEMY_CONFIG.displayPhone}
                  </a>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Official WhatsApp Desk:</span>
                  <a
                    href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Hello%20Best%20Computer%20Academy`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
                  >
                    <span>{ACADEMY_CONFIG.displayWhatsapp}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Direct voice response Monday to Saturday
            </div>
          </div>

          {/* Card 2: Campus Location */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Campus Location</h3>
              <p className="text-xs text-slate-500 mt-1">Main educational branch</p>

              <div className="mt-4 space-y-2 text-xs text-slate-700">
                <p className="font-semibold text-slate-900 leading-snug">
                  {ACADEMY_CONFIG.address.street}
                </p>
                <p className="text-slate-600">
                  {ACADEMY_CONFIG.address.area}, {ACADEMY_CONFIG.address.city}
                </p>
                <p className="text-slate-500 italic pt-1">
                  Landmark: {ACADEMY_CONFIG.address.landmark}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <a
                href={ACADEMY_CONFIG.address.googleMapsDirectionUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Card 3: Office & Lab Hours */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">Office &amp; Lab Timings</h3>
              <p className="text-xs text-slate-500 mt-1">Open 6 days a week for batches and inquiries</p>

              <div className="mt-4 space-y-3 text-xs">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Weekdays (Mon - Sat):</span>
                  <span className="font-semibold text-slate-800 text-sm">
                    8:00 AM – 9:00 PM
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block uppercase">Sundays:</span>
                  <span className="font-semibold text-slate-800">
                    {ACADEMY_CONFIG.officeHours.sunday}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Open for Walk-in Visits</span>
              </span>
            </div>
          </div>

        </div>

        {/* Map & Quick Inquiry Split Section */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Google Maps Embed Container */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-3 shadow-xs flex flex-col min-h-[380px]">
            <div className="px-3 py-2 flex items-center justify-between border-b border-slate-100 mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-bold text-slate-800">BCA Campus Map View</span>
              </div>
              <a
                href={ACADEMY_CONFIG.address.googleMapsDirectionUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[11px] font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>Open Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Responsive Map */}
            <div className="relative flex-1 rounded-xl overflow-hidden bg-slate-100 min-h-[300px]">
              <iframe
                title="Best Computer Academy Campus Location"
                src={ACADEMY_CONFIG.address.googleMapsEmbedUrl}
                className="w-full h-full border-0 absolute inset-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Quick Instant Inquiry Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                <MessageSquare className="w-4 h-4" />
                <span>Quick Message</span>
              </div>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Ask a Question or Request Call
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Have questions regarding syllabus, batch timings, or fee concession? Leave a message.
              </p>

              {submitted ? (
                <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-2">
                  <p className="font-bold">Thank you for contacting us!</p>
                  <p>Our counselor has received your note and will reach out shortly.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-emerald-700 underline mt-2"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="mt-5 space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="e.g. Asad Ullah"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={inquiryPhone}
                      onChange={(e) => setInquiryPhone(e.target.value)}
                      placeholder="e.g. 0300-9876543"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Question / Subject</label>
                    <textarea
                      rows={2}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder="e.g. Which timing is available for Web Development or 10th Math?"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Connect with Counselor on WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400">
              No registration fees for inquiries or counseling sessions.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
