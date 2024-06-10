import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/navbar';
import Add from './component/Add';
import Update from './component/update';
import Home from './component/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='home' element={<Home/>} />
          <Route path='update' element={<Update/>} />
          <Route path="add" element={<Add />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
