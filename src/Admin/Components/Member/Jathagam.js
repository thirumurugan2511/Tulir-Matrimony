import React, { useState, useEffect } from 'react';

const Jathagam = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    user_id: "",
    thisaiirupu: "",
    year: "",
    month: "",
    days: "",
    rasi1: "",
    rasi2: "",
    rasi3: "",
    rasi4: "",
    rasi5: "",
    rasi6: "",
    rasi7: "",
    rasi8: "",
    rasi9: "",
    rasi10: "",
    rasi11: "",
    rasi12: "",
    amsam1: "",
    amsam2: "",
    amsam3: "",
    amsam4: "",
    amsam5: "",
    amsam6: "",
    amsam7: "",
    amsam8: "",
    amsam9: "",
    amsam10: "",
    amsam11: "",
    amsam12: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        //http://localhost:8000/data/memlist
        //https://tulirmatrimony.com/controlapi/customerlist.php
        const response = await fetch('https://tulirmatrimony.com/controlapi/customerlist.php');
        const result = await response.json();
        const latestId = result.body[result.body.length - 1].id;
        console.log(latestId)
        setData(latestId);
        setFormData({ ...formData, user_id: latestId });
        // console.log(data)
        console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
}, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        //https://tulirmatrimony.com/controlapi/addjathagam.php
        //http://localhost:8000/addjathagam
      const response = await fetch('https://tulirmatrimony.com/controlapi/addjathagam.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log(formData);
      
      if (response.ok) {
        // Handle success, maybe show a success message
        const responseData = await response.json();
        console.log('Jathagam added successfully!', responseData);
        window.location.href = '/Member';
      } else {
        // Handle error, maybe show an error message
        console.error('Failed to add Jathagam');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className='container mx-auto justify-content-center mt-5 mb-3 row'>
        <p className='mb-4'>ஜாதக கட்டம் : ஜாதக கட்டத்தை நிரப்ப கீழே உள்ள வார்த்தைகளை பயன்படுத்தவும்</p>
        <div className='row mb-1 justify-content-center'>
           <div className='col-lg-2'> <p>புதன் : pu</p> </div>
           <div className='col-lg-2'> <p>சூரியன் : sun</p></div>   
           <div className='col-lg-2'> <p>ராகு : rag</p></div>
           <div className='col-lg-2'> <p>வியாழன் : vij</p></div>
           <div className='col-lg-2'> <p>சுக்கிரன் : chk</p></div>
        </div>
        <div className='row mb-4 justify-content-center'>
         <div className='col-lg-2'> <p>சனி : sat</p> </div>
         <div className='col-lg-2'> <p>சந்திரன் : chan</p></div>    
         <div className='col-lg-2'> <p>கேது : kee</p></div>
         <div className='col-lg-2'> <p>செவ்வாய் : sev</p></div>
         <div className='col-lg-2'> <p>லக்கனம் : lac</p></div>
      </div>

        {/* Add your form fields here */}
        {/* For simplicity, I'm adding only one field. You can repeat this for other fields */}
        <form className='row' onSubmit={handleSubmit}>
          <div className='col-lg-3 d-flex mb-5 align-items-center'>
            <label className="form-label mb-0 me-2">திசை இருப்பு</label>
            <select
              id='thisaiirupu'
              name='thisaiirupu'
              className="form-select"
              value={formData.thisaiirupu}
              onChange={handleChange}
            >
              <option value="">Select your option</option>
              <option value="சூரியன்">சூரியன்</option>
              <option value="சந்திரன்">சந்திரன்</option>
              <option value="செவ்வாய்">செவ்வாய்</option>
              <option value="ராகு">ராகு</option>
              <option value="குரு">குரு</option>
              <option value="சனி">சனி</option>
              <option value="புதன்">புதன்</option>
              <option value="கேது">கேது</option>
              <option value="சுக்கிரன்">சுக்கிரன்</option>
            </select>
              
            {/* <input type="text" className="form-control" name="thisaiirupu" onChange={handleChange} /> */}
          </div>
          <div className='col-lg-3 d-flex mb-5 align-items-center'>
      <label class="form-label mb-0 me-2">ஆண்டு</label>
      <input type="text" class="form-control" name='year' onChange={handleChange} />
    </div>
    <div className='col-lg-3 d-flex mb-5 align-items-center'>
      <label class="form-label mb-0 me-2">மாதம்</label>
      <input type="text" class="form-control" name="month" onChange={handleChange} />
    </div>
    <div className='col-lg-3 d-flex mb-5 align-items-center'>
      <label class="form-label mb-0 me-2">நாள்</label>
      <input type="text" class="form-control" name="date" onChange={handleChange}/>
    </div>

    <div className=' col-lg-6'>
      <div class="form-row row mb-3">
        <div class="col">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi1' onChange={handleChange} />
        </div>
        <div class="col">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi2' onChange={handleChange}/>
        </div>
        <div class="col">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi3' onChange={handleChange}/>
        </div>
        <div class="col">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi4' onChange={handleChange}/>
        </div>
      </div>
      <div class="form-row justify-content-between row mb-3">
        <div class="col-lg-3">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi5' onChange={handleChange}/>
        </div>
        <div className='col-lg-6 align-items-center justify-content-center my-auto'><h3>ராசி</h3></div>
        <div class="col-lg-3">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi6' onChange={handleChange}/>
        </div>
      </div>

      <div class="form-row justify-content-between row mb-3">
        <div class="col-lg-3">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi7' onChange={handleChange}/>
        </div>
       
        <div class="col-lg-3">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi8' onChange={handleChange}/>
        </div>
        </div>
        <div class="form-row row mb-3">
        <div class="col">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi9' onChange={handleChange}/>
        </div>
        <div class="col">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi10' onChange={handleChange}/>
        </div>
        <div class="col">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi11' onChange={handleChange}/>
        </div>
        <div class="col">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='rasi12' onChange={handleChange}/>
        </div>
      </div>
     
      <div class="form-row">
      </div>
    </div>

    <div className=' col-lg-6'>
      <div class="form-row row mb-3">
        <div class="col">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam1' onChange={handleChange}/>
        </div>
        <div class="col">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam2' onChange={handleChange}/>
        </div>
        <div class="col">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam3' onChange={handleChange}/>
        </div>
        <div class="col">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam4' onChange={handleChange}/>
        </div>
      </div>
      <div class="form-row justify-content-between row mb-3">
        <div class="col-lg-3">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam5' onChange={handleChange}/>
        </div>
        <div className='col-lg-6 align-items-center justify-content-center my-auto'><h3>அம்சம்</h3></div>
        <div class="col-lg-3">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam6' onChange={handleChange}/>
        </div>
      </div>

      <div class="form-row justify-content-between row mb-3">
        <div class="col-lg-3">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam7' onChange={handleChange}/>
        </div>
       
        <div class="col-lg-3">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam8' onChange={handleChange}/>
        </div>
        </div>
        <div class="form-row row mb-3">
        <div class="col">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam9' onChange={handleChange}/>
        </div>
        <div class="col">
          <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam10' onChange={handleChange}/>
        </div>
        <div class="col">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam11' onChange={handleChange}/>
        </div>
        <div class="col">
       <input type="text" class="form-control border border-dark" style={{ height: '100px' }} name='amsam12' onChange={handleChange}/>
        </div>
      </div>
     
      <div class="form-row">
      </div>
    </div>
          {/* Repeat similar structure for other fields */}
          
          <div className='text-center'>
         
            <button type="submit" className='btn btn-success m-3'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Jathagam;
