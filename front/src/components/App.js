import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home           from '../pages/Home.js'
import About          from '../pages/About.js'
import PageNotFound   from '../pages/PageNotFound.js'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/'     element={<Home />} />
        <Route path = 'about' element={<About />} />
        <Route path = '*'     element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

