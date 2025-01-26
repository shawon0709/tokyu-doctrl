import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const OutgoingToOthersPage: React.FC = () => {
  return (
    <div>
      <Title level={2}>Outgoing To Others</Title>
      <p>This is the Outgoing To Others page.</p>
    </div>
  );
};

export default OutgoingToOthersPage;
