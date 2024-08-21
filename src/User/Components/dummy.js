import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom'
import { IoMdSettings } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { MdManageHistory } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Navbar from '../Navbar/Navbar'
import './Profile.css';
import Smallicon from '../rgt-matrimony-logo.png'
import Editjathagam from '../../../Admin/Components/Member/Editjathagam';
import "../../../Admin/Components/Member/member.css"
import Footer from '../Footer/Footer';
import { useLocation } from "react-router-dom";
import { useAuth } from '../../../AuthContext'


const Profile = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const { userid } = useAuth();
  // const { id } = useParams();
  //http://localhost:8000/fetchmember
  //https://tulirmatrimony.com/controlapi/singlecustomer.php?id=239
 

  console.log("User Id From Profile", userid);
  // (`https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${id}`);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://tulirmatrimony.com/controlapi/singlecustomer.php?id=${userid}`
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

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}
        //http://localhost:8000/api/singlejathagam
        const response = await axios.get(
          `https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${userid}`
        );
        setData(response.data.body);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [userid]);
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const fetchDataa = async () => {
      try {
        //https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${id}
        //http://localhost:8000//api/singlejathagam/${id}
        const response = await axios.get(
          `https://tulirmatrimony.com/controlapi/singleuserjathagam.php?user_id=${userid}`
        );
        setData(response.data.body);
        console.log(response);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchDataa();
  }, [userid]);

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

  const handleBackClick = () => {
    window.location.href = "/Searchlist";
  };

  // const displayField = (field, fallback = "No Data Available") => {
  //   return field !== null && field !== undefined && field !== "" ? field : fallback;
  // };

  return (
    <>

      {/* <Footer /> */}
    </>
  );
}

export default Profile