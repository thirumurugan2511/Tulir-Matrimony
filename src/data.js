import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'


function Data() {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://tulirmatrimony.com/controlapi/listuser.php');
        const result = await response.json();
        console.log(result)
        setData(result.body);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    function onEditUser(user){

    }
  }, []);

  const deleteUser = (userId) => {
    fetch(`https://tulirmatrimony.com/controlapi/deleteuser.php?id=${userId}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        // Update the state to remove the deleted user
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      })
      .catch(error => console.error('Error deleting user:', error));
  };

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
              <td><Link to='#' onClick={() => deleteUser(item.id)} >Delete</Link></td>
              {/* Add more table cells if required */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
