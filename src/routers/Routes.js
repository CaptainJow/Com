import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeSassOne from "../themes/index1/HomeSassOne";
import HomeSassTwo from "../themes/index2/HomeSassTwo";
import Services from "../pages/services/Services";
import SingleService from "../pages/services/SingleService";
import Login from "../pages/onboard/Login";
import NotFoundScreen from "../components/others/NotFoundScreen";
import HomeDesktopApp from "../themes/index3/HomeDesktopApp";
import PasswordReset from "../pages/onboard/PasswordReset";
import Pricing from "../pages/Pricing";
import ScrollToTop from "../components/common/ScrollToTop";
import HomeAppLanding from "../themes/index4/HomeAppLanding";
import HomeSoftApplication from "../themes/index5/HomeSoftApplication";
import HomeStartup from "../themes/index6/HomeStartup";
import HomeDataAnalysis from "../themes/index7/HomeDataAnalysis";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ComingSoon from "../pages/ComingSoon";
import Integrations from "../pages/integration/Integrations";
import IntegrationSingle from "../pages/integration/IntegrationSingle";
import Blogs from "../pages/blog/Blogs";
import SingleBlog from "../pages/blog/SingleBlog";
import Career from "../pages/career/Career";
import CareerSingle from "../pages/career/CareerSingle";
import HelpCenter from "../pages/help-center/HelpCenter";
import SingleHelpCenter from "../pages/help-center/SingleHelpCenter";
import Signup from "../pages/onboard/Signup";
import RequestDemo from "../pages/RequestDemo";
import HomeAppTwo from "../themes/index8/HomeAppTwo";
import HomeNine from "../themes/index9/HomeNine";
import HomeTen from "../themes/index10/HomeTen";
import SingleProduct from "../pages/product/SingleProduct";
import SinglePortfolio from "../pages/SinglePortfolio";
import HomeEleven from "../themes/index11/HomeEleven";
import HomeTwelve from "../themes/index12/HomeTwelve";

class Routes extends Component {
  render() {
    return (
      <>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/" component={HomeNine} />
            <Route exact path="/home-sass-two" component={HomeSassTwo} />
            <Route exact path="/home-desktop-app" component={HomeDesktopApp} />
            <Route exact path="/home-app-landing" component={HomeAppLanding} />
            <Route
              exact
              path="/home-soft-app"
              component={HomeSoftApplication}
            />
            <Route exact path="/home-startup" component={HomeStartup} />
            <Route
              exact
              path="/home-data-analysis"
              component={HomeDataAnalysis}
            />
            <Route exact path="/home-nine" component={HomeNine} />
            <Route exact path="/home-ten" component={HomeTen} />
            <Route exact path="/home-eleven" component={HomeEleven} />
            <Route exact path="/home-twelve" component={HomeTwelve} />
            <Route exact path="/home-app-two" component={HomeAppTwo} />
            <Route exact path="/home-nine" component={HomeNine} />
            <Route exact path="/home-ten" component={HomeTen} />
            <Route exact path="/single-product" component={SingleProduct} />
            <Route exact path="/portfolio-single" component={SinglePortfolio} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/single-service" component={SingleService} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/blog-single" component={SingleBlog} />
            <Route exact path="/career" component={Career} />
            <Route exact path="/career-single" component={CareerSingle} />
            <Route exact path="/help-center" component={HelpCenter} />
            <Route
              exact
              path="/help-center-single"
              component={SingleHelpCenter}
            />
            <Route exact path="/password-reset" component={PasswordReset} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/request-for-demo" component={RequestDemo} />
            <Route exact path="/coming-soon" component={ComingSoon} />
            <Route exact path="/integrations" component={Integrations} />
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
