import React from 'react'
import './login.scss'
import { Form, Input, Button,Card } from 'antd';
import { UserOutlined,LockTwoTone} from '@ant-design/icons';
import loginImg from '@/assets/images/login/logo.png'

const Login = () => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  return (
    <Card   style={{ width: 350 }}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
      <div className="logo-scope">
        <img src={loginImg} />
        <span className="title">干部监督综合管控平台</span>
      </div>
      <Form.Item
        {...layout}
        name="username"
        rules={[{  message: 'Please input your username!' }]}
      >
        <Input prefix={<UserOutlined className='prefixIcon'/>}
        placeholder="用户名"/>
      </Form.Item>

      <Form.Item
        {...layout}
        name="password"
        rules={[{  message: 'Please input your password!' }]}
      >
        <Input.Password  prefix={<LockTwoTone className="prefixIcon"/>} placeholder="密码"/>
      </Form.Item>

      <Form.Item  className="login-action">
        <Button type="primary" htmlType="submit" block>提交</Button>
      </Form.Item>
    </Form>
    </Card>
  )
}

export default Login
