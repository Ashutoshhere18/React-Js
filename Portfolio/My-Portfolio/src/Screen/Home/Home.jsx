import React, { useEffect, useState } from 'react'
import Navbar from '..//../Components/Navbar/Navbar'
import HomePage from '../../Components/HomePage/HomePage'
import About from '../../Components/About/About'
import axios from 'axios'
import Contact from '../../Components/Contact/contact'
export default function Home() {


const[GithubData,SetGithubData]=useState({});

const [Repos,Setrepos]=useState([]);
useEffect(()=>{
  FetchApi().then((data)=>SetGithubData(data));
  FetchRepos().then((data)=>Setrepos(data));
},[]);

const FetchApi=async()=>{
const res=  await axios.get("https://api.github.com/users/Ashutoshhere18");
 return res.data;
}
const FetchRepos=async()=>{
  const res=await axios.get("https://api.github.com/users/Ashutoshhere18/repos");
  return res.data;
}
  return (
    <div>
      <Navbar/>
      <HomePage Data={GithubData}/>
      <About Data={Repos}/>
      <Contact/>
    </div>
  )
}
