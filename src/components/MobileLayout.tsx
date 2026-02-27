import React from 'react';

export function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mobile-frame bg-[#F8FAFC] overflow-hidden relative flex flex-col"
    >
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative scrollbar-hide">
        {children}
      </div>
    </div>
  );
}
