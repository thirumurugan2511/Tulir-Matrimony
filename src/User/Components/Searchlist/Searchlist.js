import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Spinner } from "react-bootstrap";
import loaderGif from "../loader-spin.gif";
import "../Spinner/Spinner.css";
import { useAuth } from '../../../AuthContext';
import { ProfileContext } from '../ProfileContext';
import "./Searchlist.css";

const Searchlist = () => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState([]);
  const [viewCount, setViewCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const profilesPerPage = 12;
  const location = useLocation();
  const [fetchComplete, setFetchComplete] = useState(false);
  const [plan, setPlan] = useState(null);
  const [noPlan, setNoPlan] = useState("");
  const [viewProfile, setViewProfile] = useState(false);
  const [selectedprofileid, setSelectedprofileid] = useState(0);
  const [planData, setPlanData] = useState(null);
  const { setProfileCount, profileCount, setValidityDate } = useContext(ProfileContext); // Include profileCount from context
  const query = new URLSearchParams(location.search);
  const { userid } = useAuth();
  const [remainingCount, setRemainingCount] = useState(null); // Define remainingCount state
  const [expiredDate, setExpiredDate] = useState(null); // Define expiredDate state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tulirmatrimony.com/controlapi/userhome.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id: userid }),
          }
        );
        const result = await response.json();
        setData(result.body);
        console.log("Home Response", result );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userid]);

  useEffect(() => {
    const singlefetchDataa = async () => {
      try {
        const response = await fetch(
          `https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${userid}`
        );
        const result = await response.json();
        setSingleData(result.body);
        setFetchComplete(true);
        console.log("Logged User Data", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    singlefetchDataa();
  }, [userid]);

  useEffect(() => {
    if (fetchComplete && singleData) {
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
                plan: singleData.plan_name,
              }),
            }
          );
          const result = await response.json();
          
          // Log the entire result to verify its structure
          console.log("Full Response:", result);
          
          // Check if body is an array and has at least one element
          if (Array.isArray(result.body) && result.body.length > 0) {
            const profileCount = result.body[0].plan_profile_count;
            setProfileCount(profileCount); // Update context state
            setPlan(singleData.plan_name);
            console.log("Logged User Profile Count", profileCount);
          } else {
            console.error("Unexpected response structure or empty body array:", result.body);
          }
        } catch (error) {
          console.error("Error sending plan data:", error);
          setNoPlan("No Plan Selected");
        }
      };
  
      sendPlanData();
    }
  }, [fetchComplete, singleData, userid, setProfileCount]);
  
  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = data.slice(indexOfFirstProfile, indexOfLastProfile);

  const paginate = (event, pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleProfileClick = async () => {
    try {
      const response = await fetch(
        "https://tulirmatrimony.com/controlapi/userprofilecount.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: userid,
            plan: singleData.plan_name,
          }),
        }
      );
      const result = await response.json();
      if (Array.isArray(result.body) && result.body.length > 0) {
        setPlanData(result.body[0]);
        console.log("User Profile Count API", result);
        setRemainingCount(result.body[0].remaining_profile_count);
        setExpiredDate(result.body[0].plan_expire_date);
        console.log("Profile Count API", result.body[0].remaining_profile_count);
        console.log("Profile Expired Date", result.body[0].plan_expire_date);
        if (result.body[0].remaining_profile_count <= 0 || new Date(result.body[0].plan_expire_date) <= new Date()) {
          setViewProfile(false);
        } else {
          setViewProfile(true);
          setViewCount(viewCount + 1);
        }
      } else {
        console.error("Unexpected response structure or empty body array:", result.body);
      }
    } catch (error) {
      console.error("Error fetching profile count data:", error);
    }
  };
  

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="d-flex justify-content-center back-spin" style={{ height: "100vh", alignItems: "center" }}>
          <img src={loaderGif} alt="Loading..." className="load-spin" />
        </div>
      ) : (
        <>
          {singleData && plan ? (
            <>
              <section className="speakers-section-three pt-5">
                <div className="auto-container">
                  <h4 className="mb-3">
                    உங்களிடம் <p>Profile Count: {profileCount}</p> சுயவிவரங்களை பார்க்கும் வாய்ப்பு
                    உள்ளது. <br/>
                    Expiry Date: {expiredDate} &nbsp;
                    Remaining Count: {remainingCount}
                  </h4>
                </div>
                <div className="auto-container">
                  <div className="row">
                    {currentProfiles.map((item, index) => (
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
                            <a href="#" target="_blank" onClick={handleProfileClick}>
                              <span className="designation">Age : {item.age} </span>
                              <span className="designation">{item.education} </span>
                              <span className="designation">{item.occupaction} </span>
                              <span className="designation">{item.star} </span>
                              <span className="designation">{item.district} </span>
                            </a>
                            <Link
                              className="btn py-2 mt-2 view-pro"
                              to={`/Viewuser/${item.user_id}`}
                              onClick={() => handleProfileClick()}
                              disabled={planData ? (planData.remaining_profile_count <= 0 || new Date(planData.plan_expire_date) <= new Date()) : true}
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div align="center" className="col-lg-12">
                    <Stack spacing={2}>
                      <Pagination
                        count={Math.ceil(data.length / profilesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        color="secondary"
                      />
                    </Stack>
                  </div>
                </div>
              </section> 
            </>
          ) : (
            <p>{noPlan ? noPlan : "Loading..."}</p>
          )}
          <Footer />
        </>
      )}
    </>
  );
};

export default Searchlist;
