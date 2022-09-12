import React, { useEffect, useState} from "react";
import OffCanvasMenu from "./OffCanvasMenu";
import './navbar.css'  ; 
import { useLocation , Link} from "react-router-dom" ;
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr"  ; 


 
const Navbar = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [currentLanguage , setCurrentLanguage] = useState("en") ;


  useEffect(() => {
    const stickyheader = document.querySelector(".main-header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const location = useLocation();

  useEffect(()=> {
    if (location.hash) {
        let elem = document.getElementById(location.hash.slice(1))
        if (elem) {
            elem.scrollIntoView({behavior: "smooth"})
        }
    } else {
    window.scrollTo({top:0,left:0, behavior: "smooth"})
    }
}, [location,]) ;

const { t, i18n } = useTranslation();

// language effect save
useEffect(()=>{
const data = window.localStorage.getItem('Language_state') ;  
 if( data !== null ) setCurrentLanguage(JSON.parse(data)) ;


},[])
useEffect(() => {
  window.localStorage.setItem('Language_state' , JSON.stringify(currentLanguage)); 
  i18n.changeLanguage(currentLanguage) ;

}, [currentLanguage])

  return (
    <>
      <header
        className={`main-header ${navDark ? "position-absolute " : ""
          } w-100 `}
      >
        <nav
          className={`navbar navbar-expand-xl z-10 ${navDark ? "navbar-dark" : "navbar-light"
            } sticky-header ${scroll > headerTop ? "affix" : ""}`}
        >
          <div className="container d-flex align-items-center justify-content-lg-between position-relative">
            <Link
              to="/"
              className="navbar-brand d-flex align-items-center mb-md-0 text-decoration-none"
            >
              <img
                src="assets/img/shams-logo.png"
                alt="logo"
                className="img-fluid logo-white shams-logo"
              />
              <img
                src="assets/img/shams-logo.png"
                alt="logo"
                className="img-fluid logo-color shams-logo"
              />
              <h5>Shams Software</h5>
            </Link>

            <Link
              className="navbar-toggler position-absolute right-0 border-0"
              to={process.env.PUBLIC_URL + "#offcanvasWithBackdrop"}
              role="button"
            >
              <span
                className="far fa-bars"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              ></span>
            </Link>

            <div className="collapse navbar-collapse justify-content-center">
              <ul className="nav col-12 col-md-auto justify-content-center main-menu">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link"
                    to="/"
                    role="button"
                  >
                    {t('Home')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#Services"
                    className="nav-link"
                  >
                     {t('Services')}
                  </Link>
                </li>
           
                <li>
                  <Link
                    to="/#Products"
                    className="nav-link"
                  >
                     {t('Products')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#Partners"
                    className="nav-link"
                  >
                     {t('Patners')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="Career"
                    className="nav-link"
                  >
                     {t('Career')}
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="nav-link"
                  >
                     {t('ContactUs')}
                  </Link>
                </li>
              </ul>
            </div>
                <div className="dropdown switch">
                 <span ><GrLanguage className="lang-but" /></span>
                 <div className="dropdown-content">
                   <div  className="dropdown-item" onClick={ () =>  setCurrentLanguage('en')  } >EN</div>
                   <div   className="dropdown-item" onClick={ () => setCurrentLanguage('tr')   } > TR</div>
                   </div>
                  </div>
            <OffCanvasMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
