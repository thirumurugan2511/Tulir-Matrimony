// src/pages/Selectedplan.js
import React, { useEffect, useState, useContext } from "react";
import { useAuth } from '../../../AuthContext';
import Navbar from "../Navbar/Navbar";
import "../Plans.css";
import Footer from "../Footer/Footer";
import loaderGif from "../loader-spin.gif";
import { ProfileContext } from '../ProfileContext';

function Selectedplan() {
  const { userid } = useAuth();
  const [data, setData] = useState(null);
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchComplete, setFetchComplete] = useState(false);
  const [noPlan, setNoPlan] = useState();

  const { profileCount, setProfileCount, validityDate, setValidityDate } = useContext(ProfileContext);

  const calculateExpiryDate = (registerDate, validity) => {
    if (!registerDate || isNaN(new Date(registerDate).getTime())) {
      console.error("Invalid date:", registerDate);
      return null;
    }

    const date = new Date(registerDate);
    const validityDays = parseInt(validity, 10); // e.g., 60
    if (isNaN(validityDays)) {
      console.error("Invalid validity value:", validity);
      return null;
    }

    date.setDate(date.getDate() + validityDays);
    return date;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${userid}`
        );
        const result = await response.json();
        console.log("For Plan", result);
        setData(result.body);
        

        setFetchComplete(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userid]);

  useEffect(() => {
    if (fetchComplete && data) {
      const sendPlanData = async () => {
        try {
          const response = await fetch(
            `https://tulirmatrimony.com/controlapi/usermemberplan.php`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                user_id: userid,
                plan: data.plan_name,
              }),
            }
          );
          console.log("Selected plan userid:", userid);
          console.log("Selected plan name:", data.plan_name);
          const result = await response.json();
          setProfileCount(result.body.plan_profile_count);
          if (result.body && result.body.length > 0) {
            setPlan(result.body[0]);
            const expiryDate = calculateExpiryDate(data.plan_register_date, result.body[0].plan_validity);
            if (expiryDate) {
              setValidityDate(expiryDate);
            }
          }
          console.log("Selected plan result:", result);
        } catch (error) {
          console.error("Error sending plan data:", error);
          setNoPlan("No Plan Selected");
          console.log("No Plan Selected");
        }
      };

      sendPlanData();
    }
  }, [fetchComplete, data, userid, setValidityDate]);

  return (
    <>
      <Navbar />
      {loading ? (
        <div
          className="d-flex justify-content-center back-spin text-center"
          style={{ height: "100vh", alignItems: "center" }}
        >
          <img
            src={loaderGif}
            alt="Loading..."
            className="load-spin"
          />
        </div>
      ) : (
        <div className="main-content">
          <div className="container">
            <div className="page-content">
              <div className="row"></div>
              {data && plan ? (
                <div className="row p-4">
                  <div className="col-lg-12">
                    <div className="card-plan" style={{ padding: "20px" }}>
                      <div className="card-body">
                        <div className="p-4 card-body">
                          <div className="media">
                            <div className="media-body">
                              <h2 style={{ color: "rgb(231, 1, 138)" }}>
                               Plan Name: {data.plan_name}
                              </h2>
                            </div>
                          </div>
                          <div
                            className="plan-features mt-5"
                          >
                            <h3 className="text-center mb-2" style={{ lineHeight: "30px" }}>
                                Profile Count: {plan.plan_profile_count}
                            </h3>
                            <div className="text-center">
                              <h2 className="mb-2">
                                <span className="font-size-13">
                                 Plan Registered Date: {data.plan_register_date}
                                </span>
                              </h2>
                              <h2 className="mb-4">
                                Expiry Date: {calculateExpiryDate(data.plan_register_date, plan.plan_validity)?.toISOString().split('T')[0]}
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
                                Selected Plan
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <p>{noPlan ? noPlan : "Loading..."}</p>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Selectedplan;
