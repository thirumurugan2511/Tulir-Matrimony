import React, { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillDollarCircle } from "react-icons/ai";
import { GiGoldBar } from "react-icons/gi";
import { FaCheck } from "react-icons/fa6";
import Navbar from "./Navbar/Navbar";
import "./Plans.css";
import Footer from "./Footer/Footer";
import Pay from "./Pay.jpeg";

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

  const getBackgroundColor = (planName) => {
    switch (planName.toLowerCase()) {
      case "silver":
        return "#5d615978";
      case "gold":
        return "#ffba00c9";
      case "platinum":
        return "#006a9b85";
      case "freeplan":
        return "#11b60796";
      default:
        return "#ffffff"; // Default background color
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-content">
        <div className="container">
          <div className="page-content">
            <div className="row"></div>
            <div className="row p-4">
              {data.map((item) => (
                <div className="col-lg-12 mb-4" style={{ textAlign: "center" }} key={item.id}>
                  <div
                    className="card-plan mb-3"
                    style={{
                      padding: "20px",
                      backgroundColor: getBackgroundColor(item.name),
                      color: "white"
                    }}
                  >
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
                            <Link to="#pay"
                              className="btn btn-md"
                              style={{
                                backgroundColor: "rgb(231, 1, 138)",
                                color: "white",
                              }} 
                            >
                              Select Plan
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div className="text-center align-items-center justify-content-center">
                <img src={Pay} id="pay" className="Pay-image" alt="Payment" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plans;