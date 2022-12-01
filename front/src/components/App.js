import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SharedLayout from '../pages/SharedLayout'
import Home from '../pages/Home.js'
import About from '../pages/About.js'
import PageNotFound from '../pages/PageNotFound.js'
import LogOut from './LogOut.js';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<SharedLayout />}>
          <Route index  element={<Home />} />
          <Route path = 'about' element={<About />} />
          <Route path = 'logout' element={<LogOut />} />
          <Route path = '*' element={<PageNotFound />} />
        </Route>  
      </Routes>
      <footer className='footer'  > © 2022-?  -  CTM  -  contact: patrice.vitte@efrei.com </footer>
    </Router>
  );
}

