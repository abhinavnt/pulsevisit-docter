import React from 'react';

export function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full h-full sm:w-[400px] sm:h-[850px] bg-[#F8FAFC] sm:rounded-[40px] shadow-2xl overflow-hidden relative flex flex-col">
      {/* Status Bar Mock */}
      <div className="h-12 w-full flex justify-between items-center px-6 text-sm font-medium text-slate-800 shrink-0 z-50 bg-transparent absolute top-0 left-0">
        <span>9:41</span>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-slate-800"></div>
          <div className="w-4 h-4 rounded-full bg-slate-800"></div>
          <div className="w-6 h-3 rounded-sm border border-slate-800"></div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide">
        {children}
      </div>
      {/* Home Indicator Mock */}
      <div className="h-8 w-full shrink-0 flex justify-center items-center bg-white/50 backdrop-blur-sm absolute bottom-0 z-50 pointer-events-none">
        <div className="w-1/3 h-1.5 bg-slate-300 rounded-full"></div>
      </div>
    </div>
  );
}
