import './login.scss'
import React from 'react'
import {connect} from 'react-redux'
import queryString from "query-string";
import { Form, Input, Button,Card } from 'antd';
import { UserOutlined,LockTwoTone} from '@ant-design/icons';
import config from '@/config';


const Login = (props:any) => {
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24 },
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
    const {login} = props
    const requestData = {};
    const searchCondition = queryString.parse(window.location.search);

    if (searchCondition) {
      const platformParams = ["responseType", "clientId", "redirectUri"];
      Object.keys(searchCondition).forEach((key) => {
        if (platformParams.includes(key) && searchCondition[key]) {
          requestData[key] = searchCondition[key];
        }
      });
    }

    Object.assign(requestData, values);
    login(requestData)
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
        <img src='/static/images/basic/logo.png' alt=""/>
        <span className="title"> {config.platformTitle} </span>
      </div>
      <Form.Item
        {...layout}
        name="userName"
        rules={[{required: true,message: '请输入用户名!' }]}
      >
        <Input prefix={<UserOutlined className='prefixIcon'/>}
        placeholder="用户名"/>
      </Form.Item>

      <Form.Item
        {...layout}
        name="password"
        rules={[{required: true,message: '请输入密码!' }]}
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

const mapStateToProps = (state:any) => state

const mapDispatchToProps = {
  login: (userInfo:any) => {
    return {type: 'login',payload: userInfo}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
