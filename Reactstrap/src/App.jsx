import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Albums from './components/Albums'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Albums/>
    </>
  )
}

export default App
