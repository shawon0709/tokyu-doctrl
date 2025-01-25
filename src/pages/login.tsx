import React, { useState } from 'react';
import { Button, Input, Checkbox, Form, message } from 'antd';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      message.success('Login successful!');
      router.push('/dashboard');
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    message.error('Login failed!');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to bottom, #3498db, #2c3e50)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'url(/wave.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        animation: 'wave 10s linear infinite',
        opacity: 0.3,
      }}></div>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1 style={{
          fontSize: '2.5em',
          marginBottom: '20px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
          color: '#333',
          fontFamily: 'Arial, sans-serif',
        }}>
          Tokyu-Doctrl
        </h1>
        <Form
          form={form}
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ width: 300 }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <style jsx>{`
        @keyframes wave {
          0% {
            background-position: 0 bottom;
          }
          50% {
            background-position: 100% bottom;
          }
          100% {
            background-position: 0 bottom;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
