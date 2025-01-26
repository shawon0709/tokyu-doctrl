import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const IncomingFromOthersPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Incoming From Others</Title>
      <p>This is the Incoming From Others page.</p>
    </div>
  );
};

export default IncomingFromOthersPage;
