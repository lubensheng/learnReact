import React from 'react';
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed: any) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['homePage']} mode="inline">
            <Menu.Item key="homePage" icon={<PieChartOutlined />}>
              主页
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="人员管理">
              <Menu.Item key="manegeList">管理员列表</Menu.Item>
              <Menu.Item key="studentList">学生列表</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content>
          1231
        </Content>
      </Layout>
    );
  }
}

export default SiderDemo;