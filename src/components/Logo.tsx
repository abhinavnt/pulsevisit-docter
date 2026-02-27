export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="relative flex items-center justify-center h-16 w-32">
        <svg viewBox="0 0 120 60" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          {/* ECG Line */}
          <path d="M10 40 L30 40 L40 10 L55 55 L65 30 L75 40 L85 40" className="text-[#0F3D73]" />
          {/* House */}
          <path d="M75 40 L75 25 L95 10 L115 25 L115 40 Z" className="text-[#1FA97A]" />
          <path d="M95 10 L95 40" className="text-[#1FA97A]" strokeWidth="2" />
          <path d="M85 40 L115 40" className="text-[#1FA97A]" />
        </svg>
      </div>
      <span className="text-2xl font-bold tracking-tight text-[#0F3D73] mt-2">
        PULSE<span className="text-[#1FA97A]">VISIT</span>
      </span>
    </div>
  );
}
