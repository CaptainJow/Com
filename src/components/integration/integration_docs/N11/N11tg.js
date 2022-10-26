import React from 'react';
import PageMeta from '../../../../components/common/PageMeta';
import FooterOne from '../../../../layout/Footer/FooterOne';
import Navbar from '../../../../layout/Header/Navbar';
import Layout from '../../../../layout/Layout';
import N11 from './N11';
import ContactFormFour from '../../../../components/contact/ContactFormFour';

const N11tg = () => {
  return (
    <Layout>
      <PageMeta title='N11' />
      <Navbar />
      <N11 />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default N11tg;
