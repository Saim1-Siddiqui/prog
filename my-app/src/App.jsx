import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/home";
import Result from "./pages/result";
import BuyCredits from "./pages/Buycredits";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const App = () => {
  return(  
  <div className='min-h-screen  bg-slate-50'>
    <Navbar />
    
    <Routes>

    <Route path = '/' element={<Home/>} />
    <Route path = '/result' element={<Result/>} />
    <Route path = '/buy' element={<BuyCredits/>} />
    </Routes>

    <Footer/>

  
  </div>
  )
}

export default App 