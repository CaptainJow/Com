import React, { useEffect, useState} from "react";
import OffCanvasMenu from "./OffCanvasMenu";
import './navbar.css'
import { useLocation , Link} from "react-router-dom" ;

const Navbar = ({ navDark }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

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
            <OffCanvasMenu />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
