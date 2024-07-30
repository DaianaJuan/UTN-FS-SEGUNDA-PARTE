import React,  { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Mensajeria from './Pages/Mensajeria/Mensajeria'



function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mensajeria/:contactoID' element={<Mensajeria/>}/>
      </Routes>
      
    </>
  )
}

export default App
