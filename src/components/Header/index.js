import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header: AntdHeader } = Layout;

function Header({ collapsed, toggle }) {
  return (
    <AntdHeader className="site-layout-background" style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggle,
      })}
    </AntdHeader>
  );
}

export default Header;
