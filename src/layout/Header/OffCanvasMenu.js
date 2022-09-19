import React ,{useEffect ,useState } from "react";
import { useLocation   ,Link } from "react-router-dom"  ;
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr"  ; 
const OffCanvasMenu = () => {
  const location = useLocation();
  
  const [currentLanguage , setCurrentLanguage] = useState("en") ;
  
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
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasWithBackdrop"
      >
        <div className="offcanvas-header d-flex align-items-center mt-4">
          <Link
            to="/"
            className="d-flex align-items-center mb-md-0 text-decoration-none"
          >
            <img
              src="assets/img/shams-logo.png"
              alt="logo"
              className="img-fluid ps-2 shams-logo"
            />
            <h5>Shams Software</h5>
          </Link>
          <button
            type="button"
            className="close-btn text-danger"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="far fa-close"></i>
          </button>
          
        </div>
        <div className="offcanvas-body">
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

                <li className="nav-link">
                <div className="dropdown ">
                 <span ><GrLanguage className="lang-but" /></span>
                 <div className="dropdown-content">
                 <div  className="dropdown-item" onClick={ () =>  setCurrentLanguage('en')  } >EN</div>
                   <div   className="dropdown-item" onClick={ () => setCurrentLanguage('tr')   } > TR</div>
                   </div>
                  </div>   
                </li>
          </ul>
       
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
