import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import './App.css'
import './server.js'
import Vans from './pages/Vans.jsx'
import VanDetail from './pages/VanDetail.jsx'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VANLIFE</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
