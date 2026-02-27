import { useState, useEffect } from 'react';
import { MapPin, Wallet, Star, Activity, Bell, ChevronRight, History, FileText } from 'lucide-react';
import { HistoryScreen } from './HistoryScreen';
import { ProfileScreen } from './ProfileScreen';
import { WalletScreen } from './WalletScreen';

export function DashboardScreen({ 
  activeTab,
  setActiveTab,
  onIncomingRequest, 
  onRequestPayout,
  onLogout
}: { 
  activeTab: 'home' | 'history' | 'wallet' | 'profile',
  setActiveTab: (tab: 'home' | 'history' | 'wallet' | 'profile') => void,
  onIncomingRequest: () => void,
  onRequestPayout: () => void,
  onLogout: () => void
}) {
  const [isOnline, setIsOnline] = useState(false);

  // Dev trigger for incoming request
  useEffect(() => {
    if (isOnline && activeTab === 'home') {
      const timer = setTimeout(() => {
        onIncomingRequest();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOnline, activeTab, onIncomingRequest]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'history':
        return <HistoryScreen />;
      case 'wallet':
        return <WalletScreen onRequestPayout={onRequestPayout} isTab={true} />;
      case 'profile':
        return <ProfileScreen onLogout={onLogout} />;
      case 'home':
      default:
        return (
          <HomeTab 
            isOnline={isOnline} 
            setIsOnline={setIsOnline} 
            onHistory={() => setActiveTab('history')}
            onWallet={() => setActiveTab('wallet')}
          />
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F8FAFC] relative">
      <div className="flex-1 overflow-hidden">
        {renderTabContent()}
      </div>
      
      {/* Bottom Nav */}
      <div className="absolute bottom-0 w-full bg-white border-t border-slate-100 px-6 py-4 flex justify-between items-center pb-8 z-40">
        <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-[#0F3D73]' : 'text-slate-400'}`}>
          <Activity className="w-6 h-6" />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button onClick={() => setActiveTab('history')} className={`flex flex-col items-center gap-1 ${activeTab === 'history' ? 'text-[#0F3D73]' : 'text-slate-400'}`}>
          <History className="w-6 h-6" />
          <span className="text-[10px] font-medium">History</span>
        </button>
        <button onClick={() => setActiveTab('wallet')} className={`flex flex-col items-center gap-1 ${activeTab === 'wallet' ? 'text-[#0F3D73]' : 'text-slate-400'}`}>
          <Wallet className="w-6 h-6" />
          <span className="text-[10px] font-medium">Wallet</span>
        </button>
        <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 ${activeTab === 'profile' ? 'text-[#0F3D73]' : 'text-slate-400'}`}>
          <Star className="w-6 h-6" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
}

function HomeTab({ isOnline, setIsOnline, onHistory, onWallet }: any) {
  return (
    <div className="flex flex-col h-full overflow-y-auto pb-28">
      {/* Header */}
      <div className="bg-[#0F3D73] px-6 pt-12 pb-6 rounded-b-[32px] text-white shadow-lg relative overflow-hidden shrink-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="flex justify-between items-center relative z-10 mb-8 mt-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-full border border-white/20 p-0.5">
              <img src="https://picsum.photos/seed/doc/100/100" className="w-full h-full rounded-full object-cover" alt="Doctor" referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">Dr. Sarah Jenkins</h2>
              <p className="text-blue-200 text-xs flex items-center gap-1">
                <MapPin className="w-3 h-3" /> Downtown Clinic
              </p>
            </div>
          </div>
          <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0F3D73]"></span>
          </button>
        </div>

        <div className="bg-white rounded-2xl p-1 flex items-center relative z-10 shadow-inner">
          <button 
            onClick={() => setIsOnline(false)}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${!isOnline ? 'bg-slate-100 text-slate-700 shadow-sm' : 'text-slate-500'}`}
          >
            Offline
          </button>
          <button 
            onClick={() => setIsOnline(true)}
            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${isOnline ? 'bg-[#1FA97A] text-white shadow-md' : 'text-slate-500'}`}
          >
            Online
          </button>
        </div>
      </div>

      <div className="px-6 py-6 space-y-6">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mb-3">
              <Wallet className="w-5 h-5 text-[#1FA97A]" />
            </div>
            <p className="text-slate-500 text-xs font-medium mb-1">Today's Earnings</p>
            <h3 className="text-2xl font-bold text-slate-900">₹450</h3>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mb-3">
              <Activity className="w-5 h-5 text-[#0F3D73]" />
            </div>
            <p className="text-slate-500 text-xs font-medium mb-1">Consultations</p>
            <h3 className="text-2xl font-bold text-slate-900">8</h3>
          </div>
        </div>

        {/* Rating Card */}
        <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-slate-500 text-xs font-medium mb-1">Patient Rating</p>
            <div className="flex items-center gap-2">
              <h3 className="text-2xl font-bold text-slate-900">4.9</h3>
              <div className="flex text-amber-400">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current opacity-50" />
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-slate-400 text-xs">Based on</p>
            <p className="text-slate-700 font-medium text-sm">124 reviews</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Quick Access</h3>
          
          <button onClick={onHistory} className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-all">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6 text-slate-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-slate-900">Consultation History</h4>
              <p className="text-xs text-slate-500 mt-0.5">View past appointments</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>

          <button onClick={onWallet} className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-all">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0">
              <Wallet className="w-6 h-6 text-slate-600" />
            </div>
            <div className="flex-1 text-left">
              <h4 className="font-semibold text-slate-900">Wallet & Payouts</h4>
              <p className="text-xs text-slate-500 mt-0.5">Balance: ₹1,250.00</p>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>
        </div>

      </div>
    </div>
  );
}
