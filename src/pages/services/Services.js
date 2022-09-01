import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import FeatureTwo from '../../components/features/FeatureTwo';
import FooterTwo from "../../layout/Footer/FooterTwo";
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import ServicePromo from "../../components/promo/ServicePromo";

const Services = () => {
  return (
    <Layout>
      <Navbar classOption='navbar-light' />
      <PageHeader
        title='We are Development Experts'
        desc='We are trying to give you the best experience in the market'
      />
      <ServicePromo />
      <FooterTwo/>
    </Layout>
  );
};

export default Services;
