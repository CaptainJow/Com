import React from 'react';
import PageMeta from '../../../../components/common/PageMeta';
import FooterOne from '../../../../layout/Footer/FooterOne';
import Navbar from '../../../../layout/Header/Navbar';
import Layout from '../../../../layout/Layout';
import Ticimax from './Ticimax';
import ContactFormFour from '../../../../components/contact/ContactFormFour';

const Ticimaxtg = () => {
  return (
    <Layout>
      <PageMeta title='Ticimax' />
      <Navbar />
      <Ticimax />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Ticimaxtg;
