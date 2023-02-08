import React from 'react';
import './App.css'
import Login from './assets/components/login/login'
import { Routes, Route } from 'react-router-dom';
import MainSection from './assets/components/main-section/mainSection';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/mainsection' element={<MainSection />} />
      </Routes>
    </>
  )
}

export default App
