import React from 'react';
import './App.css';
import Aside from './Admin/Components/Aside/Aside';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Aside" element={<Aside />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
