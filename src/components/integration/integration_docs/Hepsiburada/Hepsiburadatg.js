import React from 'react';
import PageMeta from '../../../../components/common/PageMeta';
import FooterOne from '../../../../layout/Footer/FooterOne';
import Navbar from '../../../../layout/Header/Navbar';
import Layout from '../../../../layout/Layout';
import Hepsiburada from './Hepsiburada';
import ContactFormFour from '../../../../components/contact/ContactFormFour';

const Hepsiburadatg = () => {
  return (
    <Layout>
      <PageMeta title='Hepsiburada' />
      <Navbar />
      <Hepsiburada />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Hepsiburadatg;
