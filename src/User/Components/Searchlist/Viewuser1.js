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
import proAge from "./pro-age.png"
import proCity from "./pro-city.png";
import proEducation from './education.png'
import proJob from "./job.png";


const Viewuser1 = () => {
  return (
    <>
      {/* <!-- PROFILE --> */}
      <Navbar />
      <section className="pt-5 pb-5">
        <div className="container">
          <div className="row text-start">
            <div className="col-lg-4 col-md-4 proimg-div">
              <img src={About1} className="w-100" />
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="mb-4">
                <h1 className="mb-2 headsmain">Dharshini
                  <Link className="btn btn-secondary float-end"
                  to="">Back to Home</Link>
                </h1>
                <ul className="row pro-info4">
                  <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={proCity} className="proImg" />
                    <p>
                      City <b>: Chennai</b>
                    </p>
                  </li>
                  <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={proAge} className="proImg" />
                    <p>
                      வயது <b>: 22</b>
                    </p>
                  </li>
                  <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={proEducation} className="proImg" />
                    <p>
                      கல்வி <b>: 157</b>
                    </p>
                  </li>
                  <li className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={proJob} className="proImg" />
                    <p>
                      வேலை <b>: Designer</b>
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
                      <span>+92 (8800) 68 - 8960 </span>
                    </span>
                  </li>
                  <li className="mb-1">
                    <span>
                      <MdOutlineMailOutline className="bx bx-power-off me-2 prouser-icon" />
                      <span>angelinajoliewed@gmail.com </span>
                    </span>
                  </li>
                  <li className="mb-1">
                    <span>
                      <IoLocationOutline className="bx bx-power-off me-2 prouser-icon" />
                      <span>
                        28800 Orchard Lake Road, Suite 180 Farmington Hills,
                        U.S.A
                      </span>
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
                        <td>Angelina Jolie</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>பிறந்த தேதி</b>
                        </td>
                        <td>John Smith</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>தாய்மொழி</b>
                        </td>
                        <td>Joney family</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>திருமண நிலை</b>
                        </td>
                        <td>24</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>மதம்</b>
                        </td>
                        <td>03 Jan 1998</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>இனம்</b>
                        </td>
                        <td>167cm</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>உட்பிரிவு</b>
                        </td>
                        <td>65kg</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>செவ்வாய் தோஷம்</b>
                        </td>
                        <td>Angelina Jolie</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>கோத்ரம்</b>
                        </td>
                        <td>John Smith</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>கல்வி</b>
                        </td>
                        <td>Joney family</td>
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
                        <td>MSC Computer Science</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>பாதம்</b>
                        </td>
                        <td>Any</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>ராசி</b>
                        </td>
                        <td>Working</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>பூர்வீகம்</b>
                        </td>
                        <td>Google</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>பிறந்த நேரம்</b>
                        </td>
                        <td>Web developer</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>கல்வி விவரங்கள்</b>
                        </td>
                        <td>$1000 p/m</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>தொழில் விவரம்</b>
                        </td>
                        <td>Angelina Jolie</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>தொழில் இடம்</b>
                        </td>
                        <td>John Smith</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>ஆண்டு / மாத வருமானம்</b>
                        </td>
                        <td>Joney family</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>குலதெய்வம்</b>
                        </td>
                        <td>24</td>
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
                        <td>Angelina Jolie</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>குடியிருப்பு வகை</b>
                        </td>
                        <td>John Smith</td>
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
                        <td>MSC Computer Science</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>தற்போதைய முகவரி</b>
                        </td>
                        <td>Any</td>
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
                        <td>Angelina Jolie</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>உணவு பழக்கம்</b>
                        </td>
                        <td>John Smith</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>இரத்த வகை</b>
                        </td>
                        <td>Joney family</td>
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
                        <td>MSC Computer Science</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>பதிவு செய்பவர்</b>
                        </td>
                        <td>Any</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>என்னப் பற்றி</b>
                        </td>
                        <td>Working</td>
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
                        <td>Angelina Jolie</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>குடும்ப நிலை</b>
                        </td>
                        <td>John Smith</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>தந்தை பெயர்</b>
                        </td>
                        <td>Joney family</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>தந்தை பணி</b>
                        </td>
                        <td>John Smith</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>தாய் பெயர்</b>
                        </td>
                        <td>Joney family</td>
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
                        <td>MSC Computer Science</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>சகோதரர் எண்ணிக்கை</b>
                        </td>
                        <td>Any</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>சகோதரி எண்ணிக்கை</b>
                        </td>
                        <td>Working</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>திருமணம் ஆன சகோதரர் எண்ணிக்கை</b>
                        </td>
                        <td>Any</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>திருமணம் ஆன சகோதரி எண்ணிக்கை</b>
                        </td>
                        <td>Working</td>
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
                        <td>Angelina Jolie</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>உயரம்</b>
                        </td>
                        <td>John Smith</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>மதம்</b>
                        </td>
                        <td>Joney family</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>இனம்</b>
                        </td>
                        <td>John Smith</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>திருமணம் நிலை</b>
                        </td>
                        <td>Joney family</td>
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
                        <td>MSC Computer Science</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>பணி</b>
                        </td>
                        <td>Any</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>தாய்மொழி</b>
                        </td>
                        <td>Working</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>செவ்வாய் தோஷம்</b>
                        </td>
                        <td>Any</td>
                      </tr>
                      <tr>
                        <td>
                          <IoIosArrowForward className="bx bx-power-off me-2" />
                          <b>சம்பளம்</b>
                        </td>
                        <td>Working</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END PROFILE --> */}
    </>
  );
};

export default Viewuser1;
