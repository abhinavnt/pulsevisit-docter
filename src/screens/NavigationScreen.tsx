import { MapPin, Navigation, Phone, MessageSquare } from 'lucide-react';

export function NavigationScreen({ onArrived }: { onArrived: () => void }) {
  return (
    <div className="flex flex-col h-full bg-slate-200 relative">
      {/* Map Mockup */}
      <div className="absolute inset-0 z-0">
        <img src="/map_preview.png" className="w-full h-full object-cover" alt="Map" />
        {/* Route Line Mock */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          <path d="M 200 600 Q 250 400 150 200" fill="none" stroke="#0F3D73" strokeWidth="6" strokeLinecap="round" strokeDasharray="10,10" className="animate-[dash_1s_linear_infinite]" />
        </svg>
        <div className="absolute top-[180px] left-[130px] w-10 h-10 bg-[#1FA97A] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
          <MapPin className="w-5 h-5 text-white" />
        </div>
        <div className="absolute top-[580px] left-[180px] w-10 h-10 bg-[#0F3D73] rounded-full border-4 border-white shadow-lg flex items-center justify-center">
          <Navigation className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="absolute top-12 left-6 right-6 z-10">
        <div className="bg-white rounded-2xl p-4 shadow-lg flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            <Navigation className="w-6 h-6 text-[#0F3D73]" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-lg">12 mins</h3>
            <p className="text-slate-500 text-sm">2.4 km • Fastest route</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-10">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="font-bold text-lg text-slate-900">Michael Roberts</h3>
            <p className="text-slate-500 text-sm">124 Park Avenue, Block C</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0F3D73]">
              <MessageSquare className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-[#1FA97A]">
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>

        <button onClick={onArrived} className="w-full bg-[#0F3D73] text-white rounded-xl py-4 font-semibold shadow-lg shadow-[#0F3D73]/20 flex items-center justify-center gap-2 active:scale-[0.98] transition-all">
          Mark as Arrived
        </button>
      </div>
    </div>
  );
}
