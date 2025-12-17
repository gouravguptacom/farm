import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { axiosClient } from './utils/axiosClient'

const App = () => {

  const checkServerHealth = async () => {
    const response = await axiosClient.get("/health");
    const data = await response.data;
    console.log(data);
  };

  useEffect(() => {
    checkServerHealth();
  }, []);

  return (
    <>
      <Navbar />
      
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
        </Routes>

      <Footer />
    </>
  )
}

export default App