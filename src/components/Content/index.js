import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Content: AntdContent } = Layout;

function Content() {
  return (
    <AntdContent style={{ margin: '0 16px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        Bill is a cat.
      </div>
    </AntdContent>
  );
}

export default Content;
