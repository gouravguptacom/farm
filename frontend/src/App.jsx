import React from 'react'
import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/Home'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

const App = () => {
  return (
    <>
      <h1>Header</h1>
      
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
        </Routes>

      <h1>Footer</h1>
    </>
  )
}

export default App