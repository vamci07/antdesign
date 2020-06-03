import React from 'react';
import { Layout as AntdLayout } from 'antd';
import './style.css';
import SideNav from '../SideNav';
import Footer from '../Footer';
import Header from '../Header';
import Content from '../Content';

function Layout() {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <SideNav collapsed={collapsed} />
      <AntdLayout className="site-layout">
        <Header collapsed={collapsed} toggle={toggle} />
        <Content />
        <Footer />
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;
