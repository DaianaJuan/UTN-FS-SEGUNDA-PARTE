import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomeContactos, Chat } from './Pages'
import './global.css'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomeContactos/>}/>
        <Route path='/chat/:id' element={<Chat/>}/>
        <Route/>
      </Routes>
    </>
  )
}

export default App
