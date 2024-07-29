import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiGoldBar } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import Navbar from "./Navbar/Navbar";

import "./Plans.css";
import Footer from "./Footer/Footer";

const Plans = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tulirmatrimony.com/controlapi/planlist.php"
        );
        const result = await response.json();
        console.log(result);
        setData(result.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const pageStyle = {
    backgroundImage:
      'url("https://www.matrimonysoftware.in/images/background/5.jpg")',
  };
  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="page-content">
            <div className="row"></div>
            <div className="row">
              {data.map((item) => (
                <div className="col-lg-12" style={{ textAlign: "center" }}>
                  <div className="card" style={{ padding: "20px" }}>
                    <div className="card-body">
                      <div className="p-4 card-body">
                        <div className="media">
                          <div className="media-body">
                            <h2 style={{ color: "rgb(231, 1, 138)" }}>
                              {item.name}
                            </h2>
                          </div>
                        </div>
                        <div
                          className="plan-features mt-5"
                          style={{ textAlign: "left" }}
                        >
                          <h5 style={{ lineHeight: "30px" }}>
                            <FaCheck
                              className="fas fa-check me-2"
                              style={{ color: "rgb(231, 1, 138)" }}
                            />
                            {item.description}
                          </h5>
                          <div className="py-4 text-center">
                            <h2>
                              ₹ {item.amount} /{" "}
                              <span className="font-size-13">
                                {item.validity}
                              </span>
                            </h2>
                          </div>
                          <div className="text-center">
                            <button
                              className="btn btn-md"
                              style={{
                                backgroundColor: "rgb(231, 1, 138)",
                                color: "white",
                              }}
                            >
                              Select Plan
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="col-lg-12" style={{ textAlign: "center" }}>
                <div className="card" style={{ padding: "20px" }}>
                  <div className="card-body">
                    <div className="p-4 card-body">
                      <div className="media">
                        <div className="media-body">
                          <h2 style={{ color: "rgb(231, 1, 138)" }}>
                            Plan 2: Diamond
                          </h2>
                        </div>
                      </div>
                      <div
                        className="plan-features mt-5"
                        style={{ textAlign: "left" }}
                      >
                        <h5>
                          <FaCheck
                            className="fas fa-check me-2"
                            style={{ color: "rgb(231, 1, 138)" }}
                          />
                          தாங்கள் online மூலமாக பயோடேட்டா, ஜாதகம், போட்டோ
                          முழுவதுமாக பார்த்து கொள்ளலாம். உங்களுக்கு பொருத்தமான
                          120 வரன்களின் தொலைபேசி எண்களை 12 மாதத்திற்கு எடுத்து
                          கொள்ளலாம்
                        </h5>
                        <h5 style={{ lineHeight: "30px" }}>
                          <FaCheck
                            className="fas fa-check me-2"
                            style={{ color: "rgb(231, 1, 138)" }}
                          />
                          Like SMS unlimited ஆக அனுப்பி கொள்ளலாம்
                        </h5>
                      </div>
                      <div className="py-4">
                        <h2>
                          Rs: 5000/{" "}
                          <span className="font-size-13">12 months</span>
                        </h2>
                      </div>
                      <div className="text-center">
                        <button
                          className="btn btn-md"
                          style={{
                            backgroundColor: "rgb(231, 1, 138)",
                            color: "white",
                          }}
                        >
                          Select Plan 2
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12" style={{ textAlign: "center" }}>
                <div className="card" style={{ padding: "20px" }}>
                  <div className="card-body">
                    <div className="p-4 card-body">
                      <div className="media">
                        <div className="media-body">
                          <h2 style={{ color: "rgb(231, 1, 138)" }}>
                            Plan 3: Assisted Service
                          </h2>
                        </div>
                        <div className="ms-3"></div>
                      </div>
                      <div className="text-center">
                        <div
                          className="plan-features mt-4"
                          style={{ textAlign: "left" }}
                        >
                          <h5 style={{ lineHeight: "30px" }}>
                            <FaCheck
                              className="fas fa-check me-2"
                              style={{ color: "rgb(231, 1, 138)" }}
                            />
                            தாங்கள் online மூலமாக பயோடேட்டா, ஜாதகம், போட்டோ
                            முழுவதுமாக பார்த்து கொள்ளலாம். உங்களுக்கு பொருத்தமான
                            120 வரன்களின் தொலைபேசி எண்களை 6 மாதத்திற்கு எடுத்து
                            கொள்ளலாம்
                          </h5>
                          <h5 style={{ lineHeight: "30px" }}>
                            <FaCheck
                              className="fas fa-check me-2"
                              style={{ color: "rgb(231, 1, 138)" }}
                            />
                            Like SMS unlimited ஆக அனுப்பி கொள்ளலாம்
                          </h5>
                          <h5 style={{ lineHeight: "30px" }}>
                            <FaCheck
                              className="fas fa-check me-2"
                              style={{ color: "rgb(231, 1, 138)" }}
                            />
                            உங்களுக்கு பொருத்தமான வரன்கள் வாரம் ஒருமுறை
                            போட்டோவுடன் WhatsApp-ல் அனுப்பி வைக்கப்படும்
                          </h5>
                          <h5 style={{ lineHeight: "30px" }}>
                            <FaCheck
                              className="fas fa-check me-2"
                              style={{ color: "rgb(231, 1, 138)" }}
                            />
                            எங்கள் நிறுவனத்தில் தனியாக ஒரு நபர் நியமித்து
                            உங்களுக்கு உதவி செய்வார்
                          </h5>
                          <h5 style={{ lineHeight: "30px" }}>
                            <FaCheck
                              className="fas fa-check me-2"
                              style={{ color: "rgb(231, 1, 138)" }}
                            />
                            ஜாதகம் பொருத்தமாக இருந்தால் அவர்களே பேசி தருவார்கள்
                          </h5>
                        </div>
                        <div className="py-4">
                          <h2>
                            Rs: 10000/{" "}
                            <span className="font-size-13">6 months</span>
                          </h2>
                        </div>
                        <button
                          className="btn btn-md"
                          style={{
                            backgroundColor: "rgb(231, 1, 138)",
                            color: "white",
                          }}
                        >
                          Select Plan 3
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plans;
