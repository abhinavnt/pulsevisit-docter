import { useState } from 'react';
import { Logo } from '../components/Logo';

export function LoginScreen({ onNext }: { onNext: () => void }) {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  return (
    <div className="flex flex-col h-full px-6 pt-12 pb-8 bg-[#F8FAFC]">
      <div className="flex-1 flex flex-col items-center justify-center">
        <Logo className="mb-12" />
        
        <div className="w-full space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">PulseVisit Provider</h1>
            <p className="text-slate-500">Enter your mobile number to continue</p>
          </div>

          {!otpSent ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Mobile Number</label>
                <div className="flex gap-3">
                  <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 flex items-center text-slate-600 font-medium">
                    +91
                  </div>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] transition-all"
                    placeholder="Enter 10 digit number"
                  />
                </div>
              </div>
              <button 
                onClick={() => setOtpSent(true)}
                className="w-full bg-[#0F3D73] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#0F3D73]/20 active:scale-[0.98] transition-all"
              >
                Send OTP
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Enter OTP</label>
                <input 
                  type="number" 
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] transition-all text-center tracking-[0.5em] font-bold text-xl"
                  placeholder="••••"
                  maxLength={4}
                />
              </div>
              <button 
                onClick={onNext}
                className="w-full bg-[#1FA97A] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#1FA97A]/20 active:scale-[0.98] transition-all"
              >
                Verify & Login
              </button>
              <button 
                onClick={() => setOtpSent(false)}
                className="w-full text-sm text-slate-500 font-medium py-2"
              >
                Change Number
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
