import React from "react";
import { Link } from "react-router-dom";
import './footer_bootstrap.css' ;

import { FaInstagram , FaTwitter , FaGithub } from 'react-icons/fa';
const Footer_bootstrap = () => {
  return (
    <>
  <footer className="deneb_footer color-img ptb-60">
	<div className="widget_wrapper" >
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-6 col-12">
					<div className="widget_about">
						<p>If you think you have the passion, attitude and capability to join us the next big software companys so that we can get the convers.</p>
						<ul className="social">
							<li><FaGithub /></li>
							<li><FaTwitter /></li>
							<li><FaInstagram /></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="widget widget_link">
						<div className="widget_title">
							<h4>Links</h4>
						</div>
						<ul>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Portfolio</a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-4 col-md-6 col-sm-12">
					<div className="widget widget_contact">
						<div className="widget_title">
							<h4>Contact Us</h4>
						</div>
						<div className="contact_info">
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-phone-alt"></i>
								</div>
								<div className="info">
									<p><a href="tel:+919246147999">1800-121-3637</a></p>
									<p><a href="tel:+919246147999">+91 924-614-7999</a></p>
								</div>
							</div>
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-envelope"></i>
								</div>
								<div className="info">
									<p><a href="mailto:info@deneb.com">info@deneb.com</a></p>
									<p><a href="mailto:services@deneb.com">services@deneb.com</a></p>
								</div>
							</div>
							<div className="single_info">
								<div className="icon">
									<i className="fas fa-map-marker-alt"></i>
								</div>
								<div className="info">
									<p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
  </>
  );
};

export default Footer_bootstrap;