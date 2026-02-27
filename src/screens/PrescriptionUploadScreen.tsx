import { useState } from 'react';
import { X, Check, FileText } from 'lucide-react';

export function PrescriptionUploadScreen({ onSubmit }: { onSubmit: () => void }) {
  const [captured, setCaptured] = useState(false);

  return (
    <div className="flex flex-col h-full bg-black">
      {!captured ? (
        <>
          <div className="px-6 pt-12 pb-4 flex justify-between items-center text-white z-10">
            <button className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
              <X className="w-5 h-5" />
            </button>
            <span className="font-medium">Scan Prescription</span>
            <div className="w-10"></div>
          </div>

          <div className="flex-1 relative flex items-center justify-center px-6">
            {/* Camera Viewfinder Frame */}
            <div className="w-full aspect-[3/4] border-2 border-white/50 rounded-2xl relative">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[#1FA97A] rounded-tl-xl -mt-1 -ml-1"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[#1FA97A] rounded-tr-xl -mt-1 -mr-1"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[#1FA97A] rounded-bl-xl -mb-1 -ml-1"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[#1FA97A] rounded-br-xl -mb-1 -mr-1"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <FileText className="w-16 h-16 text-white/30" />
              </div>
            </div>
          </div>

          <div className="pb-16 pt-8 flex justify-center items-center">
            <button 
              onClick={() => setCaptured(true)}
              className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center"
            >
              <div className="w-16 h-16 bg-white rounded-full active:scale-90 transition-transform"></div>
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col h-full bg-[#F8FAFC]">
          <div className="px-6 pt-12 pb-4 bg-white border-b border-slate-100 flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-900">Preview</h1>
            <button onClick={() => setCaptured(false)} className="text-sm text-[#0F3D73] font-medium">Retake</button>
          </div>
          
          <div className="flex-1 p-6 flex flex-col items-center justify-center">
            <div className="w-full aspect-[3/4] bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden relative">
               <img src="https://picsum.photos/seed/prescription/600/800" className="w-full h-full object-cover grayscale opacity-80" alt="Prescription" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-[#1FA97A]/10 mix-blend-multiply"></div>
            </div>
          </div>

          <div className="p-6 bg-white border-t border-slate-100 pb-12">
            <button onClick={onSubmit} className="w-full bg-[#1FA97A] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#1FA97A]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
              <Check className="w-5 h-5" /> Submit Prescription
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
