import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Inicio from './pages/Start'

function App() {

  return (
    <Routes>
      <Route path="/" element={Inicio} />
      <Route path="/Explorar" element={Exploración} />
      <Route path="/Detalle/:id" element={Detalle} />
      <Route path="/Favoritos" element={Favoritos} />
      <Route path="/Contactanos" element={Contacto} />
      <Route path="*" element={ErrorNotFound} />
    </Routes>
  )
}

export default App
