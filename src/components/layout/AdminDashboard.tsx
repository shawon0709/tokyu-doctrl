import React from 'react';
import { Typography, Card, Row, Col, Statistic } from 'antd';

const { Title } = Typography;

const AdminDashboard: React.FC = () => {
  const dummyData = {
    totalUsers: 150,
    activeUsers: 120,
    newUsers: 10,
    totalPosts: 500,
    newPosts: 20,
  };

  return (
    <div>
      <Title level={2}>Dashboard</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Users" value={dummyData.totalUsers} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="Active Users" value={dummyData.activeUsers} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="New Users" value={dummyData.newUsers} />
          </Card>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={8}>
          <Card>
            <Statistic title="Total Posts" value={dummyData.totalPosts} />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic title="New Posts" value={dummyData.newPosts} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
