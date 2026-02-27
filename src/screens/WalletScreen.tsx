import { ArrowLeft } from 'lucide-react';

export function WalletScreen({ onBack, onRequestPayout, isTab = false }: { onBack?: () => void, onRequestPayout: () => void, isTab?: boolean }) {
  return (
    <div className="flex flex-col h-full bg-[#F8FAFC]">
      <div className={`px-6 pt-12 pb-4 flex items-center gap-4 shrink-0 ${isTab ? 'bg-white border-b border-slate-100' : ''}`}>
        {!isTab && (
          <button onClick={onBack} className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
            <ArrowLeft className="w-5 h-5 text-slate-700" />
          </button>
        )}
        <h1 className="text-xl font-bold text-slate-900">Wallet</h1>
      </div>

      <div className="flex-1 overflow-y-auto flex flex-col">
        <div className="px-6 py-4 shrink-0">
          <div className="bg-[#0F3D73] rounded-3xl p-6 text-white shadow-xl shadow-[#0F3D73]/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
            
            <p className="text-blue-200 text-sm font-medium mb-1 relative z-10">Available Balance</p>
            <h2 className="text-4xl font-bold mb-6 relative z-10">₹1,250.00</h2>
            
            <button onClick={onRequestPayout} className="w-full bg-white text-[#0F3D73] rounded-xl py-3 font-bold active:scale-[0.98] transition-all relative z-10">
              Request Payout
            </button>
          </div>
        </div>

        <div className={`flex-1 bg-white mt-4 rounded-t-[32px] px-6 py-6 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] ${isTab ? 'pb-28' : 'pb-6'}`}>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Recent Transactions</h3>
          
          <div className="space-y-4">
            {[
              { id: 1, type: 'credit', title: 'Consultation - M. Roberts', amount: '+₹85.00', date: 'Today, 2:45 PM' },
              { id: 2, type: 'credit', title: 'Consultation - S. Williams', amount: '+₹120.00', date: 'Today, 11:30 AM' },
              { id: 3, type: 'debit', title: 'Weekly Payout', amount: '-₹850.00', date: 'Mon, 10:00 AM' },
              { id: 4, type: 'credit', title: 'Consultation - J. Doe', amount: '+₹90.00', date: 'Sun, 4:15 PM' },
            ].map((tx) => (
              <div key={tx.id} className="flex items-center justify-between py-3 border-b border-slate-50 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.type === 'credit' ? 'bg-emerald-50 text-[#1FA97A]' : 'bg-slate-100 text-slate-600'}`}>
                    <span className="font-bold text-lg">{tx.type === 'credit' ? '+' : '-'}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{tx.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{tx.date}</p>
                  </div>
                </div>
                <span className={`font-bold ${tx.type === 'credit' ? 'text-[#1FA97A]' : 'text-slate-900'}`}>{tx.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
