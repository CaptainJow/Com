import React from 'react';
import PageMeta from '../../../../components/common/PageMeta';
import FooterOne from '../../../../layout/Footer/FooterOne';
import Navbar from '../../../../layout/Header/Navbar';
import Layout from '../../../../layout/Layout';
import Ideasoft from './Ideasoft';
import ContactFormFour from '../../../../components/contact/ContactFormFour';

const Ideasofttg = () => {
  return (
    <Layout>
      <PageMeta title='Ideasoft' />
      <Navbar />
      <Ideasoft />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Ideasofttg;
