import React from 'react';
import PageMeta from '../../../components/common/PageMeta';
import IntegrationDetail from '../../../components/integration/IntegrationDetail';
import FooterOne from '../../../layout/Footer/FooterOne';
import Navbar from '../../../layout/Header/Navbar';
import Layout from '../../../layout/Layout';
import Element from './Element';

const Element_s = () => {
  return (
    <Layout>
      <PageMeta />
      <Navbar />
      <Element /> 
      <IntegrationDetail />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Element_s;
