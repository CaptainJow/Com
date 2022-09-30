import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import Database from './Database';
import ContactFormFour from '../../components/contact/ContactFormFour';

const DataBaseServices = () => {
  return (
    <Layout>
      <PageMeta title='DataBase' />
      <Navbar />
      <Database />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default DataBaseServices;
