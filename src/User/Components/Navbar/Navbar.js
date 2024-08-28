import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../../AuthContext";
import Logo from "../rgt-matrimony-logo.png";

function Navbar({ userid }) {
  // Destructure the userid prop
  const navRef = useRef();
  const { isLoggedIn, logout } = useAuth();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <div className="text-end top-nav d-flex gap-3 justify-content-end">
        <p className="text-white top-text"></p>
        <p className="text-white me-4 top-text">
        +91 9443052440 &nbsp; எட்டயபுரம் வளைவு ரோடு, படித்துறை எதிரில், கோவில்பட்டி - 628501
        </p>
      </div>
      <header>
        <div className="container row">
          <div className="col-lg-3 col-md-6 col-sm-6 ">
            <img src={Logo} className="navbar-logo" alt="" />
          </div>
          <nav
            ref={navRef}
            className="zindex col-lg-9 col-md-6 gap-3 col-sm-6 justify-content-end res_nav"
          >
            {isLoggedIn ? (
              <>
                <Link to={`/Searchlist`}>Home</Link>
                <Link to={`/Profile`}>Profile</Link>
                <Link to={`/Selectedplan`}>Plan Details</Link>
                <Link to={`/Searchform`}>Search</Link>
                <button className="btn btn-info" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/Plans">Membership Plans</Link>
                <Link to="/Login">Sign In</Link>
              </>
            )}
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </nav>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  );
}

export default Navbar;
