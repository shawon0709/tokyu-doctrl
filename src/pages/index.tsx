import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import LoginPage from '@/components/login/Login';
import AdminLayout from '@/components/layout/AdminLayout';
import AdminDashboard from '@/components/layout/AdminDashboard';
import IncomingFromConsultantPage from '@/components/layout/incoming/IncomingFromConsultant';
import IncomingFromEmployerPage from '@/components/layout/incoming/IncomingFromEmployer';
import IncomingFromOthersPage from '@/components/layout/incoming/IncomingFromOthers';
import OutgoingToConsultantPage from '@/components/layout/outgoing/OutgoingToConsultant';
import OutgoingToEmployerPage from '@/components/layout/outgoing/OutgoingToEmployer';
import OutgoingToOthersPage from '@/components/layout/outgoing/OutgoingToOthers';
import SettingsPage from '@/components/layout/SettingsPage';

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('dashboard');
  const router = useRouter();

  // Load login status from localStorage
  useEffect(() => {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Sync currentRoute with the actual router pathname
  useEffect(() => {
    const normalizedRoute = router.pathname.replace('/admin/', '') || 'dashboard';
    setCurrentRoute(normalizedRoute);
  }, [router.pathname]);

  // Handle login success
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard'); // Redirect to the dashboard
  };

  // Render the correct component based on the currentRoute
  const renderAdminContent = () => {
    switch (currentRoute) {
      case 'dashboard':
        return <AdminDashboard />;
      case 'incoming/from-consultant':
        return <IncomingFromConsultantPage />;
      case 'incoming/from-employer':
        return <IncomingFromEmployerPage />;
      case 'incoming/from-others':
        return <IncomingFromOthersPage />;
      case 'outgoing/to-consultant':
        return <OutgoingToConsultantPage />;
      case 'outgoing/to-employer':
        return <OutgoingToEmployerPage />;
      case 'outgoing/to-others':
        return <OutgoingToOthersPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <AdminDashboard />;
    }
  };

  return (
    <>
      {isLoggedIn ? (
           <AdminLayout setRoute={setCurrentRoute}>
           {renderAdminContent()}
         </AdminLayout>
      ) : (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default HomePage;
