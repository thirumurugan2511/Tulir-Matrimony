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
                <div key={index} className="speaker-block-three col-xl-3 col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated">
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
            <Modal.Title> </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h4 className="text-center mb-4">தயவுசெய்து உங்கள் திட்டத்தை மேம்படுத்தவும்</h4>
                <h4 className="text-center">தயவுசெய்து உங்கள் திட்டத்தை மேம்படுத்தி, உங்கள் பொருத்தத்தை இங்கே கண்டறியவும்!</h4>
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
