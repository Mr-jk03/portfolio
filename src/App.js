import React from 'react'
import './App.css'
import About from './component/About/About'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Onlineportfolio from './component/Onlineportfolio/Onlineportfolio';
import Education from './component/Education/Education'
import Experience from './component/Experience/Experience';
import Contact from './component/Contact/Contact';
import Project from './component/Project/Project';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path='/onlineportfolio' element={<Onlineportfolio/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/education' element={<Education />}/>
          <Route path='/experience' element={<Experience />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/project' element={<Project />}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
