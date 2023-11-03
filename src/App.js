import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Homepage" element={<Homepage />}/>
        <Route path="/" element={<Navigate replace to="/Homepage" />} />
      </Routes>
    </Router>
  );
}

export default App;
