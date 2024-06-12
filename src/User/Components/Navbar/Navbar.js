import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
        <>
       <div className="text-end top-nav d-flex gap-3 justify-content-end">
                <p className="text-white top-text">+91 9898989899</p>
                <p className="text-white me-4 top-text">606 Arnetta Tunnel, New Martin, NH 06242</p>
        </div>
		<header>
            <div className="container row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <h3 className="text-white">Tulir Matrimony</h3>
                </div>
                <nav ref={navRef} className="zindex col-lg-9 col-md-6 gap-3 col-sm-6 justify-content-end res_nav">
                    <Link to="/">Home</Link>
                    <Link to="/Plans">Member Plans</Link>
                    <Link to="/Signin">Sign In</Link>
                    {/* <a href="/#">About me</a> */}
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
            </div>
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
		</header>
        </>
	);
}

export default Navbar;