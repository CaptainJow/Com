import PageMeta from "../../components/common/PageMeta";
import CtaTwo from "../../components/cta/CtaTwo";
import FooterOne from "../../layout/Footer/FooterOne";
import CyberService from "../../components/services/CyberService";
import Footer_bootstrap from "../../layout/Footer/Footer_bootstrap";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroNine from "./HeroNine";
import Products from "../../components/yousef_compoments/Products";
import CtaFour from "../../components/cta/CtaFour" ;
import WorkProcess from "../../components/work-process/WorkProcess";
import CtaThree from "../../components/cta/CtaThree";
import IntegrationOne from "../../components/integration/IntegrationOne";
const HomeNine = () => {
  return (
    <Layout>
      <PageMeta title="IT Solution- Software &amp; IT Solutions HTML Template" />
      <Navbar />
      <HeroNine />
      <CyberService />
      <CtaTwo />
      <WorkProcess />
      <CtaThree />
      <Products />
      <CtaFour/>
      <IntegrationOne/>
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeNine;
