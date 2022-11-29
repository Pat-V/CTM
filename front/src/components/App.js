import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<div><h1>Home page</h1></div>} />
        <Route path = 'login' element={<div><h1>login page</h1></div>} />
      </Routes>
    </Router>
  );
}
