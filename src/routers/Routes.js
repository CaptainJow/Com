import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Services from "../pages/services/Services";
import SingleService from "../pages/services/SingleService";
import NotFoundScreen from "../components/others/NotFoundScreen";
import ScrollToTop from "../components/common/ScrollToTop";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Integrations from "../pages/integration/Integrations";
import IntegrationSingle from "../pages/integration/IntegrationSingle";
import Career from "../pages/career/Career";
import CareerSingle from "../pages/career/CareerSingle";
import HomeNine from "../themes/index9/HomeNine";
import Fatura_hub from "../pages/product-about/FaturaHub";
import Element_s from "../pages/product-about/Element/Element_s";
import ISIL_s from "../pages/product-about/ISIL/ISIL_s";
import Partners from "../pages/partners/Partners" ; 
import WebDevolpment from "../pages/services/WebDevolpment";
import DataBaseServices from "../pages/services/DataBaseServices";
import BusinessReportServices from "../pages/services/BusinessReportService";
import ShopifyAppDevService from "../pages/services/ShopifyAppDevService";
import Hepsiburadatg from "../components/integration/integration_docs/Hepsiburada/Hepsiburadatg";
import N11tg from "../components/integration/integration_docs/N11/N11tg";
import Ideasofttg from "../components/integration/integration_docs/Ideasoft/Ideasofttg";
import PttAvmtg from "../components/integration/integration_docs/PttAvm/PttAvmtg";
import Shopifytg from "../components/integration/integration_docs/Shopify/Shopifytg";
import Ticimaxtg from "../components/integration/integration_docs/Ticimax/Ticimaxtg";
import Trendyoltg from "../components/integration/integration_docs/Trendyol/Trendyolgt";
class Routes extends Component {

  render() {
    return (
      <>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomeNine} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/single-service" component={SingleService} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/career-single" component={CareerSingle} />
      
         
            <Route exact path="/integrations" component={Integrations} >


              
            </Route>
            <Route exact path ="/faturahub" component={Fatura_hub} />
            <Route exact path ="/element" component={Element_s} />
            <Route excat path ="/ISIL" component={ISIL_s} />
            <Route excat path ="/partners" component={Partners} />
            <Route exact path="/web-development" component={WebDevolpment} />
            <Route exact path="/database" component={DataBaseServices} />
            <Route exact path="/business-report" component={BusinessReportServices} />
            <Route exact path="/integrations/shopify-app-development" component={ShopifyAppDevService} />
            <Route excat path="/integrations/hepsiburada" component={Hepsiburadatg} />
            <Route excat path="/integrations/n11" component={N11tg} />
            <Route excat path="/integrations/ideasoft" component={Ideasofttg} />
            <Route excat path="/integrations/PttAvm" component={PttAvmtg} />
            <Route excat path="/integrations/Shopify" component={Shopifytg} />
            <Route excat path="/integrations/Ticimax" component={Ticimaxtg} />
            <Route excat path="/integrations/Trendyol" component={Trendyoltg} />
            
            <Route
              exact
              path="/integration-single"
              component={IntegrationSingle}
            />
            <Route component={NotFoundScreen} />
            
          </Switch>
        </Router>
      </>
    );
  }
}
export default Routes;
