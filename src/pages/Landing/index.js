import React from 'react';
import { Breadcrumb } from 'antd';
import { useTranslation, Trans } from 'react-i18next';

function Landing({ lng, changeLanguage }) {
  const { t } = useTranslation();

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <h2>{t('title')}</h2>
        <Trans i18nKey="description.part1">
          To get started, edit <code>src/App.js</code> and save to reload.
        </Trans>
        <p>Bill is a cat.</p>
        <div>{t('description.part2')}</div>
      </div>
    </>
  );
}

export default Landing;
