import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import PageMeta from '../../components/common/PageMeta';
import FeatureImgContentThree from '../../components/feature-img-content/FeatureImgContentThree';
import FeatureImgEight from '../../components/features/FeatureImgEight';
import RequestForDemo from '../../components/others/RequestForDemo';
import PromoThree from '../../components/promo/PromoThree';
import FooterOne from '../../layout/Footer/FooterOne';
import Navbar from '../../layout/Header/Navbar';
import Layout from '../../layout/Layout';
import FirstPart from './WebDevComp/FirstPart';

const WebDevolpment = () => {
  return (
    <Layout>
      <PageMeta title='Web Devolpment' />
      <Navbar />
      <FirstPart />
      <FooterOne footerLight />
    </Layout>
  );
};

export default WebDevolpment;
