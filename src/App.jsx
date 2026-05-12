import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Info from './components/Info'
import './App.css'

function App() {

  return <>
      <Navbar />
      <Info />
      <Home />
    </>
  
}

export default App
