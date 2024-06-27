import React from 'react'
import loaderGif from "./loader-spin.gif";
import './Spinner.css'


function Spinner() {
  return (
    <div
      className="d-flex justify-content-center back-spin"
      style={{ height: "100vh", alignItems: "center" }}
    >
      <img src={loaderGif} alt="Loading..." className="load-spin" />
    </div>
  );
}

export default Spinner