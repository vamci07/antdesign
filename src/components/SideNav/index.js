import React from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

function SideNav({ collapsed }) {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideNav;
