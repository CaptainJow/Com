import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import PageMeta from '../../components/common/PageMeta';
import Navbar from '../../layout/Header/Navbar';
import CtaSubscribe from '../../components/cta/CtaSubscribe';
import IntegrationFour from '../../components/integration/IntegrationFour';
import Promo from '../../components/promo/Promo';
import FooterOne from '../../layout/Footer/FooterOne';
import Layout from '../../layout/Layout';

const Integrations = () => {
  return (
    <Layout>
      <PageMeta title='Partners' />
      <Navbar />
      <PageHeader
        title='Our Featured Partners'
        desc='Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise.'
      />
      <IntegrationFour />
      <Promo bgWhite/>
      <CtaSubscribe />
      <FooterOne footerLight />
    </Layout>
  );
};

export default Integrations;
