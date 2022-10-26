import React from 'react';
import PageMeta from '../../../../components/common/PageMeta';
import FooterOne from '../../../../layout/Footer/FooterOne';
import Navbar from '../../../../layout/Header/Navbar';
import Layout from '../../../../layout/Layout';
import PttAvm from './PttAvm';
import ContactFormFour from '../../../../components/contact/ContactFormFour';

const PttAvmtg = () => {
  return (
    <Layout>
      <PageMeta title='PttAvm' />
      <Navbar />
      <PttAvm />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default PttAvmtg;
