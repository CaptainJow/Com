import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import Shopify from './ShopifyAppDevelopment';
import ContactFormFour from '../../components/contact/ContactFormFour';

const ShopifyAppDevService = () => {
  return (
    <Layout>
      <PageMeta title='Shopify App Development' />
      <Navbar />
      <Shopify />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default ShopifyAppDevService;
