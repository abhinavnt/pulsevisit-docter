import { useState } from 'react';
import { MobileLayout } from './components/MobileLayout';
import { LoginScreen } from './screens/LoginScreen';
import { OnboardingProfileScreen } from './screens/OnboardingProfileScreen';
import { VerificationScreen } from './screens/VerificationScreen';
import { KycScreen } from './screens/KycScreen';
import { UnderReviewScreen } from './screens/UnderReviewScreen';
import { DashboardScreen } from './screens/DashboardScreen';
import { IncomingRequestModal } from './screens/IncomingRequestModal';
import { WaitingPaymentScreen } from './screens/WaitingPaymentScreen';
import { NavigationScreen } from './screens/NavigationScreen';
import { ReachedConfirmationScreen } from './screens/ReachedConfirmationScreen';
import { ConsultationOngoingScreen } from './screens/ConsultationOngoingScreen';
import { PrescriptionUploadScreen } from './screens/PrescriptionUploadScreen';
import { CompletionOtpScreen } from './screens/CompletionOtpScreen';
import { PayoutRequestScreen } from './screens/PayoutRequestScreen';

type ScreenState = 
  | 'LOGIN'
  | 'ONBOARDING_PROFILE'
  | 'VERIFICATION'
  | 'KYC'
  | 'UNDER_REVIEW'
  | 'DASHBOARD'
  | 'WAITING_PAYMENT'
  | 'NAVIGATION'
  | 'REACHED_CONFIRMATION'
  | 'CONSULTATION_ONGOING'
  | 'PRESCRIPTION_UPLOAD'
  | 'COMPLETION_OTP'
  | 'PAYOUT_REQUEST';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('LOGIN');
  const [dashboardTab, setDashboardTab] = useState<'home' | 'history' | 'wallet' | 'profile'>('home');
  const [showIncomingRequest, setShowIncomingRequest] = useState(false);
  const [specialty, setSpecialty] = useState<string>('MBBS');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN':
        return <LoginScreen onNext={() => setCurrentScreen('ONBOARDING_PROFILE')} />;
      case 'ONBOARDING_PROFILE':
        return <OnboardingProfileScreen onNext={(val) => { setSpecialty(val); setCurrentScreen('VERIFICATION'); }} />;
      case 'VERIFICATION':
        return <VerificationScreen specialty={specialty} onNext={() => setCurrentScreen('KYC')} />;
      case 'KYC':
        return <KycScreen onNext={() => setCurrentScreen('UNDER_REVIEW')} />;
      case 'UNDER_REVIEW':
        return <UnderReviewScreen onNext={() => setCurrentScreen('DASHBOARD')} />;
      case 'DASHBOARD':
        return (
          <DashboardScreen 
            activeTab={dashboardTab}
            setActiveTab={setDashboardTab}
            onIncomingRequest={() => setShowIncomingRequest(true)}
            onRequestPayout={() => setCurrentScreen('PAYOUT_REQUEST')}
            onLogout={() => setCurrentScreen('LOGIN')}
          />
        );
      case 'WAITING_PAYMENT':
        return (
          <WaitingPaymentScreen 
            onSuccess={() => setCurrentScreen('NAVIGATION')}
            onCancel={() => setCurrentScreen('DASHBOARD')}
          />
        );
      case 'NAVIGATION':
        return <NavigationScreen onArrived={() => setCurrentScreen('REACHED_CONFIRMATION')} />;
      case 'REACHED_CONFIRMATION':
        return <ReachedConfirmationScreen onVerify={() => setCurrentScreen('CONSULTATION_ONGOING')} />;
      case 'CONSULTATION_ONGOING':
        return <ConsultationOngoingScreen onUploadPrescription={() => setCurrentScreen('PRESCRIPTION_UPLOAD')} />;
      case 'PRESCRIPTION_UPLOAD':
        return <PrescriptionUploadScreen onSubmit={() => setCurrentScreen('COMPLETION_OTP')} />;
      case 'COMPLETION_OTP':
        return <CompletionOtpScreen onComplete={() => setCurrentScreen('DASHBOARD')} />;
      case 'PAYOUT_REQUEST':
        return (
          <PayoutRequestScreen 
            onBack={() => {
              setDashboardTab('wallet');
              setCurrentScreen('DASHBOARD');
            }}
            onConfirm={() => {
              setDashboardTab('wallet');
              setCurrentScreen('DASHBOARD');
            }}
          />
        );
      default:
        return <LoginScreen onNext={() => setCurrentScreen('ONBOARDING_PROFILE')} />;
    }
  };

  return (
    <MobileLayout>
      {renderScreen()}
      
      {showIncomingRequest && (
        <IncomingRequestModal 
          onAccept={() => {
            setShowIncomingRequest(false);
            setCurrentScreen('WAITING_PAYMENT');
          }}
          onReject={() => setShowIncomingRequest(false)}
        />
      )}
    </MobileLayout>
  );
}
