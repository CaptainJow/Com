import React, { useState } from 'react';
import HeroTitle from '../../components/common/HeroTitle';
import './HeroNine.css' ;
import { useTranslation } from "react-i18next";
const HeroNine = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section
        className='hero-section ptb-100 text-white bg-gradient'
        style={{
          background: "url('assets/img/hero-dot-bg.png')no-repeat center right",
        }}
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-10'>
              <div className='hero-content-wrap mt-5'>
                <HeroTitle
                  title='Shams Software'
                  desc1="In a connected world with apps, maintain your company's efficiency and competitiveness." 
                  desc2=" We offer specialized software applications, SaaS products, data integrations, and workflow solutions to enhance your organization and give you more time to focus on what really matters."/>
              </div>
            </div>
            <div className='col-lg-6 col-md-8 mt-5'>
              <div className='hero-img position-relative circle-shape-images'>
                {/* <!--animated shape start--> */}
                <ul className='position-absolute animate-element parallax-element circle-shape-list'>
                  <li className='layer' data-depth='0.02'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-1 hero-1'
                    />
                  </li>
                  <li className='layer' data-depth='0.04'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-2 hero-1'
                    />
                  </li>
                  <li className='layer' data-depth='0.04'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-3 hero-1'
                    />
                  </li>
                  <li className='layer' data-depth='0.03'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-4 hero-1'
                    />
                  </li>
                  <li className='layer' data-depth='0.03'>
                    <img
                      src='assets/img/shape/circle-1.svg'
                      alt='shape'
                      className='circle-shape-item type-5 hero-1'
                    />
                  </li>
                </ul>
                {/* <!--animated shape end--> */}
                <img
                  src='assets/img/screen/animated-screen-5.svg'
                  alt='hero img'
                  className='img-fluid position-relative z-5'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroNine;
