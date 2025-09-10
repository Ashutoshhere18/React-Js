import React from 'react'
import {Link, useNavigate} from 'react-router'
export default function Home() {
    const navigate=useNavigate();
  return (
    <div>
      <nav>
        <Link to={"/Home"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
    </nav>
    
    </div>
  )
}
