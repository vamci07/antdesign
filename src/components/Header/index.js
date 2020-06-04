import React from 'react';
import clsx from 'clsx';
import { Layout, Avatar, Dropdown, Button, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined } from '@ant-design/icons';
import './style.css';

const { Header: AntdHeader } = Layout;

function Header({ collapsed, toggle, lng, changeLanguage }) {
  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="link">Logout</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <AntdHeader
      className="site-layout-background"
      style={{
        position: 'fixed',
        zIndex: 1,
        width: collapsed ? 'calc(100vw - 80px)' : 'calc(100vw - 200px)',
        padding: 0,
        paddingRight: 24,
      }}
    >
      <div className="container">
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: 'trigger',
          onClick: toggle,
        })}
        <div className="actions">
          <div className={clsx('default', { active: lng === 'de' })} onClick={() => changeLanguage('de')}>
            de
          </div>
          <div className={clsx('default', { active: lng === 'en' })} onClick={() => changeLanguage('en')}>
            en
          </div>
          <Dropdown overlay={menu} trigger={['click']}>
            <Avatar
              style={{
                backgroundColor: '#87d068',
                cursor: 'pointer'
              }}
              icon={<UserOutlined />}
            />
          </Dropdown>
        </div>
      </div>
    </AntdHeader>
  );
}

export default Header;
