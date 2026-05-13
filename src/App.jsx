import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'
import Products from './components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return <>
    <BrowserRouter>

      <Navbar />

      <Routes>
        {/* Correzione 3: Usiamo Route e passiamo i componenti come tag JSX, utilizzando i nomi importati in alto */}
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<Info />} />
        <Route path="/prodotti" element={<Products />} />

        <Route path="/prodotto/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </>

}

export default App
