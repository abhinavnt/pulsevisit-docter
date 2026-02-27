import { Clock, ShieldCheck } from 'lucide-react';

export function UnderReviewScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="flex flex-col h-full bg-white px-6 pt-12 pb-8 items-center justify-center text-center">
      <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 relative">
        <ShieldCheck className="w-12 h-12 text-[#0F3D73]" />
        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center border-4 border-white">
          <Clock className="w-5 h-5 text-amber-600" />
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-slate-900 mb-3">Application Under Review</h1>
      <p className="text-slate-500 leading-relaxed mb-8">
        We are verifying your documents. This process usually takes 24-48 hours. We will notify you once your profile is approved.
      </p>

      <div className="w-full bg-slate-50 rounded-2xl p-4 border border-slate-100 text-left space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#1FA97A]"></div>
          <span className="text-sm text-slate-700 font-medium">Profile Submitted</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
          <span className="text-sm text-slate-900 font-medium">Document Verification</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-slate-300"></div>
          <span className="text-sm text-slate-500">Final Approval</span>
        </div>
      </div>

      <button onClick={onNext} className="mt-12 text-sm text-slate-400 underline">
        [Dev: Skip to Dashboard]
      </button>
    </div>
  );
}
