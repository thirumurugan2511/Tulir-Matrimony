import React from 'react';
import './App.css';
import Admin from './Admin/Components/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stories from './Admin/Components/Stories/Stories';
import Dashboard from './Admin/Components/Dashboard/Dashboard';
import Storiesadd from './Admin/Components/Stories/Storiesadd';
import Religion from './Admin/Components/Newdetails/Religion';
import Payment from './Admin/Components/Payment/Payment';
import Caste from './Admin/Components/Newdetails/Caste';
import Occupation from './Admin/Components/Newdetails/Occupation';
import Education from './Admin/Components/Newdetails/Education';
import Mothertongue from './Admin/Components/Newdetails/Mothertongue';
import Annualincome from './Admin/Components/Newdetails/Annualincome';
import Star from './Admin/Components/Newdetails/Star';
import Moonsign from './Admin/Components/Newdetails/Moonsign';
import Religionadd from './Admin/Components/Newdetails/Addnew/Religionadd';
import Casteadd from './Admin/Components/Newdetails/Addnew/Casteadd';
import Occupationadd from './Admin/Components/Newdetails/Addnew/Occupationadd';
import Annualincomeadd from './Admin/Components/Newdetails/Addnew/Annualincomeadd';
import Educationadd from './Admin/Components/Newdetails/Addnew/Educationadd';
import Moonsignadd from './Admin/Components/Newdetails/Addnew/Moonsignadd';
import Mothertongueadd from './Admin/Components/Newdetails/Addnew/Mothertongueadd';
import Staradd from './Admin/Components/Newdetails/Addnew/Staradd';
import Addmember from './Admin/Components/Member/Addmember';
import Sitesettings from './Admin/Components/Sitesettings/Sitesettings';
import Signin from './Admin/Components/Regform/Signin';
import Member from './Admin/Components/Member/Member';
import Signup from './Admin/Components/Regform/Signup';
import Viewmember from './Admin/Components/Member/Viewmember'; 
import Paymentadd from './Admin/Components/Payment/Paymentadd';
import Banner from './Admin/Components/Dashboard/Banner';
import Aboutus from './Admin/Components/Content/Aboutus';
// import Dhome from './User/Components/Dhome'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        {/* <Route path="/Dhome" element={<Dhome />} /> */}
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Storiesadd" element={<Storiesadd />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/Religion" element={<Religion />} />
          <Route path="/Caste" element={<Caste />} />
          <Route path="/Occupation" element={<Occupation />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Mothertongue" element={<Mothertongue />} />
          <Route path="/Annualincome" element={<Annualincome />} />
          <Route path="/Star" element={<Star />} />
          <Route path="/Moonsign" element={<Moonsign />} />
          <Route path="/Religionadd" element={<Religionadd />} />
          <Route path="/Casteadd" element={<Casteadd />} />
          <Route path="/Occupationadd" element={<Occupationadd />} />
          <Route path="/Annualincomeadd" element={<Annualincomeadd />} /> 
          <Route path="/Educationadd" element={<Educationadd />} /> 
          <Route path="/Moonsignadd" element={<Moonsignadd />} /> 
          <Route path="/Mothertongueadd" element={<Mothertongueadd />} />  
          <Route path="/Staradd" element={<Staradd />} />
          <Route path="/Addmember" element={<Addmember />} />
          <Route path="/Sitesettings" element={<Sitesettings />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Member" element={<Member />} />
          <Route path="/Viewmember" element={<Viewmember />} />
          <Route path="/Paymentadd" element={<Paymentadd />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/Aboutus" element={<Aboutus />} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;
