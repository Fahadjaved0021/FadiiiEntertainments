import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Compo/Navbar/Navbar'
import { Routes ,Route } from 'react-router-dom'
import Home from './Compo/Home/Home'
import Deals from './Compo/Deals/Deals'
import Promo from './Compo/Promo/Promo'
import Contact from './Compo/Contact/Contact'

function App() {
  

  return (
    <div className="App">
      
      <Navbar />

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
