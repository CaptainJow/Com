import React from 'react';
import PageMeta from '../../../../components/common/PageMeta';
import FooterOne from '../../../../layout/Footer/FooterOne';
import Navbar from '../../../../layout/Header/Navbar';
import Layout from '../../../../layout/Layout';
import Shopify from './Shopify';
import ContactFormFour from '../../../../components/contact/ContactFormFour';

const Shopifytg = () => {
  return (
    <Layout>
      <PageMeta title='Shopify integration' />
      <Navbar />
       <Shopify/>
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Shopifytg;
