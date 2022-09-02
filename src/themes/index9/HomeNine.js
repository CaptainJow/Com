import AboutImage from "../../components/about/AboutImage";
import LatestBlog from "../../components/blog/LatestBlog";
import PageMeta from "../../components/common/PageMeta";
import CtaTwo from "../../components/cta/CtaTwo";
import CustomerLogo from "../../components/customer/CustomerLogo";
import Portfolio from "../../components/portfolio/Portfolio";
import PriceThree from "../../components/prices/PriceThree";
import ServicePromo from "../../components/promo/ServicePromo";
import TechTab from "../../components/tabs/TechTab";
import TestimonialFive from "../../components/testimonial/TestimonialFive";
import FooterTwo from "../../layout/Footer/FooterTwo";
import Footer_bootstrap from "../../layout/Footer/Footer_bootstrap";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroNine from "./HeroNine";
import Customer from "../../components/customer/Customer"; 
import Footer_hire from "../../layout/Footer/Footer_hire";
import Products from "../../components/yousef_compoments/Products";
const HomeNine = () => {
  return (
    <Layout>
      <PageMeta title="IT Solution- Software &amp; IT Solutions HTML Template" />
      <Navbar />
      <HeroNine />
      <Products />
      <CustomerLogo />
      <Customer />
      <Footer_hire />
      <Footer_bootstrap/>
    </Layout>
  );
};

export default HomeNine;
