import React from 'react'
import {Routes,Route} from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Productdetails from './components/Productdetails'

export default function App() {
  return (

   <>
    <Navbar/>
   <Routes>
    
    <Route path='/' element={<Home />}/>
    <Route path='/About' element={<About/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Productdetails' element={<Productdetails/>}/>
   </Routes>
   </>

  )
}
