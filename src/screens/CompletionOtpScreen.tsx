import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export function CompletionOtpScreen({ onComplete }: { onComplete: () => void }) {
  const [otp, setOtp] = useState('');

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] px-6 pt-12 pb-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#0F3D73]" />
        </div>
        
        <h1 className="text-2xl font-bold text-slate-900 mb-2 text-center">Consultation Complete</h1>
        <p className="text-slate-500 text-center mb-8">
          Prescription uploaded. Ask the patient for the End OTP to close this session and receive payment.
        </p>

        <div className="w-full bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-medium text-slate-700 text-center block">Enter End OTP</label>
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
            onClick={onComplete}
            className="w-full bg-[#0F3D73] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#0F3D73]/20 active:scale-[0.98] transition-all"
          >
            End Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
