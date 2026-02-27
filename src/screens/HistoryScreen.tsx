import { Clock, MapPin, CheckCircle2, XCircle, FileText } from 'lucide-react';

export function HistoryScreen() {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="px-6 pt-12 pb-4 bg-white border-b border-slate-100 shrink-0">
        <h1 className="text-xl font-bold text-slate-900">Consultation History</h1>
      </div>
      
      <div className="flex-1 overflow-y-auto pb-28 px-6 py-6 space-y-4">
        {/* History Card 1 */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/p1/100/100" className="w-full h-full object-cover" alt="Patient" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Emma Thompson</h4>
                <p className="text-xs text-slate-500">General Checkup</p>
              </div>
            </div>
            <div className="bg-emerald-50 text-[#1FA97A] px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Completed
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl mb-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" /> Today, 09:00 AM
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" /> 1.2 km
            </div>
          </div>
          <button className="w-full py-2.5 bg-slate-100 text-[#0F3D73] rounded-xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
            <FileText className="w-4 h-4" /> View Prescription
          </button>
        </div>

        {/* History Card 2 */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/p4/100/100" className="w-full h-full object-cover" alt="Patient" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Michael Roberts</h4>
                <p className="text-xs text-slate-500">High Fever</p>
              </div>
            </div>
            <div className="bg-emerald-50 text-[#1FA97A] px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Completed
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl mb-3">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" /> Yesterday, 02:45 PM
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" /> 2.4 km
            </div>
          </div>
          <button className="w-full py-2.5 bg-slate-100 text-[#0F3D73] rounded-xl text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
            <FileText className="w-4 h-4" /> View Prescription
          </button>
        </div>

        {/* History Card 3 (Cancelled) */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm opacity-75">
          <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-slate-100 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/p3/100/100" className="w-full h-full object-cover" alt="Patient" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">David Chen</h4>
                <p className="text-xs text-slate-500">Severe Headache</p>
              </div>
            </div>
            <div className="bg-red-50 text-red-600 px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
              <XCircle className="w-3 h-3" /> Cancelled
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" /> Yesterday, 11:15 AM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
