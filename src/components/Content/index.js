import React from 'react';
import { Layout } from 'antd';

const { Content: AntdContent } = Layout;

function Content({ children }) {
  return <AntdContent style={{ margin: '0 16px', marginTop: 64 }}>{children}</AntdContent>;
}

export default Content;
