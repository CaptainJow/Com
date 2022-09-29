import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import FirstPart from './WebDevComp/FirstPart';
import ContactFormTwo from '../../components/contact/ContactFormTwo';
const WebDevolpment = () => {
  return (
    <Layout>
      <PageMeta title='Web Devolpment' />
      <Navbar />
      <FirstPart />
      <ContactFormTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default WebDevolpment;
