import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import Database from './Database';
import ContactFormTwo from '../../components/contact/ContactFormTwo';

const DataBaseServices = () => {
  return (
    <Layout>
      <PageMeta title='DataBase' />
      <Navbar />
      <Database />
      <ContactFormTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default DataBaseServices;
