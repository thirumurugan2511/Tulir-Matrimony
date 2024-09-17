import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className=" text-white py-3">
        <div className="container row">
          <p className="mb-0 text-white foot-text text-start col-lg-6 col-md-6 col-sm-12 col-12">
            &copy; {new Date().getFullYear()} Tulir Matrimony. All Rights
            Reserved. Developed by Aatheshsoft
          </p>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 text-end'>
          <Link to="/TermsandConditions" className="mb-0 text-white foot-text text-end">
            Terms and condition |
          </Link> &nbsp;
          <Link to='/PrivacyPolicy' className="mb-0 text-white foot-text text-end">
           Privacy policy
          </Link>
          </div>
          
        </div>
      </footer>
    </div>
  );
}

export default Footer
