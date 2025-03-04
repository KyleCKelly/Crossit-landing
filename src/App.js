import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import CrossItLandingPage from './CrossItLandingPage';
import Animation from './Animation'; // Import the new animation component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/animation" />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/home" element={<CrossItLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
