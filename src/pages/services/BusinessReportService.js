import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import ContactFormTwo from '../../components/contact/ContactFormTwo';
import BusinessReport from './BusinessReport';

const BusinessReportServices = () => {
  return (
    <Layout>
      <PageMeta title='DataBase' />
      <Navbar />
      <BusinessReport />
      <ContactFormTwo />
      <FooterOne footerLight />
    </Layout>
  );
};

export default BusinessReportServices;
