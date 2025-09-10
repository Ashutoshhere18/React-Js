import React from 'react'
import {Routes,Route} from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import LoginPage from './components/LoginPage'
export default function App() {
  return (
   <Routes>
    <Route path='/' element={<LoginPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
   </Routes>

  )
}
