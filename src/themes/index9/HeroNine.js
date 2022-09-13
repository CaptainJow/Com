import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video';
import HeroTitle from '../../components/common/HeroTitle';
import './HeroNine.css' ;
import { useTranslation } from "react-i18next";
const HeroNine = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setOpen] = useState(false);
 console.log("heroNine");
  return (
    <>
      <section
        className='hero-section ptb-120 text-white bg-gradient'
        style={{
          background: "url('assets/img/hero-dot-bg.png')no-repeat center right",
        }}
      >
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-md-10'>
              <div className='hero-content-wrap mt-5'>
                <HeroTitle
                  title='ShamsSoftware'
                  desc='Shams software company has a structure that offers end-to-end solutions to its customers in the
                   global market and produces products and projects with a team specialized in certain fields.'
                />
              
                
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
