import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import { MdPostAdd } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import axios from 'axios';
import Aside from '../Aside/Aside';
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import Smallicon from '../../Components/heart-icon.png'
import Lady from './lady.jpg'
import Men from './men.jpg'
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import './Print.css'
import logoMain from './tulir-header-logo.jpg'



const Printformwop = () => {
        const [data, setData] = useState([]);
        const [profileData, setProfileData] = useState(null);
        const { id } = useParams();
        const componentRef = useRef();

        useEffect(() => {
            const fetchData = async () => {
              try {
                //https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}
                //http://localhost:8000/fetchmember/${id}
                const response = await fetch(`https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`);
                const data = await response.json();
                setProfileData(data);
                console.log(data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        
            fetchData();
        
          }, []);

          useEffect(() => {
            const fetchData = async () => {
              try {
                //http://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}
                //http://localhost:8000//api/singlejathagam/${id}
                const response = await axios.get(`https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}`);
                setData(response.data.body);
                console.log(response)
              } catch (error) {
                console.error('Error fetching data', error);
              }
            };
        
            fetchData();
          }, [id]);
          const handleBackClick = () => {
            window.history.back();
          };
          const formatDate = (dateStr) => {
            if (!dateStr) return '';
            const [year, month, day] = dateStr.split('-');
            return `${day}/${month}/${year}`;
          };

          const formatTime = (timeStr) => {
            if (!timeStr) return '';
            const [hours, minutes] = timeStr.split(':');
            const intHours = parseInt(hours, 10);
            const intMinutes = parseInt(minutes, 10);
            const period = intHours >= 12 ? 'PM' : 'AM';
            const formattedHours = intHours % 12 || 12;
            const formattedMinutes = intMinutes < 10 ? `0${intMinutes}` : intMinutes;
            return `${formattedHours}:${formattedMinutes} ${period}`;
        };
        const handlePrint = useReactToPrint({
            content: () => componentRef.current,
        });
    
        const handleDownloadPdf = () => {
            const doc = new jsPDF();
            doc.fromHTML(componentRef.current, 15, 15, {
                width: 170,
            });
            doc.save('profile.pdf');
        };
        
        
     
  return (
    <>
      <div className="row mb-3 mx-5 mt-4 ">
        <div className="col-lg-6 text-start">
          <button onClick={handleBackClick} className="btn btn-secondary">
            Back to Member List
          </button>
        </div>
        <div className=" col-lg-6 text-end">
          <button onClick={handlePrint} className="btn btn-primary me-2">
            Print
          </button>
          {/* <button onClick={handleDownloadPdf} className="btn btn-primary">Download PDF</button> */}
        </div>
      </div>

      <div className=" gen_print row mx-auto border" ref={componentRef}>
        {profileData ? (
          <>
            <div className="border-bottom pt-1 pb-4 head-text">
              <img class="p-3" src={logoMain} />
              {/* <h2 className='fw-bold'>துளிர் மேட்ரிமோனி</h2>
            <p>159F, விஜயாபுரி,V.E.P, காம்ப்ளக்ஸ்,</p>
            <p>எட்டையபுரம் வளைவு ரோடு, படித்துறை எதிரில், கோவில்பட்டி - 628501</p> */}
            </div>
            <div className="mt-1 row data_det">
              <table className="print-table">
                <tbody>
                  <tr>
                    <td className="fw-bold">பதிவு எண்</td>
                    <td>: {profileData.body.reg_id}</td>
                    <td className="fw-bold">பாலினம்</td>
                    <td>: {profileData.body.gender}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">பெயர்</td>
                    <td>: {profileData.body.name}</td>
                    <td className="fw-bold">பணி</td>
                    <td>: {profileData.body.occupation}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">கல்வி</td>
                    <td>: {profileData.body.education}</td>
                    <td className="fw-bold">பணிபுரியும் இடம்</td>
                    <td>: {profileData.body.joblocation}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">பிறந்த தேதி</td>
                    <td>: {formatDate(profileData.body.dob)}</td>
                    <td className="fw-bold">வருமானம்</td>
                    <td>: {profileData.body.annual_income}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">இனம் / உட்பிரிவு</td>
                    <td>
                      : {profileData.body.caste} / {profileData.body.subcaste}
                    </td>
                    <td className="fw-bold">மதம்</td>
                    <td>: {profileData.body.religion}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">தந்தை பெயர்</td>
                    <td>: {profileData.body.father_name}</td>
                    <td className="fw-bold">சகோதரர்கள் / சகோதரிகள்</td>
                    <td>
                      : {profileData.body.brothers_count} /{" "}
                      {profileData.body.sisters_count}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">தாய் பெயர்</td>
                    <td>: {profileData.body.mother_name}</td>
                    <td className="fw-bold">திருமணமானவர்கள்</td>
                    <td>
                      : {profileData.body.brother_married} /{" "}
                      {profileData.body.sister_married}{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bold">சொந்த மாவட்டம்</td>
                    <td>: {profileData.body.city}</td>
                    <td className="fw-bold">குல தெய்வம்</td>
                    <td>: {profileData.body.kuladeivam}</td>
                  </tr>
                  <tr>
                    <td className="fw-bold">நட்சத்திரம் / பாதம்</td>
                    <td>
                      : {profileData.body.star} /{" "}
                      {profileData.body.patham_number}{" "}
                    </td>
                    <td className="fw-bold">ராசி</td>
                    <td>: {profileData.body.zodiacsign}</td>
                  </tr>

                  <tr>
                    <td className="fw-bold">பிறந்த நேரம்</td>
                    <td>: {formatTime(profileData.body.birthtime)}</td>
                  </tr>
                  {/* <tr>
                        <td className="fw-bold">திருமணமானவர்கள்</td>
                        <td>: {profileData.body.brother_married} / {profileData.body.brother_married} </td>      
                        <td className="fw-bold">உயரம்</td>
                        <td>: {profileData.body.height}</td>
                       
                    </tr> */}
                </tbody>
              </table>
            </div>

            {data ? (
              <>
                <div className="tab_div mt-4">
                  <div className="col-lg-6 mt-3 mb-1">
                    <table class="table table-bordered print-table3">
                      <tbody>
                        <tr>
                          <td>{data.rasi1}</td>
                          <td>{data.rasi2}</td>
                          <td>{data.rasi3}</td>
                          <td>{data.rasi4}</td>
                        </tr>
                        <tr>
                          <td>{data.rasi5}</td>
                          <td colspan="2" rowSpan={2}>
                            ராசி
                          </td>
                          <td>{data.rasi6}</td>
                        </tr>
                        <tr>
                          <td>{data.rasi7}</td>
                          <td>{data.rasi8}</td>
                        </tr>
                        <tr>
                          <td>{data.rasi9}</td>
                          <td>{data.rasi10}</td>
                          <td>{data.rasi11}</td>
                          <td>{data.rasi12}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-lg-6 mt-3 mb-1">
                    <table class="table table-bordered print-table3">
                      <tbody>
                        <tr>
                          <td>{data.amsam1}</td>
                          <td>{data.amsam2}</td>
                          <td>{data.amsam3}</td>
                          <td>{data.amsam4}</td>
                        </tr>
                        <tr>
                          <td>{data.amsam5}</td>
                          <td colspan="2" rowSpan={2}>
                            அம்சம்
                          </td>
                          <td>{data.amsam6}</td>
                        </tr>
                        <tr>
                          <td>{data.amsam7}</td>
                          <td>{data.amsam8}</td>
                        </tr>
                        <tr>
                          <td>{data.amsam9}</td>
                          <td>{data.amsam10}</td>
                          <td>{data.amsam11}</td>
                          <td>{data.amsam12}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row mt-1">
                  <table className="print-table2">
                    <tr>
                      <td>திசை இருப்பு : {data.thisaiirupu}</td>
                      <td></td>
                      <td>ஆண்டு : {data.year}</td>
                      <td></td>
                      <td>மாதம் : {data.month}</td>
                      <td></td>
                      <td>நாள் : {data.days}</td>
                      <td></td>
                    </tr>
                  </table>
                </div>
                <div className="mt-1 mb-1 head-text com_text">
                  <b>tulirmatrimony.com</b>
                </div>
              </>
            ) : (
              <p>Loading...</p>
            )}

            <div className="mt-1 mb-1 head-text">
              <p>மற்ற அமைப்பாளர்களுடன் தொடர்பு கிடையாது</p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Printformwop