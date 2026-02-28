import { User, Settings, FileText, HelpCircle, LogOut, ChevronRight, ShieldCheck, Award, Star, Zap } from 'lucide-react';

export function ProfileScreen({ onLogout }: { onLogout: () => void }) {
  const MenuItem = ({ icon: Icon, title, subtitle, isDestructive = false, onClick }: any) => (
    <button onClick={onClick} className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-all mb-3">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isDestructive ? 'bg-red-50' : 'bg-slate-50'}`}>
        <Icon className={`w-5 h-5 ${isDestructive ? 'text-red-500' : 'text-slate-600'}`} />
      </div>
      <div className="flex-1 text-left">
        <h4 className={`font-semibold text-sm ${isDestructive ? 'text-red-600' : 'text-slate-900'}`}>{title}</h4>
        {subtitle && <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>}
      </div>
      {!isDestructive && <ChevronRight className="w-5 h-5 text-slate-400" />}
    </button>
  );

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="px-6 pt-12 pb-4 bg-white border-b border-slate-100 shrink-0">
        <h1 className="text-xl font-bold text-slate-900">Profile</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 pb-28">

        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-[#0F3D73]/5"></div>
          <div className="w-24 h-24 bg-white rounded-full p-1 border border-slate-200 shadow-sm mb-3 relative z-10">
            <img src="/doctor_profile.png" className="w-full h-full rounded-full object-cover" alt="Doctor" />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#1FA97A] rounded-full border-2 border-white flex items-center justify-center">
              <ShieldCheck className="w-3 h-3 text-white" />
            </div>
          </div>
          <h2 className="text-xl font-bold text-slate-900">Dr. Sarah Jenkins</h2>
          <p className="text-slate-500 text-sm mb-3">General Physician • 8 Yrs Exp</p>
          <div className="bg-emerald-50 text-[#1FA97A] px-3 py-1 rounded-full text-xs font-bold">
            Verified Medical Professional
          </div>
        </div>

        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 px-1">Achievements</h3>
        <div className="flex gap-3 overflow-x-auto pb-6 scrollbar-hide px-1">
          <div className="bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 p-3 rounded-2xl min-w-[120px] shrink-0 flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-amber-400/20 rounded-full flex items-center justify-center mb-2">
              <Award className="w-5 h-5 text-amber-600" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">Top 10%</h4>
            <p className="text-[10px] text-slate-600 mt-0.5">City Doctors</p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-blue-50 border border-blue-200 p-3 rounded-2xl min-w-[120px] shrink-0 flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-blue-400/20 rounded-full flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-[#0F3D73]" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">500+</h4>
            <p className="text-[10px] text-slate-600 mt-0.5">Consultations</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 p-3 rounded-2xl min-w-[120px] shrink-0 flex flex-col items-center text-center">
            <div className="w-10 h-10 bg-emerald-400/20 rounded-full flex items-center justify-center mb-2">
              <Zap className="w-5 h-5 text-[#1FA97A]" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm">&lt; 15 min</h4>
            <p className="text-[10px] text-slate-600 mt-0.5">Avg. Response</p>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 px-1">Account</h3>
          <MenuItem icon={User} title="Personal Information" subtitle="Update your details" />
          <MenuItem icon={FileText} title="Documents & KYC" subtitle="Manage uploaded proofs" />

          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 mt-6 px-1">Preferences</h3>
          <MenuItem icon={Settings} title="App Settings" subtitle="Notifications, Language" />
          <MenuItem icon={HelpCircle} title="Help & Support" subtitle="FAQs and Contact" />

          <div className="mt-6">
            <MenuItem icon={LogOut} title="Log Out" isDestructive={true} onClick={onLogout} />
          </div>
        </div>

      </div>
    </div>
  );
}
