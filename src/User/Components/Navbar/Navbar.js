import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../../Auth";
import Logo from '../rgt-matrimony-logo.png'

function Navbar() {
	const navRef = useRef();
    const { user } = useAuth();
    console.log('navbar' ,user)
    

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <>
      <div className="text-end top-nav d-flex gap-3 justify-content-end">
        <p className="text-white top-text">+91 9443052440</p>
        <p className="text-white me-4 top-text">
          எட்டயபுரம் வளைவு ரோடு, படித்துறை எதிரில், கோவில்பட்டி - 628501
        </p>
      </div>
      <header>
        <div className="container row">
          <div className="col-lg-3 col-md-6 col-sm-6 ">
            <img src={Logo} width="100" height="60" alt=""/>
       </div>
          <nav
            ref={navRef}
            className="zindex col-lg-9 col-md-6 gap-3 col-sm-6 justify-content-end res_nav"
          >
            <Link to="/">Home</Link>
            <Link to="/Plans">Plans</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/Searchlist">Search</Link>
            <Link to="/Login">Sign In</Link>

            {/* <a href="/#">About me</a> */}
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