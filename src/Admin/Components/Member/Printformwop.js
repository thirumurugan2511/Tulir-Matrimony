import React, { useState, useEffect } from 'react';
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

const Printformwop = () => {
        const [data, setData] = useState([]);
        const [profileData, setProfileData] = useState(null);
        const { id } = useParams();

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
            const fetchDataa = async () => {
              try {
                //http://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}
                //http://localhost:8000//api/singlejathagam/${id}
                const response = await axios.get(`https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}`);
                setData(response.data.body);
                console.log(response.data)
              } catch (error) {
                console.error('Error fetching data', error);
              }
            };
        
            fetchData();
            fetchDataa();
        
          }, [id]);
          const handleBackClick = () => {
            window.history.back();
          };

          // useEffect(() => {
          //   const fetchData = async () => {
          //     try {
          //       //http://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}
          //       //http://localhost:8000//api/singlejathagam/${id}
          //       const response = await axios.get(`https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}`);
          //       setData(response.data);
          //       console.log(response.data)
          //     } catch (error) {
          //       console.error('Error fetching data', error);
          //     }
          //   };
        
          //   fetchData();
          // }, [id]);
        
     
  return (
    <>
    <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">
    <Aside />
    <div class="layout-page">
    <div className='container row mx-auto border  my-4 p-4'>
    {profileData ? (
                  <>
                  <div className='row'>
                  <div className='text-start'>
                  <button onClick={handleBackClick} className="btn btn-secondary">Back to Member List</button>
                  </div>
                  <div className='text-end'>
                 <button class="btn btn-primary">Print</button>
                  </div>
                  </div>
        <div className='border-bottom pt-2 pb-4'>
            <h2 className='fw-bold'>துளிர் மேட்ரிமோனி</h2>
            <p>159F, விஜயாபுரி,V.E.P, காம்ப்ளக்ஸ்,</p>
            <p>எட்டயபுரம் வளைவு ரோடு, படித்துறை எதிரில், கோவில்பட்டி - 628501</p>
        </div>
        <div className='col-lg-6 mt-4 row'>
        <div className='mb-3 text-start row'>
                <span className='col-lg-7 fw-bold'>பதிவு எண்</span>
                <span className='col-lg-5'>: {profileData.body.reg_id}</span>
            </div>
        <div className='mb-3 text-start row'>
                <span className='col-lg-7 fw-bold'>பெயர்</span>
                <span className='col-lg-5'>: {profileData.body.name}</span>
            </div>
            
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>பிறந்த தேதி</span>
                <span className='col-lg-5'>: {profileData.body.dob}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>உயரம்</span>
                <span className='col-lg-5'>: {profileData.body.height}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>இனம்</span>
                <span className='col-lg-5'>: {profileData.body.caste}</span>
            </div>
           
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>கல்வி</span>
                <span className='col-lg-5'>: {profileData.body.education}</span>
            </div>
            {/* <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>இடம்</span>
                <span className='col-lg-5'>: {profileData.body.address}</span>
            </div> */}
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>தந்தை பெயர்</span>
                <span className='col-lg-5'>: {profileData.body.father_name}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>சகோதரர்கள் / சகோதரிகள்</span>
                <span className='col-lg-5'>: {profileData.body.brothers_count} / {profileData.body.sisters_count} </span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>திருமணமானவர்கள்</span>
                <span className='col-lg-5'>: {profileData.body.brother_married}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>ராசி</span>
                <span className='col-lg-5'>: {profileData.body.zodiacsign}</span>
            </div>
        </div>
        <div className='col-lg-6 mt-4 row'>
       
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>பிறந்த நேரம்</span>
                <span className='col-lg-5'>: {profileData.body.birthtime}</span>
            </div>
            <div className='mb-2 text-start row'>
                <span className='col-lg-7 fw-bold'>பாலினம்</span>
                <span className='col-lg-5'>: {profileData.body.gender}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>வயது</span>
                <span className='col-lg-5'>: {profileData.body.age}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>சொந்த ஊர்</span>
                <span className='col-lg-5'>: {profileData.body.city}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>குல தெய்வம்</span>
                <span className='col-lg-5'>: {profileData.body.kuladeivam}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>வேலை</span>
                <span className='col-lg-5'>: {profileData.body.occupation}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>சம்பளம்</span>
                <span className='col-lg-5'>: {profileData.body.annual_income}</span>
            </div>
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>தாய் பெயர்</span>
                <span className='col-lg-5'>: {profileData.body.mother_name}</span>
            </div>
            {/* <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>தொலைபேசி எண்</span>
                <span className='col-lg-5'>: {profileData.body.phonenumber}</span>
            </div> */}
            {/* <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>திசை இருப்பு</span>
               
                <span className='col-lg-5'>: {data.thisaiirupu}</span>

            </div> */}
            <div className='mb-3  text-start row'>
                <span className='col-lg-7 fw-bold'>நட்சத்திரம்</span>
                <span className='col-lg-5'>: {profileData.body.star}</span>
            </div>
          
        </div>  
        <div className='mt-2 mb-2'>
        <p>This profile taken from thulirmatrimony.com</p>
        </div>
        {data ? (
        <>
        <div className='row'>
        <div className='col-lg-10 mt-5 m-auto mb-2 row'>
        <div className='col-lg-3 d-flex mb-5 align-items-center'>
            <label className="form-label mb-0 me-2">திசை இருப்பு</label>
            <span>{data.thisaiirupu}</span>
          </div>
          <div className='col-lg-3 d-flex mb-5 align-items-center'>
      <label class="form-label mb-0 me-2">ஆண்டு</label>
      <span>{data.year}</span>
    </div>
    <div className='col-lg-3 d-flex mb-5 align-items-center'>
      <label class="form-label mb-0 me-2">மாதம்</label>
      <span>{data.month}</span>
    </div>
    <div className='col-lg-3 d-flex mb-5 align-items-center'>
      <label class="form-label mb-0 me-2">நாள்</label>
      <span>{data.days}</span>
    </div>
       
      </div>
      </div>
      
      <div className='col-lg-6 mt-5 mb-2'>
        <table class="table table-bordered">
        <tbody>
            <tr>
            <th scope="row">{data.rasi1}</th>
            <td>{data.rasi2}</td>
            <td>{data.rasi3}</td>
            <td>{data.rasi4}</td>
            </tr>
            <tr>
            <th scope="row">{data.rasi5}</th>
            <td colspan="2" rowSpan={2}>ராசி</td>
            <td>{data.rasi6}</td>
            </tr>
            <tr>
            <th scope="row">{data.rasi7}</th>
            <td >{data.rasi8}</td>
            </tr>
            <tr>
            <th scope="row">{data.rasi9}</th>
            <td >{data.rasi10}</td>
            <td>{data.rasi11}</td>
            <td>{data.rasi12}</td>
            </tr>
        </tbody>
        </table>
        </div>
        <div className='col-lg-6 mt-5 mb-2'>
        <table class="table table-bordered">
        <tbody>
            <tr>
            <th scope="row">{data.amsam1}</th>
            <td>{data.amsam2}</td>
            <td>{data.amsam3}</td>
            <td>{data.amsam4}</td>
            </tr>
            <tr>
            <th scope="row">{data.amsam5}</th>
            <td colspan="2" rowSpan={2}>அம்சம்</td>
            <td>{data.amsam6}</td>
            </tr>
            <tr>
            <th scope="row">{data.amsam7}</th>
            <td >{data.amsam8}</td>
            </tr>
            <tr>
            <th scope="row">{data.amsam9}</th>
            <td >{data.amsam10}</td>
            <td>{data.amsam11}</td>
            <td>{data.amsam12}</td>
            </tr>
        </tbody>
        </table>
        </div>
      {/* <div className='col-lg-6 mt-5 mb-2'>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td>{data.rasi1}</td>
            </tr>
            <tr>
              <td>{data.rasi2}</td>
            </tr>
            <tr>
              <td>{data.rasi3}</td>
            </tr>
            <tr>
             
              <td>{data.rasi4}</td>
            </tr>
            <tr>
              
              <td>{data.rasi5}</td>
            </tr>
            <tr>
             
              <td>{data.rasi6}</td>
            </tr>
            <tr>
             
              <td>{data.rasi7}</td>
            </tr>
            <tr>
             
              <td>{data.rasi8}</td>
            </tr>
            <tr>
             
              <td>{data.rasi9}</td>
            </tr>
            <tr>
            
              <td>{data.rasi10}</td>
            </tr>
            <tr>
              <td>{data.rasi11}</td>
            </tr>
            <tr>
              <td>{data.rasi12}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='col-lg-6 mt-5 mb-2'>
        <table className='table table-bordered'>
          <tbody>
            <tr>
              <td>{data.amsam1}</td>
            </tr>
            <tr>
              <td>{data.amsam2}</td>
            </tr>
            <tr>
              <td>{data.amsam3}</td>
            </tr>
            <tr>
              <td>{data.amsam4}</td>
            </tr>
            <tr>
              <td>{data.amsam5}</td>
            </tr>
            <tr>
              <td>{data.amsam6}</td>
            </tr>
            <tr>
              <td>{data.amsam7}</td>
            </tr>
            <tr>
              <td>{data.amsam8}</td>
            </tr>
            <tr>
              <td>{data.amsam9}</td>
            </tr>
            <tr>
              <td>{data.amsam10}</td>
            </tr>
            <tr>
              <td>{data.amsam11}</td>
            </tr>
            <tr>
              <td>{data.amsam12}</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      </>
       ) : (
        <p>Loading...</p>
      )}
        
        <div className='mt-2 mb-2'>
        <p>மற்ற அமைப்பாளர்களுடன் தொடர்பு கிடையது</p>
        </div>
                  </>
                  
                )
                 : (
                    <p>Loading...</p>
                )}
                </div>
                  
                
    
        
      
    </div> 
   
            
 </div> </div>
 
    </>
  )
}

export default Printformwop