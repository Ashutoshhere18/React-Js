import React, { useEffect, useState } from 'react'
import {Routes,Route} from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Productdetails from './components/Productdetails'
import Cart from './components/Cart'

export default function App() {
const[products,SetProducts]=useState([]);
const[cart,setcart]=useState([]);
 const ProductAPI=()=>{
  fetch("https://dummyjson.com/products")
  .then(res=>res.json())
  .then(data=>SetProducts(data.products))
  .catch(err=> alert("Error in API calling",err));
 }

 useEffect(()=>{
  ProductAPI();
 },[])
  return (

   <>
    <Navbar/>
   <Routes>
    
    <Route path='/' element={<Home products={products} cart={cart} setcart={setcart} />}/>
    <Route path='/About' element={<About/>} />
    <Route path='/Contact' element={<Contact/>} />
    <Route path='/Cart' element={<Cart cart={cart}  setcart={setcart}/>}/>
    <Route path='/Productdetails' element={<Productdetails/>}/>
   </Routes>
   </>

  )
}
