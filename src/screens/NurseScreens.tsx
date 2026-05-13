import { useState, useEffect, type ReactNode } from 'react';
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
  X,
  TrendingUp,
  ArrowUpRight,
  Layers,
  Clock3
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

function UploadRow({
  title,
  subtitle,
  status = 'idle',
  onUpload
}: {
  title: string;
  subtitle: string;
  status?: 'idle' | 'uploading' | 'completed';
  onUpload?: () => void;
}) {
  return (
    <div className={`bg-white p-4 rounded-2xl border transition-all duration-300 ${status === 'completed' ? 'border-emerald-100 shadow-sm shadow-emerald-50' : 'border-slate-200 shadow-sm'}`}>
      <div className="flex items-center gap-4">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${status === 'completed' ? 'bg-emerald-50' : 'bg-blue-50'}`}>
          {status === 'completed' ? (
            <CheckCircle2 className="w-5 h-5 text-[#1FA97A]" />
          ) : (
            <FileText className={`w-5 h-5 ${status === 'uploading' ? 'text-blue-400 animate-pulse' : 'text-[#0F3D73]'}`} />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-slate-900 text-sm truncate">{title}</h3>
          <p className="text-xs text-slate-500 mt-0.5 truncate">
            {status === 'completed' ? 'document_uploaded.pdf' : subtitle}
          </p>
        </div>
        <button
          onClick={onUpload}
          disabled={status !== 'idle'}
          className={`w-10 h-10 rounded-full flex items-center justify-center border shrink-0 transition-all ${status === 'completed'
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : status === 'uploading'
                ? 'bg-slate-50 border-slate-100'
                : 'bg-slate-50 border-slate-200 active:scale-90'
            }`}
        >
          {status === 'uploading' ? (
            <div className="w-5 h-5 border-2 border-[#0F3D73] border-t-transparent rounded-full animate-spin" />
          ) : status === 'completed' ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <UploadCloud className="w-5 h-5 text-slate-600" />
          )}
        </button>
      </div>
      {status === 'uploading' && (
        <div className="mt-3 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
          <div className="h-full bg-[#0F3D73] animate-[progress_1.5s_ease-in-out_infinite]" style={{ width: '30%' }} />
        </div>
      )}
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
  const [uploadStatus, setUploadStatus] = useState<Record<string, 'idle' | 'uploading' | 'completed'>>({});

  const sections = [
    {
      title: 'Identity Proof',
      docs: [
        ['Aadhaar / ID proof', 'Government ID copy'],
        ['Recent photo', 'Clear front-facing photo'],
        ['Address proof', 'Current address proof'],
      ]
    },
    {
      title: 'Professional Qualifications',
      docs: [
        ['Nursing qualification certificate', 'ANM, GNM, B.Sc or higher'],
        ['Nursing council registration', 'If available'],
        ['Experience certificate', 'If available'],
        ['Police verification', 'If available'],
      ]
    },
    {
      title: 'Payment Details',
      docs: [
        ['Bank account details', 'For payout setup'],
        ['PAN card', 'Required for payment records'],
        ['Cancelled cheque / bank proof', 'Account verification'],
      ]
    }
  ];

  const allDocs = sections.flatMap(s => s.docs);
  const completedCount = Object.values(uploadStatus).filter(s => s === 'completed').length;
  const totalCount = allDocs.length;
  const progress = (completedCount / totalCount) * 100;

  const handleUpload = (title: string) => {
    setUploadStatus(prev => ({ ...prev, [title]: 'uploading' }));
    setTimeout(() => {
      setUploadStatus(prev => ({ ...prev, [title]: 'completed' }));
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-full bg-[#F8FAFC]">
      <ProgressHeader step={3} total={4} title="Upload Documents" subtitle="Submit readable documents for PulseVisit verification." />

      <div className="flex-1 overflow-y-auto">
        {/* Progress Summary Card */}
        <div className="px-6 py-4">
          <div className="bg-[#0F3D73] rounded-2xl p-5 text-white shadow-lg shadow-blue-900/20 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-blue-200 text-xs font-medium uppercase tracking-wider">Overall Progress</p>
                  <h3 className="text-2xl font-bold">{completedCount} <span className="text-blue-300 text-lg">/ {totalCount}</span></h3>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-blue-100">{Math.round(progress)}%</span>
                </div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1FA97A] transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full" />
            <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-white/5 rounded-full" />
          </div>
        </div>

        <div className="px-6 pb-8 space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-[0.15em] pl-1">{section.title}</h2>
              <div className="space-y-3">
                {section.docs.map(([title, subtitle]) => (
                  <UploadRow
                    key={title}
                    title={title}
                    subtitle={subtitle}
                    status={uploadStatus[title] || 'idle'}
                    onUpload={() => handleUpload(title)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-100">
        <PrimaryButton
          onClick={onNext}
          tone={completedCount === totalCount ? 'success' : 'primary'}
        >
          {completedCount === totalCount ? 'Submit for Verification' : `Upload ${totalCount - completedCount} more to continue`}
        </PrimaryButton>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
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
  onIncomingRequest,
  onOpenVisit,
  onOpenSkills,
  onOpenAvailability,
  onOpenTraining,
  onOpenHelp,
  onLogout,
}: {
  activeTab: NurseTab;
  setActiveTab: (tab: NurseTab) => void;
  onIncomingRequest: () => void;
  onOpenVisit: () => void;
  onOpenSkills: () => void;
  onOpenAvailability: () => void;
  onOpenTraining: () => void;
  onOpenHelp: () => void;
  onLogout: () => void;
}) {
  const [isAvailable, setIsAvailable] = useState(true);

  // Dev trigger for incoming request
  useEffect(() => {
    if (isAvailable && activeTab === 'home') {
      const timer = setTimeout(() => {
        onIncomingRequest();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isAvailable, activeTab, onIncomingRequest]);

  const renderContent = () => {
    if (activeTab === 'visits') return <NurseVisitsTab onOpenVisit={onOpenVisit} />;
    if (activeTab === 'care') return <NurseSubscriptionPatientsScreen compact />;
    if (activeTab === 'earnings') return <NurseEarningsScreen compact />;
    if (activeTab === 'profile') return <NurseProfileTab onOpenSkills={onOpenSkills} onOpenAvailability={onOpenAvailability} onOpenTraining={onOpenTraining} onOpenHelp={onOpenHelp} onLogout={onLogout} />;
    return (
      <NurseHomeTab
        isAvailable={isAvailable}
        setIsAvailable={setIsAvailable}
        onOpenVisit={onOpenVisit}
        onOpenSkills={onOpenSkills}
        onOpenAvailability={onOpenAvailability}
        onOpenTraining={onOpenTraining}
        onOpenHelp={onOpenHelp}
        onCare={() => setActiveTab('care')}
        onEarnings={() => setActiveTab('earnings')}
      />
    );
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

function NurseHomeTab({
  isAvailable,
  setIsAvailable,
  onOpenVisit,
  onOpenSkills,
  onOpenAvailability,
  onOpenTraining,
  onOpenHelp,
  onCare,
  onEarnings
}: any) {
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
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-1 flex items-center relative z-10 shadow-inner">
          <button
            onClick={() => setIsAvailable(false)}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${!isAvailable ? 'bg-white text-slate-900 shadow-md' : 'text-blue-100 hover:bg-white/5'}`}
          >
            Offline
          </button>
          <button
            onClick={() => setIsAvailable(true)}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${isAvailable ? 'bg-[#1FA97A] text-white shadow-md' : 'text-blue-100 hover:bg-white/5'}`}
          >
            Available
          </button>
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

function DayPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-14 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all ${active ? 'bg-[#0F3D73] text-white shadow-lg shadow-blue-900/20' : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'}`}
    >
      <span className="text-[10px] font-bold uppercase tracking-wider">{label.substring(0, 3)}</span>
      <span className="text-sm font-bold">{label === 'Sunday' ? 'S' : label === 'Monday' ? 'M' : label === 'Tuesday' ? 'T' : label === 'Wednesday' ? 'W' : label === 'Thursday' ? 'T' : label === 'Friday' ? 'F' : 'S'}</span>
    </button>
  );
}

function ZoneTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="inline-flex items-center gap-1.5 bg-blue-50 text-[#0F3D73] px-3 py-1.5 rounded-full text-xs font-bold border border-blue-100">
      {label}
      <button onClick={onRemove} className="hover:text-blue-900">
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}

export function NurseAvailabilityScreen({ onBack }: { onBack: () => void }) {
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [distance, setDistance] = useState(15);
  const [zones, setZones] = useState(['Indiranagar', 'Domlur', 'Koramangala', 'HSR Layout']);
  const [isOnline, setIsOnline] = useState(true);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const slots = [
    { label: 'Early Morning', range: '6 AM - 9 AM', icon: Clock },
    { label: 'Morning Slot', range: '9 AM - 1 PM', icon: Clock },
    { label: 'Afternoon Slot', range: '1 PM - 5 PM', icon: Clock },
    { label: 'Evening Slot', range: '5 PM - 9 PM', icon: Clock },
    { label: 'Night Shift', range: '9 PM - 2 AM', icon: Clock },
  ];

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <ScreenHeader title="Set Availability" onBack={onBack} />

      <div className="flex-1 overflow-y-auto pb-8">
        {/* Active Toggle Header */}
        <div className="px-6 py-6">
          <div className={`p-5 rounded-3xl border transition-all ${isOnline ? 'bg-emerald-50 border-emerald-100' : 'bg-slate-100 border-slate-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <h3 className={`font-bold ${isOnline ? 'text-emerald-900' : 'text-slate-900'}`}>Accepting New Visits</h3>
                <p className={`text-xs mt-0.5 ${isOnline ? 'text-emerald-700' : 'text-slate-500'}`}>
                  {isOnline ? 'You are currently visible to patients' : 'You are currently hidden from search'}
                </p>
              </div>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`w-14 h-8 rounded-full relative transition-colors ${isOnline ? 'bg-[#1FA97A]' : 'bg-slate-300'}`}
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-all shadow-sm ${isOnline ? 'left-7' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 space-y-8">
          {/* Weekly Schedule */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Weekly Schedule</h2>
              <span className="text-[10px] font-bold text-[#0F3D73] bg-blue-50 px-2 py-0.5 rounded">Repeating weekly</span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {days.map(day => (
                <DayPill
                  key={day}
                  label={day}
                  active={selectedDay === day}
                  onClick={() => setSelectedDay(day)}
                />
              ))}
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 p-5 space-y-4 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Slots for {selectedDay}</p>
              <div className="space-y-3">
                {slots.map((slot, index) => (
                  <label key={slot.label} className={`flex items-center justify-between p-4 rounded-2xl border transition-all ${index < 2 ? 'bg-blue-50/30 border-blue-100' : 'bg-white border-slate-100'}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${index < 2 ? 'bg-blue-100 text-[#0F3D73]' : 'bg-slate-50 text-slate-400'}`}>
                        <slot.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{slot.label}</p>
                        <p className="text-[10px] text-slate-500 font-medium">{slot.range}</p>
                      </div>
                    </div>
                    <input type="checkbox" defaultChecked={index < 2} className="w-5 h-5 accent-[#0F3D73] rounded-lg" />
                  </label>
                ))}
              </div>
            </div>
          </section>

          {/* Travel & Zones */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Travel & Zones</h2>
            <div className="bg-white rounded-3xl border border-slate-100 p-6 space-y-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <p className="text-sm font-bold text-slate-900">Max Travel Distance</p>
                  <p className="text-lg font-black text-[#0F3D73]">{distance} <span className="text-xs text-slate-400">km</span></p>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={distance}
                  onChange={(e) => setDistance(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0F3D73]"
                />
                <div className="flex justify-between text-[10px] font-bold text-slate-400 px-1">
                  <span>1 KM</span>
                  <span>25 KM</span>
                  <span>50 KM</span>
                </div>
              </div>

              <div className="h-px bg-slate-50" />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold text-slate-900">Preferred Zones</p>
                  <button className="text-[10px] font-bold text-[#0F3D73] flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> ADD NEW
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {zones.map(zone => (
                    <ZoneTag
                      key={zone}
                      label={zone}
                      onRemove={() => setZones(zones.filter(z => z !== zone))}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Additional Preferences */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Additional Prefs</h2>
            <div className="grid grid-cols-1 gap-3">
              <CheckboxPill label="Have my own vehicle" checked />
              <CheckboxPill label="Willing to travel beyond max distance for emergencies" />
              <CheckboxPill label="Available for 24/7 stay-at-home care" />
              <CheckboxPill label="Can provide immediate emergency replacement" checked />
            </div>
          </section>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-100">
        <PrimaryButton onClick={onBack} tone="success">Save Availability Settings</PrimaryButton>
      </div>
    </div>
  );
}

function OtpModal({
  isOpen,
  onClose,
  onVerify,
  title,
  description
}: {
  isOpen: boolean;
  onClose: () => void;
  onVerify: () => void;
  title: string;
  description: string;
}) {
  const [otp, setOtp] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="bg-white w-full max-w-sm rounded-[32px] p-8 relative z-10 shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShieldCheck className="w-8 h-8 text-[#0F3D73]" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 text-center mb-2">{title}</h3>
        <p className="text-sm text-slate-500 text-center mb-8">{description}</p>

        <div className="space-y-6">
          <input
            type="number"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-4 py-5 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] transition-all text-center tracking-[0.5em] font-bold text-3xl"
            placeholder="••••"
            maxLength={4}
          />
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-4 rounded-xl font-semibold text-slate-500 bg-slate-50 border border-slate-200"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                if (otp.length === 4) onVerify();
              }}
              disabled={otp.length !== 4}
              className="flex-[2] bg-[#0F3D73] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#0F3D73]/20 active:scale-[0.98] transition-all disabled:opacity-50"
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function NurseVisitFlowScreen({ onBack, onComplete }: { onBack: () => void; onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [showOtp, setShowOtp] = useState(false);
  const [pendingStep, setPendingStep] = useState<number | null>(null);

  const steps = ['Visit Accepted', 'Travel Started', 'Arrived', 'Start Service', 'Record Vitals', 'Complete Task'];

  const handleNext = () => {
    if (step === 2) {
      setPendingStep(3);
      setShowOtp(true);
    } else if (step === 4) {
      setPendingStep(5);
      setShowOtp(true);
    } else {
      setStep(step + 1);
    }
  };

  const handleOtpVerify = () => {
    if (pendingStep !== null) {
      setStep(pendingStep);
      setPendingStep(null);
      setShowOtp(false);
    }
  };

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
          <PrimaryButton onClick={handleNext}>{step === 0 ? 'Start Journey' : step === 1 ? 'Mark Arrived' : step === 2 ? 'Start Visit' : step === 3 ? 'Record Vitals' : 'Complete Task'}</PrimaryButton>
        ) : (
          <PrimaryButton onClick={onComplete} tone="success">Complete Visit</PrimaryButton>
        )}
      </div>

      <OtpModal
        isOpen={showOtp}
        onClose={() => setShowOtp(false)}
        onVerify={handleOtpVerify}
        title={step === 2 ? "Start Service" : "Complete Task"}
        description={step === 2
          ? "Ask the patient for the START OTP to begin the home-care service."
          : "Ask the patient for the END OTP to finalize the visit and record completion."
        }
      />
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
  const [activeFilter, setActiveFilter] = useState<'all' | 'one-time' | 'subscription'>('all');
  
  const stats = [
    { label: 'Total Earned', value: 'Rs. 12,850', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Visits Done', value: '24', icon: Activity, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Subscription', value: 'Rs. 8,400', icon: Layers, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const chartData = [
    { day: 'Mon', amount: 800, height: 'h-12' },
    { day: 'Tue', amount: 1200, height: 'h-20' },
    { day: 'Wed', amount: 650, height: 'h-10' },
    { day: 'Thu', amount: 1500, height: 'h-24' },
    { day: 'Fri', amount: 900, height: 'h-14' },
    { day: 'Sat', amount: 1100, height: 'h-18' },
    { day: 'Sun', amount: 0, height: 'h-0' },
  ];

  const transactions = [
    { title: 'Elderly Care Visit', date: 'Today, 5:30 PM', amount: 650, type: 'one-time', status: 'Pending Approval', icon: User },
    { title: 'Monthly Vitals Plan', date: '12 May, 2024', amount: 1200, type: 'subscription', status: 'Approved', icon: Layers },
    { title: 'Wound Dressing', date: '11 May, 2024', amount: 500, type: 'one-time', status: 'Paid', icon: Activity },
    { title: 'Post-Op Monitoring', date: '10 May, 2024', amount: 850, type: 'subscription', status: 'Paid', icon: ShieldCheck },
  ];

  const filteredTransactions = transactions.filter(t => activeFilter === 'all' || t.type === activeFilter);

  const body = (
    <div className={`${compact ? 'h-full' : 'flex-1'} overflow-y-auto px-6 py-6 space-y-8 ${compact ? 'pb-24' : ''}`}>
      {/* Balance Card */}
      <div className="bg-[#0F3D73] rounded-[32px] p-8 text-white shadow-2xl shadow-[#0F3D73]/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-blue-200 mb-2">
            <Wallet className="w-4 h-4" />
            <span className="text-sm font-medium">Available for Payout</span>
          </div>
          <h2 className="text-4xl font-bold mb-8 flex items-baseline gap-1">
            <span className="text-2xl font-medium">Rs.</span> 2,450
          </h2>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-white text-[#0F3D73] rounded-2xl py-4 font-bold text-sm shadow-lg active:scale-95 transition-all">
              Request Payout
            </button>
            <button className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 active:scale-95 transition-all">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="bg-white p-3 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
            <div className={`w-8 h-8 rounded-full ${s.bg} ${s.color} flex items-center justify-center mb-2`}>
              <s.icon className="w-4 h-4" />
            </div>
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-1">{s.label}</p>
            <p className="text-xs font-bold text-slate-900">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Earnings Chart */}
      <div className="bg-white rounded-[32px] border border-slate-100 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-bold text-slate-900">Earnings this week</h3>
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase">May 07 - May 13</span>
        </div>
        
        <div className="flex items-end justify-between gap-2 h-32 mb-4">
          {chartData.map((d) => (
            <div key={d.day} className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full relative">
                <div className={`w-full ${d.height} bg-slate-100 rounded-lg group-hover:bg-[#0F3D73] transition-all duration-300 relative`}>
                   {d.amount > 0 && (
                     <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[9px] font-bold px-1.5 py-0.5 rounded pointer-events-none">
                       {d.amount}
                     </div>
                   )}
                </div>
              </div>
              <span className="text-[10px] font-bold text-slate-400">{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Transactions Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Recent Activity</h3>
          <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
            {(['all', 'one-time', 'subscription'] as const).map(f => (
              <button 
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-bold capitalize transition-all ${activeFilter === f ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-400'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredTransactions.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 p-4 flex items-center gap-4 hover:border-blue-100 transition-colors">
              <div className={`w-12 h-12 rounded-2xl ${t.type === 'subscription' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'} flex items-center justify-center shrink-0`}>
                <t.icon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-900 text-sm truncate">{t.title}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-[10px] text-slate-500">{t.date}</p>
                  <span className={`w-1 h-1 rounded-full bg-slate-300`} />
                  <p className={`text-[10px] font-bold ${t.status === 'Paid' ? 'text-emerald-600' : 'text-amber-600'}`}>{t.status}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-slate-900">Rs. {t.amount}</p>
                <p className="text-[10px] text-slate-400 capitalize">{t.type}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full py-4 text-sm font-bold text-[#0F3D73] bg-blue-50/50 rounded-2xl hover:bg-blue-50 transition-colors">
          View Full History
        </button>
      </div>
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
