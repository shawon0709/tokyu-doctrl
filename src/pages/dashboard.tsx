import React from 'react';
import { Button, Typography } from 'antd';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

const DashboardPage: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Title level={2}>Welcome to the Dashboard!</Title>
      <Button type="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default DashboardPage;
