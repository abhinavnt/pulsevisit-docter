import { UploadCloud, Camera, Building2, CreditCard } from 'lucide-react';

export function KycScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="px-6 pt-12 pb-4 bg-white border-b border-slate-100 mt-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 flex-1 bg-[#1FA97A] rounded-full"></div>
          <div className="h-2 flex-1 bg-[#1FA97A] rounded-full"></div>
          <div className="h-2 flex-1 bg-[#0F3D73] rounded-full"></div>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">KYC & Banking</h1>
        <p className="text-slate-500 text-sm mt-1">Step 3 of 3: Identity & Payouts</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        
        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Building2 className="w-4 h-4 text-slate-400" /> Bank Details
          </h2>
          <div className="space-y-3">
            <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] text-sm" placeholder="Account Holder Name" />
            <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] text-sm" placeholder="Account Number" />
            <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] text-sm" placeholder="IFSC Code" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-slate-400" /> Identity
          </h2>
          
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 text-sm">PAN Card</h3>
              <p className="text-xs text-slate-500 mt-0.5">Upload front side</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 shrink-0">
              <UploadCloud className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-slate-900 text-sm">Live Selfie</h3>
              <p className="text-xs text-slate-500 mt-0.5">Take a clear photo now</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-200 shrink-0">
              <Camera className="w-5 h-5 text-[#0F3D73]" />
            </button>
          </div>
        </div>

      </div>

      <div className="p-6 bg-white border-t border-slate-100 pb-12">
        <button onClick={onNext} className="w-full bg-[#1FA97A] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#1FA97A]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          Submit Application
        </button>
      </div>
    </div>
  );
}
