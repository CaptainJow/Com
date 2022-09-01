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
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";
import HeroNine from "./HeroNine";
import Customer from "../../components/customer/Customer"; 
const HomeNine = () => {
  return (
    <Layout>
      <PageMeta title="IT Solution- Software &amp; IT Solutions HTML Template" />
      <Navbar />
      <HeroNine />
      <CustomerLogo />
      <Customer />
      <FooterTwo/>
    </Layout>
  );
};

export default HomeNine;
