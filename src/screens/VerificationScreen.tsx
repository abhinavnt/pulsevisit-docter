import { UploadCloud, FileText, ChevronRight } from 'lucide-react';

export function VerificationScreen({ onNext, specialty }: { onNext: () => void, specialty: string }) {
  const DocumentUpload = ({ title, subtitle }: { title: string, subtitle: string }) => (
    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
        <FileText className="w-6 h-6 text-[#0F3D73]" />
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

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="px-6 pt-12 pb-4 bg-white border-b border-slate-100 mt-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 flex-1 bg-[#1FA97A] rounded-full"></div>
          <div className="h-2 flex-1 bg-[#0F3D73] rounded-full"></div>
          <div className="h-2 flex-1 bg-slate-100 rounded-full"></div>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Medical Verification</h1>
        <p className="text-slate-500 text-sm mt-1">Step 2 of 3: Professional Documents</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <DocumentUpload title="Medical Council ID" subtitle="Front and back copy" />
        <DocumentUpload title="MBBS Certificate" subtitle="Degree certificate" />
        {specialty === 'MBBS & MD' && (
          <DocumentUpload title="MD Certificate" subtitle="Post-graduate degree certificate" />
        )}
        <DocumentUpload title="State Council Registration" subtitle="Valid registration certificate" />
        
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
          <p className="text-xs text-amber-800 leading-relaxed">
            All documents must be clear, readable, and in PDF or JPEG format. Max file size: 5MB per document.
          </p>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-100 pb-12">
        <button onClick={onNext} className="w-full bg-[#0F3D73] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#0F3D73]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          Continue <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
