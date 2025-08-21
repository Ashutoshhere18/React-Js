import React, { useEffect, useState } from 'react'
import Navbar from '..//../Components/Navbar/Navbar'
import HomePage from '../../Components/HomePage/HomePage'
import axios from 'axios'
export default function Home() {


const[GithubData,SetGithubData]=useState({});

useEffect(()=>{
  FetchApi().then((data)=>SetGithubData(data));
},[]);

const FetchApi=async()=>{
const res=  await axios.get("https://api.github.com/users/Ashutoshhere18");
 return res.data;
}

  return (
    <div>
      <Navbar/>
      <HomePage Data={GithubData}/>
    </div>
  )
}
