import { useState, useEffect } from 'react';
import { CreditCard, Clock, CheckCircle2 } from 'lucide-react';

export function WaitingPaymentScreen({ onSuccess, onCancel }: { onSuccess: () => void, onCancel: () => void }) {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isSuccess, setIsSuccess] = useState(false);

  // Timer countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate payment success after 3 seconds for demo purposes
  useEffect(() => {
    const successTimer = setTimeout(() => {
      setIsSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 1500); // Show success state for 1.5s before navigating
    }, 3000);
    return () => clearTimeout(successTimer);
  }, [onSuccess]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] px-6 pt-12 pb-8 items-center justify-center text-center">
      {!isSuccess ? (
        <>
          <div className="relative w-24 h-24 mb-8">
            <div className="absolute inset-0 border-4 border-slate-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#0F3D73] rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-[#0F3D73]" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Waiting for Payment</h1>
          <p className="text-slate-500 leading-relaxed mb-8">
            Please wait while the patient completes the payment process. Do not close this screen.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-4 py-2 rounded-full font-bold">
            <Clock className="w-4 h-4" />
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </div>

          <button onClick={onCancel} className="mt-12 text-sm text-slate-400 underline active:text-slate-600 transition-colors">
            Cancel Request
          </button>
        </>
      ) : (
        <div className="animate-in zoom-in duration-300 flex flex-col items-center">
          <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-[#1FA97A]" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-3">Payment Successful!</h1>
          <p className="text-slate-500 leading-relaxed">
            Starting navigation to patient's location...
          </p>
        </div>
      )}
    </div>
  );
}
