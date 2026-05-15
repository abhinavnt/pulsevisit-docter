import { useState } from 'react';
import { MobileLayout } from './components/MobileLayout';
import { LoginScreen } from './screens/LoginScreen';
import { RoleSelectionScreen, type ProviderRole } from './screens/RoleSelectionScreen';
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
import { CarePlanSelectionScreen } from './screens/CarePlanSelectionScreen';
import { CompletionOtpScreen } from './screens/CompletionOtpScreen';
import { PayoutRequestScreen } from './screens/PayoutRequestScreen';
import {
  NurseAvailabilityScreen,
  NurseDashboardScreen,
  NurseDocumentUploadScreen,
  NurseHelpScreen,
  NurseQualificationScreen,
  NurseRegistrationScreen,
  NurseSkillsScreen,
  NurseTrainingScreen,
  NurseVerificationStatusScreen,
  NurseVisitCompletedScreen,
  NurseVisitFlowScreen,
} from './screens/NurseScreens';

type ScreenState = 
  | 'LOGIN'
  | 'ROLE_SELECTION'
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
  | 'CARE_PLAN_SELECTION'
  | 'COMPLETION_OTP'
  | 'PAYOUT_REQUEST'
  | 'NURSE_REGISTRATION'
  | 'NURSE_QUALIFICATION'
  | 'NURSE_DOCUMENTS'
  | 'NURSE_VERIFICATION_STATUS'
  | 'NURSE_DASHBOARD'
  | 'NURSE_SKILLS'
  | 'NURSE_AVAILABILITY'
  | 'NURSE_VISIT_FLOW'
  | 'NURSE_VISIT_COMPLETED'
  | 'NURSE_TRAINING'
  | 'NURSE_HELP';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('LOGIN');
  const [dashboardTab, setDashboardTab] = useState<'home' | 'history' | 'wallet' | 'profile'>('home');
  const [nurseTab, setNurseTab] = useState<'home' | 'visits' | 'care' | 'earnings' | 'profile'>('home');
  const [showIncomingRequest, setShowIncomingRequest] = useState(false);
  const [specialty, setSpecialty] = useState<string>('MBBS');
  const [providerRole, setProviderRole] = useState<ProviderRole | null>(null);

  const handleRoleSelect = (role: ProviderRole) => {
    setProviderRole(role);
    setCurrentScreen(role === 'doctor' ? 'ONBOARDING_PROFILE' : 'NURSE_REGISTRATION');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'LOGIN':
        return <LoginScreen onNext={() => setCurrentScreen('ROLE_SELECTION')} />;
      case 'ROLE_SELECTION':
        return <RoleSelectionScreen onSelect={handleRoleSelect} />;
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
      case 'NURSE_REGISTRATION':
        return <NurseRegistrationScreen onNext={() => setCurrentScreen('NURSE_QUALIFICATION')} />;
      case 'NURSE_QUALIFICATION':
        return <NurseQualificationScreen onNext={() => setCurrentScreen('NURSE_DOCUMENTS')} />;
      case 'NURSE_DOCUMENTS':
        return <NurseDocumentUploadScreen onNext={() => setCurrentScreen('NURSE_VERIFICATION_STATUS')} />;
      case 'NURSE_VERIFICATION_STATUS':
        return <NurseVerificationStatusScreen onNext={() => setCurrentScreen('NURSE_DASHBOARD')} />;
      case 'NURSE_DASHBOARD':
        return (
          <NurseDashboardScreen
            activeTab={nurseTab}
            setActiveTab={setNurseTab}
            onIncomingRequest={() => setShowIncomingRequest(true)}
            onOpenVisit={() => setCurrentScreen('NURSE_VISIT_FLOW')}
            onOpenSkills={() => setCurrentScreen('NURSE_SKILLS')}
            onOpenAvailability={() => setCurrentScreen('NURSE_AVAILABILITY')}
            onOpenTraining={() => setCurrentScreen('NURSE_TRAINING')}
            onOpenHelp={() => setCurrentScreen('NURSE_HELP')}
            onLogout={() => {
              setProviderRole(null);
              setCurrentScreen('LOGIN');
            }}
          />
        );
      case 'NURSE_SKILLS':
        return <NurseSkillsScreen onBack={() => setCurrentScreen('NURSE_DASHBOARD')} />;
      case 'NURSE_AVAILABILITY':
        return <NurseAvailabilityScreen onBack={() => setCurrentScreen('NURSE_DASHBOARD')} />;
      case 'NURSE_VISIT_FLOW':
        return <NurseVisitFlowScreen onBack={() => setCurrentScreen('NURSE_DASHBOARD')} onComplete={() => setCurrentScreen('NURSE_VISIT_COMPLETED')} />;
      case 'NURSE_VISIT_COMPLETED':
        return <NurseVisitCompletedScreen onDone={() => setCurrentScreen('NURSE_DASHBOARD')} />;
      case 'NURSE_TRAINING':
        return <NurseTrainingScreen onBack={() => setCurrentScreen('NURSE_DASHBOARD')} />;
      case 'NURSE_HELP':
        return <NurseHelpScreen onBack={() => setCurrentScreen('NURSE_DASHBOARD')} />;
      case 'WAITING_PAYMENT':
        return (
          <WaitingPaymentScreen 
            onSuccess={() => {
              setCurrentScreen(providerRole === 'nurse' ? 'NURSE_VISIT_FLOW' : 'NAVIGATION');
            }}
            onCancel={() => {
              setCurrentScreen(providerRole === 'nurse' ? 'NURSE_DASHBOARD' : 'DASHBOARD');
            }}
          />
        );
      case 'NAVIGATION':
        return <NavigationScreen onArrived={() => setCurrentScreen('REACHED_CONFIRMATION')} />;
      case 'REACHED_CONFIRMATION':
        return <ReachedConfirmationScreen onVerify={() => setCurrentScreen('CONSULTATION_ONGOING')} />;
      case 'CONSULTATION_ONGOING':
        return <ConsultationOngoingScreen onUploadPrescription={() => setCurrentScreen('PRESCRIPTION_UPLOAD')} />;
      case 'PRESCRIPTION_UPLOAD':
        return <PrescriptionUploadScreen onSubmit={() => setCurrentScreen('CARE_PLAN_SELECTION')} />;
      case 'CARE_PLAN_SELECTION':
        return <CarePlanSelectionScreen onComplete={() => setCurrentScreen('COMPLETION_OTP')} />;
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
        return <LoginScreen onNext={() => setCurrentScreen('ROLE_SELECTION')} />;
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
