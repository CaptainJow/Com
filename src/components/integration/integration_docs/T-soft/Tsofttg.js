import React from 'react';
import PageMeta from '../../../../components/common/PageMeta';
import FooterOne from '../../../../layout/Footer/FooterOne';
import Navbar from '../../../../layout/Header/Navbar';
import Layout from '../../../../layout/Layout';
import Tsoft from './Tsoft';
import ContactFormFour from '../../../../components/contact/ContactFormFour';

const Tsofttg = () => {
  return (
    <Layout>
      <PageMeta title='Ticimax' />
      <Navbar />
      <Tsoft />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Tsofttg;
