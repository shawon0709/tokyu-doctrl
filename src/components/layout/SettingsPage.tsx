import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const SettingsPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Settings</Title>
      <p>This is the Settings page.</p>
    </div>
  );
};

export default SettingsPage;
