import React from 'react';
import PageMeta from '../../components/common/PageMeta';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import BusinessReport from './BusinessReport';
import ContactFormFour from '../../components/contact/ContactFormFour';

const BusinessReportServices = () => {
  return (
    <Layout>
      <PageMeta title='DataBase' />
      <Navbar />
      <BusinessReport />
      <ContactFormFour />
      <FooterOne footerLight />
    </Layout>
  );
};

export default BusinessReportServices;
