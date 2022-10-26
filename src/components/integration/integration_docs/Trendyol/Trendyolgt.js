import React from 'react';
import PageMeta from '../../../../components/common/PageMeta';
import FooterOne from '../../../../layout/Footer/FooterOne';
import Navbar from '../../../../layout/Header/Navbar';
import Layout from '../../../../layout/Layout';
import Trendyol from './Trendyol';
import ContactFormFour from '../../../../components/contact/ContactFormFour';

const Trendyoltg = () => {
  return (
    <Layout>
      <PageMeta title='Ticimax' />
      <Navbar />
      <Trendyol />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Trendyoltg;
