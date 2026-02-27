import { MapPin, Clock, Activity, X } from 'lucide-react';

export function IncomingRequestModal({ onAccept, onReject }: { onAccept: () => void, onReject: () => void }) {
  return (
    <div className="absolute inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end animate-in fade-in duration-200">
      <div className="w-full bg-white rounded-t-[32px] p-6 animate-in slide-in-from-bottom-full duration-300">

        <div className="flex justify-between items-start mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-bold mb-3 animate-pulse">
              <Clock className="w-3.5 h-3.5" /> 00:45 to accept
            </div>
            <h2 className="text-2xl font-bold text-slate-900">New Request</h2>
          </div>
          <button onClick={onReject} className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-100 mb-6">
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-200">
            <div className="w-14 h-14 bg-slate-200 rounded-full overflow-hidden">
              <img src="https://picsum.photos/seed/patient/100/100" className="w-full h-full object-cover" alt="Patient" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900">Michael Roberts</h3>
              <p className="text-slate-500 text-sm">Male, 45 years</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Activity className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Primary Complaint</p>
                <p className="text-sm font-semibold text-slate-900">High fever, severe body ache</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0F3D73] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Location (2.4 km away)</p>
                <p className="text-sm font-semibold text-slate-900">124 Park Avenue, Block C</p>
              </div>
            </div>
            {/* Map thumbnail */}
            <div className="rounded-xl overflow-hidden border border-slate-200 h-24 w-full relative">
              <img src="/map_preview.png" className="w-full h-full object-cover" alt="Map preview" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-7 h-7 bg-[#0F3D73] rounded-full border-2 border-white shadow-md flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8 px-2">
          <p className="text-slate-500 font-medium">Estimated Earnings</p>
          <p className="text-2xl font-bold text-[#1FA97A]">₹85.00</p>
        </div>

        <div className="flex gap-4">
          <button onClick={onReject} className="flex-1 py-4 rounded-xl font-semibold text-slate-700 bg-slate-100 active:scale-[0.98] transition-all">
            Reject
          </button>
          <button onClick={onAccept} className="flex-[2] py-4 rounded-xl font-semibold text-white bg-[#1FA97A] shadow-lg shadow-[#1FA97A]/30 active:scale-[0.98] transition-all">
            Accept Request
          </button>
        </div>

      </div>
    </div>
  );
}
