import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { useRouter } from 'next/router';

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

interface AdminLayoutProps {
  children: React.ReactNode;
  setRoute: (route: string) => void;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, setRoute }) => {
  const router = useRouter(); // Correct hook for pages directory

  // Define the menu items
  const menuItems = [
    {
      key: 'dashboard',
      label: 'Dashboard',
    },
    {
      key: 'incoming',
      label: 'Incoming',
      children: [
        { key: 'incoming/from-consultant', label: 'From Consultant' },
        { key: 'incoming/from-employer', label: 'From Employer' },
        { key: 'incoming/from-others', label: 'From Others' },
      ],
    },
    {
      key: 'outgoing',
      label: 'Outgoing',
      children: [
        { key: 'outgoing/to-consultant', label: 'To Consultant' },
        { key: 'outgoing/to-employer', label: 'To Employer' },
        { key: 'outgoing/to-others', label: 'To Others' },
      ],
    },
    { key: 'settings', label: 'Settings' },
    { key: 'logout', label: 'Logout' },
  ];

  const handleMenuClick = (e: any) => {
    if (e.key === 'logout') {
      setRoute('/'); // Navigate to home page
    } else {
      setRoute(e.key); // Update the current route
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu
          theme="dark"
          defaultSelectedKeys={['dashboard']}
          mode="inline"
          onClick={handleMenuClick}
          items={menuItems} // Use 'items' prop instead of 'children'
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }}>
          <div style={{ padding: 16 }}>
            <Title level={3} style={{ margin: 0 }}>Admin Panel</Title>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div style={{ padding: 24, background: '#fff', textAlign: 'left' }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
