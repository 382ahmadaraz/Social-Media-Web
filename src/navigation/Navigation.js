import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"; 
import WhatWeDo from "../pages/whatWeDo/WhatWeDo";
import Pricing from "../pages/pricing/Pricing";
import Faq from "../pages/faq/Faq";
import Login from "../pages/login/Login";
import GetStarted from "../pages/getStarted/GetStarted";
import Account from "../pages/socialAccounts/Account";


export default function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/WhySocialMedia" element={<Home />} />
        <Route path="/whatWeDo" element={<WhatWeDo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faqs" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<GetStarted />} />
        <Route path="/socialAccounts" element={<Account />} />
    
      </Routes>
    </Router>
  );
}