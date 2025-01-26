import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const IncomingFromConsultantPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Incoming From Consultant</Title>
      <p>This is the Incoming From Consultant page.</p>
    </div>
  );
};

export default IncomingFromConsultantPage;
