import { useState, type ReactNode } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  Bell,
  BookOpen,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
  HeartPulse,
  HelpCircle,
  IndianRupee,
  Languages,
  MapPin,
  Navigation,
  Phone,
  ShieldCheck,
  UploadCloud,
  User,
  Wallet,
} from 'lucide-react';

type NurseTab = 'home' | 'visits' | 'care' | 'earnings' | 'profile';

const inputClass =
  'w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] text-sm';

function ProgressHeader({ step, total, title, subtitle }: { step: number; total: number; title: string; subtitle: string }) {
  return (
    <div className="px-6 pt-8 pb-4 bg-white border-b border-slate-100">
      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: total }).map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded-full ${index + 1 < step ? 'bg-[#1FA97A]' : index + 1 === step ? 'bg-[#0F3D73]' : 'bg-slate-100'}`}
          />
        ))}
      </div>
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
      <p className="text-slate-500 text-sm mt-1">{subtitle}</p>
    </div>
  );
}

function PrimaryButton({ children, onClick, tone = 'primary' }: { children: ReactNode; onClick?: () => void; tone?: 'primary' | 'success' | 'danger' }) {
  const toneClass =
    tone === 'success'
      ? 'bg-[#1FA97A] shadow-[#1FA97A]/20'
      : tone === 'danger'
        ? 'bg-red-600 shadow-red-600/20'
        : 'bg-[#0F3D73] shadow-[#0F3D73]/20';

  return (
    <button
      onClick={onClick}
      className={`w-full ${toneClass} text-white rounded-xl py-4 font-semibold shadow-lg flex items-center justify-center gap-2 active:scale-[0.98] transition-all`}
    >
      {children}
    </button>
  );
}

function UploadRow({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
      <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
        <FileText className="w-5 h-5 text-[#0F3D73]" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
        <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
      </div>
      <button className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-200 shrink-0">
        <UploadCloud className="w-5 h-5 text-slate-600" />
      </button>
    </div>
  );
}

function CheckboxPill({ label, checked = false }: { label: string; checked?: boolean }) {
  return (
    <label className={`flex items-center gap-2 rounded-xl border px-3 py-3 text-sm font-medium ${checked ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-white border-slate-200 text-slate-700'}`}>
      <input type="checkbox" defaultChecked={checked} className="accent-[#1FA97A]" />
      <span>{label}</span>
    </label>
  );
}

export function NurseRegistrationScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col min-h-full bg-[#F8FAFC]">
      <ProgressHeader step={1} total={4} title="Join PulseVisit as a Nurse" subtitle="Register for home-care visits, elderly care and follow-up tasks." />
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <div className="flex justify-center pb-2">
          <div className="relative">
            <div className="w-24 h-24 bg-slate-100 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
              <Camera className="w-8 h-8 text-slate-400" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#0F3D73] rounded-full flex items-center justify-center border-2 border-white">
              <span className="text-white text-lg leading-none">+</span>
            </div>
          </div>
        </div>
        <input className={inputClass} placeholder="Full name" />
        <div className="flex gap-3">
          <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-600 font-medium">+91</div>
          <input className={inputClass} placeholder="Mobile number" type="tel" />
        </div>
        <input className={inputClass} placeholder="WhatsApp number" type="tel" />
        <input className={inputClass} placeholder="Email" type="email" />
        <div className="grid grid-cols-2 gap-3">
          <select className={inputClass} defaultValue="">
            <option value="" disabled>Gender</option>
            <option>Female</option>
            <option>Male</option>
            <option>Other</option>
          </select>
          <input className={inputClass} placeholder="Age" type="number" />
        </div>
        <input className={inputClass} placeholder="City" />
        <input className={inputClass} placeholder="Service area / preferred zone" />
        <textarea className={`${inputClass} min-h-24 resize-none`} placeholder="Address" />
        <div className="relative">
          <Languages className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input className={`${inputClass} pl-10`} placeholder="Preferred language" defaultValue="Hindi, English" />
        </div>
      </div>
      <div className="p-6 bg-white border-t border-slate-100">
        <PrimaryButton onClick={onNext}>Continue <ChevronRight className="w-5 h-5" /></PrimaryButton>
      </div>
    </div>
  );
}

export function NurseQualificationScreen({ onNext }: { onNext: () => void }) {
  const qualifications = ['ANM', 'GNM', 'B.Sc Nursing', 'Post Basic B.Sc Nursing', 'M.Sc Nursing'];
  return (
    <div className="flex flex-col min-h-full bg-[#F8FAFC]">
      <ProgressHeader step={2} total={4} title="Qualification Details" subtitle="Your qualification helps us assign suitable and safe home-care work." />
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
        <div className="grid grid-cols-1 gap-3">
          {qualifications.map((item, index) => (
            <div key={item}>
              <CheckboxPill label={item} checked={index === 1} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-3">
          <CheckboxPill label="ICU / emergency / ward experience" checked />
          <CheckboxPill label="Home-care experience" checked />
        </div>
        <input className={inputClass} placeholder="Total years of experience" type="number" />
        <input className={inputClass} placeholder="Current workplace, if any" />
        <input className={inputClass} placeholder="Nursing council registration number, if applicable" />
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
          <p className="text-xs text-[#0F3D73] leading-relaxed">PulseVisit will approve skills separately before assigning visits.</p>
        </div>
      </div>
      <div className="p-6 bg-white border-t border-slate-100">
        <PrimaryButton onClick={onNext}>Continue <ChevronRight className="w-5 h-5" /></PrimaryButton>
      </div>
    </div>
  );
}

export function NurseDocumentUploadScreen({ onNext }: { onNext: () => void }) {
  const docs = [
    ['Aadhaar / ID proof', 'Government ID copy'],
    ['Nursing qualification certificate', 'ANM, GNM, B.Sc or higher'],
    ['Nursing council registration', 'If available'],
    ['Experience certificate', 'If available'],
    ['Recent photo', 'Clear front-facing photo'],
    ['Address proof', 'Current address proof'],
    ['Police verification', 'If available'],
    ['Bank account details', 'For payout setup'],
    ['PAN card', 'Required for payment records'],
    ['Cancelled cheque / bank proof', 'Account verification'],
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#F8FAFC]">
      <ProgressHeader step={3} total={4} title="Upload Documents" subtitle="Submit readable documents for PulseVisit verification." />
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
        {docs.map(([title, subtitle]) => (
          <div key={title}>
            <UploadRow title={title} subtitle={subtitle} />
          </div>
        ))}
      </div>
      <div className="p-6 bg-white border-t border-slate-100">
        <PrimaryButton onClick={onNext} tone="success">Submit for Verification</PrimaryButton>
      </div>
    </div>
  );
}

export function NurseVerificationStatusScreen({ onNext }: { onNext: () => void }) {
  const statuses: Array<{ label: string; done: boolean }> = [
    { label: 'Application Submitted', done: true },
    { label: 'Documents Under Review', done: true },
    { label: 'Verification Pending', done: false },
    { label: 'Verified Nurse', done: false },
    { label: 'PulseVisit Certified Nurse', done: false },
  ];

  return (
    <div className="flex flex-col h-full bg-white px-6 pt-12 pb-8 items-center justify-center text-center">
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 relative">
        <ShieldCheck className="w-12 h-12 text-[#0F3D73]" />
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center border-4 border-white">
          <Clock className="w-5 h-5 text-amber-600" />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-3">Verification Pending</h1>
      <p className="text-slate-500 leading-relaxed mb-8">
        Your profile is being reviewed by the PulseVisit team. You will receive updates on WhatsApp.
      </p>
      <div className="w-full bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left space-y-3">
        {statuses.map(({ label, done }) => (
          <div key={label} className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${done ? 'bg-[#1FA97A]' : label === 'Verification Pending' ? 'bg-amber-400 animate-pulse' : 'bg-slate-300'}`} />
            <span className={`text-sm font-medium ${done || label === 'Verification Pending' ? 'text-slate-900' : 'text-slate-500'}`}>{label}</span>
          </div>
        ))}
      </div>
      <button onClick={onNext} className="mt-10 text-sm text-slate-400 underline">
        [Dev: Skip to Nurse Dashboard]
      </button>
    </div>
  );
}

export function NurseDashboardScreen({
  activeTab,
  setActiveTab,
  onOpenVisit,
  onOpenSkills,
  onOpenAvailability,
  onOpenTraining,
  onOpenHelp,
  onLogout,
}: {
  activeTab: NurseTab;
  setActiveTab: (tab: NurseTab) => void;
  onOpenVisit: () => void;
  onOpenSkills: () => void;
  onOpenAvailability: () => void;
  onOpenTraining: () => void;
  onOpenHelp: () => void;
  onLogout: () => void;
}) {
  const renderContent = () => {
    if (activeTab === 'visits') return <NurseVisitsTab onOpenVisit={onOpenVisit} />;
    if (activeTab === 'care') return <NurseSubscriptionPatientsScreen compact />;
    if (activeTab === 'earnings') return <NurseEarningsScreen compact />;
    if (activeTab === 'profile') return <NurseProfileTab onOpenSkills={onOpenSkills} onOpenAvailability={onOpenAvailability} onOpenTraining={onOpenTraining} onOpenHelp={onOpenHelp} onLogout={onLogout} />;
    return <NurseHomeTab onOpenVisit={onOpenVisit} onOpenSkills={onOpenSkills} onOpenAvailability={onOpenAvailability} onOpenTraining={onOpenTraining} onOpenHelp={onOpenHelp} onCare={() => setActiveTab('care')} onEarnings={() => setActiveTab('earnings')} />;
  };

  const nav = [
    ['home', Activity, 'Home'],
    ['visits', CalendarDays, 'Visits'],
    ['care', HeartPulse, 'Care'],
    ['earnings', Wallet, 'Earnings'],
    ['profile', User, 'Profile'],
  ] as const;

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="flex-1 overflow-hidden">{renderContent()}</div>
      <div className="shrink-0 bg-white border-t border-slate-100 px-4 py-3 flex justify-between items-center z-40">
        {nav.map(([tab, Icon, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`flex flex-col items-center gap-1 min-w-12 ${activeTab === tab ? 'text-[#0F3D73]' : 'text-slate-400'}`}>
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function NurseHomeTab({ onOpenVisit, onOpenSkills, onOpenAvailability, onOpenTraining, onOpenHelp, onCare, onEarnings }: any) {
  const cards = [
    ['Today’s visits', '3', CalendarDays, 'bg-blue-50 text-[#0F3D73]'],
    ['Subscription patients', '8', HeartPulse, 'bg-emerald-50 text-[#1FA97A]'],
    ['Pending reports', '1', FileText, 'bg-amber-50 text-amber-600'],
    ['Earnings', 'Rs. 2,450', IndianRupee, 'bg-slate-100 text-slate-700'],
  ] as const;

  return (
    <div className="flex flex-col h-full overflow-y-auto pb-4">
      <div className="bg-[#0F3D73] px-6 pt-6 pb-5 rounded-b-[32px] text-white shadow-lg relative overflow-hidden shrink-0">
        <div className="flex justify-between items-center relative z-10 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-full border border-white/20 p-0.5">
              <img src="/doctor_profile.png" className="w-full h-full rounded-full object-cover" alt="Nurse" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">Nurse Anjali Rao</h2>
              <p className="text-blue-200 text-xs flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Verified Nurse
              </p>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0F3D73]" />
          </button>
        </div>
        <div className="bg-white rounded-2xl p-1 flex items-center relative z-10 shadow-inner">
          <button className="flex-1 py-3 rounded-xl text-sm font-semibold text-slate-500">Offline</button>
          <button className="flex-1 py-3 rounded-xl text-sm font-semibold bg-[#1FA97A] text-white shadow-md">Available</button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {cards.map(([label, value, Icon, classes]) => (
            <div key={label} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${classes}`}>
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-slate-500 text-xs font-medium mb-1">{label}</p>
              <h3 className="text-xl font-bold text-slate-900">{value}</h3>
            </div>
          ))}
        </div>

        <div className="bg-red-50 border border-red-100 rounded-2xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-red-900 text-sm">Safety button is always available during visits</h3>
            <p className="text-xs text-red-700 mt-1">Use Alert Care Team for danger signs or patient worsening.</p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Quick Actions</h3>
          <QuickAction icon={CalendarDays} title="View assigned visits" subtitle="Accept, reject or start visit" onClick={onOpenVisit} />
          <QuickAction icon={MapPin} title="Set availability" subtitle="Slots, areas and travel distance" onClick={onOpenAvailability} />
          <QuickAction icon={CheckCircle2} title="Skills offered" subtitle="View approved and pending skills" onClick={onOpenSkills} />
          <QuickAction icon={HeartPulse} title="Subscription patients" subtitle="Care plans and next visits" onClick={onCare} />
          <QuickAction icon={Wallet} title="View earnings" subtitle="Payout status and visit payments" onClick={onEarnings} />
          <QuickAction icon={BookOpen} title="Training status" subtitle="PulseVisit Nurse Certification" onClick={onOpenTraining} />
          <QuickAction icon={HelpCircle} title="Contact care team" subtitle="Call support for visit issues" onClick={onOpenHelp} />
        </div>
      </div>
    </div>
  );
}

function QuickAction({ icon: Icon, title, subtitle, onClick }: any) {
  return (
    <button onClick={onClick} className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-all">
      <div className="w-11 h-11 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-slate-600" />
      </div>
      <div className="flex-1 text-left">
        <h4 className="font-semibold text-slate-900 text-sm">{title}</h4>
        <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
      </div>
      <ChevronRight className="w-5 h-5 text-slate-400" />
    </button>
  );
}

function NurseVisitsTab({ onOpenVisit }: { onOpenVisit: () => void }) {
  return (
    <div className="h-full overflow-y-auto px-6 pt-8 pb-24 bg-[#F8FAFC]">
      <h1 className="text-2xl font-bold text-slate-900 mb-1">Assigned Visits</h1>
      <p className="text-sm text-slate-500 mb-5">Review details before accepting any home-care visit.</p>
      <VisitCard onOpenVisit={onOpenVisit} />
      <div className="mt-4 bg-white rounded-2xl border border-slate-100 p-4">
        <p className="text-xs text-slate-500">Upcoming</p>
        <h3 className="font-bold text-slate-900 mt-1">Elderly check-in - Tomorrow, 9:30 AM</h3>
        <p className="text-sm text-slate-500 mt-1">Koramangala, Bengaluru</p>
      </div>
    </div>
  );
}

function VisitCard({ onOpenVisit }: { onOpenVisit: () => void }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
            <Clock className="w-3.5 h-3.5" /> Visit assigned
          </div>
          <h2 className="text-xl font-bold text-slate-900">Mrs. Leela Menon</h2>
          <p className="text-sm text-slate-500">Female, 72 years</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500">Payout</p>
          <p className="font-bold text-[#1FA97A]">Rs. 650</p>
        </div>
      </div>
      <div className="space-y-3 text-sm">
        <InfoRow icon={HeartPulse} label="Service required" value="Elderly care visit + vitals" />
        <InfoRow icon={MapPin} label="Address" value="Indiranagar, Bengaluru" />
        <InfoRow icon={FileText} label="Doctor instruction" value="Check BP, SpO2 and medicine adherence" />
      </div>
      <div className="flex gap-3 mt-5">
        <button className="flex-1 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold">Reject</button>
        <button onClick={onOpenVisit} className="flex-[1.4] py-3 rounded-xl bg-[#1FA97A] text-white font-semibold">Accept Visit</button>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }: any) {
  return (
    <div className="flex gap-3">
      <Icon className="w-4 h-4 text-[#0F3D73] mt-0.5 shrink-0" />
      <div>
        <p className="text-xs text-slate-500">{label}</p>
        <p className="font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

export function NurseSkillsScreen({ onBack }: { onBack: () => void }) {
  const skills = [
    ['Vitals check', 'Approved'],
    ['Injection', 'Pending approval'],
    ['Dressing', 'Approved'],
    ['IV cannula', 'Needs training'],
    ['IV fluids', 'Doctor order only'],
    ['Catheter care', 'Pending approval'],
    ['Elderly care', 'Approved'],
    ['Post-operative care', 'Approved'],
    ['Lab sample coordination', 'Approved'],
    ['Long-term home-care visit', 'Approved'],
  ];

  return <SimpleListScreen title="Skills Offered" subtitle="Nurse can only receive tasks approved by admin." onBack={onBack} rows={skills} />;
}

export function NurseAvailabilityScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <ScreenHeader title="Set Availability" onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
        <div className="grid grid-cols-2 gap-3">
          {['Available', 'Busy', 'On Visit', 'Offline', 'On Leave', 'Emergency replacement'].map((item, index) => (
            <div key={item}>
              <CheckboxPill label={item} checked={index === 0} />
            </div>
          ))}
        </div>
        <div className="space-y-3">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Slots</h2>
          {['Morning slot', 'Afternoon slot', 'Evening slot', 'Night slot'].map((item, index) => (
            <div key={item}>
              <CheckboxPill label={item} checked={index < 2} />
            </div>
          ))}
        </div>
        <input className={inputClass} placeholder="Preferred areas" defaultValue="Indiranagar, Domlur, Koramangala" />
        <input className={inputClass} placeholder="Maximum travel distance" defaultValue="8 km" />
        <CheckboxPill label="Own vehicle" checked />
        <CheckboxPill label="Can accept long-term patient" checked />
      </div>
      <div className="p-6 bg-white border-t border-slate-100">
        <PrimaryButton onClick={onBack} tone="success">Save Availability</PrimaryButton>
      </div>
    </div>
  );
}

export function NurseVisitFlowScreen({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const steps = ['Visit Accepted', 'Travel Started', 'Arrived', 'Start Service', 'Record Vitals', 'Complete Task'];

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <ScreenHeader title="Visit Details" onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
        <div className="bg-white rounded-3xl border border-slate-100 p-5">
          <h2 className="text-xl font-bold text-slate-900">Mrs. Leela Menon</h2>
          <p className="text-sm text-slate-500 mt-1">Elderly care visit + vitals</p>
          <div className="mt-4 space-y-3">
            <InfoRow icon={MapPin} label="Address" value="Indiranagar, Bengaluru" />
            <InfoRow icon={Clock} label="Visit time" value="Today, 5:30 PM" />
            <InfoRow icon={Wallet} label="Expected payout" value="Rs. 650" />
          </div>
        </div>

        <AlertCareTeam />

        <div className="bg-white rounded-3xl border border-slate-100 p-5">
          <h3 className="font-bold text-slate-900 mb-4">Nurse visit flow</h3>
          <div className="space-y-3">
            {steps.map((label, index) => (
              <div key={label} className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center ${index <= step ? 'bg-[#1FA97A] text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {index < step ? <CheckCircle2 className="w-4 h-4" /> : <span className="text-xs font-bold">{index + 1}</span>}
                </div>
                <span className={`text-sm font-semibold ${index <= step ? 'text-slate-900' : 'text-slate-400'}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {step >= 2 && (
          <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-3">
            <h3 className="font-bold text-slate-900">Arrival confirmation</h3>
            <CheckboxPill label="Patient identity checked" checked />
            <CheckboxPill label="Consent confirmed" checked />
            <CheckboxPill label="Service explained" checked />
          </div>
        )}

        {step >= 4 && <VitalsForm />}

        {step >= 5 && <TaskCompletionForm />}
      </div>
      <div className="p-6 bg-white border-t border-slate-100">
        {step < steps.length - 1 ? (
          <PrimaryButton onClick={() => setStep(step + 1)}>{step === 0 ? 'Start Journey' : step === 1 ? 'Mark Arrived' : step === 2 ? 'Start Visit' : step === 3 ? 'Record Vitals' : 'Complete Task'}</PrimaryButton>
        ) : (
          <PrimaryButton onClick={onComplete} tone="success">Complete Visit</PrimaryButton>
        )}
      </div>
    </div>
  );
}

function AlertCareTeam() {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-red-50 rounded-2xl border border-red-100 p-4">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center gap-3 text-left">
        <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shrink-0">
          <AlertTriangle className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-red-900">Alert Care Team</h3>
          <p className="text-xs text-red-700">Use for chest pain, low SpO2, severe bleeding or worsening.</p>
        </div>
      </button>
      {open && (
        <div className="mt-4 bg-white rounded-xl p-4 border border-red-100">
          <p className="text-sm font-semibold text-red-900">This may need emergency care.</p>
          <p className="text-xs text-red-700 mt-1">Call PulseVisit care team immediately and advise family to contact emergency services.</p>
        </div>
      )}
    </div>
  );
}

function VitalsForm() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-3">
      <h3 className="font-bold text-slate-900">Record Vitals</h3>
      <div className="grid grid-cols-2 gap-3">
        {['Temperature', 'Pulse', 'BP', 'SpO2', 'Resp. rate', 'RBS'].map((item) => <input key={item} className={inputClass} placeholder={item} />)}
      </div>
      <input className={inputClass} placeholder="Pain score" />
      <textarea className={`${inputClass} min-h-20 resize-none`} placeholder="General condition" />
    </div>
  );
}

function TaskCompletionForm() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-3">
      <h3 className="font-bold text-slate-900">Complete Task</h3>
      {['Vitals checked', 'Medicine reminder done', 'Elderly check-in done', 'Sample coordination done'].map((item) => (
        <div key={item}>
          <CheckboxPill label={item} checked />
        </div>
      ))}
      <textarea className={`${inputClass} min-h-20 resize-none`} placeholder="Procedure note / problem faced" />
      <CheckboxPill label="Follow-up required" />
      <CheckboxPill label="Doctor review required" />
      <CheckboxPill label="Patient feedback collected" checked />
    </div>
  );
}

export function NurseVisitCompletedScreen({ onDone }: { onDone: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white px-6 pt-12 pb-8 items-center justify-center text-center">
      <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8">
        <CheckCircle2 className="w-12 h-12 text-[#1FA97A]" />
      </div>
      <h1 className="text-2xl font-bold text-slate-900 mb-3">Visit Completed</h1>
      <p className="text-slate-500 leading-relaxed mb-8">Report uploaded. Payout is pending approval from PulseVisit.</p>
      <div className="w-full bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left space-y-3 mb-8">
        <InfoRow icon={CheckCircle2} label="Payout status" value="Payout pending" />
        <InfoRow icon={IndianRupee} label="Amount" value="Rs. 650" />
        <InfoRow icon={Clock} label="Payment date" value="After admin approval" />
      </div>
      <PrimaryButton onClick={onDone}>Back to Dashboard</PrimaryButton>
    </div>
  );
}

export function NurseSubscriptionPatientsScreen({ onBack, compact = false }: { onBack?: () => void; compact?: boolean }) {
  const content = (
    <div className={`${compact ? 'h-full' : 'flex-1'} overflow-y-auto px-6 py-6 space-y-4 ${compact ? 'pb-24' : ''}`}>
      <CarePlanCard name="Mr. Ramesh Iyer" plan="Monthly vitals monitoring" frequency="Weekly visit" next="12 May, 10:00 AM" />
      <CarePlanCard name="Mrs. Leela Menon" plan="Elderly care plan" frequency="Daily visit" next="Today, 5:30 PM" />
      <CarePlanCard name="Mr. Abdul Khan" plan="Diabetic care plan" frequency="Twice weekly visit" next="14 May, 8:30 AM" />
    </div>
  );

  if (compact) {
    return (
      <div className="h-full bg-[#F8FAFC]">
        <div className="px-6 pt-8 pb-2">
          <h1 className="text-2xl font-bold text-slate-900">Subscription Patients</h1>
          <p className="text-sm text-slate-500 mt-1">Care plans and upcoming visits.</p>
        </div>
        {content}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <ScreenHeader title="Subscription Patients" onBack={onBack!} />
      {content}
    </div>
  );
}

function CarePlanCard({ name, plan, frequency, next }: { name: string; plan: string; frequency: string; next: string }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="font-bold text-slate-900">{name}</h2>
          <p className="text-sm text-slate-500 mt-1">{plan}</p>
        </div>
        <span className="text-xs font-bold text-[#1FA97A] bg-emerald-50 rounded-full px-3 py-1">Active</span>
      </div>
      <div className="mt-4 space-y-2">
        <InfoRow icon={CalendarDays} label="Visit frequency" value={frequency} />
        <InfoRow icon={Clock} label="Next visit" value={next} />
        <InfoRow icon={Phone} label="Caregiver contact" value="Through PulseVisit" />
      </div>
      <div className="mt-4 bg-slate-50 rounded-xl p-3">
        <p className="text-xs font-semibold text-slate-700">Checklist: condition, food, sleep, mobility, medicine, BP, sugar and caregiver concern.</p>
      </div>
    </div>
  );
}

export function NurseEarningsScreen({ onBack, compact = false }: { onBack?: () => void; compact?: boolean }) {
  const rows = [
    ['Elderly care visit', '+ Rs. 650', 'Payout pending'],
    ['Vitals check', '+ Rs. 300', 'Approved'],
    ['Dressing visit', '+ Rs. 500', 'Paid'],
  ];
  const body = (
    <div className={`${compact ? 'h-full' : 'flex-1'} overflow-y-auto px-6 py-6 space-y-4 ${compact ? 'pb-24' : ''}`}>
      <div className="bg-[#0F3D73] rounded-3xl p-6 text-white shadow-xl shadow-[#0F3D73]/20">
        <p className="text-blue-200 text-sm font-medium mb-1">Available Balance</p>
        <h2 className="text-4xl font-bold mb-6">Rs. 2,450</h2>
        <button className="w-full bg-white text-[#0F3D73] rounded-xl py-3 font-bold">Request Payout</button>
      </div>
      {rows.map(([title, amount, status]) => (
        <div key={title} className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-slate-900 text-sm">{title}</h3>
            <p className="text-xs text-slate-500 mt-1">{status}</p>
          </div>
          <p className="font-bold text-[#1FA97A]">{amount}</p>
        </div>
      ))}
    </div>
  );

  if (compact) {
    return (
      <div className="h-full bg-[#F8FAFC]">
        <div className="px-6 pt-8 pb-2">
          <h1 className="text-2xl font-bold text-slate-900">Earnings</h1>
          <p className="text-sm text-slate-500 mt-1">Visit payout and payment status.</p>
        </div>
        {body}
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <ScreenHeader title="Earnings" onBack={onBack!} />
      {body}
    </div>
  );
}

export function NurseTrainingScreen({ onBack }: { onBack: () => void }) {
  const rows = [
    ['Home-care etiquette', 'Completed'],
    ['Patient safety', 'Completed'],
    ['Infection control', 'In progress'],
    ['Vitals recording', 'Assessment pending'],
    ['Red flag identification', 'Not started'],
    ['Privacy and consent', 'Not started'],
  ];
  return <SimpleListScreen title="PulseVisit Nurse Certification" subtitle="Training in progress. Complete assessment to become certified." onBack={onBack} rows={rows} action="Start Training" />;
}

export function NurseHelpScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <ScreenHeader title="Contact Care Team" onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <div className="bg-white rounded-3xl border border-slate-100 p-5 text-center">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-[#0F3D73]" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">PulseVisit Care Team</h2>
          <p className="text-sm text-slate-500 mt-2">Call for assignment issues, safety concerns, patient worsening or payment questions.</p>
          <button className="w-full mt-5 bg-[#0F3D73] text-white rounded-xl py-4 font-semibold">Call Care Team</button>
        </div>
        <AlertCareTeam />
      </div>
    </div>
  );
}

function NurseProfileTab({ onOpenSkills, onOpenAvailability, onOpenTraining, onOpenHelp, onLogout }: any) {
  return (
    <div className="h-full overflow-y-auto px-6 pt-8 pb-24 bg-[#F8FAFC]">
      <div className="text-center mb-6">
        <img src="/doctor_profile.png" className="w-24 h-24 rounded-full object-cover mx-auto mb-3 border-4 border-white shadow" alt="Nurse" />
        <h1 className="text-2xl font-bold text-slate-900">Nurse Anjali Rao</h1>
        <p className="text-sm text-[#1FA97A] font-semibold mt-1">Verified Nurse</p>
      </div>
      <div className="space-y-3">
        <QuickAction icon={CheckCircle2} title="Skills" subtitle="Approved task list" onClick={onOpenSkills} />
        <QuickAction icon={MapPin} title="Availability" subtitle="Slots and service zones" onClick={onOpenAvailability} />
        <QuickAction icon={BookOpen} title="Training" subtitle="Certification progress" onClick={onOpenTraining} />
        <QuickAction icon={HelpCircle} title="Help" subtitle="Contact care team" onClick={onOpenHelp} />
        <button onClick={onLogout} className="w-full py-4 rounded-xl bg-white border border-red-100 text-red-600 font-semibold">Logout</button>
      </div>
    </div>
  );
}

function SimpleListScreen({ title, subtitle, rows, onBack, action }: { title: string; subtitle: string; rows: string[][]; onBack: () => void; action?: string }) {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <ScreenHeader title={title} onBack={onBack} />
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
        <p className="text-sm text-slate-500 mb-4">{subtitle}</p>
        {rows.map(([label, status]) => (
          <div key={label} className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center justify-between">
            <h3 className="font-semibold text-slate-900 text-sm">{label}</h3>
            <span className="text-[11px] font-bold text-[#0F3D73] bg-blue-50 rounded-full px-3 py-1">{status}</span>
          </div>
        ))}
      </div>
      {action && (
        <div className="p-6 bg-white border-t border-slate-100">
          <PrimaryButton onClick={onBack}>{action}</PrimaryButton>
        </div>
      )}
    </div>
  );
}

function ScreenHeader({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="px-6 pt-8 pb-4 bg-white border-b border-slate-100 flex items-center gap-4 shrink-0">
      <button onClick={onBack} className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100">
        <ArrowLeft className="w-5 h-5 text-slate-700" />
      </button>
      <h1 className="text-xl font-bold text-slate-900">{title}</h1>
    </div>
  );
}
