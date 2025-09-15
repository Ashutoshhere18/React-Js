import React from 'react'
import {useLocation} from 'react-router'
export default function Productdetails() {
    const location=useLocation();
    const product=location.state;
  return (
     <div className="container mt-4">
      <div className="card shadow p-4">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="img-fluid mb-3"
          style={{ maxHeight: "400px", objectFit: "cover" }}
        />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4 className="fw-bold">₹{product.price}</h4>
      </div>
    </div>
  )
}
