import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";  
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

    </Routes>
    <Toaster/>
    </>

  );
} 

export default App
