import { Activity, FileText, CheckCircle2 } from 'lucide-react';

export function ConsultationOngoingScreen({ onUploadPrescription }: { onUploadPrescription: () => void }) {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="bg-[#0F3D73] px-6 pt-12 pb-8 rounded-b-[32px] text-white shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-xs font-semibold tracking-wider uppercase">Live</span>
          </div>
          <div className="text-xl font-mono font-bold">14:23</div>
        </div>

        <h1 className="text-2xl font-bold mb-1">Consultation Ongoing</h1>
        <p className="text-blue-200 text-sm">Patient: Michael Roberts</p>
      </div>

      <div className="flex-1 px-6 py-8 space-y-8">

        {/* Timeline */}
        <div className="relative pl-6 space-y-8 before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#1FA97A] before:via-slate-200 before:to-transparent">

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-[#1FA97A] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-[27px]">
              <CheckCircle2 className="w-3 h-3" />
            </div>
            <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-slate-900 text-sm">Arrived & Verified</h4>
                <span className="text-xs text-slate-400">10:00 AM</span>
              </div>
              <p className="text-xs text-slate-500">OTP verified successfully.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-blue-100 text-[#0F3D73] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-[27px]">
              <Activity className="w-3 h-3" />
            </div>
            <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-[#0F3D73] ring-1 ring-[#0F3D73]/10">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-bold text-[#0F3D73] text-sm">Examination</h4>
                <span className="text-xs text-[#0F3D73] font-medium">In Progress</span>
              </div>
              <p className="text-xs text-slate-500">Record vitals and examine patient.</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active opacity-50">
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-slate-200 text-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute -left-[27px]">
              <FileText className="w-3 h-3" />
            </div>
            <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-slate-100">
              <h4 className="font-bold text-slate-900 text-sm">Prescription</h4>
              <p className="text-xs text-slate-500">Upload handwritten prescription.</p>
            </div>
          </div>

        </div>

      </div>

      <div className="p-6 bg-white border-t border-slate-100">
        <button onClick={onUploadPrescription} className="w-full bg-[#0F3D73] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#0F3D73]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          <FileText className="w-5 h-5" /> Upload Prescription
        </button>
      </div>
    </div>
  );
}
