import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const IncomingFromEmployerPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Incoming From Employer</Title>
      <p>This is the Incoming From Employer page.</p>
    </div>
  );
};

export default IncomingFromEmployerPage;
