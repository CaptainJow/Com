import React ,{useEffect } from "react";
import { useLocation   ,Link } from "react-router-dom"  ;
const OffCanvasMenu = () => {
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
                    to="/"
                    className="nav-link"
                    role ="button"
                  >
                    Home
                  </Link>
            </li>
            <li>
                  <Link
                    to="/#Services"
                    className="nav-link"
                  >
                    Services
                  </Link>
                </li>
           
                <li>
                  <Link
                    to="/#Products"
                    className="nav-link"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#Partners"
                    className="nav-link"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="Career"
                    className="nav-link"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="nav-link"
                  >
                    Contact Us
                  </Link>
                </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default OffCanvasMenu;
