import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import IntegrationDetail from '../../components/integration/IntegrationDetail';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import Fatura from './Fatura';

const Fatura_hub = () => {
  return (
    <Layout>
      <PageMeta />
      <Navbar />
      <Fatura /> 
      <IntegrationDetail />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Fatura_hub;
