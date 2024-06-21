import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className=" text-white text-center py-3">
        <div className="container">
          <p className="mb-0 text-white">
            &copy; {new Date().getFullYear()} Aatheshsoft. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer
