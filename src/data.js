import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'


function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/data');
        const result = await response.json();
        console.log(result)
        setData(result.body);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);

  return (
    <div>
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Add more table headers if required */}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td><Link to={`/Edituser/${item.id}`} >Edit</Link></td>
              <td>Delete</td>
              {/* Add more table cells if required */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
