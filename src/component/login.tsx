import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
// import { login } from '../service/index';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hook';
import { getUserInfoAysnc } from '../redux/reducers/userReducer';

const Login = () => {
  const dispatch =useAppDispatch()
  const hanldeLogin = () => {
    // login({username: 'admin', password: '123456'});
    dispatch(getUserInfoAysnc({username: 'admin', password: '123456'}));
  } 
  // 获取dispath用于向store中派发方法
  console.log(useAppSelector(state =>state));
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{ marginTop: '20px' }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input style={{ width: '300px' }} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password style={{ width: '300px' }} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>记住登录</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="button" onClick={hanldeLogin} >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
