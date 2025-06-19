// import { useState } from 'react'
// import './App.css'
// import {Routes, Route} from 'react-router-dom';
// import HomePage from './Components/HomePage';

// function App() {
  

//   return (
//     <>
//     <Routes>
//       <Route path='/' element={<HomePage/>}></Route>
//     </Routes>
    
//     </>
//   )
// }

// export default App

import { Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutUs from './Components/AboutUs';
import Projects from './Components/Projects';
import Equipment from './Components/Equipment';
import QualityControl from './Components/QualityControl';
import Clients from './Components/Clients';
import ContactUs from './Components/ContactUs';
import Header from './Components/Header';
import { AnimatePresence } from 'framer-motion';
// import Footer from './components/Footer';

export default function App() {
  return (
    
      <div className="font-sans">
        <Header />
        <AnimatePresence mode='wait'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
           <Route path="/projects" element={<Projects />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/quality-control" element={<QualityControl />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        </AnimatePresence>
        {/* <Footer /> */}
      </div>    
  );
}
