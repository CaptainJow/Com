import React from 'react';
import PageMeta from '../../../components/common/PageMeta';
import IntegrationDetail from '../../../components/integration/IntegrationDetail';
import FooterOne from '../../../layout/Footer/FooterOne';
import Navbar from '../../../layout/Header/Navbar';
import Layout from '../../../layout/Layout';
import ISIL from './ISIL';
const ISIL_s = () => {
  return (
    <Layout>
      <PageMeta />
      <Navbar />
      <ISIL /> 
      <IntegrationDetail />
      <FooterOne footerLight />
    </Layout>
  );
};

export default ISIL_s;
