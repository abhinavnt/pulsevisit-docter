import { useState } from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';

export function ReachedConfirmationScreen({ onVerify }: { onVerify: () => void }) {
  const [otp, setOtp] = useState('');

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] px-6 pt-12 pb-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
          <MapPin className="w-10 h-10 text-[#1FA97A]" />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-2 text-center">You have arrived!</h1>
        <p className="text-slate-500 text-center mb-8">
          Please ask the patient for the 4-digit start OTP to begin the consultation.
        </p>

        <div className="w-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <ShieldCheck className="w-6 h-6 text-[#0F3D73]" />
            <span className="font-semibold text-slate-700">Verify Patient</span>
          </div>
          
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700 text-center block">Enter Start OTP</label>
            <input 
              type="number" 
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] transition-all text-center tracking-[0.5em] font-bold text-2xl"
              placeholder="••••"
              maxLength={4}
            />
          </div>

          <button 
            onClick={onVerify}
            className="w-full bg-[#1FA97A] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#1FA97A]/20 active:scale-[0.98] transition-all"
          >
            Verify & Start Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
