import { useState } from 'react';
import { X, Check, FileText, ZapIcon } from 'lucide-react';

export function PrescriptionUploadScreen({ onSubmit }: { onSubmit: () => void }) {
  const [captured, setCaptured] = useState(false);

  return (
    <div className="flex flex-col h-full bg-black">
      {!captured ? (
        <>
          <div className="px-6 pt-8 pb-4 flex justify-between items-center text-white z-10">
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <X className="w-5 h-5" />
            </button>
            <span className="font-medium">Scan Prescription</span>
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <ZapIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Camera viewfinder with prescription showing through */}
          <div className="flex-1 relative flex items-center justify-center px-6">
            {/* Darkened overlay outside the frame */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="w-full aspect-[3/4] relative z-10">
              {/* Prescription document visible through viewfinder */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="/prescription_sample.png"
                  className="w-full h-full object-cover opacity-75"
                  alt="Prescription being scanned"
                />
              </div>
              {/* Scanning line animation */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div
                  className="absolute left-0 right-0 h-0.5 bg-[#1FA97A] shadow-[0_0_8px_2px_rgba(31,169,122,0.7)]"
                  style={{ animation: 'scan 2s linear infinite', top: '30%' }}
                />
              </div>
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#1FA97A] rounded-tl-xl -mt-1 -ml-1"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#1FA97A] rounded-tr-xl -mt-1 -mr-1"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#1FA97A] rounded-bl-xl -mb-1 -ml-1"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#1FA97A] rounded-br-xl -mb-1 -mr-1"></div>
            </div>
          </div>

          <p className="text-white/60 text-xs text-center mt-3 px-8">
            Align the prescription within the frame and tap capture
          </p>

          <div className="pb-10 pt-6 flex justify-center items-center">
            <button
              onClick={() => setCaptured(true)}
              className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center active:scale-95 transition-transform"
            >
              <div className="w-16 h-16 bg-white rounded-full"></div>
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col h-full bg-[#F8FAFC]">
          <div className="px-6 pt-8 pb-4 bg-white border-b border-slate-100 flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-900">Preview</h1>
            <button onClick={() => setCaptured(false)} className="text-sm text-[#0F3D73] font-medium">Retake</button>
          </div>

          <div className="flex-1 p-6 flex flex-col gap-4">
            {/* Prescription preview */}
            <div className="w-full flex-1 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden relative">
              <img
                src="/prescription_sample.png"
                className="w-full h-full object-cover"
                alt="Prescription"
              />
              {/* Verified badge overlay */}
              <div className="absolute top-3 right-3 bg-[#1FA97A] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <Check className="w-3.5 h-3.5" /> Captured
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
              <p className="text-xs text-amber-800 leading-relaxed">
                📋 Ensure all medications, dosages, and your signature are clearly visible before submitting.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <button onClick={onSubmit} className="w-full bg-[#1FA97A] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#1FA97A]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
              <Check className="w-5 h-5" /> Submit Prescription
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scan {
          0% { top: 5%; }
          50% { top: 90%; }
          100% { top: 5%; }
        }
      `}</style>
    </div>
  );
}

