import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Filter from './components/Filter/filter'
import Home from './components/Home/Home'
import Filterbar from './components/FilterBar/Filterbar'


export default function App() {
  return (
    <>
    <Navbar/>
    <Filter/>
    <Home/>
    <Filterbar/>
    </>
  )
}
