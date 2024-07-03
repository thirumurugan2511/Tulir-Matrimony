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

const Viewuser = () => {
      const { id } = useParams();

  // http://localhost:8000/fetchmember
  // (`https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`);
  const [profileData, setProfileData] = useState(null);

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

  return (
    <>
      {/* <!-- PROFILE --> */}
      <Navbar />
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row text-start">
            {profileData ? (
              <div className="col-lg-4 col-md-4 proimg-div">
                <img
                  src={`data:image/png;base64,${profileData.body.image}`}
                  className="w-100"
                />
              </div>
            ) : (
              <p>Loading...</p>
            )}
            {profileData ? (
              <div className="col-lg-8 col-md-8">
                <div className="mb-4">
                  <h1 className="mb-2 mt-4 headsmain">
                    {profileData.body.name} - {profileData.body.reg_id}
                  </h1>
                  <ul className="row pro-info4">
                    <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                      <img src={proCity} className="proImg" />
                      <p>
                        City <b>: {profileData.body.city} </b>
                      </p>
                    </li>
                    <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                      <img src={proAge} className="proImg" />
                      <p>
                        வயது <b>: {profileData.body.age}</b>
                      </p>
                    </li>
                    <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                      <img src={proEducation} className="proImg" />
                      <p>
                        கல்வி <b>: {profileData.body.education}</b>
                      </p>
                    </li>
                    <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                      <img src={proJob} className="proImg" />
                      <p>
                        வேலை <b>: {profileData.body.occupation}</b>
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
                        <span> {profileData.body.email} </span>
                      </span>
                    </li>
                    <li className="mb-1">
                      <span>
                        <IoLocationOutline className="bx bx-power-off me-2 prouser-icon" />
                        <span>{profileData.body.address}</span>
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
                          <td>{profileData.body.mother_tongue}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>திருமண நிலை</b>
                          </td>
                          <td>{profileData.body.marriage_type}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>மதம்</b>
                          </td>
                          <td>{profileData.body.religion}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>இனம்</b>
                          </td>
                          <td>{profileData.body.caste}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>உட்பிரிவு</b>
                          </td>
                          <td>{profileData.body.subcaste}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>செவ்வாய் தோஷம்</b>
                          </td>
                          <td>{profileData.body.sevaikiragam}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>கோத்ரம்</b>
                          </td>
                          <td>{profileData.body.gothram}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>கல்வி</b>
                          </td>
                          <td>{profileData.body.education}</td>
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
                          <td>{profileData.body.star}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பாதம்</b>
                          </td>
                          <td>{profileData.body.patham_number}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>ராசி</b>
                          </td>
                          <td>{profileData.body.zodiacsign}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பூர்வீகம்</b>
                          </td>
                          <td>{profileData.body.birthplace}</td>
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
                          <td>{profileData.body.education_details}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தொழில் விவரம்</b>
                          </td>
                          <td>{profileData.body.jobdetails}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தொழில் இடம்</b>
                          </td>
                          <td>{profileData.body.joblocation}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>ஆண்டு / மாத வருமானம்</b>
                          </td>
                          <td>INR {profileData.body.annual_income}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>குலதெய்வம்</b>
                          </td>
                          <td>{profileData.body.kuladeivam}</td>
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
                          <td>{profileData.body.city}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>குடியிருப்பு வகை</b>
                          </td>
                          <td>{profileData.body.residece}</td>
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
                          <td>{profileData.body.mothercountry}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தற்போதைய முகவரி</b>
                          </td>
                          <td>{profileData.body.address}</td>
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
                          <td>{profileData.body.height}-cm</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>உணவு பழக்கம்</b>
                          </td>
                          <td>{profileData.body.food_habits}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>இரத்த வகை</b>
                          </td>
                          <td>{profileData.body.bloodgroup}</td>
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
                          <td>{profileData.body.skin_tone}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பதிவு செய்பவர்</b>
                          </td>
                          <td>{profileData.body.profile_by}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>என்னப் பற்றி</b>
                          </td>
                          <td>{profileData.body.aboutme}</td>
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
                          <td>{profileData.body.family_type}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>குடும்ப நிலை</b>
                          </td>
                          <td>{profileData.body.family_status}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தந்தை பெயர்</b>
                          </td>
                          <td>{profileData.body.father_name}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தந்தை பணி</b>
                          </td>
                          <td>{profileData.body.father_occupation}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தாய் பெயர்</b>
                          </td>
                          <td>{profileData.body.mother_name}</td>
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
                          <td>{profileData.body.mother_occupation}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>சகோதரர் எண்ணிக்கை</b>
                          </td>
                          <td>{profileData.body.brothers_count}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>சகோதரி எண்ணிக்கை</b>
                          </td>
                          <td>{profileData.body.sisters_count}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>திருமணம் ஆன சகோதரர் எண்ணிக்கை</b>
                          </td>
                          <td>{profileData.body.brother_married}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>திருமணம் ஆன சகோதரி எண்ணிக்கை</b>
                          </td>
                          <td>{profileData.body.sister_married}</td>
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
                          <td>{profileData.body.partner_to_age} Years</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>உயரம்</b>
                          </td>
                          <td>{profileData.body.partner_height}cm</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>மதம்</b>
                          </td>
                          <td>{profileData.body.partner_religion}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>இனம்</b>
                          </td>
                          <td>{profileData.body.partner_caste}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>திருமணம் நிலை</b>
                          </td>
                          <td>{profileData.body.partner_matrial_status}</td>
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
                          <td>{profileData.body.partner_education}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>பணி</b>
                          </td>
                          <td>{profileData.body.partner_occupation}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>தாய்மொழி</b>
                          </td>
                          <td>{profileData.body.partner_mother_tongue}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>செவ்வாய் தோஷம்</b>
                          </td>
                          <td>{profileData.body.partner_manglik}</td>
                        </tr>
                        <tr>
                          <td>
                            <IoIosArrowForward className="bx bx-power-off me-2" />
                            <b>சம்பளம்</b>
                          </td>
                          <td>Upto INR {profileData.body.partner_salary}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
