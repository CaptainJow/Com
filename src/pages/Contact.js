import React from 'react';
import PageHeader from '../components/common/PageHeader';
import ContactFormTwo from '../components/contact/ContactFormTwo';
import FooterOne from '../layout/Footer/FooterOne';
import Navbar from '../layout/Header/Navbar';
import Layout from '../layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <Navbar />
      <PageHeader
        title='Contact Us'
        desc='Seamlessly actualize client-based users after out-of-the-box value data through frictionless expertise. 
        Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services.'
      />
       <ContactFormTwo />
     
      <FooterOne footerLight />
    </Layout>
  );
};

export default Contact;
