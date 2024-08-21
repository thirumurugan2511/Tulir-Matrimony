import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Spinner } from "react-bootstrap";
import loaderGif from "../loader-spin.gif";
import "./Freeplan.css"
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';

const Freeplan = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const profilesPerPage = 12; // Limit to 10 profiles
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://tulirmatrimony.com/controlapi/customerlist.php");
        const result = await response.json();
        console.log("Free Plan", result);
        
        if (result.body && Array.isArray(result.body)) {
          // Shuffle and select up to 10 random profiles
          const shuffledProfiles = result.body.sort(() => 0.5 - Math.random());
          setData(shuffledProfiles.slice(0, profilesPerPage));
        } else {
          console.error("Unexpected response structure:", result.body);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="d-flex justify-content-center back-spin" style={{ height: "100vh", alignItems: "center" }}>
          <img src={loaderGif} alt="Loading..." className="load-spin" />
        </div>
      ) : (
        <section className="freeplan-section pt-5">
          <div className="auto-container">
            <div className="row">
              {data.map((item, index) => (
                <div key={index} className="profile-block col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image">
                        <a href="#" target="_blank">
                          <img src={`data:image/jpeg;base64,${item.image}`} alt="Profile Loading.." />
                        </a>
                      </figure>
                    </div>
                    <div className="info-box">
                      <h4 className="name">
                        <a href="#" className="cus_name" target="_blank">
                          {item.name}
                        </a>
                      </h4>
                      <span className="designation">Age: {item.age}</span>
                      <span className="designation">{item.education}</span>
                      <span className="designation">{item.occupation}</span>
                      {/* <Link
                        className="btn py-2 mt-2 view-pro"
                        to={`/Viewuser/${item.user_id}`}
                      >
                        View Profile
                      </Link> */}
                        <Button  className="btn py-2 mt-2 view-pro" variant="primary" onClick={handleShow}>
                  View Profile
                </Button>
                <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Upgrade Your Plan</Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <h4>Kindly Please Upgrade your plan and find your match here!</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
             <Link
                className="btn py-2 mt-2 view-pro"
                        to="/Plans"
                      >
                        View Plans
                      </Link>
          </Modal.Footer>
                </Modal>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Freeplan;
