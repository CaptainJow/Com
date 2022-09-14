import PageMeta from "../../components/common/PageMeta";
import FooterOne from "../../layout/Footer/FooterOne";
import CyberService from "../../components/services/CyberService";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroNine from "./HeroNine";
import Products from "../../components/yousef_compoments/Products";
import WorkProcessTwo from "../../components/work-process/WorkProcessTwo";
import CtaThree from "../../components/cta/CtaThree";
import IntegrationOne from "../../components/integration/IntegrationOne";
import IntegrationTwo from "../../components/integration/IntegrationTwo";
const HomeNine = () => {
  return (
    <Layout>
      <PageMeta title='ShamsSoftware' />
      <Navbar  />
      <HeroNine />
      <CyberService />

      <CtaThree /> 
      <WorkProcessTwo/>
      <IntegrationOne/>
      <IntegrationTwo />
      <Products />
      <FooterOne footerLight />
    </Layout>
  );
};

export default HomeNine;
