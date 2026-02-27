import { ArrowLeft, Calendar, AlertCircle } from 'lucide-react';

export function PayoutRequestScreen({ onBack, onConfirm }: { onBack: () => void, onConfirm: () => void }) {
  // Mocking that today is not Monday
  const isMonday = false;

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="px-6 pt-12 pb-4 flex items-center gap-4 bg-white border-b border-slate-100">
        <button onClick={onBack} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
          <ArrowLeft className="w-5 h-5 text-slate-700" />
        </button>
        <h1 className="text-xl font-bold text-slate-900">Request Payout</h1>
      </div>

      <div className="flex-1 px-6 py-6 space-y-6">
        
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center">
          <p className="text-slate-500 text-sm font-medium mb-1">Eligible Amount</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">₹1,250.00</h2>
          
          <div className="bg-slate-50 rounded-xl p-4 flex items-start gap-3 text-left">
            <Calendar className="w-5 h-5 text-[#0F3D73] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">Next Payout Window</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Payouts can only be requested on Mondays between 9:00 AM and 5:00 PM.
              </p>
            </div>
          </div>
        </div>

        {!isMonday && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              Payout requests are currently disabled. Please check back on Monday to request your payout.
            </p>
          </div>
        )}

      </div>

      <div className="p-6 bg-white border-t border-slate-100 pb-12">
        <button 
          onClick={onConfirm} 
          disabled={!isMonday}
          className={`w-full rounded-xl py-4 font-semibold shadow-lg flex items-center justify-center gap-2 transition-all ${
            isMonday 
              ? 'bg-[#0F3D73] text-white shadow-[#0F3D73]/20 active:scale-[0.98]' 
              : 'bg-slate-200 text-slate-400 shadow-none cursor-not-allowed'
          }`}
        >
          Submit Request
        </button>
      </div>
    </div>
  );
}
