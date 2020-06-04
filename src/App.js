import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import routes from 'utils/routes';
import Layout from 'components/Layout';

function App() {
  const { i18n } = useTranslation();
  const [lng, setLng] = React.useState('en');

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLng(lng);
  };

  return (
    <Layout lng={lng} changeLanguage={changeLanguage}>
      {routes}
    </Layout>
  );
}

export default App;
