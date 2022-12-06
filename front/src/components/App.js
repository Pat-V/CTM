import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SharedLayout from '../pages/SharedLayout'
import Login from '../pages/login.js'
import Trials from '../pages/Trials.js'
import Portfolio from '../pages/Portfolio';
import Physicians from '../pages/Physicians';
import Patients from '../pages/Patients';
import About from '../pages/About.js'
import LogOut from '../pages/LogOut.js';
import PageNotFound from '../pages/PageNotFound.js'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element={<SharedLayout />}>
          <Route index  element={<Login />} />
          <Route path = 'CT' element={<Trials />} />
          <Route path = 'Portfolio' element={<Portfolio />} />
          <Route path = 'Physicians' element={<Physicians />} />
          <Route path = 'Patients' element={<Patients />} />
          <Route path = 'about' element={<About />} />
          <Route path = 'logout' element={<LogOut />} />
          <Route path = '*' element={<PageNotFound />} />
        </Route>  
      </Routes>
      <footer className='footer'  > © 2022-?  -  CTM  -  contact: patrice.vitte@efrei.com </footer>
    </Router>
  );
}

