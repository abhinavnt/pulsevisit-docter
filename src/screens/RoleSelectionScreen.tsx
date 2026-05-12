import { Stethoscope, HeartPulse, ChevronRight } from 'lucide-react';
import { Logo } from '../components/Logo';

export type ProviderRole = 'doctor' | 'nurse';

export function RoleSelectionScreen({ onSelect }: { onSelect: (role: ProviderRole) => void }) {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] px-6 pt-10 pb-8">
      <div className="flex-1 flex flex-col justify-center">
        <Logo className="mb-10 self-center" />

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Choose Your Role</h1>
          <p className="text-slate-500 text-sm mt-2">
            Continue as a doctor or nurse in the PulseVisit provider app.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => onSelect('doctor')}
            className="w-full bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex items-center gap-4 text-left active:scale-[0.98] transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <Stethoscope className="w-6 h-6 text-[#0F3D73]" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-slate-900">Doctor</h2>
              <p className="text-xs text-slate-500 mt-1">Consultations, prescriptions and doctor payouts</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>

          <button
            onClick={() => onSelect('nurse')}
            className="w-full bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex items-center gap-4 text-left active:scale-[0.98] transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
              <HeartPulse className="w-6 h-6 text-[#1FA97A]" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-slate-900">Nurse</h2>
              <p className="text-xs text-slate-500 mt-1">Home visits, care plans, reports and earnings</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
