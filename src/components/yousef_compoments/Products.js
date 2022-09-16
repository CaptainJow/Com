import React from "react";
import './products.css' ;
import { Link } from "react-router-dom";
const Products = () => {

  return (
    <section id="Products" className="brand-logo section">
      <div className="container">
      <div className="header">
    <h1>Our Products</h1>
    <h1>Made 100% by our Team</h1>

    <p>these products are full-stack products and were built completly by our teams </p>
  </div>
  <div className="row1-container" >
    <div className="box box-down cyan">
    <Link style={  {textDecoration: "none"}} to="/ISIL"  >
      <h2>Işın Daylight</h2>
      <p>Monitors activity to identify project roadblocks</p>
      <img  src="assets/img/isin_daylight.png" alt="logo_isin" className=" img_product  " /> 
    </Link>
    </div>
  
     <div className="box red ">
     <Link style={  {textDecoration: "none"}} to="faturahub"  >
      <h2>FaturaHub</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      <img  src="assets/img/Fatura_hub.png" alt="logo_faturahub" className="img_product " /> 
    </Link>
     </div>

    <div className="box box-down blue">
    <Link style={  {textDecoration: "none"}} to="element"  >
      <h2>Elements</h2>
      <p>Uses data from past projects to provide better delivery estimates</p>
      <img  src="assets/img/ERP.png" alt="ERP" className="img_product element_img"/>
    </Link>
    </div>

  </div>   
  </div>
    </section>
  );
};

export default Products;