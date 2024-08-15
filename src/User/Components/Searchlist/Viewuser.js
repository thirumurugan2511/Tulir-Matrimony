import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Navbar from "../Navbar/Navbar";
import "../Profile/Profile.css";
import Smallicon from "../rgt-matrimony-logo.png";
import Editjathagam from "../../../Admin/Components/Member/Editjathagam";
import "../../../Admin/Components/Member/member.css";
import Footer from "../Footer/Footer";
import "./Viewuser.css";
import About1 from "../Home/tulir1.jpg";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import proAge from "./pro-age.png";
import proCity from "./pro-city.png";
import proEducation from "./education.png";
import proJob from "./job.png";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';


const Viewuser = (props) => {
      const { id } = useParams();
      // const [viewProfile, setViewProfile] = useState(false);
      // const [selectedprofileid, setSelectedprofileid] = useState(0);
      // const [planData, setPlanData] = useState(null);
      // const { setProfileCount, setValidityDate } = useContext(ProfileContext);

  // http://localhost:8000/fetchmember
  // (`https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`);
  const [profileData, setProfileData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 
  const [data, setData] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`
        );
        const res = await response.json();
        setProfileData(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchDataa = async () => {
      try {
        //https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}
        //http://localhost:8000//api/singlejathagam/${id}
        const response = await axios.get(
          `https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}`
        );
        setData(response.data.body);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchDataa();
  }, [id]);
  
  
  const images = profileData && profileData.body ? [
    `data:image/png;base64,${profileData.body.image}`, // Main image
    `data:image/png;base64,${profileData.body.image1}`, // Additional images
    `data:image/png;base64,${profileData.body.id_image}`,
    `data:image/png;base64,${profileData.body.id_image1}`,
  ] : [];

  useEffect(() => {
    if (images.length > 0 && !selectedImage) {
      setSelectedImage(images[0]);
    }
  }, [images, selectedImage]);
  

  // Set initial state for the selected image

  // Set the first image as the default selected image when data is loaded

  const handleImageClick = (imgUrl) => {
    setSelectedImage(imgUrl);
  };

   const formatDate = (dateStr) => {
     if (!dateStr) return "";
     const [year, month, day] = dateStr.split("-");
     return `${day}/${month}/${year}`;
   };

    const formatTime = (timeStr) => {
      if (!timeStr) return "";
      const [hours, minutes] = timeStr.split(":");
      const intHours = parseInt(hours, 10);
      const intMinutes = parseInt(minutes, 10);
      const period = intHours >= 12 ? "PM" : "AM";
      const formattedHours = intHours % 12 || 12;
      const formattedMinutes = intMinutes < 10 ? `0${intMinutes}` : intMinutes;
      return `${formattedHours}:${formattedMinutes} ${period}`;
    };
    const displayField = (field, fallback = "No Data Available") => {
    return field !== null && field !== undefined && field !== "" ? field : fallback;
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <!-- PROFILE --> */}
      <Navbar /> 
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row text-start">
          {profileData && profileData.body ? (
          <div className="col-lg-4 col-md-4">
            {/* Main Image */}
              {selectedImage ? (
                <img src={selectedImage} className="w-100 main-image" alt="Selected Product" />
              ) : (
                <p>No image available</p>
              )}
            
            {/* Thumbnails */}
              {images.map((imgUrl, index) => (
                  <img
                    key={index}
                    src={imgUrl}
                    className={`thumbnail ${selectedImage === imgUrl ? 'selected' : ''}`}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleImageClick(imgUrl)}
                    style={{ width: '80px', height: '80px', borderRadius:'20px', margin: '5px', cursor: 'pointer' }}
                  />
                ))}
          </div>
       
   
      ) : (
        <p>Loading...</p>
      )}
            {profileData ? (
              <div className="col-lg-8 col-md-8">
                <div className="mb-4">
                  <div className="row align-items-center text-center">
                    <h1 className="mb-2 col-lg-9 col-12 col-sm-6  mt-4  text-center headsmain">
                      {profileData.body.name} - {profileData.body.reg_id}
                    </h1>
                    <div className="col-lg-3 col-12 col-sm-6 text-center">
                      <Link className="btn btn-secondary"
                        to="/Searchlist">Back to Home
                      </Link>
                    </div>
                    
                  </div>
                  <ul className="row pro-info4">
                    <li className="col-lg-3 col-md-3 col-sm-6 col-6 mb-2">
                      <img src={proCity} className="proImg" />
                      <p>
                        City <b>: {displayField(profileData.body.city, "Not Mentioned")} </b>
                      </p>
                    </li>
                    <li className="col-lg-3 col-md-3 col-sm-6 col-6 mb-2">
                      <img src={proAge} className="proImg" />
                      <p>
                        வயது <b>: {displayField(profileData.body.age, "Not Mentioned")}</b>
                      </p>
                    </li>
                    <li className="col-lg-3 col-md-3 col-sm-6 col-6 mb-2">
                      <img src={proEducation} className="proImg" />
                      <p>
                        கல்வி <b>: {displayField(profileData.body.education, "Not Mentioned")} </b>
                      </p>
                    </li>
                    <li className="col-lg-3 col-md-3 col-sm-6 col-6 mb-2">
                      <img src={proJob} className="proImg" />
                      <p>
                        வேலை <b>: {displayField(profileData.body.occupation, "Not Mentioned")} </b>
                      </p>
                    </li>
                  </ul>
                </div>
                {/* CONTACT INFO SECTION */}
                <div className="mb-4">
                  <h3 className="mb-3 headsmain">Contact Infomation</h3>
                  <ul className="ul-pro">
                    <li className="mb-1">
                      <span>
                        <AiOutlineMobile className="bx bx-power-off me-2 prouser-icon" />
                        <span> {profileData.body.phonenumber} </span>
                      </span>
                    </li>
                    <li className="mb-1">
                      <span>
                        <MdOutlineMailOutline className="bx bx-power-off me-2 prouser-icon" />
                        <span> 
                          {displayField(profileData.body.email, "Not Mentioned")}
                          {/* {profileData.body.email} */}
                           </span>
                      </span>
                    </li>
                    <li className="mb-1">
                      <span>
                        <IoLocationOutline className="bx bx-power-off me-2 prouser-icon" />
                        <span>{displayField(profileData.body.address, "Not Mentioned")}</span>
                      </span>
                    </li>
                  </ul>
                </div>
                {/* PERSONAL INFO SECTION */}
                <div className="mb-4">
                  <h3 className="mb-3 headsmain">Personal Infomation</h3>
                  <div className="d-flex gap-2 inf-div">
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பாலினம்</b>
                          </td>
                          <td>{profileData.body.gender}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பிறந்த தேதி</b>
                          </td>
                          <td>{formatDate(profileData.body.dob)}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தாய்மொழி</b>
                          </td>
                          <td> {displayField(profileData.body.mother_tongue, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>திருமண நிலை</b>
                          </td>
                          <td> {displayField(profileData.body.marriage_type, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>மதம்</b>
                          </td>
                          <td> {displayField(profileData.body.religion, "Not Mentioned")} </td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>இனம்</b>
                          </td>
                          <td> {displayField(profileData.body.caste, "Not Mentioned")} </td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>உட்பிரிவு</b>
                          </td>
                          <td> {displayField(profileData.body.subcaste, "Not Mentioned")} </td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>செவ்வாய் தோஷம்</b>
                          </td>
                          <td> {displayField(profileData.body.sevaikiragam, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>கோத்ரம்</b>
                          </td>
                          <td> {displayField(profileData.body.gothram, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>கல்வி</b>
                          </td>
                          <td> {displayField(profileData.body.education, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>நட்சத்திரம்</b>
                          </td>
                          <td>{displayField(profileData.body.star, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பாதம்</b>
                          </td>
                          <td>{displayField(profileData.body.patham_number, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>ராசி</b>
                          </td>
                          <td> {displayField(profileData.body.zodiacsign, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பூர்வீகம்</b>
                          </td>
                          <td> {displayField(profileData.body.birthplace, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பிறந்த நேரம்</b>
                          </td>
                          <td>{formatTime(profileData.body.birthtime)}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>கல்வி விவரங்கள்</b>
                          </td>
                          <td> {displayField(profileData.body.education_details, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தொழில் விவரம்</b>
                          </td>
                          <td> {displayField(profileData.body.jobdetails, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தொழில் இடம்</b>
                          </td>
                          <td> {displayField(profileData.body.joblocation, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>ஆண்டு / மாத வருமானம்</b>
                          </td>
                          <td>INR {displayField(profileData.body.annual_income, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>குலதெய்வம்</b>
                          </td>
                          <td> {displayField(profileData.body.kuladeivam, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* RESIDENCE SECTION */}
                <div className="mb-4">
                  <h3 className="mb-3 headsmain">Residence Infomation</h3>
                  <div className="d-flex gap-2 inf-div">
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பிறந்த மாவட்டம்</b>
                          </td>
                          <td> {displayField(profileData.body.city, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>குடியிருப்பு வகை</b>
                          </td>
                          <td>{displayField(profileData.body.residence, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தாய்நாடு</b>
                          </td>
                          <td> {displayField(profileData.body.mothercountry, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தற்போதைய முகவரி</b>
                          </td>
                          <td> {displayField(profileData.body.address, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* PHYSICAL INFO SECTION */}
                <div className="mb-4">
                  <h3 className="mb-3 headsmain">Family Infomation</h3>
                  <div className="d-flex gap-2 inf-div">
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>உயரம்</b>
                          </td>
                          <td> {displayField(profileData.body.height, "Not Mentioned")}-Feet</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>உணவு பழக்கம்</b>
                          </td>
                          <td>{displayField(profileData.body.food_habits, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>இரத்த வகை</b>
                          </td>
                          <td>{displayField(profileData.body.bloodgroup, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தோல் நிறம்</b>
                          </td>
                          <td>{displayField(profileData.body.skin_tone, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பதிவு செய்பவர்</b>
                          </td>
                          <td> {displayField(profileData.body.profile_by, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>என்னப் பற்றி</b>
                          </td>
                          <td>{displayField(profileData.body.aboutme, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* FAMILY INFO SECTION */}
                <div className="mb-4">
                  <h3 className="mb-3 headsmain">Physical Infomation</h3>
                  <div className="d-flex gap-2 inf-div">
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>குடும்ப வகை</b>
                          </td>
                          <td> {displayField(profileData.body.family_type, "Not Mentioned")} </td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>குடும்ப நிலை</b>
                          </td>
                          <td> {displayField(profileData.body.family_status, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தந்தை பெயர்</b>
                          </td>
                          <td>{displayField(profileData.body.father_name, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தந்தை பணி</b>
                          </td>
                          <td>{displayField(profileData.body.father_occupation, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தாய் பெயர்</b>
                          </td>
                          <td>{displayField(profileData.body.mother_name, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தாய் பணி</b>
                          </td>
                          <td> {displayField(profileData.body.mother_occupation, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>சகோதரர் எண்ணிக்கை</b>
                          </td>
                          <td>{displayField(profileData.body.brothers_count, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>சகோதரி எண்ணிக்கை</b>
                          </td>
                          <td>{displayField(profileData.body.sisters_count, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>திருமணம் ஆன சகோதரர் எண்ணிக்கை</b>
                          </td>
                          <td> {displayField(profileData.body.brother_married, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>திருமணம் ஆன சகோதரி எண்ணிக்கை</b>
                          </td>
                          <td> {displayField(profileData.body.sister_married, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* PARTNER INFO SECTION */}
                <div className="mb-4">
                  <h3 className="mb-3 headsmain">Partner Preferences</h3>
                  <div className="d-flex gap-2 inf-div">
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>மணமகன் / மணமகள் வயது </b>
                          </td>
                          <td> {displayField(profileData.body.partner_to_age, "Not Mentioned")}Years</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>உயரம்</b>
                          </td>
                          <td> {displayField(profileData.body.height, "Not Mentioned")}-Feet</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>மதம்</b>
                          </td>
                          <td>{displayField(profileData.body.religion, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>இனம்</b>
                          </td>
                          <td> {displayField(profileData.body.partner_caste, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>திருமணம் நிலை</b>
                          </td>
                          <td> {displayField(profileData.body.partner_matrial_status, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="w-50 ul-pro tbl-pro">
                      <tbody>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>கல்வி</b>
                          </td>
                          <td>{displayField(profileData.body.partner_education, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பணி</b>
                          </td>
                          <td>{displayField(profileData.body.partner_occupation, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தாய்மொழி</b>
                          </td>
                          <td> {displayField(profileData.body.partner_mother_tongue, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>செவ்வாய் தோஷம்</b>
                          </td>
                          <td> {displayField(profileData.body.partner_manglik, "Not Mentioned")}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>சம்பளம்</b>
                          </td>
                          <td>Upto INR {displayField(profileData.body.partner_salary, "Not Mentioned")}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                 {/* Jathagam Model SECTION */}
                <h3 className="mb-3 headsmain">
                  Jathagam Details
                </h3>
                <Button variant="primary" onClick={handleShow}>
                  View Horoscope Details
                </Button>
                <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Horoscope</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
            {data ? (
                      <>
                        <div className="row">
                          <div className="mt-5 m-auto mb-2 row">
                            <div className="col-lg-3 d-flex mb-5 align-items-center">
                              <span className="fw-bold jd_text mb-0 me-2">
                                திசை இருப்பு
                              </span>
                              <span style={{ color: "black" }}>
                                : {data.thisaiirupu}
                              </span>
                            </div>
                            <div className="col-lg-3 d-flex mb-5 align-items-center">
                              <span class="fw-bold jd_text mb-0 me-2">
                                ஆண்டு
                              </span>
                              <span style={{ color: "black" }}>
                                : {data.year}
                              </span>
                            </div>
                            <div className="col-lg-3 d-flex mb-5 align-items-center">
                              <span class="fw-bold jd_text mb-0 me-2">
                                மாதம்
                              </span>
                              <span style={{ color: "black" }}>
                                : {data.month}
                              </span>
                            </div>
                            <div className="col-lg-3 d-flex mb-5 align-items-center">
                              <span class="fw-bold jd_text mb-0 me-2">
                                நாள்
                              </span>
                              <span style={{ color: "black" }}>
                                : {data.days}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-6 mt-5 mb-2">
                          <table class="table table-bordered table_jadh">
                            <tbody>
                              <tr>
                                <td className="j_dd">
                                  {data.rasi1}
                                </td>
                                <td className="j_dd">
                                  {data.rasi2}
                                </td>
                                <td className="j_dd">
                                  {data.rasi3}
                                </td>
                                <td className="j_dd">
                                  {data.rasi4}
                                </td>
                              </tr>
                              <tr>
                                <td className="j_dd">
                                  {data.rasi5}
                                </td>
                                <td
                                  colspan="2"
                                  className="j_dd"
                                  rowSpan={2}
                                >
                                  ராசி
                                </td>
                                <td className="j_dd">
                                  {data.rasi6}
                                </td>
                              </tr>
                              <tr>
                                <td className="j_dd">
                                  {data.rasi7}
                                </td>
                                <td className="j_dd">
                                  {data.rasi8}
                                </td>
                              </tr>
                              <tr>
                                <td className="j_dd">
                                  {data.rasi9}
                                </td>
                                <td className="j_dd">
                                  {data.rasi10}
                                </td>
                                <td className="j_dd">
                                  {data.rasi11}
                                </td>
                                <td className="j_dd">
                                  {data.rasi12}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="col-lg-6 mt-5 mb-2">
                          <table class="table table-bordered">
                            <tbody>
                              <tr>
                                <td className="j_dd">
                                  {data.amsam1}
                                </td>
                                <td className="j_dd">
                                  {data.amsam2}
                                </td>
                                <td className="j_dd">
                                  {data.amsam3}
                                </td>
                                <td className="j_dd">
                                  {data.amsam4}
                                </td>
                              </tr>
                              <tr>
                                <td className="j_dd">
                                  {data.amsam5}
                                </td>
                                <td
                                  colspan="2"
                                  className="j_dd"
                                  rowSpan={2}
                                >
                                  அம்சம்
                                </td>
                                <td className="j_dd">
                                  {data.amsam6}
                                </td>
                              </tr>
                              <tr>
                                <td className="j_dd">
                                  {data.amsam7}
                                </td>
                                <td className="j_dd">
                                  {data.amsam8}
                                </td>
                              </tr>
                              <tr>
                                <td className="j_dd">
                                  {data.amsam9}
                                </td>
                                <td className="j_dd">
                                  {data.amsam10}
                                </td>
                                <td className="j_dd">
                                  {data.amsam11}
                                </td>
                                <td className="j_dd">
                                  {data.amsam12}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      
                      </>
                    ) : (
                      <p>Loading...</p>
                    )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
                </Modal>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </section>
      {/* <!-- END PROFILE --> */}
    </>
  );
};

export default Viewuser;
