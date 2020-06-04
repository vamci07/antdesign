import React from 'react';
import { Layout as AntdLayout } from 'antd';
import './style.css';
import SideNav from '../SideNav';
import Footer from '../Footer';
import Header from '../Header';
import Content from '../Content';

function Layout({ lng, changeLanguage, children }) {
  const [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <SideNav collapsed={collapsed} />
      <AntdLayout className="site-layout">
        <Header collapsed={collapsed} toggle={toggle} lng={lng} changeLanguage={changeLanguage} />
        <Content children={children} />
        <Footer />
      </AntdLayout>
    </AntdLayout>
  );
}

export default Layout;
