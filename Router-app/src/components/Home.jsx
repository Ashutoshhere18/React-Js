import React from 'react'
import product from '../json/json'

export default function Home() {
  return (
    <div className="container mt-4">
      
      <div className="row">
        {product.map(item => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <img 
                src={item.thumbnail} 
                className="card-img-top" 
                alt={item.title} 
                style={{ height: "200px", objectFit: "cover" }} 
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">
                  {item.description.substring(0, 80)}...
                </p>
                <p className="fw-bold">₹{item.price}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}