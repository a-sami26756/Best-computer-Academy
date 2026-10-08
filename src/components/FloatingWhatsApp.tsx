import React, { useState } from 'react';
import { Phone, MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Hi Best Computer Academy, I want to inquire about course admissions.');

  const handleSend = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          
          {/* Header */}
          <div className="bg-emerald-600 p-3.5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                BCA
              </div>
              <div>
                <h4 className="font-bold text-xs">BCA Admission Desk</h4>
                <p className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse"></span>
                  <span>Online · Typically replies in minutes</span>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-emerald-100 hover:text-white hover:bg-emerald-700/50"
              aria-label="Close chat bubble"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-xl rounded-tl-xs border border-slate-200/80 text-xs text-slate-700 shadow-2xs">
              <p>Hello! Welcome to <strong>{ACADEMY_CONFIG.name}</strong>.</p>
              <p className="mt-1 text-[11px] text-slate-500">
                How can we assist you today? You can ask about course fees, class timings, or online admission.
              </p>
            </div>

            {/* Quick Prompts */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                'Course fee details?',
                'Computer batch timings?',
                'Tuition subjects?',
                'Trial class registration?'
              ].map((prompt, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setMessage(`Hello, I'd like to ask: ${prompt}`)}
                  className="text-[10px] bg-white border border-slate-200 text-slate-700 hover:bg-emerald-50 hover:border-emerald-300 px-2 py-1 rounded-md transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input & Send */}
            <div className="pt-2">
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2.5 bg-white border border-slate-300 rounded-xl text-xs text-slate-800 focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
              />
              <button
                onClick={handleSend}
                className="mt-2 w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
              >
                <span>Start WhatsApp Chat</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Call Fallback */}
          <div className="p-2.5 bg-slate-100 border-t border-slate-200 text-center">
            <a
              href={`tel:${ACADEMY_CONFIG.phone}`}
              className="text-[11px] text-blue-600 font-bold hover:underline inline-flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>Or Call Direct: {ACADEMY_CONFIG.displayPhone}</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Buttons Bar */}
      <div className="flex items-center gap-2">
        
        {/* Clickable Phone Quick Button */}
        <a
          href={`tel:${ACADEMY_CONFIG.phone}`}
          className="w-11 h-11 rounded-full bg-slate-900 hover:bg-blue-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 border border-slate-700"
          title={`Call Academy: ${ACADEMY_CONFIG.displayPhone}`}
          aria-label="Call Academy phone"
        >
          <Phone className="w-5 h-5 text-blue-300" />
        </a>

        {/* Floating WhatsApp Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative px-3.5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95 group focus:outline-hidden"
          aria-label="Open WhatsApp admission chat"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
          <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
          <span className="text-xs font-bold hidden sm:inline whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </button>

      </div>

    </div>
  );
};
