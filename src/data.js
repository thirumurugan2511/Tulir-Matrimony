import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'


function Data() {
  const [time, setTime] = useState('');
    const [formattedTime, setFormattedTime] = useState('');

    const handleTimeChange = (e) => {
        setTime(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (time) {
            let [hours, minutes] = time.split(':');
            hours = parseInt(hours);
            let period = 'AM';

            if (hours >= 12) {
                period = 'PM';
                if (hours > 12) {
                    hours -= 12;
                }
            } else if (hours === 0) {
                hours = 12;
            }

            const formatted = `${hours}:${minutes} ${period}`;
            setFormattedTime(formatted);
        }
    };

  return (
    <div>
            <h1>Data Table</h1>
          
            
            <h2>Time Input</h2>
            <label htmlFor="timeinput">Time:</label><br/>
            <input 
                id="timeinput" 
                type="time" 
                value={time} 
                onChange={handleTimeChange} 
                required 
            /><br/><br/>
            
            <button type="submit" onClick={handleSubmit}>Submit</button>
            
            <div id="timeDisplay">
                {formattedTime && <p>Selected Time: {formattedTime}</p>}
            </div>
        </div>
  );
}

export default Data;
