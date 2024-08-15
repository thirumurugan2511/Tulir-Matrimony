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
  const { setProfileCount, profileCount } = useContext(ProfileContext);
  const query = new URLSearchParams(location.search);
  const { userid } = useAuth();
  const [remainingCount, setRemainingCount] = useState(null);
  const [expiredDate, setExpiredDate] = useState(null);

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
        console.log("Home Response", result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userid]);

  useEffect(() => {
    const singlefetchData = async () => {
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

    singlefetchData();
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
          
          if (Array.isArray(result.body) && result.body.length > 0) {
            const planData = result.body[0];
            const profileCount = planData.plan_profile_count;
            const remainingCount = planData.remaining_profile_count;
            const expiredDate = planData.plan_expired_date;

            setProfileCount(profileCount);
            setRemainingCount(remainingCount);
            setExpiredDate(expiredDate);
            setPlan(singleData.plan_name);
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

  const canViewProfile = () => {
    const remaining = parseInt(remainingCount, 10);
    const isExpired = expiredDate && new Date(expiredDate) <= new Date();
    return remaining > 0 && !isExpired;
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
        setRemainingCount(result.body[0].remaining_profile_count);
        setExpiredDate(result.body[0].plan_expired_date);
        console.log("Profile Count API", result.body[0].remaining_profile_count);
        console.log("Profile Expired Date", result.body[0].plan_expired_date);
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
            <section className="speakers-section-three pt-5">
              <div className="auto-container">
                <h4 className="mb-3">
                  உங்களிடம் <p>Profile Count: {profileCount}</p> சுயவிவரங்களை பார்க்கும் வாய்ப்பு
                  உள்ளது. 
                  Expiry Date: {expiredDate === "0000-00-00" ? "No Expiry Date" : expiredDate}
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
                            disabled={!canViewProfile()}
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