import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stats from './Components/stats'
import CoinsTable from './Components/CoinsTable'


export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <Stats/>
     <CoinsTable/>
    </div>
  )
}

