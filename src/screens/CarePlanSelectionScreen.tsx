import { useState } from 'react';
import { Check, ChevronRight, Activity, Beaker, UserPlus, Salad, Stethoscope, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

type CarePlanOption = {
  id: string;
  icon: any;
  title: string;
  description: string;
  price: string;
  priority: 'urgent' | 'recommended' | 'optional';
};

const CARE_PLAN_OPTIONS: CarePlanOption[] = [
  {
    id: 'medicine',
    icon: <Activity className="w-5 h-5 text-blue-600" />,
    title: 'Medicine Delivery',
    description: 'Home delivery of prescribed medicines within 60 mins.',
    price: '₹280+',
    priority: 'urgent'
  },
  {
    id: 'labtest',
    icon: <Beaker className="w-5 h-5 text-purple-600" />,
    title: 'Lab Test - CBC + CRP',
    description: 'Home sample collection & digital results.',
    price: '₹599',
    priority: 'urgent'
  },
  {
    id: 'nurse',
    icon: <Stethoscope className="w-5 h-5 text-emerald-600" />,
    title: 'Nurse Follow-up',
    description: 'Home monitoring visit for post-care recovery.',
    price: '₹800',
    priority: 'recommended'
  },
  {
    id: 'dietitian',
    icon: <Salad className="w-5 h-5 text-amber-600" />,
    title: 'Dietitian Consultation',
    description: 'Personalized recovery nutrition plan.',
    price: '₹799',
    priority: 'optional'
  },
  {
    id: 'specialist',
    icon: <UserPlus className="w-5 h-5 text-rose-600" />,
    title: 'Specialist Referral',
    description: 'Consultation with Pulmonologist.',
    price: 'Free',
    priority: 'optional'
  }
];

export function CarePlanSelectionScreen({ onComplete }: { onComplete: () => void }) {
  const [selectedPlans, setSelectedPlans] = useState<Set<string>>(new Set(['medicine', 'labtest']));

  const togglePlan = (id: string) => {
    const newSelected = new Set(selectedPlans);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedPlans(newSelected);
  };

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className="bg-[#0F3D73] px-6 pt-12 pb-10 rounded-b-[40px] text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
        
        <h1 className="text-2xl font-bold mb-1 relative z-10">Care Plan</h1>
        <p className="text-blue-200 text-sm relative z-10">Recommend recovery steps for Michael</p>
        
        <div className="mt-6 flex items-center gap-2 bg-white/10 w-fit px-3 py-1.5 rounded-full border border-white/10 relative z-10">
          <span className="text-[10px] font-bold uppercase tracking-wider">Patient: Michael Roberts</span>
        </div>
      </div>

      <div className="flex-1 px-6 py-8 overflow-y-auto no-scrollbar">
        <div className="space-y-6">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Available Services</h3>
              <span className="text-[10px] font-bold text-[#0F3D73] bg-blue-50 px-2 py-1 rounded-md">{selectedPlans.size} Selected</span>
            </div>
            
            <div className="space-y-3">
              {CARE_PLAN_OPTIONS.map((plan, idx) => (
                <motion.button
                  key={plan.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => togglePlan(plan.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-[20px] border-2 transition-all text-left ${
                    selectedPlans.has(plan.id)
                      ? 'border-[#0F3D73] bg-white shadow-lg ring-1 ring-[#0F3D73]/10 scale-[1.02]'
                      : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                    selectedPlans.has(plan.id) ? 'bg-blue-50' : 'bg-slate-50'
                  }`}>
                    {plan.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-slate-900 text-sm">{plan.title}</h3>
                      {plan.priority === 'urgent' && (
                        <span className="text-[8px] font-black bg-red-100 text-red-600 px-1.5 py-0.5 rounded uppercase tracking-tighter">Urgent</span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{plan.description}</p>
                    <p className="text-[10px] font-bold text-[#1FA97A] mt-1">{plan.price}</p>
                  </div>

                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selectedPlans.has(plan.id) ? 'bg-[#0F3D73] border-[#0F3D73]' : 'border-slate-200'
                  }`}>
                    {selectedPlans.has(plan.id) && <Check className="w-3.5 h-3.5 text-white" />}
                  </div>
                </motion.button>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Doctor's Note</h3>
            <div className="bg-white border-2 border-slate-100 rounded-[24px] p-4 shadow-sm focus-within:border-[#0F3D73]/20 transition-all">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-[#0F3D73]" />
                </div>
                <textarea 
                  className="w-full bg-transparent text-sm focus:outline-none py-2 resize-none"
                  placeholder="Additional recovery instructions for the patient..."
                  rows={3}
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="p-8 bg-white border-t border-slate-100 rounded-t-[40px] shadow-[0_-10px_40px_rgba(15,61,115,0.05)]">
        <button 
          onClick={onComplete}
          className="w-full bg-[#0F3D73] text-white rounded-2xl py-5 font-bold shadow-xl shadow-[#0F3D73]/20 flex items-center justify-center gap-3 active:scale-[0.98] transition-all"
        >
          Send to Patient <ChevronRight className="w-5 h-5" />
        </button>
        <p className="text-center text-[10px] text-slate-400 mt-4 font-medium">
          The care plan will be instantly available on the patient's dashboard
        </p>
      </div>
    </div>
  );
}

