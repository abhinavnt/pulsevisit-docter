import { useState } from 'react';
import { Camera, ChevronRight } from 'lucide-react';

export function OnboardingProfileScreen({ onNext }: { onNext: (specialty: string) => void }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('MBBS');

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="px-6 pt-12 pb-4 bg-white border-b border-slate-100 mt-12">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-2 flex-1 bg-[#0F3D73] rounded-full"></div>
          <div className="h-2 flex-1 bg-slate-100 rounded-full"></div>
          <div className="h-2 flex-1 bg-slate-100 rounded-full"></div>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Profile Setup</h1>
        <p className="text-slate-500 text-sm mt-1">Step 1 of 3: Basic Information</p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-slate-100 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center">
              <Camera className="w-8 h-8 text-slate-400" />
            </div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-[#0F3D73] rounded-full flex items-center justify-center border-2 border-white shadow-sm">
              <span className="text-white text-lg font-medium leading-none">+</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73]" placeholder="Dr. John Doe" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">State</label>
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] appearance-none">
                <option>Select State</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-700">City</label>
              <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] appearance-none">
                <option>Select City</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Specialty</label>
            <select 
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73] appearance-none"
            >
              <option value="MBBS">MBBS</option>
              <option value="MBBS & MD">MBBS & MD</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-slate-700">Years of Experience</label>
            <input type="number" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0F3D73]/20 focus:border-[#0F3D73]" placeholder="e.g. 5" />
          </div>
        </div>
      </div>

      <div className="p-6 bg-white border-t border-slate-100 pb-12">
        <button onClick={() => onNext(selectedSpecialty)} className="w-full bg-[#0F3D73] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#0F3D73]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          Continue <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
